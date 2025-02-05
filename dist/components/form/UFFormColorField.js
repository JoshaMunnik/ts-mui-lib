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
import { UFFormTextField } from "./UFFormTextField.js";
import { memo } from "react";
// endregion
// region component
/**
 * {@link UFFormColorField} is a control to select a color.
 */
export const UFFormColorField = memo((_a) => {
    var other = __rest(_a, []);
    return _jsx(UFFormTextField, Object.assign({ type: "color" }, other));
});
//# sourceMappingURL=UFFormColorField.js.map