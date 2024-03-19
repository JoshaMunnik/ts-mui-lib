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
import { FormControl } from "@mui/material";
import { UFTextField } from "./UFTextField.js";
// endregion
// region component
/**
 * {@link UFFormTextField} wraps {@link UFTextField} in a FormControl.
 */
export const UFFormTextField = (_a) => {
    var { fullWidth = true, variant = 'standard', value, sx = {} } = _a, other = __rest(_a, ["fullWidth", "variant", "value", "sx"]);
    return _jsx(FormControl, Object.assign({ fullWidth: fullWidth, variant: variant, sx: sx }, { children: _jsx(UFTextField, Object.assign({}, other, { value: value || '' })) }));
};
//# sourceMappingURL=UFFormTextField.js.map