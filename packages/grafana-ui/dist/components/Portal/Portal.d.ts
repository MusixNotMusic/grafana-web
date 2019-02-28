import { PureComponent } from 'react';
interface Props {
    className?: string;
    root?: HTMLElement;
}
export declare class Portal extends PureComponent<Props> {
    node: HTMLElement;
    portalRoot: HTMLElement;
    constructor(props: Props);
    componentWillUnmount(): void;
    render(): import("react").ReactPortal;
}
export {};
