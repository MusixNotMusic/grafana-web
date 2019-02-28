import { PureComponent } from 'react';
import { ValueMapping } from '../../types';
export interface Props {
    valueMappings: ValueMapping[];
    onChange: (valueMappings: ValueMapping[]) => void;
}
interface State {
    valueMappings: ValueMapping[];
    nextIdToAdd: number;
}
export declare class ValueMappingsEditor extends PureComponent<Props, State> {
    constructor(props: Props);
    getMaxIdFromValueMappings(mappings: ValueMapping[]): number;
    addMapping: () => void;
    onRemoveMapping: (id: number) => void;
    updateGauge: (mapping: ValueMapping) => void;
    render(): JSX.Element;
}
export {};
