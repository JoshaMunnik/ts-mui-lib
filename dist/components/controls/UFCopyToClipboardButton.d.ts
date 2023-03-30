import * as React from 'react';
import { ButtonProps, SnackbarOrigin } from "@mui/material";
/**
 * Properties for {@link UFCopyBotClipboardButton}
 */
export interface UFCopyToClipboardButtonProps extends ButtonProps {
    /**
     * Value to copy to the clipboard.
     */
    readonly value: string;
    /**
     * Message to show when the value has been copied.
     */
    readonly message: React.ReactNode;
    /**
     * Location of snackbar
     */
    readonly anchorOrigin?: SnackbarOrigin;
}
/**
 * A button to copy a text to the clipboard and show a snackbar when it is finished.
 */
export declare const UFCopyBotClipboardButton: React.MemoExoticComponent<({ value, message, anchorOrigin, ...other }: UFCopyToClipboardButtonProps) => JSX.Element>;
