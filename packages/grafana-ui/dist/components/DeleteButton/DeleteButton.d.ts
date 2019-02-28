import React, { PureComponent } from 'react';
interface Props {
    onConfirm(): void;
}
interface State {
    showConfirm: boolean;
}
export declare class DeleteButton extends PureComponent<Props, State> {
    state: State;
    onClickDelete: (event: React.SyntheticEvent<Element>) => void;
    onClickCancel: (event: React.SyntheticEvent<Element>) => void;
    render(): JSX.Element;
}
export {};
