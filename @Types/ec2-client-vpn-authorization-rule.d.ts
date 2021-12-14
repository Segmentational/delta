import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS EC2
*/
export interface Ec2ClientVpnAuthorizationRuleConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_authorization_rule.html#access_group_id Ec2ClientVpnAuthorizationRule#access_group_id}
    */
    readonly accessGroupId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_authorization_rule.html#authorize_all_groups Ec2ClientVpnAuthorizationRule#authorize_all_groups}
    */
    readonly authorizeAllGroups?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_authorization_rule.html#client_vpn_endpoint_id Ec2ClientVpnAuthorizationRule#client_vpn_endpoint_id}
    */
    readonly clientVpnEndpointId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_authorization_rule.html#description Ec2ClientVpnAuthorizationRule#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_authorization_rule.html#target_network_cidr Ec2ClientVpnAuthorizationRule#target_network_cidr}
    */
    readonly targetNetworkCidr: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_authorization_rule.html aws_ec2_client_vpn_authorization_rule}
*/
export declare class Ec2ClientVpnAuthorizationRule extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_authorization_rule.html aws_ec2_client_vpn_authorization_rule} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Ec2ClientVpnAuthorizationRuleConfig
    */
    constructor(scope: Construct, id: string, config: Ec2ClientVpnAuthorizationRuleConfig);
    private _accessGroupId?;
    get accessGroupId(): string;
    set accessGroupId(value: string);
    resetAccessGroupId(): void;
    get accessGroupIdInput(): string;
    private _authorizeAllGroups?;
    get authorizeAllGroups(): boolean | cdktf.IResolvable;
    set authorizeAllGroups(value: boolean | cdktf.IResolvable);
    resetAuthorizeAllGroups(): void;
    get authorizeAllGroupsInput(): boolean | cdktf.IResolvable;
    private _clientVpnEndpointId?;
    get clientVpnEndpointId(): string;
    set clientVpnEndpointId(value: string);
    get clientVpnEndpointIdInput(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string;
    get id(): string;
    private _targetNetworkCidr?;
    get targetNetworkCidr(): string;
    set targetNetworkCidr(value: string);
    get targetNetworkCidrInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=ec2-client-vpn-authorization-rule.d.ts.map