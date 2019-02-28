import flatten from 'lodash/flatten';
import { GrafanaThemeType } from '../types/theme';
import tinycolor from 'tinycolor2';
var colorsPaletteInstance;
var buildColorDefinition = function (hue, name, _a, isPrimary) {
    var light = _a[0], dark = _a[1];
    return ({
        hue: hue,
        name: name,
        variants: {
            light: light,
            dark: dark,
        },
        isPrimary: !!isPrimary,
    });
};
export var getColorDefinitionByName = function (name) {
    return flatten(Array.from(getNamedColorPalette().values())).filter(function (definition) { return definition.name === name; })[0];
};
export var getColorDefinition = function (hex, theme) {
    return flatten(Array.from(getNamedColorPalette().values())).filter(function (definition) { return definition.variants[theme] === hex; })[0];
};
var isHex = function (color) {
    var hexRegex = /^((0x){0,1}|#{0,1})([0-9A-F]{8}|[0-9A-F]{6}|[0-9A-F]{3})$/gi;
    return hexRegex.test(color);
};
export var getColorName = function (color, theme) {
    if (!color) {
        return undefined;
    }
    if (color.indexOf('rgb') > -1) {
        return undefined;
    }
    if (isHex(color)) {
        var definition = getColorDefinition(color, theme || GrafanaThemeType.Dark);
        return definition ? definition.name : undefined;
    }
    return color;
};
export var getColorByName = function (colorName) {
    var definition = flatten(Array.from(getNamedColorPalette().values())).filter(function (definition) { return definition.name === colorName; });
    return definition.length > 0 ? definition[0] : undefined;
};
export var getColorFromHexRgbOrName = function (color, theme) {
    if (color.indexOf('rgb') > -1 || isHex(color)) {
        return color;
    }
    var colorDefinition = getColorByName(color);
    if (!colorDefinition) {
        return new tinycolor(color).toHexString();
    }
    return theme ? colorDefinition.variants[theme] : colorDefinition.variants.dark;
};
export var getColorForTheme = function (color, theme) {
    return theme ? color.variants[theme] : color.variants.dark;
};
var buildNamedColorsPalette = function () {
    var palette = new Map();
    var BasicGreen = buildColorDefinition('green', 'green', ['#56A64B', '#73BF69'], true);
    var DarkGreen = buildColorDefinition('green', 'dark-green', ['#19730E', '#37872D']);
    var SemiDarkGreen = buildColorDefinition('green', 'semi-dark-green', ['#37872D', '#56A64B']);
    var LightGreen = buildColorDefinition('green', 'light-green', ['#73BF69', '#96D98D']);
    var SuperLightGreen = buildColorDefinition('green', 'super-light-green', ['#96D98D', '#C8F2C2']);
    var BasicYellow = buildColorDefinition('yellow', 'yellow', ['#F2CC0C', '#FADE2A'], true);
    var DarkYellow = buildColorDefinition('yellow', 'dark-yellow', ['#CC9D00', '#E0B400']);
    var SemiDarkYellow = buildColorDefinition('yellow', 'semi-dark-yellow', ['#E0B400', '#F2CC0C']);
    var LightYellow = buildColorDefinition('yellow', 'light-yellow', ['#FADE2A', '#FFEE52']);
    var SuperLightYellow = buildColorDefinition('yellow', 'super-light-yellow', ['#FFEE52', '#FFF899']);
    var BasicRed = buildColorDefinition('red', 'red', ['#E02F44', '#F2495C'], true);
    var DarkRed = buildColorDefinition('red', 'dark-red', ['#AD0317', '#C4162A']);
    var SemiDarkRed = buildColorDefinition('red', 'semi-dark-red', ['#C4162A', '#E02F44']);
    var LightRed = buildColorDefinition('red', 'light-red', ['#F2495C', '#FF7383']);
    var SuperLightRed = buildColorDefinition('red', 'super-light-red', ['#FF7383', '#FFA6B0']);
    var BasicBlue = buildColorDefinition('blue', 'blue', ['#3274D9', '#5794F2'], true);
    var DarkBlue = buildColorDefinition('blue', 'dark-blue', ['#1250B0', '#1F60C4']);
    var SemiDarkBlue = buildColorDefinition('blue', 'semi-dark-blue', ['#1F60C4', '#3274D9']);
    var LightBlue = buildColorDefinition('blue', 'light-blue', ['#5794F2', '#8AB8FF']);
    var SuperLightBlue = buildColorDefinition('blue', 'super-light-blue', ['#8AB8FF', '#C0D8FF']);
    var BasicOrange = buildColorDefinition('orange', 'orange', ['#FF780A', '#FF9830'], true);
    var DarkOrange = buildColorDefinition('orange', 'dark-orange', ['#E55400', '#FA6400']);
    var SemiDarkOrange = buildColorDefinition('orange', 'semi-dark-orange', ['#FA6400', '#FF780A']);
    var LightOrange = buildColorDefinition('orange', 'light-orange', ['#FF9830', '#FFB357']);
    var SuperLightOrange = buildColorDefinition('orange', 'super-light-orange', ['#FFB357', '#FFCB7D']);
    var BasicPurple = buildColorDefinition('purple', 'purple', ['#A352CC', '#B877D9'], true);
    var DarkPurple = buildColorDefinition('purple', 'dark-purple', ['#7C2EA3', '#8F3BB8']);
    var SemiDarkPurple = buildColorDefinition('purple', 'semi-dark-purple', ['#8F3BB8', '#A352CC']);
    var LightPurple = buildColorDefinition('purple', 'light-purple', ['#B877D9', '#CA95E5']);
    var SuperLightPurple = buildColorDefinition('purple', 'super-light-purple', ['#CA95E5', '#DEB6F2']);
    var greens = [BasicGreen, DarkGreen, SemiDarkGreen, LightGreen, SuperLightGreen];
    var yellows = [BasicYellow, DarkYellow, SemiDarkYellow, LightYellow, SuperLightYellow];
    var reds = [BasicRed, DarkRed, SemiDarkRed, LightRed, SuperLightRed];
    var blues = [BasicBlue, DarkBlue, SemiDarkBlue, LightBlue, SuperLightBlue];
    var oranges = [BasicOrange, DarkOrange, SemiDarkOrange, LightOrange, SuperLightOrange];
    var purples = [BasicPurple, DarkPurple, SemiDarkPurple, LightPurple, SuperLightPurple];
    palette.set('green', greens);
    palette.set('yellow', yellows);
    palette.set('red', reds);
    palette.set('blue', blues);
    palette.set('orange', oranges);
    palette.set('purple', purples);
    return palette;
};
export var getNamedColorPalette = function () {
    if (colorsPaletteInstance) {
        return colorsPaletteInstance;
    }
    colorsPaletteInstance = buildNamedColorsPalette();
    return colorsPaletteInstance;
};
//# sourceMappingURL=namedColorsPalette.js.map