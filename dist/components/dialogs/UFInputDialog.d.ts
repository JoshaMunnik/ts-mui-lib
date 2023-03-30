import * as React from 'react';
/**
 * Properties for {@link UFInputDialog}
 */
export interface UFInputDialogProps {
    /**
     * Title of dialog
     */
    title?: React.ReactNode;
    /**
     * Content of dialog
     */
    content: React.ReactNode;
    /**
     * True to show (default)
     */
    open?: boolean;
    /**
     * Initial value to show
     */
    value: string;
    /**
     * Caption for ok button
     */
    ok: React.ReactNode;
    /**
     * Caption for cancel button
     */
    cancel: React.ReactNode;
    /**
     * When true allow for empty values, else disable ok button of input is empty
     */
    allowEmpty: boolean;
    /**
     * Button variant
     */
    variant?: 'text' | 'outlined' | 'contained';
    /**
     * Callback that is called when user clicks ok or cancel.
     *
     * @param value
     *   Either the new text value or false if the user clicked cancel or clicked outside the dialog area.
     */
    onClose: (value: string | false) => void;
}
/**
 * Shows an input dialog where the user can enter a text.
 */
export declare const UFInputDialog: React.MemoExoticComponent<({ title, ok, cancel, allowEmpty, onClose, content, value, variant, open }: UFInputDialogProps) => JSX.Element>;
