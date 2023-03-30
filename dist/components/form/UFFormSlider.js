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
import { memo, useState } from 'react';
import { FormControl, InputLabel, Slider } from "@mui/material";
/**
 * {@link UFFormSlider} wraps a `Slider` in a `FormControl` and adds a `InputLabel` above it.
 */
export const UFFormSlider = memo((_a) => {
    var { label, fullWidth = true, marks, onFieldChange, name } = _a, other = __rest(_a, ["label", "fullWidth", "marks", "onFieldChange", "name"]);
    const [focus, setFocus] = useState(false);
    const labels = marks && marks.length && marks.find(mark => !!mark.label);
    return (_jsxs(FormControl, Object.assign({ fullWidth: fullWidth }, { children: [_jsx(InputLabel, Object.assign({ shrink: true, focused: focus, variant: "standard" }, { children: label })), _jsx(Slider, Object.assign({}, other, { sx: {
                    margin: `1rem 12px ${labels ? '1rem' : '0'}`,
                    width: 'calc(100% - 24px)'
                }, marks: marks, name: name, onChange: (event, value) => onFieldChange && onFieldChange({ value, name: name || '', type: 'number' }), onMouseDown: () => setFocus(true), onMouseUp: () => setFocus(false) }))] })));
});
//# sourceMappingURL=UFFormSlider.js.map