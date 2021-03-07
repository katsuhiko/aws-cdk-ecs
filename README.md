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
