import * as React from 'react';
import { AlertColor } from "@mui/material";
/**
 * Properties for {@link UFCollapsableAlert}
 */
export interface UFCollapsableAlertProps {
    /**
     * Message to show
     */
    readonly message: React.ReactNode;
    /**
     * True to show alert
     */
    readonly visible: boolean;
    /**
     * Callback that is called when alert gets closed
     */
    readonly onClose?: () => any;
    /**
     * True (default) to show a close button
     */
    readonly closeButton?: boolean;
    /**
     * Time in seconds after which to close it or 0 to keep it open until it gets closed via the close button.
     */
    readonly time?: number;
    /**
     * Severity
     */
    readonly severity?: AlertColor;
}
/**
 * {@link UFCollapsableAlert} shows an alert by growing and shrinking.
 */
export declare class UFCollapsableAlert extends React.PureComponent<UFCollapsableAlertProps> {
    /**
     * Timer to hide alert automatically
     *
     * @type {NodeJS.Timer | null}
     */
    private m_timerHandle;
    constructor(aProps: UFCollapsableAlertProps);
    private stopTimer;
    private startTimer;
    componentWillUnmount(): void;
    componentDidUpdate(prevProps: Readonly<UFCollapsableAlertProps>, prevState: Readonly<{}>, snapshot?: any): void;
    render(): import("react/jsx-runtime").JSX.Element;
}
