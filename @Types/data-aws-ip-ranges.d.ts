import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Data Sources
*/
export interface DataAwsIpRangesConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ip_ranges.html#regions DataAwsIpRanges#regions}
    */
    readonly regions?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ip_ranges.html#services DataAwsIpRanges#services}
    */
    readonly services: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ip_ranges.html#url DataAwsIpRanges#url}
    */
    readonly url?: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/ip_ranges.html aws_ip_ranges}
*/
export declare class DataAwsIpRanges extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/ip_ranges.html aws_ip_ranges} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsIpRangesConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsIpRangesConfig);
    get cidrBlocks(): string[];
    get createDate(): string;
    get id(): string;
    get ipv6CidrBlocks(): string[];
    private _regions?;
    get regions(): string[];
    set regions(value: string[]);
    resetRegions(): void;
    get regionsInput(): string[];
    private _services?;
    get services(): string[];
    set services(value: string[]);
    get servicesInput(): string[];
    get syncToken(): number;
    private _url?;
    get url(): string;
    set url(value: string);
    resetUrl(): void;
    get urlInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=data-aws-ip-ranges.d.ts.map