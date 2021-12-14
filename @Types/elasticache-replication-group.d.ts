import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS ElastiCache
*/
export interface ElasticacheReplicationGroupConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group.html#apply_immediately ElasticacheReplicationGroup#apply_immediately}
    */
    readonly applyImmediately?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group.html#at_rest_encryption_enabled ElasticacheReplicationGroup#at_rest_encryption_enabled}
    */
    readonly atRestEncryptionEnabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group.html#auth_token ElasticacheReplicationGroup#auth_token}
    */
    readonly authToken?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group.html#auto_minor_version_upgrade ElasticacheReplicationGroup#auto_minor_version_upgrade}
    */
    readonly autoMinorVersionUpgrade?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group.html#automatic_failover_enabled ElasticacheReplicationGroup#automatic_failover_enabled}
    */
    readonly automaticFailoverEnabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group.html#availability_zones ElasticacheReplicationGroup#availability_zones}
    */
    readonly availabilityZones?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group.html#data_tiering_enabled ElasticacheReplicationGroup#data_tiering_enabled}
    */
    readonly dataTieringEnabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group.html#engine ElasticacheReplicationGroup#engine}
    */
    readonly engine?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group.html#engine_version ElasticacheReplicationGroup#engine_version}
    */
    readonly engineVersion?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group.html#final_snapshot_identifier ElasticacheReplicationGroup#final_snapshot_identifier}
    */
    readonly finalSnapshotIdentifier?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group.html#global_replication_group_id ElasticacheReplicationGroup#global_replication_group_id}
    */
    readonly globalReplicationGroupId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group.html#kms_key_id ElasticacheReplicationGroup#kms_key_id}
    */
    readonly kmsKeyId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group.html#maintenance_window ElasticacheReplicationGroup#maintenance_window}
    */
    readonly maintenanceWindow?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group.html#multi_az_enabled ElasticacheReplicationGroup#multi_az_enabled}
    */
    readonly multiAzEnabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group.html#node_type ElasticacheReplicationGroup#node_type}
    */
    readonly nodeType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group.html#notification_topic_arn ElasticacheReplicationGroup#notification_topic_arn}
    */
    readonly notificationTopicArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group.html#number_cache_clusters ElasticacheReplicationGroup#number_cache_clusters}
    */
    readonly numberCacheClusters?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group.html#parameter_group_name ElasticacheReplicationGroup#parameter_group_name}
    */
    readonly parameterGroupName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group.html#port ElasticacheReplicationGroup#port}
    */
    readonly port?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group.html#replication_group_description ElasticacheReplicationGroup#replication_group_description}
    */
    readonly replicationGroupDescription: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group.html#replication_group_id ElasticacheReplicationGroup#replication_group_id}
    */
    readonly replicationGroupId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group.html#security_group_ids ElasticacheReplicationGroup#security_group_ids}
    */
    readonly securityGroupIds?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group.html#security_group_names ElasticacheReplicationGroup#security_group_names}
    */
    readonly securityGroupNames?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group.html#snapshot_arns ElasticacheReplicationGroup#snapshot_arns}
    */
    readonly snapshotArns?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group.html#snapshot_name ElasticacheReplicationGroup#snapshot_name}
    */
    readonly snapshotName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group.html#snapshot_retention_limit ElasticacheReplicationGroup#snapshot_retention_limit}
    */
    readonly snapshotRetentionLimit?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group.html#snapshot_window ElasticacheReplicationGroup#snapshot_window}
    */
    readonly snapshotWindow?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group.html#subnet_group_name ElasticacheReplicationGroup#subnet_group_name}
    */
    readonly subnetGroupName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group.html#tags ElasticacheReplicationGroup#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group.html#tags_all ElasticacheReplicationGroup#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group.html#transit_encryption_enabled ElasticacheReplicationGroup#transit_encryption_enabled}
    */
    readonly transitEncryptionEnabled?: boolean | cdktf.IResolvable;
    /**
    * cluster_mode block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group.html#cluster_mode ElasticacheReplicationGroup#cluster_mode}
    */
    readonly clusterMode?: ElasticacheReplicationGroupClusterMode;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group.html#timeouts ElasticacheReplicationGroup#timeouts}
    */
    readonly timeouts?: ElasticacheReplicationGroupTimeouts;
}
export interface ElasticacheReplicationGroupClusterMode {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group.html#num_node_groups ElasticacheReplicationGroup#num_node_groups}
    */
    readonly numNodeGroups?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group.html#replicas_per_node_group ElasticacheReplicationGroup#replicas_per_node_group}
    */
    readonly replicasPerNodeGroup: number;
}
export declare function elasticacheReplicationGroupClusterModeToTerraform(struct?: ElasticacheReplicationGroupClusterModeOutputReference | ElasticacheReplicationGroupClusterMode): any;
export declare class ElasticacheReplicationGroupClusterModeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): ElasticacheReplicationGroupClusterMode | undefined;
    set internalValue(value: ElasticacheReplicationGroupClusterMode | undefined);
    private _numNodeGroups?;
    get numNodeGroups(): number;
    set numNodeGroups(value: number);
    resetNumNodeGroups(): void;
    get numNodeGroupsInput(): number;
    private _replicasPerNodeGroup?;
    get replicasPerNodeGroup(): number;
    set replicasPerNodeGroup(value: number);
    get replicasPerNodeGroupInput(): number;
}
export interface ElasticacheReplicationGroupTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group.html#create ElasticacheReplicationGroup#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group.html#delete ElasticacheReplicationGroup#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group.html#update ElasticacheReplicationGroup#update}
    */
    readonly update?: string;
}
export declare function elasticacheReplicationGroupTimeoutsToTerraform(struct?: ElasticacheReplicationGroupTimeoutsOutputReference | ElasticacheReplicationGroupTimeouts): any;
export declare class ElasticacheReplicationGroupTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): ElasticacheReplicationGroupTimeouts | undefined;
    set internalValue(value: ElasticacheReplicationGroupTimeouts | undefined);
    private _create?;
    get create(): string;
    set create(value: string);
    resetCreate(): void;
    get createInput(): string;
    private _delete?;
    get delete(): string;
    set delete(value: string);
    resetDelete(): void;
    get deleteInput(): string;
    private _update?;
    get update(): string;
    set update(value: string);
    resetUpdate(): void;
    get updateInput(): string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group.html aws_elasticache_replication_group}
