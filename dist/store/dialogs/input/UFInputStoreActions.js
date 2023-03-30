// region imports
import { UFInputActionType } from "./UFInputActionType";
import { UFRedux } from "@ultraforce/ts-react-lib/dist/tools/UFRedux";
// endregion
// region local
/**
 * Initial state
 */
const initialState = {
    show: false,
    title: '',
    content: '',
    value: '',
    allowEmpty: false,
    ok: 'Ok',
    cancel: 'Cancel',
    okColor: 'primary',
    cancelColor: 'secondary',
    callback: (value) => {
    }
};
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
    static show(aTitle, aContent, aCallback, aValue = '', anOk = 'Ok', aCancel = 'Cancel', anAllowEmpty = false, anOkColor = 'primary', anCancelColor = 'secondary') {
        return UFRedux.reducerAction(UFInputActionType.Show)({
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
        return UFRedux.reducerAction(UFInputActionType.Hide)({});
    }
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
    static reducer(aState = initialState, anActionData) {
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
                return Object.assign(Object.assign({}, aState), { show: false });
            default:
                return aState;
        }
    }
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
UFInputStoreActions.popup = (aTitle, aContent, aValue = '', anOk = 'Ok', aCancel = 'Cancel', anAllowEmpty = false, anOkColor = 'primary', anCancelColor = 'secondary') => dispatch => new Promise(resolve => {
    dispatch(UFInputStoreActions.show(aTitle, aContent, value => {
        dispatch(UFInputStoreActions.hide());
        resolve(value);
    }, aValue, anOk, aCancel, anAllowEmpty, anOkColor, anCancelColor));
});
//# sourceMappingURL=UFInputStoreActions.js.map