import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* API Gateway
*/
export interface DataAwsApiGatewayDomainNameConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/api_gateway_domain_name.html#domain_name DataAwsApiGatewayDomainName#domain_name}
    */
    readonly domainName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/api_gateway_domain_name.html#tags DataAwsApiGatewayDomainName#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
}
export declare class DataAwsApiGatewayDomainNameEndpointConfiguration extends cdktf.ComplexComputedList {
    get types(): string[];
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/api_gateway_domain_name.html aws_api_gateway_domain_name}
*/
export declare class DataAwsApiGatewayDomainName extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/api_gateway_domain_name.html aws_api_gateway_domain_name} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsApiGatewayDomainNameConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsApiGatewayDomainNameConfig);
    get arn(): string;
    get certificateArn(): string;
    get certificateName(): string;
    get certificateUploadDate(): string;
    get cloudfrontDomainName(): string;
    get cloudfrontZoneId(): string;
    private _domainName?;
    get domainName(): string;
    set domainName(value: string);
    get domainNameInput(): string;
    endpointConfiguration(index: string): DataAwsApiGatewayDomainNameEndpointConfiguration;
    get id(): string;
    get regionalCertificateArn(): string;
    get regionalCertificateName(): string;
    get regionalDomainName(): string;
    get regionalZoneId(): string;
    get securityPolicy(): string;
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
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=data-aws-api-gateway-domain-name.d.ts.map