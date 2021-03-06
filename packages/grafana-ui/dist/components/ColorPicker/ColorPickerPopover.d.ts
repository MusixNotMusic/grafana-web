import React from 'react';
import { PopperContentProps } from '../Tooltip/PopperController';
import { Themeable } from '../../types/theme';
export declare type ColorPickerChangeHandler = (color: string) => void;
export interface ColorPickerProps extends Themeable {
    color: string;
    onChange: ColorPickerChangeHandler;
    /**
     * @deprecated Use onChange instead
     */
    onColorChange?: ColorPickerChangeHandler;
    enableNamedColors?: boolean;
    children?: JSX.Element;
}
export interface Props<T> extends ColorPickerProps, PopperContentProps {
    customPickers?: T;
}
declare type PickerType = 'palette' | 'spectrum';
export interface CustomPickersDescriptor {
    [key: string]: {
        tabComponent: React.ComponentType<ColorPickerProps>;
        name: string;
    };
}
interface State<T> {
    activePicker: PickerType | keyof T;
}
export declare class ColorPickerPopover<T extends CustomPickersDescriptor> extends React.Component<Props<T>, State<T>> {
    constructor(props: Props<T>);
    getTabClassName: (tabName: "palette" | "spectrum" | keyof T) => string;
    handleChange: (color: any) => void;
    handleTabChange: (tab: "palette" | "spectrum" | keyof T) => () => void;
    renderPicker: () => JSX.Element | React.ReactElement<ColorPickerProps> | null;
    renderCustomPicker: (tabKey: keyof T) => React.ReactElement<ColorPickerProps> | null;
    renderCustomPickerTabs: () => JSX.Element | null;
    render(): JSX.Element;
}
export {};
