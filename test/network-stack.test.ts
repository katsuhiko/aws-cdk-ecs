import { App } from '@aws-cdk/core';
import { SynthUtils } from '@aws-cdk/assert';
import { NetworkStack } from '../lib/network-stack';

test('Network Stack', () => {
  const app = new App();
  const stack = new NetworkStack(app, 'TestStack');

  expect(SynthUtils.toCloudFormation(stack)).toMatchSnapshot();
});
