/// <reference types="react" />
import { OptionProps } from 'react-select/lib/components/Option';
interface ExtendedOptionProps extends OptionProps<any> {
    data: {
        description?: string;
        imgUrl?: string;
    };
}
export declare const SelectOption: (props: ExtendedOptionProps) => JSX.Element;
export declare const SingleValue: (props: any) => JSX.Element;
export default SelectOption;
