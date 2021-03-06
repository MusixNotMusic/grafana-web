import React, { FunctionComponent } from 'react';
import { ColorPickerProps } from './ColorPickerPopover';
import { PopperContentProps } from '../Tooltip/PopperController';
export interface SeriesColorPickerPopoverProps extends ColorPickerProps, PopperContentProps {
    yaxis?: number;
    onToggleAxis?: () => void;
}
export declare const SeriesColorPickerPopover: FunctionComponent<SeriesColorPickerPopoverProps>;
interface AxisSelectorProps {
    yaxis: number;
    onToggleAxis?: () => void;
}
interface AxisSelectorState {
    yaxis: number;
}
export declare class AxisSelector extends React.PureComponent<AxisSelectorProps, AxisSelectorState> {
    constructor(props: AxisSelectorProps);
    onToggleAxis(): void;
    render(): JSX.Element;
}
export declare const SeriesColorPickerPopoverWithTheme: React.FunctionComponent<Pick<SeriesColorPickerPopoverProps, "children" | "color" | "onChange" | "onColorChange" | "enableNamedColors" | "updatePopperPosition" | "yaxis" | "onToggleAxis">>;
export {};
