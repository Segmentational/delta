import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Redshift
*/
export interface DataAwsRedshiftOrderableClusterConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/redshift_orderable_cluster.html#cluster_type DataAwsRedshiftOrderableCluster#cluster_type}
    */
    readonly clusterType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/redshift_orderable_cluster.html#cluster_version DataAwsRedshiftOrderableCluster#cluster_version}
    */
    readonly clusterVersion?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/redshift_orderable_cluster.html#node_type DataAwsRedshiftOrderableCluster#node_type}
    */
    readonly nodeType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/redshift_orderable_cluster.html#preferred_node_types DataAwsRedshiftOrderableCluster#preferred_node_types}
    */
    readonly preferredNodeTypes?: string[];
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/redshift_orderable_cluster.html aws_redshift_orderable_cluster}
*/
export declare class DataAwsRedshiftOrderableCluster extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/redshift_orderable_cluster.html aws_redshift_orderable_cluster} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsRedshiftOrderableClusterConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsRedshiftOrderableClusterConfig);
    get availabilityZones(): string[];
    private _clusterType?;
    get clusterType(): string;
    set clusterType(value: string);
    resetClusterType(): void;
    get clusterTypeInput(): string;
    private _clusterVersion?;
    get clusterVersion(): string;
    set clusterVersion(value: string);
    resetClusterVersion(): void;
    get clusterVersionInput(): string;
    get id(): string;
    private _nodeType?;
    get nodeType(): string;
    set nodeType(value: string);
    resetNodeType(): void;
    get nodeTypeInput(): string;
    private _preferredNodeTypes?;
    get preferredNodeTypes(): string[];
    set preferredNodeTypes(value: string[]);
    resetPreferredNodeTypes(): void;
    get preferredNodeTypesInput(): string[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=data-aws-redshift-orderable-cluster.d.ts.map