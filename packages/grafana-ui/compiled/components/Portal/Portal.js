import * as tslib_1 from "tslib";
import { PureComponent } from 'react';
import ReactDOM from 'react-dom';
var Portal = /** @class */ (function (_super) {
    tslib_1.__extends(Portal, _super);
    function Portal(props) {
        var _this = _super.call(this, props) || this;
        _this.node = document.createElement('div');
        var _a = _this.props, className = _a.className, _b = _a.root, root = _b === void 0 ? document.body : _b;
        if (className) {
            _this.node.classList.add(className);
        }
        _this.portalRoot = root;
        _this.portalRoot.appendChild(_this.node);
        return _this;
    }
    Portal.prototype.componentWillUnmount = function () {
        this.portalRoot.removeChild(this.node);
    };
    Portal.prototype.render = function () {
        return ReactDOM.createPortal(this.props.children, this.node);
    };
    return Portal;
}(PureComponent));
export { Portal };
//# sourceMappingURL=Portal.js.map