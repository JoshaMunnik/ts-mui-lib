import * as React from "react";
import { TextFieldProps } from "@mui/material/TextField";
import { UFFormFieldChangeEvent } from "../../events/UFFormFieldChangeEvent.js";
/**
 * Props for {@link UFTextField}.
 */
export type UFTextFieldProps = TextFieldProps & {
    /**
     * When true use floating label, false (default) shows label at fixed position at top.
     */
    readonly floatingLabel?: boolean;
    /**
     * A simplified change event.
     *
     * @param anEvent
     *   Event data
     */
    readonly onFieldChange?: (anEvent: UFFormFieldChangeEvent) => any;
    /**
     * When true make input field readonly
     */
    readonly readOnly?: boolean;
    /**
     * Only used if {@link readOnly} is true, when true show '...' at end.
     */
    readonly ellipsis?: boolean;
    /**
     * Font family to use for input
     */
    readonly fontFamily?: string;
    /**
     * Font size to use for input
     */
    readonly fontSize?: string;
};
/**
 * {@link UFTextField} extends `TextField`.
 */
export declare const UFTextField: React.MemoExoticComponent<({ floatingLabel, onFieldChange, name, readOnly, ellipsis, variant, fontFamily, fontSize, ...other }: UFTextFieldProps) => import("react/jsx-runtime").JSX.Element>;
