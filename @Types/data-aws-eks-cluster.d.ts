import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Elastic Kubernetes Service
*/
export interface DataAwsEksClusterConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/eks_cluster.html#name DataAwsEksCluster#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/eks_cluster.html#tags DataAwsEksCluster#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
}
export declare class DataAwsEksClusterCertificateAuthority extends cdktf.ComplexComputedList {
    get data(): string;
}
export declare class DataAwsEksClusterIdentityOidc extends cdktf.ComplexComputedList {
    get issuer(): string;
}
export declare class DataAwsEksClusterIdentity extends cdktf.ComplexComputedList {
    get oidc(): any;
}
export declare class DataAwsEksClusterKubernetesNetworkConfig extends cdktf.ComplexComputedList {
    get serviceIpv4Cidr(): string;
}
export declare class DataAwsEksClusterVpcConfig extends cdktf.ComplexComputedList {
    get clusterSecurityGroupId(): string;
    get endpointPrivateAccess(): any;
    get endpointPublicAccess(): any;
    get publicAccessCidrs(): string[];
    get securityGroupIds(): string[];
    get subnetIds(): string[];
    get vpcId(): string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/eks_cluster.html aws_eks_cluster}
*/
export declare class DataAwsEksCluster extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/eks_cluster.html aws_eks_cluster} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsEksClusterConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsEksClusterConfig);
    get arn(): string;
    certificateAuthority(index: string): DataAwsEksClusterCertificateAuthority;
    get createdAt(): string;
    get enabledClusterLogTypes(): string[];
    get endpoint(): string;
    get id(): string;
    identity(index: string): DataAwsEksClusterIdentity;
    kubernetesNetworkConfig(index: string): DataAwsEksClusterKubernetesNetworkConfig;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    get platformVersion(): string;
    get roleArn(): string;
    get status(): string;
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
    get version(): string;
    vpcConfig(index: string): DataAwsEksClusterVpcConfig;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=data-aws-eks-cluster.d.ts.map