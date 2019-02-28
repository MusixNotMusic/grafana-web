import * as tslib_1 from "tslib";
import tinycolor from 'tinycolor2';
import defaultTheme from './default';
import { GrafanaThemeType } from '../types/theme';
var basicColors = {
    black: '#000000',
    white: '#ffffff',
    dark1: '#1e2028',
    dark2: '#41444b',
    dark3: '#303133',
    dark4: '#35373f',
    dark5: '#41444b',
    dark6: '#41444b',
    dark7: '#41444b',
    dark8: '#2f2f32',
    dark9: '#343436',
    dark10: '#424345',
    gray1: '#52545c',
    gray2: '#767980',
    gray3: '#acb6bf',
    gray4: '#c7d0d9',
    gray5: '#dde4ed',
    gray6: '#e9edf2',
    gray7: '#f7f8fa',
    grayBlue: '#212327',
    blueBase: '#3274d9',
    blueShade: '#1f60c4',
    blueLight: '#5794f2',
    blueFaint: '#f5f9ff',
    redBase: '#e02f44',
    redShade: '#c4162a',
    greenBase: '#3eb15b',
    greenShade: '#369b4f',
    blue: '#0083b3',
    red: '#d44939',
    yellow: '#ff851b',
    purple: '#9954bb',
    variable: '#007580',
    orange: '#ff7941',
};
var lightTheme = tslib_1.__assign({}, defaultTheme, { type: GrafanaThemeType.Light, name: 'Grafana Light', colors: tslib_1.__assign({}, basicColors, { variable: basicColors.blue, inputBlack: '#09090b', queryRed: basicColors.red, queryGreen: basicColors.greenBase, queryPurple: basicColors.purple, queryKeyword: basicColors.blue, queryOrange: basicColors.orange, online: basicColors.greenShade, warn: '#f79520', critical: basicColors.redShade, bodyBg: basicColors.gray7, pageBg: basicColors.gray7, bodyColor: basicColors.gray1, textColor: basicColors.gray1, textColorStrong: basicColors.dark2, textColorWeak: basicColors.gray2, textColorEmphasis: basicColors.gray5, textColorFaint: basicColors.dark4, linkColor: basicColors.gray1, linkColorDisabled: new tinycolor(basicColors.gray1).lighten(30).toString(), linkColorHover: new tinycolor(basicColors.gray1).darken(20).toString(), linkColorExternal: basicColors.blueLight, headingColor: basicColors.gray1 }), background: {
        dropdown: basicColors.white,
        scrollbar: basicColors.gray5,
        scrollbar2: basicColors.gray5,
    } });
export default lightTheme;
//# sourceMappingURL=light.js.map