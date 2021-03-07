#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { AwsCdkEcsStack } from '../lib/aws-cdk-ecs-stack';

const app = new cdk.App();
new AwsCdkEcsStack(app, 'AwsCdkEcsStack');
