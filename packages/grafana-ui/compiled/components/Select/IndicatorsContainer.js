import * as tslib_1 from "tslib";
import React from 'react';
// Ignoring because I couldn't get @types/react-select work wih Torkel's fork
// @ts-ignore
import { components } from '@torkelo/react-select';
export var IndicatorsContainer = function (props) {
    var isOpen = props.selectProps.menuIsOpen;
    return (React.createElement(components.IndicatorsContainer, tslib_1.__assign({}, props),
        React.createElement("span", { className: "gf-form-select-box__select-arrow " + (isOpen ? "gf-form-select-box__select-arrow--reversed" : '') })));
};
export default IndicatorsContainer;
//# sourceMappingURL=IndicatorsContainer.js.map