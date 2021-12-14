import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Systems Manager
*/
export interface SsmResourceDataSyncConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_resource_data_sync.html#name SsmResourceDataSync#name}
    */
    readonly name: string;
    /**
    * s3_destination block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_resource_data_sync.html#s3_destination SsmResourceDataSync#s3_destination}
    */
    readonly s3Destination: SsmResourceDataSyncS3Destination;
}
export interface SsmResourceDataSyncS3Destination {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_resource_data_sync.html#bucket_name SsmResourceDataSync#bucket_name}
    */
    readonly bucketName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_resource_data_sync.html#kms_key_arn SsmResourceDataSync#kms_key_arn}
    */
    readonly kmsKeyArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_resource_data_sync.html#prefix SsmResourceDataSync#prefix}
    */
    readonly prefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_resource_data_sync.html#region SsmResourceDataSync#region}
    */
    readonly region: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_resource_data_sync.html#sync_format SsmResourceDataSync#sync_format}
    */
    readonly syncFormat?: string;
}
export declare function ssmResourceDataSyncS3DestinationToTerraform(struct?: SsmResourceDataSyncS3DestinationOutputReference | SsmResourceDataSyncS3Destination): any;
export declare class SsmResourceDataSyncS3DestinationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): SsmResourceDataSyncS3Destination | undefined;
    set internalValue(value: SsmResourceDataSyncS3Destination | undefined);
    private _bucketName?;
    get bucketName(): string;
    set bucketName(value: string);
    get bucketNameInput(): string;
    private _kmsKeyArn?;
    get kmsKeyArn(): string;
    set kmsKeyArn(value: string);
    resetKmsKeyArn(): void;
    get kmsKeyArnInput(): string;
    private _prefix?;
    get prefix(): string;
    set prefix(value: string);
    resetPrefix(): void;
    get prefixInput(): string;
    private _region?;
    get region(): string;
    set region(value: string);
    get regionInput(): string;
    private _syncFormat?;
    get syncFormat(): string;
    set syncFormat(value: string);
    resetSyncFormat(): void;
    get syncFormatInput(): string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/ssm_resource_data_sync.html aws_ssm_resource_data_sync}
*/
export declare class SsmResourceDataSync extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ssm_resource_data_sync.html aws_ssm_resource_data_sync} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SsmResourceDataSyncConfig
    */
    constructor(scope: Construct, id: string, config: SsmResourceDataSyncConfig);
    get id(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _s3Destination;
    get s3Destination(): SsmResourceDataSyncS3DestinationOutputReference;
    putS3Destination(value: SsmResourceDataSyncS3Destination): void;
    get s3DestinationInput(): SsmResourceDataSyncS3Destination;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=ssm-resource-data-sync.d.ts.map