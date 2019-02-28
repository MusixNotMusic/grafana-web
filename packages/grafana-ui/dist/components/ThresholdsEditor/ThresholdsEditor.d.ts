import React, { PureComponent } from 'react';
import { Threshold } from '../../types';
export interface Props {
    thresholds: Threshold[];
    onChange: (thresholds: Threshold[]) => void;
}
interface State {
    thresholds: Threshold[];
}
export declare class ThresholdsEditor extends PureComponent<Props, State> {
    constructor(props: Props);
    onAddThreshold: (index: number) => void;
    onRemoveThreshold: (threshold: Threshold) => void;
    onChangeThresholdValue: (event: React.ChangeEvent<HTMLInputElement>, threshold: Threshold) => void;
    onChangeThresholdColor: (threshold: Threshold, color: string) => void;
    onBlur: () => void;
    onChange: () => void;
    sortThresholds: (thresholds: Threshold[]) => Threshold[];
    renderInput: (threshold: Threshold) => JSX.Element;
    render(): JSX.Element;
}
export {};
