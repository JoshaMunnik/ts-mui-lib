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
import TextField from "@mui/material/TextField";
import { memo } from "react";
/**
 * {@link UFTextField} extends `TextField`.
 */
export const UFTextField = memo((_a) => {
    var { floatingLabel = false, onFieldChange, name, readOnly = false, ellipsis = false, variant = 'standard', fontFamily = 'inherit', fontSize = 'inherit' } = _a, other = __rest(_a, ["floatingLabel", "onFieldChange", "name", "readOnly", "ellipsis", "variant", "fontFamily", "fontSize"]);
    const inputProps = {
        style: {
            fontFamily,
            fontSize
        }
    };
    if (readOnly) {
        inputProps.readOnly = 'readonly';
        if (ellipsis) {
            inputProps.style.whiteSpace = 'nowrap';
            inputProps.style.overflow = 'hidden';
            inputProps.style.textOverflow = 'ellipsis';
        }
    }
    return (_jsx(TextField, Object.assign({ InputLabelProps: floatingLabel ? {} : { shrink: true }, inputProps: inputProps, variant: variant, onChange: (event) => onFieldChange && onFieldChange({
            name: name || '',
            type: 'string',
            value: event.target.value
        }) }, other)));
});
//# sourceMappingURL=UFTextField.js.map