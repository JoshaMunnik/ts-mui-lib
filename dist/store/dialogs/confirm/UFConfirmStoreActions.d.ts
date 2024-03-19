import * as React from "react";
import { ThunkAction } from "redux-thunk";
import { Action } from "redux";
import { UFConfirmActionType } from "./UFConfirmActionType.js";
import { UFConfirmState } from "./UFConfirmState.js";
import { UFButtonColorType } from "../../../types/UFButtonColorType.js";
/**
 * All confirm actions.
 */
export type UFConfirmAction = ReturnType<typeof UFConfirmStoreActions.show> | ReturnType<typeof UFConfirmStoreActions.hide>;
/**
 * Contains the actions that can be dispatched and the reducer.
 */
export declare class UFConfirmStoreActions {
    /**
     * Shows the confirmation popup.
     *
     * @param aTitle
     *   Title to use
     * @param aContent
     *   Content to use
     * @param aCallback
     *   Callback to call
     * @param aYes
     *   Yes label (default is 'Yes')
     * @param aNo
     *   No label (default is 'No')
     * @param aYesColor
     *   Color for yes (default is 'primary')
     * @param aNoColor
     *   Color for no (default is 'secondary')
     */
    static show(aTitle: React.ReactNode, aContent: React.ReactNode, aCallback: (choice: boolean) => void, aYes?: React.ReactNode, aNo?: React.ReactNode, aYesColor?: UFButtonColorType, aNoColor?: UFButtonColorType): {
        type: UFConfirmActionType.Show;
    } & {
        title: React.ReactNode;
        content: React.ReactNode;
        callback: (choice: boolean) => void;
        yes: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null;
        no: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null;
        yesColor: "success" | "info" | "warning" | "error" | "inherit" | "primary" | "secondary";
        noColor: "success" | "info" | "warning" | "error" | "inherit" | "primary" | "secondary";
    };
    /**
     * Hides the confirmation popup.
     */
    static hide(): {
        type: UFConfirmActionType.Hide;
    };
    /**
     * Thunk action to perform a confirmation popup.
     *
     * TState is the complete store state that should include {@link UFConfirmState} somewhere.
     *
     * @param aTitle
     *   Title to use
     * @param aContent
     *   Content to use
     * @param aYes
     *   Yes label (default is 'Yes')
     * @param aNo
     *   No label (default is 'No')
     * @param aYesColor
     *   Color for yes (default is 'primary')
     * @param aNoColor
     *   Color for no (default is 'secondary')
     *
     * @returns A function that expects a dispatch parameter and returns a Promise that will return a boolean value.
     */
    static popup: <TState>(aTitle: React.ReactNode, aContent: React.ReactNode, aYes?: React.ReactNode, aNo?: React.ReactNode, aYesColor?: UFButtonColorType, aNoColor?: UFButtonColorType) => ThunkAction<Promise<boolean>, TState, null, Action<UFConfirmActionType>>;
    /**
     * This is not an action, but the reducer to reduce the action on the state.
     *
     * @param aState
     *   Current state, when undefined the initial state will be used
     * @param anAction
     *   Action to reduce
     *
     * @returns New state
     */
    static reducer(aState: UFConfirmState | undefined, anAction: UFConfirmAction): UFConfirmState;
}
