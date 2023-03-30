// region imports

import * as React from 'react';
import {Alert, AlertColor, Box, Collapse, IconButton} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

// endregion

// region local types and functions

// endregion

// region component

/**
 * Properties for {@link UFCollapsableAlert}
 */
export interface UFCollapsableAlertProps {
  /**
   * Message to show
   */
  readonly message: React.ReactNode;

  /**
   * True to show alert
   */
  readonly visible: boolean;

  /**
   * Callback that is called when alert gets closed
   */
  readonly onClose?: () => any;

  /**
   * True (default) to show a close button
   */
  readonly closeButton?: boolean;

  /**
   * Time in seconds after which to close it or 0 to keep it open until it gets closed via the close button.
   */
  readonly time?: number;

  /**
   * Severity
   */
  readonly severity?: AlertColor;
}

/**
 * {@link UFCollapsableAlert} shows an alert by growing and shrinking.
 */
export class UFCollapsableAlert extends React.PureComponent<UFCollapsableAlertProps> {
  // region private variables

  /**
   * Timer to hide alert automatically
   *
   * @type {NodeJS.Timer | null}
   */
  private m_timerHandle: NodeJS.Timer | null;

  // endregion

  // region constructor

  constructor(aProps: UFCollapsableAlertProps) {
    super(aProps);
    this.m_timerHandle = null;
  }

  // endregion

  // region private methods

  private stopTimer() {
    if (this.m_timerHandle) {
      clearTimeout(this.m_timerHandle);
      this.m_timerHandle = null;
    }
  }

  private startTimer() {
    this.stopTimer();
    if (this.props.time) {
      this.m_timerHandle = setTimeout(
        () => this.props.onClose && this.props.onClose(),
        this.props.time * 1000
      );
    }
  }

  // endregion

  // region react callbacks

  componentWillUnmount() {
    this.stopTimer();
  }

  componentDidUpdate(prevProps: Readonly<UFCollapsableAlertProps>, prevState: Readonly<{}>, snapshot?: any) {
    if (prevProps.visible != this.props.visible) {
      if (this.props.visible) {
        this.startTimer();
      } else {
        this.stopTimer();
      }
    }
  }

  render() {
    const {
      message,
      onClose,
      closeButton = true,
      severity = 'success',
      visible
    } = this.props;
    return (
      <Box sx={{width: '100%'}}>
        <Collapse in={visible}>
          <Alert
            severity={severity}
            action={
              closeButton &&
              <IconButton
                color="inherit"
                size="small"
                onClick={() => onClose && onClose()}
              >
                <CloseIcon fontSize="inherit"/>
              </IconButton>
            }
            sx={{mb: 2}}
          >
            {message}
          </Alert>
        </Collapse>
      </Box>
    );
  }

  // endregion
}

// endregion