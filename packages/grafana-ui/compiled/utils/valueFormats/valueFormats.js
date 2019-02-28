import { getCategories } from './categories';
// Globals & formats cache
var categories = [];
var index = {};
var hasBuiltIndex = false;
export function toFixed(value, decimals) {
    if (value === null) {
        return '';
    }
    var factor = decimals ? Math.pow(10, Math.max(0, decimals)) : 1;
    var formatted = String(Math.round(value * factor) / factor);
    // if exponent return directly
    if (formatted.indexOf('e') !== -1 || value === 0) {
        return formatted;
    }
    // If tickDecimals was specified, ensure that we have exactly that
    // much precision; otherwise default to the value's own precision.
    if (decimals != null) {
        var decimalPos = formatted.indexOf('.');
        var precision = decimalPos === -1 ? 0 : formatted.length - decimalPos - 1;
        if (precision < decimals) {
            return (precision ? formatted : formatted + '.') + String(factor).substr(1, decimals - precision);
        }
    }
    return formatted;
}
export function toFixedScaled(value, decimals, scaledDecimals, additionalDecimals, ext) {
    if (scaledDecimals) {
        if (additionalDecimals) {
            return toFixed(value, scaledDecimals + additionalDecimals) + ext;
        }
        else {
            return toFixed(value, scaledDecimals) + ext;
        }
    }
    return toFixed(value, decimals) + ext;
}
export function toFixedUnit(unit) {
    return function (size, decimals) {
        if (size === null) {
            return '';
        }
        return toFixed(size, decimals) + ' ' + unit;
    };
}
// Formatter which scales the unit string geometrically according to the given
// numeric factor. Repeatedly scales the value down by the factor until it is
// less than the factor in magnitude, or the end of the array is reached.
export function scaledUnits(factor, extArray) {
    return function (size, decimals, scaledDecimals) {
        if (size === null) {
            return '';
        }
        var steps = 0;
        var limit = extArray.length;
        while (Math.abs(size) >= factor) {
            steps++;
            size /= factor;
            if (steps >= limit) {
                return 'NA';
            }
        }
        if (steps > 0 && scaledDecimals !== null && scaledDecimals !== undefined) {
            decimals = scaledDecimals + 3 * steps;
        }
        return toFixed(size, decimals) + extArray[steps];
    };
}
export function locale(value, decimals) {
    if (value == null) {
        return '';
    }
    return value.toLocaleString(undefined, { maximumFractionDigits: decimals });
}
export function simpleCountUnit(symbol) {
    var units = ['', 'K', 'M', 'B', 'T'];
    var scaler = scaledUnits(1000, units);
    return function (size, decimals, scaledDecimals) {
        if (size === null) {
            return '';
        }
        var scaled = scaler(size, decimals, scaledDecimals);
        return scaled + ' ' + symbol;
    };
}
function buildFormats() {
    categories = getCategories();
    for (var _i = 0, categories_1 = categories; _i < categories_1.length; _i++) {
        var cat = categories_1[_i];
        for (var _a = 0, _b = cat.formats; _a < _b.length; _a++) {
            var format = _b[_a];
            index[format.id] = format.fn;
        }
    }
    hasBuiltIndex = true;
}
export function getValueFormat(id) {
    if (!hasBuiltIndex) {
        buildFormats();
    }
    return index[id];
}
export function getValueFormatterIndex() {
    if (!hasBuiltIndex) {
        buildFormats();
    }
    return index;
}
export function getValueFormats() {
    if (!hasBuiltIndex) {
        buildFormats();
    }
    return categories.map(function (cat) {
        return {
            text: cat.name,
            submenu: cat.formats.map(function (format) {
                return {
                    text: format.name,
                    value: format.id,
                };
            }),
        };
    });
}
//# sourceMappingURL=valueFormats.js.map