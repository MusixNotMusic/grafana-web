import * as tslib_1 from "tslib";
import React from 'react';
var PopperController = /** @class */ (function (_super) {
    tslib_1.__extends(PopperController, _super);
    function PopperController(props) {
        var _this = _super.call(this, props) || this;
        _this.showPopper = function () {
            if (_this.hideTimeout) {
                clearTimeout(_this.hideTimeout);
            }
            _this.setState(function (prevState) { return (tslib_1.__assign({}, prevState, { show: true })); });
        };
        _this.hidePopper = function () {
            if (_this.props.hideAfter !== 0) {
                _this.hideTimeout = setTimeout(function () {
                    _this.setState(function (prevState) { return (tslib_1.__assign({}, prevState, { show: false })); });
                }, _this.props.hideAfter);
                return;
            }
            _this.setState(function (prevState) { return (tslib_1.__assign({}, prevState, { show: false })); });
        };
        _this.state = {
            placement: _this.props.placement || 'auto',
            show: false,
        };
        return _this;
    }
    PopperController.prototype.componentWillReceiveProps = function (nextProps) {
        if (nextProps.placement && nextProps.placement !== this.state.placement) {
            this.setState(function (prevState) {
                return tslib_1.__assign({}, prevState, { placement: nextProps.placement || 'auto' });
            });
        }
    };
    PopperController.prototype.render = function () {
        var _a = this.props, children = _a.children, content = _a.content;
        var _b = this.state, show = _b.show, placement = _b.placement;
        return children(this.showPopper, this.hidePopper, {
            show: show,
            placement: placement,
            content: content,
        });
    };
    return PopperController;
}(React.Component));
export { PopperController };
//# sourceMappingURL=PopperController.js.map