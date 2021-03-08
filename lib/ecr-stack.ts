import { Construct, Stack, StackProps } from '@aws-cdk/core';
import { Repository } from '@aws-cdk/aws-ecr';

export class EcrStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    new Repository(this, 'WebRepo', {
      repositoryName: 'demo-cdk-web',
      imageScanOnPush: true,
      lifecycleRules: [
        { description: 'Delete old images', maxImageCount: 5 },
      ],
    });

    new Repository(this, 'AppRepo', {
      repositoryName: 'demo-cdk-app',
      imageScanOnPush: true,
      lifecycleRules: [
        { description: 'Delete old images', maxImageCount: 5 },
      ],
    });
  }
}
