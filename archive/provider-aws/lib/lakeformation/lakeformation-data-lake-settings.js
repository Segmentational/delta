"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.LakeformationDataLakeSettings = exports.lakeformationDataLakeSettingsCreateTableDefaultPermissionsToTerraform = exports.lakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsToTerraform = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
function lakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        permissions: cdktf.listMapper(cdktf.stringToTerraform)(struct.permissions),
        principal: cdktf.stringToTerraform(struct.principal),
    };
}
exports.lakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsToTerraform = lakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsToTerraform;
function lakeformationDataLakeSettingsCreateTableDefaultPermissionsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        permissions: cdktf.listMapper(cdktf.stringToTerraform)(struct.permissions),
        principal: cdktf.stringToTerraform(struct.principal),
    };
}
exports.lakeformationDataLakeSettingsCreateTableDefaultPermissionsToTerraform = lakeformationDataLakeSettingsCreateTableDefaultPermissionsToTerraform;
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_data_lake_settings.html aws_lakeformation_data_lake_settings}.
 *
 * @stability stable
 */
class LakeformationDataLakeSettings extends cdktf.TerraformResource {
    // ===========
    // INITIALIZER
    // ===========
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_data_lake_settings.html aws_lakeformation_data_lake_settings} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     * @stability stable
     */
    constructor(scope, id, config = {}) {
        super(scope, id, {
            terraformResourceType: 'aws_lakeformation_data_lake_settings',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._admins = config.admins;
        this._catalogId = config.catalogId;
        this._trustedResourceOwners = config.trustedResourceOwners;
        this._createDatabaseDefaultPermissions = config.createDatabaseDefaultPermissions;
        this._createTableDefaultPermissions = config.createTableDefaultPermissions;
    }
    /**
     * @stability stable
     */
    get admins() {
        return this.getListAttribute('admins');
    }
    /**
     * @stability stable
     */
    set admins(value) {
        this._admins = value;
    }
    /**
     * @stability stable
     */
    resetAdmins() {
        this._admins = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get adminsInput() {
        return this._admins;
    }
    /**
     * @stability stable
     */
    get catalogId() {
        return this.getStringAttribute('catalog_id');
    }
    /**
     * @stability stable
     */
    set catalogId(value) {
        this._catalogId = value;
    }
    /**
     * @stability stable
     */
    resetCatalogId() {
        this._catalogId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get catalogIdInput() {
        return this._catalogId;
    }
    // id - computed: true, optional: true, required: false
    /**
     * @stability stable
     */
    get id() {
        return this.getStringAttribute('id');
    }
    /**
     * @stability stable
     */
    get trustedResourceOwners() {
        return this.getListAttribute('trusted_resource_owners');
    }
    /**
     * @stability stable
     */
    set trustedResourceOwners(value) {
        this._trustedResourceOwners = value;
    }
    /**
     * @stability stable
     */
    resetTrustedResourceOwners() {
        this._trustedResourceOwners = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get trustedResourceOwnersInput() {
        return this._trustedResourceOwners;
    }
    /**
     * @stability stable
     */
    get createDatabaseDefaultPermissions() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('create_database_default_permissions');
    }
    /**
     * @stability stable
     */
    set createDatabaseDefaultPermissions(value) {
        this._createDatabaseDefaultPermissions = value;
    }
    /**
     * @stability stable
     */
    resetCreateDatabaseDefaultPermissions() {
        this._createDatabaseDefaultPermissions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get createDatabaseDefaultPermissionsInput() {
        return this._createDatabaseDefaultPermissions;
    }
    /**
     * @stability stable
     */
    get createTableDefaultPermissions() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('create_table_default_permissions');
    }
    /**
     * @stability stable
     */
    set createTableDefaultPermissions(value) {
        this._createTableDefaultPermissions = value;
    }
    /**
     * @stability stable
     */
    resetCreateTableDefaultPermissions() {
        this._createTableDefaultPermissions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    /**
     * @stability stable
     */
    get createTableDefaultPermissionsInput() {
        return this._createTableDefaultPermissions;
    }
    // =========
    // SYNTHESIS
    // =========
    /**
     * @stability stable
     */
    synthesizeAttributes() {
        return {
            admins: cdktf.listMapper(cdktf.stringToTerraform)(this._admins),
            catalog_id: cdktf.stringToTerraform(this._catalogId),
            trusted_resource_owners: cdktf.listMapper(cdktf.stringToTerraform)(this._trustedResourceOwners),
            create_database_default_permissions: cdktf.listMapper(lakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsToTerraform)(this._createDatabaseDefaultPermissions),
            create_table_default_permissions: cdktf.listMapper(lakeformationDataLakeSettingsCreateTableDefaultPermissionsToTerraform)(this._createTableDefaultPermissions),
        };
    }
}
exports.LakeformationDataLakeSettings = LakeformationDataLakeSettings;
_a = JSII_RTTI_SYMBOL_1;
LakeformationDataLakeSettings[_a] = { fqn: "@cdktf/provider-aws.lakeformation.LakeformationDataLakeSettings", version: "3.0.1" };
// =================
// STATIC PROPERTIES
// =================
/**
 * @stability stable
 */
LakeformationDataLakeSettings.tfResourceType = "aws_lakeformation_data_lake_settings";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFrZWZvcm1hdGlvbi1kYXRhLWxha2Utc2V0dGluZ3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvbGFrZWZvcm1hdGlvbi9sYWtlZm9ybWF0aW9uLWRhdGEtbGFrZS1zZXR0aW5ncy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUdBLCtCQUErQjtBQXNCL0IsU0FBZ0Isd0VBQXdFLENBQUMsTUFBc0U7SUFDN0osSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFBRSxPQUFPLE1BQU0sQ0FBQztLQUFFO0lBQ2pELElBQUksS0FBSyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQ2xDLE1BQU0sSUFBSSxLQUFLLENBQUMsb0hBQW9ILENBQUMsQ0FBQztLQUN2STtJQUNELE9BQU87UUFDTCxXQUFXLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxNQUFPLENBQUMsV0FBVyxDQUFDO1FBQzNFLFNBQVMsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLFNBQVMsQ0FBQztLQUN0RCxDQUFBO0FBQ0gsQ0FBQztBQVRELDRKQVNDO0FBU0QsU0FBZ0IscUVBQXFFLENBQUMsTUFBbUU7SUFDdkosSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFBRSxPQUFPLE1BQU0sQ0FBQztLQUFFO0lBQ2pELElBQUksS0FBSyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQ2xDLE1BQU0sSUFBSSxLQUFLLENBQUMsb0hBQW9ILENBQUMsQ0FBQztLQUN2STtJQUNELE9BQU87UUFDTCxXQUFXLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxNQUFPLENBQUMsV0FBVyxDQUFDO1FBQzNFLFNBQVMsRUFBRSxLQUFLLENBQUMsaUJBQWlC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LENBQUM7U0FDL0osQ0FBQztJQUNKLENBQUM7O0FBcklILHNFQXNJQzs7O0FBcElDLG9CQUFvQjtBQUNwQixvQkFBb0I7QUFDcEIsb0JBQW9COzs7O0FBQ0csNENBQWMsR0FBVyxzQ0FBc0MsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGdlbmVyYXRlZCBmcm9tIHRlcnJhZm9ybSByZXNvdXJjZSBzY2hlbWFcblxuaW1wb3J0IHsgQ29uc3RydWN0IH0gZnJvbSAnY29uc3RydWN0cyc7XG5pbXBvcnQgKiBhcyBjZGt0ZiBmcm9tICdjZGt0Zic7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuZXhwb3J0IGludGVyZmFjZSBMYWtlZm9ybWF0aW9uRGF0YUxha2VTZXR0aW5nc0NvbmZpZyBleHRlbmRzIGNka3RmLlRlcnJhZm9ybU1ldGFBcmd1bWVudHMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBhZG1pbnM/OiBzdHJpbmdbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBjYXRhbG9nSWQ/OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSB0cnVzdGVkUmVzb3VyY2VPd25lcnM/OiBzdHJpbmdbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGNyZWF0ZURhdGFiYXNlRGVmYXVsdFBlcm1pc3Npb25zPzogTGFrZWZvcm1hdGlvbkRhdGFMYWtlU2V0dGluZ3NDcmVhdGVEYXRhYmFzZURlZmF1bHRQZXJtaXNzaW9uc1tdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgY3JlYXRlVGFibGVEZWZhdWx0UGVybWlzc2lvbnM/OiBMYWtlZm9ybWF0aW9uRGF0YUxha2VTZXR0aW5nc0NyZWF0ZVRhYmxlRGVmYXVsdFBlcm1pc3Npb25zW107XG59XG5leHBvcnQgaW50ZXJmYWNlIExha2Vmb3JtYXRpb25EYXRhTGFrZVNldHRpbmdzQ3JlYXRlRGF0YWJhc2VEZWZhdWx0UGVybWlzc2lvbnMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcGVybWlzc2lvbnM/OiBzdHJpbmdbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcHJpbmNpcGFsPzogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGFrZWZvcm1hdGlvbkRhdGFMYWtlU2V0dGluZ3NDcmVhdGVEYXRhYmFzZURlZmF1bHRQZXJtaXNzaW9uc1RvVGVycmFmb3JtKHN0cnVjdD86IExha2Vmb3JtYXRpb25EYXRhTGFrZVNldHRpbmdzQ3JlYXRlRGF0YWJhc2VEZWZhdWx0UGVybWlzc2lvbnMpOiBhbnkge1xuICBpZiAoIWNka3RmLmNhbkluc3BlY3Qoc3RydWN0KSkgeyByZXR1cm4gc3RydWN0OyB9XG4gIGlmIChjZGt0Zi5pc0NvbXBsZXhFbGVtZW50KHN0cnVjdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGNvbXBsZXggZWxlbWVudCB3YXMgdXNlZCBhcyBjb25maWd1cmF0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQ6IGh0dHBzOi8vY2RrLnRmL2NvbXBsZXgtb2JqZWN0LWFzLWNvbmZpZ3VyYXRpb25cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBwZXJtaXNzaW9uczogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkoc3RydWN0IS5wZXJtaXNzaW9ucyksXG4gICAgcHJpbmNpcGFsOiBjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybShzdHJ1Y3QhLnByaW5jaXBhbCksXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBMYWtlZm9ybWF0aW9uRGF0YUxha2VTZXR0aW5nc0NyZWF0ZVRhYmxlRGVmYXVsdFBlcm1pc3Npb25zIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHBlcm1pc3Npb25zPzogc3RyaW5nW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHByaW5jaXBhbD86IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxha2Vmb3JtYXRpb25EYXRhTGFrZVNldHRpbmdzQ3JlYXRlVGFibGVEZWZhdWx0UGVybWlzc2lvbnNUb1RlcnJhZm9ybShzdHJ1Y3Q/OiBMYWtlZm9ybWF0aW9uRGF0YUxha2VTZXR0aW5nc0NyZWF0ZVRhYmxlRGVmYXVsdFBlcm1pc3Npb25zKTogYW55IHtcbiAgaWYgKCFjZGt0Zi5jYW5JbnNwZWN0KHN0cnVjdCkpIHsgcmV0dXJuIHN0cnVjdDsgfVxuICBpZiAoY2RrdGYuaXNDb21wbGV4RWxlbWVudChzdHJ1Y3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQSBjb21wbGV4IGVsZW1lbnQgd2FzIHVzZWQgYXMgY29uZmlndXJhdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkOiBodHRwczovL2Nkay50Zi9jb21wbGV4LW9iamVjdC1hcy1jb25maWd1cmF0aW9uXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgcGVybWlzc2lvbnM6IGNka3RmLmxpc3RNYXBwZXIoY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0pKHN0cnVjdCEucGVybWlzc2lvbnMpLFxuICAgIHByaW5jaXBhbDogY2RrdGYuc3RyaW5nVG9UZXJyYWZvcm0oc3RydWN0IS5wcmluY2lwYWwpLFxuICB9XG59XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG5leHBvcnQgY2xhc3MgTGFrZWZvcm1hdGlvbkRhdGFMYWtlU2V0dGluZ3MgZXh0ZW5kcyBjZGt0Zi5UZXJyYWZvcm1SZXNvdXJjZSB7XG5cbiAgLy8gPT09PT09PT09PT09PT09PT1cbiAgLy8gU1RBVElDIFBST1BFUlRJRVNcbiAgLy8gPT09PT09PT09PT09PT09PT1cbiAgcHVibGljIHN0YXRpYyByZWFkb25seSB0ZlJlc291cmNlVHlwZTogc3RyaW5nID0gXCJhd3NfbGFrZWZvcm1hdGlvbl9kYXRhX2xha2Vfc2V0dGluZ3NcIjtcblxuICAvLyA9PT09PT09PT09PVxuICAvLyBJTklUSUFMSVpFUlxuICAvLyA9PT09PT09PT09PVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihzY29wZTogQ29uc3RydWN0LCBpZDogc3RyaW5nLCBjb25maWc6IExha2Vmb3JtYXRpb25EYXRhTGFrZVNldHRpbmdzQ29uZmlnID0ge30pIHtcbiAgICBzdXBlcihzY29wZSwgaWQsIHtcbiAgICAgIHRlcnJhZm9ybVJlc291cmNlVHlwZTogJ2F3c19sYWtlZm9ybWF0aW9uX2RhdGFfbGFrZV9zZXR0aW5ncycsXG4gICAgICB0ZXJyYWZvcm1HZW5lcmF0b3JNZXRhZGF0YToge1xuICAgICAgICBwcm92aWRlck5hbWU6ICdhd3MnXG4gICAgICB9LFxuICAgICAgcHJvdmlkZXI6IGNvbmZpZy5wcm92aWRlcixcbiAgICAgIGRlcGVuZHNPbjogY29uZmlnLmRlcGVuZHNPbixcbiAgICAgIGNvdW50OiBjb25maWcuY291bnQsXG4gICAgICBsaWZlY3ljbGU6IGNvbmZpZy5saWZlY3ljbGVcbiAgICB9KTtcbiAgICB0aGlzLl9hZG1pbnMgPSBjb25maWcuYWRtaW5zO1xuICAgIHRoaXMuX2NhdGFsb2dJZCA9IGNvbmZpZy5jYXRhbG9nSWQ7XG4gICAgdGhpcy5fdHJ1c3RlZFJlc291cmNlT3duZXJzID0gY29uZmlnLnRydXN0ZWRSZXNvdXJjZU93bmVycztcbiAgICB0aGlzLl9jcmVhdGVEYXRhYmFzZURlZmF1bHRQZXJtaXNzaW9ucyA9IGNvbmZpZy5jcmVhdGVEYXRhYmFzZURlZmF1bHRQZXJtaXNzaW9ucztcbiAgICB0aGlzLl9jcmVhdGVUYWJsZURlZmF1bHRQZXJtaXNzaW9ucyA9IGNvbmZpZy5jcmVhdGVUYWJsZURlZmF1bHRQZXJtaXNzaW9ucztcbiAgfVxuXG4gIC8vID09PT09PT09PT1cbiAgLy8gQVRUUklCVVRFU1xuICAvLyA9PT09PT09PT09XG5cbiAgLy8gYWRtaW5zIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfYWRtaW5zPzogc3RyaW5nW107IFxuICBwdWJsaWMgZ2V0IGFkbWlucygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRMaXN0QXR0cmlidXRlKCdhZG1pbnMnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGFkbWlucyh2YWx1ZTogc3RyaW5nW10pIHtcbiAgICB0aGlzLl9hZG1pbnMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRBZG1pbnMoKSB7XG4gICAgdGhpcy5fYWRtaW5zID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBhZG1pbnNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYWRtaW5zO1xuICB9XG5cbiAgLy8gY2F0YWxvZ19pZCAtIGNvbXB1dGVkOiBmYWxzZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9jYXRhbG9nSWQ/OiBzdHJpbmc7IFxuICBwdWJsaWMgZ2V0IGNhdGFsb2dJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2NhdGFsb2dfaWQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGNhdGFsb2dJZCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fY2F0YWxvZ0lkID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0Q2F0YWxvZ0lkKCkge1xuICAgIHRoaXMuX2NhdGFsb2dJZCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgY2F0YWxvZ0lkSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NhdGFsb2dJZDtcbiAgfVxuXG4gIC8vIGlkIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHVibGljIGdldCBpZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmdBdHRyaWJ1dGUoJ2lkJyk7XG4gIH1cblxuICAvLyB0cnVzdGVkX3Jlc291cmNlX293bmVycyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3RydXN0ZWRSZXNvdXJjZU93bmVycz86IHN0cmluZ1tdOyBcbiAgcHVibGljIGdldCB0cnVzdGVkUmVzb3VyY2VPd25lcnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TGlzdEF0dHJpYnV0ZSgndHJ1c3RlZF9yZXNvdXJjZV9vd25lcnMnKTtcbiAgfVxuICBwdWJsaWMgc2V0IHRydXN0ZWRSZXNvdXJjZU93bmVycyh2YWx1ZTogc3RyaW5nW10pIHtcbiAgICB0aGlzLl90cnVzdGVkUmVzb3VyY2VPd25lcnMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRUcnVzdGVkUmVzb3VyY2VPd25lcnMoKSB7XG4gICAgdGhpcy5fdHJ1c3RlZFJlc291cmNlT3duZXJzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCB0cnVzdGVkUmVzb3VyY2VPd25lcnNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdHJ1c3RlZFJlc291cmNlT3duZXJzO1xuICB9XG5cbiAgLy8gY3JlYXRlX2RhdGFiYXNlX2RlZmF1bHRfcGVybWlzc2lvbnMgLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfY3JlYXRlRGF0YWJhc2VEZWZhdWx0UGVybWlzc2lvbnM/OiBMYWtlZm9ybWF0aW9uRGF0YUxha2VTZXR0aW5nc0NyZWF0ZURhdGFiYXNlRGVmYXVsdFBlcm1pc3Npb25zW107IFxuICBwdWJsaWMgZ2V0IGNyZWF0ZURhdGFiYXNlRGVmYXVsdFBlcm1pc3Npb25zKCkge1xuICAgIC8vIEdldHRpbmcgdGhlIGNvbXB1dGVkIHZhbHVlIGlzIG5vdCB5ZXQgaW1wbGVtZW50ZWRcbiAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0aW9uRm9yQXR0cmlidXRlKCdjcmVhdGVfZGF0YWJhc2VfZGVmYXVsdF9wZXJtaXNzaW9ucycpIGFzIGFueTtcbiAgfVxuICBwdWJsaWMgc2V0IGNyZWF0ZURhdGFiYXNlRGVmYXVsdFBlcm1pc3Npb25zKHZhbHVlOiBMYWtlZm9ybWF0aW9uRGF0YUxha2VTZXR0aW5nc0NyZWF0ZURhdGFiYXNlRGVmYXVsdFBlcm1pc3Npb25zW10pIHtcbiAgICB0aGlzLl9jcmVhdGVEYXRhYmFzZURlZmF1bHRQZXJtaXNzaW9ucyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldENyZWF0ZURhdGFiYXNlRGVmYXVsdFBlcm1pc3Npb25zKCkge1xuICAgIHRoaXMuX2NyZWF0ZURhdGFiYXNlRGVmYXVsdFBlcm1pc3Npb25zID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBjcmVhdGVEYXRhYmFzZURlZmF1bHRQZXJtaXNzaW9uc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9jcmVhdGVEYXRhYmFzZURlZmF1bHRQZXJtaXNzaW9ucztcbiAgfVxuXG4gIC8vIGNyZWF0ZV90YWJsZV9kZWZhdWx0X3Blcm1pc3Npb25zIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2NyZWF0ZVRhYmxlRGVmYXVsdFBlcm1pc3Npb25zPzogTGFrZWZvcm1hdGlvbkRhdGFMYWtlU2V0dGluZ3NDcmVhdGVUYWJsZURlZmF1bHRQZXJtaXNzaW9uc1tdOyBcbiAgcHVibGljIGdldCBjcmVhdGVUYWJsZURlZmF1bHRQZXJtaXNzaW9ucygpIHtcbiAgICAvLyBHZXR0aW5nIHRoZSBjb21wdXRlZCB2YWx1ZSBpcyBub3QgeWV0IGltcGxlbWVudGVkXG4gICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbkZvckF0dHJpYnV0ZSgnY3JlYXRlX3RhYmxlX2RlZmF1bHRfcGVybWlzc2lvbnMnKSBhcyBhbnk7XG4gIH1cbiAgcHVibGljIHNldCBjcmVhdGVUYWJsZURlZmF1bHRQZXJtaXNzaW9ucyh2YWx1ZTogTGFrZWZvcm1hdGlvbkRhdGFMYWtlU2V0dGluZ3NDcmVhdGVUYWJsZURlZmF1bHRQZXJtaXNzaW9uc1tdKSB7XG4gICAgdGhpcy5fY3JlYXRlVGFibGVEZWZhdWx0UGVybWlzc2lvbnMgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRDcmVhdGVUYWJsZURlZmF1bHRQZXJtaXNzaW9ucygpIHtcbiAgICB0aGlzLl9jcmVhdGVUYWJsZURlZmF1bHRQZXJtaXNzaW9ucyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgY3JlYXRlVGFibGVEZWZhdWx0UGVybWlzc2lvbnNJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY3JlYXRlVGFibGVEZWZhdWx0UGVybWlzc2lvbnM7XG4gIH1cblxuICAvLyA9PT09PT09PT1cbiAgLy8gU1lOVEhFU0lTXG4gIC8vID09PT09PT09PVxuXG4gIHByb3RlY3RlZCBzeW50aGVzaXplQXR0cmlidXRlcygpOiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGFkbWluczogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkodGhpcy5fYWRtaW5zKSxcbiAgICAgIGNhdGFsb2dfaWQ6IGNka3RmLnN0cmluZ1RvVGVycmFmb3JtKHRoaXMuX2NhdGFsb2dJZCksXG4gICAgICB0cnVzdGVkX3Jlc291cmNlX293bmVyczogY2RrdGYubGlzdE1hcHBlcihjZGt0Zi5zdHJpbmdUb1RlcnJhZm9ybSkodGhpcy5fdHJ1c3RlZFJlc291cmNlT3duZXJzKSxcbiAgICAgIGNyZWF0ZV9kYXRhYmFzZV9kZWZhdWx0X3Blcm1pc3Npb25zOiBjZGt0Zi5saXN0TWFwcGVyKGxha2Vmb3JtYXRpb25EYXRhTGFrZVNldHRpbmdzQ3JlYXRlRGF0YWJhc2VEZWZhdWx0UGVybWlzc2lvbnNUb1RlcnJhZm9ybSkodGhpcy5fY3JlYXRlRGF0YWJhc2VEZWZhdWx0UGVybWlzc2lvbnMpLFxuICAgICAgY3JlYXRlX3RhYmxlX2RlZmF1bHRfcGVybWlzc2lvbnM6IGNka3RmLmxpc3RNYXBwZXIobGFrZWZvcm1hdGlvbkRhdGFMYWtlU2V0dGluZ3NDcmVhdGVUYWJsZURlZmF1bHRQZXJtaXNzaW9uc1RvVGVycmFmb3JtKSh0aGlzLl9jcmVhdGVUYWJsZURlZmF1bHRQZXJtaXNzaW9ucyksXG4gICAgfTtcbiAgfVxufVxuIl19