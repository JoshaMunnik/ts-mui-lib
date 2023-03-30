import * as React from 'react';
import { BoxProps } from "@mui/material";
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
/**
 * {@link UFBusy} can be used as a wrapper, it will add a busy animation on top of the children.
 */
export declare const UFBusy: React.FC<UFBusyProps>;
