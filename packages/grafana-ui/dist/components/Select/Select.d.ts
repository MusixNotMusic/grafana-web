import { PureComponent } from 'react';
export interface SelectOptionItem {
    label?: string;
    value?: any;
    imgUrl?: string;
    description?: string;
    [key: string]: any;
}
interface CommonProps {
    defaultValue?: any;
    getOptionLabel?: (item: SelectOptionItem) => string;
    getOptionValue?: (item: SelectOptionItem) => string;
    onChange: (item: SelectOptionItem) => {} | void;
    placeholder?: string;
    width?: number;
    value?: SelectOptionItem;
    className?: string;
    isDisabled?: boolean;
    isSearchable?: boolean;
    isClearable?: boolean;
    autoFocus?: boolean;
    openMenuOnFocus?: boolean;
    onBlur?: () => void;
    maxMenuHeight?: number;
    isLoading: boolean;
    noOptionsMessage?: () => string;
    isMulti?: boolean;
    backspaceRemovesValue: boolean;
}
interface SelectProps {
    options: SelectOptionItem[];
}
interface AsyncProps {
    defaultOptions: boolean;
    loadOptions: (query: string) => Promise<SelectOptionItem[]>;
    loadingMessage?: () => string;
}
export declare const MenuList: (props: any) => JSX.Element;
export declare class Select extends PureComponent<CommonProps & SelectProps> {
    static defaultProps: {
        width: null;
        className: string;
        isDisabled: boolean;
        isSearchable: boolean;
        isClearable: boolean;
        isMulti: boolean;
        openMenuOnFocus: boolean;
        autoFocus: boolean;
        isLoading: boolean;
        backspaceRemovesValue: boolean;
        maxMenuHeight: number;
    };
    render(): JSX.Element;
}
export declare class AsyncSelect extends PureComponent<CommonProps & AsyncProps> {
    static defaultProps: {
        width: null;
        className: string;
        components: {};
        loadingMessage: () => string;
        isDisabled: boolean;
        isClearable: boolean;
        isMulti: boolean;
        isSearchable: boolean;
        backspaceRemovesValue: boolean;
        autoFocus: boolean;
        openMenuOnFocus: boolean;
        maxMenuHeight: number;
    };
    render(): JSX.Element;
}
export default Select;
