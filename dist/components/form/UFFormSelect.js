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
import { FormControl, InputLabel, Select } from "@mui/material";
import { memo } from "react";
/**
 * {@link UFFormSelect} is a wrapper for SelectField. It adds a label, a name and a fullWidth property.
 */
export const UFFormSelect = memo((_a) => {
    var { variant = 'standard', name, label = false, value, fullWidth = true, onFieldChange, margin, required = false } = _a, other = __rest(_a, ["variant", "name", "label", "value", "fullWidth", "onFieldChange", "margin", "required"]);
    return _jsxs(FormControl, Object.assign({ fullWidth: fullWidth, variant: variant, margin: margin }, { children: [label &&
                _jsx(InputLabel, Object.assign({ id: name + '_label', shrink: true, required: required }, { children: label })), _jsx(Select, Object.assign({ labelId: name + '_label', id: name, name: name, value: value, onChange: event => onFieldChange && onFieldChange({
                    name: name || '',
                    type: 'string',
                    value: event.target.value
                }) }, other))] }));
});
//# sourceMappingURL=UFFormSelect.js.map