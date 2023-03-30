// region import

import * as React from "react";
import {ThunkAction} from "redux-thunk";
import {Action} from "redux";
import {UFAlertState} from "./UFAlertState";
import {UFButtonColorType} from "../../../types/UFButtonColorType";
import {UFAlertActionType} from "./UFAlertActionType";
import {UFRedux} from "@ultraforce/ts-react-lib/dist/tools/UFRedux";

// endregion

// region local variables

/**
 * Initial system store state
 */
const initialState: UFAlertState = {
  show: false,
  title: '',
  content: '',
  close: 'Close',
  closeColor: 'primary',
  callback: () => {
  }
};

// endregion

// region types

/**
 * All alert store actions.
 */
export type UFAlertAction = ReturnType<typeof UFAlertStoreActions.show> | ReturnType<typeof UFAlertStoreActions.hide>;

/**
 * Contains the actions that can be dispatched and the reducer.
 */
export class UFAlertStoreActions {
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
  static show(
    aTitle: React.ReactNode,
    aContent: React.ReactNode,
    aCallback: () => void,
    aClose: React.ReactNode = 'Close',
    aCloseColor: UFButtonColorType = 'primary'
  ) {
    return UFRedux.reducerAction<UFAlertActionType.Show>(UFAlertActionType.Show)({
      title: aTitle,
      content: aContent,
      close: aClose,
      closeColor: aCloseColor,
      callback: aCallback,
    });
  }

  /**
   * Hides the alert popup.
   */
  static hide() {
    return UFRedux.reducerAction<UFAlertActionType.Hide>(UFAlertActionType.Hide)({});
  }

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
  static popup = <TState>(
    aTitle: React.ReactNode,
    aContent: React.ReactNode,
    aClose: React.ReactNode = 'Close',
    aCloseColor: UFButtonColorType = 'primary'
  ): ThunkAction<Promise<void>, TState, null, Action<UFAlertActionType>> =>
    dispatch => new Promise(resolve => {
      dispatch(UFAlertStoreActions.show(
        aTitle,
        aContent,
        () => {
          dispatch(UFAlertStoreActions.hide());
          resolve();
        },
        aClose,
        aCloseColor
      ));
    });

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
  static reducer(aState: UFAlertState = initialState, anAction: UFAlertAction): UFAlertState {
    switch (anAction.type) {
      case UFAlertActionType.Show:
        return {
          ...aState,
          show: true,
          title: anAction.title,
          content: anAction.content,
          close: anAction.close,
          closeColor: anAction.closeColor,
          callback: anAction.callback
        };
      case UFAlertActionType.Hide:
        return {
          ...aState,
          show: false
        };
      default:
        return aState;
    }
  }
}