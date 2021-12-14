import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Batch
*/
export interface DataAwsBatchJobQueueConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/batch_job_queue.html#name DataAwsBatchJobQueue#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/batch_job_queue.html#tags DataAwsBatchJobQueue#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
}
export declare class DataAwsBatchJobQueueComputeEnvironmentOrder extends cdktf.ComplexComputedList {
    get computeEnvironment(): string;
    get order(): number;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/batch_job_queue.html aws_batch_job_queue}
*/
export declare class DataAwsBatchJobQueue extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/batch_job_queue.html aws_batch_job_queue} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsBatchJobQueueConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsBatchJobQueueConfig);
    get arn(): string;
    computeEnvironmentOrder(index: string): DataAwsBatchJobQueueComputeEnvironmentOrder;
    get id(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    get priority(): number;
    get state(): string;
    get status(): string;
    get statusReason(): string;
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
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=data-aws-batch-job-queue.d.ts.map