import { GrafanaThemeType } from '../types/theme';
export var selectThemeVariant = function (variants, currentTheme) {
    return variants[currentTheme || GrafanaThemeType.Dark];
};
//# sourceMappingURL=selectThemeVariant.js.map