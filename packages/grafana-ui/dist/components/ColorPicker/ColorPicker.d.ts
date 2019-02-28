import React from 'react';
import { ColorPickerProps } from './ColorPickerPopover';
export declare const colorPickerFactory: <T extends ColorPickerProps>(popover: React.ComponentType<T>, displayName?: string) => {
    new (props: Readonly<T>): {
        pickerTriggerRef: React.RefObject<HTMLDivElement>;
        handleColorChange: (color: string) => void;
        render(): JSX.Element;
        context: any;
        setState<K extends string | number | symbol>(state: any, callback?: (() => void) | undefined): void;
        forceUpdate(callBack?: (() => void) | undefined): void;
        readonly props: Readonly<{
            children?: React.ReactNode;
        }> & Readonly<T>;
        state: Readonly<any>;
        refs: {
            [key: string]: React.ReactInstance;
        };
    };
    new (props: T, context?: any): {
        pickerTriggerRef: React.RefObject<HTMLDivElement>;
        handleColorChange: (color: string) => void;
        render(): JSX.Element;
        context: any;
        setState<K extends string | number | symbol>(state: any, callback?: (() => void) | undefined): void;
        forceUpdate(callBack?: (() => void) | undefined): void;
        readonly props: Readonly<{
            children?: React.ReactNode;
        }> & Readonly<T>;
        state: Readonly<any>;
        refs: {
            [key: string]: React.ReactInstance;
        };
    };
    displayName: string;
    contextType?: React.Context<any> | undefined;
};
export declare const ColorPicker: React.FunctionComponent<Pick<import("./ColorPickerPopover").Props<import("./ColorPickerPopover").CustomPickersDescriptor>, "children" | "color" | "onChange" | "onColorChange" | "enableNamedColors" | "customPickers" | "updatePopperPosition">>;
export declare const SeriesColorPicker: React.FunctionComponent<Pick<import("./SeriesColorPickerPopover").SeriesColorPickerPopoverProps, "children" | "color" | "onChange" | "onColorChange" | "enableNamedColors" | "updatePopperPosition" | "yaxis" | "onToggleAxis">>;
