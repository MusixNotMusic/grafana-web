import * as tslib_1 from "tslib";
import React from 'react';
import { getTheme } from './getTheme';
import { GrafanaThemeType } from '../types/theme';
// Use Grafana Dark theme by default
export var ThemeContext = React.createContext(getTheme(GrafanaThemeType.Dark));
export var withTheme = function (Component) {
    var WithTheme = function (props) {
        // @ts-ignore
        return React.createElement(ThemeContext.Consumer, null, function (theme) { return React.createElement(Component, tslib_1.__assign({}, props, { theme: theme })); });
    };
    WithTheme.displayName = "WithTheme(" + Component.displayName + ")";
    return WithTheme;
};
//# sourceMappingURL=ThemeContext.js.map