import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Simple Storage Service
*/
export interface S3BucketConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#acceleration_status S3Bucket#acceleration_status}
    */
    readonly accelerationStatus?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#acl S3Bucket#acl}
    */
    readonly acl?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#bucket S3Bucket#bucket}
    */
    readonly bucket?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#bucket_prefix S3Bucket#bucket_prefix}
    */
    readonly bucketPrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#force_destroy S3Bucket#force_destroy}
    */
    readonly forceDestroy?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#hosted_zone_id S3Bucket#hosted_zone_id}
    */
    readonly hostedZoneId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#policy S3Bucket#policy}
    */
    readonly policy?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#request_payer S3Bucket#request_payer}
    */
    readonly requestPayer?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#tags S3Bucket#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#tags_all S3Bucket#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#website_domain S3Bucket#website_domain}
    */
    readonly websiteDomain?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#website_endpoint S3Bucket#website_endpoint}
    */
    readonly websiteEndpoint?: string;
    /**
    * cors_rule block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#cors_rule S3Bucket#cors_rule}
    */
    readonly corsRule?: S3BucketCorsRule[];
    /**
    * grant block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#grant S3Bucket#grant}
    */
    readonly grant?: S3BucketGrant[];
    /**
    * lifecycle_rule block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#lifecycle_rule S3Bucket#lifecycle_rule}
    */
    readonly lifecycleRule?: S3BucketLifecycleRule[];
    /**
    * logging block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#logging S3Bucket#logging}
    */
    readonly logging?: S3BucketLogging[];
    /**
    * object_lock_configuration block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#object_lock_configuration S3Bucket#object_lock_configuration}
    */
    readonly objectLockConfiguration?: S3BucketObjectLockConfiguration;
    /**
    * replication_configuration block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#replication_configuration S3Bucket#replication_configuration}
    */
    readonly replicationConfiguration?: S3BucketReplicationConfiguration;
    /**
    * server_side_encryption_configuration block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#server_side_encryption_configuration S3Bucket#server_side_encryption_configuration}
    */
    readonly serverSideEncryptionConfiguration?: S3BucketServerSideEncryptionConfiguration;
    /**
    * versioning block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#versioning S3Bucket#versioning}
    */
    readonly versioning?: S3BucketVersioning;
    /**
    * website block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#website S3Bucket#website}
    */
    readonly website?: S3BucketWebsite;
}
export interface S3BucketCorsRule {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#allowed_headers S3Bucket#allowed_headers}
    */
    readonly allowedHeaders?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#allowed_methods S3Bucket#allowed_methods}
    */
    readonly allowedMethods: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#allowed_origins S3Bucket#allowed_origins}
    */
    readonly allowedOrigins: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#expose_headers S3Bucket#expose_headers}
    */
    readonly exposeHeaders?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#max_age_seconds S3Bucket#max_age_seconds}
    */
    readonly maxAgeSeconds?: number;
}
export declare function s3BucketCorsRuleToTerraform(struct?: S3BucketCorsRule): any;
export interface S3BucketGrant {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#id S3Bucket#id}
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#permissions S3Bucket#permissions}
    */
    readonly permissions: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#type S3Bucket#type}
    */
    readonly type: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#uri S3Bucket#uri}
    */
    readonly uri?: string;
}
export declare function s3BucketGrantToTerraform(struct?: S3BucketGrant): any;
export interface S3BucketLifecycleRuleExpiration {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#date S3Bucket#date}
    */
    readonly date?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#days S3Bucket#days}
    */
    readonly days?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#expired_object_delete_marker S3Bucket#expired_object_delete_marker}
    */
    readonly expiredObjectDeleteMarker?: boolean | cdktf.IResolvable;
}
export declare function s3BucketLifecycleRuleExpirationToTerraform(struct?: S3BucketLifecycleRuleExpirationOutputReference | S3BucketLifecycleRuleExpiration): any;
export declare class S3BucketLifecycleRuleExpirationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): S3BucketLifecycleRuleExpiration | undefined;
    set internalValue(value: S3BucketLifecycleRuleExpiration | undefined);
    private _date?;
    get date(): string;
    set date(value: string);
    resetDate(): void;
    get dateInput(): string;
    private _days?;
    get days(): number;
    set days(value: number);
    resetDays(): void;
    get daysInput(): number;
    private _expiredObjectDeleteMarker?;
    get expiredObjectDeleteMarker(): boolean | cdktf.IResolvable;
    set expiredObjectDeleteMarker(value: boolean | cdktf.IResolvable);
    resetExpiredObjectDeleteMarker(): void;
    get expiredObjectDeleteMarkerInput(): boolean | cdktf.IResolvable;
}
export interface S3BucketLifecycleRuleNoncurrentVersionExpiration {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#days S3Bucket#days}
    */
    readonly days?: number;
}
export declare function s3BucketLifecycleRuleNoncurrentVersionExpirationToTerraform(struct?: S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference | S3BucketLifecycleRuleNoncurrentVersionExpiration): any;
export declare class S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): S3BucketLifecycleRuleNoncurrentVersionExpiration | undefined;
    set internalValue(value: S3BucketLifecycleRuleNoncurrentVersionExpiration | undefined);
    private _days?;
    get days(): number;
    set days(value: number);
    resetDays(): void;
    get daysInput(): number;
}
export interface S3BucketLifecycleRuleNoncurrentVersionTransition {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#days S3Bucket#days}
    */
    readonly days?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#storage_class S3Bucket#storage_class}
    */
    readonly storageClass: string;
}
export declare function s3BucketLifecycleRuleNoncurrentVersionTransitionToTerraform(struct?: S3BucketLifecycleRuleNoncurrentVersionTransition): any;
export interface S3BucketLifecycleRuleTransition {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#date S3Bucket#date}
    */
    readonly date?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#days S3Bucket#days}
    */
    readonly days?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#storage_class S3Bucket#storage_class}
    */
    readonly storageClass: string;
}
export declare function s3BucketLifecycleRuleTransitionToTerraform(struct?: S3BucketLifecycleRuleTransition): any;
export interface S3BucketLifecycleRule {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#abort_incomplete_multipart_upload_days S3Bucket#abort_incomplete_multipart_upload_days}
    */
    readonly abortIncompleteMultipartUploadDays?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#enabled S3Bucket#enabled}
    */
    readonly enabled: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#id S3Bucket#id}
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#prefix S3Bucket#prefix}
    */
    readonly prefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#tags S3Bucket#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * expiration block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#expiration S3Bucket#expiration}
    */
    readonly expiration?: S3BucketLifecycleRuleExpiration;
    /**
    * noncurrent_version_expiration block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#noncurrent_version_expiration S3Bucket#noncurrent_version_expiration}
    */
    readonly noncurrentVersionExpiration?: S3BucketLifecycleRuleNoncurrentVersionExpiration;
    /**
    * noncurrent_version_transition block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#noncurrent_version_transition S3Bucket#noncurrent_version_transition}
    */
    readonly noncurrentVersionTransition?: S3BucketLifecycleRuleNoncurrentVersionTransition[];
    /**
    * transition block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#transition S3Bucket#transition}
    */
    readonly transition?: S3BucketLifecycleRuleTransition[];
}
export declare function s3BucketLifecycleRuleToTerraform(struct?: S3BucketLifecycleRule): any;
export interface S3BucketLogging {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#target_bucket S3Bucket#target_bucket}
    */
    readonly targetBucket: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#target_prefix S3Bucket#target_prefix}
    */
    readonly targetPrefix?: string;
}
export declare function s3BucketLoggingToTerraform(struct?: S3BucketLogging): any;
export interface S3BucketObjectLockConfigurationRuleDefaultRetention {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#days S3Bucket#days}
    */
    readonly days?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#mode S3Bucket#mode}
    */
    readonly mode: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#years S3Bucket#years}
    */
    readonly years?: number;
}
export declare function s3BucketObjectLockConfigurationRuleDefaultRetentionToTerraform(struct?: S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference | S3BucketObjectLockConfigurationRuleDefaultRetention): any;
export declare class S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): S3BucketObjectLockConfigurationRuleDefaultRetention | undefined;
    set internalValue(value: S3BucketObjectLockConfigurationRuleDefaultRetention | undefined);
    private _days?;
    get days(): number;
    set days(value: number);
    resetDays(): void;
    get daysInput(): number;
    private _mode?;
    get mode(): string;
    set mode(value: string);
    get modeInput(): string;
    private _years?;
    get years(): number;
    set years(value: number);
    resetYears(): void;
    get yearsInput(): number;
}
export interface S3BucketObjectLockConfigurationRule {
    /**
    * default_retention block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#default_retention S3Bucket#default_retention}
    */
    readonly defaultRetention: S3BucketObjectLockConfigurationRuleDefaultRetention;
}
export declare function s3BucketObjectLockConfigurationRuleToTerraform(struct?: S3BucketObjectLockConfigurationRuleOutputReference | S3BucketObjectLockConfigurationRule): any;
export declare class S3BucketObjectLockConfigurationRuleOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): S3BucketObjectLockConfigurationRule | undefined;
    set internalValue(value: S3BucketObjectLockConfigurationRule | undefined);
    private _defaultRetention;
    get defaultRetention(): S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference;
    putDefaultRetention(value: S3BucketObjectLockConfigurationRuleDefaultRetention): void;
    get defaultRetentionInput(): S3BucketObjectLockConfigurationRuleDefaultRetention;
}
export interface S3BucketObjectLockConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#object_lock_enabled S3Bucket#object_lock_enabled}
    */
    readonly objectLockEnabled: string;
    /**
    * rule block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#rule S3Bucket#rule}
    */
    readonly rule?: S3BucketObjectLockConfigurationRule;
}
export declare function s3BucketObjectLockConfigurationToTerraform(struct?: S3BucketObjectLockConfigurationOutputReference | S3BucketObjectLockConfiguration): any;
export declare class S3BucketObjectLockConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): S3BucketObjectLockConfiguration | undefined;
    set internalValue(value: S3BucketObjectLockConfiguration | undefined);
    private _objectLockEnabled?;
    get objectLockEnabled(): string;
    set objectLockEnabled(value: string);
    get objectLockEnabledInput(): string;
    private _rule;
    get rule(): S3BucketObjectLockConfigurationRuleOutputReference;
    putRule(value: S3BucketObjectLockConfigurationRule): void;
    resetRule(): void;
    get ruleInput(): S3BucketObjectLockConfigurationRule;
}
export interface S3BucketReplicationConfigurationRulesDestinationAccessControlTranslation {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#owner S3Bucket#owner}
    */
    readonly owner: string;
}
export declare function s3BucketReplicationConfigurationRulesDestinationAccessControlTranslationToTerraform(struct?: S3BucketReplicationConfigurationRulesDestinationAccessControlTranslationOutputReference | S3BucketReplicationConfigurationRulesDestinationAccessControlTranslation): any;
export declare class S3BucketReplicationConfigurationRulesDestinationAccessControlTranslationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): S3BucketReplicationConfigurationRulesDestinationAccessControlTranslation | undefined;
    set internalValue(value: S3BucketReplicationConfigurationRulesDestinationAccessControlTranslation | undefined);
    private _owner?;
    get owner(): string;
    set owner(value: string);
    get ownerInput(): string;
}
export interface S3BucketReplicationConfigurationRulesDestinationMetrics {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#minutes S3Bucket#minutes}
    */
    readonly minutes?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#status S3Bucket#status}
    */
    readonly status?: string;
}
export declare function s3BucketReplicationConfigurationRulesDestinationMetricsToTerraform(struct?: S3BucketReplicationConfigurationRulesDestinationMetricsOutputReference | S3BucketReplicationConfigurationRulesDestinationMetrics): any;
export declare class S3BucketReplicationConfigurationRulesDestinationMetricsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): S3BucketReplicationConfigurationRulesDestinationMetrics | undefined;
    set internalValue(value: S3BucketReplicationConfigurationRulesDestinationMetrics | undefined);
    private _minutes?;
    get minutes(): number;
    set minutes(value: number);
    resetMinutes(): void;
    get minutesInput(): number;
    private _status?;
    get status(): string;
    set status(value: string);
    resetStatus(): void;
    get statusInput(): string;
}
export interface S3BucketReplicationConfigurationRulesDestinationReplicationTime {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#minutes S3Bucket#minutes}
    */
    readonly minutes?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#status S3Bucket#status}
    */
    readonly status?: string;
}
export declare function s3BucketReplicationConfigurationRulesDestinationReplicationTimeToTerraform(struct?: S3BucketReplicationConfigurationRulesDestinationReplicationTimeOutputReference | S3BucketReplicationConfigurationRulesDestinationReplicationTime): any;
export declare class S3BucketReplicationConfigurationRulesDestinationReplicationTimeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): S3BucketReplicationConfigurationRulesDestinationReplicationTime | undefined;
    set internalValue(value: S3BucketReplicationConfigurationRulesDestinationReplicationTime | undefined);
    private _minutes?;
    get minutes(): number;
    set minutes(value: number);
    resetMinutes(): void;
    get minutesInput(): number;
    private _status?;
    get status(): string;
    set status(value: string);
    resetStatus(): void;
    get statusInput(): string;
}
export interface S3BucketReplicationConfigurationRulesDestination {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#account_id S3Bucket#account_id}
    */
    readonly accountId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#bucket S3Bucket#bucket}
    */
    readonly bucket: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#replica_kms_key_id S3Bucket#replica_kms_key_id}
    */
    readonly replicaKmsKeyId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#storage_class S3Bucket#storage_class}
    */
    readonly storageClass?: string;
    /**
    * access_control_translation block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#access_control_translation S3Bucket#access_control_translation}
    */
    readonly accessControlTranslation?: S3BucketReplicationConfigurationRulesDestinationAccessControlTranslation;
    /**
    * metrics block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#metrics S3Bucket#metrics}
    */
    readonly metrics?: S3BucketReplicationConfigurationRulesDestinationMetrics;
    /**
    * replication_time block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#replication_time S3Bucket#replication_time}
    */
    readonly replicationTime?: S3BucketReplicationConfigurationRulesDestinationReplicationTime;
}
export declare function s3BucketReplicationConfigurationRulesDestinationToTerraform(struct?: S3BucketReplicationConfigurationRulesDestinationOutputReference | S3BucketReplicationConfigurationRulesDestination): any;
export declare class S3BucketReplicationConfigurationRulesDestinationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): S3BucketReplicationConfigurationRulesDestination | undefined;
    set internalValue(value: S3BucketReplicationConfigurationRulesDestination | undefined);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    private _bucket?;
    get bucket(): string;
    set bucket(value: string);
    get bucketInput(): string;
    private _replicaKmsKeyId?;
    get replicaKmsKeyId(): string;
    set replicaKmsKeyId(value: string);
    resetReplicaKmsKeyId(): void;
    get replicaKmsKeyIdInput(): string;
    private _storageClass?;
    get storageClass(): string;
    set storageClass(value: string);
    resetStorageClass(): void;
    get storageClassInput(): string;
    private _accessControlTranslation;
    get accessControlTranslation(): S3BucketReplicationConfigurationRulesDestinationAccessControlTranslationOutputReference;
    putAccessControlTranslation(value: S3BucketReplicationConfigurationRulesDestinationAccessControlTranslation): void;
    resetAccessControlTranslation(): void;
    get accessControlTranslationInput(): S3BucketReplicationConfigurationRulesDestinationAccessControlTranslation;
    private _metrics;
    get metrics(): S3BucketReplicationConfigurationRulesDestinationMetricsOutputReference;
    putMetrics(value: S3BucketReplicationConfigurationRulesDestinationMetrics): void;
    resetMetrics(): void;
    get metricsInput(): S3BucketReplicationConfigurationRulesDestinationMetrics;
    private _replicationTime;
    get replicationTime(): S3BucketReplicationConfigurationRulesDestinationReplicationTimeOutputReference;
    putReplicationTime(value: S3BucketReplicationConfigurationRulesDestinationReplicationTime): void;
    resetReplicationTime(): void;
    get replicationTimeInput(): S3BucketReplicationConfigurationRulesDestinationReplicationTime;
}
export interface S3BucketReplicationConfigurationRulesFilter {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#prefix S3Bucket#prefix}
    */
    readonly prefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#tags S3Bucket#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
}
export declare function s3BucketReplicationConfigurationRulesFilterToTerraform(struct?: S3BucketReplicationConfigurationRulesFilterOutputReference | S3BucketReplicationConfigurationRulesFilter): any;
export declare class S3BucketReplicationConfigurationRulesFilterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): S3BucketReplicationConfigurationRulesFilter | undefined;
    set internalValue(value: S3BucketReplicationConfigurationRulesFilter | undefined);
    private _prefix?;
    get prefix(): string;
    set prefix(value: string);
    resetPrefix(): void;
    get prefixInput(): string;
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
}
export interface S3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjects {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#enabled S3Bucket#enabled}
    */
    readonly enabled: boolean | cdktf.IResolvable;
}
export declare function s3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjectsToTerraform(struct?: S3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference | S3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjects): any;
export declare class S3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): S3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjects | undefined;
    set internalValue(value: S3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjects | undefined);
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    get enabledInput(): boolean | cdktf.IResolvable;
}
export interface S3BucketReplicationConfigurationRulesSourceSelectionCriteria {
    /**
    * sse_kms_encrypted_objects block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#sse_kms_encrypted_objects S3Bucket#sse_kms_encrypted_objects}
    */
    readonly sseKmsEncryptedObjects?: S3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjects;
}
export declare function s3BucketReplicationConfigurationRulesSourceSelectionCriteriaToTerraform(struct?: S3BucketReplicationConfigurationRulesSourceSelectionCriteriaOutputReference | S3BucketReplicationConfigurationRulesSourceSelectionCriteria): any;
export declare class S3BucketReplicationConfigurationRulesSourceSelectionCriteriaOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): S3BucketReplicationConfigurationRulesSourceSelectionCriteria | undefined;
    set internalValue(value: S3BucketReplicationConfigurationRulesSourceSelectionCriteria | undefined);
    private _sseKmsEncryptedObjects;
    get sseKmsEncryptedObjects(): S3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference;
    putSseKmsEncryptedObjects(value: S3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjects): void;
    resetSseKmsEncryptedObjects(): void;
    get sseKmsEncryptedObjectsInput(): S3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjects;
}
export interface S3BucketReplicationConfigurationRules {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#delete_marker_replication_status S3Bucket#delete_marker_replication_status}
    */
    readonly deleteMarkerReplicationStatus?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#id S3Bucket#id}
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#prefix S3Bucket#prefix}
    */
    readonly prefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#priority S3Bucket#priority}
    */
    readonly priority?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#status S3Bucket#status}
    */
    readonly status: string;
    /**
    * destination block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#destination S3Bucket#destination}
    */
    readonly destination: S3BucketReplicationConfigurationRulesDestination;
    /**
    * filter block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#filter S3Bucket#filter}
    */
    readonly filter?: S3BucketReplicationConfigurationRulesFilter;
    /**
    * source_selection_criteria block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#source_selection_criteria S3Bucket#source_selection_criteria}
    */
    readonly sourceSelectionCriteria?: S3BucketReplicationConfigurationRulesSourceSelectionCriteria;
}
export declare function s3BucketReplicationConfigurationRulesToTerraform(struct?: S3BucketReplicationConfigurationRules): any;
export interface S3BucketReplicationConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#role S3Bucket#role}
    */
    readonly role: string;
    /**
    * rules block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#rules S3Bucket#rules}
    */
    readonly rules: S3BucketReplicationConfigurationRules[];
}
export declare function s3BucketReplicationConfigurationToTerraform(struct?: S3BucketReplicationConfigurationOutputReference | S3BucketReplicationConfiguration): any;
export declare class S3BucketReplicationConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): S3BucketReplicationConfiguration | undefined;
    set internalValue(value: S3BucketReplicationConfiguration | undefined);
    private _role?;
    get role(): string;
    set role(value: string);
    get roleInput(): string;
    private _rules?;
    get rules(): S3BucketReplicationConfigurationRules[];
    set rules(value: S3BucketReplicationConfigurationRules[]);
    get rulesInput(): S3BucketReplicationConfigurationRules[];
}
export interface S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefault {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#kms_master_key_id S3Bucket#kms_master_key_id}
    */
    readonly kmsMasterKeyId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#sse_algorithm S3Bucket#sse_algorithm}
    */
    readonly sseAlgorithm: string;
}
export declare function s3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultToTerraform(struct?: S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultOutputReference | S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefault): any;
export declare class S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefault | undefined;
    set internalValue(value: S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefault | undefined);
    private _kmsMasterKeyId?;
    get kmsMasterKeyId(): string;
    set kmsMasterKeyId(value: string);
    resetKmsMasterKeyId(): void;
    get kmsMasterKeyIdInput(): string;
    private _sseAlgorithm?;
    get sseAlgorithm(): string;
    set sseAlgorithm(value: string);
    get sseAlgorithmInput(): string;
}
export interface S3BucketServerSideEncryptionConfigurationRule {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#bucket_key_enabled S3Bucket#bucket_key_enabled}
    */
    readonly bucketKeyEnabled?: boolean | cdktf.IResolvable;
    /**
    * apply_server_side_encryption_by_default block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#apply_server_side_encryption_by_default S3Bucket#apply_server_side_encryption_by_default}
    */
    readonly applyServerSideEncryptionByDefault: S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefault;
}
export declare function s3BucketServerSideEncryptionConfigurationRuleToTerraform(struct?: S3BucketServerSideEncryptionConfigurationRuleOutputReference | S3BucketServerSideEncryptionConfigurationRule): any;
export declare class S3BucketServerSideEncryptionConfigurationRuleOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): S3BucketServerSideEncryptionConfigurationRule | undefined;
    set internalValue(value: S3BucketServerSideEncryptionConfigurationRule | undefined);
    private _bucketKeyEnabled?;
    get bucketKeyEnabled(): boolean | cdktf.IResolvable;
    set bucketKeyEnabled(value: boolean | cdktf.IResolvable);
    resetBucketKeyEnabled(): void;
    get bucketKeyEnabledInput(): boolean | cdktf.IResolvable;
    private _applyServerSideEncryptionByDefault;
    get applyServerSideEncryptionByDefault(): S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultOutputReference;
    putApplyServerSideEncryptionByDefault(value: S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefault): void;
    get applyServerSideEncryptionByDefaultInput(): S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefault;
}
export interface S3BucketServerSideEncryptionConfiguration {
    /**
    * rule block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#rule S3Bucket#rule}
    */
    readonly rule: S3BucketServerSideEncryptionConfigurationRule;
}
export declare function s3BucketServerSideEncryptionConfigurationToTerraform(struct?: S3BucketServerSideEncryptionConfigurationOutputReference | S3BucketServerSideEncryptionConfiguration): any;
export declare class S3BucketServerSideEncryptionConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): S3BucketServerSideEncryptionConfiguration | undefined;
    set internalValue(value: S3BucketServerSideEncryptionConfiguration | undefined);
    private _rule;
    get rule(): S3BucketServerSideEncryptionConfigurationRuleOutputReference;
    putRule(value: S3BucketServerSideEncryptionConfigurationRule): void;
    get ruleInput(): S3BucketServerSideEncryptionConfigurationRule;
}
export interface S3BucketVersioning {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#enabled S3Bucket#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#mfa_delete S3Bucket#mfa_delete}
    */
    readonly mfaDelete?: boolean | cdktf.IResolvable;
}
export declare function s3BucketVersioningToTerraform(struct?: S3BucketVersioningOutputReference | S3BucketVersioning): any;
export declare class S3BucketVersioningOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): S3BucketVersioning | undefined;
    set internalValue(value: S3BucketVersioning | undefined);
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    resetEnabled(): void;
    get enabledInput(): boolean | cdktf.IResolvable;
    private _mfaDelete?;
    get mfaDelete(): boolean | cdktf.IResolvable;
    set mfaDelete(value: boolean | cdktf.IResolvable);
    resetMfaDelete(): void;
    get mfaDeleteInput(): boolean | cdktf.IResolvable;
}
export interface S3BucketWebsite {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#error_document S3Bucket#error_document}
    */
    readonly errorDocument?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#index_document S3Bucket#index_document}
    */
    readonly indexDocument?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#redirect_all_requests_to S3Bucket#redirect_all_requests_to}
    */
    readonly redirectAllRequestsTo?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#routing_rules S3Bucket#routing_rules}
    */
    readonly routingRules?: string;
}
export declare function s3BucketWebsiteToTerraform(struct?: S3BucketWebsiteOutputReference | S3BucketWebsite): any;
export declare class S3BucketWebsiteOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): S3BucketWebsite | undefined;
    set internalValue(value: S3BucketWebsite | undefined);
    private _errorDocument?;
    get errorDocument(): string;
    set errorDocument(value: string);
    resetErrorDocument(): void;
    get errorDocumentInput(): string;
    private _indexDocument?;
    get indexDocument(): string;
    set indexDocument(value: string);
    resetIndexDocument(): void;
    get indexDocumentInput(): string;
    private _redirectAllRequestsTo?;
    get redirectAllRequestsTo(): string;
    set redirectAllRequestsTo(value: string);
    resetRedirectAllRequestsTo(): void;
    get redirectAllRequestsToInput(): string;
    private _routingRules?;
    get routingRules(): string;
    set routingRules(value: string);
    resetRoutingRules(): void;
    get routingRulesInput(): string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html aws_s3_bucket}
