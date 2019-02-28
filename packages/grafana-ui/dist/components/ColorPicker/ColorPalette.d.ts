import React from 'react';
export interface Props {
    color: string;
    onColorSelect: (c: string) => void;
}
export declare class ColorPalette extends React.Component<Props, any> {
    paletteColors: string[];
    constructor(props: Props);
    onColorSelect(color: string): () => void;
    render(): JSX.Element;
}
