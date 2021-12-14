import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* Amazon Certificate Manager
*/
export interface AcmCertificateValidationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate_validation.html#certificate_arn AcmCertificateValidation#certificate_arn}
    */
    readonly certificateArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate_validation.html#validation_record_fqdns AcmCertificateValidation#validation_record_fqdns}
    */
    readonly validationRecordFqdns?: string[];
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate_validation.html#timeouts AcmCertificateValidation#timeouts}
    */
    readonly timeouts?: AcmCertificateValidationTimeouts;
}
export interface AcmCertificateValidationTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate_validation.html#create AcmCertificateValidation#create}
    */
    readonly create?: string;
}
export declare function acmCertificateValidationTimeoutsToTerraform(struct?: AcmCertificateValidationTimeoutsOutputReference | AcmCertificateValidationTimeouts): any;
export declare class AcmCertificateValidationTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): AcmCertificateValidationTimeouts | undefined;
    set internalValue(value: AcmCertificateValidationTimeouts | undefined);
    private _create?;
    get create(): string;
    set create(value: string);
    resetCreate(): void;
    get createInput(): string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate_validation.html aws_acm_certificate_validation}
*/
export declare class AcmCertificateValidation extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate_validation.html aws_acm_certificate_validation} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AcmCertificateValidationConfig
    */
    constructor(scope: Construct, id: string, config: AcmCertificateValidationConfig);
    private _certificateArn?;
    get certificateArn(): string;
    set certificateArn(value: string);
    get certificateArnInput(): string;
    get id(): string;
    private _validationRecordFqdns?;
    get validationRecordFqdns(): string[];
    set validationRecordFqdns(value: string[]);
    resetValidationRecordFqdns(): void;
    get validationRecordFqdnsInput(): string[];
    private _timeouts;
    get timeouts(): AcmCertificateValidationTimeoutsOutputReference;
    putTimeouts(value: AcmCertificateValidationTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): AcmCertificateValidationTimeouts;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=acm-certificate-validation.d.ts.map