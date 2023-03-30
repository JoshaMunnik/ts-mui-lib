// region imports

import * as React from 'react';
import {UFFormFieldChangeEvent} from "../../events/UFFormFieldChangeEvent";
import {FormControl, InputLabel, Select, SelectProps} from "@mui/material";
import {memo} from "react";

// endregion

// region component

/**
 * Properties for {@link UFFormSelect}
 */
export type UFFormSelectFieldProps = Omit<SelectProps, 'margin'> & {
  /**
   * Adds 'normal' as possible margin value
   */
  readonly margin?: 'normal' | 'dense' | 'none';

  /**
   * Label to show above the select field.
   */
  readonly label?: React.ReactNode | boolean;

  /**
   * A simplified change event.
   *
   * @param anEvent
   *   Event data
   */
  readonly onFieldChange?: (anEvent: UFFormFieldChangeEvent) => any;
}

/**
 * {@link UFFormSelect} is a wrapper for SelectField. It adds a label, a name and a fullWidth property.
 */
export const UFFormSelect = memo(
  (
    {
      variant = 'standard',
      name,
      label = false,
      value,
      fullWidth = true,
      onFieldChange,
      margin,
      required = false,
      ...other
    }: UFFormSelectFieldProps
  ) =>
    <FormControl fullWidth={fullWidth} variant={variant} margin={margin}>
      {
        label &&
        <InputLabel
          id={name + '_label'}
          shrink={true}
          required={required}
        >
          {label}
        </InputLabel>
      }
      <Select
        labelId={name + '_label'}
        id={name}
        name={name}
        value={value}
        onChange={event => onFieldChange && onFieldChange({
          name: name || '',
          type: 'string',
          value: event.target.value
        })}
        {...other}
      />
    </FormControl>
);

// endregion
