import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Warning } from "@mui/icons-material";
import { Button, Dialog, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import { UFStyledDialogActions } from "./UFStyledDialogActions";
import { UFDialogTitleIcon } from "./UFDialogTitleIcon";
import CloseIcon from '@mui/icons-material/Close';
import CheckIcon from '@mui/icons-material/Check';
import { memo } from "react";
/**
 * Defines a confirm dialog. The dialog shows a question to which the user can answer yes (callback is
 * called with true) or no (callback is called with false). Clicking outside the dialog will result
 * in a callback with false.
 */
export const UFConfirmDialog = memo(({ title = null, content, yes, no, variant = 'contained', onClose, open = true, yesColor = "primary", noColor = "secondary" }) => {
    if (typeof content === 'string') {
        content = _jsx(DialogContentText, { children: content });
    }
    return (_jsxs(Dialog, Object.assign({ open: open, onClose: () => onClose(false) }, { children: [title &&
                _jsxs(DialogTitle, { children: [_jsx(UFDialogTitleIcon, { icon: _jsx(Warning, {}) }), title] }), _jsx(DialogContent, { children: content }), _jsxs(UFStyledDialogActions, { children: [_jsx(Button, Object.assign({ color: yesColor, variant: variant, startIcon: _jsx(CheckIcon, {}), onClick: () => onClose(true) }, { children: yes })), _jsx(Button, Object.assign({ color: noColor, variant: variant, startIcon: _jsx(CloseIcon, {}), onClick: () => onClose(false) }, { children: no }))] })] })));
});
//# sourceMappingURL=UFConfirmDialog.js.map