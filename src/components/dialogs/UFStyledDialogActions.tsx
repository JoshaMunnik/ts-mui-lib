// region imports

import {DialogActions} from "@mui/material";
import * as React from "react";
import {UFChildrenProp} from "@ultraforce/ts-react-lib";

// endregion

// region component

/**
 * Adds padding to `DialogActions`.
 */
export const UFStyledDialogActions: React.FC<UFChildrenProp> = ({children}) => (
  <DialogActions
    disableSpacing={true}
    sx={{
      paddingBottom: 2,
      paddingTop: 1,
      paddingLeft: 3,
      paddingRight: 3,
      position: 'relative',
      gap: 1
    }}>
    {children}
  </DialogActions>
)

// endregion

