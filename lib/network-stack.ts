import { Construct, Stack, StackProps } from '@aws-cdk/core';
import { SubnetType, Vpc } from '@aws-cdk/aws-ec2';

export class NetworkStack extends Stack {

  public readonly vpc: Vpc

  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    this.vpc = new Vpc(this, 'VPC', {
      maxAzs: 2,
      subnetConfiguration: [
        { name: 'Frontend', subnetType: SubnetType.PUBLIC, cidrMask: 24 },
        { name: 'Application', subnetType: SubnetType.PUBLIC, cidrMask: 24 },
        { name: 'Datastore', subnetType: SubnetType.ISOLATED, cidrMask: 24 },
      ],
    });
  }
}
