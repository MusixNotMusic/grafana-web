import { PureComponent } from 'react';
import { GroupProps } from 'react-select/lib/components/Group';
interface ExtendedGroupProps extends GroupProps<any> {
    data: {
        label: string;
        expanded: boolean;
        options: any[];
    };
}
interface State {
    expanded: boolean;
}
export default class SelectOptionGroup extends PureComponent<ExtendedGroupProps, State> {
    state: {
        expanded: boolean;
    };
    componentDidMount(): void;
    componentDidUpdate(nextProps: ExtendedGroupProps): void;
    onToggleChildren: () => void;
    render(): JSX.Element;
}
export {};
