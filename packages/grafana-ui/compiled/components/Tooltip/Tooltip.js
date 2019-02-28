import * as tslib_1 from "tslib";
import React, { createRef } from 'react';
import { Popper } from './Popper';
import { PopperController } from './PopperController';
export var Tooltip = function (_a) {
    var children = _a.children, theme = _a.theme, controllerProps = tslib_1.__rest(_a, ["children", "theme"]);
    var tooltipTriggerRef = createRef();
    var popperBackgroundClassName = 'popper__background' + (theme ? ' popper__background--' + theme : '');
    return (React.createElement(PopperController, tslib_1.__assign({}, controllerProps), function (showPopper, hidePopper, popperProps) {
        return (React.createElement(React.Fragment, null,
            tooltipTriggerRef.current && (React.createElement(Popper, tslib_1.__assign({}, popperProps, { onMouseEnter: showPopper, onMouseLeave: hidePopper, referenceElement: tooltipTriggerRef.current, wrapperClassName: "popper", className: popperBackgroundClassName, renderArrow: function (_a) {
                    var arrowProps = _a.arrowProps, placement = _a.placement;
                    return (React.createElement("div", tslib_1.__assign({ className: "popper__arrow", "data-placement": placement }, arrowProps)));
                } }))),
            React.cloneElement(children, {
                ref: tooltipTriggerRef,
                onMouseEnter: showPopper,
                onMouseLeave: hidePopper,
            })));
    }));
};
//# sourceMappingURL=Tooltip.js.map