import * as React from 'react';
import { ButtonProps } from "@mui/material";
/**
 * Properties for {@link UFConfirmDialog}
 */
export interface UFConfirmDialogProps {
    /**
     * Title for dialog
     */
    title?: React.ReactNode;
    /**
     * Content text
     */
    content: React.ReactNode;
    /**
     * True to show (default)
     */
    open?: boolean;
    /**
     * Caption for yes button
     */
    yes: React.ReactNode;
    /**
     * Caption for no button
     */
    no: React.ReactNode;
    /**
     * Color for yes button
     */
    yesColor?: ButtonProps['color'];
    /**
     * Color for no button
     */
    noColor?: ButtonProps['color'];
    /**
     * Button variant
     */
    variant?: 'text' | 'outlined' | 'contained';
    /**
     * Callback that is called when user makes choice
     *
     * @param choice
     *   Choice by user
     */
    onClose: (choice: boolean) => void;
}
/**
 * Defines a confirm dialog. The dialog shows a question to which the user can answer yes (callback is
 * called with true) or no (callback is called with false). Clicking outside the dialog will result
 * in a callback with false.
 */
export declare const UFConfirmDialog: React.MemoExoticComponent<({ title, content, yes, no, variant, onClose, open, yesColor, noColor }: UFConfirmDialogProps) => JSX.Element>;
