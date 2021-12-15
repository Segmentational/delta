import * as cdktf from 'cdktf';
export function wafv2RuleGroupCustomResponseBodyToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        content: cdktf.stringToTerraform(struct.content),
        content_type: cdktf.stringToTerraform(struct.contentType),
        key: cdktf.stringToTerraform(struct.key),
    };
}
export function wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
        value: cdktf.stringToTerraform(struct.value),
    };
}
export function wafv2RuleGroupRuleActionAllowCustomRequestHandlingToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        insert_header: cdktf.listMapper(wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderToTerraform)(struct.insertHeader),
    };
}
export class Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._insertHeader) {
            hasAnyValues = true;
            internalValueResult.insertHeader = this._insertHeader;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._insertHeader = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._insertHeader = value.insertHeader;
        }
    }
    // insert_header - computed: false, optional: false, required: true
    _insertHeader;
    get insertHeader() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('insert_header');
    }
    set insertHeader(value) {
        this._insertHeader = value;
    }
    // Temporarily expose input value. Use with caution.
    get insertHeaderInput() {
        return this._insertHeader;
    }
}
export function wafv2RuleGroupRuleActionAllowToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        custom_request_handling: wafv2RuleGroupRuleActionAllowCustomRequestHandlingToTerraform(struct.customRequestHandling),
    };
}
export class Wafv2RuleGroupRuleActionAllowOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._customRequestHandling?.internalValue) {
            hasAnyValues = true;
            internalValueResult.customRequestHandling = this._customRequestHandling?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._customRequestHandling.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._customRequestHandling.internalValue = value.customRequestHandling;
        }
    }
    // custom_request_handling - computed: false, optional: true, required: false
    _customRequestHandling = new Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference(this, "custom_request_handling", true);
    get customRequestHandling() {
        return this._customRequestHandling;
    }
    putCustomRequestHandling(value) {
        this._customRequestHandling.internalValue = value;
    }
    resetCustomRequestHandling() {
        this._customRequestHandling.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get customRequestHandlingInput() {
        return this._customRequestHandling.internalValue;
    }
}
export function wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
        value: cdktf.stringToTerraform(struct.value),
    };
}
export function wafv2RuleGroupRuleActionBlockCustomResponseToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        custom_response_body_key: cdktf.stringToTerraform(struct.customResponseBodyKey),
        response_code: cdktf.numberToTerraform(struct.responseCode),
        response_header: cdktf.listMapper(wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderToTerraform)(struct.responseHeader),
    };
}
export class Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._customResponseBodyKey) {
            hasAnyValues = true;
            internalValueResult.customResponseBodyKey = this._customResponseBodyKey;
        }
        if (this._responseCode) {
            hasAnyValues = true;
            internalValueResult.responseCode = this._responseCode;
        }
        if (this._responseHeader) {
            hasAnyValues = true;
            internalValueResult.responseHeader = this._responseHeader;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._customResponseBodyKey = undefined;
            this._responseCode = undefined;
            this._responseHeader = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._customResponseBodyKey = value.customResponseBodyKey;
            this._responseCode = value.responseCode;
            this._responseHeader = value.responseHeader;
        }
    }
    // custom_response_body_key - computed: false, optional: true, required: false
    _customResponseBodyKey;
    get customResponseBodyKey() {
        return this.getStringAttribute('custom_response_body_key');
    }
    set customResponseBodyKey(value) {
        this._customResponseBodyKey = value;
    }
    resetCustomResponseBodyKey() {
        this._customResponseBodyKey = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get customResponseBodyKeyInput() {
        return this._customResponseBodyKey;
    }
    // response_code - computed: false, optional: false, required: true
    _responseCode;
    get responseCode() {
        return this.getNumberAttribute('response_code');
    }
    set responseCode(value) {
        this._responseCode = value;
    }
    // Temporarily expose input value. Use with caution.
    get responseCodeInput() {
        return this._responseCode;
    }
    // response_header - computed: false, optional: true, required: false
    _responseHeader;
    get responseHeader() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('response_header');
    }
    set responseHeader(value) {
        this._responseHeader = value;
    }
    resetResponseHeader() {
        this._responseHeader = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get responseHeaderInput() {
        return this._responseHeader;
    }
}
export function wafv2RuleGroupRuleActionBlockToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        custom_response: wafv2RuleGroupRuleActionBlockCustomResponseToTerraform(struct.customResponse),
    };
}
export class Wafv2RuleGroupRuleActionBlockOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._customResponse?.internalValue) {
            hasAnyValues = true;
            internalValueResult.customResponse = this._customResponse?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._customResponse.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._customResponse.internalValue = value.customResponse;
        }
    }
    // custom_response - computed: false, optional: true, required: false
    _customResponse = new Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference(this, "custom_response", true);
    get customResponse() {
        return this._customResponse;
    }
    putCustomResponse(value) {
        this._customResponse.internalValue = value;
    }
    resetCustomResponse() {
        this._customResponse.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get customResponseInput() {
        return this._customResponse.internalValue;
    }
}
export function wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
        value: cdktf.stringToTerraform(struct.value),
    };
}
export function wafv2RuleGroupRuleActionCountCustomRequestHandlingToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        insert_header: cdktf.listMapper(wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderToTerraform)(struct.insertHeader),
    };
}
export class Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._insertHeader) {
            hasAnyValues = true;
            internalValueResult.insertHeader = this._insertHeader;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._insertHeader = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._insertHeader = value.insertHeader;
        }
    }
    // insert_header - computed: false, optional: false, required: true
    _insertHeader;
    get insertHeader() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('insert_header');
    }
    set insertHeader(value) {
        this._insertHeader = value;
    }
    // Temporarily expose input value. Use with caution.
    get insertHeaderInput() {
        return this._insertHeader;
    }
}
export function wafv2RuleGroupRuleActionCountToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        custom_request_handling: wafv2RuleGroupRuleActionCountCustomRequestHandlingToTerraform(struct.customRequestHandling),
    };
}
export class Wafv2RuleGroupRuleActionCountOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._customRequestHandling?.internalValue) {
            hasAnyValues = true;
            internalValueResult.customRequestHandling = this._customRequestHandling?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._customRequestHandling.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._customRequestHandling.internalValue = value.customRequestHandling;
        }
    }
    // custom_request_handling - computed: false, optional: true, required: false
    _customRequestHandling = new Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference(this, "custom_request_handling", true);
    get customRequestHandling() {
        return this._customRequestHandling;
    }
    putCustomRequestHandling(value) {
        this._customRequestHandling.internalValue = value;
    }
    resetCustomRequestHandling() {
        this._customRequestHandling.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get customRequestHandlingInput() {
        return this._customRequestHandling.internalValue;
    }
}
export function wafv2RuleGroupRuleActionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        allow: wafv2RuleGroupRuleActionAllowToTerraform(struct.allow),
        block: wafv2RuleGroupRuleActionBlockToTerraform(struct.block),
        count: wafv2RuleGroupRuleActionCountToTerraform(struct.count),
    };
}
export class Wafv2RuleGroupRuleActionOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._allow?.internalValue) {
            hasAnyValues = true;
            internalValueResult.allow = this._allow?.internalValue;
        }
        if (this._block?.internalValue) {
            hasAnyValues = true;
            internalValueResult.block = this._block?.internalValue;
        }
        if (this._count?.internalValue) {
            hasAnyValues = true;
            internalValueResult.count = this._count?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._allow.internalValue = undefined;
            this._block.internalValue = undefined;
            this._count.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._allow.internalValue = value.allow;
            this._block.internalValue = value.block;
            this._count.internalValue = value.count;
        }
    }
    // allow - computed: false, optional: true, required: false
    _allow = new Wafv2RuleGroupRuleActionAllowOutputReference(this, "allow", true);
    get allow() {
        return this._allow;
    }
    putAllow(value) {
        this._allow.internalValue = value;
    }
    resetAllow() {
        this._allow.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get allowInput() {
        return this._allow.internalValue;
    }
    // block - computed: false, optional: true, required: false
    _block = new Wafv2RuleGroupRuleActionBlockOutputReference(this, "block", true);
    get block() {
        return this._block;
    }
    putBlock(value) {
        this._block.internalValue = value;
    }
    resetBlock() {
        this._block.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get blockInput() {
        return this._block.internalValue;
    }
    // count - computed: false, optional: true, required: false
    _count = new Wafv2RuleGroupRuleActionCountOutputReference(this, "count", true);
    get count() {
        return this._count;
    }
    putCount(value) {
        this._count.internalValue = value;
    }
    resetCount() {
        this._count.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get countInput() {
        return this._count.internalValue;
    }
}
export function wafv2RuleGroupRuleRuleLabelToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
    };
}
export function wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchBodyToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchMethodToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchQueryStringToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleHeaderToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
    };
}
export class Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._name) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._name = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._name = value.name;
        }
    }
    // name - computed: false, optional: false, required: true
    _name;
    get name() {
        return this.getStringAttribute('name');
    }
    set name(value) {
        this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    get nameInput() {
        return this._name;
    }
}
export function wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
    };
}
export class Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._name) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._name = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._name = value.name;
        }
    }
    // name - computed: false, optional: false, required: true
    _name;
    get name() {
        return this.getStringAttribute('name');
    }
    set name(value) {
        this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    get nameInput() {
        return this._name;
    }
}
export function wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchUriPathToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        all_query_arguments: wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct.allQueryArguments),
        body: wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchBodyToTerraform(struct.body),
        method: wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchMethodToTerraform(struct.method),
        query_string: wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchQueryStringToTerraform(struct.queryString),
        single_header: wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleHeaderToTerraform(struct.singleHeader),
        single_query_argument: wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct.singleQueryArgument),
        uri_path: wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchUriPathToTerraform(struct.uriPath),
    };
}
export class Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._allQueryArguments?.internalValue) {
            hasAnyValues = true;
            internalValueResult.allQueryArguments = this._allQueryArguments?.internalValue;
        }
        if (this._body?.internalValue) {
            hasAnyValues = true;
            internalValueResult.body = this._body?.internalValue;
        }
        if (this._method?.internalValue) {
            hasAnyValues = true;
            internalValueResult.method = this._method?.internalValue;
        }
        if (this._queryString?.internalValue) {
            hasAnyValues = true;
            internalValueResult.queryString = this._queryString?.internalValue;
        }
        if (this._singleHeader?.internalValue) {
            hasAnyValues = true;
            internalValueResult.singleHeader = this._singleHeader?.internalValue;
        }
        if (this._singleQueryArgument?.internalValue) {
            hasAnyValues = true;
            internalValueResult.singleQueryArgument = this._singleQueryArgument?.internalValue;
        }
        if (this._uriPath?.internalValue) {
            hasAnyValues = true;
            internalValueResult.uriPath = this._uriPath?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._allQueryArguments.internalValue = undefined;
            this._body.internalValue = undefined;
            this._method.internalValue = undefined;
            this._queryString.internalValue = undefined;
            this._singleHeader.internalValue = undefined;
            this._singleQueryArgument.internalValue = undefined;
            this._uriPath.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._allQueryArguments.internalValue = value.allQueryArguments;
            this._body.internalValue = value.body;
            this._method.internalValue = value.method;
            this._queryString.internalValue = value.queryString;
            this._singleHeader.internalValue = value.singleHeader;
            this._singleQueryArgument.internalValue = value.singleQueryArgument;
            this._uriPath.internalValue = value.uriPath;
        }
    }
    // all_query_arguments - computed: false, optional: true, required: false
    _allQueryArguments = new Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsOutputReference(this, "all_query_arguments", true);
    get allQueryArguments() {
        return this._allQueryArguments;
    }
    putAllQueryArguments(value) {
        this._allQueryArguments.internalValue = value;
    }
    resetAllQueryArguments() {
        this._allQueryArguments.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get allQueryArgumentsInput() {
        return this._allQueryArguments.internalValue;
    }
    // body - computed: false, optional: true, required: false
    _body = new Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchBodyOutputReference(this, "body", true);
    get body() {
        return this._body;
    }
    putBody(value) {
        this._body.internalValue = value;
    }
    resetBody() {
        this._body.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get bodyInput() {
        return this._body.internalValue;
    }
    // method - computed: false, optional: true, required: false
    _method = new Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchMethodOutputReference(this, "method", true);
    get method() {
        return this._method;
    }
    putMethod(value) {
        this._method.internalValue = value;
    }
    resetMethod() {
        this._method.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get methodInput() {
        return this._method.internalValue;
    }
    // query_string - computed: false, optional: true, required: false
    _queryString = new Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchQueryStringOutputReference(this, "query_string", true);
    get queryString() {
        return this._queryString;
    }
    putQueryString(value) {
        this._queryString.internalValue = value;
    }
    resetQueryString() {
        this._queryString.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get queryStringInput() {
        return this._queryString.internalValue;
    }
    // single_header - computed: false, optional: true, required: false
    _singleHeader = new Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleHeaderOutputReference(this, "single_header", true);
    get singleHeader() {
        return this._singleHeader;
    }
    putSingleHeader(value) {
        this._singleHeader.internalValue = value;
    }
    resetSingleHeader() {
        this._singleHeader.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get singleHeaderInput() {
        return this._singleHeader.internalValue;
    }
    // single_query_argument - computed: false, optional: true, required: false
    _singleQueryArgument = new Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentOutputReference(this, "single_query_argument", true);
    get singleQueryArgument() {
        return this._singleQueryArgument;
    }
    putSingleQueryArgument(value) {
        this._singleQueryArgument.internalValue = value;
    }
    resetSingleQueryArgument() {
        this._singleQueryArgument.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get singleQueryArgumentInput() {
        return this._singleQueryArgument.internalValue;
    }
    // uri_path - computed: false, optional: true, required: false
    _uriPath = new Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchUriPathOutputReference(this, "uri_path", true);
    get uriPath() {
        return this._uriPath;
    }
    putUriPath(value) {
        this._uriPath.internalValue = value;
    }
    resetUriPath() {
        this._uriPath.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get uriPathInput() {
        return this._uriPath.internalValue;
    }
}
export function wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementByteMatchStatementTextTransformationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        priority: cdktf.numberToTerraform(struct.priority),
        type: cdktf.stringToTerraform(struct.type),
    };
}
export function wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementByteMatchStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        positional_constraint: cdktf.stringToTerraform(struct.positionalConstraint),
        search_string: cdktf.stringToTerraform(struct.searchString),
        field_to_match: wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchToTerraform(struct.fieldToMatch),
        text_transformation: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementByteMatchStatementTextTransformationToTerraform)(struct.textTransformation),
    };
}
export class Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementByteMatchStatementOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._positionalConstraint) {
            hasAnyValues = true;
            internalValueResult.positionalConstraint = this._positionalConstraint;
        }
        if (this._searchString) {
            hasAnyValues = true;
            internalValueResult.searchString = this._searchString;
        }
        if (this._fieldToMatch?.internalValue) {
            hasAnyValues = true;
            internalValueResult.fieldToMatch = this._fieldToMatch?.internalValue;
        }
        if (this._textTransformation) {
            hasAnyValues = true;
            internalValueResult.textTransformation = this._textTransformation;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._positionalConstraint = undefined;
            this._searchString = undefined;
            this._fieldToMatch.internalValue = undefined;
            this._textTransformation = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._positionalConstraint = value.positionalConstraint;
            this._searchString = value.searchString;
            this._fieldToMatch.internalValue = value.fieldToMatch;
            this._textTransformation = value.textTransformation;
        }
    }
    // positional_constraint - computed: false, optional: false, required: true
    _positionalConstraint;
    get positionalConstraint() {
        return this.getStringAttribute('positional_constraint');
    }
    set positionalConstraint(value) {
        this._positionalConstraint = value;
    }
    // Temporarily expose input value. Use with caution.
    get positionalConstraintInput() {
        return this._positionalConstraint;
    }
    // search_string - computed: false, optional: false, required: true
    _searchString;
    get searchString() {
        return this.getStringAttribute('search_string');
    }
    set searchString(value) {
        this._searchString = value;
    }
    // Temporarily expose input value. Use with caution.
    get searchStringInput() {
        return this._searchString;
    }
    // field_to_match - computed: false, optional: true, required: false
    _fieldToMatch = new Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchOutputReference(this, "field_to_match", true);
    get fieldToMatch() {
        return this._fieldToMatch;
    }
    putFieldToMatch(value) {
        this._fieldToMatch.internalValue = value;
    }
    resetFieldToMatch() {
        this._fieldToMatch.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get fieldToMatchInput() {
        return this._fieldToMatch.internalValue;
    }
    // text_transformation - computed: false, optional: false, required: true
    _textTransformation;
    get textTransformation() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('text_transformation');
    }
    set textTransformation(value) {
        this._textTransformation = value;
    }
    // Temporarily expose input value. Use with caution.
    get textTransformationInput() {
        return this._textTransformation;
    }
}
export function wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementGeoMatchStatementForwardedIpConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        fallback_behavior: cdktf.stringToTerraform(struct.fallbackBehavior),
        header_name: cdktf.stringToTerraform(struct.headerName),
    };
}
export class Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementGeoMatchStatementForwardedIpConfigOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._fallbackBehavior) {
            hasAnyValues = true;
            internalValueResult.fallbackBehavior = this._fallbackBehavior;
        }
        if (this._headerName) {
            hasAnyValues = true;
            internalValueResult.headerName = this._headerName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._fallbackBehavior = undefined;
            this._headerName = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._fallbackBehavior = value.fallbackBehavior;
            this._headerName = value.headerName;
        }
    }
    // fallback_behavior - computed: false, optional: false, required: true
    _fallbackBehavior;
    get fallbackBehavior() {
        return this.getStringAttribute('fallback_behavior');
    }
    set fallbackBehavior(value) {
        this._fallbackBehavior = value;
    }
    // Temporarily expose input value. Use with caution.
    get fallbackBehaviorInput() {
        return this._fallbackBehavior;
    }
    // header_name - computed: false, optional: false, required: true
    _headerName;
    get headerName() {
        return this.getStringAttribute('header_name');
    }
    set headerName(value) {
        this._headerName = value;
    }
    // Temporarily expose input value. Use with caution.
    get headerNameInput() {
        return this._headerName;
    }
}
export function wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementGeoMatchStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        country_codes: cdktf.listMapper(cdktf.stringToTerraform)(struct.countryCodes),
        forwarded_ip_config: wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementGeoMatchStatementForwardedIpConfigToTerraform(struct.forwardedIpConfig),
    };
}
export class Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementGeoMatchStatementOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._countryCodes) {
            hasAnyValues = true;
            internalValueResult.countryCodes = this._countryCodes;
        }
        if (this._forwardedIpConfig?.internalValue) {
            hasAnyValues = true;
            internalValueResult.forwardedIpConfig = this._forwardedIpConfig?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._countryCodes = undefined;
            this._forwardedIpConfig.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._countryCodes = value.countryCodes;
            this._forwardedIpConfig.internalValue = value.forwardedIpConfig;
        }
    }
    // country_codes - computed: false, optional: false, required: true
    _countryCodes;
    get countryCodes() {
        return this.getListAttribute('country_codes');
    }
    set countryCodes(value) {
        this._countryCodes = value;
    }
    // Temporarily expose input value. Use with caution.
    get countryCodesInput() {
        return this._countryCodes;
    }
    // forwarded_ip_config - computed: false, optional: true, required: false
    _forwardedIpConfig = new Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementGeoMatchStatementForwardedIpConfigOutputReference(this, "forwarded_ip_config", true);
    get forwardedIpConfig() {
        return this._forwardedIpConfig;
    }
    putForwardedIpConfig(value) {
        this._forwardedIpConfig.internalValue = value;
    }
    resetForwardedIpConfig() {
        this._forwardedIpConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get forwardedIpConfigInput() {
        return this._forwardedIpConfig.internalValue;
    }
}
export function wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementIpSetReferenceStatementIpSetForwardedIpConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        fallback_behavior: cdktf.stringToTerraform(struct.fallbackBehavior),
        header_name: cdktf.stringToTerraform(struct.headerName),
        position: cdktf.stringToTerraform(struct.position),
    };
}
export class Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementIpSetReferenceStatementIpSetForwardedIpConfigOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._fallbackBehavior) {
            hasAnyValues = true;
            internalValueResult.fallbackBehavior = this._fallbackBehavior;
        }
        if (this._headerName) {
            hasAnyValues = true;
            internalValueResult.headerName = this._headerName;
        }
        if (this._position) {
            hasAnyValues = true;
            internalValueResult.position = this._position;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._fallbackBehavior = undefined;
            this._headerName = undefined;
            this._position = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._fallbackBehavior = value.fallbackBehavior;
            this._headerName = value.headerName;
            this._position = value.position;
        }
    }
    // fallback_behavior - computed: false, optional: false, required: true
    _fallbackBehavior;
    get fallbackBehavior() {
        return this.getStringAttribute('fallback_behavior');
    }
    set fallbackBehavior(value) {
        this._fallbackBehavior = value;
    }
    // Temporarily expose input value. Use with caution.
    get fallbackBehaviorInput() {
        return this._fallbackBehavior;
    }
    // header_name - computed: false, optional: false, required: true
    _headerName;
    get headerName() {
        return this.getStringAttribute('header_name');
    }
    set headerName(value) {
        this._headerName = value;
    }
    // Temporarily expose input value. Use with caution.
    get headerNameInput() {
        return this._headerName;
    }
    // position - computed: false, optional: false, required: true
    _position;
    get position() {
        return this.getStringAttribute('position');
    }
    set position(value) {
        this._position = value;
    }
    // Temporarily expose input value. Use with caution.
    get positionInput() {
        return this._position;
    }
}
export function wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementIpSetReferenceStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        arn: cdktf.stringToTerraform(struct.arn),
        ip_set_forwarded_ip_config: wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementIpSetReferenceStatementIpSetForwardedIpConfigToTerraform(struct.ipSetForwardedIpConfig),
    };
}
export class Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementIpSetReferenceStatementOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._arn) {
            hasAnyValues = true;
            internalValueResult.arn = this._arn;
        }
        if (this._ipSetForwardedIpConfig?.internalValue) {
            hasAnyValues = true;
            internalValueResult.ipSetForwardedIpConfig = this._ipSetForwardedIpConfig?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._arn = undefined;
            this._ipSetForwardedIpConfig.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._arn = value.arn;
            this._ipSetForwardedIpConfig.internalValue = value.ipSetForwardedIpConfig;
        }
    }
    // arn - computed: false, optional: false, required: true
    _arn;
    get arn() {
        return this.getStringAttribute('arn');
    }
    set arn(value) {
        this._arn = value;
    }
    // Temporarily expose input value. Use with caution.
    get arnInput() {
        return this._arn;
    }
    // ip_set_forwarded_ip_config - computed: false, optional: true, required: false
    _ipSetForwardedIpConfig = new Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementIpSetReferenceStatementIpSetForwardedIpConfigOutputReference(this, "ip_set_forwarded_ip_config", true);
    get ipSetForwardedIpConfig() {
        return this._ipSetForwardedIpConfig;
    }
    putIpSetForwardedIpConfig(value) {
        this._ipSetForwardedIpConfig.internalValue = value;
    }
    resetIpSetForwardedIpConfig() {
        this._ipSetForwardedIpConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get ipSetForwardedIpConfigInput() {
        return this._ipSetForwardedIpConfig.internalValue;
    }
}
export function wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementLabelMatchStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        key: cdktf.stringToTerraform(struct.key),
        scope: cdktf.stringToTerraform(struct.scope),
    };
}
export class Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementLabelMatchStatementOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._key) {
            hasAnyValues = true;
            internalValueResult.key = this._key;
        }
        if (this._scope) {
            hasAnyValues = true;
            internalValueResult.scope = this._scope;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._key = undefined;
            this._scope = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._key = value.key;
            this._scope = value.scope;
        }
    }
    // key - computed: false, optional: false, required: true
    _key;
    get key() {
        return this.getStringAttribute('key');
    }
    set key(value) {
        this._key = value;
    }
    // Temporarily expose input value. Use with caution.
    get keyInput() {
        return this._key;
    }
    // scope - computed: false, optional: false, required: true
    _scope;
    get scope() {
        return this.getStringAttribute('scope');
    }
    set scope(value) {
        this._scope = value;
    }
    // Temporarily expose input value. Use with caution.
    get scopeInput() {
        return this._scope;
    }
}
export function wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
    };
}
export class Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._name) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._name = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._name = value.name;
        }
    }
    // name - computed: false, optional: false, required: true
    _name;
    get name() {
        return this.getStringAttribute('name');
    }
    set name(value) {
        this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    get nameInput() {
        return this._name;
    }
}
export function wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
    };
}
export class Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._name) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._name = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._name = value.name;
        }
    }
    // name - computed: false, optional: false, required: true
    _name;
    get name() {
        return this.getStringAttribute('name');
    }
    set name(value) {
        this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    get nameInput() {
        return this._name;
    }
}
export function wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        all_query_arguments: wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsToTerraform(struct.allQueryArguments),
        body: wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyToTerraform(struct.body),
        method: wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodToTerraform(struct.method),
        query_string: wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringToTerraform(struct.queryString),
        single_header: wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderToTerraform(struct.singleHeader),
        single_query_argument: wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentToTerraform(struct.singleQueryArgument),
        uri_path: wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathToTerraform(struct.uriPath),
    };
}
export class Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._allQueryArguments?.internalValue) {
            hasAnyValues = true;
            internalValueResult.allQueryArguments = this._allQueryArguments?.internalValue;
        }
        if (this._body?.internalValue) {
            hasAnyValues = true;
            internalValueResult.body = this._body?.internalValue;
        }
        if (this._method?.internalValue) {
            hasAnyValues = true;
            internalValueResult.method = this._method?.internalValue;
        }
        if (this._queryString?.internalValue) {
            hasAnyValues = true;
            internalValueResult.queryString = this._queryString?.internalValue;
        }
        if (this._singleHeader?.internalValue) {
            hasAnyValues = true;
            internalValueResult.singleHeader = this._singleHeader?.internalValue;
        }
        if (this._singleQueryArgument?.internalValue) {
            hasAnyValues = true;
            internalValueResult.singleQueryArgument = this._singleQueryArgument?.internalValue;
        }
        if (this._uriPath?.internalValue) {
            hasAnyValues = true;
            internalValueResult.uriPath = this._uriPath?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._allQueryArguments.internalValue = undefined;
            this._body.internalValue = undefined;
            this._method.internalValue = undefined;
            this._queryString.internalValue = undefined;
            this._singleHeader.internalValue = undefined;
            this._singleQueryArgument.internalValue = undefined;
            this._uriPath.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._allQueryArguments.internalValue = value.allQueryArguments;
            this._body.internalValue = value.body;
            this._method.internalValue = value.method;
            this._queryString.internalValue = value.queryString;
            this._singleHeader.internalValue = value.singleHeader;
            this._singleQueryArgument.internalValue = value.singleQueryArgument;
            this._uriPath.internalValue = value.uriPath;
        }
    }
    // all_query_arguments - computed: false, optional: true, required: false
    _allQueryArguments = new Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsOutputReference(this, "all_query_arguments", true);
    get allQueryArguments() {
        return this._allQueryArguments;
    }
    putAllQueryArguments(value) {
        this._allQueryArguments.internalValue = value;
    }
    resetAllQueryArguments() {
        this._allQueryArguments.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get allQueryArgumentsInput() {
        return this._allQueryArguments.internalValue;
    }
    // body - computed: false, optional: true, required: false
    _body = new Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyOutputReference(this, "body", true);
    get body() {
        return this._body;
    }
    putBody(value) {
        this._body.internalValue = value;
    }
    resetBody() {
        this._body.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get bodyInput() {
        return this._body.internalValue;
    }
    // method - computed: false, optional: true, required: false
    _method = new Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodOutputReference(this, "method", true);
    get method() {
        return this._method;
    }
    putMethod(value) {
        this._method.internalValue = value;
    }
    resetMethod() {
        this._method.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get methodInput() {
        return this._method.internalValue;
    }
    // query_string - computed: false, optional: true, required: false
    _queryString = new Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringOutputReference(this, "query_string", true);
    get queryString() {
        return this._queryString;
    }
    putQueryString(value) {
        this._queryString.internalValue = value;
    }
    resetQueryString() {
        this._queryString.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get queryStringInput() {
        return this._queryString.internalValue;
    }
    // single_header - computed: false, optional: true, required: false
    _singleHeader = new Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderOutputReference(this, "single_header", true);
    get singleHeader() {
        return this._singleHeader;
    }
    putSingleHeader(value) {
        this._singleHeader.internalValue = value;
    }
    resetSingleHeader() {
        this._singleHeader.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get singleHeaderInput() {
        return this._singleHeader.internalValue;
    }
    // single_query_argument - computed: false, optional: true, required: false
    _singleQueryArgument = new Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentOutputReference(this, "single_query_argument", true);
    get singleQueryArgument() {
        return this._singleQueryArgument;
    }
    putSingleQueryArgument(value) {
        this._singleQueryArgument.internalValue = value;
    }
    resetSingleQueryArgument() {
        this._singleQueryArgument.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get singleQueryArgumentInput() {
        return this._singleQueryArgument.internalValue;
    }
    // uri_path - computed: false, optional: true, required: false
    _uriPath = new Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathOutputReference(this, "uri_path", true);
    get uriPath() {
        return this._uriPath;
    }
    putUriPath(value) {
        this._uriPath.internalValue = value;
    }
    resetUriPath() {
        this._uriPath.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get uriPathInput() {
        return this._uriPath.internalValue;
    }
}
export function wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementTextTransformationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        priority: cdktf.numberToTerraform(struct.priority),
        type: cdktf.stringToTerraform(struct.type),
    };
}
export function wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        arn: cdktf.stringToTerraform(struct.arn),
        field_to_match: wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchToTerraform(struct.fieldToMatch),
        text_transformation: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementTextTransformationToTerraform)(struct.textTransformation),
    };
}
export class Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._arn) {
            hasAnyValues = true;
            internalValueResult.arn = this._arn;
        }
        if (this._fieldToMatch?.internalValue) {
            hasAnyValues = true;
            internalValueResult.fieldToMatch = this._fieldToMatch?.internalValue;
        }
        if (this._textTransformation) {
            hasAnyValues = true;
            internalValueResult.textTransformation = this._textTransformation;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._arn = undefined;
            this._fieldToMatch.internalValue = undefined;
            this._textTransformation = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._arn = value.arn;
            this._fieldToMatch.internalValue = value.fieldToMatch;
            this._textTransformation = value.textTransformation;
        }
    }
    // arn - computed: false, optional: false, required: true
    _arn;
    get arn() {
        return this.getStringAttribute('arn');
    }
    set arn(value) {
        this._arn = value;
    }
    // Temporarily expose input value. Use with caution.
    get arnInput() {
        return this._arn;
    }
    // field_to_match - computed: false, optional: true, required: false
    _fieldToMatch = new Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchOutputReference(this, "field_to_match", true);
    get fieldToMatch() {
        return this._fieldToMatch;
    }
    putFieldToMatch(value) {
        this._fieldToMatch.internalValue = value;
    }
    resetFieldToMatch() {
        this._fieldToMatch.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get fieldToMatchInput() {
        return this._fieldToMatch.internalValue;
    }
    // text_transformation - computed: false, optional: false, required: true
    _textTransformation;
    get textTransformation() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('text_transformation');
    }
    set textTransformation(value) {
        this._textTransformation = value;
    }
    // Temporarily expose input value. Use with caution.
    get textTransformationInput() {
        return this._textTransformation;
    }
}
export function wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchBodyToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchMethodToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchQueryStringToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
    };
}
export class Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._name) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._name = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._name = value.name;
        }
    }
    // name - computed: false, optional: false, required: true
    _name;
    get name() {
        return this.getStringAttribute('name');
    }
    set name(value) {
        this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    get nameInput() {
        return this._name;
    }
}
export function wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
    };
}
export class Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._name) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._name = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._name = value.name;
        }
    }
    // name - computed: false, optional: false, required: true
    _name;
    get name() {
        return this.getStringAttribute('name');
    }
    set name(value) {
        this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    get nameInput() {
        return this._name;
    }
}
export function wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchUriPathToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        all_query_arguments: wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsToTerraform(struct.allQueryArguments),
        body: wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchBodyToTerraform(struct.body),
        method: wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchMethodToTerraform(struct.method),
        query_string: wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchQueryStringToTerraform(struct.queryString),
        single_header: wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderToTerraform(struct.singleHeader),
        single_query_argument: wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentToTerraform(struct.singleQueryArgument),
        uri_path: wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchUriPathToTerraform(struct.uriPath),
    };
}
export class Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._allQueryArguments?.internalValue) {
            hasAnyValues = true;
            internalValueResult.allQueryArguments = this._allQueryArguments?.internalValue;
        }
        if (this._body?.internalValue) {
            hasAnyValues = true;
            internalValueResult.body = this._body?.internalValue;
        }
        if (this._method?.internalValue) {
            hasAnyValues = true;
            internalValueResult.method = this._method?.internalValue;
        }
        if (this._queryString?.internalValue) {
            hasAnyValues = true;
            internalValueResult.queryString = this._queryString?.internalValue;
        }
        if (this._singleHeader?.internalValue) {
            hasAnyValues = true;
            internalValueResult.singleHeader = this._singleHeader?.internalValue;
        }
        if (this._singleQueryArgument?.internalValue) {
            hasAnyValues = true;
            internalValueResult.singleQueryArgument = this._singleQueryArgument?.internalValue;
        }
        if (this._uriPath?.internalValue) {
            hasAnyValues = true;
            internalValueResult.uriPath = this._uriPath?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._allQueryArguments.internalValue = undefined;
            this._body.internalValue = undefined;
            this._method.internalValue = undefined;
            this._queryString.internalValue = undefined;
            this._singleHeader.internalValue = undefined;
            this._singleQueryArgument.internalValue = undefined;
            this._uriPath.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._allQueryArguments.internalValue = value.allQueryArguments;
            this._body.internalValue = value.body;
            this._method.internalValue = value.method;
            this._queryString.internalValue = value.queryString;
            this._singleHeader.internalValue = value.singleHeader;
            this._singleQueryArgument.internalValue = value.singleQueryArgument;
            this._uriPath.internalValue = value.uriPath;
        }
    }
    // all_query_arguments - computed: false, optional: true, required: false
    _allQueryArguments = new Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsOutputReference(this, "all_query_arguments", true);
    get allQueryArguments() {
        return this._allQueryArguments;
    }
    putAllQueryArguments(value) {
        this._allQueryArguments.internalValue = value;
    }
    resetAllQueryArguments() {
        this._allQueryArguments.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get allQueryArgumentsInput() {
        return this._allQueryArguments.internalValue;
    }
    // body - computed: false, optional: true, required: false
    _body = new Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchBodyOutputReference(this, "body", true);
    get body() {
        return this._body;
    }
    putBody(value) {
        this._body.internalValue = value;
    }
    resetBody() {
        this._body.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get bodyInput() {
        return this._body.internalValue;
    }
    // method - computed: false, optional: true, required: false
    _method = new Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchMethodOutputReference(this, "method", true);
    get method() {
        return this._method;
    }
    putMethod(value) {
        this._method.internalValue = value;
    }
    resetMethod() {
        this._method.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get methodInput() {
        return this._method.internalValue;
    }
    // query_string - computed: false, optional: true, required: false
    _queryString = new Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchQueryStringOutputReference(this, "query_string", true);
    get queryString() {
        return this._queryString;
    }
    putQueryString(value) {
        this._queryString.internalValue = value;
    }
    resetQueryString() {
        this._queryString.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get queryStringInput() {
        return this._queryString.internalValue;
    }
    // single_header - computed: false, optional: true, required: false
    _singleHeader = new Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderOutputReference(this, "single_header", true);
    get singleHeader() {
        return this._singleHeader;
    }
    putSingleHeader(value) {
        this._singleHeader.internalValue = value;
    }
    resetSingleHeader() {
        this._singleHeader.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get singleHeaderInput() {
        return this._singleHeader.internalValue;
    }
    // single_query_argument - computed: false, optional: true, required: false
    _singleQueryArgument = new Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentOutputReference(this, "single_query_argument", true);
    get singleQueryArgument() {
        return this._singleQueryArgument;
    }
    putSingleQueryArgument(value) {
        this._singleQueryArgument.internalValue = value;
    }
    resetSingleQueryArgument() {
        this._singleQueryArgument.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get singleQueryArgumentInput() {
        return this._singleQueryArgument.internalValue;
    }
    // uri_path - computed: false, optional: true, required: false
    _uriPath = new Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchUriPathOutputReference(this, "uri_path", true);
    get uriPath() {
        return this._uriPath;
    }
    putUriPath(value) {
        this._uriPath.internalValue = value;
    }
    resetUriPath() {
        this._uriPath.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get uriPathInput() {
        return this._uriPath.internalValue;
    }
}
export function wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSizeConstraintStatementTextTransformationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        priority: cdktf.numberToTerraform(struct.priority),
        type: cdktf.stringToTerraform(struct.type),
    };
}
export function wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSizeConstraintStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        comparison_operator: cdktf.stringToTerraform(struct.comparisonOperator),
        size: cdktf.numberToTerraform(struct.size),
        field_to_match: wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchToTerraform(struct.fieldToMatch),
        text_transformation: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSizeConstraintStatementTextTransformationToTerraform)(struct.textTransformation),
    };
}
export class Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSizeConstraintStatementOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._comparisonOperator) {
            hasAnyValues = true;
            internalValueResult.comparisonOperator = this._comparisonOperator;
        }
        if (this._size) {
            hasAnyValues = true;
            internalValueResult.size = this._size;
        }
        if (this._fieldToMatch?.internalValue) {
            hasAnyValues = true;
            internalValueResult.fieldToMatch = this._fieldToMatch?.internalValue;
        }
        if (this._textTransformation) {
            hasAnyValues = true;
            internalValueResult.textTransformation = this._textTransformation;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._comparisonOperator = undefined;
            this._size = undefined;
            this._fieldToMatch.internalValue = undefined;
            this._textTransformation = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._comparisonOperator = value.comparisonOperator;
            this._size = value.size;
            this._fieldToMatch.internalValue = value.fieldToMatch;
            this._textTransformation = value.textTransformation;
        }
    }
    // comparison_operator - computed: false, optional: false, required: true
    _comparisonOperator;
    get comparisonOperator() {
        return this.getStringAttribute('comparison_operator');
    }
    set comparisonOperator(value) {
        this._comparisonOperator = value;
    }
    // Temporarily expose input value. Use with caution.
    get comparisonOperatorInput() {
        return this._comparisonOperator;
    }
    // size - computed: false, optional: false, required: true
    _size;
    get size() {
        return this.getNumberAttribute('size');
    }
    set size(value) {
        this._size = value;
    }
    // Temporarily expose input value. Use with caution.
    get sizeInput() {
        return this._size;
    }
    // field_to_match - computed: false, optional: true, required: false
    _fieldToMatch = new Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchOutputReference(this, "field_to_match", true);
    get fieldToMatch() {
        return this._fieldToMatch;
    }
    putFieldToMatch(value) {
        this._fieldToMatch.internalValue = value;
    }
    resetFieldToMatch() {
        this._fieldToMatch.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get fieldToMatchInput() {
        return this._fieldToMatch.internalValue;
    }
    // text_transformation - computed: false, optional: false, required: true
    _textTransformation;
    get textTransformation() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('text_transformation');
    }
    set textTransformation(value) {
        this._textTransformation = value;
    }
    // Temporarily expose input value. Use with caution.
    get textTransformationInput() {
        return this._textTransformation;
    }
}
export function wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchBodyToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchMethodToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchQueryStringToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleHeaderToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
    };
}
export class Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._name) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._name = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._name = value.name;
        }
    }
    // name - computed: false, optional: false, required: true
    _name;
    get name() {
        return this.getStringAttribute('name');
    }
    set name(value) {
        this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    get nameInput() {
        return this._name;
    }
}
export function wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
    };
}
export class Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._name) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._name = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._name = value.name;
        }
    }
    // name - computed: false, optional: false, required: true
    _name;
    get name() {
        return this.getStringAttribute('name');
    }
    set name(value) {
        this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    get nameInput() {
        return this._name;
    }
}
export function wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchUriPathToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        all_query_arguments: wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct.allQueryArguments),
        body: wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchBodyToTerraform(struct.body),
        method: wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchMethodToTerraform(struct.method),
        query_string: wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchQueryStringToTerraform(struct.queryString),
        single_header: wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleHeaderToTerraform(struct.singleHeader),
        single_query_argument: wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct.singleQueryArgument),
        uri_path: wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchUriPathToTerraform(struct.uriPath),
    };
}
export class Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._allQueryArguments?.internalValue) {
            hasAnyValues = true;
            internalValueResult.allQueryArguments = this._allQueryArguments?.internalValue;
        }
        if (this._body?.internalValue) {
            hasAnyValues = true;
            internalValueResult.body = this._body?.internalValue;
        }
        if (this._method?.internalValue) {
            hasAnyValues = true;
            internalValueResult.method = this._method?.internalValue;
        }
        if (this._queryString?.internalValue) {
            hasAnyValues = true;
            internalValueResult.queryString = this._queryString?.internalValue;
        }
        if (this._singleHeader?.internalValue) {
            hasAnyValues = true;
            internalValueResult.singleHeader = this._singleHeader?.internalValue;
        }
        if (this._singleQueryArgument?.internalValue) {
            hasAnyValues = true;
            internalValueResult.singleQueryArgument = this._singleQueryArgument?.internalValue;
        }
        if (this._uriPath?.internalValue) {
            hasAnyValues = true;
            internalValueResult.uriPath = this._uriPath?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._allQueryArguments.internalValue = undefined;
            this._body.internalValue = undefined;
            this._method.internalValue = undefined;
            this._queryString.internalValue = undefined;
            this._singleHeader.internalValue = undefined;
            this._singleQueryArgument.internalValue = undefined;
            this._uriPath.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._allQueryArguments.internalValue = value.allQueryArguments;
            this._body.internalValue = value.body;
            this._method.internalValue = value.method;
            this._queryString.internalValue = value.queryString;
            this._singleHeader.internalValue = value.singleHeader;
            this._singleQueryArgument.internalValue = value.singleQueryArgument;
            this._uriPath.internalValue = value.uriPath;
        }
    }
    // all_query_arguments - computed: false, optional: true, required: false
    _allQueryArguments = new Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsOutputReference(this, "all_query_arguments", true);
    get allQueryArguments() {
        return this._allQueryArguments;
    }
    putAllQueryArguments(value) {
        this._allQueryArguments.internalValue = value;
    }
    resetAllQueryArguments() {
        this._allQueryArguments.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get allQueryArgumentsInput() {
        return this._allQueryArguments.internalValue;
    }
    // body - computed: false, optional: true, required: false
    _body = new Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchBodyOutputReference(this, "body", true);
    get body() {
        return this._body;
    }
    putBody(value) {
        this._body.internalValue = value;
    }
    resetBody() {
        this._body.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get bodyInput() {
        return this._body.internalValue;
    }
    // method - computed: false, optional: true, required: false
    _method = new Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchMethodOutputReference(this, "method", true);
    get method() {
        return this._method;
    }
    putMethod(value) {
        this._method.internalValue = value;
    }
    resetMethod() {
        this._method.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get methodInput() {
        return this._method.internalValue;
    }
    // query_string - computed: false, optional: true, required: false
    _queryString = new Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchQueryStringOutputReference(this, "query_string", true);
    get queryString() {
        return this._queryString;
    }
    putQueryString(value) {
        this._queryString.internalValue = value;
    }
    resetQueryString() {
        this._queryString.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get queryStringInput() {
        return this._queryString.internalValue;
    }
    // single_header - computed: false, optional: true, required: false
    _singleHeader = new Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleHeaderOutputReference(this, "single_header", true);
    get singleHeader() {
        return this._singleHeader;
    }
    putSingleHeader(value) {
        this._singleHeader.internalValue = value;
    }
    resetSingleHeader() {
        this._singleHeader.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get singleHeaderInput() {
        return this._singleHeader.internalValue;
    }
    // single_query_argument - computed: false, optional: true, required: false
    _singleQueryArgument = new Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentOutputReference(this, "single_query_argument", true);
    get singleQueryArgument() {
        return this._singleQueryArgument;
    }
    putSingleQueryArgument(value) {
        this._singleQueryArgument.internalValue = value;
    }
    resetSingleQueryArgument() {
        this._singleQueryArgument.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get singleQueryArgumentInput() {
        return this._singleQueryArgument.internalValue;
    }
    // uri_path - computed: false, optional: true, required: false
    _uriPath = new Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchUriPathOutputReference(this, "uri_path", true);
    get uriPath() {
        return this._uriPath;
    }
    putUriPath(value) {
        this._uriPath.internalValue = value;
    }
    resetUriPath() {
        this._uriPath.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get uriPathInput() {
        return this._uriPath.internalValue;
    }
}
export function wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSqliMatchStatementTextTransformationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        priority: cdktf.numberToTerraform(struct.priority),
        type: cdktf.stringToTerraform(struct.type),
    };
}
export function wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSqliMatchStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        field_to_match: wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchToTerraform(struct.fieldToMatch),
        text_transformation: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSqliMatchStatementTextTransformationToTerraform)(struct.textTransformation),
    };
}
export class Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSqliMatchStatementOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._fieldToMatch?.internalValue) {
            hasAnyValues = true;
            internalValueResult.fieldToMatch = this._fieldToMatch?.internalValue;
        }
        if (this._textTransformation) {
            hasAnyValues = true;
            internalValueResult.textTransformation = this._textTransformation;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._fieldToMatch.internalValue = undefined;
            this._textTransformation = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._fieldToMatch.internalValue = value.fieldToMatch;
            this._textTransformation = value.textTransformation;
        }
    }
    // field_to_match - computed: false, optional: true, required: false
    _fieldToMatch = new Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchOutputReference(this, "field_to_match", true);
    get fieldToMatch() {
        return this._fieldToMatch;
    }
    putFieldToMatch(value) {
        this._fieldToMatch.internalValue = value;
    }
    resetFieldToMatch() {
        this._fieldToMatch.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get fieldToMatchInput() {
        return this._fieldToMatch.internalValue;
    }
    // text_transformation - computed: false, optional: false, required: true
    _textTransformation;
    get textTransformation() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('text_transformation');
    }
    set textTransformation(value) {
        this._textTransformation = value;
    }
    // Temporarily expose input value. Use with caution.
    get textTransformationInput() {
        return this._textTransformation;
    }
}
export function wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchBodyToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchMethodToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchQueryStringToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleHeaderToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
    };
}
export class Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._name) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._name = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._name = value.name;
        }
    }
    // name - computed: false, optional: false, required: true
    _name;
    get name() {
        return this.getStringAttribute('name');
    }
    set name(value) {
        this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    get nameInput() {
        return this._name;
    }
}
export function wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
    };
}
export class Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._name) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._name = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._name = value.name;
        }
    }
    // name - computed: false, optional: false, required: true
    _name;
    get name() {
        return this.getStringAttribute('name');
    }
    set name(value) {
        this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    get nameInput() {
        return this._name;
    }
}
export function wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchUriPathToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        all_query_arguments: wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct.allQueryArguments),
        body: wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchBodyToTerraform(struct.body),
        method: wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchMethodToTerraform(struct.method),
        query_string: wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchQueryStringToTerraform(struct.queryString),
        single_header: wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleHeaderToTerraform(struct.singleHeader),
        single_query_argument: wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct.singleQueryArgument),
        uri_path: wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchUriPathToTerraform(struct.uriPath),
    };
}
export class Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._allQueryArguments?.internalValue) {
            hasAnyValues = true;
            internalValueResult.allQueryArguments = this._allQueryArguments?.internalValue;
        }
        if (this._body?.internalValue) {
            hasAnyValues = true;
            internalValueResult.body = this._body?.internalValue;
        }
        if (this._method?.internalValue) {
            hasAnyValues = true;
            internalValueResult.method = this._method?.internalValue;
        }
        if (this._queryString?.internalValue) {
            hasAnyValues = true;
            internalValueResult.queryString = this._queryString?.internalValue;
        }
        if (this._singleHeader?.internalValue) {
            hasAnyValues = true;
            internalValueResult.singleHeader = this._singleHeader?.internalValue;
        }
        if (this._singleQueryArgument?.internalValue) {
            hasAnyValues = true;
            internalValueResult.singleQueryArgument = this._singleQueryArgument?.internalValue;
        }
        if (this._uriPath?.internalValue) {
            hasAnyValues = true;
            internalValueResult.uriPath = this._uriPath?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._allQueryArguments.internalValue = undefined;
            this._body.internalValue = undefined;
            this._method.internalValue = undefined;
            this._queryString.internalValue = undefined;
            this._singleHeader.internalValue = undefined;
            this._singleQueryArgument.internalValue = undefined;
            this._uriPath.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._allQueryArguments.internalValue = value.allQueryArguments;
            this._body.internalValue = value.body;
            this._method.internalValue = value.method;
            this._queryString.internalValue = value.queryString;
            this._singleHeader.internalValue = value.singleHeader;
            this._singleQueryArgument.internalValue = value.singleQueryArgument;
            this._uriPath.internalValue = value.uriPath;
        }
    }
    // all_query_arguments - computed: false, optional: true, required: false
    _allQueryArguments = new Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsOutputReference(this, "all_query_arguments", true);
    get allQueryArguments() {
        return this._allQueryArguments;
    }
    putAllQueryArguments(value) {
        this._allQueryArguments.internalValue = value;
    }
    resetAllQueryArguments() {
        this._allQueryArguments.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get allQueryArgumentsInput() {
        return this._allQueryArguments.internalValue;
    }
    // body - computed: false, optional: true, required: false
    _body = new Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchBodyOutputReference(this, "body", true);
    get body() {
        return this._body;
    }
    putBody(value) {
        this._body.internalValue = value;
    }
    resetBody() {
        this._body.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get bodyInput() {
        return this._body.internalValue;
    }
    // method - computed: false, optional: true, required: false
    _method = new Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchMethodOutputReference(this, "method", true);
    get method() {
        return this._method;
    }
    putMethod(value) {
        this._method.internalValue = value;
    }
    resetMethod() {
        this._method.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get methodInput() {
        return this._method.internalValue;
    }
    // query_string - computed: false, optional: true, required: false
    _queryString = new Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchQueryStringOutputReference(this, "query_string", true);
    get queryString() {
        return this._queryString;
    }
    putQueryString(value) {
        this._queryString.internalValue = value;
    }
    resetQueryString() {
        this._queryString.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get queryStringInput() {
        return this._queryString.internalValue;
    }
    // single_header - computed: false, optional: true, required: false
    _singleHeader = new Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleHeaderOutputReference(this, "single_header", true);
    get singleHeader() {
        return this._singleHeader;
    }
    putSingleHeader(value) {
        this._singleHeader.internalValue = value;
    }
    resetSingleHeader() {
        this._singleHeader.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get singleHeaderInput() {
        return this._singleHeader.internalValue;
    }
    // single_query_argument - computed: false, optional: true, required: false
    _singleQueryArgument = new Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentOutputReference(this, "single_query_argument", true);
    get singleQueryArgument() {
        return this._singleQueryArgument;
    }
    putSingleQueryArgument(value) {
        this._singleQueryArgument.internalValue = value;
    }
    resetSingleQueryArgument() {
        this._singleQueryArgument.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get singleQueryArgumentInput() {
        return this._singleQueryArgument.internalValue;
    }
    // uri_path - computed: false, optional: true, required: false
    _uriPath = new Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchUriPathOutputReference(this, "uri_path", true);
    get uriPath() {
        return this._uriPath;
    }
    putUriPath(value) {
        this._uriPath.internalValue = value;
    }
    resetUriPath() {
        this._uriPath.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get uriPathInput() {
        return this._uriPath.internalValue;
    }
}
export function wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementXssMatchStatementTextTransformationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        priority: cdktf.numberToTerraform(struct.priority),
        type: cdktf.stringToTerraform(struct.type),
    };
}
export function wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementXssMatchStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        field_to_match: wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchToTerraform(struct.fieldToMatch),
        text_transformation: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementXssMatchStatementTextTransformationToTerraform)(struct.textTransformation),
    };
}
export class Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementXssMatchStatementOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._fieldToMatch?.internalValue) {
            hasAnyValues = true;
            internalValueResult.fieldToMatch = this._fieldToMatch?.internalValue;
        }
        if (this._textTransformation) {
            hasAnyValues = true;
            internalValueResult.textTransformation = this._textTransformation;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._fieldToMatch.internalValue = undefined;
            this._textTransformation = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._fieldToMatch.internalValue = value.fieldToMatch;
            this._textTransformation = value.textTransformation;
        }
    }
    // field_to_match - computed: false, optional: true, required: false
    _fieldToMatch = new Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchOutputReference(this, "field_to_match", true);
    get fieldToMatch() {
        return this._fieldToMatch;
    }
    putFieldToMatch(value) {
        this._fieldToMatch.internalValue = value;
    }
    resetFieldToMatch() {
        this._fieldToMatch.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get fieldToMatchInput() {
        return this._fieldToMatch.internalValue;
    }
    // text_transformation - computed: false, optional: false, required: true
    _textTransformation;
    get textTransformation() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('text_transformation');
    }
    set textTransformation(value) {
        this._textTransformation = value;
    }
    // Temporarily expose input value. Use with caution.
    get textTransformationInput() {
        return this._textTransformation;
    }
}
export function wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        byte_match_statement: wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementByteMatchStatementToTerraform(struct.byteMatchStatement),
        geo_match_statement: wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementGeoMatchStatementToTerraform(struct.geoMatchStatement),
        ip_set_reference_statement: wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementIpSetReferenceStatementToTerraform(struct.ipSetReferenceStatement),
        label_match_statement: wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementLabelMatchStatementToTerraform(struct.labelMatchStatement),
        regex_pattern_set_reference_statement: wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementToTerraform(struct.regexPatternSetReferenceStatement),
        size_constraint_statement: wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSizeConstraintStatementToTerraform(struct.sizeConstraintStatement),
        sqli_match_statement: wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSqliMatchStatementToTerraform(struct.sqliMatchStatement),
        xss_match_statement: wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementXssMatchStatementToTerraform(struct.xssMatchStatement),
    };
}
export function wafv2RuleGroupRuleStatementAndStatementStatementAndStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        statement: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementToTerraform)(struct.statement),
    };
}
export class Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._statement) {
            hasAnyValues = true;
            internalValueResult.statement = this._statement;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._statement = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._statement = value.statement;
        }
    }
    // statement - computed: false, optional: false, required: true
    _statement;
    get statement() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('statement');
    }
    set statement(value) {
        this._statement = value;
    }
    // Temporarily expose input value. Use with caution.
    get statementInput() {
        return this._statement;
    }
}
export function wafv2RuleGroupRuleStatementAndStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementAndStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementAndStatementStatementByteMatchStatementFieldToMatchBodyToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementAndStatementStatementByteMatchStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementAndStatementStatementByteMatchStatementFieldToMatchMethodToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementAndStatementStatementByteMatchStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementAndStatementStatementByteMatchStatementFieldToMatchQueryStringToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementAndStatementStatementByteMatchStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementAndStatementStatementByteMatchStatementFieldToMatchSingleHeaderToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
    };
}
export class Wafv2RuleGroupRuleStatementAndStatementStatementByteMatchStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._name) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._name = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._name = value.name;
        }
    }
    // name - computed: false, optional: false, required: true
    _name;
    get name() {
        return this.getStringAttribute('name');
    }
    set name(value) {
        this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    get nameInput() {
        return this._name;
    }
}
export function wafv2RuleGroupRuleStatementAndStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
    };
}
export class Wafv2RuleGroupRuleStatementAndStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._name) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._name = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._name = value.name;
        }
    }
    // name - computed: false, optional: false, required: true
    _name;
    get name() {
        return this.getStringAttribute('name');
    }
    set name(value) {
        this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    get nameInput() {
        return this._name;
    }
}
export function wafv2RuleGroupRuleStatementAndStatementStatementByteMatchStatementFieldToMatchUriPathToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementAndStatementStatementByteMatchStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementAndStatementStatementByteMatchStatementFieldToMatchToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        all_query_arguments: wafv2RuleGroupRuleStatementAndStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct.allQueryArguments),
        body: wafv2RuleGroupRuleStatementAndStatementStatementByteMatchStatementFieldToMatchBodyToTerraform(struct.body),
        method: wafv2RuleGroupRuleStatementAndStatementStatementByteMatchStatementFieldToMatchMethodToTerraform(struct.method),
        query_string: wafv2RuleGroupRuleStatementAndStatementStatementByteMatchStatementFieldToMatchQueryStringToTerraform(struct.queryString),
        single_header: wafv2RuleGroupRuleStatementAndStatementStatementByteMatchStatementFieldToMatchSingleHeaderToTerraform(struct.singleHeader),
        single_query_argument: wafv2RuleGroupRuleStatementAndStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct.singleQueryArgument),
        uri_path: wafv2RuleGroupRuleStatementAndStatementStatementByteMatchStatementFieldToMatchUriPathToTerraform(struct.uriPath),
    };
}
export class Wafv2RuleGroupRuleStatementAndStatementStatementByteMatchStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._allQueryArguments?.internalValue) {
            hasAnyValues = true;
            internalValueResult.allQueryArguments = this._allQueryArguments?.internalValue;
        }
        if (this._body?.internalValue) {
            hasAnyValues = true;
            internalValueResult.body = this._body?.internalValue;
        }
        if (this._method?.internalValue) {
            hasAnyValues = true;
            internalValueResult.method = this._method?.internalValue;
        }
        if (this._queryString?.internalValue) {
            hasAnyValues = true;
            internalValueResult.queryString = this._queryString?.internalValue;
        }
        if (this._singleHeader?.internalValue) {
            hasAnyValues = true;
            internalValueResult.singleHeader = this._singleHeader?.internalValue;
        }
        if (this._singleQueryArgument?.internalValue) {
            hasAnyValues = true;
            internalValueResult.singleQueryArgument = this._singleQueryArgument?.internalValue;
        }
        if (this._uriPath?.internalValue) {
            hasAnyValues = true;
            internalValueResult.uriPath = this._uriPath?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._allQueryArguments.internalValue = undefined;
            this._body.internalValue = undefined;
            this._method.internalValue = undefined;
            this._queryString.internalValue = undefined;
            this._singleHeader.internalValue = undefined;
            this._singleQueryArgument.internalValue = undefined;
            this._uriPath.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._allQueryArguments.internalValue = value.allQueryArguments;
            this._body.internalValue = value.body;
            this._method.internalValue = value.method;
            this._queryString.internalValue = value.queryString;
            this._singleHeader.internalValue = value.singleHeader;
            this._singleQueryArgument.internalValue = value.singleQueryArgument;
            this._uriPath.internalValue = value.uriPath;
        }
    }
    // all_query_arguments - computed: false, optional: true, required: false
    _allQueryArguments = new Wafv2RuleGroupRuleStatementAndStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsOutputReference(this, "all_query_arguments", true);
    get allQueryArguments() {
        return this._allQueryArguments;
    }
    putAllQueryArguments(value) {
        this._allQueryArguments.internalValue = value;
    }
    resetAllQueryArguments() {
        this._allQueryArguments.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get allQueryArgumentsInput() {
        return this._allQueryArguments.internalValue;
    }
    // body - computed: false, optional: true, required: false
    _body = new Wafv2RuleGroupRuleStatementAndStatementStatementByteMatchStatementFieldToMatchBodyOutputReference(this, "body", true);
    get body() {
        return this._body;
    }
    putBody(value) {
        this._body.internalValue = value;
    }
    resetBody() {
        this._body.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get bodyInput() {
        return this._body.internalValue;
    }
    // method - computed: false, optional: true, required: false
    _method = new Wafv2RuleGroupRuleStatementAndStatementStatementByteMatchStatementFieldToMatchMethodOutputReference(this, "method", true);
    get method() {
        return this._method;
    }
    putMethod(value) {
        this._method.internalValue = value;
    }
    resetMethod() {
        this._method.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get methodInput() {
        return this._method.internalValue;
    }
    // query_string - computed: false, optional: true, required: false
    _queryString = new Wafv2RuleGroupRuleStatementAndStatementStatementByteMatchStatementFieldToMatchQueryStringOutputReference(this, "query_string", true);
    get queryString() {
        return this._queryString;
    }
    putQueryString(value) {
        this._queryString.internalValue = value;
    }
    resetQueryString() {
        this._queryString.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get queryStringInput() {
        return this._queryString.internalValue;
    }
    // single_header - computed: false, optional: true, required: false
    _singleHeader = new Wafv2RuleGroupRuleStatementAndStatementStatementByteMatchStatementFieldToMatchSingleHeaderOutputReference(this, "single_header", true);
    get singleHeader() {
        return this._singleHeader;
    }
    putSingleHeader(value) {
        this._singleHeader.internalValue = value;
    }
    resetSingleHeader() {
        this._singleHeader.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get singleHeaderInput() {
        return this._singleHeader.internalValue;
    }
    // single_query_argument - computed: false, optional: true, required: false
    _singleQueryArgument = new Wafv2RuleGroupRuleStatementAndStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentOutputReference(this, "single_query_argument", true);
    get singleQueryArgument() {
        return this._singleQueryArgument;
    }
    putSingleQueryArgument(value) {
        this._singleQueryArgument.internalValue = value;
    }
    resetSingleQueryArgument() {
        this._singleQueryArgument.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get singleQueryArgumentInput() {
        return this._singleQueryArgument.internalValue;
    }
    // uri_path - computed: false, optional: true, required: false
    _uriPath = new Wafv2RuleGroupRuleStatementAndStatementStatementByteMatchStatementFieldToMatchUriPathOutputReference(this, "uri_path", true);
    get uriPath() {
        return this._uriPath;
    }
    putUriPath(value) {
        this._uriPath.internalValue = value;
    }
    resetUriPath() {
        this._uriPath.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get uriPathInput() {
        return this._uriPath.internalValue;
    }
}
export function wafv2RuleGroupRuleStatementAndStatementStatementByteMatchStatementTextTransformationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        priority: cdktf.numberToTerraform(struct.priority),
        type: cdktf.stringToTerraform(struct.type),
    };
}
export function wafv2RuleGroupRuleStatementAndStatementStatementByteMatchStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        positional_constraint: cdktf.stringToTerraform(struct.positionalConstraint),
        search_string: cdktf.stringToTerraform(struct.searchString),
        field_to_match: wafv2RuleGroupRuleStatementAndStatementStatementByteMatchStatementFieldToMatchToTerraform(struct.fieldToMatch),
        text_transformation: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementByteMatchStatementTextTransformationToTerraform)(struct.textTransformation),
    };
}
export class Wafv2RuleGroupRuleStatementAndStatementStatementByteMatchStatementOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._positionalConstraint) {
            hasAnyValues = true;
            internalValueResult.positionalConstraint = this._positionalConstraint;
        }
        if (this._searchString) {
            hasAnyValues = true;
            internalValueResult.searchString = this._searchString;
        }
        if (this._fieldToMatch?.internalValue) {
            hasAnyValues = true;
            internalValueResult.fieldToMatch = this._fieldToMatch?.internalValue;
        }
        if (this._textTransformation) {
            hasAnyValues = true;
            internalValueResult.textTransformation = this._textTransformation;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._positionalConstraint = undefined;
            this._searchString = undefined;
            this._fieldToMatch.internalValue = undefined;
            this._textTransformation = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._positionalConstraint = value.positionalConstraint;
            this._searchString = value.searchString;
            this._fieldToMatch.internalValue = value.fieldToMatch;
            this._textTransformation = value.textTransformation;
        }
    }
    // positional_constraint - computed: false, optional: false, required: true
    _positionalConstraint;
    get positionalConstraint() {
        return this.getStringAttribute('positional_constraint');
    }
    set positionalConstraint(value) {
        this._positionalConstraint = value;
    }
    // Temporarily expose input value. Use with caution.
    get positionalConstraintInput() {
        return this._positionalConstraint;
    }
    // search_string - computed: false, optional: false, required: true
    _searchString;
    get searchString() {
        return this.getStringAttribute('search_string');
    }
    set searchString(value) {
        this._searchString = value;
    }
    // Temporarily expose input value. Use with caution.
    get searchStringInput() {
        return this._searchString;
    }
    // field_to_match - computed: false, optional: true, required: false
    _fieldToMatch = new Wafv2RuleGroupRuleStatementAndStatementStatementByteMatchStatementFieldToMatchOutputReference(this, "field_to_match", true);
    get fieldToMatch() {
        return this._fieldToMatch;
    }
    putFieldToMatch(value) {
        this._fieldToMatch.internalValue = value;
    }
    resetFieldToMatch() {
        this._fieldToMatch.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get fieldToMatchInput() {
        return this._fieldToMatch.internalValue;
    }
    // text_transformation - computed: false, optional: false, required: true
    _textTransformation;
    get textTransformation() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('text_transformation');
    }
    set textTransformation(value) {
        this._textTransformation = value;
    }
    // Temporarily expose input value. Use with caution.
    get textTransformationInput() {
        return this._textTransformation;
    }
}
export function wafv2RuleGroupRuleStatementAndStatementStatementGeoMatchStatementForwardedIpConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        fallback_behavior: cdktf.stringToTerraform(struct.fallbackBehavior),
        header_name: cdktf.stringToTerraform(struct.headerName),
    };
}
export class Wafv2RuleGroupRuleStatementAndStatementStatementGeoMatchStatementForwardedIpConfigOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._fallbackBehavior) {
            hasAnyValues = true;
            internalValueResult.fallbackBehavior = this._fallbackBehavior;
        }
        if (this._headerName) {
            hasAnyValues = true;
            internalValueResult.headerName = this._headerName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._fallbackBehavior = undefined;
            this._headerName = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._fallbackBehavior = value.fallbackBehavior;
            this._headerName = value.headerName;
        }
    }
    // fallback_behavior - computed: false, optional: false, required: true
    _fallbackBehavior;
    get fallbackBehavior() {
        return this.getStringAttribute('fallback_behavior');
    }
    set fallbackBehavior(value) {
        this._fallbackBehavior = value;
    }
    // Temporarily expose input value. Use with caution.
    get fallbackBehaviorInput() {
        return this._fallbackBehavior;
    }
    // header_name - computed: false, optional: false, required: true
    _headerName;
    get headerName() {
        return this.getStringAttribute('header_name');
    }
    set headerName(value) {
        this._headerName = value;
    }
    // Temporarily expose input value. Use with caution.
    get headerNameInput() {
        return this._headerName;
    }
}
export function wafv2RuleGroupRuleStatementAndStatementStatementGeoMatchStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        country_codes: cdktf.listMapper(cdktf.stringToTerraform)(struct.countryCodes),
        forwarded_ip_config: wafv2RuleGroupRuleStatementAndStatementStatementGeoMatchStatementForwardedIpConfigToTerraform(struct.forwardedIpConfig),
    };
}
export class Wafv2RuleGroupRuleStatementAndStatementStatementGeoMatchStatementOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._countryCodes) {
            hasAnyValues = true;
            internalValueResult.countryCodes = this._countryCodes;
        }
        if (this._forwardedIpConfig?.internalValue) {
            hasAnyValues = true;
            internalValueResult.forwardedIpConfig = this._forwardedIpConfig?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._countryCodes = undefined;
            this._forwardedIpConfig.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._countryCodes = value.countryCodes;
            this._forwardedIpConfig.internalValue = value.forwardedIpConfig;
        }
    }
    // country_codes - computed: false, optional: false, required: true
    _countryCodes;
    get countryCodes() {
        return this.getListAttribute('country_codes');
    }
    set countryCodes(value) {
        this._countryCodes = value;
    }
    // Temporarily expose input value. Use with caution.
    get countryCodesInput() {
        return this._countryCodes;
    }
    // forwarded_ip_config - computed: false, optional: true, required: false
    _forwardedIpConfig = new Wafv2RuleGroupRuleStatementAndStatementStatementGeoMatchStatementForwardedIpConfigOutputReference(this, "forwarded_ip_config", true);
    get forwardedIpConfig() {
        return this._forwardedIpConfig;
    }
    putForwardedIpConfig(value) {
        this._forwardedIpConfig.internalValue = value;
    }
    resetForwardedIpConfig() {
        this._forwardedIpConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get forwardedIpConfigInput() {
        return this._forwardedIpConfig.internalValue;
    }
}
export function wafv2RuleGroupRuleStatementAndStatementStatementIpSetReferenceStatementIpSetForwardedIpConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        fallback_behavior: cdktf.stringToTerraform(struct.fallbackBehavior),
        header_name: cdktf.stringToTerraform(struct.headerName),
        position: cdktf.stringToTerraform(struct.position),
    };
}
export class Wafv2RuleGroupRuleStatementAndStatementStatementIpSetReferenceStatementIpSetForwardedIpConfigOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._fallbackBehavior) {
            hasAnyValues = true;
            internalValueResult.fallbackBehavior = this._fallbackBehavior;
        }
        if (this._headerName) {
            hasAnyValues = true;
            internalValueResult.headerName = this._headerName;
        }
        if (this._position) {
            hasAnyValues = true;
            internalValueResult.position = this._position;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._fallbackBehavior = undefined;
            this._headerName = undefined;
            this._position = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._fallbackBehavior = value.fallbackBehavior;
            this._headerName = value.headerName;
            this._position = value.position;
        }
    }
    // fallback_behavior - computed: false, optional: false, required: true
    _fallbackBehavior;
    get fallbackBehavior() {
        return this.getStringAttribute('fallback_behavior');
    }
    set fallbackBehavior(value) {
        this._fallbackBehavior = value;
    }
    // Temporarily expose input value. Use with caution.
    get fallbackBehaviorInput() {
        return this._fallbackBehavior;
    }
    // header_name - computed: false, optional: false, required: true
    _headerName;
    get headerName() {
        return this.getStringAttribute('header_name');
    }
    set headerName(value) {
        this._headerName = value;
    }
    // Temporarily expose input value. Use with caution.
    get headerNameInput() {
        return this._headerName;
    }
    // position - computed: false, optional: false, required: true
    _position;
    get position() {
        return this.getStringAttribute('position');
    }
    set position(value) {
        this._position = value;
    }
    // Temporarily expose input value. Use with caution.
    get positionInput() {
        return this._position;
    }
}
export function wafv2RuleGroupRuleStatementAndStatementStatementIpSetReferenceStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        arn: cdktf.stringToTerraform(struct.arn),
        ip_set_forwarded_ip_config: wafv2RuleGroupRuleStatementAndStatementStatementIpSetReferenceStatementIpSetForwardedIpConfigToTerraform(struct.ipSetForwardedIpConfig),
    };
}
export class Wafv2RuleGroupRuleStatementAndStatementStatementIpSetReferenceStatementOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._arn) {
            hasAnyValues = true;
            internalValueResult.arn = this._arn;
        }
        if (this._ipSetForwardedIpConfig?.internalValue) {
            hasAnyValues = true;
            internalValueResult.ipSetForwardedIpConfig = this._ipSetForwardedIpConfig?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._arn = undefined;
            this._ipSetForwardedIpConfig.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._arn = value.arn;
            this._ipSetForwardedIpConfig.internalValue = value.ipSetForwardedIpConfig;
        }
    }
    // arn - computed: false, optional: false, required: true
    _arn;
    get arn() {
        return this.getStringAttribute('arn');
    }
    set arn(value) {
        this._arn = value;
    }
    // Temporarily expose input value. Use with caution.
    get arnInput() {
        return this._arn;
    }
    // ip_set_forwarded_ip_config - computed: false, optional: true, required: false
    _ipSetForwardedIpConfig = new Wafv2RuleGroupRuleStatementAndStatementStatementIpSetReferenceStatementIpSetForwardedIpConfigOutputReference(this, "ip_set_forwarded_ip_config", true);
    get ipSetForwardedIpConfig() {
        return this._ipSetForwardedIpConfig;
    }
    putIpSetForwardedIpConfig(value) {
        this._ipSetForwardedIpConfig.internalValue = value;
    }
    resetIpSetForwardedIpConfig() {
        this._ipSetForwardedIpConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get ipSetForwardedIpConfigInput() {
        return this._ipSetForwardedIpConfig.internalValue;
    }
}
export function wafv2RuleGroupRuleStatementAndStatementStatementLabelMatchStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        key: cdktf.stringToTerraform(struct.key),
        scope: cdktf.stringToTerraform(struct.scope),
    };
}
export class Wafv2RuleGroupRuleStatementAndStatementStatementLabelMatchStatementOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._key) {
            hasAnyValues = true;
            internalValueResult.key = this._key;
        }
        if (this._scope) {
            hasAnyValues = true;
            internalValueResult.scope = this._scope;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._key = undefined;
            this._scope = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._key = value.key;
            this._scope = value.scope;
        }
    }
    // key - computed: false, optional: false, required: true
    _key;
    get key() {
        return this.getStringAttribute('key');
    }
    set key(value) {
        this._key = value;
    }
    // Temporarily expose input value. Use with caution.
    get keyInput() {
        return this._key;
    }
    // scope - computed: false, optional: false, required: true
    _scope;
    get scope() {
        return this.getStringAttribute('scope');
    }
    set scope(value) {
        this._scope = value;
    }
    // Temporarily expose input value. Use with caution.
    get scopeInput() {
        return this._scope;
    }
}
export function wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchBodyToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchMethodToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchQueryStringToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleHeaderToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
    };
}
export class Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._name) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._name = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._name = value.name;
        }
    }
    // name - computed: false, optional: false, required: true
    _name;
    get name() {
        return this.getStringAttribute('name');
    }
    set name(value) {
        this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    get nameInput() {
        return this._name;
    }
}
export function wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
    };
}
export class Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._name) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._name = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._name = value.name;
        }
    }
    // name - computed: false, optional: false, required: true
    _name;
    get name() {
        return this.getStringAttribute('name');
    }
    set name(value) {
        this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    get nameInput() {
        return this._name;
    }
}
export function wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchUriPathToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        all_query_arguments: wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct.allQueryArguments),
        body: wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchBodyToTerraform(struct.body),
        method: wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchMethodToTerraform(struct.method),
        query_string: wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchQueryStringToTerraform(struct.queryString),
        single_header: wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleHeaderToTerraform(struct.singleHeader),
        single_query_argument: wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct.singleQueryArgument),
        uri_path: wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchUriPathToTerraform(struct.uriPath),
    };
}
export class Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._allQueryArguments?.internalValue) {
            hasAnyValues = true;
            internalValueResult.allQueryArguments = this._allQueryArguments?.internalValue;
        }
        if (this._body?.internalValue) {
            hasAnyValues = true;
            internalValueResult.body = this._body?.internalValue;
        }
        if (this._method?.internalValue) {
            hasAnyValues = true;
            internalValueResult.method = this._method?.internalValue;
        }
        if (this._queryString?.internalValue) {
            hasAnyValues = true;
            internalValueResult.queryString = this._queryString?.internalValue;
        }
        if (this._singleHeader?.internalValue) {
            hasAnyValues = true;
            internalValueResult.singleHeader = this._singleHeader?.internalValue;
        }
        if (this._singleQueryArgument?.internalValue) {
            hasAnyValues = true;
            internalValueResult.singleQueryArgument = this._singleQueryArgument?.internalValue;
        }
        if (this._uriPath?.internalValue) {
            hasAnyValues = true;
            internalValueResult.uriPath = this._uriPath?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._allQueryArguments.internalValue = undefined;
            this._body.internalValue = undefined;
            this._method.internalValue = undefined;
            this._queryString.internalValue = undefined;
            this._singleHeader.internalValue = undefined;
            this._singleQueryArgument.internalValue = undefined;
            this._uriPath.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._allQueryArguments.internalValue = value.allQueryArguments;
            this._body.internalValue = value.body;
            this._method.internalValue = value.method;
            this._queryString.internalValue = value.queryString;
            this._singleHeader.internalValue = value.singleHeader;
            this._singleQueryArgument.internalValue = value.singleQueryArgument;
            this._uriPath.internalValue = value.uriPath;
        }
    }
    // all_query_arguments - computed: false, optional: true, required: false
    _allQueryArguments = new Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsOutputReference(this, "all_query_arguments", true);
    get allQueryArguments() {
        return this._allQueryArguments;
    }
    putAllQueryArguments(value) {
        this._allQueryArguments.internalValue = value;
    }
    resetAllQueryArguments() {
        this._allQueryArguments.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get allQueryArgumentsInput() {
        return this._allQueryArguments.internalValue;
    }
    // body - computed: false, optional: true, required: false
    _body = new Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchBodyOutputReference(this, "body", true);
    get body() {
        return this._body;
    }
    putBody(value) {
        this._body.internalValue = value;
    }
    resetBody() {
        this._body.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get bodyInput() {
        return this._body.internalValue;
    }
    // method - computed: false, optional: true, required: false
    _method = new Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchMethodOutputReference(this, "method", true);
    get method() {
        return this._method;
    }
    putMethod(value) {
        this._method.internalValue = value;
    }
    resetMethod() {
        this._method.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get methodInput() {
        return this._method.internalValue;
    }
    // query_string - computed: false, optional: true, required: false
    _queryString = new Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchQueryStringOutputReference(this, "query_string", true);
    get queryString() {
        return this._queryString;
    }
    putQueryString(value) {
        this._queryString.internalValue = value;
    }
    resetQueryString() {
        this._queryString.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get queryStringInput() {
        return this._queryString.internalValue;
    }
    // single_header - computed: false, optional: true, required: false
    _singleHeader = new Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleHeaderOutputReference(this, "single_header", true);
    get singleHeader() {
        return this._singleHeader;
    }
    putSingleHeader(value) {
        this._singleHeader.internalValue = value;
    }
    resetSingleHeader() {
        this._singleHeader.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get singleHeaderInput() {
        return this._singleHeader.internalValue;
    }
    // single_query_argument - computed: false, optional: true, required: false
    _singleQueryArgument = new Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentOutputReference(this, "single_query_argument", true);
    get singleQueryArgument() {
        return this._singleQueryArgument;
    }
    putSingleQueryArgument(value) {
        this._singleQueryArgument.internalValue = value;
    }
    resetSingleQueryArgument() {
        this._singleQueryArgument.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get singleQueryArgumentInput() {
        return this._singleQueryArgument.internalValue;
    }
    // uri_path - computed: false, optional: true, required: false
    _uriPath = new Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchUriPathOutputReference(this, "uri_path", true);
    get uriPath() {
        return this._uriPath;
    }
    putUriPath(value) {
        this._uriPath.internalValue = value;
    }
    resetUriPath() {
        this._uriPath.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get uriPathInput() {
        return this._uriPath.internalValue;
    }
}
export function wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementByteMatchStatementTextTransformationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        priority: cdktf.numberToTerraform(struct.priority),
        type: cdktf.stringToTerraform(struct.type),
    };
}
export function wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementByteMatchStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        positional_constraint: cdktf.stringToTerraform(struct.positionalConstraint),
        search_string: cdktf.stringToTerraform(struct.searchString),
        field_to_match: wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchToTerraform(struct.fieldToMatch),
        text_transformation: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementByteMatchStatementTextTransformationToTerraform)(struct.textTransformation),
    };
}
export class Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementByteMatchStatementOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._positionalConstraint) {
            hasAnyValues = true;
            internalValueResult.positionalConstraint = this._positionalConstraint;
        }
        if (this._searchString) {
            hasAnyValues = true;
            internalValueResult.searchString = this._searchString;
        }
        if (this._fieldToMatch?.internalValue) {
            hasAnyValues = true;
            internalValueResult.fieldToMatch = this._fieldToMatch?.internalValue;
        }
        if (this._textTransformation) {
            hasAnyValues = true;
            internalValueResult.textTransformation = this._textTransformation;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._positionalConstraint = undefined;
            this._searchString = undefined;
            this._fieldToMatch.internalValue = undefined;
            this._textTransformation = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._positionalConstraint = value.positionalConstraint;
            this._searchString = value.searchString;
            this._fieldToMatch.internalValue = value.fieldToMatch;
            this._textTransformation = value.textTransformation;
        }
    }
    // positional_constraint - computed: false, optional: false, required: true
    _positionalConstraint;
    get positionalConstraint() {
        return this.getStringAttribute('positional_constraint');
    }
    set positionalConstraint(value) {
        this._positionalConstraint = value;
    }
    // Temporarily expose input value. Use with caution.
    get positionalConstraintInput() {
        return this._positionalConstraint;
    }
    // search_string - computed: false, optional: false, required: true
    _searchString;
    get searchString() {
        return this.getStringAttribute('search_string');
    }
    set searchString(value) {
        this._searchString = value;
    }
    // Temporarily expose input value. Use with caution.
    get searchStringInput() {
        return this._searchString;
    }
    // field_to_match - computed: false, optional: true, required: false
    _fieldToMatch = new Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchOutputReference(this, "field_to_match", true);
    get fieldToMatch() {
        return this._fieldToMatch;
    }
    putFieldToMatch(value) {
        this._fieldToMatch.internalValue = value;
    }
    resetFieldToMatch() {
        this._fieldToMatch.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get fieldToMatchInput() {
        return this._fieldToMatch.internalValue;
    }
    // text_transformation - computed: false, optional: false, required: true
    _textTransformation;
    get textTransformation() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('text_transformation');
    }
    set textTransformation(value) {
        this._textTransformation = value;
    }
    // Temporarily expose input value. Use with caution.
    get textTransformationInput() {
        return this._textTransformation;
    }
}
export function wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementGeoMatchStatementForwardedIpConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        fallback_behavior: cdktf.stringToTerraform(struct.fallbackBehavior),
        header_name: cdktf.stringToTerraform(struct.headerName),
    };
}
export class Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementGeoMatchStatementForwardedIpConfigOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._fallbackBehavior) {
            hasAnyValues = true;
            internalValueResult.fallbackBehavior = this._fallbackBehavior;
        }
        if (this._headerName) {
            hasAnyValues = true;
            internalValueResult.headerName = this._headerName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._fallbackBehavior = undefined;
            this._headerName = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._fallbackBehavior = value.fallbackBehavior;
            this._headerName = value.headerName;
        }
    }
    // fallback_behavior - computed: false, optional: false, required: true
    _fallbackBehavior;
    get fallbackBehavior() {
        return this.getStringAttribute('fallback_behavior');
    }
    set fallbackBehavior(value) {
        this._fallbackBehavior = value;
    }
    // Temporarily expose input value. Use with caution.
    get fallbackBehaviorInput() {
        return this._fallbackBehavior;
    }
    // header_name - computed: false, optional: false, required: true
    _headerName;
    get headerName() {
        return this.getStringAttribute('header_name');
    }
    set headerName(value) {
        this._headerName = value;
    }
    // Temporarily expose input value. Use with caution.
    get headerNameInput() {
        return this._headerName;
    }
}
export function wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementGeoMatchStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        country_codes: cdktf.listMapper(cdktf.stringToTerraform)(struct.countryCodes),
        forwarded_ip_config: wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementGeoMatchStatementForwardedIpConfigToTerraform(struct.forwardedIpConfig),
    };
}
export class Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementGeoMatchStatementOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._countryCodes) {
            hasAnyValues = true;
            internalValueResult.countryCodes = this._countryCodes;
        }
        if (this._forwardedIpConfig?.internalValue) {
            hasAnyValues = true;
            internalValueResult.forwardedIpConfig = this._forwardedIpConfig?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._countryCodes = undefined;
            this._forwardedIpConfig.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._countryCodes = value.countryCodes;
            this._forwardedIpConfig.internalValue = value.forwardedIpConfig;
        }
    }
    // country_codes - computed: false, optional: false, required: true
    _countryCodes;
    get countryCodes() {
        return this.getListAttribute('country_codes');
    }
    set countryCodes(value) {
        this._countryCodes = value;
    }
    // Temporarily expose input value. Use with caution.
    get countryCodesInput() {
        return this._countryCodes;
    }
    // forwarded_ip_config - computed: false, optional: true, required: false
    _forwardedIpConfig = new Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementGeoMatchStatementForwardedIpConfigOutputReference(this, "forwarded_ip_config", true);
    get forwardedIpConfig() {
        return this._forwardedIpConfig;
    }
    putForwardedIpConfig(value) {
        this._forwardedIpConfig.internalValue = value;
    }
    resetForwardedIpConfig() {
        this._forwardedIpConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get forwardedIpConfigInput() {
        return this._forwardedIpConfig.internalValue;
    }
}
export function wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementIpSetReferenceStatementIpSetForwardedIpConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        fallback_behavior: cdktf.stringToTerraform(struct.fallbackBehavior),
        header_name: cdktf.stringToTerraform(struct.headerName),
        position: cdktf.stringToTerraform(struct.position),
    };
}
export class Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementIpSetReferenceStatementIpSetForwardedIpConfigOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._fallbackBehavior) {
            hasAnyValues = true;
            internalValueResult.fallbackBehavior = this._fallbackBehavior;
        }
        if (this._headerName) {
            hasAnyValues = true;
            internalValueResult.headerName = this._headerName;
        }
        if (this._position) {
            hasAnyValues = true;
            internalValueResult.position = this._position;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._fallbackBehavior = undefined;
            this._headerName = undefined;
            this._position = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._fallbackBehavior = value.fallbackBehavior;
            this._headerName = value.headerName;
            this._position = value.position;
        }
    }
    // fallback_behavior - computed: false, optional: false, required: true
    _fallbackBehavior;
    get fallbackBehavior() {
        return this.getStringAttribute('fallback_behavior');
    }
    set fallbackBehavior(value) {
        this._fallbackBehavior = value;
    }
    // Temporarily expose input value. Use with caution.
    get fallbackBehaviorInput() {
        return this._fallbackBehavior;
    }
    // header_name - computed: false, optional: false, required: true
    _headerName;
    get headerName() {
        return this.getStringAttribute('header_name');
    }
    set headerName(value) {
        this._headerName = value;
    }
    // Temporarily expose input value. Use with caution.
    get headerNameInput() {
        return this._headerName;
    }
    // position - computed: false, optional: false, required: true
    _position;
    get position() {
        return this.getStringAttribute('position');
    }
    set position(value) {
        this._position = value;
    }
    // Temporarily expose input value. Use with caution.
    get positionInput() {
        return this._position;
    }
}
export function wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementIpSetReferenceStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        arn: cdktf.stringToTerraform(struct.arn),
        ip_set_forwarded_ip_config: wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementIpSetReferenceStatementIpSetForwardedIpConfigToTerraform(struct.ipSetForwardedIpConfig),
    };
}
export class Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementIpSetReferenceStatementOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._arn) {
            hasAnyValues = true;
            internalValueResult.arn = this._arn;
        }
        if (this._ipSetForwardedIpConfig?.internalValue) {
            hasAnyValues = true;
            internalValueResult.ipSetForwardedIpConfig = this._ipSetForwardedIpConfig?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._arn = undefined;
            this._ipSetForwardedIpConfig.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._arn = value.arn;
            this._ipSetForwardedIpConfig.internalValue = value.ipSetForwardedIpConfig;
        }
    }
    // arn - computed: false, optional: false, required: true
    _arn;
    get arn() {
        return this.getStringAttribute('arn');
    }
    set arn(value) {
        this._arn = value;
    }
    // Temporarily expose input value. Use with caution.
    get arnInput() {
        return this._arn;
    }
    // ip_set_forwarded_ip_config - computed: false, optional: true, required: false
    _ipSetForwardedIpConfig = new Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementIpSetReferenceStatementIpSetForwardedIpConfigOutputReference(this, "ip_set_forwarded_ip_config", true);
    get ipSetForwardedIpConfig() {
        return this._ipSetForwardedIpConfig;
    }
    putIpSetForwardedIpConfig(value) {
        this._ipSetForwardedIpConfig.internalValue = value;
    }
    resetIpSetForwardedIpConfig() {
        this._ipSetForwardedIpConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get ipSetForwardedIpConfigInput() {
        return this._ipSetForwardedIpConfig.internalValue;
    }
}
export function wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementLabelMatchStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        key: cdktf.stringToTerraform(struct.key),
        scope: cdktf.stringToTerraform(struct.scope),
    };
}
export class Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementLabelMatchStatementOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._key) {
            hasAnyValues = true;
            internalValueResult.key = this._key;
        }
        if (this._scope) {
            hasAnyValues = true;
            internalValueResult.scope = this._scope;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._key = undefined;
            this._scope = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._key = value.key;
            this._scope = value.scope;
        }
    }
    // key - computed: false, optional: false, required: true
    _key;
    get key() {
        return this.getStringAttribute('key');
    }
    set key(value) {
        this._key = value;
    }
    // Temporarily expose input value. Use with caution.
    get keyInput() {
        return this._key;
    }
    // scope - computed: false, optional: false, required: true
    _scope;
    get scope() {
        return this.getStringAttribute('scope');
    }
    set scope(value) {
        this._scope = value;
    }
    // Temporarily expose input value. Use with caution.
    get scopeInput() {
        return this._scope;
    }
}
export function wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
    };
}
export class Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._name) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._name = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._name = value.name;
        }
    }
    // name - computed: false, optional: false, required: true
    _name;
    get name() {
        return this.getStringAttribute('name');
    }
    set name(value) {
        this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    get nameInput() {
        return this._name;
    }
}
export function wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
    };
}
export class Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._name) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._name = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._name = value.name;
        }
    }
    // name - computed: false, optional: false, required: true
    _name;
    get name() {
        return this.getStringAttribute('name');
    }
    set name(value) {
        this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    get nameInput() {
        return this._name;
    }
}
export function wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        all_query_arguments: wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsToTerraform(struct.allQueryArguments),
        body: wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyToTerraform(struct.body),
        method: wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodToTerraform(struct.method),
        query_string: wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringToTerraform(struct.queryString),
        single_header: wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderToTerraform(struct.singleHeader),
        single_query_argument: wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentToTerraform(struct.singleQueryArgument),
        uri_path: wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathToTerraform(struct.uriPath),
    };
}
export class Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._allQueryArguments?.internalValue) {
            hasAnyValues = true;
            internalValueResult.allQueryArguments = this._allQueryArguments?.internalValue;
        }
        if (this._body?.internalValue) {
            hasAnyValues = true;
            internalValueResult.body = this._body?.internalValue;
        }
        if (this._method?.internalValue) {
            hasAnyValues = true;
            internalValueResult.method = this._method?.internalValue;
        }
        if (this._queryString?.internalValue) {
            hasAnyValues = true;
            internalValueResult.queryString = this._queryString?.internalValue;
        }
        if (this._singleHeader?.internalValue) {
            hasAnyValues = true;
            internalValueResult.singleHeader = this._singleHeader?.internalValue;
        }
        if (this._singleQueryArgument?.internalValue) {
            hasAnyValues = true;
            internalValueResult.singleQueryArgument = this._singleQueryArgument?.internalValue;
        }
        if (this._uriPath?.internalValue) {
            hasAnyValues = true;
            internalValueResult.uriPath = this._uriPath?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._allQueryArguments.internalValue = undefined;
            this._body.internalValue = undefined;
            this._method.internalValue = undefined;
            this._queryString.internalValue = undefined;
            this._singleHeader.internalValue = undefined;
            this._singleQueryArgument.internalValue = undefined;
            this._uriPath.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._allQueryArguments.internalValue = value.allQueryArguments;
            this._body.internalValue = value.body;
            this._method.internalValue = value.method;
            this._queryString.internalValue = value.queryString;
            this._singleHeader.internalValue = value.singleHeader;
            this._singleQueryArgument.internalValue = value.singleQueryArgument;
            this._uriPath.internalValue = value.uriPath;
        }
    }
    // all_query_arguments - computed: false, optional: true, required: false
    _allQueryArguments = new Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsOutputReference(this, "all_query_arguments", true);
    get allQueryArguments() {
        return this._allQueryArguments;
    }
    putAllQueryArguments(value) {
        this._allQueryArguments.internalValue = value;
    }
    resetAllQueryArguments() {
        this._allQueryArguments.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get allQueryArgumentsInput() {
        return this._allQueryArguments.internalValue;
    }
    // body - computed: false, optional: true, required: false
    _body = new Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyOutputReference(this, "body", true);
    get body() {
        return this._body;
    }
    putBody(value) {
        this._body.internalValue = value;
    }
    resetBody() {
        this._body.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get bodyInput() {
        return this._body.internalValue;
    }
    // method - computed: false, optional: true, required: false
    _method = new Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodOutputReference(this, "method", true);
    get method() {
        return this._method;
    }
    putMethod(value) {
        this._method.internalValue = value;
    }
    resetMethod() {
        this._method.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get methodInput() {
        return this._method.internalValue;
    }
    // query_string - computed: false, optional: true, required: false
    _queryString = new Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringOutputReference(this, "query_string", true);
    get queryString() {
        return this._queryString;
    }
    putQueryString(value) {
        this._queryString.internalValue = value;
    }
    resetQueryString() {
        this._queryString.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get queryStringInput() {
        return this._queryString.internalValue;
    }
    // single_header - computed: false, optional: true, required: false
    _singleHeader = new Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderOutputReference(this, "single_header", true);
    get singleHeader() {
        return this._singleHeader;
    }
    putSingleHeader(value) {
        this._singleHeader.internalValue = value;
    }
    resetSingleHeader() {
        this._singleHeader.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get singleHeaderInput() {
        return this._singleHeader.internalValue;
    }
    // single_query_argument - computed: false, optional: true, required: false
    _singleQueryArgument = new Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentOutputReference(this, "single_query_argument", true);
    get singleQueryArgument() {
        return this._singleQueryArgument;
    }
    putSingleQueryArgument(value) {
        this._singleQueryArgument.internalValue = value;
    }
    resetSingleQueryArgument() {
        this._singleQueryArgument.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get singleQueryArgumentInput() {
        return this._singleQueryArgument.internalValue;
    }
    // uri_path - computed: false, optional: true, required: false
    _uriPath = new Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathOutputReference(this, "uri_path", true);
    get uriPath() {
        return this._uriPath;
    }
    putUriPath(value) {
        this._uriPath.internalValue = value;
    }
    resetUriPath() {
        this._uriPath.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get uriPathInput() {
        return this._uriPath.internalValue;
    }
}
export function wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementTextTransformationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        priority: cdktf.numberToTerraform(struct.priority),
        type: cdktf.stringToTerraform(struct.type),
    };
}
export function wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        arn: cdktf.stringToTerraform(struct.arn),
        field_to_match: wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchToTerraform(struct.fieldToMatch),
        text_transformation: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementTextTransformationToTerraform)(struct.textTransformation),
    };
}
export class Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._arn) {
            hasAnyValues = true;
            internalValueResult.arn = this._arn;
        }
        if (this._fieldToMatch?.internalValue) {
            hasAnyValues = true;
            internalValueResult.fieldToMatch = this._fieldToMatch?.internalValue;
        }
        if (this._textTransformation) {
            hasAnyValues = true;
            internalValueResult.textTransformation = this._textTransformation;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._arn = undefined;
            this._fieldToMatch.internalValue = undefined;
            this._textTransformation = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._arn = value.arn;
            this._fieldToMatch.internalValue = value.fieldToMatch;
            this._textTransformation = value.textTransformation;
        }
    }
    // arn - computed: false, optional: false, required: true
    _arn;
    get arn() {
        return this.getStringAttribute('arn');
    }
    set arn(value) {
        this._arn = value;
    }
    // Temporarily expose input value. Use with caution.
    get arnInput() {
        return this._arn;
    }
    // field_to_match - computed: false, optional: true, required: false
    _fieldToMatch = new Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchOutputReference(this, "field_to_match", true);
    get fieldToMatch() {
        return this._fieldToMatch;
    }
    putFieldToMatch(value) {
        this._fieldToMatch.internalValue = value;
    }
    resetFieldToMatch() {
        this._fieldToMatch.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get fieldToMatchInput() {
        return this._fieldToMatch.internalValue;
    }
    // text_transformation - computed: false, optional: false, required: true
    _textTransformation;
    get textTransformation() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('text_transformation');
    }
    set textTransformation(value) {
        this._textTransformation = value;
    }
    // Temporarily expose input value. Use with caution.
    get textTransformationInput() {
        return this._textTransformation;
    }
}
export function wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchBodyToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchMethodToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchQueryStringToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
    };
}
export class Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._name) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._name = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._name = value.name;
        }
    }
    // name - computed: false, optional: false, required: true
    _name;
    get name() {
        return this.getStringAttribute('name');
    }
    set name(value) {
        this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    get nameInput() {
        return this._name;
    }
}
export function wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
    };
}
export class Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._name) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._name = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._name = value.name;
        }
    }
    // name - computed: false, optional: false, required: true
    _name;
    get name() {
        return this.getStringAttribute('name');
    }
    set name(value) {
        this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    get nameInput() {
        return this._name;
    }
}
export function wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchUriPathToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        all_query_arguments: wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsToTerraform(struct.allQueryArguments),
        body: wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchBodyToTerraform(struct.body),
        method: wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchMethodToTerraform(struct.method),
        query_string: wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchQueryStringToTerraform(struct.queryString),
        single_header: wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderToTerraform(struct.singleHeader),
        single_query_argument: wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentToTerraform(struct.singleQueryArgument),
        uri_path: wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchUriPathToTerraform(struct.uriPath),
    };
}
export class Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._allQueryArguments?.internalValue) {
            hasAnyValues = true;
            internalValueResult.allQueryArguments = this._allQueryArguments?.internalValue;
        }
        if (this._body?.internalValue) {
            hasAnyValues = true;
            internalValueResult.body = this._body?.internalValue;
        }
        if (this._method?.internalValue) {
            hasAnyValues = true;
            internalValueResult.method = this._method?.internalValue;
        }
        if (this._queryString?.internalValue) {
            hasAnyValues = true;
            internalValueResult.queryString = this._queryString?.internalValue;
        }
        if (this._singleHeader?.internalValue) {
            hasAnyValues = true;
            internalValueResult.singleHeader = this._singleHeader?.internalValue;
        }
        if (this._singleQueryArgument?.internalValue) {
            hasAnyValues = true;
            internalValueResult.singleQueryArgument = this._singleQueryArgument?.internalValue;
        }
        if (this._uriPath?.internalValue) {
            hasAnyValues = true;
            internalValueResult.uriPath = this._uriPath?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._allQueryArguments.internalValue = undefined;
            this._body.internalValue = undefined;
            this._method.internalValue = undefined;
            this._queryString.internalValue = undefined;
            this._singleHeader.internalValue = undefined;
            this._singleQueryArgument.internalValue = undefined;
            this._uriPath.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._allQueryArguments.internalValue = value.allQueryArguments;
            this._body.internalValue = value.body;
            this._method.internalValue = value.method;
            this._queryString.internalValue = value.queryString;
            this._singleHeader.internalValue = value.singleHeader;
            this._singleQueryArgument.internalValue = value.singleQueryArgument;
            this._uriPath.internalValue = value.uriPath;
        }
    }
    // all_query_arguments - computed: false, optional: true, required: false
    _allQueryArguments = new Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsOutputReference(this, "all_query_arguments", true);
    get allQueryArguments() {
        return this._allQueryArguments;
    }
    putAllQueryArguments(value) {
        this._allQueryArguments.internalValue = value;
    }
    resetAllQueryArguments() {
        this._allQueryArguments.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get allQueryArgumentsInput() {
        return this._allQueryArguments.internalValue;
    }
    // body - computed: false, optional: true, required: false
    _body = new Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchBodyOutputReference(this, "body", true);
    get body() {
        return this._body;
    }
    putBody(value) {
        this._body.internalValue = value;
    }
    resetBody() {
        this._body.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get bodyInput() {
        return this._body.internalValue;
    }
    // method - computed: false, optional: true, required: false
    _method = new Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchMethodOutputReference(this, "method", true);
    get method() {
        return this._method;
    }
    putMethod(value) {
        this._method.internalValue = value;
    }
    resetMethod() {
        this._method.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get methodInput() {
        return this._method.internalValue;
    }
    // query_string - computed: false, optional: true, required: false
    _queryString = new Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchQueryStringOutputReference(this, "query_string", true);
    get queryString() {
        return this._queryString;
    }
    putQueryString(value) {
        this._queryString.internalValue = value;
    }
    resetQueryString() {
        this._queryString.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get queryStringInput() {
        return this._queryString.internalValue;
    }
    // single_header - computed: false, optional: true, required: false
    _singleHeader = new Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderOutputReference(this, "single_header", true);
    get singleHeader() {
        return this._singleHeader;
    }
    putSingleHeader(value) {
        this._singleHeader.internalValue = value;
    }
    resetSingleHeader() {
        this._singleHeader.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get singleHeaderInput() {
        return this._singleHeader.internalValue;
    }
    // single_query_argument - computed: false, optional: true, required: false
    _singleQueryArgument = new Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentOutputReference(this, "single_query_argument", true);
    get singleQueryArgument() {
        return this._singleQueryArgument;
    }
    putSingleQueryArgument(value) {
        this._singleQueryArgument.internalValue = value;
    }
    resetSingleQueryArgument() {
        this._singleQueryArgument.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get singleQueryArgumentInput() {
        return this._singleQueryArgument.internalValue;
    }
    // uri_path - computed: false, optional: true, required: false
    _uriPath = new Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchUriPathOutputReference(this, "uri_path", true);
    get uriPath() {
        return this._uriPath;
    }
    putUriPath(value) {
        this._uriPath.internalValue = value;
    }
    resetUriPath() {
        this._uriPath.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get uriPathInput() {
        return this._uriPath.internalValue;
    }
}
export function wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSizeConstraintStatementTextTransformationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        priority: cdktf.numberToTerraform(struct.priority),
        type: cdktf.stringToTerraform(struct.type),
    };
}
export function wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSizeConstraintStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        comparison_operator: cdktf.stringToTerraform(struct.comparisonOperator),
        size: cdktf.numberToTerraform(struct.size),
        field_to_match: wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchToTerraform(struct.fieldToMatch),
        text_transformation: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSizeConstraintStatementTextTransformationToTerraform)(struct.textTransformation),
    };
}
export class Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSizeConstraintStatementOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._comparisonOperator) {
            hasAnyValues = true;
            internalValueResult.comparisonOperator = this._comparisonOperator;
        }
        if (this._size) {
            hasAnyValues = true;
            internalValueResult.size = this._size;
        }
        if (this._fieldToMatch?.internalValue) {
            hasAnyValues = true;
            internalValueResult.fieldToMatch = this._fieldToMatch?.internalValue;
        }
        if (this._textTransformation) {
            hasAnyValues = true;
            internalValueResult.textTransformation = this._textTransformation;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._comparisonOperator = undefined;
            this._size = undefined;
            this._fieldToMatch.internalValue = undefined;
            this._textTransformation = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._comparisonOperator = value.comparisonOperator;
            this._size = value.size;
            this._fieldToMatch.internalValue = value.fieldToMatch;
            this._textTransformation = value.textTransformation;
        }
    }
    // comparison_operator - computed: false, optional: false, required: true
    _comparisonOperator;
    get comparisonOperator() {
        return this.getStringAttribute('comparison_operator');
    }
    set comparisonOperator(value) {
        this._comparisonOperator = value;
    }
    // Temporarily expose input value. Use with caution.
    get comparisonOperatorInput() {
        return this._comparisonOperator;
    }
    // size - computed: false, optional: false, required: true
    _size;
    get size() {
        return this.getNumberAttribute('size');
    }
    set size(value) {
        this._size = value;
    }
    // Temporarily expose input value. Use with caution.
    get sizeInput() {
        return this._size;
    }
    // field_to_match - computed: false, optional: true, required: false
    _fieldToMatch = new Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchOutputReference(this, "field_to_match", true);
    get fieldToMatch() {
        return this._fieldToMatch;
    }
    putFieldToMatch(value) {
        this._fieldToMatch.internalValue = value;
    }
    resetFieldToMatch() {
        this._fieldToMatch.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get fieldToMatchInput() {
        return this._fieldToMatch.internalValue;
    }
    // text_transformation - computed: false, optional: false, required: true
    _textTransformation;
    get textTransformation() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('text_transformation');
    }
    set textTransformation(value) {
        this._textTransformation = value;
    }
    // Temporarily expose input value. Use with caution.
    get textTransformationInput() {
        return this._textTransformation;
    }
}
export function wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchBodyToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchMethodToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchQueryStringToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleHeaderToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
    };
}
export class Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._name) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._name = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._name = value.name;
        }
    }
    // name - computed: false, optional: false, required: true
    _name;
    get name() {
        return this.getStringAttribute('name');
    }
    set name(value) {
        this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    get nameInput() {
        return this._name;
    }
}
export function wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
    };
}
export class Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._name) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._name = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._name = value.name;
        }
    }
    // name - computed: false, optional: false, required: true
    _name;
    get name() {
        return this.getStringAttribute('name');
    }
    set name(value) {
        this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    get nameInput() {
        return this._name;
    }
}
export function wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchUriPathToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        all_query_arguments: wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct.allQueryArguments),
        body: wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchBodyToTerraform(struct.body),
        method: wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchMethodToTerraform(struct.method),
        query_string: wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchQueryStringToTerraform(struct.queryString),
        single_header: wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleHeaderToTerraform(struct.singleHeader),
        single_query_argument: wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct.singleQueryArgument),
        uri_path: wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchUriPathToTerraform(struct.uriPath),
    };
}
export class Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._allQueryArguments?.internalValue) {
            hasAnyValues = true;
            internalValueResult.allQueryArguments = this._allQueryArguments?.internalValue;
        }
        if (this._body?.internalValue) {
            hasAnyValues = true;
            internalValueResult.body = this._body?.internalValue;
        }
        if (this._method?.internalValue) {
            hasAnyValues = true;
            internalValueResult.method = this._method?.internalValue;
        }
        if (this._queryString?.internalValue) {
            hasAnyValues = true;
            internalValueResult.queryString = this._queryString?.internalValue;
        }
        if (this._singleHeader?.internalValue) {
            hasAnyValues = true;
            internalValueResult.singleHeader = this._singleHeader?.internalValue;
        }
        if (this._singleQueryArgument?.internalValue) {
            hasAnyValues = true;
            internalValueResult.singleQueryArgument = this._singleQueryArgument?.internalValue;
        }
        if (this._uriPath?.internalValue) {
            hasAnyValues = true;
            internalValueResult.uriPath = this._uriPath?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._allQueryArguments.internalValue = undefined;
            this._body.internalValue = undefined;
            this._method.internalValue = undefined;
            this._queryString.internalValue = undefined;
            this._singleHeader.internalValue = undefined;
            this._singleQueryArgument.internalValue = undefined;
            this._uriPath.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._allQueryArguments.internalValue = value.allQueryArguments;
            this._body.internalValue = value.body;
            this._method.internalValue = value.method;
            this._queryString.internalValue = value.queryString;
            this._singleHeader.internalValue = value.singleHeader;
            this._singleQueryArgument.internalValue = value.singleQueryArgument;
            this._uriPath.internalValue = value.uriPath;
        }
    }
    // all_query_arguments - computed: false, optional: true, required: false
    _allQueryArguments = new Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsOutputReference(this, "all_query_arguments", true);
    get allQueryArguments() {
        return this._allQueryArguments;
    }
    putAllQueryArguments(value) {
        this._allQueryArguments.internalValue = value;
    }
    resetAllQueryArguments() {
        this._allQueryArguments.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get allQueryArgumentsInput() {
        return this._allQueryArguments.internalValue;
    }
    // body - computed: false, optional: true, required: false
    _body = new Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchBodyOutputReference(this, "body", true);
    get body() {
        return this._body;
    }
    putBody(value) {
        this._body.internalValue = value;
    }
    resetBody() {
        this._body.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get bodyInput() {
        return this._body.internalValue;
    }
    // method - computed: false, optional: true, required: false
    _method = new Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchMethodOutputReference(this, "method", true);
    get method() {
        return this._method;
    }
    putMethod(value) {
        this._method.internalValue = value;
    }
    resetMethod() {
        this._method.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get methodInput() {
        return this._method.internalValue;
    }
    // query_string - computed: false, optional: true, required: false
    _queryString = new Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchQueryStringOutputReference(this, "query_string", true);
    get queryString() {
        return this._queryString;
    }
    putQueryString(value) {
        this._queryString.internalValue = value;
    }
    resetQueryString() {
        this._queryString.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get queryStringInput() {
        return this._queryString.internalValue;
    }
    // single_header - computed: false, optional: true, required: false
    _singleHeader = new Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleHeaderOutputReference(this, "single_header", true);
    get singleHeader() {
        return this._singleHeader;
    }
    putSingleHeader(value) {
        this._singleHeader.internalValue = value;
    }
    resetSingleHeader() {
        this._singleHeader.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get singleHeaderInput() {
        return this._singleHeader.internalValue;
    }
    // single_query_argument - computed: false, optional: true, required: false
    _singleQueryArgument = new Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentOutputReference(this, "single_query_argument", true);
    get singleQueryArgument() {
        return this._singleQueryArgument;
    }
    putSingleQueryArgument(value) {
        this._singleQueryArgument.internalValue = value;
    }
    resetSingleQueryArgument() {
        this._singleQueryArgument.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get singleQueryArgumentInput() {
        return this._singleQueryArgument.internalValue;
    }
    // uri_path - computed: false, optional: true, required: false
    _uriPath = new Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchUriPathOutputReference(this, "uri_path", true);
    get uriPath() {
        return this._uriPath;
    }
    putUriPath(value) {
        this._uriPath.internalValue = value;
    }
    resetUriPath() {
        this._uriPath.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get uriPathInput() {
        return this._uriPath.internalValue;
    }
}
export function wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSqliMatchStatementTextTransformationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        priority: cdktf.numberToTerraform(struct.priority),
        type: cdktf.stringToTerraform(struct.type),
    };
}
export function wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSqliMatchStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        field_to_match: wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchToTerraform(struct.fieldToMatch),
        text_transformation: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSqliMatchStatementTextTransformationToTerraform)(struct.textTransformation),
    };
}
export class Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSqliMatchStatementOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._fieldToMatch?.internalValue) {
            hasAnyValues = true;
            internalValueResult.fieldToMatch = this._fieldToMatch?.internalValue;
        }
        if (this._textTransformation) {
            hasAnyValues = true;
            internalValueResult.textTransformation = this._textTransformation;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._fieldToMatch.internalValue = undefined;
            this._textTransformation = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._fieldToMatch.internalValue = value.fieldToMatch;
            this._textTransformation = value.textTransformation;
        }
    }
    // field_to_match - computed: false, optional: true, required: false
    _fieldToMatch = new Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchOutputReference(this, "field_to_match", true);
    get fieldToMatch() {
        return this._fieldToMatch;
    }
    putFieldToMatch(value) {
        this._fieldToMatch.internalValue = value;
    }
    resetFieldToMatch() {
        this._fieldToMatch.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get fieldToMatchInput() {
        return this._fieldToMatch.internalValue;
    }
    // text_transformation - computed: false, optional: false, required: true
    _textTransformation;
    get textTransformation() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('text_transformation');
    }
    set textTransformation(value) {
        this._textTransformation = value;
    }
    // Temporarily expose input value. Use with caution.
    get textTransformationInput() {
        return this._textTransformation;
    }
}
export function wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchBodyToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchMethodToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchQueryStringToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleHeaderToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
    };
}
export class Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._name) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._name = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._name = value.name;
        }
    }
    // name - computed: false, optional: false, required: true
    _name;
    get name() {
        return this.getStringAttribute('name');
    }
    set name(value) {
        this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    get nameInput() {
        return this._name;
    }
}
export function wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
    };
}
export class Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._name) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._name = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._name = value.name;
        }
    }
    // name - computed: false, optional: false, required: true
    _name;
    get name() {
        return this.getStringAttribute('name');
    }
    set name(value) {
        this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    get nameInput() {
        return this._name;
    }
}
export function wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchUriPathToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        all_query_arguments: wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct.allQueryArguments),
        body: wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchBodyToTerraform(struct.body),
        method: wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchMethodToTerraform(struct.method),
        query_string: wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchQueryStringToTerraform(struct.queryString),
        single_header: wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleHeaderToTerraform(struct.singleHeader),
        single_query_argument: wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct.singleQueryArgument),
        uri_path: wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchUriPathToTerraform(struct.uriPath),
    };
}
export class Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._allQueryArguments?.internalValue) {
            hasAnyValues = true;
            internalValueResult.allQueryArguments = this._allQueryArguments?.internalValue;
        }
        if (this._body?.internalValue) {
            hasAnyValues = true;
            internalValueResult.body = this._body?.internalValue;
        }
        if (this._method?.internalValue) {
            hasAnyValues = true;
            internalValueResult.method = this._method?.internalValue;
        }
        if (this._queryString?.internalValue) {
            hasAnyValues = true;
            internalValueResult.queryString = this._queryString?.internalValue;
        }
        if (this._singleHeader?.internalValue) {
            hasAnyValues = true;
            internalValueResult.singleHeader = this._singleHeader?.internalValue;
        }
        if (this._singleQueryArgument?.internalValue) {
            hasAnyValues = true;
            internalValueResult.singleQueryArgument = this._singleQueryArgument?.internalValue;
        }
        if (this._uriPath?.internalValue) {
            hasAnyValues = true;
            internalValueResult.uriPath = this._uriPath?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._allQueryArguments.internalValue = undefined;
            this._body.internalValue = undefined;
            this._method.internalValue = undefined;
            this._queryString.internalValue = undefined;
            this._singleHeader.internalValue = undefined;
            this._singleQueryArgument.internalValue = undefined;
            this._uriPath.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._allQueryArguments.internalValue = value.allQueryArguments;
            this._body.internalValue = value.body;
            this._method.internalValue = value.method;
            this._queryString.internalValue = value.queryString;
            this._singleHeader.internalValue = value.singleHeader;
            this._singleQueryArgument.internalValue = value.singleQueryArgument;
            this._uriPath.internalValue = value.uriPath;
        }
    }
    // all_query_arguments - computed: false, optional: true, required: false
    _allQueryArguments = new Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsOutputReference(this, "all_query_arguments", true);
    get allQueryArguments() {
        return this._allQueryArguments;
    }
    putAllQueryArguments(value) {
        this._allQueryArguments.internalValue = value;
    }
    resetAllQueryArguments() {
        this._allQueryArguments.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get allQueryArgumentsInput() {
        return this._allQueryArguments.internalValue;
    }
    // body - computed: false, optional: true, required: false
    _body = new Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchBodyOutputReference(this, "body", true);
    get body() {
        return this._body;
    }
    putBody(value) {
        this._body.internalValue = value;
    }
    resetBody() {
        this._body.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get bodyInput() {
        return this._body.internalValue;
    }
    // method - computed: false, optional: true, required: false
    _method = new Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchMethodOutputReference(this, "method", true);
    get method() {
        return this._method;
    }
    putMethod(value) {
        this._method.internalValue = value;
    }
    resetMethod() {
        this._method.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get methodInput() {
        return this._method.internalValue;
    }
    // query_string - computed: false, optional: true, required: false
    _queryString = new Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchQueryStringOutputReference(this, "query_string", true);
    get queryString() {
        return this._queryString;
    }
    putQueryString(value) {
        this._queryString.internalValue = value;
    }
    resetQueryString() {
        this._queryString.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get queryStringInput() {
        return this._queryString.internalValue;
    }
    // single_header - computed: false, optional: true, required: false
    _singleHeader = new Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleHeaderOutputReference(this, "single_header", true);
    get singleHeader() {
        return this._singleHeader;
    }
    putSingleHeader(value) {
        this._singleHeader.internalValue = value;
    }
    resetSingleHeader() {
        this._singleHeader.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get singleHeaderInput() {
        return this._singleHeader.internalValue;
    }
    // single_query_argument - computed: false, optional: true, required: false
    _singleQueryArgument = new Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentOutputReference(this, "single_query_argument", true);
    get singleQueryArgument() {
        return this._singleQueryArgument;
    }
    putSingleQueryArgument(value) {
        this._singleQueryArgument.internalValue = value;
    }
    resetSingleQueryArgument() {
        this._singleQueryArgument.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get singleQueryArgumentInput() {
        return this._singleQueryArgument.internalValue;
    }
    // uri_path - computed: false, optional: true, required: false
    _uriPath = new Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchUriPathOutputReference(this, "uri_path", true);
    get uriPath() {
        return this._uriPath;
    }
    putUriPath(value) {
        this._uriPath.internalValue = value;
    }
    resetUriPath() {
        this._uriPath.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get uriPathInput() {
        return this._uriPath.internalValue;
    }
}
export function wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementXssMatchStatementTextTransformationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        priority: cdktf.numberToTerraform(struct.priority),
        type: cdktf.stringToTerraform(struct.type),
    };
}
export function wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementXssMatchStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        field_to_match: wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchToTerraform(struct.fieldToMatch),
        text_transformation: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementXssMatchStatementTextTransformationToTerraform)(struct.textTransformation),
    };
}
export class Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementXssMatchStatementOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._fieldToMatch?.internalValue) {
            hasAnyValues = true;
            internalValueResult.fieldToMatch = this._fieldToMatch?.internalValue;
        }
        if (this._textTransformation) {
            hasAnyValues = true;
            internalValueResult.textTransformation = this._textTransformation;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._fieldToMatch.internalValue = undefined;
            this._textTransformation = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._fieldToMatch.internalValue = value.fieldToMatch;
            this._textTransformation = value.textTransformation;
        }
    }
    // field_to_match - computed: false, optional: true, required: false
    _fieldToMatch = new Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchOutputReference(this, "field_to_match", true);
    get fieldToMatch() {
        return this._fieldToMatch;
    }
    putFieldToMatch(value) {
        this._fieldToMatch.internalValue = value;
    }
    resetFieldToMatch() {
        this._fieldToMatch.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get fieldToMatchInput() {
        return this._fieldToMatch.internalValue;
    }
    // text_transformation - computed: false, optional: false, required: true
    _textTransformation;
    get textTransformation() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('text_transformation');
    }
    set textTransformation(value) {
        this._textTransformation = value;
    }
    // Temporarily expose input value. Use with caution.
    get textTransformationInput() {
        return this._textTransformation;
    }
}
export function wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        byte_match_statement: wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementByteMatchStatementToTerraform(struct.byteMatchStatement),
        geo_match_statement: wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementGeoMatchStatementToTerraform(struct.geoMatchStatement),
        ip_set_reference_statement: wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementIpSetReferenceStatementToTerraform(struct.ipSetReferenceStatement),
        label_match_statement: wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementLabelMatchStatementToTerraform(struct.labelMatchStatement),
        regex_pattern_set_reference_statement: wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementToTerraform(struct.regexPatternSetReferenceStatement),
        size_constraint_statement: wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSizeConstraintStatementToTerraform(struct.sizeConstraintStatement),
        sqli_match_statement: wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSqliMatchStatementToTerraform(struct.sqliMatchStatement),
        xss_match_statement: wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementXssMatchStatementToTerraform(struct.xssMatchStatement),
    };
}
export function wafv2RuleGroupRuleStatementAndStatementStatementNotStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        statement: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementToTerraform)(struct.statement),
    };
}
export class Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._statement) {
            hasAnyValues = true;
            internalValueResult.statement = this._statement;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._statement = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._statement = value.statement;
        }
    }
    // statement - computed: false, optional: false, required: true
    _statement;
    get statement() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('statement');
    }
    set statement(value) {
        this._statement = value;
    }
    // Temporarily expose input value. Use with caution.
    get statementInput() {
        return this._statement;
    }
}
export function wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchBodyToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchMethodToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchQueryStringToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleHeaderToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
    };
}
export class Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._name) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._name = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._name = value.name;
        }
    }
    // name - computed: false, optional: false, required: true
    _name;
    get name() {
        return this.getStringAttribute('name');
    }
    set name(value) {
        this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    get nameInput() {
        return this._name;
    }
}
export function wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
    };
}
export class Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._name) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._name = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._name = value.name;
        }
    }
    // name - computed: false, optional: false, required: true
    _name;
    get name() {
        return this.getStringAttribute('name');
    }
    set name(value) {
        this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    get nameInput() {
        return this._name;
    }
}
export function wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchUriPathToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        all_query_arguments: wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct.allQueryArguments),
        body: wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchBodyToTerraform(struct.body),
        method: wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchMethodToTerraform(struct.method),
        query_string: wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchQueryStringToTerraform(struct.queryString),
        single_header: wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleHeaderToTerraform(struct.singleHeader),
        single_query_argument: wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct.singleQueryArgument),
        uri_path: wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchUriPathToTerraform(struct.uriPath),
    };
}
export class Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._allQueryArguments?.internalValue) {
            hasAnyValues = true;
            internalValueResult.allQueryArguments = this._allQueryArguments?.internalValue;
        }
        if (this._body?.internalValue) {
            hasAnyValues = true;
            internalValueResult.body = this._body?.internalValue;
        }
        if (this._method?.internalValue) {
            hasAnyValues = true;
            internalValueResult.method = this._method?.internalValue;
        }
        if (this._queryString?.internalValue) {
            hasAnyValues = true;
            internalValueResult.queryString = this._queryString?.internalValue;
        }
        if (this._singleHeader?.internalValue) {
            hasAnyValues = true;
            internalValueResult.singleHeader = this._singleHeader?.internalValue;
        }
        if (this._singleQueryArgument?.internalValue) {
            hasAnyValues = true;
            internalValueResult.singleQueryArgument = this._singleQueryArgument?.internalValue;
        }
        if (this._uriPath?.internalValue) {
            hasAnyValues = true;
            internalValueResult.uriPath = this._uriPath?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._allQueryArguments.internalValue = undefined;
            this._body.internalValue = undefined;
            this._method.internalValue = undefined;
            this._queryString.internalValue = undefined;
            this._singleHeader.internalValue = undefined;
            this._singleQueryArgument.internalValue = undefined;
            this._uriPath.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._allQueryArguments.internalValue = value.allQueryArguments;
            this._body.internalValue = value.body;
            this._method.internalValue = value.method;
            this._queryString.internalValue = value.queryString;
            this._singleHeader.internalValue = value.singleHeader;
            this._singleQueryArgument.internalValue = value.singleQueryArgument;
            this._uriPath.internalValue = value.uriPath;
        }
    }
    // all_query_arguments - computed: false, optional: true, required: false
    _allQueryArguments = new Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsOutputReference(this, "all_query_arguments", true);
    get allQueryArguments() {
        return this._allQueryArguments;
    }
    putAllQueryArguments(value) {
        this._allQueryArguments.internalValue = value;
    }
    resetAllQueryArguments() {
        this._allQueryArguments.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get allQueryArgumentsInput() {
        return this._allQueryArguments.internalValue;
    }
    // body - computed: false, optional: true, required: false
    _body = new Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchBodyOutputReference(this, "body", true);
    get body() {
        return this._body;
    }
    putBody(value) {
        this._body.internalValue = value;
    }
    resetBody() {
        this._body.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get bodyInput() {
        return this._body.internalValue;
    }
    // method - computed: false, optional: true, required: false
    _method = new Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchMethodOutputReference(this, "method", true);
    get method() {
        return this._method;
    }
    putMethod(value) {
        this._method.internalValue = value;
    }
    resetMethod() {
        this._method.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get methodInput() {
        return this._method.internalValue;
    }
    // query_string - computed: false, optional: true, required: false
    _queryString = new Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchQueryStringOutputReference(this, "query_string", true);
    get queryString() {
        return this._queryString;
    }
    putQueryString(value) {
        this._queryString.internalValue = value;
    }
    resetQueryString() {
        this._queryString.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get queryStringInput() {
        return this._queryString.internalValue;
    }
    // single_header - computed: false, optional: true, required: false
    _singleHeader = new Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleHeaderOutputReference(this, "single_header", true);
    get singleHeader() {
        return this._singleHeader;
    }
    putSingleHeader(value) {
        this._singleHeader.internalValue = value;
    }
    resetSingleHeader() {
        this._singleHeader.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get singleHeaderInput() {
        return this._singleHeader.internalValue;
    }
    // single_query_argument - computed: false, optional: true, required: false
    _singleQueryArgument = new Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentOutputReference(this, "single_query_argument", true);
    get singleQueryArgument() {
        return this._singleQueryArgument;
    }
    putSingleQueryArgument(value) {
        this._singleQueryArgument.internalValue = value;
    }
    resetSingleQueryArgument() {
        this._singleQueryArgument.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get singleQueryArgumentInput() {
        return this._singleQueryArgument.internalValue;
    }
    // uri_path - computed: false, optional: true, required: false
    _uriPath = new Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchUriPathOutputReference(this, "uri_path", true);
    get uriPath() {
        return this._uriPath;
    }
    putUriPath(value) {
        this._uriPath.internalValue = value;
    }
    resetUriPath() {
        this._uriPath.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get uriPathInput() {
        return this._uriPath.internalValue;
    }
}
export function wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementByteMatchStatementTextTransformationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        priority: cdktf.numberToTerraform(struct.priority),
        type: cdktf.stringToTerraform(struct.type),
    };
}
export function wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementByteMatchStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        positional_constraint: cdktf.stringToTerraform(struct.positionalConstraint),
        search_string: cdktf.stringToTerraform(struct.searchString),
        field_to_match: wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchToTerraform(struct.fieldToMatch),
        text_transformation: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementByteMatchStatementTextTransformationToTerraform)(struct.textTransformation),
    };
}
export class Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementByteMatchStatementOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._positionalConstraint) {
            hasAnyValues = true;
            internalValueResult.positionalConstraint = this._positionalConstraint;
        }
        if (this._searchString) {
            hasAnyValues = true;
            internalValueResult.searchString = this._searchString;
        }
        if (this._fieldToMatch?.internalValue) {
            hasAnyValues = true;
            internalValueResult.fieldToMatch = this._fieldToMatch?.internalValue;
        }
        if (this._textTransformation) {
            hasAnyValues = true;
            internalValueResult.textTransformation = this._textTransformation;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._positionalConstraint = undefined;
            this._searchString = undefined;
            this._fieldToMatch.internalValue = undefined;
            this._textTransformation = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._positionalConstraint = value.positionalConstraint;
            this._searchString = value.searchString;
            this._fieldToMatch.internalValue = value.fieldToMatch;
            this._textTransformation = value.textTransformation;
        }
    }
    // positional_constraint - computed: false, optional: false, required: true
    _positionalConstraint;
    get positionalConstraint() {
        return this.getStringAttribute('positional_constraint');
    }
    set positionalConstraint(value) {
        this._positionalConstraint = value;
    }
    // Temporarily expose input value. Use with caution.
    get positionalConstraintInput() {
        return this._positionalConstraint;
    }
    // search_string - computed: false, optional: false, required: true
    _searchString;
    get searchString() {
        return this.getStringAttribute('search_string');
    }
    set searchString(value) {
        this._searchString = value;
    }
    // Temporarily expose input value. Use with caution.
    get searchStringInput() {
        return this._searchString;
    }
    // field_to_match - computed: false, optional: true, required: false
    _fieldToMatch = new Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchOutputReference(this, "field_to_match", true);
    get fieldToMatch() {
        return this._fieldToMatch;
    }
    putFieldToMatch(value) {
        this._fieldToMatch.internalValue = value;
    }
    resetFieldToMatch() {
        this._fieldToMatch.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get fieldToMatchInput() {
        return this._fieldToMatch.internalValue;
    }
    // text_transformation - computed: false, optional: false, required: true
    _textTransformation;
    get textTransformation() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('text_transformation');
    }
    set textTransformation(value) {
        this._textTransformation = value;
    }
    // Temporarily expose input value. Use with caution.
    get textTransformationInput() {
        return this._textTransformation;
    }
}
export function wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementGeoMatchStatementForwardedIpConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        fallback_behavior: cdktf.stringToTerraform(struct.fallbackBehavior),
        header_name: cdktf.stringToTerraform(struct.headerName),
    };
}
export class Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementGeoMatchStatementForwardedIpConfigOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._fallbackBehavior) {
            hasAnyValues = true;
            internalValueResult.fallbackBehavior = this._fallbackBehavior;
        }
        if (this._headerName) {
            hasAnyValues = true;
            internalValueResult.headerName = this._headerName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._fallbackBehavior = undefined;
            this._headerName = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._fallbackBehavior = value.fallbackBehavior;
            this._headerName = value.headerName;
        }
    }
    // fallback_behavior - computed: false, optional: false, required: true
    _fallbackBehavior;
    get fallbackBehavior() {
        return this.getStringAttribute('fallback_behavior');
    }
    set fallbackBehavior(value) {
        this._fallbackBehavior = value;
    }
    // Temporarily expose input value. Use with caution.
    get fallbackBehaviorInput() {
        return this._fallbackBehavior;
    }
    // header_name - computed: false, optional: false, required: true
    _headerName;
    get headerName() {
        return this.getStringAttribute('header_name');
    }
    set headerName(value) {
        this._headerName = value;
    }
    // Temporarily expose input value. Use with caution.
    get headerNameInput() {
        return this._headerName;
    }
}
export function wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementGeoMatchStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        country_codes: cdktf.listMapper(cdktf.stringToTerraform)(struct.countryCodes),
        forwarded_ip_config: wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementGeoMatchStatementForwardedIpConfigToTerraform(struct.forwardedIpConfig),
    };
}
export class Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementGeoMatchStatementOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._countryCodes) {
            hasAnyValues = true;
            internalValueResult.countryCodes = this._countryCodes;
        }
        if (this._forwardedIpConfig?.internalValue) {
            hasAnyValues = true;
            internalValueResult.forwardedIpConfig = this._forwardedIpConfig?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._countryCodes = undefined;
            this._forwardedIpConfig.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._countryCodes = value.countryCodes;
            this._forwardedIpConfig.internalValue = value.forwardedIpConfig;
        }
    }
    // country_codes - computed: false, optional: false, required: true
    _countryCodes;
    get countryCodes() {
        return this.getListAttribute('country_codes');
    }
    set countryCodes(value) {
        this._countryCodes = value;
    }
    // Temporarily expose input value. Use with caution.
    get countryCodesInput() {
        return this._countryCodes;
    }
    // forwarded_ip_config - computed: false, optional: true, required: false
    _forwardedIpConfig = new Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementGeoMatchStatementForwardedIpConfigOutputReference(this, "forwarded_ip_config", true);
    get forwardedIpConfig() {
        return this._forwardedIpConfig;
    }
    putForwardedIpConfig(value) {
        this._forwardedIpConfig.internalValue = value;
    }
    resetForwardedIpConfig() {
        this._forwardedIpConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get forwardedIpConfigInput() {
        return this._forwardedIpConfig.internalValue;
    }
}
export function wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementIpSetReferenceStatementIpSetForwardedIpConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        fallback_behavior: cdktf.stringToTerraform(struct.fallbackBehavior),
        header_name: cdktf.stringToTerraform(struct.headerName),
        position: cdktf.stringToTerraform(struct.position),
    };
}
export class Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementIpSetReferenceStatementIpSetForwardedIpConfigOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._fallbackBehavior) {
            hasAnyValues = true;
            internalValueResult.fallbackBehavior = this._fallbackBehavior;
        }
        if (this._headerName) {
            hasAnyValues = true;
            internalValueResult.headerName = this._headerName;
        }
        if (this._position) {
            hasAnyValues = true;
            internalValueResult.position = this._position;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._fallbackBehavior = undefined;
            this._headerName = undefined;
            this._position = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._fallbackBehavior = value.fallbackBehavior;
            this._headerName = value.headerName;
            this._position = value.position;
        }
    }
    // fallback_behavior - computed: false, optional: false, required: true
    _fallbackBehavior;
    get fallbackBehavior() {
        return this.getStringAttribute('fallback_behavior');
    }
    set fallbackBehavior(value) {
        this._fallbackBehavior = value;
    }
    // Temporarily expose input value. Use with caution.
    get fallbackBehaviorInput() {
        return this._fallbackBehavior;
    }
    // header_name - computed: false, optional: false, required: true
    _headerName;
    get headerName() {
        return this.getStringAttribute('header_name');
    }
    set headerName(value) {
        this._headerName = value;
    }
    // Temporarily expose input value. Use with caution.
    get headerNameInput() {
        return this._headerName;
    }
    // position - computed: false, optional: false, required: true
    _position;
    get position() {
        return this.getStringAttribute('position');
    }
    set position(value) {
        this._position = value;
    }
    // Temporarily expose input value. Use with caution.
    get positionInput() {
        return this._position;
    }
}
export function wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementIpSetReferenceStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        arn: cdktf.stringToTerraform(struct.arn),
        ip_set_forwarded_ip_config: wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementIpSetReferenceStatementIpSetForwardedIpConfigToTerraform(struct.ipSetForwardedIpConfig),
    };
}
export class Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementIpSetReferenceStatementOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._arn) {
            hasAnyValues = true;
            internalValueResult.arn = this._arn;
        }
        if (this._ipSetForwardedIpConfig?.internalValue) {
            hasAnyValues = true;
            internalValueResult.ipSetForwardedIpConfig = this._ipSetForwardedIpConfig?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._arn = undefined;
            this._ipSetForwardedIpConfig.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._arn = value.arn;
            this._ipSetForwardedIpConfig.internalValue = value.ipSetForwardedIpConfig;
        }
    }
    // arn - computed: false, optional: false, required: true
    _arn;
    get arn() {
        return this.getStringAttribute('arn');
    }
    set arn(value) {
        this._arn = value;
    }
    // Temporarily expose input value. Use with caution.
    get arnInput() {
        return this._arn;
    }
    // ip_set_forwarded_ip_config - computed: false, optional: true, required: false
    _ipSetForwardedIpConfig = new Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementIpSetReferenceStatementIpSetForwardedIpConfigOutputReference(this, "ip_set_forwarded_ip_config", true);
    get ipSetForwardedIpConfig() {
        return this._ipSetForwardedIpConfig;
    }
    putIpSetForwardedIpConfig(value) {
        this._ipSetForwardedIpConfig.internalValue = value;
    }
    resetIpSetForwardedIpConfig() {
        this._ipSetForwardedIpConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get ipSetForwardedIpConfigInput() {
        return this._ipSetForwardedIpConfig.internalValue;
    }
}
export function wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementLabelMatchStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        key: cdktf.stringToTerraform(struct.key),
        scope: cdktf.stringToTerraform(struct.scope),
    };
}
export class Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementLabelMatchStatementOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._key) {
            hasAnyValues = true;
            internalValueResult.key = this._key;
        }
        if (this._scope) {
            hasAnyValues = true;
            internalValueResult.scope = this._scope;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._key = undefined;
            this._scope = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._key = value.key;
            this._scope = value.scope;
        }
    }
    // key - computed: false, optional: false, required: true
    _key;
    get key() {
        return this.getStringAttribute('key');
    }
    set key(value) {
        this._key = value;
    }
    // Temporarily expose input value. Use with caution.
    get keyInput() {
        return this._key;
    }
    // scope - computed: false, optional: false, required: true
    _scope;
    get scope() {
        return this.getStringAttribute('scope');
    }
    set scope(value) {
        this._scope = value;
    }
    // Temporarily expose input value. Use with caution.
    get scopeInput() {
        return this._scope;
    }
}
export function wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
    };
}
export class Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._name) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._name = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._name = value.name;
        }
    }
    // name - computed: false, optional: false, required: true
    _name;
    get name() {
        return this.getStringAttribute('name');
    }
    set name(value) {
        this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    get nameInput() {
        return this._name;
    }
}
export function wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
    };
}
export class Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._name) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._name = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._name = value.name;
        }
    }
    // name - computed: false, optional: false, required: true
    _name;
    get name() {
        return this.getStringAttribute('name');
    }
    set name(value) {
        this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    get nameInput() {
        return this._name;
    }
}
export function wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        all_query_arguments: wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsToTerraform(struct.allQueryArguments),
        body: wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyToTerraform(struct.body),
        method: wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodToTerraform(struct.method),
        query_string: wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringToTerraform(struct.queryString),
        single_header: wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderToTerraform(struct.singleHeader),
        single_query_argument: wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentToTerraform(struct.singleQueryArgument),
        uri_path: wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathToTerraform(struct.uriPath),
    };
}
export class Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._allQueryArguments?.internalValue) {
            hasAnyValues = true;
            internalValueResult.allQueryArguments = this._allQueryArguments?.internalValue;
        }
        if (this._body?.internalValue) {
            hasAnyValues = true;
            internalValueResult.body = this._body?.internalValue;
        }
        if (this._method?.internalValue) {
            hasAnyValues = true;
            internalValueResult.method = this._method?.internalValue;
        }
        if (this._queryString?.internalValue) {
            hasAnyValues = true;
            internalValueResult.queryString = this._queryString?.internalValue;
        }
        if (this._singleHeader?.internalValue) {
            hasAnyValues = true;
            internalValueResult.singleHeader = this._singleHeader?.internalValue;
        }
        if (this._singleQueryArgument?.internalValue) {
            hasAnyValues = true;
            internalValueResult.singleQueryArgument = this._singleQueryArgument?.internalValue;
        }
        if (this._uriPath?.internalValue) {
            hasAnyValues = true;
            internalValueResult.uriPath = this._uriPath?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._allQueryArguments.internalValue = undefined;
            this._body.internalValue = undefined;
            this._method.internalValue = undefined;
            this._queryString.internalValue = undefined;
            this._singleHeader.internalValue = undefined;
            this._singleQueryArgument.internalValue = undefined;
            this._uriPath.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._allQueryArguments.internalValue = value.allQueryArguments;
            this._body.internalValue = value.body;
            this._method.internalValue = value.method;
            this._queryString.internalValue = value.queryString;
            this._singleHeader.internalValue = value.singleHeader;
            this._singleQueryArgument.internalValue = value.singleQueryArgument;
            this._uriPath.internalValue = value.uriPath;
        }
    }
    // all_query_arguments - computed: false, optional: true, required: false
    _allQueryArguments = new Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsOutputReference(this, "all_query_arguments", true);
    get allQueryArguments() {
        return this._allQueryArguments;
    }
    putAllQueryArguments(value) {
        this._allQueryArguments.internalValue = value;
    }
    resetAllQueryArguments() {
        this._allQueryArguments.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get allQueryArgumentsInput() {
        return this._allQueryArguments.internalValue;
    }
    // body - computed: false, optional: true, required: false
    _body = new Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyOutputReference(this, "body", true);
    get body() {
        return this._body;
    }
    putBody(value) {
        this._body.internalValue = value;
    }
    resetBody() {
        this._body.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get bodyInput() {
        return this._body.internalValue;
    }
    // method - computed: false, optional: true, required: false
    _method = new Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodOutputReference(this, "method", true);
    get method() {
        return this._method;
    }
    putMethod(value) {
        this._method.internalValue = value;
    }
    resetMethod() {
        this._method.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get methodInput() {
        return this._method.internalValue;
    }
    // query_string - computed: false, optional: true, required: false
    _queryString = new Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringOutputReference(this, "query_string", true);
    get queryString() {
        return this._queryString;
    }
    putQueryString(value) {
        this._queryString.internalValue = value;
    }
    resetQueryString() {
        this._queryString.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get queryStringInput() {
        return this._queryString.internalValue;
    }
    // single_header - computed: false, optional: true, required: false
    _singleHeader = new Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderOutputReference(this, "single_header", true);
    get singleHeader() {
        return this._singleHeader;
    }
    putSingleHeader(value) {
        this._singleHeader.internalValue = value;
    }
    resetSingleHeader() {
        this._singleHeader.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get singleHeaderInput() {
        return this._singleHeader.internalValue;
    }
    // single_query_argument - computed: false, optional: true, required: false
    _singleQueryArgument = new Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentOutputReference(this, "single_query_argument", true);
    get singleQueryArgument() {
        return this._singleQueryArgument;
    }
    putSingleQueryArgument(value) {
        this._singleQueryArgument.internalValue = value;
    }
    resetSingleQueryArgument() {
        this._singleQueryArgument.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get singleQueryArgumentInput() {
        return this._singleQueryArgument.internalValue;
    }
    // uri_path - computed: false, optional: true, required: false
    _uriPath = new Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathOutputReference(this, "uri_path", true);
    get uriPath() {
        return this._uriPath;
    }
    putUriPath(value) {
        this._uriPath.internalValue = value;
    }
    resetUriPath() {
        this._uriPath.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get uriPathInput() {
        return this._uriPath.internalValue;
    }
}
export function wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementTextTransformationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        priority: cdktf.numberToTerraform(struct.priority),
        type: cdktf.stringToTerraform(struct.type),
    };
}
export function wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        arn: cdktf.stringToTerraform(struct.arn),
        field_to_match: wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchToTerraform(struct.fieldToMatch),
        text_transformation: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementTextTransformationToTerraform)(struct.textTransformation),
    };
}
export class Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._arn) {
            hasAnyValues = true;
            internalValueResult.arn = this._arn;
        }
        if (this._fieldToMatch?.internalValue) {
            hasAnyValues = true;
            internalValueResult.fieldToMatch = this._fieldToMatch?.internalValue;
        }
        if (this._textTransformation) {
            hasAnyValues = true;
            internalValueResult.textTransformation = this._textTransformation;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._arn = undefined;
            this._fieldToMatch.internalValue = undefined;
            this._textTransformation = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._arn = value.arn;
            this._fieldToMatch.internalValue = value.fieldToMatch;
            this._textTransformation = value.textTransformation;
        }
    }
    // arn - computed: false, optional: false, required: true
    _arn;
    get arn() {
        return this.getStringAttribute('arn');
    }
    set arn(value) {
        this._arn = value;
    }
    // Temporarily expose input value. Use with caution.
    get arnInput() {
        return this._arn;
    }
    // field_to_match - computed: false, optional: true, required: false
    _fieldToMatch = new Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchOutputReference(this, "field_to_match", true);
    get fieldToMatch() {
        return this._fieldToMatch;
    }
    putFieldToMatch(value) {
        this._fieldToMatch.internalValue = value;
    }
    resetFieldToMatch() {
        this._fieldToMatch.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get fieldToMatchInput() {
        return this._fieldToMatch.internalValue;
    }
    // text_transformation - computed: false, optional: false, required: true
    _textTransformation;
    get textTransformation() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('text_transformation');
    }
    set textTransformation(value) {
        this._textTransformation = value;
    }
    // Temporarily expose input value. Use with caution.
    get textTransformationInput() {
        return this._textTransformation;
    }
}
export function wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchBodyToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchMethodToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchQueryStringToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
    };
}
export class Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._name) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._name = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._name = value.name;
        }
    }
    // name - computed: false, optional: false, required: true
    _name;
    get name() {
        return this.getStringAttribute('name');
    }
    set name(value) {
        this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    get nameInput() {
        return this._name;
    }
}
export function wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
    };
}
export class Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._name) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._name = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._name = value.name;
        }
    }
    // name - computed: false, optional: false, required: true
    _name;
    get name() {
        return this.getStringAttribute('name');
    }
    set name(value) {
        this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    get nameInput() {
        return this._name;
    }
}
export function wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchUriPathToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        all_query_arguments: wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsToTerraform(struct.allQueryArguments),
        body: wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchBodyToTerraform(struct.body),
        method: wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchMethodToTerraform(struct.method),
        query_string: wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchQueryStringToTerraform(struct.queryString),
        single_header: wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderToTerraform(struct.singleHeader),
        single_query_argument: wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentToTerraform(struct.singleQueryArgument),
        uri_path: wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchUriPathToTerraform(struct.uriPath),
    };
}
export class Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._allQueryArguments?.internalValue) {
            hasAnyValues = true;
            internalValueResult.allQueryArguments = this._allQueryArguments?.internalValue;
        }
        if (this._body?.internalValue) {
            hasAnyValues = true;
            internalValueResult.body = this._body?.internalValue;
        }
        if (this._method?.internalValue) {
            hasAnyValues = true;
            internalValueResult.method = this._method?.internalValue;
        }
        if (this._queryString?.internalValue) {
            hasAnyValues = true;
            internalValueResult.queryString = this._queryString?.internalValue;
        }
        if (this._singleHeader?.internalValue) {
            hasAnyValues = true;
            internalValueResult.singleHeader = this._singleHeader?.internalValue;
        }
        if (this._singleQueryArgument?.internalValue) {
            hasAnyValues = true;
            internalValueResult.singleQueryArgument = this._singleQueryArgument?.internalValue;
        }
        if (this._uriPath?.internalValue) {
            hasAnyValues = true;
            internalValueResult.uriPath = this._uriPath?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._allQueryArguments.internalValue = undefined;
            this._body.internalValue = undefined;
            this._method.internalValue = undefined;
            this._queryString.internalValue = undefined;
            this._singleHeader.internalValue = undefined;
            this._singleQueryArgument.internalValue = undefined;
            this._uriPath.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._allQueryArguments.internalValue = value.allQueryArguments;
            this._body.internalValue = value.body;
            this._method.internalValue = value.method;
            this._queryString.internalValue = value.queryString;
            this._singleHeader.internalValue = value.singleHeader;
            this._singleQueryArgument.internalValue = value.singleQueryArgument;
            this._uriPath.internalValue = value.uriPath;
        }
    }
    // all_query_arguments - computed: false, optional: true, required: false
    _allQueryArguments = new Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsOutputReference(this, "all_query_arguments", true);
    get allQueryArguments() {
        return this._allQueryArguments;
    }
    putAllQueryArguments(value) {
        this._allQueryArguments.internalValue = value;
    }
    resetAllQueryArguments() {
        this._allQueryArguments.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get allQueryArgumentsInput() {
        return this._allQueryArguments.internalValue;
    }
    // body - computed: false, optional: true, required: false
    _body = new Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchBodyOutputReference(this, "body", true);
    get body() {
        return this._body;
    }
    putBody(value) {
        this._body.internalValue = value;
    }
    resetBody() {
        this._body.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get bodyInput() {
        return this._body.internalValue;
    }
    // method - computed: false, optional: true, required: false
    _method = new Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchMethodOutputReference(this, "method", true);
    get method() {
        return this._method;
    }
    putMethod(value) {
        this._method.internalValue = value;
    }
    resetMethod() {
        this._method.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get methodInput() {
        return this._method.internalValue;
    }
    // query_string - computed: false, optional: true, required: false
    _queryString = new Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchQueryStringOutputReference(this, "query_string", true);
    get queryString() {
        return this._queryString;
    }
    putQueryString(value) {
        this._queryString.internalValue = value;
    }
    resetQueryString() {
        this._queryString.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get queryStringInput() {
        return this._queryString.internalValue;
    }
    // single_header - computed: false, optional: true, required: false
    _singleHeader = new Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderOutputReference(this, "single_header", true);
    get singleHeader() {
        return this._singleHeader;
    }
    putSingleHeader(value) {
        this._singleHeader.internalValue = value;
    }
    resetSingleHeader() {
        this._singleHeader.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get singleHeaderInput() {
        return this._singleHeader.internalValue;
    }
    // single_query_argument - computed: false, optional: true, required: false
    _singleQueryArgument = new Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentOutputReference(this, "single_query_argument", true);
    get singleQueryArgument() {
        return this._singleQueryArgument;
    }
    putSingleQueryArgument(value) {
        this._singleQueryArgument.internalValue = value;
    }
    resetSingleQueryArgument() {
        this._singleQueryArgument.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get singleQueryArgumentInput() {
        return this._singleQueryArgument.internalValue;
    }
    // uri_path - computed: false, optional: true, required: false
    _uriPath = new Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchUriPathOutputReference(this, "uri_path", true);
    get uriPath() {
        return this._uriPath;
    }
    putUriPath(value) {
        this._uriPath.internalValue = value;
    }
    resetUriPath() {
        this._uriPath.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get uriPathInput() {
        return this._uriPath.internalValue;
    }
}
export function wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSizeConstraintStatementTextTransformationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        priority: cdktf.numberToTerraform(struct.priority),
        type: cdktf.stringToTerraform(struct.type),
    };
}
export function wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSizeConstraintStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        comparison_operator: cdktf.stringToTerraform(struct.comparisonOperator),
        size: cdktf.numberToTerraform(struct.size),
        field_to_match: wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchToTerraform(struct.fieldToMatch),
        text_transformation: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSizeConstraintStatementTextTransformationToTerraform)(struct.textTransformation),
    };
}
export class Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSizeConstraintStatementOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._comparisonOperator) {
            hasAnyValues = true;
            internalValueResult.comparisonOperator = this._comparisonOperator;
        }
        if (this._size) {
            hasAnyValues = true;
            internalValueResult.size = this._size;
        }
        if (this._fieldToMatch?.internalValue) {
            hasAnyValues = true;
            internalValueResult.fieldToMatch = this._fieldToMatch?.internalValue;
        }
        if (this._textTransformation) {
            hasAnyValues = true;
            internalValueResult.textTransformation = this._textTransformation;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._comparisonOperator = undefined;
            this._size = undefined;
            this._fieldToMatch.internalValue = undefined;
            this._textTransformation = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._comparisonOperator = value.comparisonOperator;
            this._size = value.size;
            this._fieldToMatch.internalValue = value.fieldToMatch;
            this._textTransformation = value.textTransformation;
        }
    }
    // comparison_operator - computed: false, optional: false, required: true
    _comparisonOperator;
    get comparisonOperator() {
        return this.getStringAttribute('comparison_operator');
    }
    set comparisonOperator(value) {
        this._comparisonOperator = value;
    }
    // Temporarily expose input value. Use with caution.
    get comparisonOperatorInput() {
        return this._comparisonOperator;
    }
    // size - computed: false, optional: false, required: true
    _size;
    get size() {
        return this.getNumberAttribute('size');
    }
    set size(value) {
        this._size = value;
    }
    // Temporarily expose input value. Use with caution.
    get sizeInput() {
        return this._size;
    }
    // field_to_match - computed: false, optional: true, required: false
    _fieldToMatch = new Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchOutputReference(this, "field_to_match", true);
    get fieldToMatch() {
        return this._fieldToMatch;
    }
    putFieldToMatch(value) {
        this._fieldToMatch.internalValue = value;
    }
    resetFieldToMatch() {
        this._fieldToMatch.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get fieldToMatchInput() {
        return this._fieldToMatch.internalValue;
    }
    // text_transformation - computed: false, optional: false, required: true
    _textTransformation;
    get textTransformation() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('text_transformation');
    }
    set textTransformation(value) {
        this._textTransformation = value;
    }
    // Temporarily expose input value. Use with caution.
    get textTransformationInput() {
        return this._textTransformation;
    }
}
export function wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchBodyToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchMethodToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchQueryStringToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleHeaderToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
    };
}
export class Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._name) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._name = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._name = value.name;
        }
    }
    // name - computed: false, optional: false, required: true
    _name;
    get name() {
        return this.getStringAttribute('name');
    }
    set name(value) {
        this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    get nameInput() {
        return this._name;
    }
}
export function wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
    };
}
export class Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._name) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._name = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._name = value.name;
        }
    }
    // name - computed: false, optional: false, required: true
    _name;
    get name() {
        return this.getStringAttribute('name');
    }
    set name(value) {
        this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    get nameInput() {
        return this._name;
    }
}
export function wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchUriPathToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        all_query_arguments: wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct.allQueryArguments),
        body: wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchBodyToTerraform(struct.body),
        method: wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchMethodToTerraform(struct.method),
        query_string: wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchQueryStringToTerraform(struct.queryString),
        single_header: wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleHeaderToTerraform(struct.singleHeader),
        single_query_argument: wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct.singleQueryArgument),
        uri_path: wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchUriPathToTerraform(struct.uriPath),
    };
}
export class Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._allQueryArguments?.internalValue) {
            hasAnyValues = true;
            internalValueResult.allQueryArguments = this._allQueryArguments?.internalValue;
        }
        if (this._body?.internalValue) {
            hasAnyValues = true;
            internalValueResult.body = this._body?.internalValue;
        }
        if (this._method?.internalValue) {
            hasAnyValues = true;
            internalValueResult.method = this._method?.internalValue;
        }
        if (this._queryString?.internalValue) {
            hasAnyValues = true;
            internalValueResult.queryString = this._queryString?.internalValue;
        }
        if (this._singleHeader?.internalValue) {
            hasAnyValues = true;
            internalValueResult.singleHeader = this._singleHeader?.internalValue;
        }
        if (this._singleQueryArgument?.internalValue) {
            hasAnyValues = true;
            internalValueResult.singleQueryArgument = this._singleQueryArgument?.internalValue;
        }
        if (this._uriPath?.internalValue) {
            hasAnyValues = true;
            internalValueResult.uriPath = this._uriPath?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._allQueryArguments.internalValue = undefined;
            this._body.internalValue = undefined;
            this._method.internalValue = undefined;
            this._queryString.internalValue = undefined;
            this._singleHeader.internalValue = undefined;
            this._singleQueryArgument.internalValue = undefined;
            this._uriPath.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._allQueryArguments.internalValue = value.allQueryArguments;
            this._body.internalValue = value.body;
            this._method.internalValue = value.method;
            this._queryString.internalValue = value.queryString;
            this._singleHeader.internalValue = value.singleHeader;
            this._singleQueryArgument.internalValue = value.singleQueryArgument;
            this._uriPath.internalValue = value.uriPath;
        }
    }
    // all_query_arguments - computed: false, optional: true, required: false
    _allQueryArguments = new Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsOutputReference(this, "all_query_arguments", true);
    get allQueryArguments() {
        return this._allQueryArguments;
    }
    putAllQueryArguments(value) {
        this._allQueryArguments.internalValue = value;
    }
    resetAllQueryArguments() {
        this._allQueryArguments.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get allQueryArgumentsInput() {
        return this._allQueryArguments.internalValue;
    }
    // body - computed: false, optional: true, required: false
    _body = new Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchBodyOutputReference(this, "body", true);
    get body() {
        return this._body;
    }
    putBody(value) {
        this._body.internalValue = value;
    }
    resetBody() {
        this._body.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get bodyInput() {
        return this._body.internalValue;
    }
    // method - computed: false, optional: true, required: false
    _method = new Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchMethodOutputReference(this, "method", true);
    get method() {
        return this._method;
    }
    putMethod(value) {
        this._method.internalValue = value;
    }
    resetMethod() {
        this._method.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get methodInput() {
        return this._method.internalValue;
    }
    // query_string - computed: false, optional: true, required: false
    _queryString = new Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchQueryStringOutputReference(this, "query_string", true);
    get queryString() {
        return this._queryString;
    }
    putQueryString(value) {
        this._queryString.internalValue = value;
    }
    resetQueryString() {
        this._queryString.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get queryStringInput() {
        return this._queryString.internalValue;
    }
    // single_header - computed: false, optional: true, required: false
    _singleHeader = new Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleHeaderOutputReference(this, "single_header", true);
    get singleHeader() {
        return this._singleHeader;
    }
    putSingleHeader(value) {
        this._singleHeader.internalValue = value;
    }
    resetSingleHeader() {
        this._singleHeader.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get singleHeaderInput() {
        return this._singleHeader.internalValue;
    }
    // single_query_argument - computed: false, optional: true, required: false
    _singleQueryArgument = new Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentOutputReference(this, "single_query_argument", true);
    get singleQueryArgument() {
        return this._singleQueryArgument;
    }
    putSingleQueryArgument(value) {
        this._singleQueryArgument.internalValue = value;
    }
    resetSingleQueryArgument() {
        this._singleQueryArgument.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get singleQueryArgumentInput() {
        return this._singleQueryArgument.internalValue;
    }
    // uri_path - computed: false, optional: true, required: false
    _uriPath = new Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchUriPathOutputReference(this, "uri_path", true);
    get uriPath() {
        return this._uriPath;
    }
    putUriPath(value) {
        this._uriPath.internalValue = value;
    }
    resetUriPath() {
        this._uriPath.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get uriPathInput() {
        return this._uriPath.internalValue;
    }
}
export function wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSqliMatchStatementTextTransformationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        priority: cdktf.numberToTerraform(struct.priority),
        type: cdktf.stringToTerraform(struct.type),
    };
}
export function wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSqliMatchStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        field_to_match: wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchToTerraform(struct.fieldToMatch),
        text_transformation: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSqliMatchStatementTextTransformationToTerraform)(struct.textTransformation),
    };
}
export class Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSqliMatchStatementOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._fieldToMatch?.internalValue) {
            hasAnyValues = true;
            internalValueResult.fieldToMatch = this._fieldToMatch?.internalValue;
        }
        if (this._textTransformation) {
            hasAnyValues = true;
            internalValueResult.textTransformation = this._textTransformation;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._fieldToMatch.internalValue = undefined;
            this._textTransformation = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._fieldToMatch.internalValue = value.fieldToMatch;
            this._textTransformation = value.textTransformation;
        }
    }
    // field_to_match - computed: false, optional: true, required: false
    _fieldToMatch = new Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchOutputReference(this, "field_to_match", true);
    get fieldToMatch() {
        return this._fieldToMatch;
    }
    putFieldToMatch(value) {
        this._fieldToMatch.internalValue = value;
    }
    resetFieldToMatch() {
        this._fieldToMatch.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get fieldToMatchInput() {
        return this._fieldToMatch.internalValue;
    }
    // text_transformation - computed: false, optional: false, required: true
    _textTransformation;
    get textTransformation() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('text_transformation');
    }
    set textTransformation(value) {
        this._textTransformation = value;
    }
    // Temporarily expose input value. Use with caution.
    get textTransformationInput() {
        return this._textTransformation;
    }
}
export function wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchBodyToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchMethodToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchQueryStringToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleHeaderToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
    };
}
export class Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._name) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._name = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._name = value.name;
        }
    }
    // name - computed: false, optional: false, required: true
    _name;
    get name() {
        return this.getStringAttribute('name');
    }
    set name(value) {
        this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    get nameInput() {
        return this._name;
    }
}
export function wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
    };
}
export class Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._name) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._name = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._name = value.name;
        }
    }
    // name - computed: false, optional: false, required: true
    _name;
    get name() {
        return this.getStringAttribute('name');
    }
    set name(value) {
        this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    get nameInput() {
        return this._name;
    }
}
export function wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchUriPathToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        all_query_arguments: wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct.allQueryArguments),
        body: wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchBodyToTerraform(struct.body),
        method: wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchMethodToTerraform(struct.method),
        query_string: wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchQueryStringToTerraform(struct.queryString),
        single_header: wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleHeaderToTerraform(struct.singleHeader),
        single_query_argument: wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct.singleQueryArgument),
        uri_path: wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchUriPathToTerraform(struct.uriPath),
    };
}
export class Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._allQueryArguments?.internalValue) {
            hasAnyValues = true;
            internalValueResult.allQueryArguments = this._allQueryArguments?.internalValue;
        }
        if (this._body?.internalValue) {
            hasAnyValues = true;
            internalValueResult.body = this._body?.internalValue;
        }
        if (this._method?.internalValue) {
            hasAnyValues = true;
            internalValueResult.method = this._method?.internalValue;
        }
        if (this._queryString?.internalValue) {
            hasAnyValues = true;
            internalValueResult.queryString = this._queryString?.internalValue;
        }
        if (this._singleHeader?.internalValue) {
            hasAnyValues = true;
            internalValueResult.singleHeader = this._singleHeader?.internalValue;
        }
        if (this._singleQueryArgument?.internalValue) {
            hasAnyValues = true;
            internalValueResult.singleQueryArgument = this._singleQueryArgument?.internalValue;
        }
        if (this._uriPath?.internalValue) {
            hasAnyValues = true;
            internalValueResult.uriPath = this._uriPath?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._allQueryArguments.internalValue = undefined;
            this._body.internalValue = undefined;
            this._method.internalValue = undefined;
            this._queryString.internalValue = undefined;
            this._singleHeader.internalValue = undefined;
            this._singleQueryArgument.internalValue = undefined;
            this._uriPath.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._allQueryArguments.internalValue = value.allQueryArguments;
            this._body.internalValue = value.body;
            this._method.internalValue = value.method;
            this._queryString.internalValue = value.queryString;
            this._singleHeader.internalValue = value.singleHeader;
            this._singleQueryArgument.internalValue = value.singleQueryArgument;
            this._uriPath.internalValue = value.uriPath;
        }
    }
    // all_query_arguments - computed: false, optional: true, required: false
    _allQueryArguments = new Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsOutputReference(this, "all_query_arguments", true);
    get allQueryArguments() {
        return this._allQueryArguments;
    }
    putAllQueryArguments(value) {
        this._allQueryArguments.internalValue = value;
    }
    resetAllQueryArguments() {
        this._allQueryArguments.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get allQueryArgumentsInput() {
        return this._allQueryArguments.internalValue;
    }
    // body - computed: false, optional: true, required: false
    _body = new Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchBodyOutputReference(this, "body", true);
    get body() {
        return this._body;
    }
    putBody(value) {
        this._body.internalValue = value;
    }
    resetBody() {
        this._body.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get bodyInput() {
        return this._body.internalValue;
    }
    // method - computed: false, optional: true, required: false
    _method = new Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchMethodOutputReference(this, "method", true);
    get method() {
        return this._method;
    }
    putMethod(value) {
        this._method.internalValue = value;
    }
    resetMethod() {
        this._method.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get methodInput() {
        return this._method.internalValue;
    }
    // query_string - computed: false, optional: true, required: false
    _queryString = new Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchQueryStringOutputReference(this, "query_string", true);
    get queryString() {
        return this._queryString;
    }
    putQueryString(value) {
        this._queryString.internalValue = value;
    }
    resetQueryString() {
        this._queryString.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get queryStringInput() {
        return this._queryString.internalValue;
    }
    // single_header - computed: false, optional: true, required: false
    _singleHeader = new Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleHeaderOutputReference(this, "single_header", true);
    get singleHeader() {
        return this._singleHeader;
    }
    putSingleHeader(value) {
        this._singleHeader.internalValue = value;
    }
    resetSingleHeader() {
        this._singleHeader.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get singleHeaderInput() {
        return this._singleHeader.internalValue;
    }
    // single_query_argument - computed: false, optional: true, required: false
    _singleQueryArgument = new Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentOutputReference(this, "single_query_argument", true);
    get singleQueryArgument() {
        return this._singleQueryArgument;
    }
    putSingleQueryArgument(value) {
        this._singleQueryArgument.internalValue = value;
    }
    resetSingleQueryArgument() {
        this._singleQueryArgument.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get singleQueryArgumentInput() {
        return this._singleQueryArgument.internalValue;
    }
    // uri_path - computed: false, optional: true, required: false
    _uriPath = new Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchUriPathOutputReference(this, "uri_path", true);
    get uriPath() {
        return this._uriPath;
    }
    putUriPath(value) {
        this._uriPath.internalValue = value;
    }
    resetUriPath() {
        this._uriPath.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get uriPathInput() {
        return this._uriPath.internalValue;
    }
}
export function wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementXssMatchStatementTextTransformationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        priority: cdktf.numberToTerraform(struct.priority),
        type: cdktf.stringToTerraform(struct.type),
    };
}
export function wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementXssMatchStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        field_to_match: wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchToTerraform(struct.fieldToMatch),
        text_transformation: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementXssMatchStatementTextTransformationToTerraform)(struct.textTransformation),
    };
}
export class Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementXssMatchStatementOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._fieldToMatch?.internalValue) {
            hasAnyValues = true;
            internalValueResult.fieldToMatch = this._fieldToMatch?.internalValue;
        }
        if (this._textTransformation) {
            hasAnyValues = true;
            internalValueResult.textTransformation = this._textTransformation;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._fieldToMatch.internalValue = undefined;
            this._textTransformation = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._fieldToMatch.internalValue = value.fieldToMatch;
            this._textTransformation = value.textTransformation;
        }
    }
    // field_to_match - computed: false, optional: true, required: false
    _fieldToMatch = new Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchOutputReference(this, "field_to_match", true);
    get fieldToMatch() {
        return this._fieldToMatch;
    }
    putFieldToMatch(value) {
        this._fieldToMatch.internalValue = value;
    }
    resetFieldToMatch() {
        this._fieldToMatch.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get fieldToMatchInput() {
        return this._fieldToMatch.internalValue;
    }
    // text_transformation - computed: false, optional: false, required: true
    _textTransformation;
    get textTransformation() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('text_transformation');
    }
    set textTransformation(value) {
        this._textTransformation = value;
    }
    // Temporarily expose input value. Use with caution.
    get textTransformationInput() {
        return this._textTransformation;
    }
}
export function wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        byte_match_statement: wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementByteMatchStatementToTerraform(struct.byteMatchStatement),
        geo_match_statement: wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementGeoMatchStatementToTerraform(struct.geoMatchStatement),
        ip_set_reference_statement: wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementIpSetReferenceStatementToTerraform(struct.ipSetReferenceStatement),
        label_match_statement: wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementLabelMatchStatementToTerraform(struct.labelMatchStatement),
        regex_pattern_set_reference_statement: wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementToTerraform(struct.regexPatternSetReferenceStatement),
        size_constraint_statement: wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSizeConstraintStatementToTerraform(struct.sizeConstraintStatement),
        sqli_match_statement: wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSqliMatchStatementToTerraform(struct.sqliMatchStatement),
        xss_match_statement: wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementXssMatchStatementToTerraform(struct.xssMatchStatement),
    };
}
export function wafv2RuleGroupRuleStatementAndStatementStatementOrStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        statement: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementToTerraform)(struct.statement),
    };
}
export class Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._statement) {
            hasAnyValues = true;
            internalValueResult.statement = this._statement;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._statement = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._statement = value.statement;
        }
    }
    // statement - computed: false, optional: false, required: true
    _statement;
    get statement() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('statement');
    }
    set statement(value) {
        this._statement = value;
    }
    // Temporarily expose input value. Use with caution.
    get statementInput() {
        return this._statement;
    }
}
export function wafv2RuleGroupRuleStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
    };
}
export class Wafv2RuleGroupRuleStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._name) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._name = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._name = value.name;
        }
    }
    // name - computed: false, optional: false, required: true
    _name;
    get name() {
        return this.getStringAttribute('name');
    }
    set name(value) {
        this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    get nameInput() {
        return this._name;
    }
}
export function wafv2RuleGroupRuleStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
    };
}
export class Wafv2RuleGroupRuleStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._name) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._name = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._name = value.name;
        }
    }
    // name - computed: false, optional: false, required: true
    _name;
    get name() {
        return this.getStringAttribute('name');
    }
    set name(value) {
        this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    get nameInput() {
        return this._name;
    }
}
export function wafv2RuleGroupRuleStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        all_query_arguments: wafv2RuleGroupRuleStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsToTerraform(struct.allQueryArguments),
        body: wafv2RuleGroupRuleStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyToTerraform(struct.body),
        method: wafv2RuleGroupRuleStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodToTerraform(struct.method),
        query_string: wafv2RuleGroupRuleStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringToTerraform(struct.queryString),
        single_header: wafv2RuleGroupRuleStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderToTerraform(struct.singleHeader),
        single_query_argument: wafv2RuleGroupRuleStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentToTerraform(struct.singleQueryArgument),
        uri_path: wafv2RuleGroupRuleStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathToTerraform(struct.uriPath),
    };
}
export class Wafv2RuleGroupRuleStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._allQueryArguments?.internalValue) {
            hasAnyValues = true;
            internalValueResult.allQueryArguments = this._allQueryArguments?.internalValue;
        }
        if (this._body?.internalValue) {
            hasAnyValues = true;
            internalValueResult.body = this._body?.internalValue;
        }
        if (this._method?.internalValue) {
            hasAnyValues = true;
            internalValueResult.method = this._method?.internalValue;
        }
        if (this._queryString?.internalValue) {
            hasAnyValues = true;
            internalValueResult.queryString = this._queryString?.internalValue;
        }
        if (this._singleHeader?.internalValue) {
            hasAnyValues = true;
            internalValueResult.singleHeader = this._singleHeader?.internalValue;
        }
        if (this._singleQueryArgument?.internalValue) {
            hasAnyValues = true;
            internalValueResult.singleQueryArgument = this._singleQueryArgument?.internalValue;
        }
        if (this._uriPath?.internalValue) {
            hasAnyValues = true;
            internalValueResult.uriPath = this._uriPath?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._allQueryArguments.internalValue = undefined;
            this._body.internalValue = undefined;
            this._method.internalValue = undefined;
            this._queryString.internalValue = undefined;
            this._singleHeader.internalValue = undefined;
            this._singleQueryArgument.internalValue = undefined;
            this._uriPath.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._allQueryArguments.internalValue = value.allQueryArguments;
            this._body.internalValue = value.body;
            this._method.internalValue = value.method;
            this._queryString.internalValue = value.queryString;
            this._singleHeader.internalValue = value.singleHeader;
            this._singleQueryArgument.internalValue = value.singleQueryArgument;
            this._uriPath.internalValue = value.uriPath;
        }
    }
    // all_query_arguments - computed: false, optional: true, required: false
    _allQueryArguments = new Wafv2RuleGroupRuleStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsOutputReference(this, "all_query_arguments", true);
    get allQueryArguments() {
        return this._allQueryArguments;
    }
    putAllQueryArguments(value) {
        this._allQueryArguments.internalValue = value;
    }
    resetAllQueryArguments() {
        this._allQueryArguments.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get allQueryArgumentsInput() {
        return this._allQueryArguments.internalValue;
    }
    // body - computed: false, optional: true, required: false
    _body = new Wafv2RuleGroupRuleStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyOutputReference(this, "body", true);
    get body() {
        return this._body;
    }
    putBody(value) {
        this._body.internalValue = value;
    }
    resetBody() {
        this._body.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get bodyInput() {
        return this._body.internalValue;
    }
    // method - computed: false, optional: true, required: false
    _method = new Wafv2RuleGroupRuleStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodOutputReference(this, "method", true);
    get method() {
        return this._method;
    }
    putMethod(value) {
        this._method.internalValue = value;
    }
    resetMethod() {
        this._method.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get methodInput() {
        return this._method.internalValue;
    }
    // query_string - computed: false, optional: true, required: false
    _queryString = new Wafv2RuleGroupRuleStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringOutputReference(this, "query_string", true);
    get queryString() {
        return this._queryString;
    }
    putQueryString(value) {
        this._queryString.internalValue = value;
    }
    resetQueryString() {
        this._queryString.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get queryStringInput() {
        return this._queryString.internalValue;
    }
    // single_header - computed: false, optional: true, required: false
    _singleHeader = new Wafv2RuleGroupRuleStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderOutputReference(this, "single_header", true);
    get singleHeader() {
        return this._singleHeader;
    }
    putSingleHeader(value) {
        this._singleHeader.internalValue = value;
    }
    resetSingleHeader() {
        this._singleHeader.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get singleHeaderInput() {
        return this._singleHeader.internalValue;
    }
    // single_query_argument - computed: false, optional: true, required: false
    _singleQueryArgument = new Wafv2RuleGroupRuleStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentOutputReference(this, "single_query_argument", true);
    get singleQueryArgument() {
        return this._singleQueryArgument;
    }
    putSingleQueryArgument(value) {
        this._singleQueryArgument.internalValue = value;
    }
    resetSingleQueryArgument() {
        this._singleQueryArgument.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get singleQueryArgumentInput() {
        return this._singleQueryArgument.internalValue;
    }
    // uri_path - computed: false, optional: true, required: false
    _uriPath = new Wafv2RuleGroupRuleStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathOutputReference(this, "uri_path", true);
    get uriPath() {
        return this._uriPath;
    }
    putUriPath(value) {
        this._uriPath.internalValue = value;
    }
    resetUriPath() {
        this._uriPath.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get uriPathInput() {
        return this._uriPath.internalValue;
    }
}
export function wafv2RuleGroupRuleStatementAndStatementStatementRegexPatternSetReferenceStatementTextTransformationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        priority: cdktf.numberToTerraform(struct.priority),
        type: cdktf.stringToTerraform(struct.type),
    };
}
export function wafv2RuleGroupRuleStatementAndStatementStatementRegexPatternSetReferenceStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        arn: cdktf.stringToTerraform(struct.arn),
        field_to_match: wafv2RuleGroupRuleStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchToTerraform(struct.fieldToMatch),
        text_transformation: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementRegexPatternSetReferenceStatementTextTransformationToTerraform)(struct.textTransformation),
    };
}
export class Wafv2RuleGroupRuleStatementAndStatementStatementRegexPatternSetReferenceStatementOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._arn) {
            hasAnyValues = true;
            internalValueResult.arn = this._arn;
        }
        if (this._fieldToMatch?.internalValue) {
            hasAnyValues = true;
            internalValueResult.fieldToMatch = this._fieldToMatch?.internalValue;
        }
        if (this._textTransformation) {
            hasAnyValues = true;
            internalValueResult.textTransformation = this._textTransformation;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._arn = undefined;
            this._fieldToMatch.internalValue = undefined;
            this._textTransformation = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._arn = value.arn;
            this._fieldToMatch.internalValue = value.fieldToMatch;
            this._textTransformation = value.textTransformation;
        }
    }
    // arn - computed: false, optional: false, required: true
    _arn;
    get arn() {
        return this.getStringAttribute('arn');
    }
    set arn(value) {
        this._arn = value;
    }
    // Temporarily expose input value. Use with caution.
    get arnInput() {
        return this._arn;
    }
    // field_to_match - computed: false, optional: true, required: false
    _fieldToMatch = new Wafv2RuleGroupRuleStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchOutputReference(this, "field_to_match", true);
    get fieldToMatch() {
        return this._fieldToMatch;
    }
    putFieldToMatch(value) {
        this._fieldToMatch.internalValue = value;
    }
    resetFieldToMatch() {
        this._fieldToMatch.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get fieldToMatchInput() {
        return this._fieldToMatch.internalValue;
    }
    // text_transformation - computed: false, optional: false, required: true
    _textTransformation;
    get textTransformation() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('text_transformation');
    }
    set textTransformation(value) {
        this._textTransformation = value;
    }
    // Temporarily expose input value. Use with caution.
    get textTransformationInput() {
        return this._textTransformation;
    }
}
export function wafv2RuleGroupRuleStatementAndStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementAndStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementAndStatementStatementSizeConstraintStatementFieldToMatchBodyToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementAndStatementStatementSizeConstraintStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementAndStatementStatementSizeConstraintStatementFieldToMatchMethodToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementAndStatementStatementSizeConstraintStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementAndStatementStatementSizeConstraintStatementFieldToMatchQueryStringToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementAndStatementStatementSizeConstraintStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
    };
}
export class Wafv2RuleGroupRuleStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._name) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._name = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._name = value.name;
        }
    }
    // name - computed: false, optional: false, required: true
    _name;
    get name() {
        return this.getStringAttribute('name');
    }
    set name(value) {
        this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    get nameInput() {
        return this._name;
    }
}
export function wafv2RuleGroupRuleStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
    };
}
export class Wafv2RuleGroupRuleStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._name) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._name = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._name = value.name;
        }
    }
    // name - computed: false, optional: false, required: true
    _name;
    get name() {
        return this.getStringAttribute('name');
    }
    set name(value) {
        this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    get nameInput() {
        return this._name;
    }
}
export function wafv2RuleGroupRuleStatementAndStatementStatementSizeConstraintStatementFieldToMatchUriPathToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementAndStatementStatementSizeConstraintStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementAndStatementStatementSizeConstraintStatementFieldToMatchToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        all_query_arguments: wafv2RuleGroupRuleStatementAndStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsToTerraform(struct.allQueryArguments),
        body: wafv2RuleGroupRuleStatementAndStatementStatementSizeConstraintStatementFieldToMatchBodyToTerraform(struct.body),
        method: wafv2RuleGroupRuleStatementAndStatementStatementSizeConstraintStatementFieldToMatchMethodToTerraform(struct.method),
        query_string: wafv2RuleGroupRuleStatementAndStatementStatementSizeConstraintStatementFieldToMatchQueryStringToTerraform(struct.queryString),
        single_header: wafv2RuleGroupRuleStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderToTerraform(struct.singleHeader),
        single_query_argument: wafv2RuleGroupRuleStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentToTerraform(struct.singleQueryArgument),
        uri_path: wafv2RuleGroupRuleStatementAndStatementStatementSizeConstraintStatementFieldToMatchUriPathToTerraform(struct.uriPath),
    };
}
export class Wafv2RuleGroupRuleStatementAndStatementStatementSizeConstraintStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._allQueryArguments?.internalValue) {
            hasAnyValues = true;
            internalValueResult.allQueryArguments = this._allQueryArguments?.internalValue;
        }
        if (this._body?.internalValue) {
            hasAnyValues = true;
            internalValueResult.body = this._body?.internalValue;
        }
        if (this._method?.internalValue) {
            hasAnyValues = true;
            internalValueResult.method = this._method?.internalValue;
        }
        if (this._queryString?.internalValue) {
            hasAnyValues = true;
            internalValueResult.queryString = this._queryString?.internalValue;
        }
        if (this._singleHeader?.internalValue) {
            hasAnyValues = true;
            internalValueResult.singleHeader = this._singleHeader?.internalValue;
        }
        if (this._singleQueryArgument?.internalValue) {
            hasAnyValues = true;
            internalValueResult.singleQueryArgument = this._singleQueryArgument?.internalValue;
        }
        if (this._uriPath?.internalValue) {
            hasAnyValues = true;
            internalValueResult.uriPath = this._uriPath?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._allQueryArguments.internalValue = undefined;
            this._body.internalValue = undefined;
            this._method.internalValue = undefined;
            this._queryString.internalValue = undefined;
            this._singleHeader.internalValue = undefined;
            this._singleQueryArgument.internalValue = undefined;
            this._uriPath.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._allQueryArguments.internalValue = value.allQueryArguments;
            this._body.internalValue = value.body;
            this._method.internalValue = value.method;
            this._queryString.internalValue = value.queryString;
            this._singleHeader.internalValue = value.singleHeader;
            this._singleQueryArgument.internalValue = value.singleQueryArgument;
            this._uriPath.internalValue = value.uriPath;
        }
    }
    // all_query_arguments - computed: false, optional: true, required: false
    _allQueryArguments = new Wafv2RuleGroupRuleStatementAndStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsOutputReference(this, "all_query_arguments", true);
    get allQueryArguments() {
        return this._allQueryArguments;
    }
    putAllQueryArguments(value) {
        this._allQueryArguments.internalValue = value;
    }
    resetAllQueryArguments() {
        this._allQueryArguments.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get allQueryArgumentsInput() {
        return this._allQueryArguments.internalValue;
    }
    // body - computed: false, optional: true, required: false
    _body = new Wafv2RuleGroupRuleStatementAndStatementStatementSizeConstraintStatementFieldToMatchBodyOutputReference(this, "body", true);
    get body() {
        return this._body;
    }
    putBody(value) {
        this._body.internalValue = value;
    }
    resetBody() {
        this._body.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get bodyInput() {
        return this._body.internalValue;
    }
    // method - computed: false, optional: true, required: false
    _method = new Wafv2RuleGroupRuleStatementAndStatementStatementSizeConstraintStatementFieldToMatchMethodOutputReference(this, "method", true);
    get method() {
        return this._method;
    }
    putMethod(value) {
        this._method.internalValue = value;
    }
    resetMethod() {
        this._method.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get methodInput() {
        return this._method.internalValue;
    }
    // query_string - computed: false, optional: true, required: false
    _queryString = new Wafv2RuleGroupRuleStatementAndStatementStatementSizeConstraintStatementFieldToMatchQueryStringOutputReference(this, "query_string", true);
    get queryString() {
        return this._queryString;
    }
    putQueryString(value) {
        this._queryString.internalValue = value;
    }
    resetQueryString() {
        this._queryString.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get queryStringInput() {
        return this._queryString.internalValue;
    }
    // single_header - computed: false, optional: true, required: false
    _singleHeader = new Wafv2RuleGroupRuleStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderOutputReference(this, "single_header", true);
    get singleHeader() {
        return this._singleHeader;
    }
    putSingleHeader(value) {
        this._singleHeader.internalValue = value;
    }
    resetSingleHeader() {
        this._singleHeader.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get singleHeaderInput() {
        return this._singleHeader.internalValue;
    }
    // single_query_argument - computed: false, optional: true, required: false
    _singleQueryArgument = new Wafv2RuleGroupRuleStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentOutputReference(this, "single_query_argument", true);
    get singleQueryArgument() {
        return this._singleQueryArgument;
    }
    putSingleQueryArgument(value) {
        this._singleQueryArgument.internalValue = value;
    }
    resetSingleQueryArgument() {
        this._singleQueryArgument.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get singleQueryArgumentInput() {
        return this._singleQueryArgument.internalValue;
    }
    // uri_path - computed: false, optional: true, required: false
    _uriPath = new Wafv2RuleGroupRuleStatementAndStatementStatementSizeConstraintStatementFieldToMatchUriPathOutputReference(this, "uri_path", true);
    get uriPath() {
        return this._uriPath;
    }
    putUriPath(value) {
        this._uriPath.internalValue = value;
    }
    resetUriPath() {
        this._uriPath.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get uriPathInput() {
        return this._uriPath.internalValue;
    }
}
export function wafv2RuleGroupRuleStatementAndStatementStatementSizeConstraintStatementTextTransformationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        priority: cdktf.numberToTerraform(struct.priority),
        type: cdktf.stringToTerraform(struct.type),
    };
}
export function wafv2RuleGroupRuleStatementAndStatementStatementSizeConstraintStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        comparison_operator: cdktf.stringToTerraform(struct.comparisonOperator),
        size: cdktf.numberToTerraform(struct.size),
        field_to_match: wafv2RuleGroupRuleStatementAndStatementStatementSizeConstraintStatementFieldToMatchToTerraform(struct.fieldToMatch),
        text_transformation: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementSizeConstraintStatementTextTransformationToTerraform)(struct.textTransformation),
    };
}
export class Wafv2RuleGroupRuleStatementAndStatementStatementSizeConstraintStatementOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._comparisonOperator) {
            hasAnyValues = true;
            internalValueResult.comparisonOperator = this._comparisonOperator;
        }
        if (this._size) {
            hasAnyValues = true;
            internalValueResult.size = this._size;
        }
        if (this._fieldToMatch?.internalValue) {
            hasAnyValues = true;
            internalValueResult.fieldToMatch = this._fieldToMatch?.internalValue;
        }
        if (this._textTransformation) {
            hasAnyValues = true;
            internalValueResult.textTransformation = this._textTransformation;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._comparisonOperator = undefined;
            this._size = undefined;
            this._fieldToMatch.internalValue = undefined;
            this._textTransformation = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._comparisonOperator = value.comparisonOperator;
            this._size = value.size;
            this._fieldToMatch.internalValue = value.fieldToMatch;
            this._textTransformation = value.textTransformation;
        }
    }
    // comparison_operator - computed: false, optional: false, required: true
    _comparisonOperator;
    get comparisonOperator() {
        return this.getStringAttribute('comparison_operator');
    }
    set comparisonOperator(value) {
        this._comparisonOperator = value;
    }
    // Temporarily expose input value. Use with caution.
    get comparisonOperatorInput() {
        return this._comparisonOperator;
    }
    // size - computed: false, optional: false, required: true
    _size;
    get size() {
        return this.getNumberAttribute('size');
    }
    set size(value) {
        this._size = value;
    }
    // Temporarily expose input value. Use with caution.
    get sizeInput() {
        return this._size;
    }
    // field_to_match - computed: false, optional: true, required: false
    _fieldToMatch = new Wafv2RuleGroupRuleStatementAndStatementStatementSizeConstraintStatementFieldToMatchOutputReference(this, "field_to_match", true);
    get fieldToMatch() {
        return this._fieldToMatch;
    }
    putFieldToMatch(value) {
        this._fieldToMatch.internalValue = value;
    }
    resetFieldToMatch() {
        this._fieldToMatch.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get fieldToMatchInput() {
        return this._fieldToMatch.internalValue;
    }
    // text_transformation - computed: false, optional: false, required: true
    _textTransformation;
    get textTransformation() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('text_transformation');
    }
    set textTransformation(value) {
        this._textTransformation = value;
    }
    // Temporarily expose input value. Use with caution.
    get textTransformationInput() {
        return this._textTransformation;
    }
}
export function wafv2RuleGroupRuleStatementAndStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementAndStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementAndStatementStatementSqliMatchStatementFieldToMatchBodyToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementAndStatementStatementSqliMatchStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementAndStatementStatementSqliMatchStatementFieldToMatchMethodToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementAndStatementStatementSqliMatchStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementAndStatementStatementSqliMatchStatementFieldToMatchQueryStringToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementAndStatementStatementSqliMatchStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleHeaderToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
    };
}
export class Wafv2RuleGroupRuleStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._name) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._name = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._name = value.name;
        }
    }
    // name - computed: false, optional: false, required: true
    _name;
    get name() {
        return this.getStringAttribute('name');
    }
    set name(value) {
        this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    get nameInput() {
        return this._name;
    }
}
export function wafv2RuleGroupRuleStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
    };
}
export class Wafv2RuleGroupRuleStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._name) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._name = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._name = value.name;
        }
    }
    // name - computed: false, optional: false, required: true
    _name;
    get name() {
        return this.getStringAttribute('name');
    }
    set name(value) {
        this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    get nameInput() {
        return this._name;
    }
}
export function wafv2RuleGroupRuleStatementAndStatementStatementSqliMatchStatementFieldToMatchUriPathToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementAndStatementStatementSqliMatchStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementAndStatementStatementSqliMatchStatementFieldToMatchToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        all_query_arguments: wafv2RuleGroupRuleStatementAndStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct.allQueryArguments),
        body: wafv2RuleGroupRuleStatementAndStatementStatementSqliMatchStatementFieldToMatchBodyToTerraform(struct.body),
        method: wafv2RuleGroupRuleStatementAndStatementStatementSqliMatchStatementFieldToMatchMethodToTerraform(struct.method),
        query_string: wafv2RuleGroupRuleStatementAndStatementStatementSqliMatchStatementFieldToMatchQueryStringToTerraform(struct.queryString),
        single_header: wafv2RuleGroupRuleStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleHeaderToTerraform(struct.singleHeader),
        single_query_argument: wafv2RuleGroupRuleStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct.singleQueryArgument),
        uri_path: wafv2RuleGroupRuleStatementAndStatementStatementSqliMatchStatementFieldToMatchUriPathToTerraform(struct.uriPath),
    };
}
export class Wafv2RuleGroupRuleStatementAndStatementStatementSqliMatchStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._allQueryArguments?.internalValue) {
            hasAnyValues = true;
            internalValueResult.allQueryArguments = this._allQueryArguments?.internalValue;
        }
        if (this._body?.internalValue) {
            hasAnyValues = true;
            internalValueResult.body = this._body?.internalValue;
        }
        if (this._method?.internalValue) {
            hasAnyValues = true;
            internalValueResult.method = this._method?.internalValue;
        }
        if (this._queryString?.internalValue) {
            hasAnyValues = true;
            internalValueResult.queryString = this._queryString?.internalValue;
        }
        if (this._singleHeader?.internalValue) {
            hasAnyValues = true;
            internalValueResult.singleHeader = this._singleHeader?.internalValue;
        }
        if (this._singleQueryArgument?.internalValue) {
            hasAnyValues = true;
            internalValueResult.singleQueryArgument = this._singleQueryArgument?.internalValue;
        }
        if (this._uriPath?.internalValue) {
            hasAnyValues = true;
            internalValueResult.uriPath = this._uriPath?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._allQueryArguments.internalValue = undefined;
            this._body.internalValue = undefined;
            this._method.internalValue = undefined;
            this._queryString.internalValue = undefined;
            this._singleHeader.internalValue = undefined;
            this._singleQueryArgument.internalValue = undefined;
            this._uriPath.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._allQueryArguments.internalValue = value.allQueryArguments;
            this._body.internalValue = value.body;
            this._method.internalValue = value.method;
            this._queryString.internalValue = value.queryString;
            this._singleHeader.internalValue = value.singleHeader;
            this._singleQueryArgument.internalValue = value.singleQueryArgument;
            this._uriPath.internalValue = value.uriPath;
        }
    }
    // all_query_arguments - computed: false, optional: true, required: false
    _allQueryArguments = new Wafv2RuleGroupRuleStatementAndStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsOutputReference(this, "all_query_arguments", true);
    get allQueryArguments() {
        return this._allQueryArguments;
    }
    putAllQueryArguments(value) {
        this._allQueryArguments.internalValue = value;
    }
    resetAllQueryArguments() {
        this._allQueryArguments.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get allQueryArgumentsInput() {
        return this._allQueryArguments.internalValue;
    }
    // body - computed: false, optional: true, required: false
    _body = new Wafv2RuleGroupRuleStatementAndStatementStatementSqliMatchStatementFieldToMatchBodyOutputReference(this, "body", true);
    get body() {
        return this._body;
    }
    putBody(value) {
        this._body.internalValue = value;
    }
    resetBody() {
        this._body.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get bodyInput() {
        return this._body.internalValue;
    }
    // method - computed: false, optional: true, required: false
    _method = new Wafv2RuleGroupRuleStatementAndStatementStatementSqliMatchStatementFieldToMatchMethodOutputReference(this, "method", true);
    get method() {
        return this._method;
    }
    putMethod(value) {
        this._method.internalValue = value;
    }
    resetMethod() {
        this._method.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get methodInput() {
        return this._method.internalValue;
    }
    // query_string - computed: false, optional: true, required: false
    _queryString = new Wafv2RuleGroupRuleStatementAndStatementStatementSqliMatchStatementFieldToMatchQueryStringOutputReference(this, "query_string", true);
    get queryString() {
        return this._queryString;
    }
    putQueryString(value) {
        this._queryString.internalValue = value;
    }
    resetQueryString() {
        this._queryString.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get queryStringInput() {
        return this._queryString.internalValue;
    }
    // single_header - computed: false, optional: true, required: false
    _singleHeader = new Wafv2RuleGroupRuleStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleHeaderOutputReference(this, "single_header", true);
    get singleHeader() {
        return this._singleHeader;
    }
    putSingleHeader(value) {
        this._singleHeader.internalValue = value;
    }
    resetSingleHeader() {
        this._singleHeader.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get singleHeaderInput() {
        return this._singleHeader.internalValue;
    }
    // single_query_argument - computed: false, optional: true, required: false
    _singleQueryArgument = new Wafv2RuleGroupRuleStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentOutputReference(this, "single_query_argument", true);
    get singleQueryArgument() {
        return this._singleQueryArgument;
    }
    putSingleQueryArgument(value) {
        this._singleQueryArgument.internalValue = value;
    }
    resetSingleQueryArgument() {
        this._singleQueryArgument.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get singleQueryArgumentInput() {
        return this._singleQueryArgument.internalValue;
    }
    // uri_path - computed: false, optional: true, required: false
    _uriPath = new Wafv2RuleGroupRuleStatementAndStatementStatementSqliMatchStatementFieldToMatchUriPathOutputReference(this, "uri_path", true);
    get uriPath() {
        return this._uriPath;
    }
    putUriPath(value) {
        this._uriPath.internalValue = value;
    }
    resetUriPath() {
        this._uriPath.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get uriPathInput() {
        return this._uriPath.internalValue;
    }
}
export function wafv2RuleGroupRuleStatementAndStatementStatementSqliMatchStatementTextTransformationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        priority: cdktf.numberToTerraform(struct.priority),
        type: cdktf.stringToTerraform(struct.type),
    };
}
export function wafv2RuleGroupRuleStatementAndStatementStatementSqliMatchStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        field_to_match: wafv2RuleGroupRuleStatementAndStatementStatementSqliMatchStatementFieldToMatchToTerraform(struct.fieldToMatch),
        text_transformation: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementSqliMatchStatementTextTransformationToTerraform)(struct.textTransformation),
    };
}
export class Wafv2RuleGroupRuleStatementAndStatementStatementSqliMatchStatementOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._fieldToMatch?.internalValue) {
            hasAnyValues = true;
            internalValueResult.fieldToMatch = this._fieldToMatch?.internalValue;
        }
        if (this._textTransformation) {
            hasAnyValues = true;
            internalValueResult.textTransformation = this._textTransformation;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._fieldToMatch.internalValue = undefined;
            this._textTransformation = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._fieldToMatch.internalValue = value.fieldToMatch;
            this._textTransformation = value.textTransformation;
        }
    }
    // field_to_match - computed: false, optional: true, required: false
    _fieldToMatch = new Wafv2RuleGroupRuleStatementAndStatementStatementSqliMatchStatementFieldToMatchOutputReference(this, "field_to_match", true);
    get fieldToMatch() {
        return this._fieldToMatch;
    }
    putFieldToMatch(value) {
        this._fieldToMatch.internalValue = value;
    }
    resetFieldToMatch() {
        this._fieldToMatch.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get fieldToMatchInput() {
        return this._fieldToMatch.internalValue;
    }
    // text_transformation - computed: false, optional: false, required: true
    _textTransformation;
    get textTransformation() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('text_transformation');
    }
    set textTransformation(value) {
        this._textTransformation = value;
    }
    // Temporarily expose input value. Use with caution.
    get textTransformationInput() {
        return this._textTransformation;
    }
}
export function wafv2RuleGroupRuleStatementAndStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementAndStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementAndStatementStatementXssMatchStatementFieldToMatchBodyToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementAndStatementStatementXssMatchStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementAndStatementStatementXssMatchStatementFieldToMatchMethodToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementAndStatementStatementXssMatchStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementAndStatementStatementXssMatchStatementFieldToMatchQueryStringToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementAndStatementStatementXssMatchStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementAndStatementStatementXssMatchStatementFieldToMatchSingleHeaderToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
    };
}
export class Wafv2RuleGroupRuleStatementAndStatementStatementXssMatchStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._name) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._name = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._name = value.name;
        }
    }
    // name - computed: false, optional: false, required: true
    _name;
    get name() {
        return this.getStringAttribute('name');
    }
    set name(value) {
        this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    get nameInput() {
        return this._name;
    }
}
export function wafv2RuleGroupRuleStatementAndStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
    };
}
export class Wafv2RuleGroupRuleStatementAndStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._name) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._name = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._name = value.name;
        }
    }
    // name - computed: false, optional: false, required: true
    _name;
    get name() {
        return this.getStringAttribute('name');
    }
    set name(value) {
        this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    get nameInput() {
        return this._name;
    }
}
export function wafv2RuleGroupRuleStatementAndStatementStatementXssMatchStatementFieldToMatchUriPathToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementAndStatementStatementXssMatchStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementAndStatementStatementXssMatchStatementFieldToMatchToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        all_query_arguments: wafv2RuleGroupRuleStatementAndStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct.allQueryArguments),
        body: wafv2RuleGroupRuleStatementAndStatementStatementXssMatchStatementFieldToMatchBodyToTerraform(struct.body),
        method: wafv2RuleGroupRuleStatementAndStatementStatementXssMatchStatementFieldToMatchMethodToTerraform(struct.method),
        query_string: wafv2RuleGroupRuleStatementAndStatementStatementXssMatchStatementFieldToMatchQueryStringToTerraform(struct.queryString),
        single_header: wafv2RuleGroupRuleStatementAndStatementStatementXssMatchStatementFieldToMatchSingleHeaderToTerraform(struct.singleHeader),
        single_query_argument: wafv2RuleGroupRuleStatementAndStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct.singleQueryArgument),
        uri_path: wafv2RuleGroupRuleStatementAndStatementStatementXssMatchStatementFieldToMatchUriPathToTerraform(struct.uriPath),
    };
}
export class Wafv2RuleGroupRuleStatementAndStatementStatementXssMatchStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._allQueryArguments?.internalValue) {
            hasAnyValues = true;
            internalValueResult.allQueryArguments = this._allQueryArguments?.internalValue;
        }
        if (this._body?.internalValue) {
            hasAnyValues = true;
            internalValueResult.body = this._body?.internalValue;
        }
        if (this._method?.internalValue) {
            hasAnyValues = true;
            internalValueResult.method = this._method?.internalValue;
        }
        if (this._queryString?.internalValue) {
            hasAnyValues = true;
            internalValueResult.queryString = this._queryString?.internalValue;
        }
        if (this._singleHeader?.internalValue) {
            hasAnyValues = true;
            internalValueResult.singleHeader = this._singleHeader?.internalValue;
        }
        if (this._singleQueryArgument?.internalValue) {
            hasAnyValues = true;
            internalValueResult.singleQueryArgument = this._singleQueryArgument?.internalValue;
        }
        if (this._uriPath?.internalValue) {
            hasAnyValues = true;
            internalValueResult.uriPath = this._uriPath?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._allQueryArguments.internalValue = undefined;
            this._body.internalValue = undefined;
            this._method.internalValue = undefined;
            this._queryString.internalValue = undefined;
            this._singleHeader.internalValue = undefined;
            this._singleQueryArgument.internalValue = undefined;
            this._uriPath.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._allQueryArguments.internalValue = value.allQueryArguments;
            this._body.internalValue = value.body;
            this._method.internalValue = value.method;
            this._queryString.internalValue = value.queryString;
            this._singleHeader.internalValue = value.singleHeader;
            this._singleQueryArgument.internalValue = value.singleQueryArgument;
            this._uriPath.internalValue = value.uriPath;
        }
    }
    // all_query_arguments - computed: false, optional: true, required: false
    _allQueryArguments = new Wafv2RuleGroupRuleStatementAndStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsOutputReference(this, "all_query_arguments", true);
    get allQueryArguments() {
        return this._allQueryArguments;
    }
    putAllQueryArguments(value) {
        this._allQueryArguments.internalValue = value;
    }
    resetAllQueryArguments() {
        this._allQueryArguments.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get allQueryArgumentsInput() {
        return this._allQueryArguments.internalValue;
    }
    // body - computed: false, optional: true, required: false
    _body = new Wafv2RuleGroupRuleStatementAndStatementStatementXssMatchStatementFieldToMatchBodyOutputReference(this, "body", true);
    get body() {
        return this._body;
    }
    putBody(value) {
        this._body.internalValue = value;
    }
    resetBody() {
        this._body.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get bodyInput() {
        return this._body.internalValue;
    }
    // method - computed: false, optional: true, required: false
    _method = new Wafv2RuleGroupRuleStatementAndStatementStatementXssMatchStatementFieldToMatchMethodOutputReference(this, "method", true);
    get method() {
        return this._method;
    }
    putMethod(value) {
        this._method.internalValue = value;
    }
    resetMethod() {
        this._method.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get methodInput() {
        return this._method.internalValue;
    }
    // query_string - computed: false, optional: true, required: false
    _queryString = new Wafv2RuleGroupRuleStatementAndStatementStatementXssMatchStatementFieldToMatchQueryStringOutputReference(this, "query_string", true);
    get queryString() {
        return this._queryString;
    }
    putQueryString(value) {
        this._queryString.internalValue = value;
    }
    resetQueryString() {
        this._queryString.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get queryStringInput() {
        return this._queryString.internalValue;
    }
    // single_header - computed: false, optional: true, required: false
    _singleHeader = new Wafv2RuleGroupRuleStatementAndStatementStatementXssMatchStatementFieldToMatchSingleHeaderOutputReference(this, "single_header", true);
    get singleHeader() {
        return this._singleHeader;
    }
    putSingleHeader(value) {
        this._singleHeader.internalValue = value;
    }
    resetSingleHeader() {
        this._singleHeader.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get singleHeaderInput() {
        return this._singleHeader.internalValue;
    }
    // single_query_argument - computed: false, optional: true, required: false
    _singleQueryArgument = new Wafv2RuleGroupRuleStatementAndStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentOutputReference(this, "single_query_argument", true);
    get singleQueryArgument() {
        return this._singleQueryArgument;
    }
    putSingleQueryArgument(value) {
        this._singleQueryArgument.internalValue = value;
    }
    resetSingleQueryArgument() {
        this._singleQueryArgument.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get singleQueryArgumentInput() {
        return this._singleQueryArgument.internalValue;
    }
    // uri_path - computed: false, optional: true, required: false
    _uriPath = new Wafv2RuleGroupRuleStatementAndStatementStatementXssMatchStatementFieldToMatchUriPathOutputReference(this, "uri_path", true);
    get uriPath() {
        return this._uriPath;
    }
    putUriPath(value) {
        this._uriPath.internalValue = value;
    }
    resetUriPath() {
        this._uriPath.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get uriPathInput() {
        return this._uriPath.internalValue;
    }
}
export function wafv2RuleGroupRuleStatementAndStatementStatementXssMatchStatementTextTransformationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        priority: cdktf.numberToTerraform(struct.priority),
        type: cdktf.stringToTerraform(struct.type),
    };
}
export function wafv2RuleGroupRuleStatementAndStatementStatementXssMatchStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        field_to_match: wafv2RuleGroupRuleStatementAndStatementStatementXssMatchStatementFieldToMatchToTerraform(struct.fieldToMatch),
        text_transformation: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementXssMatchStatementTextTransformationToTerraform)(struct.textTransformation),
    };
}
export class Wafv2RuleGroupRuleStatementAndStatementStatementXssMatchStatementOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._fieldToMatch?.internalValue) {
            hasAnyValues = true;
            internalValueResult.fieldToMatch = this._fieldToMatch?.internalValue;
        }
        if (this._textTransformation) {
            hasAnyValues = true;
            internalValueResult.textTransformation = this._textTransformation;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._fieldToMatch.internalValue = undefined;
            this._textTransformation = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._fieldToMatch.internalValue = value.fieldToMatch;
            this._textTransformation = value.textTransformation;
        }
    }
    // field_to_match - computed: false, optional: true, required: false
    _fieldToMatch = new Wafv2RuleGroupRuleStatementAndStatementStatementXssMatchStatementFieldToMatchOutputReference(this, "field_to_match", true);
    get fieldToMatch() {
        return this._fieldToMatch;
    }
    putFieldToMatch(value) {
        this._fieldToMatch.internalValue = value;
    }
    resetFieldToMatch() {
        this._fieldToMatch.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get fieldToMatchInput() {
        return this._fieldToMatch.internalValue;
    }
    // text_transformation - computed: false, optional: false, required: true
    _textTransformation;
    get textTransformation() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('text_transformation');
    }
    set textTransformation(value) {
        this._textTransformation = value;
    }
    // Temporarily expose input value. Use with caution.
    get textTransformationInput() {
        return this._textTransformation;
    }
}
export function wafv2RuleGroupRuleStatementAndStatementStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        and_statement: wafv2RuleGroupRuleStatementAndStatementStatementAndStatementToTerraform(struct.andStatement),
        byte_match_statement: wafv2RuleGroupRuleStatementAndStatementStatementByteMatchStatementToTerraform(struct.byteMatchStatement),
        geo_match_statement: wafv2RuleGroupRuleStatementAndStatementStatementGeoMatchStatementToTerraform(struct.geoMatchStatement),
        ip_set_reference_statement: wafv2RuleGroupRuleStatementAndStatementStatementIpSetReferenceStatementToTerraform(struct.ipSetReferenceStatement),
        label_match_statement: wafv2RuleGroupRuleStatementAndStatementStatementLabelMatchStatementToTerraform(struct.labelMatchStatement),
        not_statement: wafv2RuleGroupRuleStatementAndStatementStatementNotStatementToTerraform(struct.notStatement),
        or_statement: wafv2RuleGroupRuleStatementAndStatementStatementOrStatementToTerraform(struct.orStatement),
        regex_pattern_set_reference_statement: wafv2RuleGroupRuleStatementAndStatementStatementRegexPatternSetReferenceStatementToTerraform(struct.regexPatternSetReferenceStatement),
        size_constraint_statement: wafv2RuleGroupRuleStatementAndStatementStatementSizeConstraintStatementToTerraform(struct.sizeConstraintStatement),
        sqli_match_statement: wafv2RuleGroupRuleStatementAndStatementStatementSqliMatchStatementToTerraform(struct.sqliMatchStatement),
        xss_match_statement: wafv2RuleGroupRuleStatementAndStatementStatementXssMatchStatementToTerraform(struct.xssMatchStatement),
    };
}
export function wafv2RuleGroupRuleStatementAndStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        statement: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementToTerraform)(struct.statement),
    };
}
export class Wafv2RuleGroupRuleStatementAndStatementOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._statement) {
            hasAnyValues = true;
            internalValueResult.statement = this._statement;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._statement = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._statement = value.statement;
        }
    }
    // statement - computed: false, optional: false, required: true
    _statement;
    get statement() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('statement');
    }
    set statement(value) {
        this._statement = value;
    }
    // Temporarily expose input value. Use with caution.
    get statementInput() {
        return this._statement;
    }
}
export function wafv2RuleGroupRuleStatementByteMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementByteMatchStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementByteMatchStatementFieldToMatchBodyToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementByteMatchStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementByteMatchStatementFieldToMatchMethodToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementByteMatchStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementByteMatchStatementFieldToMatchQueryStringToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementByteMatchStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementByteMatchStatementFieldToMatchSingleHeaderToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
    };
}
export class Wafv2RuleGroupRuleStatementByteMatchStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._name) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._name = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._name = value.name;
        }
    }
    // name - computed: false, optional: false, required: true
    _name;
    get name() {
        return this.getStringAttribute('name');
    }
    set name(value) {
        this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    get nameInput() {
        return this._name;
    }
}
export function wafv2RuleGroupRuleStatementByteMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
    };
}
export class Wafv2RuleGroupRuleStatementByteMatchStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._name) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._name = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._name = value.name;
        }
    }
    // name - computed: false, optional: false, required: true
    _name;
    get name() {
        return this.getStringAttribute('name');
    }
    set name(value) {
        this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    get nameInput() {
        return this._name;
    }
}
export function wafv2RuleGroupRuleStatementByteMatchStatementFieldToMatchUriPathToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementByteMatchStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementByteMatchStatementFieldToMatchToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        all_query_arguments: wafv2RuleGroupRuleStatementByteMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct.allQueryArguments),
        body: wafv2RuleGroupRuleStatementByteMatchStatementFieldToMatchBodyToTerraform(struct.body),
        method: wafv2RuleGroupRuleStatementByteMatchStatementFieldToMatchMethodToTerraform(struct.method),
        query_string: wafv2RuleGroupRuleStatementByteMatchStatementFieldToMatchQueryStringToTerraform(struct.queryString),
        single_header: wafv2RuleGroupRuleStatementByteMatchStatementFieldToMatchSingleHeaderToTerraform(struct.singleHeader),
        single_query_argument: wafv2RuleGroupRuleStatementByteMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct.singleQueryArgument),
        uri_path: wafv2RuleGroupRuleStatementByteMatchStatementFieldToMatchUriPathToTerraform(struct.uriPath),
    };
}
export class Wafv2RuleGroupRuleStatementByteMatchStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._allQueryArguments?.internalValue) {
            hasAnyValues = true;
            internalValueResult.allQueryArguments = this._allQueryArguments?.internalValue;
        }
        if (this._body?.internalValue) {
            hasAnyValues = true;
            internalValueResult.body = this._body?.internalValue;
        }
        if (this._method?.internalValue) {
            hasAnyValues = true;
            internalValueResult.method = this._method?.internalValue;
        }
        if (this._queryString?.internalValue) {
            hasAnyValues = true;
            internalValueResult.queryString = this._queryString?.internalValue;
        }
        if (this._singleHeader?.internalValue) {
            hasAnyValues = true;
            internalValueResult.singleHeader = this._singleHeader?.internalValue;
        }
        if (this._singleQueryArgument?.internalValue) {
            hasAnyValues = true;
            internalValueResult.singleQueryArgument = this._singleQueryArgument?.internalValue;
        }
        if (this._uriPath?.internalValue) {
            hasAnyValues = true;
            internalValueResult.uriPath = this._uriPath?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._allQueryArguments.internalValue = undefined;
            this._body.internalValue = undefined;
            this._method.internalValue = undefined;
            this._queryString.internalValue = undefined;
            this._singleHeader.internalValue = undefined;
            this._singleQueryArgument.internalValue = undefined;
            this._uriPath.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._allQueryArguments.internalValue = value.allQueryArguments;
            this._body.internalValue = value.body;
            this._method.internalValue = value.method;
            this._queryString.internalValue = value.queryString;
            this._singleHeader.internalValue = value.singleHeader;
            this._singleQueryArgument.internalValue = value.singleQueryArgument;
            this._uriPath.internalValue = value.uriPath;
        }
    }
    // all_query_arguments - computed: false, optional: true, required: false
    _allQueryArguments = new Wafv2RuleGroupRuleStatementByteMatchStatementFieldToMatchAllQueryArgumentsOutputReference(this, "all_query_arguments", true);
    get allQueryArguments() {
        return this._allQueryArguments;
    }
    putAllQueryArguments(value) {
        this._allQueryArguments.internalValue = value;
    }
    resetAllQueryArguments() {
        this._allQueryArguments.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get allQueryArgumentsInput() {
        return this._allQueryArguments.internalValue;
    }
    // body - computed: false, optional: true, required: false
    _body = new Wafv2RuleGroupRuleStatementByteMatchStatementFieldToMatchBodyOutputReference(this, "body", true);
    get body() {
        return this._body;
    }
    putBody(value) {
        this._body.internalValue = value;
    }
    resetBody() {
        this._body.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get bodyInput() {
        return this._body.internalValue;
    }
    // method - computed: false, optional: true, required: false
    _method = new Wafv2RuleGroupRuleStatementByteMatchStatementFieldToMatchMethodOutputReference(this, "method", true);
    get method() {
        return this._method;
    }
    putMethod(value) {
        this._method.internalValue = value;
    }
    resetMethod() {
        this._method.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get methodInput() {
        return this._method.internalValue;
    }
    // query_string - computed: false, optional: true, required: false
    _queryString = new Wafv2RuleGroupRuleStatementByteMatchStatementFieldToMatchQueryStringOutputReference(this, "query_string", true);
    get queryString() {
        return this._queryString;
    }
    putQueryString(value) {
        this._queryString.internalValue = value;
    }
    resetQueryString() {
        this._queryString.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get queryStringInput() {
        return this._queryString.internalValue;
    }
    // single_header - computed: false, optional: true, required: false
    _singleHeader = new Wafv2RuleGroupRuleStatementByteMatchStatementFieldToMatchSingleHeaderOutputReference(this, "single_header", true);
    get singleHeader() {
        return this._singleHeader;
    }
    putSingleHeader(value) {
        this._singleHeader.internalValue = value;
    }
    resetSingleHeader() {
        this._singleHeader.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get singleHeaderInput() {
        return this._singleHeader.internalValue;
    }
    // single_query_argument - computed: false, optional: true, required: false
    _singleQueryArgument = new Wafv2RuleGroupRuleStatementByteMatchStatementFieldToMatchSingleQueryArgumentOutputReference(this, "single_query_argument", true);
    get singleQueryArgument() {
        return this._singleQueryArgument;
    }
    putSingleQueryArgument(value) {
        this._singleQueryArgument.internalValue = value;
    }
    resetSingleQueryArgument() {
        this._singleQueryArgument.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get singleQueryArgumentInput() {
        return this._singleQueryArgument.internalValue;
    }
    // uri_path - computed: false, optional: true, required: false
    _uriPath = new Wafv2RuleGroupRuleStatementByteMatchStatementFieldToMatchUriPathOutputReference(this, "uri_path", true);
    get uriPath() {
        return this._uriPath;
    }
    putUriPath(value) {
        this._uriPath.internalValue = value;
    }
    resetUriPath() {
        this._uriPath.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get uriPathInput() {
        return this._uriPath.internalValue;
    }
}
export function wafv2RuleGroupRuleStatementByteMatchStatementTextTransformationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        priority: cdktf.numberToTerraform(struct.priority),
        type: cdktf.stringToTerraform(struct.type),
    };
}
export function wafv2RuleGroupRuleStatementByteMatchStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        positional_constraint: cdktf.stringToTerraform(struct.positionalConstraint),
        search_string: cdktf.stringToTerraform(struct.searchString),
        field_to_match: wafv2RuleGroupRuleStatementByteMatchStatementFieldToMatchToTerraform(struct.fieldToMatch),
        text_transformation: cdktf.listMapper(wafv2RuleGroupRuleStatementByteMatchStatementTextTransformationToTerraform)(struct.textTransformation),
    };
}
export class Wafv2RuleGroupRuleStatementByteMatchStatementOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._positionalConstraint) {
            hasAnyValues = true;
            internalValueResult.positionalConstraint = this._positionalConstraint;
        }
        if (this._searchString) {
            hasAnyValues = true;
            internalValueResult.searchString = this._searchString;
        }
        if (this._fieldToMatch?.internalValue) {
            hasAnyValues = true;
            internalValueResult.fieldToMatch = this._fieldToMatch?.internalValue;
        }
        if (this._textTransformation) {
            hasAnyValues = true;
            internalValueResult.textTransformation = this._textTransformation;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._positionalConstraint = undefined;
            this._searchString = undefined;
            this._fieldToMatch.internalValue = undefined;
            this._textTransformation = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._positionalConstraint = value.positionalConstraint;
            this._searchString = value.searchString;
            this._fieldToMatch.internalValue = value.fieldToMatch;
            this._textTransformation = value.textTransformation;
        }
    }
    // positional_constraint - computed: false, optional: false, required: true
    _positionalConstraint;
    get positionalConstraint() {
        return this.getStringAttribute('positional_constraint');
    }
    set positionalConstraint(value) {
        this._positionalConstraint = value;
    }
    // Temporarily expose input value. Use with caution.
    get positionalConstraintInput() {
        return this._positionalConstraint;
    }
    // search_string - computed: false, optional: false, required: true
    _searchString;
    get searchString() {
        return this.getStringAttribute('search_string');
    }
    set searchString(value) {
        this._searchString = value;
    }
    // Temporarily expose input value. Use with caution.
    get searchStringInput() {
        return this._searchString;
    }
    // field_to_match - computed: false, optional: true, required: false
    _fieldToMatch = new Wafv2RuleGroupRuleStatementByteMatchStatementFieldToMatchOutputReference(this, "field_to_match", true);
    get fieldToMatch() {
        return this._fieldToMatch;
    }
    putFieldToMatch(value) {
        this._fieldToMatch.internalValue = value;
    }
    resetFieldToMatch() {
        this._fieldToMatch.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get fieldToMatchInput() {
        return this._fieldToMatch.internalValue;
    }
    // text_transformation - computed: false, optional: false, required: true
    _textTransformation;
    get textTransformation() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('text_transformation');
    }
    set textTransformation(value) {
        this._textTransformation = value;
    }
    // Temporarily expose input value. Use with caution.
    get textTransformationInput() {
        return this._textTransformation;
    }
}
export function wafv2RuleGroupRuleStatementGeoMatchStatementForwardedIpConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        fallback_behavior: cdktf.stringToTerraform(struct.fallbackBehavior),
        header_name: cdktf.stringToTerraform(struct.headerName),
    };
}
export class Wafv2RuleGroupRuleStatementGeoMatchStatementForwardedIpConfigOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._fallbackBehavior) {
            hasAnyValues = true;
            internalValueResult.fallbackBehavior = this._fallbackBehavior;
        }
        if (this._headerName) {
            hasAnyValues = true;
            internalValueResult.headerName = this._headerName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._fallbackBehavior = undefined;
            this._headerName = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._fallbackBehavior = value.fallbackBehavior;
            this._headerName = value.headerName;
        }
    }
    // fallback_behavior - computed: false, optional: false, required: true
    _fallbackBehavior;
    get fallbackBehavior() {
        return this.getStringAttribute('fallback_behavior');
    }
    set fallbackBehavior(value) {
        this._fallbackBehavior = value;
    }
    // Temporarily expose input value. Use with caution.
    get fallbackBehaviorInput() {
        return this._fallbackBehavior;
    }
    // header_name - computed: false, optional: false, required: true
    _headerName;
    get headerName() {
        return this.getStringAttribute('header_name');
    }
    set headerName(value) {
        this._headerName = value;
    }
    // Temporarily expose input value. Use with caution.
    get headerNameInput() {
        return this._headerName;
    }
}
export function wafv2RuleGroupRuleStatementGeoMatchStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        country_codes: cdktf.listMapper(cdktf.stringToTerraform)(struct.countryCodes),
        forwarded_ip_config: wafv2RuleGroupRuleStatementGeoMatchStatementForwardedIpConfigToTerraform(struct.forwardedIpConfig),
    };
}
export class Wafv2RuleGroupRuleStatementGeoMatchStatementOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._countryCodes) {
            hasAnyValues = true;
            internalValueResult.countryCodes = this._countryCodes;
        }
        if (this._forwardedIpConfig?.internalValue) {
            hasAnyValues = true;
            internalValueResult.forwardedIpConfig = this._forwardedIpConfig?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._countryCodes = undefined;
            this._forwardedIpConfig.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._countryCodes = value.countryCodes;
            this._forwardedIpConfig.internalValue = value.forwardedIpConfig;
        }
    }
    // country_codes - computed: false, optional: false, required: true
    _countryCodes;
    get countryCodes() {
        return this.getListAttribute('country_codes');
    }
    set countryCodes(value) {
        this._countryCodes = value;
    }
    // Temporarily expose input value. Use with caution.
    get countryCodesInput() {
        return this._countryCodes;
    }
    // forwarded_ip_config - computed: false, optional: true, required: false
    _forwardedIpConfig = new Wafv2RuleGroupRuleStatementGeoMatchStatementForwardedIpConfigOutputReference(this, "forwarded_ip_config", true);
    get forwardedIpConfig() {
        return this._forwardedIpConfig;
    }
    putForwardedIpConfig(value) {
        this._forwardedIpConfig.internalValue = value;
    }
    resetForwardedIpConfig() {
        this._forwardedIpConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get forwardedIpConfigInput() {
        return this._forwardedIpConfig.internalValue;
    }
}
export function wafv2RuleGroupRuleStatementIpSetReferenceStatementIpSetForwardedIpConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        fallback_behavior: cdktf.stringToTerraform(struct.fallbackBehavior),
        header_name: cdktf.stringToTerraform(struct.headerName),
        position: cdktf.stringToTerraform(struct.position),
    };
}
export class Wafv2RuleGroupRuleStatementIpSetReferenceStatementIpSetForwardedIpConfigOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._fallbackBehavior) {
            hasAnyValues = true;
            internalValueResult.fallbackBehavior = this._fallbackBehavior;
        }
        if (this._headerName) {
            hasAnyValues = true;
            internalValueResult.headerName = this._headerName;
        }
        if (this._position) {
            hasAnyValues = true;
            internalValueResult.position = this._position;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._fallbackBehavior = undefined;
            this._headerName = undefined;
            this._position = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._fallbackBehavior = value.fallbackBehavior;
            this._headerName = value.headerName;
            this._position = value.position;
        }
    }
    // fallback_behavior - computed: false, optional: false, required: true
    _fallbackBehavior;
    get fallbackBehavior() {
        return this.getStringAttribute('fallback_behavior');
    }
    set fallbackBehavior(value) {
        this._fallbackBehavior = value;
    }
    // Temporarily expose input value. Use with caution.
    get fallbackBehaviorInput() {
        return this._fallbackBehavior;
    }
    // header_name - computed: false, optional: false, required: true
    _headerName;
    get headerName() {
        return this.getStringAttribute('header_name');
    }
    set headerName(value) {
        this._headerName = value;
    }
    // Temporarily expose input value. Use with caution.
    get headerNameInput() {
        return this._headerName;
    }
    // position - computed: false, optional: false, required: true
    _position;
    get position() {
        return this.getStringAttribute('position');
    }
    set position(value) {
        this._position = value;
    }
    // Temporarily expose input value. Use with caution.
    get positionInput() {
        return this._position;
    }
}
export function wafv2RuleGroupRuleStatementIpSetReferenceStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        arn: cdktf.stringToTerraform(struct.arn),
        ip_set_forwarded_ip_config: wafv2RuleGroupRuleStatementIpSetReferenceStatementIpSetForwardedIpConfigToTerraform(struct.ipSetForwardedIpConfig),
    };
}
export class Wafv2RuleGroupRuleStatementIpSetReferenceStatementOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._arn) {
            hasAnyValues = true;
            internalValueResult.arn = this._arn;
        }
        if (this._ipSetForwardedIpConfig?.internalValue) {
            hasAnyValues = true;
            internalValueResult.ipSetForwardedIpConfig = this._ipSetForwardedIpConfig?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._arn = undefined;
            this._ipSetForwardedIpConfig.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._arn = value.arn;
            this._ipSetForwardedIpConfig.internalValue = value.ipSetForwardedIpConfig;
        }
    }
    // arn - computed: false, optional: false, required: true
    _arn;
    get arn() {
        return this.getStringAttribute('arn');
    }
    set arn(value) {
        this._arn = value;
    }
    // Temporarily expose input value. Use with caution.
    get arnInput() {
        return this._arn;
    }
    // ip_set_forwarded_ip_config - computed: false, optional: true, required: false
    _ipSetForwardedIpConfig = new Wafv2RuleGroupRuleStatementIpSetReferenceStatementIpSetForwardedIpConfigOutputReference(this, "ip_set_forwarded_ip_config", true);
    get ipSetForwardedIpConfig() {
        return this._ipSetForwardedIpConfig;
    }
    putIpSetForwardedIpConfig(value) {
        this._ipSetForwardedIpConfig.internalValue = value;
    }
    resetIpSetForwardedIpConfig() {
        this._ipSetForwardedIpConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get ipSetForwardedIpConfigInput() {
        return this._ipSetForwardedIpConfig.internalValue;
    }
}
export function wafv2RuleGroupRuleStatementLabelMatchStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        key: cdktf.stringToTerraform(struct.key),
        scope: cdktf.stringToTerraform(struct.scope),
    };
}
export class Wafv2RuleGroupRuleStatementLabelMatchStatementOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._key) {
            hasAnyValues = true;
            internalValueResult.key = this._key;
        }
        if (this._scope) {
            hasAnyValues = true;
            internalValueResult.scope = this._scope;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._key = undefined;
            this._scope = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._key = value.key;
            this._scope = value.scope;
        }
    }
    // key - computed: false, optional: false, required: true
    _key;
    get key() {
        return this.getStringAttribute('key');
    }
    set key(value) {
        this._key = value;
    }
    // Temporarily expose input value. Use with caution.
    get keyInput() {
        return this._key;
    }
    // scope - computed: false, optional: false, required: true
    _scope;
    get scope() {
        return this.getStringAttribute('scope');
    }
    set scope(value) {
        this._scope = value;
    }
    // Temporarily expose input value. Use with caution.
    get scopeInput() {
        return this._scope;
    }
}
export function wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchBodyToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchMethodToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchQueryStringToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleHeaderToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
    };
}
export class Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._name) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._name = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._name = value.name;
        }
    }
    // name - computed: false, optional: false, required: true
    _name;
    get name() {
        return this.getStringAttribute('name');
    }
    set name(value) {
        this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    get nameInput() {
        return this._name;
    }
}
export function wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
    };
}
export class Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._name) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._name = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._name = value.name;
        }
    }
    // name - computed: false, optional: false, required: true
    _name;
    get name() {
        return this.getStringAttribute('name');
    }
    set name(value) {
        this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    get nameInput() {
        return this._name;
    }
}
export function wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchUriPathToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        all_query_arguments: wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct.allQueryArguments),
        body: wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchBodyToTerraform(struct.body),
        method: wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchMethodToTerraform(struct.method),
        query_string: wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchQueryStringToTerraform(struct.queryString),
        single_header: wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleHeaderToTerraform(struct.singleHeader),
        single_query_argument: wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct.singleQueryArgument),
        uri_path: wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchUriPathToTerraform(struct.uriPath),
    };
}
export class Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._allQueryArguments?.internalValue) {
            hasAnyValues = true;
            internalValueResult.allQueryArguments = this._allQueryArguments?.internalValue;
        }
        if (this._body?.internalValue) {
            hasAnyValues = true;
            internalValueResult.body = this._body?.internalValue;
        }
        if (this._method?.internalValue) {
            hasAnyValues = true;
            internalValueResult.method = this._method?.internalValue;
        }
        if (this._queryString?.internalValue) {
            hasAnyValues = true;
            internalValueResult.queryString = this._queryString?.internalValue;
        }
        if (this._singleHeader?.internalValue) {
            hasAnyValues = true;
            internalValueResult.singleHeader = this._singleHeader?.internalValue;
        }
        if (this._singleQueryArgument?.internalValue) {
            hasAnyValues = true;
            internalValueResult.singleQueryArgument = this._singleQueryArgument?.internalValue;
        }
        if (this._uriPath?.internalValue) {
            hasAnyValues = true;
            internalValueResult.uriPath = this._uriPath?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._allQueryArguments.internalValue = undefined;
            this._body.internalValue = undefined;
            this._method.internalValue = undefined;
            this._queryString.internalValue = undefined;
            this._singleHeader.internalValue = undefined;
            this._singleQueryArgument.internalValue = undefined;
            this._uriPath.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._allQueryArguments.internalValue = value.allQueryArguments;
            this._body.internalValue = value.body;
            this._method.internalValue = value.method;
            this._queryString.internalValue = value.queryString;
            this._singleHeader.internalValue = value.singleHeader;
            this._singleQueryArgument.internalValue = value.singleQueryArgument;
            this._uriPath.internalValue = value.uriPath;
        }
    }
    // all_query_arguments - computed: false, optional: true, required: false
    _allQueryArguments = new Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsOutputReference(this, "all_query_arguments", true);
    get allQueryArguments() {
        return this._allQueryArguments;
    }
    putAllQueryArguments(value) {
        this._allQueryArguments.internalValue = value;
    }
    resetAllQueryArguments() {
        this._allQueryArguments.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get allQueryArgumentsInput() {
        return this._allQueryArguments.internalValue;
    }
    // body - computed: false, optional: true, required: false
    _body = new Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchBodyOutputReference(this, "body", true);
    get body() {
        return this._body;
    }
    putBody(value) {
        this._body.internalValue = value;
    }
    resetBody() {
        this._body.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get bodyInput() {
        return this._body.internalValue;
    }
    // method - computed: false, optional: true, required: false
    _method = new Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchMethodOutputReference(this, "method", true);
    get method() {
        return this._method;
    }
    putMethod(value) {
        this._method.internalValue = value;
    }
    resetMethod() {
        this._method.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get methodInput() {
        return this._method.internalValue;
    }
    // query_string - computed: false, optional: true, required: false
    _queryString = new Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchQueryStringOutputReference(this, "query_string", true);
    get queryString() {
        return this._queryString;
    }
    putQueryString(value) {
        this._queryString.internalValue = value;
    }
    resetQueryString() {
        this._queryString.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get queryStringInput() {
        return this._queryString.internalValue;
    }
    // single_header - computed: false, optional: true, required: false
    _singleHeader = new Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleHeaderOutputReference(this, "single_header", true);
    get singleHeader() {
        return this._singleHeader;
    }
    putSingleHeader(value) {
        this._singleHeader.internalValue = value;
    }
    resetSingleHeader() {
        this._singleHeader.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get singleHeaderInput() {
        return this._singleHeader.internalValue;
    }
    // single_query_argument - computed: false, optional: true, required: false
    _singleQueryArgument = new Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentOutputReference(this, "single_query_argument", true);
    get singleQueryArgument() {
        return this._singleQueryArgument;
    }
    putSingleQueryArgument(value) {
        this._singleQueryArgument.internalValue = value;
    }
    resetSingleQueryArgument() {
        this._singleQueryArgument.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get singleQueryArgumentInput() {
        return this._singleQueryArgument.internalValue;
    }
    // uri_path - computed: false, optional: true, required: false
    _uriPath = new Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchUriPathOutputReference(this, "uri_path", true);
    get uriPath() {
        return this._uriPath;
    }
    putUriPath(value) {
        this._uriPath.internalValue = value;
    }
    resetUriPath() {
        this._uriPath.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get uriPathInput() {
        return this._uriPath.internalValue;
    }
}
export function wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementByteMatchStatementTextTransformationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        priority: cdktf.numberToTerraform(struct.priority),
        type: cdktf.stringToTerraform(struct.type),
    };
}
export function wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementByteMatchStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        positional_constraint: cdktf.stringToTerraform(struct.positionalConstraint),
        search_string: cdktf.stringToTerraform(struct.searchString),
        field_to_match: wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchToTerraform(struct.fieldToMatch),
        text_transformation: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementByteMatchStatementTextTransformationToTerraform)(struct.textTransformation),
    };
}
export class Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementByteMatchStatementOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._positionalConstraint) {
            hasAnyValues = true;
            internalValueResult.positionalConstraint = this._positionalConstraint;
        }
        if (this._searchString) {
            hasAnyValues = true;
            internalValueResult.searchString = this._searchString;
        }
        if (this._fieldToMatch?.internalValue) {
            hasAnyValues = true;
            internalValueResult.fieldToMatch = this._fieldToMatch?.internalValue;
        }
        if (this._textTransformation) {
            hasAnyValues = true;
            internalValueResult.textTransformation = this._textTransformation;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._positionalConstraint = undefined;
            this._searchString = undefined;
            this._fieldToMatch.internalValue = undefined;
            this._textTransformation = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._positionalConstraint = value.positionalConstraint;
            this._searchString = value.searchString;
            this._fieldToMatch.internalValue = value.fieldToMatch;
            this._textTransformation = value.textTransformation;
        }
    }
    // positional_constraint - computed: false, optional: false, required: true
    _positionalConstraint;
    get positionalConstraint() {
        return this.getStringAttribute('positional_constraint');
    }
    set positionalConstraint(value) {
        this._positionalConstraint = value;
    }
    // Temporarily expose input value. Use with caution.
    get positionalConstraintInput() {
        return this._positionalConstraint;
    }
    // search_string - computed: false, optional: false, required: true
    _searchString;
    get searchString() {
        return this.getStringAttribute('search_string');
    }
    set searchString(value) {
        this._searchString = value;
    }
    // Temporarily expose input value. Use with caution.
    get searchStringInput() {
        return this._searchString;
    }
    // field_to_match - computed: false, optional: true, required: false
    _fieldToMatch = new Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchOutputReference(this, "field_to_match", true);
    get fieldToMatch() {
        return this._fieldToMatch;
    }
    putFieldToMatch(value) {
        this._fieldToMatch.internalValue = value;
    }
    resetFieldToMatch() {
        this._fieldToMatch.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get fieldToMatchInput() {
        return this._fieldToMatch.internalValue;
    }
    // text_transformation - computed: false, optional: false, required: true
    _textTransformation;
    get textTransformation() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('text_transformation');
    }
    set textTransformation(value) {
        this._textTransformation = value;
    }
    // Temporarily expose input value. Use with caution.
    get textTransformationInput() {
        return this._textTransformation;
    }
}
export function wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementGeoMatchStatementForwardedIpConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        fallback_behavior: cdktf.stringToTerraform(struct.fallbackBehavior),
        header_name: cdktf.stringToTerraform(struct.headerName),
    };
}
export class Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementGeoMatchStatementForwardedIpConfigOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._fallbackBehavior) {
            hasAnyValues = true;
            internalValueResult.fallbackBehavior = this._fallbackBehavior;
        }
        if (this._headerName) {
            hasAnyValues = true;
            internalValueResult.headerName = this._headerName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._fallbackBehavior = undefined;
            this._headerName = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._fallbackBehavior = value.fallbackBehavior;
            this._headerName = value.headerName;
        }
    }
    // fallback_behavior - computed: false, optional: false, required: true
    _fallbackBehavior;
    get fallbackBehavior() {
        return this.getStringAttribute('fallback_behavior');
    }
    set fallbackBehavior(value) {
        this._fallbackBehavior = value;
    }
    // Temporarily expose input value. Use with caution.
    get fallbackBehaviorInput() {
        return this._fallbackBehavior;
    }
    // header_name - computed: false, optional: false, required: true
    _headerName;
    get headerName() {
        return this.getStringAttribute('header_name');
    }
    set headerName(value) {
        this._headerName = value;
    }
    // Temporarily expose input value. Use with caution.
    get headerNameInput() {
        return this._headerName;
    }
}
export function wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementGeoMatchStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        country_codes: cdktf.listMapper(cdktf.stringToTerraform)(struct.countryCodes),
        forwarded_ip_config: wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementGeoMatchStatementForwardedIpConfigToTerraform(struct.forwardedIpConfig),
    };
}
export class Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementGeoMatchStatementOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._countryCodes) {
            hasAnyValues = true;
            internalValueResult.countryCodes = this._countryCodes;
        }
        if (this._forwardedIpConfig?.internalValue) {
            hasAnyValues = true;
            internalValueResult.forwardedIpConfig = this._forwardedIpConfig?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._countryCodes = undefined;
            this._forwardedIpConfig.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._countryCodes = value.countryCodes;
            this._forwardedIpConfig.internalValue = value.forwardedIpConfig;
        }
    }
    // country_codes - computed: false, optional: false, required: true
    _countryCodes;
    get countryCodes() {
        return this.getListAttribute('country_codes');
    }
    set countryCodes(value) {
        this._countryCodes = value;
    }
    // Temporarily expose input value. Use with caution.
    get countryCodesInput() {
        return this._countryCodes;
    }
    // forwarded_ip_config - computed: false, optional: true, required: false
    _forwardedIpConfig = new Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementGeoMatchStatementForwardedIpConfigOutputReference(this, "forwarded_ip_config", true);
    get forwardedIpConfig() {
        return this._forwardedIpConfig;
    }
    putForwardedIpConfig(value) {
        this._forwardedIpConfig.internalValue = value;
    }
    resetForwardedIpConfig() {
        this._forwardedIpConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get forwardedIpConfigInput() {
        return this._forwardedIpConfig.internalValue;
    }
}
export function wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementIpSetReferenceStatementIpSetForwardedIpConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        fallback_behavior: cdktf.stringToTerraform(struct.fallbackBehavior),
        header_name: cdktf.stringToTerraform(struct.headerName),
        position: cdktf.stringToTerraform(struct.position),
    };
}
export class Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementIpSetReferenceStatementIpSetForwardedIpConfigOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._fallbackBehavior) {
            hasAnyValues = true;
            internalValueResult.fallbackBehavior = this._fallbackBehavior;
        }
        if (this._headerName) {
            hasAnyValues = true;
            internalValueResult.headerName = this._headerName;
        }
        if (this._position) {
            hasAnyValues = true;
            internalValueResult.position = this._position;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._fallbackBehavior = undefined;
            this._headerName = undefined;
            this._position = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._fallbackBehavior = value.fallbackBehavior;
            this._headerName = value.headerName;
            this._position = value.position;
        }
    }
    // fallback_behavior - computed: false, optional: false, required: true
    _fallbackBehavior;
    get fallbackBehavior() {
        return this.getStringAttribute('fallback_behavior');
    }
    set fallbackBehavior(value) {
        this._fallbackBehavior = value;
    }
    // Temporarily expose input value. Use with caution.
    get fallbackBehaviorInput() {
        return this._fallbackBehavior;
    }
    // header_name - computed: false, optional: false, required: true
    _headerName;
    get headerName() {
        return this.getStringAttribute('header_name');
    }
    set headerName(value) {
        this._headerName = value;
    }
    // Temporarily expose input value. Use with caution.
    get headerNameInput() {
        return this._headerName;
    }
    // position - computed: false, optional: false, required: true
    _position;
    get position() {
        return this.getStringAttribute('position');
    }
    set position(value) {
        this._position = value;
    }
    // Temporarily expose input value. Use with caution.
    get positionInput() {
        return this._position;
    }
}
export function wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementIpSetReferenceStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        arn: cdktf.stringToTerraform(struct.arn),
        ip_set_forwarded_ip_config: wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementIpSetReferenceStatementIpSetForwardedIpConfigToTerraform(struct.ipSetForwardedIpConfig),
    };
}
export class Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementIpSetReferenceStatementOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._arn) {
            hasAnyValues = true;
            internalValueResult.arn = this._arn;
        }
        if (this._ipSetForwardedIpConfig?.internalValue) {
            hasAnyValues = true;
            internalValueResult.ipSetForwardedIpConfig = this._ipSetForwardedIpConfig?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._arn = undefined;
            this._ipSetForwardedIpConfig.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._arn = value.arn;
            this._ipSetForwardedIpConfig.internalValue = value.ipSetForwardedIpConfig;
        }
    }
    // arn - computed: false, optional: false, required: true
    _arn;
    get arn() {
        return this.getStringAttribute('arn');
    }
    set arn(value) {
        this._arn = value;
    }
    // Temporarily expose input value. Use with caution.
    get arnInput() {
        return this._arn;
    }
    // ip_set_forwarded_ip_config - computed: false, optional: true, required: false
    _ipSetForwardedIpConfig = new Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementIpSetReferenceStatementIpSetForwardedIpConfigOutputReference(this, "ip_set_forwarded_ip_config", true);
    get ipSetForwardedIpConfig() {
        return this._ipSetForwardedIpConfig;
    }
    putIpSetForwardedIpConfig(value) {
        this._ipSetForwardedIpConfig.internalValue = value;
    }
    resetIpSetForwardedIpConfig() {
        this._ipSetForwardedIpConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get ipSetForwardedIpConfigInput() {
        return this._ipSetForwardedIpConfig.internalValue;
    }
}
export function wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementLabelMatchStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        key: cdktf.stringToTerraform(struct.key),
        scope: cdktf.stringToTerraform(struct.scope),
    };
}
export class Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementLabelMatchStatementOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._key) {
            hasAnyValues = true;
            internalValueResult.key = this._key;
        }
        if (this._scope) {
            hasAnyValues = true;
            internalValueResult.scope = this._scope;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._key = undefined;
            this._scope = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._key = value.key;
            this._scope = value.scope;
        }
    }
    // key - computed: false, optional: false, required: true
    _key;
    get key() {
        return this.getStringAttribute('key');
    }
    set key(value) {
        this._key = value;
    }
    // Temporarily expose input value. Use with caution.
    get keyInput() {
        return this._key;
    }
    // scope - computed: false, optional: false, required: true
    _scope;
    get scope() {
        return this.getStringAttribute('scope');
    }
    set scope(value) {
        this._scope = value;
    }
    // Temporarily expose input value. Use with caution.
    get scopeInput() {
        return this._scope;
    }
}
export function wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
    };
}
export class Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._name) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._name = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._name = value.name;
        }
    }
    // name - computed: false, optional: false, required: true
    _name;
    get name() {
        return this.getStringAttribute('name');
    }
    set name(value) {
        this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    get nameInput() {
        return this._name;
    }
}
export function wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
    };
}
export class Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._name) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._name = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._name = value.name;
        }
    }
    // name - computed: false, optional: false, required: true
    _name;
    get name() {
        return this.getStringAttribute('name');
    }
    set name(value) {
        this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    get nameInput() {
        return this._name;
    }
}
export function wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        all_query_arguments: wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsToTerraform(struct.allQueryArguments),
        body: wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyToTerraform(struct.body),
        method: wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodToTerraform(struct.method),
        query_string: wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringToTerraform(struct.queryString),
        single_header: wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderToTerraform(struct.singleHeader),
        single_query_argument: wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentToTerraform(struct.singleQueryArgument),
        uri_path: wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathToTerraform(struct.uriPath),
    };
}
export class Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._allQueryArguments?.internalValue) {
            hasAnyValues = true;
            internalValueResult.allQueryArguments = this._allQueryArguments?.internalValue;
        }
        if (this._body?.internalValue) {
            hasAnyValues = true;
            internalValueResult.body = this._body?.internalValue;
        }
        if (this._method?.internalValue) {
            hasAnyValues = true;
            internalValueResult.method = this._method?.internalValue;
        }
        if (this._queryString?.internalValue) {
            hasAnyValues = true;
            internalValueResult.queryString = this._queryString?.internalValue;
        }
        if (this._singleHeader?.internalValue) {
            hasAnyValues = true;
            internalValueResult.singleHeader = this._singleHeader?.internalValue;
        }
        if (this._singleQueryArgument?.internalValue) {
            hasAnyValues = true;
            internalValueResult.singleQueryArgument = this._singleQueryArgument?.internalValue;
        }
        if (this._uriPath?.internalValue) {
            hasAnyValues = true;
            internalValueResult.uriPath = this._uriPath?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._allQueryArguments.internalValue = undefined;
            this._body.internalValue = undefined;
            this._method.internalValue = undefined;
            this._queryString.internalValue = undefined;
            this._singleHeader.internalValue = undefined;
            this._singleQueryArgument.internalValue = undefined;
            this._uriPath.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._allQueryArguments.internalValue = value.allQueryArguments;
            this._body.internalValue = value.body;
            this._method.internalValue = value.method;
            this._queryString.internalValue = value.queryString;
            this._singleHeader.internalValue = value.singleHeader;
            this._singleQueryArgument.internalValue = value.singleQueryArgument;
            this._uriPath.internalValue = value.uriPath;
        }
    }
    // all_query_arguments - computed: false, optional: true, required: false
    _allQueryArguments = new Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsOutputReference(this, "all_query_arguments", true);
    get allQueryArguments() {
        return this._allQueryArguments;
    }
    putAllQueryArguments(value) {
        this._allQueryArguments.internalValue = value;
    }
    resetAllQueryArguments() {
        this._allQueryArguments.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get allQueryArgumentsInput() {
        return this._allQueryArguments.internalValue;
    }
    // body - computed: false, optional: true, required: false
    _body = new Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyOutputReference(this, "body", true);
    get body() {
        return this._body;
    }
    putBody(value) {
        this._body.internalValue = value;
    }
    resetBody() {
        this._body.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get bodyInput() {
        return this._body.internalValue;
    }
    // method - computed: false, optional: true, required: false
    _method = new Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodOutputReference(this, "method", true);
    get method() {
        return this._method;
    }
    putMethod(value) {
        this._method.internalValue = value;
    }
    resetMethod() {
        this._method.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get methodInput() {
        return this._method.internalValue;
    }
    // query_string - computed: false, optional: true, required: false
    _queryString = new Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringOutputReference(this, "query_string", true);
    get queryString() {
        return this._queryString;
    }
    putQueryString(value) {
        this._queryString.internalValue = value;
    }
    resetQueryString() {
        this._queryString.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get queryStringInput() {
        return this._queryString.internalValue;
    }
    // single_header - computed: false, optional: true, required: false
    _singleHeader = new Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderOutputReference(this, "single_header", true);
    get singleHeader() {
        return this._singleHeader;
    }
    putSingleHeader(value) {
        this._singleHeader.internalValue = value;
    }
    resetSingleHeader() {
        this._singleHeader.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get singleHeaderInput() {
        return this._singleHeader.internalValue;
    }
    // single_query_argument - computed: false, optional: true, required: false
    _singleQueryArgument = new Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentOutputReference(this, "single_query_argument", true);
    get singleQueryArgument() {
        return this._singleQueryArgument;
    }
    putSingleQueryArgument(value) {
        this._singleQueryArgument.internalValue = value;
    }
    resetSingleQueryArgument() {
        this._singleQueryArgument.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get singleQueryArgumentInput() {
        return this._singleQueryArgument.internalValue;
    }
    // uri_path - computed: false, optional: true, required: false
    _uriPath = new Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathOutputReference(this, "uri_path", true);
    get uriPath() {
        return this._uriPath;
    }
    putUriPath(value) {
        this._uriPath.internalValue = value;
    }
    resetUriPath() {
        this._uriPath.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get uriPathInput() {
        return this._uriPath.internalValue;
    }
}
export function wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementTextTransformationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        priority: cdktf.numberToTerraform(struct.priority),
        type: cdktf.stringToTerraform(struct.type),
    };
}
export function wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        arn: cdktf.stringToTerraform(struct.arn),
        field_to_match: wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchToTerraform(struct.fieldToMatch),
        text_transformation: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementTextTransformationToTerraform)(struct.textTransformation),
    };
}
export class Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._arn) {
            hasAnyValues = true;
            internalValueResult.arn = this._arn;
        }
        if (this._fieldToMatch?.internalValue) {
            hasAnyValues = true;
            internalValueResult.fieldToMatch = this._fieldToMatch?.internalValue;
        }
        if (this._textTransformation) {
            hasAnyValues = true;
            internalValueResult.textTransformation = this._textTransformation;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._arn = undefined;
            this._fieldToMatch.internalValue = undefined;
            this._textTransformation = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._arn = value.arn;
            this._fieldToMatch.internalValue = value.fieldToMatch;
            this._textTransformation = value.textTransformation;
        }
    }
    // arn - computed: false, optional: false, required: true
    _arn;
    get arn() {
        return this.getStringAttribute('arn');
    }
    set arn(value) {
        this._arn = value;
    }
    // Temporarily expose input value. Use with caution.
    get arnInput() {
        return this._arn;
    }
    // field_to_match - computed: false, optional: true, required: false
    _fieldToMatch = new Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchOutputReference(this, "field_to_match", true);
    get fieldToMatch() {
        return this._fieldToMatch;
    }
    putFieldToMatch(value) {
        this._fieldToMatch.internalValue = value;
    }
    resetFieldToMatch() {
        this._fieldToMatch.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get fieldToMatchInput() {
        return this._fieldToMatch.internalValue;
    }
    // text_transformation - computed: false, optional: false, required: true
    _textTransformation;
    get textTransformation() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('text_transformation');
    }
    set textTransformation(value) {
        this._textTransformation = value;
    }
    // Temporarily expose input value. Use with caution.
    get textTransformationInput() {
        return this._textTransformation;
    }
}
export function wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchBodyToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchMethodToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchQueryStringToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
    };
}
export class Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._name) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._name = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._name = value.name;
        }
    }
    // name - computed: false, optional: false, required: true
    _name;
    get name() {
        return this.getStringAttribute('name');
    }
    set name(value) {
        this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    get nameInput() {
        return this._name;
    }
}
export function wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
    };
}
export class Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._name) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._name = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._name = value.name;
        }
    }
    // name - computed: false, optional: false, required: true
    _name;
    get name() {
        return this.getStringAttribute('name');
    }
    set name(value) {
        this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    get nameInput() {
        return this._name;
    }
}
export function wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchUriPathToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        all_query_arguments: wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsToTerraform(struct.allQueryArguments),
        body: wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchBodyToTerraform(struct.body),
        method: wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchMethodToTerraform(struct.method),
        query_string: wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchQueryStringToTerraform(struct.queryString),
        single_header: wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderToTerraform(struct.singleHeader),
        single_query_argument: wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentToTerraform(struct.singleQueryArgument),
        uri_path: wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchUriPathToTerraform(struct.uriPath),
    };
}
export class Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._allQueryArguments?.internalValue) {
            hasAnyValues = true;
            internalValueResult.allQueryArguments = this._allQueryArguments?.internalValue;
        }
        if (this._body?.internalValue) {
            hasAnyValues = true;
            internalValueResult.body = this._body?.internalValue;
        }
        if (this._method?.internalValue) {
            hasAnyValues = true;
            internalValueResult.method = this._method?.internalValue;
        }
        if (this._queryString?.internalValue) {
            hasAnyValues = true;
            internalValueResult.queryString = this._queryString?.internalValue;
        }
        if (this._singleHeader?.internalValue) {
            hasAnyValues = true;
            internalValueResult.singleHeader = this._singleHeader?.internalValue;
        }
        if (this._singleQueryArgument?.internalValue) {
            hasAnyValues = true;
            internalValueResult.singleQueryArgument = this._singleQueryArgument?.internalValue;
        }
        if (this._uriPath?.internalValue) {
            hasAnyValues = true;
            internalValueResult.uriPath = this._uriPath?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._allQueryArguments.internalValue = undefined;
            this._body.internalValue = undefined;
            this._method.internalValue = undefined;
            this._queryString.internalValue = undefined;
            this._singleHeader.internalValue = undefined;
            this._singleQueryArgument.internalValue = undefined;
            this._uriPath.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._allQueryArguments.internalValue = value.allQueryArguments;
            this._body.internalValue = value.body;
            this._method.internalValue = value.method;
            this._queryString.internalValue = value.queryString;
            this._singleHeader.internalValue = value.singleHeader;
            this._singleQueryArgument.internalValue = value.singleQueryArgument;
            this._uriPath.internalValue = value.uriPath;
        }
    }
    // all_query_arguments - computed: false, optional: true, required: false
    _allQueryArguments = new Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsOutputReference(this, "all_query_arguments", true);
    get allQueryArguments() {
        return this._allQueryArguments;
    }
    putAllQueryArguments(value) {
        this._allQueryArguments.internalValue = value;
    }
    resetAllQueryArguments() {
        this._allQueryArguments.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get allQueryArgumentsInput() {
        return this._allQueryArguments.internalValue;
    }
    // body - computed: false, optional: true, required: false
    _body = new Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchBodyOutputReference(this, "body", true);
    get body() {
        return this._body;
    }
    putBody(value) {
        this._body.internalValue = value;
    }
    resetBody() {
        this._body.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get bodyInput() {
        return this._body.internalValue;
    }
    // method - computed: false, optional: true, required: false
    _method = new Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchMethodOutputReference(this, "method", true);
    get method() {
        return this._method;
    }
    putMethod(value) {
        this._method.internalValue = value;
    }
    resetMethod() {
        this._method.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get methodInput() {
        return this._method.internalValue;
    }
    // query_string - computed: false, optional: true, required: false
    _queryString = new Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchQueryStringOutputReference(this, "query_string", true);
    get queryString() {
        return this._queryString;
    }
    putQueryString(value) {
        this._queryString.internalValue = value;
    }
    resetQueryString() {
        this._queryString.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get queryStringInput() {
        return this._queryString.internalValue;
    }
    // single_header - computed: false, optional: true, required: false
    _singleHeader = new Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderOutputReference(this, "single_header", true);
    get singleHeader() {
        return this._singleHeader;
    }
    putSingleHeader(value) {
        this._singleHeader.internalValue = value;
    }
    resetSingleHeader() {
        this._singleHeader.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get singleHeaderInput() {
        return this._singleHeader.internalValue;
    }
    // single_query_argument - computed: false, optional: true, required: false
    _singleQueryArgument = new Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentOutputReference(this, "single_query_argument", true);
    get singleQueryArgument() {
        return this._singleQueryArgument;
    }
    putSingleQueryArgument(value) {
        this._singleQueryArgument.internalValue = value;
    }
    resetSingleQueryArgument() {
        this._singleQueryArgument.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get singleQueryArgumentInput() {
        return this._singleQueryArgument.internalValue;
    }
    // uri_path - computed: false, optional: true, required: false
    _uriPath = new Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchUriPathOutputReference(this, "uri_path", true);
    get uriPath() {
        return this._uriPath;
    }
    putUriPath(value) {
        this._uriPath.internalValue = value;
    }
    resetUriPath() {
        this._uriPath.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get uriPathInput() {
        return this._uriPath.internalValue;
    }
}
export function wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSizeConstraintStatementTextTransformationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        priority: cdktf.numberToTerraform(struct.priority),
        type: cdktf.stringToTerraform(struct.type),
    };
}
export function wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSizeConstraintStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        comparison_operator: cdktf.stringToTerraform(struct.comparisonOperator),
        size: cdktf.numberToTerraform(struct.size),
        field_to_match: wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchToTerraform(struct.fieldToMatch),
        text_transformation: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSizeConstraintStatementTextTransformationToTerraform)(struct.textTransformation),
    };
}
export class Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSizeConstraintStatementOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._comparisonOperator) {
            hasAnyValues = true;
            internalValueResult.comparisonOperator = this._comparisonOperator;
        }
        if (this._size) {
            hasAnyValues = true;
            internalValueResult.size = this._size;
        }
        if (this._fieldToMatch?.internalValue) {
            hasAnyValues = true;
            internalValueResult.fieldToMatch = this._fieldToMatch?.internalValue;
        }
        if (this._textTransformation) {
            hasAnyValues = true;
            internalValueResult.textTransformation = this._textTransformation;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._comparisonOperator = undefined;
            this._size = undefined;
            this._fieldToMatch.internalValue = undefined;
            this._textTransformation = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._comparisonOperator = value.comparisonOperator;
            this._size = value.size;
            this._fieldToMatch.internalValue = value.fieldToMatch;
            this._textTransformation = value.textTransformation;
        }
    }
    // comparison_operator - computed: false, optional: false, required: true
    _comparisonOperator;
    get comparisonOperator() {
        return this.getStringAttribute('comparison_operator');
    }
    set comparisonOperator(value) {
        this._comparisonOperator = value;
    }
    // Temporarily expose input value. Use with caution.
    get comparisonOperatorInput() {
        return this._comparisonOperator;
    }
    // size - computed: false, optional: false, required: true
    _size;
    get size() {
        return this.getNumberAttribute('size');
    }
    set size(value) {
        this._size = value;
    }
    // Temporarily expose input value. Use with caution.
    get sizeInput() {
        return this._size;
    }
    // field_to_match - computed: false, optional: true, required: false
    _fieldToMatch = new Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchOutputReference(this, "field_to_match", true);
    get fieldToMatch() {
        return this._fieldToMatch;
    }
    putFieldToMatch(value) {
        this._fieldToMatch.internalValue = value;
    }
    resetFieldToMatch() {
        this._fieldToMatch.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get fieldToMatchInput() {
        return this._fieldToMatch.internalValue;
    }
    // text_transformation - computed: false, optional: false, required: true
    _textTransformation;
    get textTransformation() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('text_transformation');
    }
    set textTransformation(value) {
        this._textTransformation = value;
    }
    // Temporarily expose input value. Use with caution.
    get textTransformationInput() {
        return this._textTransformation;
    }
}
export function wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchBodyToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchMethodToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchQueryStringToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleHeaderToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
    };
}
export class Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._name) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._name = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._name = value.name;
        }
    }
    // name - computed: false, optional: false, required: true
    _name;
    get name() {
        return this.getStringAttribute('name');
    }
    set name(value) {
        this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    get nameInput() {
        return this._name;
    }
}
export function wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
    };
}
export class Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._name) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._name = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._name = value.name;
        }
    }
    // name - computed: false, optional: false, required: true
    _name;
    get name() {
        return this.getStringAttribute('name');
    }
    set name(value) {
        this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    get nameInput() {
        return this._name;
    }
}
export function wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchUriPathToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        all_query_arguments: wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct.allQueryArguments),
        body: wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchBodyToTerraform(struct.body),
        method: wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchMethodToTerraform(struct.method),
        query_string: wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchQueryStringToTerraform(struct.queryString),
        single_header: wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleHeaderToTerraform(struct.singleHeader),
        single_query_argument: wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct.singleQueryArgument),
        uri_path: wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchUriPathToTerraform(struct.uriPath),
    };
}
export class Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._allQueryArguments?.internalValue) {
            hasAnyValues = true;
            internalValueResult.allQueryArguments = this._allQueryArguments?.internalValue;
        }
        if (this._body?.internalValue) {
            hasAnyValues = true;
            internalValueResult.body = this._body?.internalValue;
        }
        if (this._method?.internalValue) {
            hasAnyValues = true;
            internalValueResult.method = this._method?.internalValue;
        }
        if (this._queryString?.internalValue) {
            hasAnyValues = true;
            internalValueResult.queryString = this._queryString?.internalValue;
        }
        if (this._singleHeader?.internalValue) {
            hasAnyValues = true;
            internalValueResult.singleHeader = this._singleHeader?.internalValue;
        }
        if (this._singleQueryArgument?.internalValue) {
            hasAnyValues = true;
            internalValueResult.singleQueryArgument = this._singleQueryArgument?.internalValue;
        }
        if (this._uriPath?.internalValue) {
            hasAnyValues = true;
            internalValueResult.uriPath = this._uriPath?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._allQueryArguments.internalValue = undefined;
            this._body.internalValue = undefined;
            this._method.internalValue = undefined;
            this._queryString.internalValue = undefined;
            this._singleHeader.internalValue = undefined;
            this._singleQueryArgument.internalValue = undefined;
            this._uriPath.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._allQueryArguments.internalValue = value.allQueryArguments;
            this._body.internalValue = value.body;
            this._method.internalValue = value.method;
            this._queryString.internalValue = value.queryString;
            this._singleHeader.internalValue = value.singleHeader;
            this._singleQueryArgument.internalValue = value.singleQueryArgument;
            this._uriPath.internalValue = value.uriPath;
        }
    }
    // all_query_arguments - computed: false, optional: true, required: false
    _allQueryArguments = new Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsOutputReference(this, "all_query_arguments", true);
    get allQueryArguments() {
        return this._allQueryArguments;
    }
    putAllQueryArguments(value) {
        this._allQueryArguments.internalValue = value;
    }
    resetAllQueryArguments() {
        this._allQueryArguments.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get allQueryArgumentsInput() {
        return this._allQueryArguments.internalValue;
    }
    // body - computed: false, optional: true, required: false
    _body = new Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchBodyOutputReference(this, "body", true);
    get body() {
        return this._body;
    }
    putBody(value) {
        this._body.internalValue = value;
    }
    resetBody() {
        this._body.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get bodyInput() {
        return this._body.internalValue;
    }
    // method - computed: false, optional: true, required: false
    _method = new Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchMethodOutputReference(this, "method", true);
    get method() {
        return this._method;
    }
    putMethod(value) {
        this._method.internalValue = value;
    }
    resetMethod() {
        this._method.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get methodInput() {
        return this._method.internalValue;
    }
    // query_string - computed: false, optional: true, required: false
    _queryString = new Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchQueryStringOutputReference(this, "query_string", true);
    get queryString() {
        return this._queryString;
    }
    putQueryString(value) {
        this._queryString.internalValue = value;
    }
    resetQueryString() {
        this._queryString.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get queryStringInput() {
        return this._queryString.internalValue;
    }
    // single_header - computed: false, optional: true, required: false
    _singleHeader = new Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleHeaderOutputReference(this, "single_header", true);
    get singleHeader() {
        return this._singleHeader;
    }
    putSingleHeader(value) {
        this._singleHeader.internalValue = value;
    }
    resetSingleHeader() {
        this._singleHeader.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get singleHeaderInput() {
        return this._singleHeader.internalValue;
    }
    // single_query_argument - computed: false, optional: true, required: false
    _singleQueryArgument = new Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentOutputReference(this, "single_query_argument", true);
    get singleQueryArgument() {
        return this._singleQueryArgument;
    }
    putSingleQueryArgument(value) {
        this._singleQueryArgument.internalValue = value;
    }
    resetSingleQueryArgument() {
        this._singleQueryArgument.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get singleQueryArgumentInput() {
        return this._singleQueryArgument.internalValue;
    }
    // uri_path - computed: false, optional: true, required: false
    _uriPath = new Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchUriPathOutputReference(this, "uri_path", true);
    get uriPath() {
        return this._uriPath;
    }
    putUriPath(value) {
        this._uriPath.internalValue = value;
    }
    resetUriPath() {
        this._uriPath.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get uriPathInput() {
        return this._uriPath.internalValue;
    }
}
export function wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSqliMatchStatementTextTransformationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        priority: cdktf.numberToTerraform(struct.priority),
        type: cdktf.stringToTerraform(struct.type),
    };
}
export function wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSqliMatchStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        field_to_match: wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchToTerraform(struct.fieldToMatch),
        text_transformation: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSqliMatchStatementTextTransformationToTerraform)(struct.textTransformation),
    };
}
export class Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSqliMatchStatementOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._fieldToMatch?.internalValue) {
            hasAnyValues = true;
            internalValueResult.fieldToMatch = this._fieldToMatch?.internalValue;
        }
        if (this._textTransformation) {
            hasAnyValues = true;
            internalValueResult.textTransformation = this._textTransformation;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._fieldToMatch.internalValue = undefined;
            this._textTransformation = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._fieldToMatch.internalValue = value.fieldToMatch;
            this._textTransformation = value.textTransformation;
        }
    }
    // field_to_match - computed: false, optional: true, required: false
    _fieldToMatch = new Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchOutputReference(this, "field_to_match", true);
    get fieldToMatch() {
        return this._fieldToMatch;
    }
    putFieldToMatch(value) {
        this._fieldToMatch.internalValue = value;
    }
    resetFieldToMatch() {
        this._fieldToMatch.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get fieldToMatchInput() {
        return this._fieldToMatch.internalValue;
    }
    // text_transformation - computed: false, optional: false, required: true
    _textTransformation;
    get textTransformation() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('text_transformation');
    }
    set textTransformation(value) {
        this._textTransformation = value;
    }
    // Temporarily expose input value. Use with caution.
    get textTransformationInput() {
        return this._textTransformation;
    }
}
export function wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchBodyToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchMethodToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchQueryStringToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleHeaderToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
    };
}
export class Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._name) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._name = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._name = value.name;
        }
    }
    // name - computed: false, optional: false, required: true
    _name;
    get name() {
        return this.getStringAttribute('name');
    }
    set name(value) {
        this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    get nameInput() {
        return this._name;
    }
}
export function wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
    };
}
export class Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._name) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._name = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._name = value.name;
        }
    }
    // name - computed: false, optional: false, required: true
    _name;
    get name() {
        return this.getStringAttribute('name');
    }
    set name(value) {
        this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    get nameInput() {
        return this._name;
    }
}
export function wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchUriPathToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        all_query_arguments: wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct.allQueryArguments),
        body: wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchBodyToTerraform(struct.body),
        method: wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchMethodToTerraform(struct.method),
        query_string: wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchQueryStringToTerraform(struct.queryString),
        single_header: wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleHeaderToTerraform(struct.singleHeader),
        single_query_argument: wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct.singleQueryArgument),
        uri_path: wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchUriPathToTerraform(struct.uriPath),
    };
}
export class Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._allQueryArguments?.internalValue) {
            hasAnyValues = true;
            internalValueResult.allQueryArguments = this._allQueryArguments?.internalValue;
        }
        if (this._body?.internalValue) {
            hasAnyValues = true;
            internalValueResult.body = this._body?.internalValue;
        }
        if (this._method?.internalValue) {
            hasAnyValues = true;
            internalValueResult.method = this._method?.internalValue;
        }
        if (this._queryString?.internalValue) {
            hasAnyValues = true;
            internalValueResult.queryString = this._queryString?.internalValue;
        }
        if (this._singleHeader?.internalValue) {
            hasAnyValues = true;
            internalValueResult.singleHeader = this._singleHeader?.internalValue;
        }
        if (this._singleQueryArgument?.internalValue) {
            hasAnyValues = true;
            internalValueResult.singleQueryArgument = this._singleQueryArgument?.internalValue;
        }
        if (this._uriPath?.internalValue) {
            hasAnyValues = true;
            internalValueResult.uriPath = this._uriPath?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._allQueryArguments.internalValue = undefined;
            this._body.internalValue = undefined;
            this._method.internalValue = undefined;
            this._queryString.internalValue = undefined;
            this._singleHeader.internalValue = undefined;
            this._singleQueryArgument.internalValue = undefined;
            this._uriPath.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._allQueryArguments.internalValue = value.allQueryArguments;
            this._body.internalValue = value.body;
            this._method.internalValue = value.method;
            this._queryString.internalValue = value.queryString;
            this._singleHeader.internalValue = value.singleHeader;
            this._singleQueryArgument.internalValue = value.singleQueryArgument;
            this._uriPath.internalValue = value.uriPath;
        }
    }
    // all_query_arguments - computed: false, optional: true, required: false
    _allQueryArguments = new Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsOutputReference(this, "all_query_arguments", true);
    get allQueryArguments() {
        return this._allQueryArguments;
    }
    putAllQueryArguments(value) {
        this._allQueryArguments.internalValue = value;
    }
    resetAllQueryArguments() {
        this._allQueryArguments.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get allQueryArgumentsInput() {
        return this._allQueryArguments.internalValue;
    }
    // body - computed: false, optional: true, required: false
    _body = new Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchBodyOutputReference(this, "body", true);
    get body() {
        return this._body;
    }
    putBody(value) {
        this._body.internalValue = value;
    }
    resetBody() {
        this._body.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get bodyInput() {
        return this._body.internalValue;
    }
    // method - computed: false, optional: true, required: false
    _method = new Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchMethodOutputReference(this, "method", true);
    get method() {
        return this._method;
    }
    putMethod(value) {
        this._method.internalValue = value;
    }
    resetMethod() {
        this._method.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get methodInput() {
        return this._method.internalValue;
    }
    // query_string - computed: false, optional: true, required: false
    _queryString = new Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchQueryStringOutputReference(this, "query_string", true);
    get queryString() {
        return this._queryString;
    }
    putQueryString(value) {
        this._queryString.internalValue = value;
    }
    resetQueryString() {
        this._queryString.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get queryStringInput() {
        return this._queryString.internalValue;
    }
    // single_header - computed: false, optional: true, required: false
    _singleHeader = new Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleHeaderOutputReference(this, "single_header", true);
    get singleHeader() {
        return this._singleHeader;
    }
    putSingleHeader(value) {
        this._singleHeader.internalValue = value;
    }
    resetSingleHeader() {
        this._singleHeader.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get singleHeaderInput() {
        return this._singleHeader.internalValue;
    }
    // single_query_argument - computed: false, optional: true, required: false
    _singleQueryArgument = new Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentOutputReference(this, "single_query_argument", true);
    get singleQueryArgument() {
        return this._singleQueryArgument;
    }
    putSingleQueryArgument(value) {
        this._singleQueryArgument.internalValue = value;
    }
    resetSingleQueryArgument() {
        this._singleQueryArgument.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get singleQueryArgumentInput() {
        return this._singleQueryArgument.internalValue;
    }
    // uri_path - computed: false, optional: true, required: false
    _uriPath = new Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchUriPathOutputReference(this, "uri_path", true);
    get uriPath() {
        return this._uriPath;
    }
    putUriPath(value) {
        this._uriPath.internalValue = value;
    }
    resetUriPath() {
        this._uriPath.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get uriPathInput() {
        return this._uriPath.internalValue;
    }
}
export function wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementXssMatchStatementTextTransformationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        priority: cdktf.numberToTerraform(struct.priority),
        type: cdktf.stringToTerraform(struct.type),
    };
}
export function wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementXssMatchStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        field_to_match: wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchToTerraform(struct.fieldToMatch),
        text_transformation: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementXssMatchStatementTextTransformationToTerraform)(struct.textTransformation),
    };
}
export class Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementXssMatchStatementOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._fieldToMatch?.internalValue) {
            hasAnyValues = true;
            internalValueResult.fieldToMatch = this._fieldToMatch?.internalValue;
        }
        if (this._textTransformation) {
            hasAnyValues = true;
            internalValueResult.textTransformation = this._textTransformation;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._fieldToMatch.internalValue = undefined;
            this._textTransformation = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._fieldToMatch.internalValue = value.fieldToMatch;
            this._textTransformation = value.textTransformation;
        }
    }
    // field_to_match - computed: false, optional: true, required: false
    _fieldToMatch = new Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchOutputReference(this, "field_to_match", true);
    get fieldToMatch() {
        return this._fieldToMatch;
    }
    putFieldToMatch(value) {
        this._fieldToMatch.internalValue = value;
    }
    resetFieldToMatch() {
        this._fieldToMatch.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get fieldToMatchInput() {
        return this._fieldToMatch.internalValue;
    }
    // text_transformation - computed: false, optional: false, required: true
    _textTransformation;
    get textTransformation() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('text_transformation');
    }
    set textTransformation(value) {
        this._textTransformation = value;
    }
    // Temporarily expose input value. Use with caution.
    get textTransformationInput() {
        return this._textTransformation;
    }
}
export function wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        byte_match_statement: wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementByteMatchStatementToTerraform(struct.byteMatchStatement),
        geo_match_statement: wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementGeoMatchStatementToTerraform(struct.geoMatchStatement),
        ip_set_reference_statement: wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementIpSetReferenceStatementToTerraform(struct.ipSetReferenceStatement),
        label_match_statement: wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementLabelMatchStatementToTerraform(struct.labelMatchStatement),
        regex_pattern_set_reference_statement: wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementToTerraform(struct.regexPatternSetReferenceStatement),
        size_constraint_statement: wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSizeConstraintStatementToTerraform(struct.sizeConstraintStatement),
        sqli_match_statement: wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSqliMatchStatementToTerraform(struct.sqliMatchStatement),
        xss_match_statement: wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementXssMatchStatementToTerraform(struct.xssMatchStatement),
    };
}
export function wafv2RuleGroupRuleStatementNotStatementStatementAndStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        statement: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementToTerraform)(struct.statement),
    };
}
export class Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._statement) {
            hasAnyValues = true;
            internalValueResult.statement = this._statement;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._statement = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._statement = value.statement;
        }
    }
    // statement - computed: false, optional: false, required: true
    _statement;
    get statement() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('statement');
    }
    set statement(value) {
        this._statement = value;
    }
    // Temporarily expose input value. Use with caution.
    get statementInput() {
        return this._statement;
    }
}
export function wafv2RuleGroupRuleStatementNotStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementNotStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementNotStatementStatementByteMatchStatementFieldToMatchBodyToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementNotStatementStatementByteMatchStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementNotStatementStatementByteMatchStatementFieldToMatchMethodToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementNotStatementStatementByteMatchStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementNotStatementStatementByteMatchStatementFieldToMatchQueryStringToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementNotStatementStatementByteMatchStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementNotStatementStatementByteMatchStatementFieldToMatchSingleHeaderToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
    };
}
export class Wafv2RuleGroupRuleStatementNotStatementStatementByteMatchStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._name) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._name = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._name = value.name;
        }
    }
    // name - computed: false, optional: false, required: true
    _name;
    get name() {
        return this.getStringAttribute('name');
    }
    set name(value) {
        this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    get nameInput() {
        return this._name;
    }
}
export function wafv2RuleGroupRuleStatementNotStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
    };
}
export class Wafv2RuleGroupRuleStatementNotStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._name) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._name = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._name = value.name;
        }
    }
    // name - computed: false, optional: false, required: true
    _name;
    get name() {
        return this.getStringAttribute('name');
    }
    set name(value) {
        this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    get nameInput() {
        return this._name;
    }
}
export function wafv2RuleGroupRuleStatementNotStatementStatementByteMatchStatementFieldToMatchUriPathToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementNotStatementStatementByteMatchStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementNotStatementStatementByteMatchStatementFieldToMatchToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        all_query_arguments: wafv2RuleGroupRuleStatementNotStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct.allQueryArguments),
        body: wafv2RuleGroupRuleStatementNotStatementStatementByteMatchStatementFieldToMatchBodyToTerraform(struct.body),
        method: wafv2RuleGroupRuleStatementNotStatementStatementByteMatchStatementFieldToMatchMethodToTerraform(struct.method),
        query_string: wafv2RuleGroupRuleStatementNotStatementStatementByteMatchStatementFieldToMatchQueryStringToTerraform(struct.queryString),
        single_header: wafv2RuleGroupRuleStatementNotStatementStatementByteMatchStatementFieldToMatchSingleHeaderToTerraform(struct.singleHeader),
        single_query_argument: wafv2RuleGroupRuleStatementNotStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct.singleQueryArgument),
        uri_path: wafv2RuleGroupRuleStatementNotStatementStatementByteMatchStatementFieldToMatchUriPathToTerraform(struct.uriPath),
    };
}
export class Wafv2RuleGroupRuleStatementNotStatementStatementByteMatchStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._allQueryArguments?.internalValue) {
            hasAnyValues = true;
            internalValueResult.allQueryArguments = this._allQueryArguments?.internalValue;
        }
        if (this._body?.internalValue) {
            hasAnyValues = true;
            internalValueResult.body = this._body?.internalValue;
        }
        if (this._method?.internalValue) {
            hasAnyValues = true;
            internalValueResult.method = this._method?.internalValue;
        }
        if (this._queryString?.internalValue) {
            hasAnyValues = true;
            internalValueResult.queryString = this._queryString?.internalValue;
        }
        if (this._singleHeader?.internalValue) {
            hasAnyValues = true;
            internalValueResult.singleHeader = this._singleHeader?.internalValue;
        }
        if (this._singleQueryArgument?.internalValue) {
            hasAnyValues = true;
            internalValueResult.singleQueryArgument = this._singleQueryArgument?.internalValue;
        }
        if (this._uriPath?.internalValue) {
            hasAnyValues = true;
            internalValueResult.uriPath = this._uriPath?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._allQueryArguments.internalValue = undefined;
            this._body.internalValue = undefined;
            this._method.internalValue = undefined;
            this._queryString.internalValue = undefined;
            this._singleHeader.internalValue = undefined;
            this._singleQueryArgument.internalValue = undefined;
            this._uriPath.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._allQueryArguments.internalValue = value.allQueryArguments;
            this._body.internalValue = value.body;
            this._method.internalValue = value.method;
            this._queryString.internalValue = value.queryString;
            this._singleHeader.internalValue = value.singleHeader;
            this._singleQueryArgument.internalValue = value.singleQueryArgument;
            this._uriPath.internalValue = value.uriPath;
        }
    }
    // all_query_arguments - computed: false, optional: true, required: false
    _allQueryArguments = new Wafv2RuleGroupRuleStatementNotStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsOutputReference(this, "all_query_arguments", true);
    get allQueryArguments() {
        return this._allQueryArguments;
    }
    putAllQueryArguments(value) {
        this._allQueryArguments.internalValue = value;
    }
    resetAllQueryArguments() {
        this._allQueryArguments.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get allQueryArgumentsInput() {
        return this._allQueryArguments.internalValue;
    }
    // body - computed: false, optional: true, required: false
    _body = new Wafv2RuleGroupRuleStatementNotStatementStatementByteMatchStatementFieldToMatchBodyOutputReference(this, "body", true);
    get body() {
        return this._body;
    }
    putBody(value) {
        this._body.internalValue = value;
    }
    resetBody() {
        this._body.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get bodyInput() {
        return this._body.internalValue;
    }
    // method - computed: false, optional: true, required: false
    _method = new Wafv2RuleGroupRuleStatementNotStatementStatementByteMatchStatementFieldToMatchMethodOutputReference(this, "method", true);
    get method() {
        return this._method;
    }
    putMethod(value) {
        this._method.internalValue = value;
    }
    resetMethod() {
        this._method.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get methodInput() {
        return this._method.internalValue;
    }
    // query_string - computed: false, optional: true, required: false
    _queryString = new Wafv2RuleGroupRuleStatementNotStatementStatementByteMatchStatementFieldToMatchQueryStringOutputReference(this, "query_string", true);
    get queryString() {
        return this._queryString;
    }
    putQueryString(value) {
        this._queryString.internalValue = value;
    }
    resetQueryString() {
        this._queryString.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get queryStringInput() {
        return this._queryString.internalValue;
    }
    // single_header - computed: false, optional: true, required: false
    _singleHeader = new Wafv2RuleGroupRuleStatementNotStatementStatementByteMatchStatementFieldToMatchSingleHeaderOutputReference(this, "single_header", true);
    get singleHeader() {
        return this._singleHeader;
    }
    putSingleHeader(value) {
        this._singleHeader.internalValue = value;
    }
    resetSingleHeader() {
        this._singleHeader.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get singleHeaderInput() {
        return this._singleHeader.internalValue;
    }
    // single_query_argument - computed: false, optional: true, required: false
    _singleQueryArgument = new Wafv2RuleGroupRuleStatementNotStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentOutputReference(this, "single_query_argument", true);
    get singleQueryArgument() {
        return this._singleQueryArgument;
    }
    putSingleQueryArgument(value) {
        this._singleQueryArgument.internalValue = value;
    }
    resetSingleQueryArgument() {
        this._singleQueryArgument.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get singleQueryArgumentInput() {
        return this._singleQueryArgument.internalValue;
    }
    // uri_path - computed: false, optional: true, required: false
    _uriPath = new Wafv2RuleGroupRuleStatementNotStatementStatementByteMatchStatementFieldToMatchUriPathOutputReference(this, "uri_path", true);
    get uriPath() {
        return this._uriPath;
    }
    putUriPath(value) {
        this._uriPath.internalValue = value;
    }
    resetUriPath() {
        this._uriPath.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get uriPathInput() {
        return this._uriPath.internalValue;
    }
}
export function wafv2RuleGroupRuleStatementNotStatementStatementByteMatchStatementTextTransformationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        priority: cdktf.numberToTerraform(struct.priority),
        type: cdktf.stringToTerraform(struct.type),
    };
}
export function wafv2RuleGroupRuleStatementNotStatementStatementByteMatchStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        positional_constraint: cdktf.stringToTerraform(struct.positionalConstraint),
        search_string: cdktf.stringToTerraform(struct.searchString),
        field_to_match: wafv2RuleGroupRuleStatementNotStatementStatementByteMatchStatementFieldToMatchToTerraform(struct.fieldToMatch),
        text_transformation: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementByteMatchStatementTextTransformationToTerraform)(struct.textTransformation),
    };
}
export class Wafv2RuleGroupRuleStatementNotStatementStatementByteMatchStatementOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._positionalConstraint) {
            hasAnyValues = true;
            internalValueResult.positionalConstraint = this._positionalConstraint;
        }
        if (this._searchString) {
            hasAnyValues = true;
            internalValueResult.searchString = this._searchString;
        }
        if (this._fieldToMatch?.internalValue) {
            hasAnyValues = true;
            internalValueResult.fieldToMatch = this._fieldToMatch?.internalValue;
        }
        if (this._textTransformation) {
            hasAnyValues = true;
            internalValueResult.textTransformation = this._textTransformation;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._positionalConstraint = undefined;
            this._searchString = undefined;
            this._fieldToMatch.internalValue = undefined;
            this._textTransformation = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._positionalConstraint = value.positionalConstraint;
            this._searchString = value.searchString;
            this._fieldToMatch.internalValue = value.fieldToMatch;
            this._textTransformation = value.textTransformation;
        }
    }
    // positional_constraint - computed: false, optional: false, required: true
    _positionalConstraint;
    get positionalConstraint() {
        return this.getStringAttribute('positional_constraint');
    }
    set positionalConstraint(value) {
        this._positionalConstraint = value;
    }
    // Temporarily expose input value. Use with caution.
    get positionalConstraintInput() {
        return this._positionalConstraint;
    }
    // search_string - computed: false, optional: false, required: true
    _searchString;
    get searchString() {
        return this.getStringAttribute('search_string');
    }
    set searchString(value) {
        this._searchString = value;
    }
    // Temporarily expose input value. Use with caution.
    get searchStringInput() {
        return this._searchString;
    }
    // field_to_match - computed: false, optional: true, required: false
    _fieldToMatch = new Wafv2RuleGroupRuleStatementNotStatementStatementByteMatchStatementFieldToMatchOutputReference(this, "field_to_match", true);
    get fieldToMatch() {
        return this._fieldToMatch;
    }
    putFieldToMatch(value) {
        this._fieldToMatch.internalValue = value;
    }
    resetFieldToMatch() {
        this._fieldToMatch.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get fieldToMatchInput() {
        return this._fieldToMatch.internalValue;
    }
    // text_transformation - computed: false, optional: false, required: true
    _textTransformation;
    get textTransformation() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('text_transformation');
    }
    set textTransformation(value) {
        this._textTransformation = value;
    }
    // Temporarily expose input value. Use with caution.
    get textTransformationInput() {
        return this._textTransformation;
    }
}
export function wafv2RuleGroupRuleStatementNotStatementStatementGeoMatchStatementForwardedIpConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        fallback_behavior: cdktf.stringToTerraform(struct.fallbackBehavior),
        header_name: cdktf.stringToTerraform(struct.headerName),
    };
}
export class Wafv2RuleGroupRuleStatementNotStatementStatementGeoMatchStatementForwardedIpConfigOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._fallbackBehavior) {
            hasAnyValues = true;
            internalValueResult.fallbackBehavior = this._fallbackBehavior;
        }
        if (this._headerName) {
            hasAnyValues = true;
            internalValueResult.headerName = this._headerName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._fallbackBehavior = undefined;
            this._headerName = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._fallbackBehavior = value.fallbackBehavior;
            this._headerName = value.headerName;
        }
    }
    // fallback_behavior - computed: false, optional: false, required: true
    _fallbackBehavior;
    get fallbackBehavior() {
        return this.getStringAttribute('fallback_behavior');
    }
    set fallbackBehavior(value) {
        this._fallbackBehavior = value;
    }
    // Temporarily expose input value. Use with caution.
    get fallbackBehaviorInput() {
        return this._fallbackBehavior;
    }
    // header_name - computed: false, optional: false, required: true
    _headerName;
    get headerName() {
        return this.getStringAttribute('header_name');
    }
    set headerName(value) {
        this._headerName = value;
    }
    // Temporarily expose input value. Use with caution.
    get headerNameInput() {
        return this._headerName;
    }
}
export function wafv2RuleGroupRuleStatementNotStatementStatementGeoMatchStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        country_codes: cdktf.listMapper(cdktf.stringToTerraform)(struct.countryCodes),
        forwarded_ip_config: wafv2RuleGroupRuleStatementNotStatementStatementGeoMatchStatementForwardedIpConfigToTerraform(struct.forwardedIpConfig),
    };
}
export class Wafv2RuleGroupRuleStatementNotStatementStatementGeoMatchStatementOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._countryCodes) {
            hasAnyValues = true;
            internalValueResult.countryCodes = this._countryCodes;
        }
        if (this._forwardedIpConfig?.internalValue) {
            hasAnyValues = true;
            internalValueResult.forwardedIpConfig = this._forwardedIpConfig?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._countryCodes = undefined;
            this._forwardedIpConfig.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._countryCodes = value.countryCodes;
            this._forwardedIpConfig.internalValue = value.forwardedIpConfig;
        }
    }
    // country_codes - computed: false, optional: false, required: true
    _countryCodes;
    get countryCodes() {
        return this.getListAttribute('country_codes');
    }
    set countryCodes(value) {
        this._countryCodes = value;
    }
    // Temporarily expose input value. Use with caution.
    get countryCodesInput() {
        return this._countryCodes;
    }
    // forwarded_ip_config - computed: false, optional: true, required: false
    _forwardedIpConfig = new Wafv2RuleGroupRuleStatementNotStatementStatementGeoMatchStatementForwardedIpConfigOutputReference(this, "forwarded_ip_config", true);
    get forwardedIpConfig() {
        return this._forwardedIpConfig;
    }
    putForwardedIpConfig(value) {
        this._forwardedIpConfig.internalValue = value;
    }
    resetForwardedIpConfig() {
        this._forwardedIpConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get forwardedIpConfigInput() {
        return this._forwardedIpConfig.internalValue;
    }
}
export function wafv2RuleGroupRuleStatementNotStatementStatementIpSetReferenceStatementIpSetForwardedIpConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        fallback_behavior: cdktf.stringToTerraform(struct.fallbackBehavior),
        header_name: cdktf.stringToTerraform(struct.headerName),
        position: cdktf.stringToTerraform(struct.position),
    };
}
export class Wafv2RuleGroupRuleStatementNotStatementStatementIpSetReferenceStatementIpSetForwardedIpConfigOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._fallbackBehavior) {
            hasAnyValues = true;
            internalValueResult.fallbackBehavior = this._fallbackBehavior;
        }
        if (this._headerName) {
            hasAnyValues = true;
            internalValueResult.headerName = this._headerName;
        }
        if (this._position) {
            hasAnyValues = true;
            internalValueResult.position = this._position;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._fallbackBehavior = undefined;
            this._headerName = undefined;
            this._position = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._fallbackBehavior = value.fallbackBehavior;
            this._headerName = value.headerName;
            this._position = value.position;
        }
    }
    // fallback_behavior - computed: false, optional: false, required: true
    _fallbackBehavior;
    get fallbackBehavior() {
        return this.getStringAttribute('fallback_behavior');
    }
    set fallbackBehavior(value) {
        this._fallbackBehavior = value;
    }
    // Temporarily expose input value. Use with caution.
    get fallbackBehaviorInput() {
        return this._fallbackBehavior;
    }
    // header_name - computed: false, optional: false, required: true
    _headerName;
    get headerName() {
        return this.getStringAttribute('header_name');
    }
    set headerName(value) {
        this._headerName = value;
    }
    // Temporarily expose input value. Use with caution.
    get headerNameInput() {
        return this._headerName;
    }
    // position - computed: false, optional: false, required: true
    _position;
    get position() {
        return this.getStringAttribute('position');
    }
    set position(value) {
        this._position = value;
    }
    // Temporarily expose input value. Use with caution.
    get positionInput() {
        return this._position;
    }
}
export function wafv2RuleGroupRuleStatementNotStatementStatementIpSetReferenceStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        arn: cdktf.stringToTerraform(struct.arn),
        ip_set_forwarded_ip_config: wafv2RuleGroupRuleStatementNotStatementStatementIpSetReferenceStatementIpSetForwardedIpConfigToTerraform(struct.ipSetForwardedIpConfig),
    };
}
export class Wafv2RuleGroupRuleStatementNotStatementStatementIpSetReferenceStatementOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._arn) {
            hasAnyValues = true;
            internalValueResult.arn = this._arn;
        }
        if (this._ipSetForwardedIpConfig?.internalValue) {
            hasAnyValues = true;
            internalValueResult.ipSetForwardedIpConfig = this._ipSetForwardedIpConfig?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._arn = undefined;
            this._ipSetForwardedIpConfig.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._arn = value.arn;
            this._ipSetForwardedIpConfig.internalValue = value.ipSetForwardedIpConfig;
        }
    }
    // arn - computed: false, optional: false, required: true
    _arn;
    get arn() {
        return this.getStringAttribute('arn');
    }
    set arn(value) {
        this._arn = value;
    }
    // Temporarily expose input value. Use with caution.
    get arnInput() {
        return this._arn;
    }
    // ip_set_forwarded_ip_config - computed: false, optional: true, required: false
    _ipSetForwardedIpConfig = new Wafv2RuleGroupRuleStatementNotStatementStatementIpSetReferenceStatementIpSetForwardedIpConfigOutputReference(this, "ip_set_forwarded_ip_config", true);
    get ipSetForwardedIpConfig() {
        return this._ipSetForwardedIpConfig;
    }
    putIpSetForwardedIpConfig(value) {
        this._ipSetForwardedIpConfig.internalValue = value;
    }
    resetIpSetForwardedIpConfig() {
        this._ipSetForwardedIpConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get ipSetForwardedIpConfigInput() {
        return this._ipSetForwardedIpConfig.internalValue;
    }
}
export function wafv2RuleGroupRuleStatementNotStatementStatementLabelMatchStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        key: cdktf.stringToTerraform(struct.key),
        scope: cdktf.stringToTerraform(struct.scope),
    };
}
export class Wafv2RuleGroupRuleStatementNotStatementStatementLabelMatchStatementOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._key) {
            hasAnyValues = true;
            internalValueResult.key = this._key;
        }
        if (this._scope) {
            hasAnyValues = true;
            internalValueResult.scope = this._scope;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._key = undefined;
            this._scope = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._key = value.key;
            this._scope = value.scope;
        }
    }
    // key - computed: false, optional: false, required: true
    _key;
    get key() {
        return this.getStringAttribute('key');
    }
    set key(value) {
        this._key = value;
    }
    // Temporarily expose input value. Use with caution.
    get keyInput() {
        return this._key;
    }
    // scope - computed: false, optional: false, required: true
    _scope;
    get scope() {
        return this.getStringAttribute('scope');
    }
    set scope(value) {
        this._scope = value;
    }
    // Temporarily expose input value. Use with caution.
    get scopeInput() {
        return this._scope;
    }
}
export function wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchBodyToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchMethodToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchQueryStringToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleHeaderToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
    };
}
export class Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._name) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._name = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._name = value.name;
        }
    }
    // name - computed: false, optional: false, required: true
    _name;
    get name() {
        return this.getStringAttribute('name');
    }
    set name(value) {
        this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    get nameInput() {
        return this._name;
    }
}
export function wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
    };
}
export class Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._name) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._name = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._name = value.name;
        }
    }
    // name - computed: false, optional: false, required: true
    _name;
    get name() {
        return this.getStringAttribute('name');
    }
    set name(value) {
        this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    get nameInput() {
        return this._name;
    }
}
export function wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchUriPathToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        all_query_arguments: wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct.allQueryArguments),
        body: wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchBodyToTerraform(struct.body),
        method: wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchMethodToTerraform(struct.method),
        query_string: wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchQueryStringToTerraform(struct.queryString),
        single_header: wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleHeaderToTerraform(struct.singleHeader),
        single_query_argument: wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct.singleQueryArgument),
        uri_path: wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchUriPathToTerraform(struct.uriPath),
    };
}
export class Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._allQueryArguments?.internalValue) {
            hasAnyValues = true;
            internalValueResult.allQueryArguments = this._allQueryArguments?.internalValue;
        }
        if (this._body?.internalValue) {
            hasAnyValues = true;
            internalValueResult.body = this._body?.internalValue;
        }
        if (this._method?.internalValue) {
            hasAnyValues = true;
            internalValueResult.method = this._method?.internalValue;
        }
        if (this._queryString?.internalValue) {
            hasAnyValues = true;
            internalValueResult.queryString = this._queryString?.internalValue;
        }
        if (this._singleHeader?.internalValue) {
            hasAnyValues = true;
            internalValueResult.singleHeader = this._singleHeader?.internalValue;
        }
        if (this._singleQueryArgument?.internalValue) {
            hasAnyValues = true;
            internalValueResult.singleQueryArgument = this._singleQueryArgument?.internalValue;
        }
        if (this._uriPath?.internalValue) {
            hasAnyValues = true;
            internalValueResult.uriPath = this._uriPath?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._allQueryArguments.internalValue = undefined;
            this._body.internalValue = undefined;
            this._method.internalValue = undefined;
            this._queryString.internalValue = undefined;
            this._singleHeader.internalValue = undefined;
            this._singleQueryArgument.internalValue = undefined;
            this._uriPath.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._allQueryArguments.internalValue = value.allQueryArguments;
            this._body.internalValue = value.body;
            this._method.internalValue = value.method;
            this._queryString.internalValue = value.queryString;
            this._singleHeader.internalValue = value.singleHeader;
            this._singleQueryArgument.internalValue = value.singleQueryArgument;
            this._uriPath.internalValue = value.uriPath;
        }
    }
    // all_query_arguments - computed: false, optional: true, required: false
    _allQueryArguments = new Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsOutputReference(this, "all_query_arguments", true);
    get allQueryArguments() {
        return this._allQueryArguments;
    }
    putAllQueryArguments(value) {
        this._allQueryArguments.internalValue = value;
    }
    resetAllQueryArguments() {
        this._allQueryArguments.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get allQueryArgumentsInput() {
        return this._allQueryArguments.internalValue;
    }
    // body - computed: false, optional: true, required: false
    _body = new Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchBodyOutputReference(this, "body", true);
    get body() {
        return this._body;
    }
    putBody(value) {
        this._body.internalValue = value;
    }
    resetBody() {
        this._body.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get bodyInput() {
        return this._body.internalValue;
    }
    // method - computed: false, optional: true, required: false
    _method = new Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchMethodOutputReference(this, "method", true);
    get method() {
        return this._method;
    }
    putMethod(value) {
        this._method.internalValue = value;
    }
    resetMethod() {
        this._method.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get methodInput() {
        return this._method.internalValue;
    }
    // query_string - computed: false, optional: true, required: false
    _queryString = new Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchQueryStringOutputReference(this, "query_string", true);
    get queryString() {
        return this._queryString;
    }
    putQueryString(value) {
        this._queryString.internalValue = value;
    }
    resetQueryString() {
        this._queryString.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get queryStringInput() {
        return this._queryString.internalValue;
    }
    // single_header - computed: false, optional: true, required: false
    _singleHeader = new Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleHeaderOutputReference(this, "single_header", true);
    get singleHeader() {
        return this._singleHeader;
    }
    putSingleHeader(value) {
        this._singleHeader.internalValue = value;
    }
    resetSingleHeader() {
        this._singleHeader.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get singleHeaderInput() {
        return this._singleHeader.internalValue;
    }
    // single_query_argument - computed: false, optional: true, required: false
    _singleQueryArgument = new Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentOutputReference(this, "single_query_argument", true);
    get singleQueryArgument() {
        return this._singleQueryArgument;
    }
    putSingleQueryArgument(value) {
        this._singleQueryArgument.internalValue = value;
    }
    resetSingleQueryArgument() {
        this._singleQueryArgument.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get singleQueryArgumentInput() {
        return this._singleQueryArgument.internalValue;
    }
    // uri_path - computed: false, optional: true, required: false
    _uriPath = new Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchUriPathOutputReference(this, "uri_path", true);
    get uriPath() {
        return this._uriPath;
    }
    putUriPath(value) {
        this._uriPath.internalValue = value;
    }
    resetUriPath() {
        this._uriPath.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get uriPathInput() {
        return this._uriPath.internalValue;
    }
}
export function wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementByteMatchStatementTextTransformationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        priority: cdktf.numberToTerraform(struct.priority),
        type: cdktf.stringToTerraform(struct.type),
    };
}
export function wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementByteMatchStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        positional_constraint: cdktf.stringToTerraform(struct.positionalConstraint),
        search_string: cdktf.stringToTerraform(struct.searchString),
        field_to_match: wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchToTerraform(struct.fieldToMatch),
        text_transformation: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementByteMatchStatementTextTransformationToTerraform)(struct.textTransformation),
    };
}
export class Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementByteMatchStatementOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._positionalConstraint) {
            hasAnyValues = true;
            internalValueResult.positionalConstraint = this._positionalConstraint;
        }
        if (this._searchString) {
            hasAnyValues = true;
            internalValueResult.searchString = this._searchString;
        }
        if (this._fieldToMatch?.internalValue) {
            hasAnyValues = true;
            internalValueResult.fieldToMatch = this._fieldToMatch?.internalValue;
        }
        if (this._textTransformation) {
            hasAnyValues = true;
            internalValueResult.textTransformation = this._textTransformation;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._positionalConstraint = undefined;
            this._searchString = undefined;
            this._fieldToMatch.internalValue = undefined;
            this._textTransformation = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._positionalConstraint = value.positionalConstraint;
            this._searchString = value.searchString;
            this._fieldToMatch.internalValue = value.fieldToMatch;
            this._textTransformation = value.textTransformation;
        }
    }
    // positional_constraint - computed: false, optional: false, required: true
    _positionalConstraint;
    get positionalConstraint() {
        return this.getStringAttribute('positional_constraint');
    }
    set positionalConstraint(value) {
        this._positionalConstraint = value;
    }
    // Temporarily expose input value. Use with caution.
    get positionalConstraintInput() {
        return this._positionalConstraint;
    }
    // search_string - computed: false, optional: false, required: true
    _searchString;
    get searchString() {
        return this.getStringAttribute('search_string');
    }
    set searchString(value) {
        this._searchString = value;
    }
    // Temporarily expose input value. Use with caution.
    get searchStringInput() {
        return this._searchString;
    }
    // field_to_match - computed: false, optional: true, required: false
    _fieldToMatch = new Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchOutputReference(this, "field_to_match", true);
    get fieldToMatch() {
        return this._fieldToMatch;
    }
    putFieldToMatch(value) {
        this._fieldToMatch.internalValue = value;
    }
    resetFieldToMatch() {
        this._fieldToMatch.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get fieldToMatchInput() {
        return this._fieldToMatch.internalValue;
    }
    // text_transformation - computed: false, optional: false, required: true
    _textTransformation;
    get textTransformation() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('text_transformation');
    }
    set textTransformation(value) {
        this._textTransformation = value;
    }
    // Temporarily expose input value. Use with caution.
    get textTransformationInput() {
        return this._textTransformation;
    }
}
export function wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementGeoMatchStatementForwardedIpConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        fallback_behavior: cdktf.stringToTerraform(struct.fallbackBehavior),
        header_name: cdktf.stringToTerraform(struct.headerName),
    };
}
export class Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementGeoMatchStatementForwardedIpConfigOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._fallbackBehavior) {
            hasAnyValues = true;
            internalValueResult.fallbackBehavior = this._fallbackBehavior;
        }
        if (this._headerName) {
            hasAnyValues = true;
            internalValueResult.headerName = this._headerName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._fallbackBehavior = undefined;
            this._headerName = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._fallbackBehavior = value.fallbackBehavior;
            this._headerName = value.headerName;
        }
    }
    // fallback_behavior - computed: false, optional: false, required: true
    _fallbackBehavior;
    get fallbackBehavior() {
        return this.getStringAttribute('fallback_behavior');
    }
    set fallbackBehavior(value) {
        this._fallbackBehavior = value;
    }
    // Temporarily expose input value. Use with caution.
    get fallbackBehaviorInput() {
        return this._fallbackBehavior;
    }
    // header_name - computed: false, optional: false, required: true
    _headerName;
    get headerName() {
        return this.getStringAttribute('header_name');
    }
    set headerName(value) {
        this._headerName = value;
    }
    // Temporarily expose input value. Use with caution.
    get headerNameInput() {
        return this._headerName;
    }
}
export function wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementGeoMatchStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        country_codes: cdktf.listMapper(cdktf.stringToTerraform)(struct.countryCodes),
        forwarded_ip_config: wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementGeoMatchStatementForwardedIpConfigToTerraform(struct.forwardedIpConfig),
    };
}
export class Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementGeoMatchStatementOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._countryCodes) {
            hasAnyValues = true;
            internalValueResult.countryCodes = this._countryCodes;
        }
        if (this._forwardedIpConfig?.internalValue) {
            hasAnyValues = true;
            internalValueResult.forwardedIpConfig = this._forwardedIpConfig?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._countryCodes = undefined;
            this._forwardedIpConfig.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._countryCodes = value.countryCodes;
            this._forwardedIpConfig.internalValue = value.forwardedIpConfig;
        }
    }
    // country_codes - computed: false, optional: false, required: true
    _countryCodes;
    get countryCodes() {
        return this.getListAttribute('country_codes');
    }
    set countryCodes(value) {
        this._countryCodes = value;
    }
    // Temporarily expose input value. Use with caution.
    get countryCodesInput() {
        return this._countryCodes;
    }
    // forwarded_ip_config - computed: false, optional: true, required: false
    _forwardedIpConfig = new Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementGeoMatchStatementForwardedIpConfigOutputReference(this, "forwarded_ip_config", true);
    get forwardedIpConfig() {
        return this._forwardedIpConfig;
    }
    putForwardedIpConfig(value) {
        this._forwardedIpConfig.internalValue = value;
    }
    resetForwardedIpConfig() {
        this._forwardedIpConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get forwardedIpConfigInput() {
        return this._forwardedIpConfig.internalValue;
    }
}
export function wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementIpSetReferenceStatementIpSetForwardedIpConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        fallback_behavior: cdktf.stringToTerraform(struct.fallbackBehavior),
        header_name: cdktf.stringToTerraform(struct.headerName),
        position: cdktf.stringToTerraform(struct.position),
    };
}
export class Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementIpSetReferenceStatementIpSetForwardedIpConfigOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._fallbackBehavior) {
            hasAnyValues = true;
            internalValueResult.fallbackBehavior = this._fallbackBehavior;
        }
        if (this._headerName) {
            hasAnyValues = true;
            internalValueResult.headerName = this._headerName;
        }
        if (this._position) {
            hasAnyValues = true;
            internalValueResult.position = this._position;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._fallbackBehavior = undefined;
            this._headerName = undefined;
            this._position = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._fallbackBehavior = value.fallbackBehavior;
            this._headerName = value.headerName;
            this._position = value.position;
        }
    }
    // fallback_behavior - computed: false, optional: false, required: true
    _fallbackBehavior;
    get fallbackBehavior() {
        return this.getStringAttribute('fallback_behavior');
    }
    set fallbackBehavior(value) {
        this._fallbackBehavior = value;
    }
    // Temporarily expose input value. Use with caution.
    get fallbackBehaviorInput() {
        return this._fallbackBehavior;
    }
    // header_name - computed: false, optional: false, required: true
    _headerName;
    get headerName() {
        return this.getStringAttribute('header_name');
    }
    set headerName(value) {
        this._headerName = value;
    }
    // Temporarily expose input value. Use with caution.
    get headerNameInput() {
        return this._headerName;
    }
    // position - computed: false, optional: false, required: true
    _position;
    get position() {
        return this.getStringAttribute('position');
    }
    set position(value) {
        this._position = value;
    }
    // Temporarily expose input value. Use with caution.
    get positionInput() {
        return this._position;
    }
}
export function wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementIpSetReferenceStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        arn: cdktf.stringToTerraform(struct.arn),
        ip_set_forwarded_ip_config: wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementIpSetReferenceStatementIpSetForwardedIpConfigToTerraform(struct.ipSetForwardedIpConfig),
    };
}
export class Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementIpSetReferenceStatementOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._arn) {
            hasAnyValues = true;
            internalValueResult.arn = this._arn;
        }
        if (this._ipSetForwardedIpConfig?.internalValue) {
            hasAnyValues = true;
            internalValueResult.ipSetForwardedIpConfig = this._ipSetForwardedIpConfig?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._arn = undefined;
            this._ipSetForwardedIpConfig.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._arn = value.arn;
            this._ipSetForwardedIpConfig.internalValue = value.ipSetForwardedIpConfig;
        }
    }
    // arn - computed: false, optional: false, required: true
    _arn;
    get arn() {
        return this.getStringAttribute('arn');
    }
    set arn(value) {
        this._arn = value;
    }
    // Temporarily expose input value. Use with caution.
    get arnInput() {
        return this._arn;
    }
    // ip_set_forwarded_ip_config - computed: false, optional: true, required: false
    _ipSetForwardedIpConfig = new Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementIpSetReferenceStatementIpSetForwardedIpConfigOutputReference(this, "ip_set_forwarded_ip_config", true);
    get ipSetForwardedIpConfig() {
        return this._ipSetForwardedIpConfig;
    }
    putIpSetForwardedIpConfig(value) {
        this._ipSetForwardedIpConfig.internalValue = value;
    }
    resetIpSetForwardedIpConfig() {
        this._ipSetForwardedIpConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get ipSetForwardedIpConfigInput() {
        return this._ipSetForwardedIpConfig.internalValue;
    }
}
export function wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementLabelMatchStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        key: cdktf.stringToTerraform(struct.key),
        scope: cdktf.stringToTerraform(struct.scope),
    };
}
export class Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementLabelMatchStatementOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._key) {
            hasAnyValues = true;
            internalValueResult.key = this._key;
        }
        if (this._scope) {
            hasAnyValues = true;
            internalValueResult.scope = this._scope;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._key = undefined;
            this._scope = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._key = value.key;
            this._scope = value.scope;
        }
    }
    // key - computed: false, optional: false, required: true
    _key;
    get key() {
        return this.getStringAttribute('key');
    }
    set key(value) {
        this._key = value;
    }
    // Temporarily expose input value. Use with caution.
    get keyInput() {
        return this._key;
    }
    // scope - computed: false, optional: false, required: true
    _scope;
    get scope() {
        return this.getStringAttribute('scope');
    }
    set scope(value) {
        this._scope = value;
    }
    // Temporarily expose input value. Use with caution.
    get scopeInput() {
        return this._scope;
    }
}
export function wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
    };
}
export class Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._name) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._name = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._name = value.name;
        }
    }
    // name - computed: false, optional: false, required: true
    _name;
    get name() {
        return this.getStringAttribute('name');
    }
    set name(value) {
        this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    get nameInput() {
        return this._name;
    }
}
export function wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
    };
}
export class Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._name) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._name = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._name = value.name;
        }
    }
    // name - computed: false, optional: false, required: true
    _name;
    get name() {
        return this.getStringAttribute('name');
    }
    set name(value) {
        this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    get nameInput() {
        return this._name;
    }
}
export function wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        all_query_arguments: wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsToTerraform(struct.allQueryArguments),
        body: wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyToTerraform(struct.body),
        method: wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodToTerraform(struct.method),
        query_string: wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringToTerraform(struct.queryString),
        single_header: wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderToTerraform(struct.singleHeader),
        single_query_argument: wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentToTerraform(struct.singleQueryArgument),
        uri_path: wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathToTerraform(struct.uriPath),
    };
}
export class Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._allQueryArguments?.internalValue) {
            hasAnyValues = true;
            internalValueResult.allQueryArguments = this._allQueryArguments?.internalValue;
        }
        if (this._body?.internalValue) {
            hasAnyValues = true;
            internalValueResult.body = this._body?.internalValue;
        }
        if (this._method?.internalValue) {
            hasAnyValues = true;
            internalValueResult.method = this._method?.internalValue;
        }
        if (this._queryString?.internalValue) {
            hasAnyValues = true;
            internalValueResult.queryString = this._queryString?.internalValue;
        }
        if (this._singleHeader?.internalValue) {
            hasAnyValues = true;
            internalValueResult.singleHeader = this._singleHeader?.internalValue;
        }
        if (this._singleQueryArgument?.internalValue) {
            hasAnyValues = true;
            internalValueResult.singleQueryArgument = this._singleQueryArgument?.internalValue;
        }
        if (this._uriPath?.internalValue) {
            hasAnyValues = true;
            internalValueResult.uriPath = this._uriPath?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._allQueryArguments.internalValue = undefined;
            this._body.internalValue = undefined;
            this._method.internalValue = undefined;
            this._queryString.internalValue = undefined;
            this._singleHeader.internalValue = undefined;
            this._singleQueryArgument.internalValue = undefined;
            this._uriPath.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._allQueryArguments.internalValue = value.allQueryArguments;
            this._body.internalValue = value.body;
            this._method.internalValue = value.method;
            this._queryString.internalValue = value.queryString;
            this._singleHeader.internalValue = value.singleHeader;
            this._singleQueryArgument.internalValue = value.singleQueryArgument;
            this._uriPath.internalValue = value.uriPath;
        }
    }
    // all_query_arguments - computed: false, optional: true, required: false
    _allQueryArguments = new Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsOutputReference(this, "all_query_arguments", true);
    get allQueryArguments() {
        return this._allQueryArguments;
    }
    putAllQueryArguments(value) {
        this._allQueryArguments.internalValue = value;
    }
    resetAllQueryArguments() {
        this._allQueryArguments.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get allQueryArgumentsInput() {
        return this._allQueryArguments.internalValue;
    }
    // body - computed: false, optional: true, required: false
    _body = new Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyOutputReference(this, "body", true);
    get body() {
        return this._body;
    }
    putBody(value) {
        this._body.internalValue = value;
    }
    resetBody() {
        this._body.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get bodyInput() {
        return this._body.internalValue;
    }
    // method - computed: false, optional: true, required: false
    _method = new Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodOutputReference(this, "method", true);
    get method() {
        return this._method;
    }
    putMethod(value) {
        this._method.internalValue = value;
    }
    resetMethod() {
        this._method.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get methodInput() {
        return this._method.internalValue;
    }
    // query_string - computed: false, optional: true, required: false
    _queryString = new Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringOutputReference(this, "query_string", true);
    get queryString() {
        return this._queryString;
    }
    putQueryString(value) {
        this._queryString.internalValue = value;
    }
    resetQueryString() {
        this._queryString.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get queryStringInput() {
        return this._queryString.internalValue;
    }
    // single_header - computed: false, optional: true, required: false
    _singleHeader = new Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderOutputReference(this, "single_header", true);
    get singleHeader() {
        return this._singleHeader;
    }
    putSingleHeader(value) {
        this._singleHeader.internalValue = value;
    }
    resetSingleHeader() {
        this._singleHeader.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get singleHeaderInput() {
        return this._singleHeader.internalValue;
    }
    // single_query_argument - computed: false, optional: true, required: false
    _singleQueryArgument = new Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentOutputReference(this, "single_query_argument", true);
    get singleQueryArgument() {
        return this._singleQueryArgument;
    }
    putSingleQueryArgument(value) {
        this._singleQueryArgument.internalValue = value;
    }
    resetSingleQueryArgument() {
        this._singleQueryArgument.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get singleQueryArgumentInput() {
        return this._singleQueryArgument.internalValue;
    }
    // uri_path - computed: false, optional: true, required: false
    _uriPath = new Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathOutputReference(this, "uri_path", true);
    get uriPath() {
        return this._uriPath;
    }
    putUriPath(value) {
        this._uriPath.internalValue = value;
    }
    resetUriPath() {
        this._uriPath.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get uriPathInput() {
        return this._uriPath.internalValue;
    }
}
export function wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementTextTransformationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        priority: cdktf.numberToTerraform(struct.priority),
        type: cdktf.stringToTerraform(struct.type),
    };
}
export function wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        arn: cdktf.stringToTerraform(struct.arn),
        field_to_match: wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchToTerraform(struct.fieldToMatch),
        text_transformation: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementTextTransformationToTerraform)(struct.textTransformation),
    };
}
export class Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._arn) {
            hasAnyValues = true;
            internalValueResult.arn = this._arn;
        }
        if (this._fieldToMatch?.internalValue) {
            hasAnyValues = true;
            internalValueResult.fieldToMatch = this._fieldToMatch?.internalValue;
        }
        if (this._textTransformation) {
            hasAnyValues = true;
            internalValueResult.textTransformation = this._textTransformation;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._arn = undefined;
            this._fieldToMatch.internalValue = undefined;
            this._textTransformation = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._arn = value.arn;
            this._fieldToMatch.internalValue = value.fieldToMatch;
            this._textTransformation = value.textTransformation;
        }
    }
    // arn - computed: false, optional: false, required: true
    _arn;
    get arn() {
        return this.getStringAttribute('arn');
    }
    set arn(value) {
        this._arn = value;
    }
    // Temporarily expose input value. Use with caution.
    get arnInput() {
        return this._arn;
    }
    // field_to_match - computed: false, optional: true, required: false
    _fieldToMatch = new Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchOutputReference(this, "field_to_match", true);
    get fieldToMatch() {
        return this._fieldToMatch;
    }
    putFieldToMatch(value) {
        this._fieldToMatch.internalValue = value;
    }
    resetFieldToMatch() {
        this._fieldToMatch.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get fieldToMatchInput() {
        return this._fieldToMatch.internalValue;
    }
    // text_transformation - computed: false, optional: false, required: true
    _textTransformation;
    get textTransformation() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('text_transformation');
    }
    set textTransformation(value) {
        this._textTransformation = value;
    }
    // Temporarily expose input value. Use with caution.
    get textTransformationInput() {
        return this._textTransformation;
    }
}
export function wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchBodyToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchMethodToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchQueryStringToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
    };
}
export class Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._name) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._name = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._name = value.name;
        }
    }
    // name - computed: false, optional: false, required: true
    _name;
    get name() {
        return this.getStringAttribute('name');
    }
    set name(value) {
        this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    get nameInput() {
        return this._name;
    }
}
export function wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
    };
}
export class Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._name) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._name = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._name = value.name;
        }
    }
    // name - computed: false, optional: false, required: true
    _name;
    get name() {
        return this.getStringAttribute('name');
    }
    set name(value) {
        this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    get nameInput() {
        return this._name;
    }
}
export function wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchUriPathToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        all_query_arguments: wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsToTerraform(struct.allQueryArguments),
        body: wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchBodyToTerraform(struct.body),
        method: wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchMethodToTerraform(struct.method),
        query_string: wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchQueryStringToTerraform(struct.queryString),
        single_header: wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderToTerraform(struct.singleHeader),
        single_query_argument: wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentToTerraform(struct.singleQueryArgument),
        uri_path: wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchUriPathToTerraform(struct.uriPath),
    };
}
export class Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._allQueryArguments?.internalValue) {
            hasAnyValues = true;
            internalValueResult.allQueryArguments = this._allQueryArguments?.internalValue;
        }
        if (this._body?.internalValue) {
            hasAnyValues = true;
            internalValueResult.body = this._body?.internalValue;
        }
        if (this._method?.internalValue) {
            hasAnyValues = true;
            internalValueResult.method = this._method?.internalValue;
        }
        if (this._queryString?.internalValue) {
            hasAnyValues = true;
            internalValueResult.queryString = this._queryString?.internalValue;
        }
        if (this._singleHeader?.internalValue) {
            hasAnyValues = true;
            internalValueResult.singleHeader = this._singleHeader?.internalValue;
        }
        if (this._singleQueryArgument?.internalValue) {
            hasAnyValues = true;
            internalValueResult.singleQueryArgument = this._singleQueryArgument?.internalValue;
        }
        if (this._uriPath?.internalValue) {
            hasAnyValues = true;
            internalValueResult.uriPath = this._uriPath?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._allQueryArguments.internalValue = undefined;
            this._body.internalValue = undefined;
            this._method.internalValue = undefined;
            this._queryString.internalValue = undefined;
            this._singleHeader.internalValue = undefined;
            this._singleQueryArgument.internalValue = undefined;
            this._uriPath.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._allQueryArguments.internalValue = value.allQueryArguments;
            this._body.internalValue = value.body;
            this._method.internalValue = value.method;
            this._queryString.internalValue = value.queryString;
            this._singleHeader.internalValue = value.singleHeader;
            this._singleQueryArgument.internalValue = value.singleQueryArgument;
            this._uriPath.internalValue = value.uriPath;
        }
    }
    // all_query_arguments - computed: false, optional: true, required: false
    _allQueryArguments = new Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsOutputReference(this, "all_query_arguments", true);
    get allQueryArguments() {
        return this._allQueryArguments;
    }
    putAllQueryArguments(value) {
        this._allQueryArguments.internalValue = value;
    }
    resetAllQueryArguments() {
        this._allQueryArguments.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get allQueryArgumentsInput() {
        return this._allQueryArguments.internalValue;
    }
    // body - computed: false, optional: true, required: false
    _body = new Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchBodyOutputReference(this, "body", true);
    get body() {
        return this._body;
    }
    putBody(value) {
        this._body.internalValue = value;
    }
    resetBody() {
        this._body.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get bodyInput() {
        return this._body.internalValue;
    }
    // method - computed: false, optional: true, required: false
    _method = new Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchMethodOutputReference(this, "method", true);
    get method() {
        return this._method;
    }
    putMethod(value) {
        this._method.internalValue = value;
    }
    resetMethod() {
        this._method.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get methodInput() {
        return this._method.internalValue;
    }
    // query_string - computed: false, optional: true, required: false
    _queryString = new Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchQueryStringOutputReference(this, "query_string", true);
    get queryString() {
        return this._queryString;
    }
    putQueryString(value) {
        this._queryString.internalValue = value;
    }
    resetQueryString() {
        this._queryString.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get queryStringInput() {
        return this._queryString.internalValue;
    }
    // single_header - computed: false, optional: true, required: false
    _singleHeader = new Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderOutputReference(this, "single_header", true);
    get singleHeader() {
        return this._singleHeader;
    }
    putSingleHeader(value) {
        this._singleHeader.internalValue = value;
    }
    resetSingleHeader() {
        this._singleHeader.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get singleHeaderInput() {
        return this._singleHeader.internalValue;
    }
    // single_query_argument - computed: false, optional: true, required: false
    _singleQueryArgument = new Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentOutputReference(this, "single_query_argument", true);
    get singleQueryArgument() {
        return this._singleQueryArgument;
    }
    putSingleQueryArgument(value) {
        this._singleQueryArgument.internalValue = value;
    }
    resetSingleQueryArgument() {
        this._singleQueryArgument.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get singleQueryArgumentInput() {
        return this._singleQueryArgument.internalValue;
    }
    // uri_path - computed: false, optional: true, required: false
    _uriPath = new Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchUriPathOutputReference(this, "uri_path", true);
    get uriPath() {
        return this._uriPath;
    }
    putUriPath(value) {
        this._uriPath.internalValue = value;
    }
    resetUriPath() {
        this._uriPath.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get uriPathInput() {
        return this._uriPath.internalValue;
    }
}
export function wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSizeConstraintStatementTextTransformationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        priority: cdktf.numberToTerraform(struct.priority),
        type: cdktf.stringToTerraform(struct.type),
    };
}
export function wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSizeConstraintStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        comparison_operator: cdktf.stringToTerraform(struct.comparisonOperator),
        size: cdktf.numberToTerraform(struct.size),
        field_to_match: wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchToTerraform(struct.fieldToMatch),
        text_transformation: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSizeConstraintStatementTextTransformationToTerraform)(struct.textTransformation),
    };
}
export class Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSizeConstraintStatementOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._comparisonOperator) {
            hasAnyValues = true;
            internalValueResult.comparisonOperator = this._comparisonOperator;
        }
        if (this._size) {
            hasAnyValues = true;
            internalValueResult.size = this._size;
        }
        if (this._fieldToMatch?.internalValue) {
            hasAnyValues = true;
            internalValueResult.fieldToMatch = this._fieldToMatch?.internalValue;
        }
        if (this._textTransformation) {
            hasAnyValues = true;
            internalValueResult.textTransformation = this._textTransformation;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._comparisonOperator = undefined;
            this._size = undefined;
            this._fieldToMatch.internalValue = undefined;
            this._textTransformation = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._comparisonOperator = value.comparisonOperator;
            this._size = value.size;
            this._fieldToMatch.internalValue = value.fieldToMatch;
            this._textTransformation = value.textTransformation;
        }
    }
    // comparison_operator - computed: false, optional: false, required: true
    _comparisonOperator;
    get comparisonOperator() {
        return this.getStringAttribute('comparison_operator');
    }
    set comparisonOperator(value) {
        this._comparisonOperator = value;
    }
    // Temporarily expose input value. Use with caution.
    get comparisonOperatorInput() {
        return this._comparisonOperator;
    }
    // size - computed: false, optional: false, required: true
    _size;
    get size() {
        return this.getNumberAttribute('size');
    }
    set size(value) {
        this._size = value;
    }
    // Temporarily expose input value. Use with caution.
    get sizeInput() {
        return this._size;
    }
    // field_to_match - computed: false, optional: true, required: false
    _fieldToMatch = new Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchOutputReference(this, "field_to_match", true);
    get fieldToMatch() {
        return this._fieldToMatch;
    }
    putFieldToMatch(value) {
        this._fieldToMatch.internalValue = value;
    }
    resetFieldToMatch() {
        this._fieldToMatch.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get fieldToMatchInput() {
        return this._fieldToMatch.internalValue;
    }
    // text_transformation - computed: false, optional: false, required: true
    _textTransformation;
    get textTransformation() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('text_transformation');
    }
    set textTransformation(value) {
        this._textTransformation = value;
    }
    // Temporarily expose input value. Use with caution.
    get textTransformationInput() {
        return this._textTransformation;
    }
}
export function wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchBodyToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchMethodToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchQueryStringToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleHeaderToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
    };
}
export class Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._name) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._name = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._name = value.name;
        }
    }
    // name - computed: false, optional: false, required: true
    _name;
    get name() {
        return this.getStringAttribute('name');
    }
    set name(value) {
        this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    get nameInput() {
        return this._name;
    }
}
export function wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
    };
}
export class Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._name) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._name = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._name = value.name;
        }
    }
    // name - computed: false, optional: false, required: true
    _name;
    get name() {
        return this.getStringAttribute('name');
    }
    set name(value) {
        this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    get nameInput() {
        return this._name;
    }
}
export function wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchUriPathToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        all_query_arguments: wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct.allQueryArguments),
        body: wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchBodyToTerraform(struct.body),
        method: wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchMethodToTerraform(struct.method),
        query_string: wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchQueryStringToTerraform(struct.queryString),
        single_header: wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleHeaderToTerraform(struct.singleHeader),
        single_query_argument: wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct.singleQueryArgument),
        uri_path: wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchUriPathToTerraform(struct.uriPath),
    };
}
export class Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._allQueryArguments?.internalValue) {
            hasAnyValues = true;
            internalValueResult.allQueryArguments = this._allQueryArguments?.internalValue;
        }
        if (this._body?.internalValue) {
            hasAnyValues = true;
            internalValueResult.body = this._body?.internalValue;
        }
        if (this._method?.internalValue) {
            hasAnyValues = true;
            internalValueResult.method = this._method?.internalValue;
        }
        if (this._queryString?.internalValue) {
            hasAnyValues = true;
            internalValueResult.queryString = this._queryString?.internalValue;
        }
        if (this._singleHeader?.internalValue) {
            hasAnyValues = true;
            internalValueResult.singleHeader = this._singleHeader?.internalValue;
        }
        if (this._singleQueryArgument?.internalValue) {
            hasAnyValues = true;
            internalValueResult.singleQueryArgument = this._singleQueryArgument?.internalValue;
        }
        if (this._uriPath?.internalValue) {
            hasAnyValues = true;
            internalValueResult.uriPath = this._uriPath?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._allQueryArguments.internalValue = undefined;
            this._body.internalValue = undefined;
            this._method.internalValue = undefined;
            this._queryString.internalValue = undefined;
            this._singleHeader.internalValue = undefined;
            this._singleQueryArgument.internalValue = undefined;
            this._uriPath.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._allQueryArguments.internalValue = value.allQueryArguments;
            this._body.internalValue = value.body;
            this._method.internalValue = value.method;
            this._queryString.internalValue = value.queryString;
            this._singleHeader.internalValue = value.singleHeader;
            this._singleQueryArgument.internalValue = value.singleQueryArgument;
            this._uriPath.internalValue = value.uriPath;
        }
    }
    // all_query_arguments - computed: false, optional: true, required: false
    _allQueryArguments = new Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsOutputReference(this, "all_query_arguments", true);
    get allQueryArguments() {
        return this._allQueryArguments;
    }
    putAllQueryArguments(value) {
        this._allQueryArguments.internalValue = value;
    }
    resetAllQueryArguments() {
        this._allQueryArguments.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get allQueryArgumentsInput() {
        return this._allQueryArguments.internalValue;
    }
    // body - computed: false, optional: true, required: false
    _body = new Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchBodyOutputReference(this, "body", true);
    get body() {
        return this._body;
    }
    putBody(value) {
        this._body.internalValue = value;
    }
    resetBody() {
        this._body.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get bodyInput() {
        return this._body.internalValue;
    }
    // method - computed: false, optional: true, required: false
    _method = new Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchMethodOutputReference(this, "method", true);
    get method() {
        return this._method;
    }
    putMethod(value) {
        this._method.internalValue = value;
    }
    resetMethod() {
        this._method.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get methodInput() {
        return this._method.internalValue;
    }
    // query_string - computed: false, optional: true, required: false
    _queryString = new Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchQueryStringOutputReference(this, "query_string", true);
    get queryString() {
        return this._queryString;
    }
    putQueryString(value) {
        this._queryString.internalValue = value;
    }
    resetQueryString() {
        this._queryString.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get queryStringInput() {
        return this._queryString.internalValue;
    }
    // single_header - computed: false, optional: true, required: false
    _singleHeader = new Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleHeaderOutputReference(this, "single_header", true);
    get singleHeader() {
        return this._singleHeader;
    }
    putSingleHeader(value) {
        this._singleHeader.internalValue = value;
    }
    resetSingleHeader() {
        this._singleHeader.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get singleHeaderInput() {
        return this._singleHeader.internalValue;
    }
    // single_query_argument - computed: false, optional: true, required: false
    _singleQueryArgument = new Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentOutputReference(this, "single_query_argument", true);
    get singleQueryArgument() {
        return this._singleQueryArgument;
    }
    putSingleQueryArgument(value) {
        this._singleQueryArgument.internalValue = value;
    }
    resetSingleQueryArgument() {
        this._singleQueryArgument.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get singleQueryArgumentInput() {
        return this._singleQueryArgument.internalValue;
    }
    // uri_path - computed: false, optional: true, required: false
    _uriPath = new Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchUriPathOutputReference(this, "uri_path", true);
    get uriPath() {
        return this._uriPath;
    }
    putUriPath(value) {
        this._uriPath.internalValue = value;
    }
    resetUriPath() {
        this._uriPath.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get uriPathInput() {
        return this._uriPath.internalValue;
    }
}
export function wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSqliMatchStatementTextTransformationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        priority: cdktf.numberToTerraform(struct.priority),
        type: cdktf.stringToTerraform(struct.type),
    };
}
export function wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSqliMatchStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        field_to_match: wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchToTerraform(struct.fieldToMatch),
        text_transformation: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSqliMatchStatementTextTransformationToTerraform)(struct.textTransformation),
    };
}
export class Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSqliMatchStatementOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._fieldToMatch?.internalValue) {
            hasAnyValues = true;
            internalValueResult.fieldToMatch = this._fieldToMatch?.internalValue;
        }
        if (this._textTransformation) {
            hasAnyValues = true;
            internalValueResult.textTransformation = this._textTransformation;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._fieldToMatch.internalValue = undefined;
            this._textTransformation = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._fieldToMatch.internalValue = value.fieldToMatch;
            this._textTransformation = value.textTransformation;
        }
    }
    // field_to_match - computed: false, optional: true, required: false
    _fieldToMatch = new Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchOutputReference(this, "field_to_match", true);
    get fieldToMatch() {
        return this._fieldToMatch;
    }
    putFieldToMatch(value) {
        this._fieldToMatch.internalValue = value;
    }
    resetFieldToMatch() {
        this._fieldToMatch.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get fieldToMatchInput() {
        return this._fieldToMatch.internalValue;
    }
    // text_transformation - computed: false, optional: false, required: true
    _textTransformation;
    get textTransformation() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('text_transformation');
    }
    set textTransformation(value) {
        this._textTransformation = value;
    }
    // Temporarily expose input value. Use with caution.
    get textTransformationInput() {
        return this._textTransformation;
    }
}
export function wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchBodyToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchMethodToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchQueryStringToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleHeaderToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
    };
}
export class Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._name) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._name = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._name = value.name;
        }
    }
    // name - computed: false, optional: false, required: true
    _name;
    get name() {
        return this.getStringAttribute('name');
    }
    set name(value) {
        this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    get nameInput() {
        return this._name;
    }
}
export function wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
    };
}
export class Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._name) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._name = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._name = value.name;
        }
    }
    // name - computed: false, optional: false, required: true
    _name;
    get name() {
        return this.getStringAttribute('name');
    }
    set name(value) {
        this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    get nameInput() {
        return this._name;
    }
}
export function wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchUriPathToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        all_query_arguments: wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct.allQueryArguments),
        body: wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchBodyToTerraform(struct.body),
        method: wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchMethodToTerraform(struct.method),
        query_string: wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchQueryStringToTerraform(struct.queryString),
        single_header: wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleHeaderToTerraform(struct.singleHeader),
        single_query_argument: wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct.singleQueryArgument),
        uri_path: wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchUriPathToTerraform(struct.uriPath),
    };
}
export class Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._allQueryArguments?.internalValue) {
            hasAnyValues = true;
            internalValueResult.allQueryArguments = this._allQueryArguments?.internalValue;
        }
        if (this._body?.internalValue) {
            hasAnyValues = true;
            internalValueResult.body = this._body?.internalValue;
        }
        if (this._method?.internalValue) {
            hasAnyValues = true;
            internalValueResult.method = this._method?.internalValue;
        }
        if (this._queryString?.internalValue) {
            hasAnyValues = true;
            internalValueResult.queryString = this._queryString?.internalValue;
        }
        if (this._singleHeader?.internalValue) {
            hasAnyValues = true;
            internalValueResult.singleHeader = this._singleHeader?.internalValue;
        }
        if (this._singleQueryArgument?.internalValue) {
            hasAnyValues = true;
            internalValueResult.singleQueryArgument = this._singleQueryArgument?.internalValue;
        }
        if (this._uriPath?.internalValue) {
            hasAnyValues = true;
            internalValueResult.uriPath = this._uriPath?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._allQueryArguments.internalValue = undefined;
            this._body.internalValue = undefined;
            this._method.internalValue = undefined;
            this._queryString.internalValue = undefined;
            this._singleHeader.internalValue = undefined;
            this._singleQueryArgument.internalValue = undefined;
            this._uriPath.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._allQueryArguments.internalValue = value.allQueryArguments;
            this._body.internalValue = value.body;
            this._method.internalValue = value.method;
            this._queryString.internalValue = value.queryString;
            this._singleHeader.internalValue = value.singleHeader;
            this._singleQueryArgument.internalValue = value.singleQueryArgument;
            this._uriPath.internalValue = value.uriPath;
        }
    }
    // all_query_arguments - computed: false, optional: true, required: false
    _allQueryArguments = new Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsOutputReference(this, "all_query_arguments", true);
    get allQueryArguments() {
        return this._allQueryArguments;
    }
    putAllQueryArguments(value) {
        this._allQueryArguments.internalValue = value;
    }
    resetAllQueryArguments() {
        this._allQueryArguments.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get allQueryArgumentsInput() {
        return this._allQueryArguments.internalValue;
    }
    // body - computed: false, optional: true, required: false
    _body = new Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchBodyOutputReference(this, "body", true);
    get body() {
        return this._body;
    }
    putBody(value) {
        this._body.internalValue = value;
    }
    resetBody() {
        this._body.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get bodyInput() {
        return this._body.internalValue;
    }
    // method - computed: false, optional: true, required: false
    _method = new Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchMethodOutputReference(this, "method", true);
    get method() {
        return this._method;
    }
    putMethod(value) {
        this._method.internalValue = value;
    }
    resetMethod() {
        this._method.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get methodInput() {
        return this._method.internalValue;
    }
    // query_string - computed: false, optional: true, required: false
    _queryString = new Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchQueryStringOutputReference(this, "query_string", true);
    get queryString() {
        return this._queryString;
    }
    putQueryString(value) {
        this._queryString.internalValue = value;
    }
    resetQueryString() {
        this._queryString.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get queryStringInput() {
        return this._queryString.internalValue;
    }
    // single_header - computed: false, optional: true, required: false
    _singleHeader = new Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleHeaderOutputReference(this, "single_header", true);
    get singleHeader() {
        return this._singleHeader;
    }
    putSingleHeader(value) {
        this._singleHeader.internalValue = value;
    }
    resetSingleHeader() {
        this._singleHeader.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get singleHeaderInput() {
        return this._singleHeader.internalValue;
    }
    // single_query_argument - computed: false, optional: true, required: false
    _singleQueryArgument = new Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentOutputReference(this, "single_query_argument", true);
    get singleQueryArgument() {
        return this._singleQueryArgument;
    }
    putSingleQueryArgument(value) {
        this._singleQueryArgument.internalValue = value;
    }
    resetSingleQueryArgument() {
        this._singleQueryArgument.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get singleQueryArgumentInput() {
        return this._singleQueryArgument.internalValue;
    }
    // uri_path - computed: false, optional: true, required: false
    _uriPath = new Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchUriPathOutputReference(this, "uri_path", true);
    get uriPath() {
        return this._uriPath;
    }
    putUriPath(value) {
        this._uriPath.internalValue = value;
    }
    resetUriPath() {
        this._uriPath.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get uriPathInput() {
        return this._uriPath.internalValue;
    }
}
export function wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementXssMatchStatementTextTransformationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        priority: cdktf.numberToTerraform(struct.priority),
        type: cdktf.stringToTerraform(struct.type),
    };
}
export function wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementXssMatchStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        field_to_match: wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchToTerraform(struct.fieldToMatch),
        text_transformation: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementXssMatchStatementTextTransformationToTerraform)(struct.textTransformation),
    };
}
export class Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementXssMatchStatementOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._fieldToMatch?.internalValue) {
            hasAnyValues = true;
            internalValueResult.fieldToMatch = this._fieldToMatch?.internalValue;
        }
        if (this._textTransformation) {
            hasAnyValues = true;
            internalValueResult.textTransformation = this._textTransformation;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._fieldToMatch.internalValue = undefined;
            this._textTransformation = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._fieldToMatch.internalValue = value.fieldToMatch;
            this._textTransformation = value.textTransformation;
        }
    }
    // field_to_match - computed: false, optional: true, required: false
    _fieldToMatch = new Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchOutputReference(this, "field_to_match", true);
    get fieldToMatch() {
        return this._fieldToMatch;
    }
    putFieldToMatch(value) {
        this._fieldToMatch.internalValue = value;
    }
    resetFieldToMatch() {
        this._fieldToMatch.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get fieldToMatchInput() {
        return this._fieldToMatch.internalValue;
    }
    // text_transformation - computed: false, optional: false, required: true
    _textTransformation;
    get textTransformation() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('text_transformation');
    }
    set textTransformation(value) {
        this._textTransformation = value;
    }
    // Temporarily expose input value. Use with caution.
    get textTransformationInput() {
        return this._textTransformation;
    }
}
export function wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        byte_match_statement: wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementByteMatchStatementToTerraform(struct.byteMatchStatement),
        geo_match_statement: wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementGeoMatchStatementToTerraform(struct.geoMatchStatement),
        ip_set_reference_statement: wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementIpSetReferenceStatementToTerraform(struct.ipSetReferenceStatement),
        label_match_statement: wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementLabelMatchStatementToTerraform(struct.labelMatchStatement),
        regex_pattern_set_reference_statement: wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementToTerraform(struct.regexPatternSetReferenceStatement),
        size_constraint_statement: wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSizeConstraintStatementToTerraform(struct.sizeConstraintStatement),
        sqli_match_statement: wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSqliMatchStatementToTerraform(struct.sqliMatchStatement),
        xss_match_statement: wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementXssMatchStatementToTerraform(struct.xssMatchStatement),
    };
}
export function wafv2RuleGroupRuleStatementNotStatementStatementNotStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        statement: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementToTerraform)(struct.statement),
    };
}
export class Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._statement) {
            hasAnyValues = true;
            internalValueResult.statement = this._statement;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._statement = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._statement = value.statement;
        }
    }
    // statement - computed: false, optional: false, required: true
    _statement;
    get statement() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('statement');
    }
    set statement(value) {
        this._statement = value;
    }
    // Temporarily expose input value. Use with caution.
    get statementInput() {
        return this._statement;
    }
}
export function wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchBodyToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchMethodToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchQueryStringToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleHeaderToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
    };
}
export class Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._name) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._name = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._name = value.name;
        }
    }
    // name - computed: false, optional: false, required: true
    _name;
    get name() {
        return this.getStringAttribute('name');
    }
    set name(value) {
        this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    get nameInput() {
        return this._name;
    }
}
export function wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
    };
}
export class Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._name) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._name = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._name = value.name;
        }
    }
    // name - computed: false, optional: false, required: true
    _name;
    get name() {
        return this.getStringAttribute('name');
    }
    set name(value) {
        this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    get nameInput() {
        return this._name;
    }
}
export function wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchUriPathToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        all_query_arguments: wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct.allQueryArguments),
        body: wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchBodyToTerraform(struct.body),
        method: wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchMethodToTerraform(struct.method),
        query_string: wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchQueryStringToTerraform(struct.queryString),
        single_header: wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleHeaderToTerraform(struct.singleHeader),
        single_query_argument: wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct.singleQueryArgument),
        uri_path: wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchUriPathToTerraform(struct.uriPath),
    };
}
export class Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._allQueryArguments?.internalValue) {
            hasAnyValues = true;
            internalValueResult.allQueryArguments = this._allQueryArguments?.internalValue;
        }
        if (this._body?.internalValue) {
            hasAnyValues = true;
            internalValueResult.body = this._body?.internalValue;
        }
        if (this._method?.internalValue) {
            hasAnyValues = true;
            internalValueResult.method = this._method?.internalValue;
        }
        if (this._queryString?.internalValue) {
            hasAnyValues = true;
            internalValueResult.queryString = this._queryString?.internalValue;
        }
        if (this._singleHeader?.internalValue) {
            hasAnyValues = true;
            internalValueResult.singleHeader = this._singleHeader?.internalValue;
        }
        if (this._singleQueryArgument?.internalValue) {
            hasAnyValues = true;
            internalValueResult.singleQueryArgument = this._singleQueryArgument?.internalValue;
        }
        if (this._uriPath?.internalValue) {
            hasAnyValues = true;
            internalValueResult.uriPath = this._uriPath?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._allQueryArguments.internalValue = undefined;
            this._body.internalValue = undefined;
            this._method.internalValue = undefined;
            this._queryString.internalValue = undefined;
            this._singleHeader.internalValue = undefined;
            this._singleQueryArgument.internalValue = undefined;
            this._uriPath.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._allQueryArguments.internalValue = value.allQueryArguments;
            this._body.internalValue = value.body;
            this._method.internalValue = value.method;
            this._queryString.internalValue = value.queryString;
            this._singleHeader.internalValue = value.singleHeader;
            this._singleQueryArgument.internalValue = value.singleQueryArgument;
            this._uriPath.internalValue = value.uriPath;
        }
    }
    // all_query_arguments - computed: false, optional: true, required: false
    _allQueryArguments = new Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsOutputReference(this, "all_query_arguments", true);
    get allQueryArguments() {
        return this._allQueryArguments;
    }
    putAllQueryArguments(value) {
        this._allQueryArguments.internalValue = value;
    }
    resetAllQueryArguments() {
        this._allQueryArguments.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get allQueryArgumentsInput() {
        return this._allQueryArguments.internalValue;
    }
    // body - computed: false, optional: true, required: false
    _body = new Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchBodyOutputReference(this, "body", true);
    get body() {
        return this._body;
    }
    putBody(value) {
        this._body.internalValue = value;
    }
    resetBody() {
        this._body.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get bodyInput() {
        return this._body.internalValue;
    }
    // method - computed: false, optional: true, required: false
    _method = new Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchMethodOutputReference(this, "method", true);
    get method() {
        return this._method;
    }
    putMethod(value) {
        this._method.internalValue = value;
    }
    resetMethod() {
        this._method.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get methodInput() {
        return this._method.internalValue;
    }
    // query_string - computed: false, optional: true, required: false
    _queryString = new Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchQueryStringOutputReference(this, "query_string", true);
    get queryString() {
        return this._queryString;
    }
    putQueryString(value) {
        this._queryString.internalValue = value;
    }
    resetQueryString() {
        this._queryString.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get queryStringInput() {
        return this._queryString.internalValue;
    }
    // single_header - computed: false, optional: true, required: false
    _singleHeader = new Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleHeaderOutputReference(this, "single_header", true);
    get singleHeader() {
        return this._singleHeader;
    }
    putSingleHeader(value) {
        this._singleHeader.internalValue = value;
    }
    resetSingleHeader() {
        this._singleHeader.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get singleHeaderInput() {
        return this._singleHeader.internalValue;
    }
    // single_query_argument - computed: false, optional: true, required: false
    _singleQueryArgument = new Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentOutputReference(this, "single_query_argument", true);
    get singleQueryArgument() {
        return this._singleQueryArgument;
    }
    putSingleQueryArgument(value) {
        this._singleQueryArgument.internalValue = value;
    }
    resetSingleQueryArgument() {
        this._singleQueryArgument.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get singleQueryArgumentInput() {
        return this._singleQueryArgument.internalValue;
    }
    // uri_path - computed: false, optional: true, required: false
    _uriPath = new Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchUriPathOutputReference(this, "uri_path", true);
    get uriPath() {
        return this._uriPath;
    }
    putUriPath(value) {
        this._uriPath.internalValue = value;
    }
    resetUriPath() {
        this._uriPath.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get uriPathInput() {
        return this._uriPath.internalValue;
    }
}
export function wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementByteMatchStatementTextTransformationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        priority: cdktf.numberToTerraform(struct.priority),
        type: cdktf.stringToTerraform(struct.type),
    };
}
export function wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementByteMatchStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        positional_constraint: cdktf.stringToTerraform(struct.positionalConstraint),
        search_string: cdktf.stringToTerraform(struct.searchString),
        field_to_match: wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchToTerraform(struct.fieldToMatch),
        text_transformation: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementByteMatchStatementTextTransformationToTerraform)(struct.textTransformation),
    };
}
export class Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementByteMatchStatementOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._positionalConstraint) {
            hasAnyValues = true;
            internalValueResult.positionalConstraint = this._positionalConstraint;
        }
        if (this._searchString) {
            hasAnyValues = true;
            internalValueResult.searchString = this._searchString;
        }
        if (this._fieldToMatch?.internalValue) {
            hasAnyValues = true;
            internalValueResult.fieldToMatch = this._fieldToMatch?.internalValue;
        }
        if (this._textTransformation) {
            hasAnyValues = true;
            internalValueResult.textTransformation = this._textTransformation;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._positionalConstraint = undefined;
            this._searchString = undefined;
            this._fieldToMatch.internalValue = undefined;
            this._textTransformation = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._positionalConstraint = value.positionalConstraint;
            this._searchString = value.searchString;
            this._fieldToMatch.internalValue = value.fieldToMatch;
            this._textTransformation = value.textTransformation;
        }
    }
    // positional_constraint - computed: false, optional: false, required: true
    _positionalConstraint;
    get positionalConstraint() {
        return this.getStringAttribute('positional_constraint');
    }
    set positionalConstraint(value) {
        this._positionalConstraint = value;
    }
    // Temporarily expose input value. Use with caution.
    get positionalConstraintInput() {
        return this._positionalConstraint;
    }
    // search_string - computed: false, optional: false, required: true
    _searchString;
    get searchString() {
        return this.getStringAttribute('search_string');
    }
    set searchString(value) {
        this._searchString = value;
    }
    // Temporarily expose input value. Use with caution.
    get searchStringInput() {
        return this._searchString;
    }
    // field_to_match - computed: false, optional: true, required: false
    _fieldToMatch = new Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchOutputReference(this, "field_to_match", true);
    get fieldToMatch() {
        return this._fieldToMatch;
    }
    putFieldToMatch(value) {
        this._fieldToMatch.internalValue = value;
    }
    resetFieldToMatch() {
        this._fieldToMatch.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get fieldToMatchInput() {
        return this._fieldToMatch.internalValue;
    }
    // text_transformation - computed: false, optional: false, required: true
    _textTransformation;
    get textTransformation() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('text_transformation');
    }
    set textTransformation(value) {
        this._textTransformation = value;
    }
    // Temporarily expose input value. Use with caution.
    get textTransformationInput() {
        return this._textTransformation;
    }
}
export function wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementGeoMatchStatementForwardedIpConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        fallback_behavior: cdktf.stringToTerraform(struct.fallbackBehavior),
        header_name: cdktf.stringToTerraform(struct.headerName),
    };
}
export class Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementGeoMatchStatementForwardedIpConfigOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._fallbackBehavior) {
            hasAnyValues = true;
            internalValueResult.fallbackBehavior = this._fallbackBehavior;
        }
        if (this._headerName) {
            hasAnyValues = true;
            internalValueResult.headerName = this._headerName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._fallbackBehavior = undefined;
            this._headerName = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._fallbackBehavior = value.fallbackBehavior;
            this._headerName = value.headerName;
        }
    }
    // fallback_behavior - computed: false, optional: false, required: true
    _fallbackBehavior;
    get fallbackBehavior() {
        return this.getStringAttribute('fallback_behavior');
    }
    set fallbackBehavior(value) {
        this._fallbackBehavior = value;
    }
    // Temporarily expose input value. Use with caution.
    get fallbackBehaviorInput() {
        return this._fallbackBehavior;
    }
    // header_name - computed: false, optional: false, required: true
    _headerName;
    get headerName() {
        return this.getStringAttribute('header_name');
    }
    set headerName(value) {
        this._headerName = value;
    }
    // Temporarily expose input value. Use with caution.
    get headerNameInput() {
        return this._headerName;
    }
}
export function wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementGeoMatchStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        country_codes: cdktf.listMapper(cdktf.stringToTerraform)(struct.countryCodes),
        forwarded_ip_config: wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementGeoMatchStatementForwardedIpConfigToTerraform(struct.forwardedIpConfig),
    };
}
export class Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementGeoMatchStatementOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._countryCodes) {
            hasAnyValues = true;
            internalValueResult.countryCodes = this._countryCodes;
        }
        if (this._forwardedIpConfig?.internalValue) {
            hasAnyValues = true;
            internalValueResult.forwardedIpConfig = this._forwardedIpConfig?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._countryCodes = undefined;
            this._forwardedIpConfig.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._countryCodes = value.countryCodes;
            this._forwardedIpConfig.internalValue = value.forwardedIpConfig;
        }
    }
    // country_codes - computed: false, optional: false, required: true
    _countryCodes;
    get countryCodes() {
        return this.getListAttribute('country_codes');
    }
    set countryCodes(value) {
        this._countryCodes = value;
    }
    // Temporarily expose input value. Use with caution.
    get countryCodesInput() {
        return this._countryCodes;
    }
    // forwarded_ip_config - computed: false, optional: true, required: false
    _forwardedIpConfig = new Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementGeoMatchStatementForwardedIpConfigOutputReference(this, "forwarded_ip_config", true);
    get forwardedIpConfig() {
        return this._forwardedIpConfig;
    }
    putForwardedIpConfig(value) {
        this._forwardedIpConfig.internalValue = value;
    }
    resetForwardedIpConfig() {
        this._forwardedIpConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get forwardedIpConfigInput() {
        return this._forwardedIpConfig.internalValue;
    }
}
export function wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementIpSetReferenceStatementIpSetForwardedIpConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        fallback_behavior: cdktf.stringToTerraform(struct.fallbackBehavior),
        header_name: cdktf.stringToTerraform(struct.headerName),
        position: cdktf.stringToTerraform(struct.position),
    };
}
export class Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementIpSetReferenceStatementIpSetForwardedIpConfigOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._fallbackBehavior) {
            hasAnyValues = true;
            internalValueResult.fallbackBehavior = this._fallbackBehavior;
        }
        if (this._headerName) {
            hasAnyValues = true;
            internalValueResult.headerName = this._headerName;
        }
        if (this._position) {
            hasAnyValues = true;
            internalValueResult.position = this._position;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._fallbackBehavior = undefined;
            this._headerName = undefined;
            this._position = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._fallbackBehavior = value.fallbackBehavior;
            this._headerName = value.headerName;
            this._position = value.position;
        }
    }
    // fallback_behavior - computed: false, optional: false, required: true
    _fallbackBehavior;
    get fallbackBehavior() {
        return this.getStringAttribute('fallback_behavior');
    }
    set fallbackBehavior(value) {
        this._fallbackBehavior = value;
    }
    // Temporarily expose input value. Use with caution.
    get fallbackBehaviorInput() {
        return this._fallbackBehavior;
    }
    // header_name - computed: false, optional: false, required: true
    _headerName;
    get headerName() {
        return this.getStringAttribute('header_name');
    }
    set headerName(value) {
        this._headerName = value;
    }
    // Temporarily expose input value. Use with caution.
    get headerNameInput() {
        return this._headerName;
    }
    // position - computed: false, optional: false, required: true
    _position;
    get position() {
        return this.getStringAttribute('position');
    }
    set position(value) {
        this._position = value;
    }
    // Temporarily expose input value. Use with caution.
    get positionInput() {
        return this._position;
    }
}
export function wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementIpSetReferenceStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        arn: cdktf.stringToTerraform(struct.arn),
        ip_set_forwarded_ip_config: wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementIpSetReferenceStatementIpSetForwardedIpConfigToTerraform(struct.ipSetForwardedIpConfig),
    };
}
export class Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementIpSetReferenceStatementOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._arn) {
            hasAnyValues = true;
            internalValueResult.arn = this._arn;
        }
        if (this._ipSetForwardedIpConfig?.internalValue) {
            hasAnyValues = true;
            internalValueResult.ipSetForwardedIpConfig = this._ipSetForwardedIpConfig?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._arn = undefined;
            this._ipSetForwardedIpConfig.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._arn = value.arn;
            this._ipSetForwardedIpConfig.internalValue = value.ipSetForwardedIpConfig;
        }
    }
    // arn - computed: false, optional: false, required: true
    _arn;
    get arn() {
        return this.getStringAttribute('arn');
    }
    set arn(value) {
        this._arn = value;
    }
    // Temporarily expose input value. Use with caution.
    get arnInput() {
        return this._arn;
    }
    // ip_set_forwarded_ip_config - computed: false, optional: true, required: false
    _ipSetForwardedIpConfig = new Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementIpSetReferenceStatementIpSetForwardedIpConfigOutputReference(this, "ip_set_forwarded_ip_config", true);
    get ipSetForwardedIpConfig() {
        return this._ipSetForwardedIpConfig;
    }
    putIpSetForwardedIpConfig(value) {
        this._ipSetForwardedIpConfig.internalValue = value;
    }
    resetIpSetForwardedIpConfig() {
        this._ipSetForwardedIpConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get ipSetForwardedIpConfigInput() {
        return this._ipSetForwardedIpConfig.internalValue;
    }
}
export function wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementLabelMatchStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        key: cdktf.stringToTerraform(struct.key),
        scope: cdktf.stringToTerraform(struct.scope),
    };
}
export class Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementLabelMatchStatementOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._key) {
            hasAnyValues = true;
            internalValueResult.key = this._key;
        }
        if (this._scope) {
            hasAnyValues = true;
            internalValueResult.scope = this._scope;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._key = undefined;
            this._scope = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._key = value.key;
            this._scope = value.scope;
        }
    }
    // key - computed: false, optional: false, required: true
    _key;
    get key() {
        return this.getStringAttribute('key');
    }
    set key(value) {
        this._key = value;
    }
    // Temporarily expose input value. Use with caution.
    get keyInput() {
        return this._key;
    }
    // scope - computed: false, optional: false, required: true
    _scope;
    get scope() {
        return this.getStringAttribute('scope');
    }
    set scope(value) {
        this._scope = value;
    }
    // Temporarily expose input value. Use with caution.
    get scopeInput() {
        return this._scope;
    }
}
export function wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}