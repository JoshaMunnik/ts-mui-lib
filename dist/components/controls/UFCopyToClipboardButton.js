var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// region imports
import * as React from 'react';
import { Button, IconButton, Snackbar } from "@mui/material";
import { memo, useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import { UFSlideUp } from "../transitions/UFSlideUp";
/**
 * A button to copy a text to the clipboard and show a snackbar when it is finished.
 */
export const UFCopyBotClipboardButton = memo((_a) => {
    var { value, message, anchorOrigin = { horizontal: 'left', vertical: 'bottom' } } = _a, other = __rest(_a, ["value", "message", "anchorOrigin"]);
    const [open, setOpen] = useState(false);
    return (_jsxs(React.Fragment, { children: [_jsx(Button, Object.assign({}, other, { onClick: () => __awaiter(void 0, void 0, void 0, function* () {
                    yield navigator.clipboard.writeText(value);
                    setOpen(true);
                }) })), _jsx(Snackbar, { open: open, autoHideDuration: 3000, onClose: () => setOpen(false), message: message, anchorOrigin: anchorOrigin, TransitionComponent: UFSlideUp, action: _jsx(IconButton, Object.assign({ size: "small", "aria-label": "close", color: "inherit", onClick: () => setOpen(false) }, { children: _jsx(CloseIcon, { fontSize: "small" }) })) })] }));
});
//# sourceMappingURL=UFCopyToClipboardButton.js.map