import * as React from 'react';
/**
 * Properties for {@link UFAlertDialog}
 */
export interface UFAlertDialogProps {
    /**
     * Title for dialog
     */
    title?: React.ReactNode;
    /**
     * Content for dialog
     */
    content: React.ReactNode;
    /**
     * True to show (default)
     */
    open?: boolean;
    /**
     * Caption for close button
     */
    close: React.ReactNode;
    /**
     * Button variant
     */
    variant?: 'text' | 'outlined' | 'contained';
    /**
     * Callback that is called when dialog gets closed
     */
    onClose: () => void;
}
/**
 * Defines an alert dialog. Which shows a message and a close button. The user has to click the close button, clicking
 * outside or pressing escape will not close the dialog.
 */
export declare const UFAlertDialog: React.MemoExoticComponent<({ title, content, close, variant, onClose, open }: UFAlertDialogProps) => JSX.Element>;
