import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// region imports
import * as React from 'react';
import Typography from "@mui/material/Typography";
import { FormControl, InputLabel, Slider, Stack, TextField } from "@mui/material";
import { UFText } from "@ultraforce/ts-general-lib/dist/tools/UFText.js";
/**
 * {@link UFFormNumberSliderField} shows a slider with an optional input field.
 */
export class UFFormNumberSliderField extends React.PureComponent {
    // endregion
    // region constructor
    /**
     * Constructs an instance of {@link UFFormNumberSliderField}
     *
     * @param {object} aProps
     *   Component properties
     */
    constructor(aProps) {
        super(aProps);
        const value = (aProps.value === undefined ? (aProps.minValue || 0) : aProps.value);
        this.state = {
            value: value,
            valueAsText: value.toString(),
            inputFocused: false,
            sliderSelected: false
        };
    }
    // endregion
    // region support methods
    /**
     * Parses the value as integer.
     *
     * @param aValue
     *   Value to parse
     *
     * @returns Parsed value
     */
    parse(aValue) {
        return parseInt(aValue);
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
    // endregion
    // region event handlers
    /**
     * Handles input loosing input focus
     */
    handleInputBlur() {
        this.setState({
            inputFocused: false
        });
        let value = this.parse(this.state.valueAsText);
        if (isNaN(value)) {
            value = this.props.minValue;
        }
        value = Math.max(Math.min(value, this.props.maxValue), this.props.minValue);
        this.setState({ value: value, valueAsText: value.toString() }, () => this.invokeFieldChangeEvent(value));
    }
    ;
    /**
     * Handles input gaining input focus
     */
    handleInputFocus() {
        this.setState({
            inputFocused: true
        });
    }
    ;
    /**
     * Handles slider being clicked upon
     */
    handleSliderDown() {
        this.setState({
            sliderSelected: true
        });
    }
    /**
     * Handles slider no longer being clicked upon
     */
    handleSliderUp() {
        this.setState({
            sliderSelected: false
        });
    }
    /**
     * Handles changes to the slider.
     *
     * @param {number} aValue
     *   Current slider value
     */
    handleSliderChange(aValue) {
        this.setState({ value: aValue, valueAsText: aValue.toString() }, () => this.invokeFieldChangeEvent(aValue));
    }
    /**
     * Handles changes to the text input.
     *
     * @param {string} aValueAsText
     *   Current entered text.
     */
    handleInputChange(aValueAsText) {
        let value;
        if (aValueAsText.length) {
            value = this.parse(aValueAsText);
            if (!this.state.inputFocused) {
                value = Math.max(Math.min(value, this.props.maxValue), this.props.minValue);
            }
            if (aValueAsText !== value.toString()) {
                aValueAsText = value.toString();
            }
        }
        else {
            value = this.props.minValue;
        }
        this.setState({ value: value, valueAsText: aValueAsText }, () => this.invokeFieldChangeEvent(value));
    }
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
        if ((aNewProps.value !== undefined) && !aCurrentState.inputFocused) {
            return {
                value: aNewProps.value,
                valueAsText: aNewProps.value.toString()
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
        const { minValue, fullWidth, maxValue, disabled, showInput, leftLabel, rightLabel, track, label, name } = this.props;
        const map = {
            '$value$': this.state.value,
            '$minValue$': minValue,
            '$maxValue$': maxValue
        };
        return (_jsxs(FormControl, Object.assign({ fullWidth: fullWidth }, { children: [label &&
                    _jsx(InputLabel, Object.assign({ shrink: true, variant: "standard", focused: this.state.inputFocused || this.state.sliderSelected }, { children: label })), _jsxs(Stack, Object.assign({ direction: "row", spacing: '15px', sx: {
                        paddingTop: '0.8em',
                        alignItems: 'center',
                        position: 'relative',
                        width: fullWidth ? '100%' : (showInput ? '14rem' : '8rem')
                    } }, { children: [leftLabel &&
                            _jsx(Typography, Object.assign({ variant: "caption" }, { children: UFText.replace(leftLabel, map) })), _jsx(Slider, { track: track ? 'normal' : false, min: minValue, max: maxValue, value: this.state.value, onChange: (event, value) => this.handleSliderChange(value), onMouseDown: () => this.handleSliderDown(), onMouseUp: () => this.handleSliderUp() }), rightLabel &&
                            _jsx(Typography, Object.assign({ variant: "caption" }, { children: UFText.replace(rightLabel, map) })), showInput && _jsx(TextField, { label: false, variant: "standard", value: this.state.valueAsText, disabled: disabled, type: 'number', onBlur: () => this.handleInputBlur(), onFocus: () => this.handleInputFocus(), onChange: (event) => this.handleInputChange(event.target.value), sx: {
                                flexGrow: 1,
                                width: '100px'
                            }, inputProps: {
                                min: { minValue },
                                max: { maxValue },
                                sx: {
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
                            } })] }))] })));
    }
}
// region static variables
/**
 * Default properties.
 */
UFFormNumberSliderField.defaultProps = {
    minValue: -Number.MAX_VALUE,
    maxValue: Number.MAX_VALUE,
    fullWidth: true,
    showInput: false,
    track: false
};
//# sourceMappingURL=UFFormNumberSliderField.js.map