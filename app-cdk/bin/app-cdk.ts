import * as cdk from 'aws-cdk-lib';
import { MyPipelineStack } from '../lib/pipeline-cdk-stack';
import { EcrCdkStack } from '../lib/ecr-cdk-stack';

const app = new cdk.App();

const ecrCdkStack = new EcrCdkStack(app, 'ecr-stack', {});

new MyPipelineStack(app, 'MyPipelineStack', {
    ecrRepository: ecrCdkStack.repository,
});
