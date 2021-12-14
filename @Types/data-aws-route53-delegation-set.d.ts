import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Route 53
*/
export interface DataAwsRoute53DelegationSetConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_delegation_set.html#id DataAwsRoute53DelegationSet#id}
    */
    readonly id: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/route53_delegation_set.html aws_route53_delegation_set}
*/
export declare class DataAwsRoute53DelegationSet extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/route53_delegation_set.html aws_route53_delegation_set} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsRoute53DelegationSetConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsRoute53DelegationSetConfig);
    get arn(): string;
    get callerReference(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get nameServers(): string[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=data-aws-route53-delegation-set.d.ts.map