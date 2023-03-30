// region imports

import * as React from 'react';
import {Box, BoxProps, Button, ButtonProps} from "@mui/material";
import {green} from '@mui/material/colors';
import CircularProgress from '@mui/material/CircularProgress';

// endregion

// region local types

/**
 * Properties for {@link UFBusy}.
 */
export interface UFBusyProps extends BoxProps {
  /**
   * When true show busy animation on top of the content in the button
   */
  busy: boolean;

  /**
   * Color for busy animation, default is green[500]
   */
  busyColor?: string;

  /**
   * Size to use (default is 24)
   */
  size?: number;

  /**
   * Thickness (default is 5)
   */
  thickness?: number;
}

// endregion

// region component

/**
 * {@link UFBusy} can be used as a wrapper, it will add a busy animation on top of the children.
 */
export const UFBusy: React.FC<UFBusyProps> = (
  {
    busy,
    busyColor = green[500],
    size = 24,
    thickness = 5,
    children,
    ...other
  }) => (
  <Box
    {...other}
    position='relative'
    style={{
      pointerEvents: busy ? 'none' : 'all'
    }}
  >
    {children}
    {
      busy &&
      <CircularProgress
        size={size}
        thickness={thickness}
        disableShrink={true}
        sx={{
          color: busyColor,
          position: 'absolute',
          top: '50%',
          left: '50%',
          marginTop: `-${size / 2}px`,
          marginLeft: `-${size / 2}px`
        }}
      />
    }
  </Box>
);

// endregion