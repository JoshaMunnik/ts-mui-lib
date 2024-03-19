// region imports

import * as React from 'react';
import {Button, ButtonProps, IconButton, Slide, SlideProps, Snackbar, SnackbarOrigin} from "@mui/material";
import {memo, useState} from "react";
import CloseIcon from '@mui/icons-material/Close';
import {UFSlideUp} from "../transitions/UFSlideUp.js";

// endregion

// region component

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
export const UFCopyBotClipboardButton = memo(
  (
  {
    value,
    message,
    anchorOrigin = {horizontal: 'left', vertical: 'bottom'},
    ...other
  }: UFCopyToClipboardButtonProps
) => {
  const [open, setOpen] = useState(false);
  return (
    <React.Fragment>
      <Button
        {...other}
        onClick={async () => {
          await navigator.clipboard.writeText(value);
          setOpen(true);
        }}
      />
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={() => setOpen(false)}
        message={message}
        anchorOrigin={anchorOrigin}
        TransitionComponent={UFSlideUp}
        action={
          <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={() => setOpen(false)}
          >
            <CloseIcon fontSize="small"/>
          </IconButton>
        }
      />
    </React.Fragment>
  );
});

// endregion