import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS EC2
*/
export interface Ec2TransitGatewayRouteConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_route.html#blackhole Ec2TransitGatewayRoute#blackhole}
    */
    readonly blackhole?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_route.html#destination_cidr_block Ec2TransitGatewayRoute#destination_cidr_block}
    */
    readonly destinationCidrBlock: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_route.html#transit_gateway_attachment_id Ec2TransitGatewayRoute#transit_gateway_attachment_id}
    */
    readonly transitGatewayAttachmentId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_route.html#transit_gateway_route_table_id Ec2TransitGatewayRoute#transit_gateway_route_table_id}
    */
    readonly transitGatewayRouteTableId: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_route.html aws_ec2_transit_gateway_route}
*/
export declare class Ec2TransitGatewayRoute extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_route.html aws_ec2_transit_gateway_route} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Ec2TransitGatewayRouteConfig
    */
    constructor(scope: Construct, id: string, config: Ec2TransitGatewayRouteConfig);
    private _blackhole?;
    get blackhole(): boolean | cdktf.IResolvable;
    set blackhole(value: boolean | cdktf.IResolvable);
    resetBlackhole(): void;
    get blackholeInput(): boolean | cdktf.IResolvable;
    private _destinationCidrBlock?;
    get destinationCidrBlock(): string;
    set destinationCidrBlock(value: string);
    get destinationCidrBlockInput(): string;
    get id(): string;
    private _transitGatewayAttachmentId?;
    get transitGatewayAttachmentId(): string;
    set transitGatewayAttachmentId(value: string);
    resetTransitGatewayAttachmentId(): void;
    get transitGatewayAttachmentIdInput(): string;
    private _transitGatewayRouteTableId?;
    get transitGatewayRouteTableId(): string;
    set transitGatewayRouteTableId(value: string);
    get transitGatewayRouteTableIdInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=ec2-transit-gateway-route.d.ts.map