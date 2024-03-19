// region imports
import { UFRedux } from "@ultraforce/ts-react-lib/dist/tools/UFRedux.js";
import { UFConfirmActionType } from "./UFConfirmActionType.js";
// endregion
// region local
/**
 * Initial store state
 */
const initialState = {
    show: false,
    title: '',
    content: '',
    yes: 'Yes',
    no: 'No',
    yesColor: 'primary',
    noColor: 'secondary',
    callback: () => { }
};
/**
 * Contains the actions that can be dispatched and the reducer.
 */
export class UFConfirmStoreActions {
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
    static show(aTitle, aContent, aCallback, aYes = 'Yes', aNo = 'No', aYesColor = 'primary', aNoColor = 'secondary') {
        return UFRedux.reducerAction(UFConfirmActionType.Show)({
            title: aTitle,
            content: aContent,
            callback: aCallback,
            yes: aYes,
            no: aNo,
            yesColor: aYesColor,
            noColor: aNoColor
        });
    }
    /**
     * Hides the confirmation popup.
     */
    static hide() {
        return UFRedux.reducerAction(UFConfirmActionType.Hide)({});
    }
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
    static reducer(aState = initialState, anAction) {
        switch (anAction.type) {
            case UFConfirmActionType.Show:
                return Object.assign(Object.assign({}, aState), { show: true, title: anAction.title, content: anAction.content, yes: anAction.yes, no: anAction.no, yesColor: anAction.yesColor, noColor: anAction.noColor, callback: anAction.callback });
            case UFConfirmActionType.Hide:
                return Object.assign(Object.assign({}, aState), { show: false });
            default:
                return aState;
        }
    }
}
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
UFConfirmStoreActions.popup = (aTitle, aContent, aYes = 'Yes', aNo = 'No', aYesColor = 'primary', aNoColor = 'secondary') => dispatch => new Promise(resolve => {
    dispatch(UFConfirmStoreActions.show(aTitle, aContent, value => {
        dispatch(UFConfirmStoreActions.hide());
        resolve(value);
    }, aYes, aNo, aYesColor, aNoColor));
});
// endregion
//# sourceMappingURL=UFConfirmStoreActions.js.map