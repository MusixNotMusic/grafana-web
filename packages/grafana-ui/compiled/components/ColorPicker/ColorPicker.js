import * as tslib_1 from "tslib";
import React, { Component, createRef } from 'react';
import { PopperController } from '../Tooltip/PopperController';
import { Popper } from '../Tooltip/Popper';
import { ColorPickerPopover } from './ColorPickerPopover';
import { getColorFromHexRgbOrName } from '../../utils/namedColorsPalette';
import { SeriesColorPickerPopover } from './SeriesColorPickerPopover';
import { withTheme } from '../../themes/ThemeContext';
export var colorPickerFactory = function (popover, displayName) {
    if (displayName === void 0) { displayName = 'ColorPicker'; }
    var _a;
    return _a = /** @class */ (function (_super) {
            tslib_1.__extends(ColorPicker, _super);
            function ColorPicker() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.pickerTriggerRef = createRef();
                _this.handleColorChange = function (color) {
                    var _a = _this.props, onColorChange = _a.onColorChange, onChange = _a.onChange;
                    var changeHandler = (onColorChange || onChange);
                    return changeHandler(color);
                };
                return _this;
            }
            ColorPicker.prototype.render = function () {
                var _this = this;
                var popoverElement = React.createElement(popover, tslib_1.__assign({}, this.props, { onChange: this.handleColorChange }));
                var _a = this.props, theme = _a.theme, children = _a.children;
                return (React.createElement(PopperController, { content: popoverElement, hideAfter: 300 }, function (showPopper, hidePopper, popperProps) {
                    return (React.createElement(React.Fragment, null,
                        _this.pickerTriggerRef.current && (React.createElement(Popper, tslib_1.__assign({}, popperProps, { referenceElement: _this.pickerTriggerRef.current, wrapperClassName: "ColorPicker", onMouseLeave: hidePopper, onMouseEnter: showPopper }))),
                        children ? (React.cloneElement(children, {
                            ref: _this.pickerTriggerRef,
                            onClick: showPopper,
                            onMouseLeave: hidePopper,
                        })) : (React.createElement("div", { ref: _this.pickerTriggerRef, onClick: showPopper, onMouseLeave: hidePopper, className: "sp-replacer sp-light" },
                            React.createElement("div", { className: "sp-preview" },
                                React.createElement("div", { className: "sp-preview-inner", style: {
                                        backgroundColor: getColorFromHexRgbOrName(_this.props.color || '#000000', theme.type),
                                    } }))))));
                }));
            };
            return ColorPicker;
        }(Component)),
        _a.displayName = displayName,
        _a;
};
export var ColorPicker = withTheme(colorPickerFactory(ColorPickerPopover, 'ColorPicker'));
export var SeriesColorPicker = withTheme(colorPickerFactory(SeriesColorPickerPopover, 'SeriesColorPicker'));
//# sourceMappingURL=ColorPicker.js.map