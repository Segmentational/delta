import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Simple Email Service
*/
export interface SesActiveReceiptRuleSetConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_active_receipt_rule_set.html#rule_set_name SesActiveReceiptRuleSet#rule_set_name}
    */
    readonly ruleSetName: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/ses_active_receipt_rule_set.html aws_ses_active_receipt_rule_set}
*/
export declare class SesActiveReceiptRuleSet extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ses_active_receipt_rule_set.html aws_ses_active_receipt_rule_set} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SesActiveReceiptRuleSetConfig
    */
    constructor(scope: Construct, id: string, config: SesActiveReceiptRuleSetConfig);
    get arn(): string;
    get id(): string;
    private _ruleSetName?;
    get ruleSetName(): string;
    set ruleSetName(value: string);
    get ruleSetNameInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=ses-active-receipt-rule-set.d.ts.map