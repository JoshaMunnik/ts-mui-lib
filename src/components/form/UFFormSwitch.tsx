// region imports

import * as React from "react";
import {UFFormFieldChangeEvent} from "../../events/UFFormFieldChangeEvent";
import {FormControl, FormControlLabel, InputLabel, Switch, SwitchProps} from "@mui/material";
import {memo} from "react";

// endregion

// region component

/**
 * Properties for {@link UFFormSwitch}
 */
export interface UFFormSwitchProps extends SwitchProps {
  /**
   * Label to show after the switch
   */
  label: React.ReactNode;

  /**
   * Label to show at top of the switch
   */
  topLabel?: React.ReactNode;

  /**
   * Name of form
   */
  name?: string;

  /**
   * Initial checked value
   */
  checked: boolean;

  /**
   * A simplified change event.
   *
   * @param anEvent
   *   Event data
   */
  onFieldChange?: (anEvent: UFFormFieldChangeEvent) => any;

  /**
   * Margin
   */
  margin?: 'normal' | 'dense' | 'none'
}

/**
 * {@link UFFormSwitch} combines `FormControlLabel` and `Switch` into a single component.
 */
export const UFFormSwitch = memo(
  (
    {
      name,
      checked,
      onFieldChange,
      label,
      topLabel,
      disabled
    }: UFFormSwitchProps
  ) =>
    <FormControl>
      {
        topLabel &&
        <InputLabel>{topLabel}</InputLabel>
      }
      <FormControlLabel
        disabled={disabled}
        control={
          <Switch
            name={name}
            checked={checked}
            onChange={(event, checked) => onFieldChange && onFieldChange({
              name: name || '',
              type: 'boolean',
              value: checked
            })}
            disabled={disabled}
          />
        }
        label={label}
      />
    </FormControl>
);

// endregion

