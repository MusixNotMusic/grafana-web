import { TimeSeries, TimeSeriesVMs, NullValueMode } from '../types';
interface Options {
    timeSeries: TimeSeries[];
    nullValueMode: NullValueMode;
}
export declare function processTimeSeries({ timeSeries, nullValueMode }: Options): TimeSeriesVMs;
export {};
