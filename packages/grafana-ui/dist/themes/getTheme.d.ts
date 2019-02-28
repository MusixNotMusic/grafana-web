import { GrafanaTheme } from '../types/theme';
export declare const getTheme: (name?: string | undefined) => GrafanaTheme;
export declare const mockTheme: (mock: (name?: string | undefined) => GrafanaTheme) => () => void;
