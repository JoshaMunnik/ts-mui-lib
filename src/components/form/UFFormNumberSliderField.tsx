// region imports

import * as React from 'react'
import Typography from "@mui/material/Typography";
import {FormControl, InputLabel, Slider, Stack, TextField} from "@mui/material";
import {UFTextFieldProps} from "./UFTextField";
import {UFText} from "@ultraforce/ts-general-lib/dist/tools/UFText";

// endregion

// region component

/**
 * Properties for {@link UFFormNumberSliderField}
 */
export type UFFormNumberSliderFieldProps = Omit<UFTextFieldProps, 'fullWidth'> & {
  /**
   * Initial value (default is minValue)
   */
  readonly value?: number;

  /**
   * Minimum value allowed (default is Number.MIN_VALUE)
   */
  readonly minValue: number;

  /**
   * Maximum value allowed (default is Number.MAX_VALUE)
   */
  readonly maxValue: number;

  /**
   * When true use full width, else use 8em (default is false)
   */
  readonly fullWidth: boolean;

  /**
   * When true show a number input box next to the slider.
   */
  readonly showInput: boolean;

  /**
   * Label to show on left part of the slider. Can contain the macro's '$value$', '$minValue$' and '$maxValue$'.
   *
   */
  readonly leftLabel?: string;

  /**
   * Label to show right part of the slider. Can contain the macro's '$value$', '$minValue$' and '$maxValue$'.
   */
  readonly rightLabel?: string;

  /**
   * True to show a track on the left (default is false).
   */
  readonly track: boolean;
}

/**
 * State for {@link UFFormNumberTextField}
 */
export type UFFormNumberSliderFieldState = {
  readonly value: number;
  readonly valueAsText: string;
  readonly inputFocused: boolean;
  readonly sliderSelected: boolean;
}

/**
 * {@link UFFormNumberSliderField} shows a slider with an optional input field.
 */
export class UFFormNumberSliderField
  extends React.PureComponent<UFFormNumberSliderFieldProps, UFFormNumberSliderFieldState> {
  // region static variables

  /**
   * Default properties.
   */
  static defaultProps: UFFormNumberSliderFieldProps = {
    minValue: -Number.MAX_VALUE,
    maxValue: Number.MAX_VALUE,
    fullWidth: true,
    showInput: false,
    track: false
  };

  // endregion

  // region constructor

  /**
   * Constructs an instance of {@link UFFormNumberSliderField}
   *
   * @param {object} aProps
   *   Component properties
   */
  constructor(aProps: UFFormNumberSliderFieldProps) {
    super(aProps);
    const value = (aProps.value === undefined ? (aProps.minValue || 0) : aProps.value);
    this.state = {
      value: value,
      valueAsText: value.toString(),
      inputFocused: false,
      sliderSelected: false
    };
  }

  // endregion

  // region support methods

  /**
   * Parses the value as integer.
   *
   * @param aValue
   *   Value to parse
   *
   * @returns Parsed value
   */
  private parse(aValue: string): number {
    return parseInt(aValue);
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

  // endregion

  // region event handlers

  /**
   * Handles input loosing input focus
   */
  private handleInputBlur() {
    this.setState({
      inputFocused: false
    });
    let value = this.parse(this.state.valueAsText);
    if (isNaN(value)) {
      value = this.props.minValue;
    }
    value = Math.max(Math.min(value, this.props.maxValue!), this.props.minValue!);
    this.setState({value: value, valueAsText: value.toString()}, () => this.invokeFieldChangeEvent(value));
  };

  /**
   * Handles input gaining input focus
   */
  private handleInputFocus() {
    this.setState({
      inputFocused: true
    });
  };

  /**
   * Handles slider being clicked upon
   */
  private handleSliderDown() {
    this.setState({
      sliderSelected: true
    });
  }

  /**
   * Handles slider no longer being clicked upon
   */
  private handleSliderUp() {
    this.setState({
      sliderSelected: false
    });
  }


  /**
   * Handles changes to the slider.
   *
   * @param {number} aValue
   *   Current slider value
   */
  private handleSliderChange(aValue: number) {
    this.setState({value: aValue, valueAsText: aValue.toString()}, () => this.invokeFieldChangeEvent(aValue));
  }

  /**
   * Handles changes to the text input.
   *
   * @param {string} aValueAsText
   *   Current entered text.
   */
  private handleInputChange(aValueAsText: string) {
    let value: number;
    if (aValueAsText.length) {
      value = this.parse(aValueAsText);
      if (!this.state.inputFocused) {
        value = Math.max(Math.min(value, this.props.maxValue), this.props.minValue);
      }
      if (aValueAsText !== value.toString()) {
        aValueAsText = value.toString()
      }
    } else {
      value = this.props.minValue;
    }
    this.setState({value: value, valueAsText: aValueAsText}, () => this.invokeFieldChangeEvent(value));
  }

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
    aNewProps: UFFormNumberSliderFieldProps, aCurrentState: UFFormNumberSliderFieldState
  ): Partial<UFFormNumberSliderFieldState> | null {
    // only update if input is not active, else let this component handle changes
    if ((aNewProps.value !== undefined) && !aCurrentState.inputFocused) {
      return {
        value: aNewProps.value,
        valueAsText: aNewProps.value.toString()
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
      minValue, fullWidth, maxValue, disabled, showInput, leftLabel, rightLabel, track, label, name
    } = this.props;
    const map = {
      '$value$': this.state.value,
      '$minValue$': minValue,
      '$maxValue$': maxValue
    };
    return (
      <FormControl fullWidth={fullWidth}>
        {
          label &&
          <InputLabel shrink={true} variant="standard" focused={this.state.inputFocused || this.state.sliderSelected}>{label}</InputLabel>
        }
        <Stack
          direction="row"
          spacing={'15px'}
          sx={{
            paddingTop: '0.8em',
            alignItems: 'center',
            position: 'relative',
            width: fullWidth ? '100%' : (showInput ? '14rem' : '8rem')
          }}>
          {
            leftLabel &&
            <Typography variant="caption">
              {UFText.replace(leftLabel, map)}
            </Typography>
          }
          <Slider
            track={track ? 'normal' : false}
            min={minValue}
            max={maxValue}
            value={this.state.value}
            onChange={(event, value) => this.handleSliderChange(value as number)}
            onMouseDown={() => this.handleSliderDown()}
            onMouseUp={() => this.handleSliderUp()}
          />
          {
            rightLabel &&
            <Typography variant="caption">
              {UFText.replace(rightLabel, map)}
            </Typography>
          }
          {
            showInput && <TextField
              label={false}
              variant="standard"
              value={this.state.valueAsText}
              disabled={disabled}
              type='number'
              onBlur={() => this.handleInputBlur()}
              onFocus={() => this.handleInputFocus()}
              onChange={
                (event) => this.handleInputChange(event.target.value)
              }
              sx={{
                flexGrow: 1,
                width: '100px'
              }}
              inputProps={{
                min: {minValue},
                max: {maxValue},
                sx: {
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
              }}
            />}
        </Stack>
      </FormControl>
    );
  }
}

// endregion
