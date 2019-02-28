import * as tslib_1 from "tslib";
import React, { PureComponent } from 'react';
import isNil from 'lodash/isNil';
import classNames from 'classnames';
import Scrollbars from 'react-custom-scrollbars';
/**
 * Wraps component into <Scrollbars> component from `react-custom-scrollbars`
 */
var CustomScrollbar = /** @class */ (function (_super) {
    tslib_1.__extends(CustomScrollbar, _super);
    function CustomScrollbar(props) {
        var _this = _super.call(this, props) || this;
        _this.ref = React.createRef();
        return _this;
    }
    CustomScrollbar.prototype.updateScroll = function () {
        var ref = this.ref.current;
        if (ref && !isNil(this.props.scrollTop)) {
            if (this.props.scrollTop > 10000) {
                ref.scrollToBottom();
            }
            else {
                ref.scrollTop(this.props.scrollTop);
            }
        }
    };
    CustomScrollbar.prototype.componentDidMount = function () {
        this.updateScroll();
    };
    CustomScrollbar.prototype.componentDidUpdate = function () {
        this.updateScroll();
    };
    CustomScrollbar.prototype.render = function () {
        var _a = this.props, className = _a.className, children = _a.children, autoHeightMax = _a.autoHeightMax, autoHeightMin = _a.autoHeightMin, setScrollTop = _a.setScrollTop, autoHide = _a.autoHide, autoHideTimeout = _a.autoHideTimeout, hideTracksWhenNotNeeded = _a.hideTracksWhenNotNeeded, renderTrackHorizontal = _a.renderTrackHorizontal, renderTrackVertical = _a.renderTrackVertical;
        return (React.createElement(Scrollbars, { ref: this.ref, className: classNames('custom-scrollbar', className), onScroll: setScrollTop, autoHeight: true, autoHide: autoHide, autoHideTimeout: autoHideTimeout, hideTracksWhenNotNeeded: hideTracksWhenNotNeeded, 
            // These autoHeightMin & autoHeightMax options affect firefox and chrome differently.
            // Before these where set to inhert but that caused problems with cut of legends in firefox
            autoHeightMax: autoHeightMax, autoHeightMin: autoHeightMin, renderTrackHorizontal: renderTrackHorizontal || (function (props) { return React.createElement("div", tslib_1.__assign({}, props, { className: "track-horizontal" })); }), renderTrackVertical: renderTrackVertical || (function (props) { return React.createElement("div", tslib_1.__assign({}, props, { className: "track-vertical" })); }), renderThumbHorizontal: function (props) { return React.createElement("div", tslib_1.__assign({}, props, { className: "thumb-horizontal" })); }, renderThumbVertical: function (props) { return React.createElement("div", tslib_1.__assign({}, props, { className: "thumb-vertical" })); }, renderView: function (props) { return React.createElement("div", tslib_1.__assign({}, props, { className: "view" })); } }, children));
    };
    CustomScrollbar.defaultProps = {
        autoHide: false,
        autoHideTimeout: 200,
        autoHideDuration: 200,
        setScrollTop: function () { },
        hideTracksWhenNotNeeded: false,
        autoHeightMin: '0',
        autoHeightMax: '100%',
    };
    return CustomScrollbar;
}(PureComponent));
export { CustomScrollbar };
export default CustomScrollbar;
//# sourceMappingURL=CustomScrollbar.js.map