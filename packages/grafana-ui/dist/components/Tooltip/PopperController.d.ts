import React from 'react';
import * as PopperJS from 'popper.js';
export interface PopperContentProps {
    updatePopperPosition?: () => void;
}
export declare type PopperContent<T extends PopperContentProps> = string | React.ReactElement<T> | ((props: T) => JSX.Element);
export interface UsingPopperProps {
    show?: boolean;
    placement?: PopperJS.Placement;
    content: PopperContent<any>;
    children: JSX.Element;
}
declare type PopperControllerRenderProp = (showPopper: () => void, hidePopper: () => void, popperProps: {
    show: boolean;
    placement: PopperJS.Placement;
    content: PopperContent<any>;
}) => JSX.Element;
interface Props {
    placement?: PopperJS.Placement;
    content: PopperContent<any>;
    className?: string;
    children: PopperControllerRenderProp;
    hideAfter?: number;
}
interface State {
    placement: PopperJS.Placement;
    show: boolean;
}
declare class PopperController extends React.Component<Props, State> {
    private hideTimeout;
    constructor(props: Props);
    componentWillReceiveProps(nextProps: Props): void;
    showPopper: () => void;
    hidePopper: () => void;
    render(): JSX.Element;
}
export { PopperController };
