// region imports

import * as React from "react";
import TextField, {TextFieldProps} from "@mui/material/TextField";
import {UFFormFieldChangeEvent} from "../../events/UFFormFieldChangeEvent";
import {memo} from "react";

// endregion

// region component

/**
 * Props for {@link UFTextField}.
 */
export type UFTextFieldProps = TextFieldProps & {
  /**
   * When true use floating label, false (default) shows label at fixed position at top.
   */
  readonly floatingLabel?: boolean;

  /**
   * A simplified change event.
   *
   * @param anEvent
   *   Event data
   */
  readonly onFieldChange?: (anEvent: UFFormFieldChangeEvent) => any;

  /**
   * When true make input field readonly
   */
  readonly readOnly?: boolean;

  /**
   * Only used if {@link readOnly} is true, when true show '...' at end.
   */
  readonly ellipsis?: boolean;

  /**
   * Font family to use for input
   */
  readonly fontFamily?: string;

  /**
   * Font size to use for input
   */
  readonly fontSize?: string;
};

/**
 * {@link UFTextField} extends {@link TextField}.
 */
export const UFTextField = memo(
  (
    {
     floatingLabel = false,
     onFieldChange,
     name,
     readOnly = false,
     ellipsis = false,
     variant = 'standard',
     fontFamily = 'inherit',
     fontSize = 'inherit',
     ...other
   }: UFTextFieldProps
  ) => {
    const inputProps: any = {
      style: {
        fontFamily,
        fontSize
      }
    };
    if (readOnly) {
      inputProps.readOnly = 'readonly';
      if (ellipsis) {
        inputProps.style.whiteSpace = 'nowrap';
        inputProps.style.overflow = 'hidden';
        inputProps.style.textOverflow = 'ellipsis';
      }
    }
    return (
      <TextField
        InputLabelProps={floatingLabel ? {} : {shrink: true}}
        inputProps={inputProps}
        variant={variant}
        onChange={event => onFieldChange && onFieldChange({
          name: name || '',
          type: 'string',
          value: event.target.value
        })}
        {...other}
      />
    );
  }
);

// endregion
