import * as React from "react";
import { ThunkAction } from "redux-thunk";
import { Action } from "redux";
import { UFButtonColorType } from "../../../types/UFButtonColorType";
import { UFInputActionType } from "./UFInputActionType";
import { UFInputState } from "./UFInputState";
/**
 * All input actions.
 */
export type UFInputAction = ReturnType<typeof UFInputStoreActions.show> | ReturnType<typeof UFInputStoreActions.hide>;
/**
 * Contains the actions that can be dispatched and the reducer.
 */
export declare class UFInputStoreActions {
    /**
     * Shows the input popup
     *
     * @param aTitle
     *   Title to use
     * @param aContent
     *   Content to use
     * @param aCallback
     *   Callback to call
     * @param aValue
     *   Initial value to show
     * @param anOk
     *   Ok caption
     * @param aCancel
     *   Cancel caption
     * @param anAllowEmpty
     *   Allow empty option
     * @param anOkColor
     *   Color for ok button
     * @param anCancelColor
     *   Color for cancel button
     */
    static show(aTitle: React.ReactNode, aContent: React.ReactNode, aCallback: (value: string | false) => void, aValue?: string, anOk?: React.ReactNode, aCancel?: React.ReactNode, anAllowEmpty?: boolean, anOkColor?: UFButtonColorType, anCancelColor?: UFButtonColorType): {
        type: UFInputActionType.Show;
    } & {
        title: React.ReactNode;
        content: React.ReactNode;
        callback: (value: string | false) => void;
        value: string;
        ok: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null;
        cancel: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null;
        allowEmpty: boolean;
        okColor: "success" | "info" | "warning" | "error" | "inherit" | "primary" | "secondary";
        cancelColor: "success" | "info" | "warning" | "error" | "inherit" | "primary" | "secondary";
    };
    /**
     * Hides the input popup.
     */
    static hide(): {
        type: UFInputActionType.Hide;
    };
    /**
     * Thunk action to perform an input popup.
     *
     * @param aTitle
     *   Title to use
     * @param aContent
     *   Content to use
     * @param aValue
     *   Initial value (default is '')
     * @param anOk
     *   Ok caption (default is 'Ok')
     * @param aCancel
     *   Cancel caption (default is 'Cancel')
     * @param anAllowEmpty
     *   When true allow for empty value, else disable Ok button if input field is empty (default is false)
     * @param anOkColor
     *   Color for ok button (default is 'primary')
     * @param anCancelColor
     *   Color for cancel button (default is 'secondary')
     *
     * @returns A function that expects a dispatch parameter and returns a Promise.
     */
    static popup: <TState>(aTitle: React.ReactNode, aContent: React.ReactNode, aValue?: string, anOk?: React.ReactNode, aCancel?: React.ReactNode, anAllowEmpty?: boolean, anOkColor?: UFButtonColorType, anCancelColor?: UFButtonColorType) => ThunkAction<Promise<string | false>, TState, null, Action<UFInputActionType>>;
    /**
     * Reduces the input store to a new state.
     *
     * @param aState
     *   Current state
     * @param anActionData
     *   Action to apply to the store
     *
     * @return new state
     */
    static reducer(aState: UFInputState | undefined, anActionData: UFInputAction): UFInputState;
}
