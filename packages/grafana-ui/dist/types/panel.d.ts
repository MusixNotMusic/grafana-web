import { ComponentClass } from 'react';
import { TimeSeries, LoadingState, TableData } from './data';
import { TimeRange } from './time';
export declare type InterpolateFunction = (value: string, format?: string | Function) => string;
export interface PanelProps<T = any> {
    panelData: PanelData;
    timeRange: TimeRange;
    loading: LoadingState;
    options: T;
    renderCounter: number;
    width: number;
    height: number;
    onInterpolate: InterpolateFunction;
}
export interface PanelData {
    timeSeries?: TimeSeries[];
    tableData?: TableData;
}
export interface PanelEditorProps<T = any> {
    options: T;
    onChange: (options: T) => void;
}
export declare class ReactPanelPlugin<TOptions = any> {
    panel: ComponentClass<PanelProps<TOptions>>;
    editor?: ComponentClass<PanelEditorProps<TOptions>>;
    defaults?: TOptions;
    constructor(panel: ComponentClass<PanelProps<TOptions>>);
    setEditor(editor: ComponentClass<PanelEditorProps<TOptions>>): void;
    setDefaults(defaults: TOptions): void;
}
export interface PanelSize {
    width: number;
    height: number;
}
export interface PanelMenuItem {
    type?: 'submenu' | 'divider';
    text?: string;
    iconClassName?: string;
    onClick?: () => void;
    shortcut?: string;
    subMenu?: PanelMenuItem[];
}
export interface Threshold {
    index: number;
    value: number;
    color: string;
}
export declare enum BasicGaugeColor {
    Green = "#299c46",
    Red = "#d44a3a"
}
export declare enum MappingType {
    ValueToText = 1,
    RangeToText = 2
}
interface BaseMap {
    id: number;
    operator: string;
    text: string;
    type: MappingType;
}
export declare type ValueMapping = ValueMap | RangeMap;
export interface ValueMap extends BaseMap {
    value: string;
}
export interface RangeMap extends BaseMap {
    from: string;
    to: string;
}
export {};
