import * as tslib_1 from "tslib";
import React, { PureComponent } from 'react';
var SelectOptionGroup = /** @class */ (function (_super) {
    tslib_1.__extends(SelectOptionGroup, _super);
    function SelectOptionGroup() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            expanded: false,
        };
        _this.onToggleChildren = function () {
            _this.setState(function (prevState) { return ({
                expanded: !prevState.expanded,
            }); });
        };
        return _this;
    }
    SelectOptionGroup.prototype.componentDidMount = function () {
        if (this.props.data.expanded) {
            this.setState({ expanded: true });
        }
        else if (this.props.selectProps && this.props.selectProps.value) {
            var value_1 = this.props.selectProps.value.value;
            if (value_1 && this.props.options.some(function (option) { return option.value === value_1; })) {
                this.setState({ expanded: true });
            }
        }
    };
    SelectOptionGroup.prototype.componentDidUpdate = function (nextProps) {
        if (nextProps.selectProps.inputValue !== '') {
            this.setState({ expanded: true });
        }
    };
    SelectOptionGroup.prototype.render = function () {
        var _a = this.props, children = _a.children, label = _a.label;
        var expanded = this.state.expanded;
        return (React.createElement("div", { className: "gf-form-select-box__option-group" },
            React.createElement("div", { className: "gf-form-select-box__option-group__header", onClick: this.onToggleChildren },
                React.createElement("span", { className: "flex-grow-1" }, label),
                React.createElement("i", { className: "fa " + (expanded ? 'fa-caret-left' : 'fa-caret-down') }),
                ' '),
            expanded && children));
    };
    return SelectOptionGroup;
}(PureComponent));
export default SelectOptionGroup;
//# sourceMappingURL=SelectOptionGroup.js.map