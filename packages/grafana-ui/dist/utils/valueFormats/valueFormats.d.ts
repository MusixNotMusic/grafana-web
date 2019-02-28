export declare type DecimalCount = number | null | undefined;
export declare type ValueFormatter = (value: number, decimals?: DecimalCount, scaledDecimals?: DecimalCount, isUtc?: boolean) => string;
export interface ValueFormat {
    name: string;
    id: string;
    fn: ValueFormatter;
}
export interface ValueFormatCategory {
    name: string;
    formats: ValueFormat[];
}
interface ValueFormatterIndex {
    [id: string]: ValueFormatter;
}
export declare function toFixed(value: number, decimals?: DecimalCount): string;
export declare function toFixedScaled(value: number, decimals?: DecimalCount, scaledDecimals?: DecimalCount, additionalDecimals?: DecimalCount, ext?: string): string;
export declare function toFixedUnit(unit: string): ValueFormatter;
export declare function scaledUnits(factor: number, extArray: string[]): (size: number, decimals?: number | null | undefined, scaledDecimals?: number | null | undefined) => string;
export declare function locale(value: number, decimals: DecimalCount): string;
export declare function simpleCountUnit(symbol: string): (size: number, decimals?: number | null | undefined, scaledDecimals?: number | null | undefined) => string;
export declare function getValueFormat(id: string): ValueFormatter;
export declare function getValueFormatterIndex(): ValueFormatterIndex;
export declare function getValueFormats(): {
    text: string;
    submenu: {
        text: string;
        value: string;
    }[];
}[];
export {};