*/
export declare class ElasticacheReplicationGroup extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group.html aws_elasticache_replication_group} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ElasticacheReplicationGroupConfig
    */
    constructor(scope: Construct, id: string, config: ElasticacheReplicationGroupConfig);
    private _applyImmediately?;
    get applyImmediately(): boolean | cdktf.IResolvable;
    set applyImmediately(value: boolean | cdktf.IResolvable);
    resetApplyImmediately(): void;
    get applyImmediatelyInput(): boolean | cdktf.IResolvable;
    get arn(): string;
    private _atRestEncryptionEnabled?;
    get atRestEncryptionEnabled(): boolean | cdktf.IResolvable;
    set atRestEncryptionEnabled(value: boolean | cdktf.IResolvable);
    resetAtRestEncryptionEnabled(): void;
    get atRestEncryptionEnabledInput(): boolean | cdktf.IResolvable;
    private _authToken?;
    get authToken(): string;
    set authToken(value: string);
    resetAuthToken(): void;
    get authTokenInput(): string;
    private _autoMinorVersionUpgrade?;
    get autoMinorVersionUpgrade(): boolean | cdktf.IResolvable;
    set autoMinorVersionUpgrade(value: boolean | cdktf.IResolvable);
    resetAutoMinorVersionUpgrade(): void;
    get autoMinorVersionUpgradeInput(): boolean | cdktf.IResolvable;
    private _automaticFailoverEnabled?;
    get automaticFailoverEnabled(): boolean | cdktf.IResolvable;
    set automaticFailoverEnabled(value: boolean | cdktf.IResolvable);
    resetAutomaticFailoverEnabled(): void;
    get automaticFailoverEnabledInput(): boolean | cdktf.IResolvable;
    private _availabilityZones?;
    get availabilityZones(): string[];
    set availabilityZones(value: string[]);
    resetAvailabilityZones(): void;
    get availabilityZonesInput(): string[];
    get clusterEnabled(): any;
    get configurationEndpointAddress(): string;
    private _dataTieringEnabled?;
    get dataTieringEnabled(): boolean | cdktf.IResolvable;
    set dataTieringEnabled(value: boolean | cdktf.IResolvable);
    resetDataTieringEnabled(): void;
    get dataTieringEnabledInput(): boolean | cdktf.IResolvable;
    private _engine?;
    get engine(): string;
    set engine(value: string);
    resetEngine(): void;
    get engineInput(): string;
    private _engineVersion?;
    get engineVersion(): string;
    set engineVersion(value: string);
    resetEngineVersion(): void;
    get engineVersionInput(): string;
    get engineVersionActual(): string;
    private _finalSnapshotIdentifier?;
    get finalSnapshotIdentifier(): string;
    set finalSnapshotIdentifier(value: string);
    resetFinalSnapshotIdentifier(): void;
    get finalSnapshotIdentifierInput(): string;
    private _globalReplicationGroupId?;
    get globalReplicationGroupId(): string;
    set globalReplicationGroupId(value: string);
    resetGlobalReplicationGroupId(): void;
    get globalReplicationGroupIdInput(): string;
    get id(): string;
    private _kmsKeyId?;
    get kmsKeyId(): string;
    set kmsKeyId(value: string);
    resetKmsKeyId(): void;
    get kmsKeyIdInput(): string;
    private _maintenanceWindow?;
    get maintenanceWindow(): string;
    set maintenanceWindow(value: string);
    resetMaintenanceWindow(): void;
    get maintenanceWindowInput(): string;
    get memberClusters(): string[];
    private _multiAzEnabled?;
    get multiAzEnabled(): boolean | cdktf.IResolvable;
    set multiAzEnabled(value: boolean | cdktf.IResolvable);
    resetMultiAzEnabled(): void;
    get multiAzEnabledInput(): boolean | cdktf.IResolvable;
    private _nodeType?;
    get nodeType(): string;
    set nodeType(value: string);
    resetNodeType(): void;
    get nodeTypeInput(): string;
    private _notificationTopicArn?;
    get notificationTopicArn(): string;
    set notificationTopicArn(value: string);
    resetNotificationTopicArn(): void;
    get notificationTopicArnInput(): string;
    private _numberCacheClusters?;
    get numberCacheClusters(): number;
    set numberCacheClusters(value: number);
    resetNumberCacheClusters(): void;
    get numberCacheClustersInput(): number;
    private _parameterGroupName?;
    get parameterGroupName(): string;
    set parameterGroupName(value: string);
    resetParameterGroupName(): void;
    get parameterGroupNameInput(): string;
    private _port?;
    get port(): number;
    set port(value: number);
    resetPort(): void;
    get portInput(): number;
    get primaryEndpointAddress(): string;
    get readerEndpointAddress(): string;
    private _replicationGroupDescription?;
    get replicationGroupDescription(): string;
    set replicationGroupDescription(value: string);
    get replicationGroupDescriptionInput(): string;
    private _replicationGroupId?;
    get replicationGroupId(): string;
    set replicationGroupId(value: string);
    get replicationGroupIdInput(): string;
    private _securityGroupIds?;
    get securityGroupIds(): string[];
    set securityGroupIds(value: string[]);
    resetSecurityGroupIds(): void;
    get securityGroupIdsInput(): string[];
    private _securityGroupNames?;
    get securityGroupNames(): string[];
    set securityGroupNames(value: string[]);
    resetSecurityGroupNames(): void;
    get securityGroupNamesInput(): string[];
    private _snapshotArns?;
    get snapshotArns(): string[];
    set snapshotArns(value: string[]);
    resetSnapshotArns(): void;
    get snapshotArnsInput(): string[];
    private _snapshotName?;
    get snapshotName(): string;
    set snapshotName(value: string);
    resetSnapshotName(): void;
    get snapshotNameInput(): string;
    private _snapshotRetentionLimit?;
    get snapshotRetentionLimit(): number;
    set snapshotRetentionLimit(value: number);
    resetSnapshotRetentionLimit(): void;
    get snapshotRetentionLimitInput(): number;
    private _snapshotWindow?;
    get snapshotWindow(): string;
    set snapshotWindow(value: string);
    resetSnapshotWindow(): void;
    get snapshotWindowInput(): string;
    private _subnetGroupName?;
    get subnetGroupName(): string;
    set subnetGroupName(value: string);
    resetSubnetGroupName(): void;
    get subnetGroupNameInput(): string;
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
    private _tagsAll?;
    get tagsAll(): {
        [key: string]: string;
    } | cdktf.IResolvable;
    set tagsAll(value: {
        [key: string]: string;
    } | cdktf.IResolvable);
    resetTagsAll(): void;
    get tagsAllInput(): cdktf.IResolvable | {
        [key: string]: string;
    };
    private _transitEncryptionEnabled?;
    get transitEncryptionEnabled(): boolean | cdktf.IResolvable;
    set transitEncryptionEnabled(value: boolean | cdktf.IResolvable);
    resetTransitEncryptionEnabled(): void;
    get transitEncryptionEnabledInput(): boolean | cdktf.IResolvable;
    private _clusterMode;
    get clusterMode(): ElasticacheReplicationGroupClusterModeOutputReference;
    putClusterMode(value: ElasticacheReplicationGroupClusterMode): void;
    resetClusterMode(): void;
    get clusterModeInput(): ElasticacheReplicationGroupClusterMode;
    private _timeouts;
    get timeouts(): ElasticacheReplicationGroupTimeoutsOutputReference;
    putTimeouts(value: ElasticacheReplicationGroupTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): ElasticacheReplicationGroupTimeouts;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=elasticache-replication-group.d.ts.map