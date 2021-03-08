#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { AwsCdkEcsStack } from '../lib/aws-cdk-ecs-stack';
import { NetworkStack } from '../lib/network-stack';
import { SgStack } from '../lib/sg-stack';

const app = new cdk.App();

new AwsCdkEcsStack(app, 'AwsCdkEcsStack');

const networkStack = new NetworkStack(app, 'NetworkStack');
new SgStack(app, 'SgStack', {
  vpc: networkStack.vpc
});
