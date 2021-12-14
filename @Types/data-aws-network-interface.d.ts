import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS VPC
*/
export interface DataAwsNetworkInterfaceConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/network_interface.html#tags DataAwsNetworkInterface#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * filter block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/network_interface.html#filter DataAwsNetworkInterface#filter}
    */
    readonly filter?: DataAwsNetworkInterfaceFilter[];
}
export declare class DataAwsNetworkInterfaceAssociation extends cdktf.ComplexComputedList {
    get allocationId(): string;
    get associationId(): string;
    get carrierIp(): string;
    get customerOwnedIp(): string;
    get ipOwnerId(): string;
    get publicDnsName(): string;
    get publicIp(): string;
}
export declare class DataAwsNetworkInterfaceAttachment extends cdktf.ComplexComputedList {
    get attachmentId(): string;
    get deviceIndex(): number;
    get instanceId(): string;
    get instanceOwnerId(): string;
}
export interface DataAwsNetworkInterfaceFilter {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/network_interface.html#name DataAwsNetworkInterface#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/network_interface.html#values DataAwsNetworkInterface#values}
    */
    readonly values: string[];
}
export declare function dataAwsNetworkInterfaceFilterToTerraform(struct?: DataAwsNetworkInterfaceFilter): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/network_interface.html aws_network_interface}
*/
export declare class DataAwsNetworkInterface extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/network_interface.html aws_network_interface} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsNetworkInterfaceConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsNetworkInterfaceConfig);
    get arn(): string;
    association(index: string): DataAwsNetworkInterfaceAssociation;
    attachment(index: string): DataAwsNetworkInterfaceAttachment;
    get availabilityZone(): string;
    get description(): string;
    get id(): string;
    get interfaceType(): string;
    get ipv6Addresses(): string[];
    get macAddress(): string;
    get outpostArn(): string;
    get ownerId(): string;
    get privateDnsName(): string;
    get privateIp(): string;
    get privateIps(): string[];
    get requesterId(): string;
    get securityGroups(): string[];
    get subnetId(): string;
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
    get vpcId(): string;
    private _filter?;
    get filter(): DataAwsNetworkInterfaceFilter[];
    set filter(value: DataAwsNetworkInterfaceFilter[]);
    resetFilter(): void;
    get filterInput(): DataAwsNetworkInterfaceFilter[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=data-aws-network-interface.d.ts.map