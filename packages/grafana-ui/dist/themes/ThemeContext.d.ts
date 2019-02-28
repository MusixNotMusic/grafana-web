import React from 'react';
import { Themeable } from '../types/theme';
export declare const ThemeContext: React.Context<import("../types/theme").GrafanaTheme>;
export declare const withTheme: <P extends Themeable>(Component: React.ComponentType<P>) => React.FunctionComponent<Pick<P, Exclude<keyof P, "theme">>>;
