// region imports

import * as React from 'react';
import {memo, useState} from 'react';
import {FormControl, InputLabel, Slider, SliderProps} from "@mui/material";
import {Mark} from "@mui/base";
import {UFFormFieldChangeEvent} from "../../events/UFFormFieldChangeEvent.js";

// endregion

// region exports

/**
 * Props for {@link UFFormSlider}
 */
export interface UFFormSliderFieldProps extends SliderProps {
  /**
   * Label to show above slider
   */
  label: React.ReactNode;

  /**
   * True to show full width
   */
  fullWidth?: boolean;

  /**
   * A simplified change event.
   *
   * @param anEvent
   *   Event data
   */
  readonly onFieldChange?: (anEvent: UFFormFieldChangeEvent) => any;
}

/**
 * {@link UFFormSlider} wraps a `Slider` in a `FormControl` and adds a `InputLabel` above it.
 */
export const UFFormSlider = memo(
  (
    {label, fullWidth = true, marks, onFieldChange, name, ...other}: UFFormSliderFieldProps
  ) => {
    const [focus, setFocus] = useState(false);
    const labels = marks && (marks as Mark[]).length && (marks as Mark[]).find(mark => !!mark.label);
    return (
      <FormControl fullWidth={fullWidth}>
        <InputLabel shrink={true} focused={focus} variant="standard">{label}</InputLabel>
        <Slider
          {...other}
          sx={{
            margin: `1rem 12px ${labels ? '1rem' : '0'}`,
            width: 'calc(100% - 24px)'
          }}
          marks={marks}
          name={name}
          onChange={
            (event, value) =>
              onFieldChange && onFieldChange({value, name: name || '', type: 'number'})
          }
          onMouseDown={() => setFocus(true)}
          onMouseUp={() => setFocus(false)}
        />
      </FormControl>
    );
  }
);

// endregion