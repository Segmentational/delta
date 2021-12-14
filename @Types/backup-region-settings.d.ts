import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Backup
*/
export interface BackupRegionSettingsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_region_settings.html#resource_type_management_preference BackupRegionSettings#resource_type_management_preference}
    */
    readonly resourceTypeManagementPreference?: {
        [key: string]: boolean;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_region_settings.html#resource_type_opt_in_preference BackupRegionSettings#resource_type_opt_in_preference}
    */
    readonly resourceTypeOptInPreference: {
        [key: string]: boolean;
    } | cdktf.IResolvable;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/backup_region_settings.html aws_backup_region_settings}
*/
export declare class BackupRegionSettings extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/backup_region_settings.html aws_backup_region_settings} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options BackupRegionSettingsConfig
    */
    constructor(scope: Construct, id: string, config: BackupRegionSettingsConfig);
    get id(): string;
    private _resourceTypeManagementPreference?;
    get resourceTypeManagementPreference(): {
        [key: string]: boolean;
    } | cdktf.IResolvable;
    set resourceTypeManagementPreference(value: {
        [key: string]: boolean;
    } | cdktf.IResolvable);
    resetResourceTypeManagementPreference(): void;
    get resourceTypeManagementPreferenceInput(): cdktf.IResolvable | {
        [key: string]: boolean;
    };
    private _resourceTypeOptInPreference?;
    get resourceTypeOptInPreference(): {
        [key: string]: boolean;
    } | cdktf.IResolvable;
    set resourceTypeOptInPreference(value: {
        [key: string]: boolean;
    } | cdktf.IResolvable);
    get resourceTypeOptInPreferenceInput(): cdktf.IResolvable | {
        [key: string]: boolean;
    };
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=backup-region-settings.d.ts.map