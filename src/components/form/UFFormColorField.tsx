// region imports

import * as React from "react";
import {UFTextFieldProps} from "./UFTextField.js";
import {UFFormTextField} from "./UFFormTextField.js";
import { memo } from "react";

// endregion

// region component

/**
 * {@link UFFormColorField} is a control to select a color.
 */
export const UFFormColorField = memo(
  (
    {
      ...other
    }: UFTextFieldProps
  ) =>
  <UFFormTextField type="color" {...other}/>
);

// endregion
