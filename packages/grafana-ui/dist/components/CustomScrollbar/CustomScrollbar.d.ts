import React, { PureComponent } from 'react';
interface Props {
    className?: string;
    autoHide?: boolean;
    autoHideTimeout?: number;
    autoHideDuration?: number;
    autoHeightMax?: string;
    hideTracksWhenNotNeeded?: boolean;
    renderTrackHorizontal?: React.FunctionComponent<any>;
    renderTrackVertical?: React.FunctionComponent<any>;
    scrollTop?: number;
    setScrollTop: (event: any) => void;
    autoHeightMin?: number | string;
}
/**
 * Wraps component into <Scrollbars> component from `react-custom-scrollbars`
 */
export declare class CustomScrollbar extends PureComponent<Props> {
    static defaultProps: Partial<Props>;
    private ref;
    constructor(props: Props);
    updateScroll(): void;
    componentDidMount(): void;
    componentDidUpdate(): void;
    render(): JSX.Element;
}
export default CustomScrollbar;
