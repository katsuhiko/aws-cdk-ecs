# Welcome to your CDK TypeScript project!

This is a blank project for TypeScript development with CDK.

The `cdk.json` file tells the CDK Toolkit how to execute your app.

## Useful commands

 * `npm run build`   compile typescript to js
 * `npm run watch`   watch for changes and compile
 * `npm run test`    perform the jest unit tests
 * `cdk deploy`      deploy this stack to your default AWS account/region
 * `cdk diff`        compare deployed stack with current state
 * `cdk synth`       emits the synthesized CloudFormation template

----

CDK で環境を構築するリージョンに対して最初の一回のみ実行する必要がある。

```
cdk bootstrap
```

typescript のバージョン確認方法

```
npm ls typescript
もしくは
./node_modules/typescript/bin/tsc --version
```

----

## テスト

```
npm test
```

スナップショットを更新する場合

```
npm test -- -u
```

----

参考サイト

- https://dev.classmethod.jp/articles/aws-cdk-command-line-interface/
    - https://github.com/cm-wada-yusuke/eval-cdk
- https://dev.classmethod.jp/articles/aws-cdk-ec2-web3tier/
    - https://github.com/intercept6/aws-cdk-ec2_web3tier
- https://docs.aws.amazon.com/cdk/api/latest/docs/aws-construct-library.html
- https://github.com/aws-samples/aws-cdk-examples
