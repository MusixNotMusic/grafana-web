/// <reference types="react" />
import { GrafanaThemeType } from '../types/theme';
declare type VariantDescriptor = {
    [key in GrafanaThemeType]: string | number;
};
export declare const selectThemeVariant: (variants: VariantDescriptor, currentTheme?: GrafanaThemeType | undefined) => import("react").ReactText;
export {};
