import { InputHTMLAttributes, FunctionComponent } from 'react';
export interface Props extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    labelWidth?: number;
    inputWidth?: number;
}
declare const FormField: FunctionComponent<Props>;
export { FormField };
