import { ValueMapping } from '../types';
export declare type TimeSeriesValue = string | number | null;
export declare const getMappedValue: (valueMappings: ValueMapping[], value: string | number | null) => ValueMapping;
