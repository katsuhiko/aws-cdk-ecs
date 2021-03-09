import { App, Stack } from '@aws-cdk/core';
import { SynthUtils } from '@aws-cdk/assert';
import { Vpc } from '@aws-cdk/aws-ec2';
import { SgStack } from '../lib/sg-stack';

test('SG Stack', () => {
  const app = new App();

  const givenStack = new Stack(app, "GivenStack");
  const vpc = new Vpc(givenStack, 'TestVPC');

  const stack = new SgStack(app, 'TestStack', {
    vpc: vpc
  });

  expect(SynthUtils.toCloudFormation(stack)).toMatchSnapshot();
});
