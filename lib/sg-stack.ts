import { Construct, Stack, StackProps, Tags } from '@aws-cdk/core';
import { IVpc, Peer, Port, SecurityGroup } from '@aws-cdk/aws-ec2';

interface SgStackProps extends StackProps {
  vpc: IVpc
}

export class SgStack extends Stack {

  public readonly bastionSg: SecurityGroup;
  public readonly albSg: SecurityGroup;
  public readonly webSg: SecurityGroup;
  public readonly rdsSg: SecurityGroup;

  constructor(scope: Construct, id: string, props: SgStackProps) {
    super(scope, id, props);

    this.bastionSg = new SecurityGroup(this, 'BastionSg', {
      vpc: props.vpc,
    });
    Tags.of(this.bastionSg).add('Name', this.bastionSg.node.path);

    this.albSg = new SecurityGroup(this, 'AlbSg', {
      vpc: props.vpc,
    });
    Tags.of(this.albSg).add('Name', this.albSg.node.path);
    this.albSg.addIngressRule(Peer.anyIpv4(), Port.tcp(80));
    this.albSg.addIngressRule(Peer.anyIpv4(), Port.tcp(443));

    this.webSg = new SecurityGroup(this, 'WebSg', {
      vpc: props.vpc,
    });
    Tags.of(this.webSg).add('Name', this.webSg.node.path);
    this.webSg.addIngressRule(this.albSg, Port.tcp(80));

    this.rdsSg = new SecurityGroup(this, 'RdsSg', {
      vpc: props.vpc,
    });
    Tags.of(this.rdsSg).add('Name', this.rdsSg.node.path);
    this.rdsSg.addIngressRule(this.bastionSg, Port.tcp(3306));
    this.rdsSg.addIngressRule(this.webSg, Port.tcp(3306));
  }
}
