import { toFixed } from './valueFormats';
export function toPercent(size, decimals) {
    if (size === null) {
        return '';
    }
    return toFixed(size, decimals) + '%';
}
export function toPercentUnit(size, decimals) {
    if (size === null) {
        return '';
    }
    return toFixed(100 * size, decimals) + '%';
}
export function toHex0x(value, decimals) {
    if (value == null) {
        return '';
    }
    var hexString = toHex(value, decimals);
    if (hexString.substring(0, 1) === '-') {
        return '-0x' + hexString.substring(1);
    }
    return '0x' + hexString;
}
export function toHex(value, decimals) {
    if (value == null) {
        return '';
    }
    return parseFloat(toFixed(value, decimals))
        .toString(16)
        .toUpperCase();
}
export function sci(value, decimals) {
    if (value == null) {
        return '';
    }
    return value.toExponential(decimals);
}
//# sourceMappingURL=arithmeticFormatters.js.map