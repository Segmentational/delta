import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Systems Manager
*/
export interface DataAwsSsmDocumentConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ssm_document.html#document_format DataAwsSsmDocument#document_format}
    */
    readonly documentFormat?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ssm_document.html#document_version DataAwsSsmDocument#document_version}
    */
    readonly documentVersion?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ssm_document.html#name DataAwsSsmDocument#name}
    */
    readonly name: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/ssm_document.html aws_ssm_document}
*/
export declare class DataAwsSsmDocument extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/ssm_document.html aws_ssm_document} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsSsmDocumentConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsSsmDocumentConfig);
    get arn(): string;
    get content(): string;
    private _documentFormat?;
    get documentFormat(): string;
    set documentFormat(value: string);
    resetDocumentFormat(): void;
    get documentFormatInput(): string;
    get documentType(): string;
    private _documentVersion?;
    get documentVersion(): string;
    set documentVersion(value: string);
    resetDocumentVersion(): void;
    get documentVersionInput(): string;
    get id(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=data-aws-ssm-document.d.ts.map