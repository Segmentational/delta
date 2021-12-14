import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Simple Storage Service
*/
export interface DataAwsS3BucketConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/s3_bucket.html#bucket DataAwsS3Bucket#bucket}
    */
    readonly bucket: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/s3_bucket.html aws_s3_bucket}
*/
export declare class DataAwsS3Bucket extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/s3_bucket.html aws_s3_bucket} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsS3BucketConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsS3BucketConfig);
    get arn(): string;
    private _bucket?;
    get bucket(): string;
    set bucket(value: string);
    get bucketInput(): string;
    get bucketDomainName(): string;
    get bucketRegionalDomainName(): string;
    get hostedZoneId(): string;
    get id(): string;
    get region(): string;
    get websiteDomain(): string;
    get websiteEndpoint(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=data-aws-s3-bucket.d.ts.map