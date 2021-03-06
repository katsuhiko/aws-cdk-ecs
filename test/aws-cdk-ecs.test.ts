import { App } from '@aws-cdk/core';
import { SynthUtils } from '@aws-cdk/assert';
import * as AwsCdkEcs from '../lib/aws-cdk-ecs-stack';

test('Empty Stack', () => {
  const app = new App();
  const stack = new AwsCdkEcs.AwsCdkEcsStack(app, 'TestStack');

  expect(SynthUtils.toCloudFormation(stack)).toMatchSnapshot();
});
