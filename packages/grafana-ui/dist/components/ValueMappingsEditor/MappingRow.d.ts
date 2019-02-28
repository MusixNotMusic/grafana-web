import React, { PureComponent } from 'react';
import { MappingType, ValueMapping } from '../../types';
export interface Props {
    valueMapping: ValueMapping;
    updateValueMapping: (valueMapping: ValueMapping) => void;
    removeValueMapping: () => void;
}
interface State {
    from?: string;
    id: number;
    operator: string;
    text: string;
    to?: string;
    type: MappingType;
    value?: string;
}
export default class MappingRow extends PureComponent<Props, State> {
    constructor(props: Props);
    onMappingValueChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onMappingFromChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onMappingToChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onMappingTextChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onMappingTypeChange: (mappingType: MappingType) => void;
    updateMapping: () => void;
    renderRow(): JSX.Element;
    render(): JSX.Element;
}
export {};
