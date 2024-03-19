import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { UFStyledDialogActions } from "./UFStyledDialogActions.js";
import { UFDialogTitleIcon } from "./UFDialogTitleIcon.js";
import { Button, Dialog, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import { Warning } from "@mui/icons-material";
import CloseIcon from '@mui/icons-material/Close';
import { memo } from "react";
/**
 * Defines an alert dialog. Which shows a message and a close button. The user has to click the close button, clicking
 * outside or pressing escape will not close the dialog.
 */
export const UFAlertDialog = memo(({ title = null, content, close, variant = 'contained', onClose, open = true }) => {
    if (typeof content === 'string') {
        content = _jsx(DialogContentText, { children: content });
    }
    return (_jsxs(Dialog, Object.assign({ open: open }, { children: [title &&
                _jsxs(DialogTitle, { children: [_jsx(UFDialogTitleIcon, { icon: _jsx(Warning, {}) }), title] }), _jsx(DialogContent, { children: content }), _jsx(UFStyledDialogActions, { children: _jsx(Button, Object.assign({ color: "primary", variant: variant, startIcon: _jsx(CloseIcon, {}), onClick: onClose }, { children: close })) })] })));
});
//# sourceMappingURL=UFAlertDialog.js.map