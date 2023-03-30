// region imports

import * as React from 'react';
import {DialogProps} from "@mui/material/Dialog";
import {Dialog} from "@mui/material";

// endregion

// region component

export interface UFDialogProps extends DialogProps {
  /**
   * When false disable pointer events in backdrop layer, allow user interaction with elements behind the dialog.
   */
  readonly modal?: boolean;
}

/**
 * {@link UFDialog} extends `Dialog` and adds support for modal/not-modal dialogs
 */
export const UFDialog: React.FC<UFDialogProps> = (
  {
    modal= true,
    BackdropProps = {},
    PaperProps = {},
    hideBackdrop= false,
    ...other
  }
) => {
  if (!modal) {
    if (!BackdropProps.hasOwnProperty('style')) {
      BackdropProps.style = {};
    }
    BackdropProps.style!['pointerEvents'] = 'none';
    if (!PaperProps.hasOwnProperty('style')) {
      PaperProps.style = {};
    }
    PaperProps.style!['pointerEvents'] = 'all';
  }
  return <Dialog
    {...other}
    style={{
      pointerEvents: modal ? 'all' : 'none'
    }}
    BackdropProps={BackdropProps}
    PaperProps={PaperProps}
    hideBackdrop={!modal || hideBackdrop}
  />;
};

// endregion