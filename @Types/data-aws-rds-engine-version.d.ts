import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Relational Database Service
*/
export interface DataAwsRdsEngineVersionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_engine_version.html#engine DataAwsRdsEngineVersion#engine}
    */
    readonly engine: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_engine_version.html#parameter_group_family DataAwsRdsEngineVersion#parameter_group_family}
    */
    readonly parameterGroupFamily?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_engine_version.html#preferred_versions DataAwsRdsEngineVersion#preferred_versions}
    */
    readonly preferredVersions?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_engine_version.html#version DataAwsRdsEngineVersion#version}
    */
    readonly version?: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/rds_engine_version.html aws_rds_engine_version}
*/
export declare class DataAwsRdsEngineVersion extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/rds_engine_version.html aws_rds_engine_version} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsRdsEngineVersionConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsRdsEngineVersionConfig);
    get defaultCharacterSet(): string;
    private _engine?;
    get engine(): string;
    set engine(value: string);
    get engineInput(): string;
    get engineDescription(): string;
    get exportableLogTypes(): string[];
    get id(): string;
    private _parameterGroupFamily?;
    get parameterGroupFamily(): string;
    set parameterGroupFamily(value: string);
    resetParameterGroupFamily(): void;
    get parameterGroupFamilyInput(): string;
    private _preferredVersions?;
    get preferredVersions(): string[];
    set preferredVersions(value: string[]);
    resetPreferredVersions(): void;
    get preferredVersionsInput(): string[];
    get status(): string;
    get supportedCharacterSets(): string[];
    get supportedFeatureNames(): string[];
    get supportedModes(): string[];
    get supportedTimezones(): string[];
    get supportsGlobalDatabases(): any;
    get supportsLogExportsToCloudwatch(): any;
    get supportsParallelQuery(): any;
    get supportsReadReplica(): any;
    get validUpgradeTargets(): string[];
    private _version?;
    get version(): string;
    set version(value: string);
    resetVersion(): void;
    get versionInput(): string;
    get versionDescription(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=data-aws-rds-engine-version.d.ts.map