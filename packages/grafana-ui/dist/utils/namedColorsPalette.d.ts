import { GrafanaThemeType } from '../types/theme';
declare type Hue = 'green' | 'yellow' | 'red' | 'blue' | 'orange' | 'purple';
export declare type Color = 'green' | 'dark-green' | 'semi-dark-green' | 'light-green' | 'super-light-green' | 'yellow' | 'dark-yellow' | 'semi-dark-yellow' | 'light-yellow' | 'super-light-yellow' | 'red' | 'dark-red' | 'semi-dark-red' | 'light-red' | 'super-light-red' | 'blue' | 'dark-blue' | 'semi-dark-blue' | 'light-blue' | 'super-light-blue' | 'orange' | 'dark-orange' | 'semi-dark-orange' | 'light-orange' | 'super-light-orange' | 'purple' | 'dark-purple' | 'semi-dark-purple' | 'light-purple' | 'super-light-purple';
declare type ThemeVariants = {
    dark: string;
    light: string;
};
export declare type ColorDefinition = {
    hue: Hue;
    isPrimary?: boolean;
    name: Color;
    variants: ThemeVariants;
};
export declare const getColorDefinitionByName: (name: Color) => ColorDefinition;
export declare const getColorDefinition: (hex: string, theme: GrafanaThemeType) => ColorDefinition | undefined;
export declare const getColorName: (color?: string | undefined, theme?: GrafanaThemeType | undefined) => "blue" | "green" | "orange" | "purple" | "red" | "yellow" | "dark-green" | "semi-dark-green" | "light-green" | "super-light-green" | "dark-yellow" | "semi-dark-yellow" | "light-yellow" | "super-light-yellow" | "dark-red" | "semi-dark-red" | "light-red" | "super-light-red" | "dark-blue" | "semi-dark-blue" | "light-blue" | "super-light-blue" | "dark-orange" | "semi-dark-orange" | "light-orange" | "super-light-orange" | "dark-purple" | "semi-dark-purple" | "light-purple" | "super-light-purple" | undefined;
export declare const getColorByName: (colorName: string) => ColorDefinition | undefined;
export declare const getColorFromHexRgbOrName: (color: string, theme?: GrafanaThemeType | undefined) => string;
export declare const getColorForTheme: (color: ColorDefinition, theme?: GrafanaThemeType | undefined) => string;
export declare const getNamedColorPalette: () => Map<Hue, ColorDefinition[]>;
export {};
