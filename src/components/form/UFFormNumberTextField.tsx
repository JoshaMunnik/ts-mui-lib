// region imports

import * as React from 'react'
import Typography from "@mui/material/Typography";
import {UFFormTextField} from "./UFFormTextField.js";
import {FormControl, IconButton, Stack} from "@mui/material";
import {UFFormFieldChangeEvent} from "../../events/UFFormFieldChangeEvent.js";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import {UFMath} from "@ultraforce/ts-general-lib/dist/tools/UFMath.js";
import {UFTextField, UFTextFieldProps} from "./UFTextField.js";

// endregion

// region component

/**
 * Properties for {@link UFFormNumberTextField}
 */
export type UFFormNumberTextFieldProps = UFTextFieldProps & {
  /**
   * Initial value (default is minValue)
   */
  readonly value?: number;

  /**
   * Units, shown inside input field aligned to the right (default is '')
   */
  readonly unit: string;

  /**
   * Minimum value allowed (default is Number.MIN_VALUE)
   */
  readonly minValue: number;

  /**
   * Maximum value allowed (default is Number.MAX_VALUE)
   */
  readonly maxValue: number;

  /**
   * When true only accept integer values (default is true)
   */
  readonly integer: boolean;

  /**
   * When true use full width, else use 8em (default is false)
   */
  readonly fullWidth: boolean;

  /**
   * When true show +/- buttons behind the input field (and hide the increase/decrease button inside)
   */
  readonly showButtons: boolean;

  /**
   * Value to change value with when pressing + or -
   */
  readonly stepSize: number;
}

/**
 * State for {@link UFFormNumberTextField}
 */
export type UFFormNumberTextFieldState = {
  readonly value: string;
  readonly focused: boolean;
}

/**
 * {@link UFFormNumberTextField} extends {@link UFTextField} to enter numeric values.
 *
 * It uses "normal" as default value for margin and sets type to "number".
 */
export class UFFormNumberTextField extends React.PureComponent<UFFormNumberTextFieldProps, UFFormNumberTextFieldState> {
  // region static variables

  /**
   * Default properties.
   */
  static defaultProps: UFFormNumberTextFieldProps = {
    minValue: -Number.MAX_VALUE,
    maxValue: Number.MAX_VALUE,
    fullWidth: false,
    integer: true,
    showButtons: true,
    unit: '',
    stepSize: 1
  };

  // endregion

  // region constructor

  /**
   * Constructs an instance of {@link UFFormNumberTextField}
   *
   * @param {object} aProps
   *   Component properties
   */
  constructor(aProps: UFFormNumberTextFieldProps) {
    super(aProps);
    this.state = {
      value: (aProps.value === undefined ? (aProps.minValue || 0) : aProps.value).toString(),
      focused: false
    };
  }

  // endregion

  // region support methods

  /**
   * Parses the value either as float or integer (if props.integer is true).
   *
   * @param aValue
   *   Value to parse
   *
   * @returns Parsed value
   */
  private parse(aValue: string): number {
    return this.props.integer ? parseInt(aValue) : parseFloat(aValue);
  }

  /**
   * Fires a change event if any callback has been set.
   *
   * @param aValue
   *   Value to pass on
   */
  private invokeFieldChangeEvent(aValue: number) {
    if (this.props.onFieldChange) {
      this.props.onFieldChange({name: this.props.name || '', type: 'number', value: aValue});
    }
  }

  /**
   * Changes the value by a certain amount.
   *
   * @param aValue
   *   Value to add (can be negative)
   */
  private addValue(aValue: number) {
    if (this.state.focused && !UFMath.isNumeric(this.state.value)) {
      return;
    }
    const current = this.parse(this.state.value);
    const newValue = Math.min(this.props.maxValue!, Math.max(this.props.minValue!, current + aValue));
    this.setState({
      value: newValue.toString()
    }, () => {
      if (newValue !== current) {
        this.invokeFieldChangeEvent(newValue);
      }
    });
  }

  // endregion

  // region event handlers

