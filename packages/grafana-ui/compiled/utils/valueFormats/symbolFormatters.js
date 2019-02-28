import { scaledUnits } from './valueFormats';
export function currency(symbol) {
    var units = ['', 'K', 'M', 'B', 'T'];
    var scaler = scaledUnits(1000, units);
    return function (size, decimals, scaledDecimals) {
        if (size === null) {
            return '';
        }
        var scaled = scaler(size, decimals, scaledDecimals);
        return symbol + scaled;
    };
}
export function binarySIPrefix(unit, offset) {
    if (offset === void 0) { offset = 0; }
    var prefixes = ['', 'Ki', 'Mi', 'Gi', 'Ti', 'Pi', 'Ei', 'Zi', 'Yi'].slice(offset);
    var units = prefixes.map(function (p) {
        return ' ' + p + unit;
    });
    return scaledUnits(1024, units);
}
export function decimalSIPrefix(unit, offset) {
    if (offset === void 0) { offset = 0; }
    var prefixes = ['n', 'µ', 'm', '', 'k', 'M', 'G', 'T', 'P', 'E', 'Z', 'Y'];
    prefixes = prefixes.slice(3 + (offset || 0));
    var units = prefixes.map(function (p) {
        return ' ' + p + unit;
    });
    return scaledUnits(1000, units);
}
//# sourceMappingURL=symbolFormatters.js.map