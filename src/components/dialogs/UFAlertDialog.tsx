// region imports

import * as React from 'react';
import {UFStyledDialogActions} from "./UFStyledDialogActions";
import {UFDialogTitleIcon} from "./UFDialogTitleIcon";
import {Button, Dialog, DialogContent, DialogContentText, DialogTitle} from "@mui/material";
import {Warning} from "@mui/icons-material";
import CloseIcon from '@mui/icons-material/Close';
import {memo} from "react";

// endregion

// region Component

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
  onClose: () => void
}

/**
 * Defines an alert dialog. Which shows a message and a close button. The user has to click the close button, clicking
 * outside or pressing escape will not close the dialog.
 */
export const UFAlertDialog = memo(
  (
    {
      title = null,
      content,
      close,
      variant = 'contained',
      onClose,
      open = true
    }: UFAlertDialogProps
  ) => {
    if (typeof content === 'string') {
      content = <DialogContentText>{content}</DialogContentText>;
    }
    return (
      <Dialog open={open}>
        {
          title &&
          <DialogTitle>
            <UFDialogTitleIcon icon={<Warning/>}/>{title}
          </DialogTitle>
        }
        <DialogContent>
          {content}
        </DialogContent>
        <UFStyledDialogActions>
          <Button
            color="primary"
            variant={variant}
            startIcon={<CloseIcon/>}
            onClick={onClose}
          >
            {close}
          </Button>
        </UFStyledDialogActions>
      </Dialog>
    );
  }
);

// endregion
