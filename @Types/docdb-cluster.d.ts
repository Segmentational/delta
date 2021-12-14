import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS DocumentDB
*/
export interface DocdbClusterConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster.html#apply_immediately DocdbCluster#apply_immediately}
    */
    readonly applyImmediately?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster.html#availability_zones DocdbCluster#availability_zones}
    */
    readonly availabilityZones?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster.html#backup_retention_period DocdbCluster#backup_retention_period}
    */
    readonly backupRetentionPeriod?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster.html#cluster_identifier DocdbCluster#cluster_identifier}
    */
    readonly clusterIdentifier?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster.html#cluster_identifier_prefix DocdbCluster#cluster_identifier_prefix}
    */
    readonly clusterIdentifierPrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster.html#cluster_members DocdbCluster#cluster_members}
    */
    readonly clusterMembers?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster.html#db_cluster_parameter_group_name DocdbCluster#db_cluster_parameter_group_name}
    */
    readonly dbClusterParameterGroupName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster.html#db_subnet_group_name DocdbCluster#db_subnet_group_name}
    */
    readonly dbSubnetGroupName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster.html#deletion_protection DocdbCluster#deletion_protection}
    */
    readonly deletionProtection?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster.html#enabled_cloudwatch_logs_exports DocdbCluster#enabled_cloudwatch_logs_exports}
    */
    readonly enabledCloudwatchLogsExports?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster.html#engine DocdbCluster#engine}
    */
    readonly engine?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster.html#engine_version DocdbCluster#engine_version}
    */
    readonly engineVersion?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster.html#final_snapshot_identifier DocdbCluster#final_snapshot_identifier}
    */
    readonly finalSnapshotIdentifier?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster.html#global_cluster_identifier DocdbCluster#global_cluster_identifier}
    */
    readonly globalClusterIdentifier?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster.html#kms_key_id DocdbCluster#kms_key_id}
    */
    readonly kmsKeyId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster.html#master_password DocdbCluster#master_password}
    */
    readonly masterPassword?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster.html#master_username DocdbCluster#master_username}
    */
    readonly masterUsername?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster.html#port DocdbCluster#port}
    */
    readonly port?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster.html#preferred_backup_window DocdbCluster#preferred_backup_window}
    */
    readonly preferredBackupWindow?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster.html#preferred_maintenance_window DocdbCluster#preferred_maintenance_window}
    */
    readonly preferredMaintenanceWindow?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster.html#skip_final_snapshot DocdbCluster#skip_final_snapshot}
    */
    readonly skipFinalSnapshot?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster.html#snapshot_identifier DocdbCluster#snapshot_identifier}
    */
    readonly snapshotIdentifier?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster.html#storage_encrypted DocdbCluster#storage_encrypted}
    */
    readonly storageEncrypted?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster.html#tags DocdbCluster#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster.html#tags_all DocdbCluster#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster.html#vpc_security_group_ids DocdbCluster#vpc_security_group_ids}
    */
    readonly vpcSecurityGroupIds?: string[];
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster.html#timeouts DocdbCluster#timeouts}
    */
    readonly timeouts?: DocdbClusterTimeouts;
}
export interface DocdbClusterTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster.html#create DocdbCluster#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster.html#delete DocdbCluster#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster.html#update DocdbCluster#update}
    */
    readonly update?: string;
}
export declare function docdbClusterTimeoutsToTerraform(struct?: DocdbClusterTimeoutsOutputReference | DocdbClusterTimeouts): any;
export declare class DocdbClusterTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): DocdbClusterTimeouts | undefined;
    set internalValue(value: DocdbClusterTimeouts | undefined);
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
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster.html aws_docdb_cluster}
*/
export declare class DocdbCluster extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster.html aws_docdb_cluster} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DocdbClusterConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DocdbClusterConfig);
    private _applyImmediately?;
    get applyImmediately(): boolean | cdktf.IResolvable;
    set applyImmediately(value: boolean | cdktf.IResolvable);
    resetApplyImmediately(): void;
    get applyImmediatelyInput(): boolean | cdktf.IResolvable;
    get arn(): string;
    private _availabilityZones?;
    get availabilityZones(): string[];
    set availabilityZones(value: string[]);
    resetAvailabilityZones(): void;
    get availabilityZonesInput(): string[];
    private _backupRetentionPeriod?;
    get backupRetentionPeriod(): number;
    set backupRetentionPeriod(value: number);
    resetBackupRetentionPeriod(): void;
    get backupRetentionPeriodInput(): number;
    private _clusterIdentifier?;
    get clusterIdentifier(): string;
    set clusterIdentifier(value: string);
    resetClusterIdentifier(): void;
    get clusterIdentifierInput(): string;
    private _clusterIdentifierPrefix?;
    get clusterIdentifierPrefix(): string;
    set clusterIdentifierPrefix(value: string);
    resetClusterIdentifierPrefix(): void;
    get clusterIdentifierPrefixInput(): string;
    private _clusterMembers?;
    get clusterMembers(): string[];
    set clusterMembers(value: string[]);
    resetClusterMembers(): void;
    get clusterMembersInput(): string[];
    get clusterResourceId(): string;
    private _dbClusterParameterGroupName?;
    get dbClusterParameterGroupName(): string;
    set dbClusterParameterGroupName(value: string);
    resetDbClusterParameterGroupName(): void;
    get dbClusterParameterGroupNameInput(): string;
    private _dbSubnetGroupName?;
    get dbSubnetGroupName(): string;
    set dbSubnetGroupName(value: string);
    resetDbSubnetGroupName(): void;
    get dbSubnetGroupNameInput(): string;
    private _deletionProtection?;
    get deletionProtection(): boolean | cdktf.IResolvable;
    set deletionProtection(value: boolean | cdktf.IResolvable);
    resetDeletionProtection(): void;
    get deletionProtectionInput(): boolean | cdktf.IResolvable;
    private _enabledCloudwatchLogsExports?;
    get enabledCloudwatchLogsExports(): string[];
    set enabledCloudwatchLogsExports(value: string[]);
    resetEnabledCloudwatchLogsExports(): void;
    get enabledCloudwatchLogsExportsInput(): string[];
    get endpoint(): string;
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
    private _finalSnapshotIdentifier?;
    get finalSnapshotIdentifier(): string;
    set finalSnapshotIdentifier(value: string);
    resetFinalSnapshotIdentifier(): void;
    get finalSnapshotIdentifierInput(): string;
    private _globalClusterIdentifier?;
    get globalClusterIdentifier(): string;
    set globalClusterIdentifier(value: string);
    resetGlobalClusterIdentifier(): void;
    get globalClusterIdentifierInput(): string;
    get hostedZoneId(): string;
    get id(): string;
    private _kmsKeyId?;
    get kmsKeyId(): string;
    set kmsKeyId(value: string);
    resetKmsKeyId(): void;
    get kmsKeyIdInput(): string;
    private _masterPassword?;
    get masterPassword(): string;
    set masterPassword(value: string);
    resetMasterPassword(): void;
    get masterPasswordInput(): string;
    private _masterUsername?;
    get masterUsername(): string;
    set masterUsername(value: string);
    resetMasterUsername(): void;
    get masterUsernameInput(): string;
    private _port?;
    get port(): number;
    set port(value: number);
    resetPort(): void;
    get portInput(): number;
    private _preferredBackupWindow?;
    get preferredBackupWindow(): string;
    set preferredBackupWindow(value: string);
    resetPreferredBackupWindow(): void;
    get preferredBackupWindowInput(): string;
    private _preferredMaintenanceWindow?;
    get preferredMaintenanceWindow(): string;
    set preferredMaintenanceWindow(value: string);
    resetPreferredMaintenanceWindow(): void;
    get preferredMaintenanceWindowInput(): string;
    get readerEndpoint(): string;
    private _skipFinalSnapshot?;
    get skipFinalSnapshot(): boolean | cdktf.IResolvable;
    set skipFinalSnapshot(value: boolean | cdktf.IResolvable);
    resetSkipFinalSnapshot(): void;
    get skipFinalSnapshotInput(): boolean | cdktf.IResolvable;
    private _snapshotIdentifier?;
    get snapshotIdentifier(): string;
    set snapshotIdentifier(value: string);
    resetSnapshotIdentifier(): void;
    get snapshotIdentifierInput(): string;
    private _storageEncrypted?;
    get storageEncrypted(): boolean | cdktf.IResolvable;
    set storageEncrypted(value: boolean | cdktf.IResolvable);
    resetStorageEncrypted(): void;
    get storageEncryptedInput(): boolean | cdktf.IResolvable;
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
    private _vpcSecurityGroupIds?;
    get vpcSecurityGroupIds(): string[];
    set vpcSecurityGroupIds(value: string[]);
    resetVpcSecurityGroupIds(): void;
    get vpcSecurityGroupIdsInput(): string[];
    private _timeouts;
    get timeouts(): DocdbClusterTimeoutsOutputReference;
    putTimeouts(value: DocdbClusterTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): DocdbClusterTimeouts;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=docdb-cluster.d.ts.map