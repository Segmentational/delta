import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface StringConfig extends cdktf.TerraformMetaArguments {
    /**
    * Arbitrary map of values that, when changed, will trigger recreation of resource. See [the main provider documentation](../index.html) for more information.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/random/r/string.html#keepers String#keepers}
    */
    readonly keepers?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * The length of the string desired.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/random/r/string.html#length String#length}
    */
    readonly length: number;
    /**
    * Include lowercase alphabet characters in the result.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/random/r/string.html#lower String#lower}
    */
    readonly lower?: boolean | cdktf.IResolvable;
    /**
    * Minimum number of lowercase alphabet characters in the result.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/random/r/string.html#min_lower String#min_lower}
    */
    readonly minLower?: number;
    /**
    * Minimum number of numeric characters in the result.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/random/r/string.html#min_numeric String#min_numeric}
    */
    readonly minNumeric?: number;
    /**
    * Minimum number of special characters in the result.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/random/r/string.html#min_special String#min_special}
    */
    readonly minSpecial?: number;
    /**
    * Minimum number of uppercase alphabet characters in the result.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/random/r/string.html#min_upper String#min_upper}
    */
    readonly minUpper?: number;
    /**
    * Include numeric characters in the result.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/random/r/string.html#number String#number}
    */
    readonly number?: boolean | cdktf.IResolvable;
    /**
    * Supply your own list of special characters to use for string generation.  This overrides the default character list in the special argument.  The `special` argument must still be set to true for any overwritten characters to be used in generation.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/random/r/string.html#override_special String#override_special}
    */
    readonly overrideSpecial?: string;
    /**
    * Include special characters in the result. These are `!@#$%&*()-_=+[]{}<>:?`
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/random/r/string.html#special String#special}
    */
    readonly special?: boolean | cdktf.IResolvable;
    /**
    * Include uppercase alphabet characters in the result.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/random/r/string.html#upper String#upper}
    */
    readonly upper?: boolean | cdktf.IResolvable;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/random/r/string.html random_string}
*/
export declare class String extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/random/r/string.html random_string} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options StringConfig
    */
    constructor(scope: Construct, id: string, config: StringConfig);
    get id(): string;
    private _keepers?;
    get keepers(): {
        [key: string]: string;
    } | cdktf.IResolvable;
    set keepers(value: {
        [key: string]: string;
    } | cdktf.IResolvable);
    resetKeepers(): void;
    get keepersInput(): cdktf.IResolvable | {
        [key: string]: string;
    };
    private _length?;
    get length(): number;
    set length(value: number);
    get lengthInput(): number;
    private _lower?;
    get lower(): boolean | cdktf.IResolvable;
    set lower(value: boolean | cdktf.IResolvable);
    resetLower(): void;
    get lowerInput(): boolean | cdktf.IResolvable;
    private _minLower?;
    get minLower(): number;
    set minLower(value: number);
    resetMinLower(): void;
    get minLowerInput(): number;
    private _minNumeric?;
    get minNumeric(): number;
    set minNumeric(value: number);
    resetMinNumeric(): void;
    get minNumericInput(): number;
    private _minSpecial?;
    get minSpecial(): number;
    set minSpecial(value: number);
    resetMinSpecial(): void;
    get minSpecialInput(): number;
    private _minUpper?;
    get minUpper(): number;
    set minUpper(value: number);
    resetMinUpper(): void;
    get minUpperInput(): number;
    private _number?;
    get number(): boolean | cdktf.IResolvable;
    set number(value: boolean | cdktf.IResolvable);
    resetNumber(): void;
    get numberInput(): boolean | cdktf.IResolvable;
    private _overrideSpecial?;
    get overrideSpecial(): string;
    set overrideSpecial(value: string);
    resetOverrideSpecial(): void;
    get overrideSpecialInput(): string;
    get result(): string;
    private _special?;
    get special(): boolean | cdktf.IResolvable;
    set special(value: boolean | cdktf.IResolvable);
    resetSpecial(): void;
    get specialInput(): boolean | cdktf.IResolvable;
    private _upper?;
    get upper(): boolean | cdktf.IResolvable;
    set upper(value: boolean | cdktf.IResolvable);
    resetUpper(): void;
    get upperInput(): boolean | cdktf.IResolvable;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=string.d.ts.map