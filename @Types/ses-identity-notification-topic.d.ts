import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Simple Email Service
*/
export interface SesIdentityNotificationTopicConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_identity_notification_topic.html#identity SesIdentityNotificationTopic#identity}
    */
    readonly identity: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_identity_notification_topic.html#include_original_headers SesIdentityNotificationTopic#include_original_headers}
    */
    readonly includeOriginalHeaders?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_identity_notification_topic.html#notification_type SesIdentityNotificationTopic#notification_type}
    */
    readonly notificationType: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_identity_notification_topic.html#topic_arn SesIdentityNotificationTopic#topic_arn}
    */
    readonly topicArn?: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/ses_identity_notification_topic.html aws_ses_identity_notification_topic}
*/
export declare class SesIdentityNotificationTopic extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ses_identity_notification_topic.html aws_ses_identity_notification_topic} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SesIdentityNotificationTopicConfig
    */
    constructor(scope: Construct, id: string, config: SesIdentityNotificationTopicConfig);
    get id(): string;
    private _identity?;
    get identity(): string;
    set identity(value: string);
    get identityInput(): string;
    private _includeOriginalHeaders?;
    get includeOriginalHeaders(): boolean | cdktf.IResolvable;
    set includeOriginalHeaders(value: boolean | cdktf.IResolvable);
    resetIncludeOriginalHeaders(): void;
    get includeOriginalHeadersInput(): boolean | cdktf.IResolvable;
    private _notificationType?;
    get notificationType(): string;
    set notificationType(value: string);
    get notificationTypeInput(): string;
    private _topicArn?;
    get topicArn(): string;
    set topicArn(value: string);
    resetTopicArn(): void;
    get topicArnInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=ses-identity-notification-topic.d.ts.map