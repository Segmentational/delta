import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* Access Analyzer Analyzer
*/
export interface AccessanalyzerAnalyzerConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/accessanalyzer_analyzer.html#analyzer_name AccessanalyzerAnalyzer#analyzer_name}
    */
    readonly analyzerName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/accessanalyzer_analyzer.html#tags AccessanalyzerAnalyzer#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/accessanalyzer_analyzer.html#tags_all AccessanalyzerAnalyzer#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/accessanalyzer_analyzer.html#type AccessanalyzerAnalyzer#type}
    */
    readonly type?: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/accessanalyzer_analyzer.html aws_accessanalyzer_analyzer}
*/
export declare class AccessanalyzerAnalyzer extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/accessanalyzer_analyzer.html aws_accessanalyzer_analyzer} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AccessanalyzerAnalyzerConfig
    */
    constructor(scope: Construct, id: string, config: AccessanalyzerAnalyzerConfig);
    private _analyzerName?;
    get analyzerName(): string;
    set analyzerName(value: string);
    get analyzerNameInput(): string;
    get arn(): string;
    get id(): string;
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
    private _type?;
    get type(): string;
    set type(value: string);
    resetType(): void;
    get typeInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=accessanalyzer-analyzer.d.ts.map