import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Lambda
*/
export interface DataAwsLambdaFunctionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lambda_function.html#function_name DataAwsLambdaFunction#function_name}
    */
    readonly functionName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lambda_function.html#qualifier DataAwsLambdaFunction#qualifier}
    */
    readonly qualifier?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lambda_function.html#tags DataAwsLambdaFunction#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
}
export declare class DataAwsLambdaFunctionDeadLetterConfig extends cdktf.ComplexComputedList {
    get targetArn(): string;
}
export declare class DataAwsLambdaFunctionEnvironment extends cdktf.ComplexComputedList {
    get variables(): any;
}
export declare class DataAwsLambdaFunctionFileSystemConfig extends cdktf.ComplexComputedList {
    get arn(): string;
    get localMountPath(): string;
}
export declare class DataAwsLambdaFunctionTracingConfig extends cdktf.ComplexComputedList {
    get mode(): string;
}
export declare class DataAwsLambdaFunctionVpcConfig extends cdktf.ComplexComputedList {
    get securityGroupIds(): string[];
    get subnetIds(): string[];
    get vpcId(): string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/lambda_function.html aws_lambda_function}
*/
export declare class DataAwsLambdaFunction extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/lambda_function.html aws_lambda_function} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsLambdaFunctionConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsLambdaFunctionConfig);
    get architectures(): string[];
    get arn(): string;
    get codeSigningConfigArn(): string;
    deadLetterConfig(index: string): DataAwsLambdaFunctionDeadLetterConfig;
    get description(): string;
    environment(index: string): DataAwsLambdaFunctionEnvironment;
    fileSystemConfig(index: string): DataAwsLambdaFunctionFileSystemConfig;
    private _functionName?;
    get functionName(): string;
    set functionName(value: string);
    get functionNameInput(): string;
    get handler(): string;
    get id(): string;
    get imageUri(): string;
    get invokeArn(): string;
    get kmsKeyArn(): string;
    get lastModified(): string;
    get layers(): string[];
    get memorySize(): number;
    get qualifiedArn(): string;
    private _qualifier?;
    get qualifier(): string;
    set qualifier(value: string);
    resetQualifier(): void;
    get qualifierInput(): string;
    get reservedConcurrentExecutions(): number;
    get role(): string;
    get runtime(): string;
    get signingJobArn(): string;
    get signingProfileVersionArn(): string;
    get sourceCodeHash(): string;
    get sourceCodeSize(): number;
    private _tags?;
    get tags(): {
        [key: string]: string;
    } | cdktf.IResolvable;
    set tags(value: {
        [key: string]: string;
    } | cdktf.IResolvable);
    resetTags(): void;
    get tagsInput(): cdktf.IResolvable | {
        [key: string]: string;
    };
    get timeout(): number;
    tracingConfig(index: string): DataAwsLambdaFunctionTracingConfig;
    get version(): string;
    vpcConfig(index: string): DataAwsLambdaFunctionVpcConfig;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=data-aws-lambda-function.d.ts.map