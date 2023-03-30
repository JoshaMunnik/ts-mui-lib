import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button, Dialog, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import { UFFormTextField } from "../form/UFFormTextField";
import { UFStyledDialogActions } from "./UFStyledDialogActions";
import { memo, useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import CheckIcon from '@mui/icons-material/Check';
/**
 * Shows an input dialog where the user can enter a text.
 */
export const UFInputDialog = memo(({ title = null, ok, cancel, allowEmpty, onClose, content, value, variant = 'contained', open = true }) => {
    {
        const [editValue, setEditValue] = useState(value);
        if (typeof content === 'string') {
            content = _jsx(DialogContentText, { children: content });
        }
        return (_jsxs(Dialog, Object.assign({ open: open, onClose: () => onClose(false) }, { children: [title &&
                    _jsx(DialogTitle, { children: title }), _jsxs(DialogContent, { children: [content, _jsx(UFFormTextField, { value: editValue, onFieldChange: ({ value }) => setEditValue(value), autoFocus: true })] }), _jsxs(UFStyledDialogActions, { children: [_jsx(Button, Object.assign({ color: "primary", variant: variant, startIcon: _jsx(CheckIcon, {}), onClick: () => onClose(editValue), disabled: !allowEmpty && (editValue.length === 0) }, { children: ok })), _jsx(Button, Object.assign({ color: "secondary", variant: variant, startIcon: _jsx(CloseIcon, {}), onClick: () => onClose(false) }, { children: cancel }))] })] })));
    }
});
//# sourceMappingURL=UFInputDialog.js.map