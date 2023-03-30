import * as React from "react";
import { UFButtonColorType } from "../../../types/UFButtonColorType";
/**
 * The alert popup state data
 */
export interface UFAlertState {
    /**
     * When true show confirmation popup
     */
    show: boolean;
    /**
     * Title for confirmation
     */
    title: React.ReactNode;
    /**
     * Content for confirmation popup
     */
    content: React.ReactNode;
    /**
     * Caption for close button
     */
    close: React.ReactNode;
    /**
     * Color for close button
     */
    closeColor: UFButtonColorType;
    /**
     * Callback to call when user closes the alert box
     */
    callback: () => void;
}
