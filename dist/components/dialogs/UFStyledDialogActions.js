import { jsx as _jsx } from "react/jsx-runtime";
// region imports
import { DialogActions } from "@mui/material";
// endregion
// region component
/**
 * Adds padding to `DialogActions`.
 */
export const UFStyledDialogActions = ({ children }) => (_jsx(DialogActions, Object.assign({ disableSpacing: true, sx: {
        paddingBottom: 2,
        paddingTop: 1,
        paddingLeft: 3,
        paddingRight: 3,
        position: 'relative',
        gap: 1
    } }, { children: children })));
//# sourceMappingURL=UFStyledDialogActions.js.map