import { PureComponent } from 'react';
import { Themeable, GrafanaThemeType } from '../../types/theme';
import { ValueMapping, Threshold } from '../../types/panel';
declare type TimeSeriesValue = string | number | null;
export interface Props extends Themeable {
    decimals?: number | null;
    height: number;
    valueMappings: ValueMapping[];
    maxValue: number;
    minValue: number;
    prefix: string;
    thresholds: Threshold[];
    showThresholdMarkers: boolean;
    showThresholdLabels: boolean;
    stat: string;
    suffix: string;
    unit: string;
    width: number;
    value: number;
}
export declare class Gauge extends PureComponent<Props> {
    canvasElement: any;
    static defaultProps: {
        maxValue: number;
        valueMappings: never[];
        minValue: number;
        prefix: string;
        showThresholdMarkers: boolean;
        showThresholdLabels: boolean;
        suffix: string;
        thresholds: never[];
        unit: string;
        stat: string;
        theme: GrafanaThemeType;
    };
    componentDidMount(): void;
    componentDidUpdate(): void;
    formatValue(value: TimeSeriesValue): string | number | null;
    getFontColor(value: TimeSeriesValue): string;
    getFormattedThresholds(): {
        value: number;
        color: string;
    }[];
    getFontScale(length: number): number;
    draw(): void;
    render(): JSX.Element;
}
export default Gauge;
