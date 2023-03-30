import { jsx as _jsx } from "react/jsx-runtime";
import { Box } from "@mui/material";
/**
 * {@link UFDialogTitleIcon} is a wrapper for an icon, it adjust its vertical position and resizes it.
 *
 * @constructor
 */
export const UFDialogTitleIcon = ({ icon }) => (_jsx(Box, Object.assign({ sx: {
        verticalAlign: 'middle',
        marginRight: 2,
        transform: 'scale(1.2)',
        display: 'inline-block',
        paddingTop: '0.3em'
    } }, { children: icon })));
//# sourceMappingURL=UFDialogTitleIcon.js.map