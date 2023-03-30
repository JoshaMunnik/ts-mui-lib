import * as React from "react";
import { ThunkAction } from "redux-thunk";
import { Action } from "redux";
import { UFAlertState } from "./UFAlertState";
import { UFButtonColorType } from "../../../types/UFButtonColorType";
import { UFAlertActionType } from "./UFAlertActionType";
/**
 * All alert store actions.
 */
export type UFAlertAction = ReturnType<typeof UFAlertStoreActions.show> | ReturnType<typeof UFAlertStoreActions.hide>;
/**
 * Contains the actions that can be dispatched and the reducer.
 */
export declare class UFAlertStoreActions {
    /**
     * Shows the alert popup.
     *
     * @param aTitle
     *   Title to use
     * @param aContent
     *   Content to use
     * @param aCallback
     *   Callback to call
     * @param aClose
     *   Close caption
     * @param aCloseColor
     *   Color for close button
     */
    static show(aTitle: React.ReactNode, aContent: React.ReactNode, aCallback: () => void, aClose?: React.ReactNode, aCloseColor?: UFButtonColorType): {
        type: UFAlertActionType.Show;
    } & {
        title: React.ReactNode;
        content: React.ReactNode;
        close: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null;
        closeColor: "success" | "info" | "warning" | "error" | "inherit" | "primary" | "secondary";
        callback: () => void;
    };
    /**
     * Hides the alert popup.
     */
    static hide(): {
        type: UFAlertActionType.Hide;
    };
    /**
     * Thunk action to perform an alert popup.
     *
     * @param aTitle
     *   Title to use
     * @param aContent
     *   Content to use
     * @param aClose
     *   Close caption (default is 'Close')
     * @param aCloseColor
     *   Color for close button (default is 'primary')
     *
     * @returns A function that expects a dispatch parameter and returns a Promise.
     */
    static popup: <TState>(aTitle: React.ReactNode, aContent: React.ReactNode, aClose?: React.ReactNode, aCloseColor?: UFButtonColorType) => ThunkAction<Promise<void>, TState, null, Action<UFAlertActionType>>;
    /**
     * Reduces the alert store to a new state.
     *
     * @param aState
     *   Current state
     * @param anAction
     *   Action to apply to the store
     *
     * @return new state
     */
    static reducer(aState: UFAlertState | undefined, anAction: UFAlertAction): UFAlertState;
}
