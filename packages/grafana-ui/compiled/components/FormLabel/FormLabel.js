import * as tslib_1 from "tslib";
import React from 'react';
import classNames from 'classnames';
import { Tooltip } from '../Tooltip/Tooltip';
export var FormLabel = function (_a) {
    var children = _a.children, isFocused = _a.isFocused, isInvalid = _a.isInvalid, className = _a.className, htmlFor = _a.htmlFor, tooltip = _a.tooltip, width = _a.width, rest = tslib_1.__rest(_a, ["children", "isFocused", "isInvalid", "className", "htmlFor", "tooltip", "width"]);
    var classes = classNames("gf-form-label width-" + (width ? width : '10'), className, {
        'gf-form-label--is-focused': isFocused,
        'gf-form-label--is-invalid': isInvalid,
    });
    return (React.createElement("label", tslib_1.__assign({ className: classes }, rest, { htmlFor: htmlFor }),
        children,
        tooltip && (React.createElement(Tooltip, { placement: "top", content: tooltip, theme: 'info' },
            React.createElement("div", { className: "gf-form-help-icon gf-form-help-icon--right-normal" },
                React.createElement("i", { className: "fa fa-info-circle" }))))));
};
//# sourceMappingURL=FormLabel.js.map