import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { FormControl, FormControlLabel, InputLabel, Switch } from "@mui/material";
import { memo } from "react";
/**
 * {@link UFFormSwitch} combines `FormControlLabel` and `Switch` into a single component.
 */
export const UFFormSwitch = memo(({ name, checked, onFieldChange, label, topLabel, disabled }) => _jsxs(FormControl, { children: [topLabel &&
            _jsx(InputLabel, { children: topLabel }), _jsx(FormControlLabel, { disabled: disabled, control: _jsx(Switch, { name: name, checked: checked, onChange: (event, checked) => onFieldChange && onFieldChange({
                    name: name || '',
                    type: 'boolean',
                    value: checked
                }), disabled: disabled }), label: label })] }));
//# sourceMappingURL=UFFormSwitch.js.map