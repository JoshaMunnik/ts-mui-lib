import * as React from 'react';
import { UFFormFieldChangeEvent } from "../../events/UFFormFieldChangeEvent.js";
import { SelectProps } from "@mui/material";
/**
 * Properties for {@link UFFormSelect}
 */
export type UFFormSelectFieldProps = Omit<SelectProps, 'margin'> & {
    /**
     * Adds 'normal' as possible margin value
     */
    readonly margin?: 'normal' | 'dense' | 'none';
    /**
     * Label to show above the select field.
     */
    readonly label?: React.ReactNode | boolean;
    /**
     * A simplified change event.
     *
     * @param anEvent
     *   Event data
     */
    readonly onFieldChange?: (anEvent: UFFormFieldChangeEvent) => any;
};
/**
 * {@link UFFormSelect} is a wrapper for SelectField. It adds a label, a name and a fullWidth property.
 */
export declare const UFFormSelect: React.MemoExoticComponent<({ variant, name, label, value, fullWidth, onFieldChange, margin, required, ...other }: UFFormSelectFieldProps) => import("react/jsx-runtime").JSX.Element>;
