import * as tslib_1 from "tslib";
import React from 'react';
import tinycolor from 'tinycolor2';
import debounce from 'lodash/debounce';
var ColorInput = /** @class */ (function (_super) {
    tslib_1.__extends(ColorInput, _super);
    function ColorInput(props) {
        var _this = _super.call(this, props) || this;
        _this.updateColor = function (color) {
            _this.props.onChange(color);
        };
        _this.handleChange = function (event) {
            var newColor = tinycolor(event.currentTarget.value);
            _this.setState({
                value: event.currentTarget.value,
            });
            if (newColor.isValid()) {
                _this.updateColor(newColor.toString());
            }
        };
        _this.handleBlur = function () {
            var newColor = tinycolor(_this.state.value);
            if (!newColor.isValid()) {
                _this.setState({
                    value: _this.props.color,
                });
            }
        };
        _this.state = {
            previousColor: props.color,
            value: props.color,
        };
        _this.updateColor = debounce(_this.updateColor, 100);
        return _this;
    }
    ColorInput.getDerivedStateFromProps = function (props, state) {
        var newColor = tinycolor(props.color);
        if (newColor.isValid() && props.color !== state.previousColor) {
            return tslib_1.__assign({}, state, { previousColor: props.color, value: newColor.toString() });
        }
        return state;
    };
    ColorInput.prototype.render = function () {
        var value = this.state.value;
        return (React.createElement("div", { style: tslib_1.__assign({ display: 'flex' }, this.props.style) },
            React.createElement("div", { style: {
                    background: this.props.color,
                    width: '35px',
                    height: '35px',
                    flexGrow: 0,
                    borderRadius: '3px 0 0 3px',
                } }),
            React.createElement("div", { style: {
                    flexGrow: 1,
                } },
                React.createElement("input", { className: "gf-form-input", value: value, onChange: this.handleChange, onBlur: this.handleBlur }))));
    };
    return ColorInput;
}(React.PureComponent));
export default ColorInput;
//# sourceMappingURL=ColorInput.js.map