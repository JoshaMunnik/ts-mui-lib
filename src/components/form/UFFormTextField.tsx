// region imports

import * as React from "react";
import {FormControl} from "@mui/material";
import {UFTextField, UFTextFieldProps} from "./UFTextField.js";
import {memo} from "react";

// endregion

// region component

/**
 * {@link UFFormTextField} wraps {@link UFTextField} in a FormControl.
 */
export const UFFormTextField =
  (
    {
      fullWidth = true,
      variant = 'standard',
      value,
      sx = {},
      ...other
    }: UFTextFieldProps
  ) =>
    <FormControl fullWidth={fullWidth} variant={variant} sx={sx}>
      <UFTextField
        {...other}
        value={value || ''}
      />
    </FormControl>
;

// endregion
