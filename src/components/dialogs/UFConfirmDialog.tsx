// region imports

import * as React from 'react';
import {Warning} from "@mui/icons-material";
import {Button, ButtonProps, Dialog, DialogContent, DialogContentText, DialogTitle} from "@mui/material";
import {UFStyledDialogActions} from "./UFStyledDialogActions.js";
import {UFDialogTitleIcon} from "./UFDialogTitleIcon.js";
import CloseIcon from '@mui/icons-material/Close';
import CheckIcon from '@mui/icons-material/Check';
import {memo} from "react";

// endregion

// region component

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
export const UFConfirmDialog = memo(
  (
    {
      title = null,
      content,
      yes,
      no,
      variant = 'contained',
      onClose,
      open = true,
      yesColor = "primary",
      noColor = "secondary"
    }: UFConfirmDialogProps
  ) => {
    if (typeof content === 'string') {
      content = <DialogContentText>{content}</DialogContentText>;
    }
    return (
      <Dialog open={open} onClose={() => onClose(false)}>
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
            color={yesColor}
            variant={variant}
            startIcon={<CheckIcon/>}
            onClick={() => onClose(true)}
          >
            {yes}
          </Button>
          <Button
            color={noColor}
            variant={variant}
            startIcon={<CloseIcon/>}
            onClick={() => onClose(false)}
          >
            {no}
          </Button>
        </UFStyledDialogActions>
      </Dialog>
    );
  }
);

// endregion
