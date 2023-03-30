import { jsx as _jsx } from "react/jsx-runtime";
// region imports
import * as React from 'react';
import { Alert, Box, Collapse, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
/**
 * {@link UFCollapsableAlert} shows an alert by growing and shrinking.
 */
export class UFCollapsableAlert extends React.PureComponent {
    // endregion
    // region constructor
    constructor(aProps) {
        super(aProps);
        this.m_timerHandle = null;
    }
    // endregion
    // region private methods
    stopTimer() {
        if (this.m_timerHandle) {
            clearTimeout(this.m_timerHandle);
            this.m_timerHandle = null;
        }
    }
    startTimer() {
        this.stopTimer();
        if (this.props.time) {
            this.m_timerHandle = setTimeout(() => this.props.onClose && this.props.onClose(), this.props.time * 1000);
        }
    }
    // endregion
    // region react callbacks
    componentWillUnmount() {
        this.stopTimer();
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.visible != this.props.visible) {
            if (this.props.visible) {
                this.startTimer();
            }
            else {
                this.stopTimer();
            }
        }
    }
    render() {
        const { message, onClose, closeButton = true, severity = 'success', visible } = this.props;
        return (_jsx(Box, Object.assign({ sx: { width: '100%' } }, { children: _jsx(Collapse, Object.assign({ in: visible }, { children: _jsx(Alert, Object.assign({ severity: severity, action: closeButton &&
                        _jsx(IconButton, Object.assign({ color: "inherit", size: "small", onClick: () => onClose && onClose() }, { children: _jsx(CloseIcon, { fontSize: "inherit" }) })), sx: { mb: 2 } }, { children: message })) })) })));
    }
}
//# sourceMappingURL=UFCollapsableAlert.js.map