import * as React from 'react';
import { UFTextFieldProps } from "./UFTextField.js";
/**
 * Properties for {@link UFFormNumberTextField}
 */
export type UFFormNumberTextFieldProps = UFTextFieldProps & {
    /**
     * Initial value (default is minValue)
     */
    readonly value?: number;
    /**
     * Units, shown inside input field aligned to the right (default is '')
     */
    readonly unit: string;
    /**
     * Minimum value allowed (default is Number.MIN_VALUE)
     */
    readonly minValue: number;
    /**
     * Maximum value allowed (default is Number.MAX_VALUE)
     */
    readonly maxValue: number;
    /**
     * When true only accept integer values (default is true)
     */
    readonly integer: boolean;
    /**
     * When true use full width, else use 8em (default is false)
     */
    readonly fullWidth: boolean;
    /**
     * When true show +/- buttons behind the input field (and hide the increase/decrease button inside)
     */
    readonly showButtons: boolean;
    /**
     * Value to change value with when pressing + or -
     */
    readonly stepSize: number;
};
/**
 * State for {@link UFFormNumberTextField}
 */
export type UFFormNumberTextFieldState = {
    readonly value: string;
    readonly focused: boolean;
};
/**
 * {@link UFFormNumberTextField} extends {@link UFTextField} to enter numeric values.
 *
 * It uses "normal" as default value for margin and sets type to "number".
 */
export declare class UFFormNumberTextField extends React.PureComponent<UFFormNumberTextFieldProps, UFFormNumberTextFieldState> {
    /**
     * Default properties.
     */
    static defaultProps: UFFormNumberTextFieldProps;
    /**
     * Constructs an instance of {@link UFFormNumberTextField}
     *
     * @param {object} aProps
     *   Component properties
     */
    constructor(aProps: UFFormNumberTextFieldProps);
    /**
     * Parses the value either as float or integer (if props.integer is true).
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
     * Changes the value by a certain amount.
     *
     * @param aValue
     *   Value to add (can be negative)
     */
    private addValue;
    /**
     * Handles changes to the value.
     *
     * @param anEvent
     *   Event object
     */
    private handleFieldChange;
    /**
     * Handles input loosing input focus
     */
    private handleBlur;
    /**
     * Handles input gaining input focus
     */
    private handleFocus;
    /**
     * Handles clicks on the + button
     */
    private handleIncrease;
    /**
     * Handles clicks on the - button
     */
    private handleDecrease;
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
    static getDerivedStateFromProps(aNewProps: UFFormNumberTextFieldProps, aCurrentState: UFFormNumberTextFieldState): Partial<UFFormNumberTextFieldState> | null;
    /**
     * Renders the component.
     *
     * @returns html data
     */
    render(): import("react/jsx-runtime").JSX.Element;
}