*/
export declare class S3Bucket extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html aws_s3_bucket} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options S3BucketConfig = {}
    */
    constructor(scope: Construct, id: string, config?: S3BucketConfig);
    private _accelerationStatus?;
    get accelerationStatus(): string;
    set accelerationStatus(value: string);
    resetAccelerationStatus(): void;
    get accelerationStatusInput(): string;
    private _acl?;
    get acl(): string;
    set acl(value: string);
    resetAcl(): void;
    get aclInput(): string;
    get arn(): string;
    private _bucket?;
    get bucket(): string;
    set bucket(value: string);
    resetBucket(): void;
    get bucketInput(): string;
    get bucketDomainName(): string;
    private _bucketPrefix?;
    get bucketPrefix(): string;
    set bucketPrefix(value: string);
    resetBucketPrefix(): void;
    get bucketPrefixInput(): string;
    get bucketRegionalDomainName(): string;
    private _forceDestroy?;
    get forceDestroy(): boolean | cdktf.IResolvable;
    set forceDestroy(value: boolean | cdktf.IResolvable);
    resetForceDestroy(): void;
    get forceDestroyInput(): boolean | cdktf.IResolvable;
    private _hostedZoneId?;
    get hostedZoneId(): string;
    set hostedZoneId(value: string);
    resetHostedZoneId(): void;
    get hostedZoneIdInput(): string;
    get id(): string;
    private _policy?;
    get policy(): string;
    set policy(value: string);
    resetPolicy(): void;
    get policyInput(): string;
    get region(): string;
    private _requestPayer?;
    get requestPayer(): string;
    set requestPayer(value: string);
    resetRequestPayer(): void;
    get requestPayerInput(): string;
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
    private _websiteDomain?;
    get websiteDomain(): string;
    set websiteDomain(value: string);
    resetWebsiteDomain(): void;
    get websiteDomainInput(): string;
    private _websiteEndpoint?;
    get websiteEndpoint(): string;
    set websiteEndpoint(value: string);
    resetWebsiteEndpoint(): void;
    get websiteEndpointInput(): string;
    private _corsRule?;
    get corsRule(): S3BucketCorsRule[];
    set corsRule(value: S3BucketCorsRule[]);
    resetCorsRule(): void;
    get corsRuleInput(): S3BucketCorsRule[];
    private _grant?;
    get grant(): S3BucketGrant[];
    set grant(value: S3BucketGrant[]);
    resetGrant(): void;
    get grantInput(): S3BucketGrant[];
    private _lifecycleRule?;
    get lifecycleRule(): S3BucketLifecycleRule[];
    set lifecycleRule(value: S3BucketLifecycleRule[]);
    resetLifecycleRule(): void;
    get lifecycleRuleInput(): S3BucketLifecycleRule[];
    private _logging?;
    get logging(): S3BucketLogging[];
    set logging(value: S3BucketLogging[]);
    resetLogging(): void;
    get loggingInput(): S3BucketLogging[];
    private _objectLockConfiguration;
    get objectLockConfiguration(): S3BucketObjectLockConfigurationOutputReference;
    putObjectLockConfiguration(value: S3BucketObjectLockConfiguration): void;
    resetObjectLockConfiguration(): void;
    get objectLockConfigurationInput(): S3BucketObjectLockConfiguration;
    private _replicationConfiguration;
    get replicationConfiguration(): S3BucketReplicationConfigurationOutputReference;
    putReplicationConfiguration(value: S3BucketReplicationConfiguration): void;
    resetReplicationConfiguration(): void;
    get replicationConfigurationInput(): S3BucketReplicationConfiguration;
    private _serverSideEncryptionConfiguration;
    get serverSideEncryptionConfiguration(): S3BucketServerSideEncryptionConfigurationOutputReference;
    putServerSideEncryptionConfiguration(value: S3BucketServerSideEncryptionConfiguration): void;
    resetServerSideEncryptionConfiguration(): void;
    get serverSideEncryptionConfigurationInput(): S3BucketServerSideEncryptionConfiguration;
    private _versioning;
    get versioning(): S3BucketVersioningOutputReference;
    putVersioning(value: S3BucketVersioning): void;
    resetVersioning(): void;
    get versioningInput(): S3BucketVersioning;
    private _website;
    get website(): S3BucketWebsiteOutputReference;
    putWebsite(value: S3BucketWebsite): void;
    resetWebsite(): void;
    get websiteInput(): S3BucketWebsite;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=s3-bucket.d.ts.map