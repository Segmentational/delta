import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS SSO Admin
*/
export interface SsoadminPermissionSetConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssoadmin_permission_set.html#description SsoadminPermissionSet#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssoadmin_permission_set.html#instance_arn SsoadminPermissionSet#instance_arn}
    */
    readonly instanceArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssoadmin_permission_set.html#name SsoadminPermissionSet#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssoadmin_permission_set.html#relay_state SsoadminPermissionSet#relay_state}
    */
    readonly relayState?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssoadmin_permission_set.html#session_duration SsoadminPermissionSet#session_duration}
    */
    readonly sessionDuration?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssoadmin_permission_set.html#tags SsoadminPermissionSet#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssoadmin_permission_set.html#tags_all SsoadminPermissionSet#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/ssoadmin_permission_set.html aws_ssoadmin_permission_set}
*/
export declare class SsoadminPermissionSet extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ssoadmin_permission_set.html aws_ssoadmin_permission_set} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SsoadminPermissionSetConfig
    */
    constructor(scope: Construct, id: string, config: SsoadminPermissionSetConfig);
    get arn(): string;
    get createdDate(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string;
    get id(): string;
    private _instanceArn?;
    get instanceArn(): string;
    set instanceArn(value: string);
    get instanceArnInput(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _relayState?;
    get relayState(): string;
    set relayState(value: string);
    resetRelayState(): void;
    get relayStateInput(): string;
    private _sessionDuration?;
    get sessionDuration(): string;
    set sessionDuration(value: string);
    resetSessionDuration(): void;
    get sessionDurationInput(): string;
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
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=ssoadmin-permission-set.d.ts.map