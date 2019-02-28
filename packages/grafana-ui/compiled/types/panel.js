var ReactPanelPlugin = /** @class */ (function () {
    function ReactPanelPlugin(panel) {
        this.panel = panel;
    }
    ReactPanelPlugin.prototype.setEditor = function (editor) {
        this.editor = editor;
    };
    ReactPanelPlugin.prototype.setDefaults = function (defaults) {
        this.defaults = defaults;
    };
    return ReactPanelPlugin;
}());
export { ReactPanelPlugin };
export var BasicGaugeColor;
(function (BasicGaugeColor) {
    BasicGaugeColor["Green"] = "#299c46";
    BasicGaugeColor["Red"] = "#d44a3a";
})(BasicGaugeColor || (BasicGaugeColor = {}));
export var MappingType;
(function (MappingType) {
    MappingType[MappingType["ValueToText"] = 1] = "ValueToText";
    MappingType[MappingType["RangeToText"] = 2] = "RangeToText";
})(MappingType || (MappingType = {}));
//# sourceMappingURL=panel.js.map