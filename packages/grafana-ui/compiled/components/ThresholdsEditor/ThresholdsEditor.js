import * as tslib_1 from "tslib";
import React, { PureComponent } from 'react';
import { ColorPicker } from '..';
import { PanelOptionsGroup } from '..';
import { colors } from '../../utils';
import { ThemeContext } from '../../themes/ThemeContext';
import { getColorFromHexRgbOrName } from '../../utils/namedColorsPalette';
var ThresholdsEditor = /** @class */ (function (_super) {
    tslib_1.__extends(ThresholdsEditor, _super);
    function ThresholdsEditor(props) {
        var _this = _super.call(this, props) || this;
        _this.onAddThreshold = function (index) {
            var thresholds = _this.state.thresholds;
            var maxValue = 100;
            var minValue = 0;
            if (index === 0) {
                return;
            }
            var newThresholds = thresholds.map(function (threshold) {
                if (threshold.index >= index) {
                    var index_1 = threshold.index + 1;
                    threshold = tslib_1.__assign({}, threshold, { index: index_1 });
                }
                return threshold;
            });
            // Setting value to a value between the previous thresholds
            var beforeThreshold = newThresholds.filter(function (t) { return t.index === index - 1 && t.index !== 0; })[0];
            var afterThreshold = newThresholds.filter(function (t) { return t.index === index + 1 && t.index !== 0; })[0];
            var beforeThresholdValue = beforeThreshold !== undefined ? beforeThreshold.value : minValue;
            var afterThresholdValue = afterThreshold !== undefined ? afterThreshold.value : maxValue;
            var value = afterThresholdValue - (afterThresholdValue - beforeThresholdValue) / 2;
            // Set a color
            var color = colors.filter(function (c) { return !newThresholds.some(function (t) { return t.color === c; }); })[1];
            _this.setState({
                thresholds: _this.sortThresholds(newThresholds.concat([
                    {
                        color: color,
                        index: index,
                        value: value,
                    },
                ])),
            }, function () { return _this.onChange(); });
        };
        _this.onRemoveThreshold = function (threshold) {
            if (threshold.index === 0) {
                return;
            }
            _this.setState(function (prevState) {
                var newThresholds = prevState.thresholds.map(function (t) {
                    if (t.index > threshold.index) {
                        var index = t.index - 1;
                        t = tslib_1.__assign({}, t, { index: index });
                    }
                    return t;
                });
                return {
                    thresholds: newThresholds.filter(function (t) { return t !== threshold; }),
                };
            }, function () { return _this.onChange(); });
        };
        _this.onChangeThresholdValue = function (event, threshold) {
            if (threshold.index === 0) {
                return;
            }
            var thresholds = _this.state.thresholds;
            var cleanValue = event.target.value.replace(/,/g, '.');
            var parsedValue = parseFloat(cleanValue);
            var value = isNaN(parsedValue) ? '' : parsedValue;
            var newThresholds = thresholds.map(function (t) {
                if (t === threshold && t.index !== 0) {
                    t = tslib_1.__assign({}, t, { value: value });
                }
                return t;
            });
            _this.setState({ thresholds: newThresholds });
        };
        _this.onChangeThresholdColor = function (threshold, color) {
            var thresholds = _this.state.thresholds;
            var newThresholds = thresholds.map(function (t) {
                if (t === threshold) {
                    t = tslib_1.__assign({}, t, { color: color });
                }
                return t;
            });
            _this.setState({
                thresholds: newThresholds,
            }, function () { return _this.onChange(); });
        };
        _this.onBlur = function () {
            _this.setState(function (prevState) {
                var sortThresholds = _this.sortThresholds(prevState.thresholds.slice());
                var index = 0;
                sortThresholds.forEach(function (t) {
                    t.index = index++;
                });
                return { thresholds: sortThresholds };
            });
            _this.onChange();
        };
        _this.onChange = function () {
            _this.props.onChange(_this.state.thresholds);
        };
        _this.sortThresholds = function (thresholds) {
            return thresholds.sort(function (t1, t2) {
                return t1.value - t2.value;
            });
        };
        _this.renderInput = function (threshold) {
            return (React.createElement("div", { className: "thresholds-row-input-inner" },
                React.createElement("span", { className: "thresholds-row-input-inner-arrow" }),
                React.createElement("div", { className: "thresholds-row-input-inner-color" }, threshold.color && (React.createElement("div", { className: "thresholds-row-input-inner-color-colorpicker" },
                    React.createElement(ColorPicker, { color: threshold.color, onChange: function (color) { return _this.onChangeThresholdColor(threshold, color); } })))),
                threshold.index === 0 && (React.createElement("div", { className: "thresholds-row-input-inner-value" },
                    React.createElement("input", { type: "text", value: "Base", readOnly: true }))),
                threshold.index > 0 && (React.createElement(React.Fragment, null,
                    React.createElement("div", { className: "thresholds-row-input-inner-value" },
                        React.createElement("input", { type: "number", step: "0.0001", onChange: function (event) { return _this.onChangeThresholdValue(event, threshold); }, value: threshold.value, onBlur: _this.onBlur, readOnly: threshold.index === 0 })),
                    React.createElement("div", { className: "thresholds-row-input-inner-remove", onClick: function () { return _this.onRemoveThreshold(threshold); } },
                        React.createElement("i", { className: "fa fa-times" }))))));
        };
        var addDefaultThreshold = _this.props.thresholds.length === 0;
        var thresholds = addDefaultThreshold
            ? [{ index: 0, value: -Infinity, color: colors[0] }]
            : props.thresholds;
        _this.state = { thresholds: thresholds };
        if (addDefaultThreshold) {
            _this.onChange();
        }
        return _this;
    }
    ThresholdsEditor.prototype.render = function () {
        var _this = this;
        var thresholds = this.state.thresholds;
        return (React.createElement(ThemeContext.Consumer, null, function (theme) {
            return (React.createElement(PanelOptionsGroup, { title: "Thresholds" },
                React.createElement("div", { className: "thresholds" }, thresholds
                    .slice(0)
                    .reverse()
                    .map(function (threshold, index) {
                    return (React.createElement("div", { className: "thresholds-row", key: threshold.index + "-" + index },
                        React.createElement("div", { className: "thresholds-row-add-button", onClick: function () { return _this.onAddThreshold(threshold.index + 1); } },
                            React.createElement("i", { className: "fa fa-plus" })),
                        React.createElement("div", { className: "thresholds-row-color-indicator", style: { backgroundColor: getColorFromHexRgbOrName(threshold.color, theme.type) } }),
                        React.createElement("div", { className: "thresholds-row-input" }, _this.renderInput(threshold))));
                }))));
        }));
    };
    return ThresholdsEditor;
}(PureComponent));
export { ThresholdsEditor };
//# sourceMappingURL=ThresholdsEditor.js.map