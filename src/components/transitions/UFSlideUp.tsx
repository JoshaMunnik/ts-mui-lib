// region imports

import * as React from "react";
import {Slide, SlideProps} from "@mui/material";

// endregion

// region component

/**
 * {@link UFSlideUp} creates a `Slide` component to slide upwards.
 */
export const UFSlideUp: React.FC<SlideProps> = props => <Slide {...props} direction="up" />;

// endregion
