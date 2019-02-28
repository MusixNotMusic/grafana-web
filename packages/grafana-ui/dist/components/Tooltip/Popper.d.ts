import React, { PureComponent } from 'react';
import * as PopperJS from 'popper.js';
import { PopperArrowProps } from 'react-popper';
import { PopperContent } from './PopperController';
export declare type RenderPopperArrowFn = (props: {
    arrowProps: PopperArrowProps;
    placement: string;
}) => JSX.Element;
interface Props extends React.HTMLAttributes<HTMLDivElement> {
    show: boolean;
    placement?: PopperJS.Placement;
    content: PopperContent<any>;
    referenceElement: PopperJS.ReferenceObject;
    wrapperClassName?: string;
    renderArrow?: RenderPopperArrowFn;
}
declare class Popper extends PureComponent<Props> {
    render(): JSX.Element;
}
export { Popper };
