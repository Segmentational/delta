import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Identity and Access Management
*/
export interface IamAccessKeyConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_access_key.html#pgp_key IamAccessKey#pgp_key}
    */
    readonly pgpKey?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_access_key.html#status IamAccessKey#status}
    */
    readonly status?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_access_key.html#user IamAccessKey#user}
    */
    readonly user: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/iam_access_key.html aws_iam_access_key}
*/
export declare class IamAccessKey extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/iam_access_key.html aws_iam_access_key} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options IamAccessKeyConfig
    */
    constructor(scope: Construct, id: string, config: IamAccessKeyConfig);
    get createDate(): string;
    get encryptedSecret(): string;
    get encryptedSesSmtpPasswordV4(): string;
    get id(): string;
    get keyFingerprint(): string;
    private _pgpKey?;
    get pgpKey(): string;
    set pgpKey(value: string);
    resetPgpKey(): void;
    get pgpKeyInput(): string;
    get secret(): string;
    get sesSmtpPasswordV4(): string;
    private _status?;
    get status(): string;
    set status(value: string);
    resetStatus(): void;
    get statusInput(): string;
    private _user?;
    get user(): string;
    set user(value: string);
    get userInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=iam-access-key.d.ts.map