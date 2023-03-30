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
import { Box } from "@mui/material";
import { green } from '@mui/material/colors';
import CircularProgress from '@mui/material/CircularProgress';
// endregion
// region component
/**
 * {@link UFBusy} can be used as a wrapper, it will add a busy animation on top of the children.
 */
export const UFBusy = (_a) => {
    var { busy, busyColor = green[500], size = 24, thickness = 5, children } = _a, other = __rest(_a, ["busy", "busyColor", "size", "thickness", "children"]);
    return (_jsxs(Box, Object.assign({}, other, { position: 'relative', style: {
            pointerEvents: busy ? 'none' : 'all'
        } }, { children: [children, busy &&
                _jsx(CircularProgress, { size: size, thickness: thickness, disableShrink: true, sx: {
                        color: busyColor,
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        marginTop: `-${size / 2}px`,
                        marginLeft: `-${size / 2}px`
                    } })] })));
};
//# sourceMappingURL=UFBusy.js.map