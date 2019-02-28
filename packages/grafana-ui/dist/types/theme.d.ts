export declare enum GrafanaThemeType {
    Light = "light",
    Dark = "dark"
}
export interface GrafanaThemeCommons {
    name: string;
    brakpoints: {
        xs: string;
        s: string;
        m: string;
        l: string;
        xl: string;
    };
    typography: {
        fontFamily: {
            sansSerif: string;
            serif: string;
            monospace: string;
        };
        size: {
            base: string;
            xs: string;
            s: string;
            m: string;
            l: string;
        };
        weight: {
            light: number;
            normal: number;
            semibold: number;
        };
        lineHeight: {
            xs: number;
            s: number;
            m: number;
            l: number;
        };
        heading: {
            h1: string;
            h2: string;
            h3: string;
            h4: string;
            h5: string;
            h6: string;
        };
    };
    spacing: {
        xs: string;
        s: string;
        m: string;
        l: string;
        gutter: string;
    };
    border: {
        radius: {
            xs: string;
            s: string;
            m: string;
        };
    };
}
export interface GrafanaTheme extends GrafanaThemeCommons {
    type: GrafanaThemeType;
    background: {
        dropdown: string;
        scrollbar: string;
        scrollbar2: string;
    };
    colors: {
        black: string;
        white: string;
        dark1: string;
        dark2: string;
        dark3: string;
        dark4: string;
        dark5: string;
        dark6: string;
        dark7: string;
        dark8: string;
        dark9: string;
        dark10: string;
        gray1: string;
        gray2: string;
        gray3: string;
        gray4: string;
        gray5: string;
        gray6: string;
        gray7: string;
        grayBlue: string;
        inputBlack: string;
        blue: string;
        blueBase: string;
        blueShade: string;
        blueLight: string;
        blueFaint: string;
        redBase: string;
        redShade: string;
        greenBase: string;
        greenShade: string;
        red: string;
        yellow: string;
        purple: string;
        variable: string;
        orange: string;
        queryRed: string;
        queryGreen: string;
        queryPurple: string;
        queryKeyword: string;
        queryOrange: string;
        online: string;
        warn: string;
        critical: string;
        bodyBg: string;
        pageBg: string;
        bodyColor: string;
        textColor: string;
        textColorStrong: string;
        textColorWeak: string;
        textColorFaint: string;
        textColorEmphasis: string;
        linkColor: string;
        linkColorDisabled: string;
        linkColorHover: string;
        linkColorExternal: string;
        headingColor: string;
    };
}
export interface Themeable {
    theme: GrafanaTheme;
}
