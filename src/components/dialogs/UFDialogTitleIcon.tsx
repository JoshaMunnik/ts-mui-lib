// region imports

import * as  React from "react";
import {Box} from "@mui/material";

// endregion

// region component

/**
 * Properties for {@link UFDialogTitleIcon}
 */
export interface UFDialogTitleIconProps {
  icon: React.ReactNode;
}

/**
 * {@link UFDialogTitleIcon} is a wrapper for an icon, it adjust its vertical position and resizes it.
 *
 * @constructor
 */
export const UFDialogTitleIcon: React.FC<UFDialogTitleIconProps> = ({icon}) => (
  <Box sx={{
    verticalAlign: 'middle',
    marginRight: 2,
    transform: 'scale(1.2)',
    display: 'inline-block',
    paddingTop: '0.3em'
  }}
  >
    {icon}
  </Box>
);

// endregion
