import * as cdk from 'aws-cdk-lib';
import { MyPipelineStack } from '../lib/pipeline-cdk-stack';

const app = new cdk.App();
new MyPipelineStack(app, 'MyPipelineStack');