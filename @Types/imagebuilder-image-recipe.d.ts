import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Image Builder
*/
export interface ImagebuilderImageRecipeConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_recipe.html#description ImagebuilderImageRecipe#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_recipe.html#name ImagebuilderImageRecipe#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_recipe.html#parent_image ImagebuilderImageRecipe#parent_image}
    */
    readonly parentImage: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_recipe.html#tags ImagebuilderImageRecipe#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_recipe.html#tags_all ImagebuilderImageRecipe#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_recipe.html#version ImagebuilderImageRecipe#version}
    */
    readonly version: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_recipe.html#working_directory ImagebuilderImageRecipe#working_directory}
    */
    readonly workingDirectory?: string;
    /**
    * block_device_mapping block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_recipe.html#block_device_mapping ImagebuilderImageRecipe#block_device_mapping}
    */
    readonly blockDeviceMapping?: ImagebuilderImageRecipeBlockDeviceMapping[];
    /**
    * component block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_recipe.html#component ImagebuilderImageRecipe#component}
    */
    readonly component: ImagebuilderImageRecipeComponent[];
}
export interface ImagebuilderImageRecipeBlockDeviceMappingEbs {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_recipe.html#delete_on_termination ImagebuilderImageRecipe#delete_on_termination}
    */
    readonly deleteOnTermination?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_recipe.html#encrypted ImagebuilderImageRecipe#encrypted}
    */
    readonly encrypted?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_recipe.html#iops ImagebuilderImageRecipe#iops}
    */
    readonly iops?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_recipe.html#kms_key_id ImagebuilderImageRecipe#kms_key_id}
    */
    readonly kmsKeyId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_recipe.html#snapshot_id ImagebuilderImageRecipe#snapshot_id}
    */
    readonly snapshotId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_recipe.html#volume_size ImagebuilderImageRecipe#volume_size}
    */
    readonly volumeSize?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_recipe.html#volume_type ImagebuilderImageRecipe#volume_type}
    */
    readonly volumeType?: string;
}
export declare function imagebuilderImageRecipeBlockDeviceMappingEbsToTerraform(struct?: ImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference | ImagebuilderImageRecipeBlockDeviceMappingEbs): any;
export declare class ImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): ImagebuilderImageRecipeBlockDeviceMappingEbs | undefined;
    set internalValue(value: ImagebuilderImageRecipeBlockDeviceMappingEbs | undefined);
    private _deleteOnTermination?;
    get deleteOnTermination(): string;
    set deleteOnTermination(value: string);
    resetDeleteOnTermination(): void;
    get deleteOnTerminationInput(): string;
    private _encrypted?;
    get encrypted(): string;
    set encrypted(value: string);
    resetEncrypted(): void;
    get encryptedInput(): string;
    private _iops?;
    get iops(): number;
    set iops(value: number);
    resetIops(): void;
    get iopsInput(): number;
    private _kmsKeyId?;
    get kmsKeyId(): string;
    set kmsKeyId(value: string);
    resetKmsKeyId(): void;
    get kmsKeyIdInput(): string;
    private _snapshotId?;
    get snapshotId(): string;
    set snapshotId(value: string);
    resetSnapshotId(): void;
    get snapshotIdInput(): string;
    private _volumeSize?;
    get volumeSize(): number;
    set volumeSize(value: number);
    resetVolumeSize(): void;
    get volumeSizeInput(): number;
    private _volumeType?;
    get volumeType(): string;
    set volumeType(value: string);
    resetVolumeType(): void;
    get volumeTypeInput(): string;
}
export interface ImagebuilderImageRecipeBlockDeviceMapping {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_recipe.html#device_name ImagebuilderImageRecipe#device_name}
    */
    readonly deviceName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_recipe.html#no_device ImagebuilderImageRecipe#no_device}
    */
    readonly noDevice?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_recipe.html#virtual_name ImagebuilderImageRecipe#virtual_name}
    */
    readonly virtualName?: string;
    /**
    * ebs block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_recipe.html#ebs ImagebuilderImageRecipe#ebs}
    */
    readonly ebs?: ImagebuilderImageRecipeBlockDeviceMappingEbs;
}
export declare function imagebuilderImageRecipeBlockDeviceMappingToTerraform(struct?: ImagebuilderImageRecipeBlockDeviceMapping): any;
export interface ImagebuilderImageRecipeComponent {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_recipe.html#component_arn ImagebuilderImageRecipe#component_arn}
    */
    readonly componentArn: string;
}
export declare function imagebuilderImageRecipeComponentToTerraform(struct?: ImagebuilderImageRecipeComponent): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_recipe.html aws_imagebuilder_image_recipe}
*/
export declare class ImagebuilderImageRecipe extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_image_recipe.html aws_imagebuilder_image_recipe} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ImagebuilderImageRecipeConfig
    */
    constructor(scope: Construct, id: string, config: ImagebuilderImageRecipeConfig);
    get arn(): string;
    get dateCreated(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string;
    get id(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    get owner(): string;
    private _parentImage?;
    get parentImage(): string;
    set parentImage(value: string);
    get parentImageInput(): string;
    get platform(): string;
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
    private _tagsAll?;
    get tagsAll(): {
        [key: string]: string;
    } | cdktf.IResolvable;
    set tagsAll(value: {
        [key: string]: string;
    } | cdktf.IResolvable);
    resetTagsAll(): void;
    get tagsAllInput(): cdktf.IResolvable | {
        [key: string]: string;
    };
    private _version?;
    get version(): string;
    set version(value: string);
    get versionInput(): string;
    private _workingDirectory?;
    get workingDirectory(): string;
    set workingDirectory(value: string);
    resetWorkingDirectory(): void;
    get workingDirectoryInput(): string;
    private _blockDeviceMapping?;
    get blockDeviceMapping(): ImagebuilderImageRecipeBlockDeviceMapping[];
    set blockDeviceMapping(value: ImagebuilderImageRecipeBlockDeviceMapping[]);
    resetBlockDeviceMapping(): void;
    get blockDeviceMappingInput(): ImagebuilderImageRecipeBlockDeviceMapping[];
    private _component?;
    get component(): ImagebuilderImageRecipeComponent[];
    set component(value: ImagebuilderImageRecipeComponent[]);
    get componentInput(): ImagebuilderImageRecipeComponent[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=imagebuilder-image-recipe.d.ts.map