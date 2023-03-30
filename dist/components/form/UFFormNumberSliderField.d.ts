import * as React from 'react';
import { UFTextFieldProps } from "./UFTextField";
/**
 * Properties for {@link UFFormNumberSliderField}
 */
export type UFFormNumberSliderFieldProps = Omit<UFTextFieldProps, 'fullWidth'> & {
    /**
     * Initial value (default is minValue)
     */
    readonly value?: number;
    /**
     * Minimum value allowed (default is Number.MIN_VALUE)
     */
    readonly minValue: number;
    /**
     * Maximum value allowed (default is Number.MAX_VALUE)
     */
    readonly maxValue: number;
    /**
     * When true use full width, else use 8em (default is false)
     */
    readonly fullWidth: boolean;
    /**
     * When true show a number input box next to the slider.
     */
    readonly showInput: boolean;
    /**
     * Label to show on left part of the slider. Can contain the macro's '$value$', '$minValue$' and '$maxValue$'.
     *
     */
    readonly leftLabel?: string;
    /**
     * Label to show right part of the slider. Can contain the macro's '$value$', '$minValue$' and '$maxValue$'.
     */
    readonly rightLabel?: string;
    /**
     * True to show a track on the left (default is false).
     */
    readonly track: boolean;
};
/**
 * State for {@link UFFormNumberTextField}
 */
export type UFFormNumberSliderFieldState = {
    readonly value: number;
    readonly valueAsText: string;
    readonly inputFocused: boolean;
    readonly sliderSelected: boolean;
};
/**
 * {@link UFFormNumberSliderField} shows a slider with an optional input field.
 */
export declare class UFFormNumberSliderField extends React.PureComponent<UFFormNumberSliderFieldProps, UFFormNumberSliderFieldState> {
    /**
     * Default properties.
     */
    static defaultProps: UFFormNumberSliderFieldProps;
    /**
     * Constructs an instance of {@link UFFormNumberSliderField}
     *
     * @param {object} aProps
     *   Component properties
     */
    constructor(aProps: UFFormNumberSliderFieldProps);
    /**
     * Parses the value as integer.
     *
     * @param aValue
     *   Value to parse
     *
     * @returns Parsed value
     */
    private parse;
    /**
     * Fires a change event if any callback has been set.
     *
     * @param aValue
     *   Value to pass on
     */
    private invokeFieldChangeEvent;
    /**
     * Handles input loosing input focus
     */
    private handleInputBlur;
    /**
     * Handles input gaining input focus
     */
    private handleInputFocus;
    /**
     * Handles slider being clicked upon
     */
    private handleSliderDown;
    /**
     * Handles slider no longer being clicked upon
     */
    private handleSliderUp;
    /**
     * Handles changes to the slider.
     *
     * @param {number} aValue
     *   Current slider value
     */
    private handleSliderChange;
    /**
     * Handles changes to the text input.
     *
     * @param {string} aValueAsText
     *   Current entered text.
     */
    private handleInputChange;
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
    static getDerivedStateFromProps(aNewProps: UFFormNumberSliderFieldProps, aCurrentState: UFFormNumberSliderFieldState): Partial<UFFormNumberSliderFieldState> | null;
    /**
     * Renders the component.
     *
     * @returns html data
     */
    render(): JSX.Element;
}
