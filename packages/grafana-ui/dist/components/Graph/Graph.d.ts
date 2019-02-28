import { PureComponent } from 'react';
import { TimeRange, TimeSeriesVMs } from '../../types';
interface GraphProps {
    timeSeries: TimeSeriesVMs;
    timeRange: TimeRange;
    showLines?: boolean;
    showPoints?: boolean;
    showBars?: boolean;
    width: number;
    height: number;
}
export declare class Graph extends PureComponent<GraphProps> {
    static defaultProps: {
        showLines: boolean;
        showPoints: boolean;
        showBars: boolean;
    };
    element: HTMLElement | null;
    componentDidUpdate(): void;
    componentDidMount(): void;
    draw(): void;
    render(): JSX.Element;
}
export default Graph;
