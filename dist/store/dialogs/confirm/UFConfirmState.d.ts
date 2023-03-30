import * as React from "react";
import { UFButtonColorType } from "../../../types/UFButtonColorType";
/**
 * The confirmation popup state data
 */
export interface UFConfirmState {
    /**
     * When true show confirm popup
     */
    show: boolean;
    /**
     * Title for confirm
     */
    title: React.ReactNode;
    /**
     * Content for confirm popup
     */
    content: React.ReactNode;
    /**
     * Caption for yes button
     */
    yes: React.ReactNode;
    /**
     * Caption for no button
     */
    no: React.ReactNode;
    /**
     * Color to use for yes button
     */
    yesColor: UFButtonColorType;
    /**
     * Color to use for no button
     */
    noColor: UFButtonColorType;
    /**
     * Callback to call when user makes choice
     *
     * @param choice
     *   Choice made by the user
     */
    callback: (choice: boolean) => void;
}
