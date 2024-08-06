import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { AppCdkStack } from '../lib/app-cdk-stack';
import { MyPipelineStack } from '../lib/pipeline-cdk-stack';
import { EcrCdkStack } from '../lib/ecr-cdk-stack';

const app = new cdk.App();

const ecrCdkStack = new EcrCdkStack(app, 'ecr-stack', {});

const testCdkStack = new AppCdkStack(app, 'test', {
  ecrRepository: ecrCdkStack.repository,
});

const prodCdkStack = new AppCdkStack(app, 'prod', {
  ecrRepository: ecrCdkStack.repository,
});

const pipelineCdkStack = new MyPipelineStack(app, 'MyPipelineStack', {
  ecrRepository: ecrCdkStack.repository,
  fargateServiceTest: testCdkStack.fargateService,
  fargateServiceProd: prodCdkStack.fargateService,
});