  /**
   * Handles changes to the value.
   *
   * @param anEvent
   *   Event object
   */
  private handleFieldChange(anEvent: UFFormFieldChangeEvent) {
    let value: string = anEvent.value.toString();
    let newValue: number;
    if (value.length) {
      newValue = this.parse(value);
      if (!this.state.focused) {
        newValue = Math.max(Math.min(newValue, this.props.maxValue!), this.props.minValue!);
      }
      if (value !== newValue.toString()) {
        value = newValue.toString()
      }
    } else {
      newValue = 0;
    }
    this.setState({value: value}, () => this.invokeFieldChangeEvent(newValue));
  };

  /**
   * Handles input loosing input focus
   */
  private handleBlur() {
    this.setState({
      focused: false
    });
    let value = this.parse(this.state.value);
    if (isNaN(value)) {
      value = 0;
    }
    value = Math.max(Math.min(value, this.props.maxValue!), this.props.minValue!);
    this.setState({value: value.toString()}, () => this.invokeFieldChangeEvent(value));
  };

  /**
   * Handles input gaining input focus
   */
  private handleFocus() {
    this.setState({
      focused: true
    });
  };

  /**
   * Handles clicks on the + button
   */
  private handleIncrease() {
    this.addValue(+this.props.stepSize);
  };

  /**
   * Handles clicks on the - button
   */
  private handleDecrease() {
    this.addValue(-this.props.stepSize);
  };

  // endregion

  // region component methods

  /**
   * This method is called to obtain state changes for new props.
   *
   * @param {object} aNewProps
   *   New props
   * @param {object} aCurrentState
   *   Current state
   *
   * @return {object|null} an object with state changes or null if there are no
   *   changes.
   */
  static getDerivedStateFromProps(
    aNewProps: UFFormNumberTextFieldProps, aCurrentState: UFFormNumberTextFieldState
  ): Partial<UFFormNumberTextFieldState> | null {
    // only update if input is not active, else let this component handle changes
    if ((aNewProps.value !== undefined) && !aCurrentState.focused) {
      return {
        value: aNewProps.value.toString()
      };
    }
    return null;
  }

  /**
   * Renders the component.
   *
   * @returns html data
   */
  render() {
    const {
      style, unit, minValue, maxValue, integer, fullWidth = false, showButtons, disabled, stepSize, margin,
      inputProps, ...other
    } = this.props;
    return (
      <FormControl fullWidth={fullWidth}>
        <Stack
          direction="row"
          spacing={0.25}
          sx={{
            alignItems: 'flex-end',
            position: 'relative',
            maxWidth: fullWidth ? '100%' : showButtons ? '14rem' : '8rem'
          }}>
          <UFTextField
            {...other}
            value={this.state.value}
            disabled={disabled}
            type='number'
            onFieldChange={event => this.handleFieldChange(event)}
            onBlur={() => this.handleBlur()}
            onFocus={() => this.handleFocus()}
            sx={{
              flexGrow: 1,
            }}
            inputProps={{
              ...inputProps,
              sx: showButtons
                ? {
                  MozAppearance: 'textfield',
                  '&::-webkit-inner-spin-button': {
                    WebkitAppearance: 'none',
                    MozAppearance: 'none',
                    appearance: 'none',
                    margin: 0,
                  },
                  '&::-webkit-outer-spin-button': {
                    webkitAppearance: 'none',
                    mozAppearance: 'none',
                    appearance: 'none',
                    margin: 0,
                  }
                }
                : {}
            }}
          />
          {
            unit &&
            <Typography variant="caption" sx={{
              position: 'absolute',
              right: showButtons ? '72px' : '20px',
              bottom: '4px',
              color: 'text.secondary'
            }}>
              {unit}
            </Typography>
          }
          {
            showButtons &&
            <IconButton size="small" onClick={() => this.handleDecrease()} disabled={disabled}>
              <RemoveIcon/>
            </IconButton>
          }
          {
            showButtons &&
            <IconButton size="small" onClick={() => this.handleIncrease()} disabled={disabled}>
              <AddIcon/>
            </IconButton>
          }
        </Stack>
      </FormControl>
    );
  }
}

// endregion
