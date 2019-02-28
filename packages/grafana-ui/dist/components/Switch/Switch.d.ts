import React, { PureComponent } from 'react';
export interface Props {
    label: string;
    checked: boolean;
    className?: string;
    labelClass?: string;
    switchClass?: string;
    transparent?: boolean;
    onChange: (event?: React.SyntheticEvent<HTMLInputElement>) => void;
}
export interface State {
    id: any;
}
export declare class Switch extends PureComponent<Props, State> {
    state: {
        id: string;
    };
    internalOnChange: (event: React.FormEvent<HTMLInputElement>) => void;
    render(): JSX.Element;
}
