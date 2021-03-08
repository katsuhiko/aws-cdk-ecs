#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { AwsCdkEcsStack } from '../lib/aws-cdk-ecs-stack';
import { NetworkStack } from '../lib/network-stack';

const app = new cdk.App();

new AwsCdkEcsStack(app, 'AwsCdkEcsStack');
new NetworkStack(app, 'NetworkStack', {
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEFAULT_REGION,
  }
});
