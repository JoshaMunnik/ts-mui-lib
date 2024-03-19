// region imports

import * as React from 'react';
import {Button, Dialog, DialogContent, DialogContentText, DialogTitle} from "@mui/material";
import {UFFormTextField} from "../form/UFFormTextField.js";
import {UFStyledDialogActions} from "./UFStyledDialogActions.js";
import {memo, useState} from "react";
import CloseIcon from '@mui/icons-material/Close';
import CheckIcon from '@mui/icons-material/Check';

// endregion

// region component

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
  onClose: (value: string | false) => void
}

/**
 * Shows an input dialog where the user can enter a text.
 */
export const UFInputDialog = memo(
  (
    {
      title = null,
      ok,
      cancel,
      allowEmpty,
      onClose,
      content,
      value,
      variant = 'contained',
      open = true
    }: UFInputDialogProps
  ) => {
    {
      const [editValue, setEditValue] = useState(value);
      if (typeof content === 'string') {
        content = <DialogContentText>{content}</DialogContentText>;
      }
      return (
        <Dialog open={open} onClose={() => onClose(false)}>
          {
            title &&
            <DialogTitle>
              {title}
            </DialogTitle>
          }
          <DialogContent>
            {content}
            <UFFormTextField
              value={editValue}
              onFieldChange={({value}) => setEditValue(value)}
              autoFocus
            />
          </DialogContent>
          <UFStyledDialogActions>
            <Button
              color="primary"
              variant={variant}
              startIcon={<CheckIcon/>}
              onClick={() => onClose(editValue)}
              disabled={!allowEmpty && (editValue.length === 0)}
            >
              {ok}
            </Button>
            <Button
              color="secondary"
              variant={variant}
              startIcon={<CloseIcon/>}
              onClick={() => onClose(false)}
            >
              {cancel}
            </Button>
          </UFStyledDialogActions>
        </Dialog>
      );
    }
  }
);

// endregion
