var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// region imports
import * as React from 'react';
import Typography from "@mui/material/Typography";
import { FormControl, IconButton, Stack } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { UFMath } from "@ultraforce/ts-general-lib/dist/tools/UFMath";
import { UFTextField } from "./UFTextField";
/**
 * {@link UFFormNumberTextField} extends {@link UFTextField} to enter numeric values.
 *
 * It uses "normal" as default value for margin and sets type to "number".
 */
export class UFFormNumberTextField extends React.PureComponent {
    // endregion
    // region constructor
    /**
     * Constructs an instance of {@link UFFormNumberTextField}
     *
     * @param {object} aProps
     *   Component properties
     */
    constructor(aProps) {
        super(aProps);
        this.state = {
            value: (aProps.value === undefined ? (aProps.minValue || 0) : aProps.value).toString(),
            focused: false
        };
    }
    // endregion
    // region support methods
    /**
     * Parses the value either as float or integer (if props.integer is true).
     *
     * @param aValue
     *   Value to parse
     *
     * @returns Parsed value
     */
    parse(aValue) {
        return this.props.integer ? parseInt(aValue) : parseFloat(aValue);
    }
    /**
     * Fires a change event if any callback has been set.
     *
     * @param aValue
     *   Value to pass on
     */
    invokeFieldChangeEvent(aValue) {
        if (this.props.onFieldChange) {
            this.props.onFieldChange({ name: this.props.name || '', type: 'number', value: aValue });
        }
    }
    /**
     * Changes the value by a certain amount.
     *
     * @param aValue
     *   Value to add (can be negative)
     */
    addValue(aValue) {
        if (this.state.focused && !UFMath.isNumeric(this.state.value)) {
            return;
        }
        const current = this.parse(this.state.value);
        const newValue = Math.min(this.props.maxValue, Math.max(this.props.minValue, current + aValue));
        this.setState({
            value: newValue.toString()
        }, () => {
            if (newValue !== current) {
                this.invokeFieldChangeEvent(newValue);
            }
        });
    }
    // endregion
    // region event handlers
    /**
     * Handles changes to the value.
     *
     * @param anEvent
     *   Event object
     */
    handleFieldChange(anEvent) {
        let value = anEvent.value.toString();
        let newValue;
        if (value.length) {
            newValue = this.parse(value);
            if (!this.state.focused) {
                newValue = Math.max(Math.min(newValue, this.props.maxValue), this.props.minValue);
            }
            if (value !== newValue.toString()) {
                value = newValue.toString();
            }
        }
        else {
            newValue = 0;
        }
        this.setState({ value: value }, () => this.invokeFieldChangeEvent(newValue));
    }
    ;
    /**
     * Handles input loosing input focus
     */
    handleBlur() {
        this.setState({
            focused: false
        });
        let value = this.parse(this.state.value);
        if (isNaN(value)) {
            value = 0;
        }
        value = Math.max(Math.min(value, this.props.maxValue), this.props.minValue);
        this.setState({ value: value.toString() }, () => this.invokeFieldChangeEvent(value));
    }
    ;
    /**
     * Handles input gaining input focus
     */
    handleFocus() {
        this.setState({
            focused: true
        });
    }
    ;
    /**
     * Handles clicks on the + button
     */
    handleIncrease() {
        this.addValue(+this.props.stepSize);
    }
    ;
    /**
     * Handles clicks on the - button
     */
    handleDecrease() {
        this.addValue(-this.props.stepSize);
    }
    ;
    // endregion
    // region component methods
    /**
     * This method is called to obtain state changes for new props.
     *
     * @param {object} aNewProps
     *   New props
     * @param {object} aCurrentState
     *   Current state
     *
     * @return {object|null} an object with state changes or null if there are no
     *   changes.
     */
    static getDerivedStateFromProps(aNewProps, aCurrentState) {
        // only update if input is not active, else let this component handle changes
        if ((aNewProps.value !== undefined) && !aCurrentState.focused) {
            return {
                value: aNewProps.value.toString()
            };
        }
        return null;
    }
    /**
     * Renders the component.
     *
     * @returns html data
     */
    render() {
        const _a = this.props, { style, unit, minValue, maxValue, integer, fullWidth = false, showButtons, disabled, stepSize, margin, inputProps } = _a, other = __rest(_a, ["style", "unit", "minValue", "maxValue", "integer", "fullWidth", "showButtons", "disabled", "stepSize", "margin", "inputProps"]);
        return (_jsx(FormControl, Object.assign({ fullWidth: fullWidth }, { children: _jsxs(Stack, Object.assign({ direction: "row", spacing: 0.25, sx: {
                    alignItems: 'flex-end',
                    position: 'relative',
                    maxWidth: fullWidth ? '100%' : showButtons ? '14rem' : '8rem'
                } }, { children: [_jsx(UFTextField, Object.assign({}, other, { value: this.state.value, disabled: disabled, type: 'number', onFieldChange: event => this.handleFieldChange(event), onBlur: () => this.handleBlur(), onFocus: () => this.handleFocus(), sx: {
                            flexGrow: 1,
                        }, inputProps: Object.assign(Object.assign({}, inputProps), { sx: showButtons
                                ? {
                                    MozAppearance: 'textfield',
                                    '&::-webkit-inner-spin-button': {
                                        WebkitAppearance: 'none',
                                        MozAppearance: 'none',
                                        appearance: 'none',
                                        margin: 0,
                                    },
                                    '&::-webkit-outer-spin-button': {
                                        webkitAppearance: 'none',
                                        mozAppearance: 'none',
                                        appearance: 'none',
                                        margin: 0,
                                    }
                                }
                                : {} }) })), unit &&
                        _jsx(Typography, Object.assign({ variant: "caption", sx: {
                                position: 'absolute',
                                right: showButtons ? '72px' : '20px',
                                bottom: '4px',
                                color: 'text.secondary'
                            } }, { children: unit })), showButtons &&
                        _jsx(IconButton, Object.assign({ size: "small", onClick: () => this.handleDecrease(), disabled: disabled }, { children: _jsx(RemoveIcon, {}) })), showButtons &&
                        _jsx(IconButton, Object.assign({ size: "small", onClick: () => this.handleIncrease(), disabled: disabled }, { children: _jsx(AddIcon, {}) }))] })) })));
    }
}
// region static variables
/**
 * Default properties.
 */
UFFormNumberTextField.defaultProps = {
    minValue: -Number.MAX_VALUE,
    maxValue: Number.MAX_VALUE,
    fullWidth: false,
    integer: true,
    showButtons: true,
    unit: '',
    stepSize: 1
};
//# sourceMappingURL=UFFormNumberTextField.js.map