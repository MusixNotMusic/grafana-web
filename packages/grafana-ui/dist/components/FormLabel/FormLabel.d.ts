import { FunctionComponent, ReactNode } from 'react';
interface Props {
    children: ReactNode;
    className?: string;
    htmlFor?: string;
    isFocused?: boolean;
    isInvalid?: boolean;
    tooltip?: string;
    width?: number;
}
export declare const FormLabel: FunctionComponent<Props>;
export {};
