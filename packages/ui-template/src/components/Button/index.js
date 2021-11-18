import React from "react";
import PropTypes from "prop-types";

import { Button as $, Loading } from "carbon-components-react";
import { ButtonKinds } from "carbon-components-react/es/prop-types/types";

import classnames from "classnames";

import { default as settings } from "./../../settings/Configuration.js";

const Properties = {
    /** Show loading spinner, only new prop */
    loading: PropTypes.bool,

    /** Disable the button will be auto disabled when loading */
    disabled: PropTypes.bool,

    /** Button label */
    children: PropTypes.node,

    /** click handler */
    onClick: PropTypes.func, // eslint-disable-line react/require-default-props
    className: PropTypes.string,

    /** primary, secondary, etc from carbon */
    kind: PropTypes.oneOf([ ... ButtonKinds, "icon-selection" ]),

    /** display green border to denote a recommended button to select, to be used with kind: 'icon-selection' */
    recommended: PropTypes.bool,

    /** Specify if the button is an icon-only button */
    hasIconOnly: PropTypes.bool,

    /** Toggle selected styling for buttons of kind=icon-selection */
    selected: PropTypes.bool
};

const Defaults = {
    loading: false,
    disabled: false,
    className: null,
    kind: "primary",
    children: null,
    recommended: false,
    hasIconOnly: false,
    selected: false
};

const Button = React.forwardRef((props, ref) => {
    const {
        children,
        loading,
        disabled,
        className,
        onClick,
        kind,
        recommended,
        hasIconOnly,
        selected,
        ... properties
    } = props;

    return (
        <$
            { ... properties }
            ref={ ref }
            kind={ kind === "icon-selection" ? "ghost" : kind }
            hasIconOnly={ kind === "icon-selection" ? true : hasIconOnly }
            onClick={ onClick }
            className={ classnames(className, [ settings.Prefix, "-btn" ].join(""), {
                [
                    [ settings.Prefix, "-btn-icon-selection" ].join("")
                    ]: kind === "icon-selection", [
                    [ settings.Prefix, "-btn-icon-selection-recommended" ].join("")
                    ]: kind === "icon-selection" && !disabled && recommended,
                [
                    [ settings.Prefix, "-btn-icon-selection-selected" ]
                    ]: kind === "icon-selection" && selected
            }) }

            disabled={ disabled || (loading !== undefined && loading !== false) }
        >
            { loading ? <Loading className={ [ settings.Prefix, "-loading" ].join("") } small={ true } withOverlay={ false }/> : null }
            { kind === "icon-selection" && !disabled && recommended ? (
                <div className={ [ settings.Prefix, "-btn-icon-selection-recommended_marker" ].join("") }/>
            ) : null }

            { children }
        </$>
    );
});

Button.propTypes = { ... Properties };
Button.defaultProps = Defaults;

export default Button;