import { App } from '@aws-cdk/core';
import { SynthUtils } from '@aws-cdk/assert';
import { EcrStack } from '../lib/ecr-stack';

test('ECR Stack', () => {
  const app = new App();
  const stack = new EcrStack(app, 'TestStack');

  expect(SynthUtils.toCloudFormation(stack)).toMatchSnapshot();
});
