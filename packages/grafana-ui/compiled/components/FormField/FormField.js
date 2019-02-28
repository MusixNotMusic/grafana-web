import * as tslib_1 from "tslib";
import React from 'react';
import { FormLabel } from '../FormLabel/FormLabel';
var defaultProps = {
    labelWidth: 6,
    inputWidth: 12,
};
var FormField = function (_a) {
    var label = _a.label, labelWidth = _a.labelWidth, inputWidth = _a.inputWidth, inputProps = tslib_1.__rest(_a, ["label", "labelWidth", "inputWidth"]);
    return (React.createElement("div", { className: "form-field" },
        React.createElement(FormLabel, { width: labelWidth }, label),
        React.createElement("input", tslib_1.__assign({ type: "text", className: "gf-form-input width-" + inputWidth }, inputProps))));
};
FormField.defaultProps = defaultProps;
export { FormField };
//# sourceMappingURL=FormField.js.map