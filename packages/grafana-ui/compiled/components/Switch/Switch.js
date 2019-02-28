import * as tslib_1 from "tslib";
import React, { PureComponent } from 'react';
import uniqueId from 'lodash/uniqueId';
var Switch = /** @class */ (function (_super) {
    tslib_1.__extends(Switch, _super);
    function Switch() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            id: uniqueId(),
        };
        _this.internalOnChange = function (event) {
            event.stopPropagation();
            _this.props.onChange(event);
        };
        return _this;
    }
    Switch.prototype.render = function () {
        var _a = this.props, _b = _a.labelClass, labelClass = _b === void 0 ? '' : _b, _c = _a.switchClass, switchClass = _c === void 0 ? '' : _c, label = _a.label, checked = _a.checked, transparent = _a.transparent, className = _a.className;
        var labelId = this.state.id;
        var labelClassName = "gf-form-label " + labelClass + " " + (transparent ? 'gf-form-label--transparent' : '') + " pointer";
        var switchClassName = "gf-form-switch " + switchClass + " " + (transparent ? 'gf-form-switch--transparent' : '');
        return (React.createElement("div", { className: "gf-form-switch-container-react" },
            React.createElement("label", { htmlFor: labelId, className: "gf-form gf-form-switch-container " + (className || '') },
                label && React.createElement("div", { className: labelClassName }, label),
                React.createElement("div", { className: switchClassName },
                    React.createElement("input", { id: labelId, type: "checkbox", checked: checked, onChange: this.internalOnChange }),
                    React.createElement("span", { className: "gf-form-switch__slider" })))));
    };
    return Switch;
}(PureComponent));
export { Switch };
//# sourceMappingURL=Switch.js.map