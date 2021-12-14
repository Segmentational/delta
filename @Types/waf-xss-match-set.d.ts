import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS WAF
*/
export interface WafXssMatchSetConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_xss_match_set.html#name WafXssMatchSet#name}
    */
    readonly name: string;
    /**
    * xss_match_tuples block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_xss_match_set.html#xss_match_tuples WafXssMatchSet#xss_match_tuples}
    */
    readonly xssMatchTuples?: WafXssMatchSetXssMatchTuples[];
}
export interface WafXssMatchSetXssMatchTuplesFieldToMatch {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_xss_match_set.html#data WafXssMatchSet#data}
    */
    readonly data?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_xss_match_set.html#type WafXssMatchSet#type}
    */
    readonly type: string;
}
export declare function wafXssMatchSetXssMatchTuplesFieldToMatchToTerraform(struct?: WafXssMatchSetXssMatchTuplesFieldToMatchOutputReference | WafXssMatchSetXssMatchTuplesFieldToMatch): any;
export declare class WafXssMatchSetXssMatchTuplesFieldToMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): WafXssMatchSetXssMatchTuplesFieldToMatch | undefined;
    set internalValue(value: WafXssMatchSetXssMatchTuplesFieldToMatch | undefined);
    private _data?;
    get data(): string;
    set data(value: string);
    resetData(): void;
    get dataInput(): string;
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string;
}
export interface WafXssMatchSetXssMatchTuples {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_xss_match_set.html#text_transformation WafXssMatchSet#text_transformation}
    */
    readonly textTransformation: string;
    /**
    * field_to_match block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_xss_match_set.html#field_to_match WafXssMatchSet#field_to_match}
    */
    readonly fieldToMatch: WafXssMatchSetXssMatchTuplesFieldToMatch;
}
export declare function wafXssMatchSetXssMatchTuplesToTerraform(struct?: WafXssMatchSetXssMatchTuples): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/waf_xss_match_set.html aws_waf_xss_match_set}
*/
export declare class WafXssMatchSet extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/waf_xss_match_set.html aws_waf_xss_match_set} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options WafXssMatchSetConfig
    */
    constructor(scope: Construct, id: string, config: WafXssMatchSetConfig);
    get arn(): string;
    get id(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _xssMatchTuples?;
    get xssMatchTuples(): WafXssMatchSetXssMatchTuples[];
    set xssMatchTuples(value: WafXssMatchSetXssMatchTuples[]);
    resetXssMatchTuples(): void;
    get xssMatchTuplesInput(): WafXssMatchSetXssMatchTuples[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=waf-xss-match-set.d.ts.map