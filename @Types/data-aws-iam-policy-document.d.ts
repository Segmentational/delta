import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Identity and Access Management
*/
export interface DataAwsIamPolicyDocumentConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_policy_document.html#override_json DataAwsIamPolicyDocument#override_json}
    */
    readonly overrideJson?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_policy_document.html#override_policy_documents DataAwsIamPolicyDocument#override_policy_documents}
    */
    readonly overridePolicyDocuments?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_policy_document.html#policy_id DataAwsIamPolicyDocument#policy_id}
    */
    readonly policyId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_policy_document.html#source_json DataAwsIamPolicyDocument#source_json}
    */
    readonly sourceJson?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_policy_document.html#source_policy_documents DataAwsIamPolicyDocument#source_policy_documents}
    */
    readonly sourcePolicyDocuments?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_policy_document.html#version DataAwsIamPolicyDocument#version}
    */
    readonly version?: string;
    /**
    * statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_policy_document.html#statement DataAwsIamPolicyDocument#statement}
    */
    readonly statement?: DataAwsIamPolicyDocumentStatement[];
}
export interface DataAwsIamPolicyDocumentStatementCondition {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_policy_document.html#test DataAwsIamPolicyDocument#test}
    */
    readonly test: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_policy_document.html#values DataAwsIamPolicyDocument#values}
    */
    readonly values: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_policy_document.html#variable DataAwsIamPolicyDocument#variable}
    */
    readonly variable: string;
}
export declare function dataAwsIamPolicyDocumentStatementConditionToTerraform(struct?: DataAwsIamPolicyDocumentStatementCondition): any;
export interface DataAwsIamPolicyDocumentStatementNotPrincipals {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_policy_document.html#identifiers DataAwsIamPolicyDocument#identifiers}
    */
    readonly identifiers: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_policy_document.html#type DataAwsIamPolicyDocument#type}
    */
    readonly type: string;
}
export declare function dataAwsIamPolicyDocumentStatementNotPrincipalsToTerraform(struct?: DataAwsIamPolicyDocumentStatementNotPrincipals): any;
export interface DataAwsIamPolicyDocumentStatementPrincipals {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_policy_document.html#identifiers DataAwsIamPolicyDocument#identifiers}
    */
    readonly identifiers: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_policy_document.html#type DataAwsIamPolicyDocument#type}
    */
    readonly type: string;
}
export declare function dataAwsIamPolicyDocumentStatementPrincipalsToTerraform(struct?: DataAwsIamPolicyDocumentStatementPrincipals): any;
export interface DataAwsIamPolicyDocumentStatement {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_policy_document.html#actions DataAwsIamPolicyDocument#actions}
    */
    readonly actions?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_policy_document.html#effect DataAwsIamPolicyDocument#effect}
    */
    readonly effect?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_policy_document.html#not_actions DataAwsIamPolicyDocument#not_actions}
    */
    readonly notActions?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_policy_document.html#not_resources DataAwsIamPolicyDocument#not_resources}
    */
    readonly notResources?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_policy_document.html#resources DataAwsIamPolicyDocument#resources}
    */
    readonly resources?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_policy_document.html#sid DataAwsIamPolicyDocument#sid}
    */
    readonly sid?: string;
    /**
    * condition block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_policy_document.html#condition DataAwsIamPolicyDocument#condition}
    */
    readonly condition?: DataAwsIamPolicyDocumentStatementCondition[];
    /**
    * not_principals block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_policy_document.html#not_principals DataAwsIamPolicyDocument#not_principals}
    */
    readonly notPrincipals?: DataAwsIamPolicyDocumentStatementNotPrincipals[];
    /**
    * principals block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_policy_document.html#principals DataAwsIamPolicyDocument#principals}
    */
    readonly principals?: DataAwsIamPolicyDocumentStatementPrincipals[];
}
export declare function dataAwsIamPolicyDocumentStatementToTerraform(struct?: DataAwsIamPolicyDocumentStatement): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/iam_policy_document.html aws_iam_policy_document}
*/
export declare class DataAwsIamPolicyDocument extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/iam_policy_document.html aws_iam_policy_document} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsIamPolicyDocumentConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsIamPolicyDocumentConfig);
    get id(): string;
    get json(): string;
    private _overrideJson?;
    get overrideJson(): string;
    set overrideJson(value: string);
    resetOverrideJson(): void;
    get overrideJsonInput(): string;
    private _overridePolicyDocuments?;
    get overridePolicyDocuments(): string[];
    set overridePolicyDocuments(value: string[]);
    resetOverridePolicyDocuments(): void;
    get overridePolicyDocumentsInput(): string[];
    private _policyId?;
    get policyId(): string;
    set policyId(value: string);
    resetPolicyId(): void;
    get policyIdInput(): string;
    private _sourceJson?;
    get sourceJson(): string;
    set sourceJson(value: string);
    resetSourceJson(): void;
    get sourceJsonInput(): string;
    private _sourcePolicyDocuments?;
    get sourcePolicyDocuments(): string[];
    set sourcePolicyDocuments(value: string[]);
    resetSourcePolicyDocuments(): void;
    get sourcePolicyDocumentsInput(): string[];
    private _version?;
    get version(): string;
    set version(value: string);
    resetVersion(): void;
    get versionInput(): string;
    private _statement?;
    get statement(): DataAwsIamPolicyDocumentStatement[];
    set statement(value: DataAwsIamPolicyDocumentStatement[]);
    resetStatement(): void;
    get statementInput(): DataAwsIamPolicyDocumentStatement[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=data-aws-iam-policy-document.d.ts.map