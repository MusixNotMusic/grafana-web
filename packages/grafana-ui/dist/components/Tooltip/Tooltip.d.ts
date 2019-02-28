/// <reference types="react" />
import { UsingPopperProps } from './PopperController';
interface TooltipProps extends UsingPopperProps {
    theme?: 'info' | 'error';
}
export declare const Tooltip: ({ children, theme, ...controllerProps }: TooltipProps) => JSX.Element;
export {};
