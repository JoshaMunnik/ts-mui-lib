// region import
import { UFAlertActionType } from "./UFAlertActionType";
import { UFRedux } from "@ultraforce/ts-react-lib/dist/tools/UFRedux";
// endregion
// region local variables
/**
 * Initial system store state
 */
const initialState = {
    show: false,
    title: '',
    content: '',
    close: 'Close',
    closeColor: 'primary',
    callback: () => {
    }
};
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
    static show(aTitle, aContent, aCallback, aClose = 'Close', aCloseColor = 'primary') {
        return UFRedux.reducerAction(UFAlertActionType.Show)({
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
        return UFRedux.reducerAction(UFAlertActionType.Hide)({});
    }
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
    static reducer(aState = initialState, anAction) {
        switch (anAction.type) {
            case UFAlertActionType.Show:
                return Object.assign(Object.assign({}, aState), { show: true, title: anAction.title, content: anAction.content, close: anAction.close, closeColor: anAction.closeColor, callback: anAction.callback });
            case UFAlertActionType.Hide:
                return Object.assign(Object.assign({}, aState), { show: false });
            default:
                return aState;
        }
    }
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
UFAlertStoreActions.popup = (aTitle, aContent, aClose = 'Close', aCloseColor = 'primary') => dispatch => new Promise(resolve => {
    dispatch(UFAlertStoreActions.show(aTitle, aContent, () => {
        dispatch(UFAlertStoreActions.hide());
        resolve();
    }, aClose, aCloseColor));
});
//# sourceMappingURL=UFAlertStoreActions.js.map