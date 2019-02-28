import React from 'react';
import { ColorPickerProps } from './ColorPickerPopover';
interface ColorInputState {
    previousColor: string;
    value: string;
}
interface ColorInputProps extends ColorPickerProps {
    style?: React.CSSProperties;
}
declare class ColorInput extends React.PureComponent<ColorInputProps, ColorInputState> {
    constructor(props: ColorInputProps);
    static getDerivedStateFromProps(props: ColorPickerProps, state: ColorInputState): ColorInputState;
    updateColor: (color: string) => void;
    handleChange: (event: React.SyntheticEvent<HTMLInputElement>) => void;
    handleBlur: () => void;
    render(): JSX.Element;
}
export default ColorInput;
