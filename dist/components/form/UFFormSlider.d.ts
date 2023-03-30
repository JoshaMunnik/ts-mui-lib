import * as React from 'react';
import { SliderProps } from "@mui/material";
import { UFFormFieldChangeEvent } from "../../events/UFFormFieldChangeEvent";
/**
 * Props for {@link UFFormSlider}
 */
export interface UFFormSliderFieldProps extends SliderProps {
    /**
     * Label to show above slider
     */
    label: React.ReactNode;
    /**
     * True to show full width
     */
    fullWidth?: boolean;
    /**
     * A simplified change event.
     *
     * @param anEvent
     *   Event data
     */
    readonly onFieldChange?: (anEvent: UFFormFieldChangeEvent) => any;
}
/**
 * {@link UFFormSlider} wraps a `Slider` in a `FormControl` and adds a `InputLabel` above it.
 */
export declare const UFFormSlider: React.MemoExoticComponent<({ label, fullWidth, marks, onFieldChange, name, ...other }: UFFormSliderFieldProps) => JSX.Element>;
