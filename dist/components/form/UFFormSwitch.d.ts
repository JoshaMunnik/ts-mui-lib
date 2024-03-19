import * as React from "react";
import { UFFormFieldChangeEvent } from "../../events/UFFormFieldChangeEvent.js";
import { SwitchProps } from "@mui/material";
/**
 * Properties for {@link UFFormSwitch}
 */
export interface UFFormSwitchProps extends SwitchProps {
    /**
     * Label to show after the switch
     */
    label: React.ReactNode;
    /**
     * Label to show at top of the switch
     */
    topLabel?: React.ReactNode;
    /**
     * Name of form
     */
    name?: string;
    /**
     * Initial checked value
     */
    checked: boolean;
    /**
     * A simplified change event.
     *
     * @param anEvent
     *   Event data
     */
    onFieldChange?: (anEvent: UFFormFieldChangeEvent) => any;
    /**
     * Margin
     */
    margin?: 'normal' | 'dense' | 'none';
}
/**
 * {@link UFFormSwitch} combines `FormControlLabel` and `Switch` into a single component.
 */
export declare const UFFormSwitch: React.MemoExoticComponent<({ name, checked, onFieldChange, label, topLabel, disabled }: UFFormSwitchProps) => import("react/jsx-runtime").JSX.Element>;
