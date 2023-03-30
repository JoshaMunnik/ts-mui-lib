// region imports

import * as React from "react";
import {ThunkAction} from "redux-thunk";
import {Action} from "redux";
import {UFButtonColorType} from "../../../types/UFButtonColorType";
import {UFInputActionType} from "./UFInputActionType";
import {UFInputState} from "./UFInputState";
import {UFRedux} from "@ultraforce/ts-react-lib/dist/tools/UFRedux";

// endregion

// region local

/**
 * Initial state
 */
const initialState: UFInputState = {
  show: false,
  title: '',
  content: '',
  value: '',
  allowEmpty: false,
  ok: 'Ok',
  cancel: 'Cancel',
  okColor: 'primary',
  cancelColor: 'secondary',
  callback: (value: string | false) => {
  }
};

// endregion

// region local types

/**
 * All input actions.
 */
export type UFInputAction = ReturnType<typeof UFInputStoreActions.show> | ReturnType<typeof UFInputStoreActions.hide>;

// endregion

/**
 * Contains the actions that can be dispatched and the reducer.
 */
export class UFInputStoreActions {
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
  static show(
    aTitle: React.ReactNode,
    aContent: React.ReactNode,
    aCallback: (value: string | false) => void,
    aValue: string = '',
    anOk: React.ReactNode = 'Ok',
    aCancel: React.ReactNode = 'Cancel',
    anAllowEmpty: boolean = false,
    anOkColor: UFButtonColorType = 'primary',
    anCancelColor: UFButtonColorType = 'secondary'
  ) {
    return UFRedux.reducerAction<UFInputActionType.Show>(UFInputActionType.Show)({
      title: aTitle,
      content: aContent,
      callback: aCallback,
      value: aValue,
      ok: anOk,
      cancel: aCancel,
      allowEmpty: anAllowEmpty,
      okColor: anOkColor,
      cancelColor: anCancelColor
    });
  }

  /**
   * Hides the input popup.
   */
  static hide() {
    return UFRedux.reducerAction<UFInputActionType.Hide>(UFInputActionType.Hide)({});
  }

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
  static popup = <TState>(
    aTitle: React.ReactNode,
    aContent: React.ReactNode,
    aValue: string = '',
    anOk: React.ReactNode = 'Ok',
    aCancel: React.ReactNode = 'Cancel',
    anAllowEmpty: boolean = false,
    anOkColor: UFButtonColorType = 'primary',
    anCancelColor: UFButtonColorType = 'secondary'
  ): ThunkAction<Promise<string | false>, TState, null, Action<UFInputActionType>> =>
    dispatch => new Promise<string | false>(
      resolve => {
        dispatch(UFInputStoreActions.show(
          aTitle,
          aContent,
          value => {
            dispatch(UFInputStoreActions.hide());
            resolve(value);
          },
          aValue,
          anOk,
          aCancel,
          anAllowEmpty,
          anOkColor,
          anCancelColor
        ));
      }
    );

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
  static reducer(aState: UFInputState = initialState, anActionData: UFInputAction): UFInputState {
    switch (anActionData.type) {
      case UFInputActionType.Show:
        return {
          show: true,
          title: anActionData.title,
          content: anActionData.content,
          value: anActionData.value,
          allowEmpty: anActionData.allowEmpty,
          ok: anActionData.ok,
          cancel: anActionData.cancel,
          okColor: anActionData.okColor,
          cancelColor: anActionData.cancelColor,
          callback: anActionData.callback
        };
      case UFInputActionType.Hide:
        return {
          ...aState,
          show: false
        };
      default:
        return aState;
    }
  }
}