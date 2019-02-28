import { DecimalCount } from './valueFormats';
export declare enum Interval {
    Year = "year",
    Month = "month",
    Week = "week",
    Day = "day",
    Hour = "hour",
    Minute = "minute",
    Second = "second",
    Millisecond = "millisecond"
}
export declare function toNanoSeconds(size: number, decimals?: DecimalCount, scaledDecimals?: DecimalCount): string;
export declare function toMicroSeconds(size: number, decimals?: DecimalCount, scaledDecimals?: DecimalCount): string;
export declare function toMilliSeconds(size: number, decimals?: DecimalCount, scaledDecimals?: DecimalCount): string;
export declare function trySubstract(value1: DecimalCount, value2: DecimalCount): DecimalCount;
export declare function toSeconds(size: number, decimals?: DecimalCount, scaledDecimals?: DecimalCount): string;
export declare function toMinutes(size: number, decimals?: DecimalCount, scaledDecimals?: DecimalCount): string;
export declare function toHours(size: number, decimals?: DecimalCount, scaledDecimals?: DecimalCount): string;
export declare function toDays(size: number, decimals?: DecimalCount, scaledDecimals?: DecimalCount): string;
export declare function toDuration(size: number, decimals: DecimalCount, timeScale: Interval): string;
export declare function toClock(size: number, decimals?: DecimalCount): string;
export declare function toDurationInMilliseconds(size: number, decimals: DecimalCount): string;
export declare function toDurationInSeconds(size: number, decimals: DecimalCount): string;
export declare function toDurationInHoursMinutesSeconds(size: number): string;
export declare function toTimeTicks(size: number, decimals: DecimalCount, scaledDecimals: DecimalCount): string;
export declare function toClockMilliseconds(size: number, decimals: DecimalCount): string;
export declare function toClockSeconds(size: number, decimals: DecimalCount): string;
export declare function dateTimeAsIso(value: number, decimals: DecimalCount, scaledDecimals: DecimalCount, isUtc?: boolean): string;
export declare function dateTimeAsUS(value: number, decimals: DecimalCount, scaledDecimals: DecimalCount, isUtc?: boolean): string;
export declare function dateTimeFromNow(value: number, decimals: DecimalCount, scaledDecimals: DecimalCount, isUtc?: boolean): string;
