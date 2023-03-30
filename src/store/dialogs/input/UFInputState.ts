// region types

import * as React from "react";
import {UFButtonColorType} from "../../../types/UFButtonColorType";

/**
 * The input popup state data
 */
export interface UFInputState {
  /**
   * When true show input popup
   */
  show: boolean;

  /**
   * Title for input popup
   */
  title: React.ReactNode;

  /**
   * Content for input popup
   */
  content: React.ReactNode;

  /**
   * Initial value to show at input field
   */
  value: string;

  /**
   * When true allow empty values, else disable ok button with empty box
   */
  allowEmpty: boolean;

  /**
   * Caption for ok button
   */
  ok: React.ReactNode;

  /**
   * Caption for cancel button
   */
  cancel: React.ReactNode;

  /**
   * Color for ok button
   */
  okColor: UFButtonColorType;

  /**
   * Color for cancel button
   */
  cancelColor: UFButtonColorType;

  /**
   * Callback to call when user clicks ok or cancel
   *
   * @param choice
   *   Choice made by the user or false if use cancelled the input
   */
  callback: (value: string | false) => void
}

// endregion
