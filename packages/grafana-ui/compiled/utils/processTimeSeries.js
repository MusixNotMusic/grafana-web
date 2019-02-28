// Libraries
import isNumber from 'lodash/isNumber';
import { colors } from './colors';
// Types
import { NullValueMode } from '../types';
export function processTimeSeries(_a) {
    var timeSeries = _a.timeSeries, nullValueMode = _a.nullValueMode;
    var vmSeries = timeSeries.map(function (item, index) {
        var colorIndex = index % colors.length;
        var label = item.target;
        var result = [];
        // stat defaults
        var total = 0;
        var max = -Number.MAX_VALUE;
        var min = Number.MAX_VALUE;
        var logmin = Number.MAX_VALUE;
        var avg = null;
        var current = null;
        var first = null;
        var delta = 0;
        var diff = null;
        var range = null;
        var timeStep = Number.MAX_VALUE;
        var allIsNull = true;
        var allIsZero = true;
        var ignoreNulls = nullValueMode === NullValueMode.Ignore;
        var nullAsZero = nullValueMode === NullValueMode.AsZero;
        var currentTime = null;
        var currentValue = null;
        var nonNulls = 0;
        var previousTime = null;
        var previousValue = 0;
        var previousDeltaUp = true;
        for (var i = 0; i < item.datapoints.length; i++) {
            currentValue = item.datapoints[i][0];
            currentTime = item.datapoints[i][1];
            if (typeof currentTime !== 'number') {
                continue;
            }
            if (currentValue !== null && typeof currentValue !== 'number') {
                throw { message: 'Time series contains non number values' };
            }
            // Due to missing values we could have different timeStep all along the series
            // so we have to find the minimum one (could occur with aggregators such as ZimSum)
            if (previousTime !== null && currentTime !== null) {
                var currentStep = currentTime - previousTime;
                if (currentStep < timeStep) {
                    timeStep = currentStep;
                }
            }
            previousTime = currentTime;
            if (currentValue === null) {
                if (ignoreNulls) {
                    continue;
                }
                if (nullAsZero) {
                    currentValue = 0;
                }
            }
            if (currentValue !== null) {
                if (isNumber(currentValue)) {
                    total += currentValue;
                    allIsNull = false;
                    nonNulls++;
                }
                if (currentValue > max) {
                    max = currentValue;
                }
                if (currentValue < min) {
                    min = currentValue;
                }
                if (first === null) {
                    first = currentValue;
                }
                else {
                    if (previousValue > currentValue) {
                        // counter reset
                        previousDeltaUp = false;
                        if (i === item.datapoints.length - 1) {
                            // reset on last
                            delta += currentValue;
                        }
                    }
                    else {
                        if (previousDeltaUp) {
                            delta += currentValue - previousValue; // normal increment
                        }
                        else {
                            delta += currentValue; // account for counter reset
                        }
                        previousDeltaUp = true;
                    }
                }
                previousValue = currentValue;
                if (currentValue < logmin && currentValue > 0) {
                    logmin = currentValue;
                }
                if (currentValue !== 0) {
                    allIsZero = false;
                }
            }
            result.push([currentTime, currentValue]);
        }
        if (max === -Number.MAX_VALUE) {
            max = null;
        }
        if (min === Number.MAX_VALUE) {
            min = null;
        }
        if (result.length && !allIsNull) {
            avg = total / nonNulls;
            current = result[result.length - 1][1];
            if (current === null && result.length > 1) {
                current = result[result.length - 2][1];
            }
        }
        if (max !== null && min !== null) {
            range = max - min;
        }
        if (current !== null && first !== null) {
            diff = current - first;
        }
        var count = result.length;
        return {
            data: result,
            label: label,
            color: colors[colorIndex],
            allIsZero: allIsZero,
            allIsNull: allIsNull,
            stats: {
                total: total,
                min: min,
                max: max,
                current: current,
                logmin: logmin,
                avg: avg,
                diff: diff,
                delta: delta,
                timeStep: timeStep,
                range: range,
                count: count,
                first: first,
            },
        };
    });
    return vmSeries;
}
//# sourceMappingURL=processTimeSeries.js.map