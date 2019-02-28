/// <reference types="react" />
import { Color } from '../../utils/namedColorsPalette';
import { Themeable } from '../../types/index';
interface NamedColorsPaletteProps extends Themeable {
    color?: Color;
    onChange: (colorName: string) => void;
}
export declare const NamedColorsPalette: ({ color, onChange, theme }: NamedColorsPaletteProps) => JSX.Element;
export {};
