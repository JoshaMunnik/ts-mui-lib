import * as React from 'react';
import { DialogProps } from "@mui/material/Dialog";
export interface UFDialogProps extends DialogProps {
    /**
     * When false disable pointer events in backdrop layer, allow user interaction with elements behind the dialog.
     */
    readonly modal?: boolean;
}
/**
 * {@link UFDialog} extends `Dialog` and adds support for modal/not-modal dialogs
 */
export declare const UFDialog: React.FC<UFDialogProps>;
