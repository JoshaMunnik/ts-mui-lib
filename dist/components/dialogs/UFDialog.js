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
import { jsx as _jsx } from "react/jsx-runtime";
import { Dialog } from "@mui/material";
/**
 * {@link UFDialog} extends `Dialog` and adds support for modal/not-modal dialogs
 */
export const UFDialog = (_a) => {
    var { modal = true, BackdropProps = {}, PaperProps = {}, hideBackdrop = false } = _a, other = __rest(_a, ["modal", "BackdropProps", "PaperProps", "hideBackdrop"]);
    if (!modal) {
        if (!BackdropProps.hasOwnProperty('style')) {
            BackdropProps.style = {};
        }
        BackdropProps.style['pointerEvents'] = 'none';
        if (!PaperProps.hasOwnProperty('style')) {
            PaperProps.style = {};
        }
        PaperProps.style['pointerEvents'] = 'all';
    }
    return _jsx(Dialog, Object.assign({}, other, { style: {
            pointerEvents: modal ? 'all' : 'none'
        }, BackdropProps: BackdropProps, PaperProps: PaperProps, hideBackdrop: !modal || hideBackdrop }));
};
//# sourceMappingURL=UFDialog.js.map