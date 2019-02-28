import * as tslib_1 from "tslib";
import React, { PureComponent } from 'react';
import MappingRow from './MappingRow';
import { MappingType } from '../../types';
import { PanelOptionsGroup } from '../PanelOptionsGroup/PanelOptionsGroup';
var ValueMappingsEditor = /** @class */ (function (_super) {
    tslib_1.__extends(ValueMappingsEditor, _super);
    function ValueMappingsEditor(props) {
        var _this = _super.call(this, props) || this;
        _this.addMapping = function () {
            return _this.setState(function (prevState) { return ({
                valueMappings: prevState.valueMappings.concat([
                    {
                        id: prevState.nextIdToAdd,
                        operator: '',
                        value: '',
                        text: '',
                        type: MappingType.ValueToText,
                        from: '',
                        to: '',
                    },
                ]),
                nextIdToAdd: prevState.nextIdToAdd + 1,
            }); });
        };
        _this.onRemoveMapping = function (id) {
            _this.setState(function (prevState) { return ({
                valueMappings: prevState.valueMappings.filter(function (m) {
                    return m.id !== id;
                }),
            }); }, function () {
                _this.props.onChange(_this.state.valueMappings);
            });
        };
        _this.updateGauge = function (mapping) {
            _this.setState(function (prevState) { return ({
                valueMappings: prevState.valueMappings.map(function (m) {
                    if (m.id === mapping.id) {
                        return tslib_1.__assign({}, mapping);
                    }
                    return m;
                }),
            }); }, function () {
                _this.props.onChange(_this.state.valueMappings);
            });
        };
        var mappings = props.valueMappings;
        _this.state = {
            valueMappings: mappings,
            nextIdToAdd: mappings.length > 0 ? _this.getMaxIdFromValueMappings(mappings) : 1,
        };
        return _this;
    }
    ValueMappingsEditor.prototype.getMaxIdFromValueMappings = function (mappings) {
        return Math.max.apply(null, mappings.map(function (mapping) { return mapping.id; }).map(function (m) { return m; })) + 1;
    };
    ValueMappingsEditor.prototype.render = function () {
        var _this = this;
        var valueMappings = this.state.valueMappings;
        return (React.createElement(PanelOptionsGroup, { title: "Add value mapping", onAdd: this.addMapping }, valueMappings.length > 0 &&
            valueMappings.map(function (valueMapping, index) { return (React.createElement(MappingRow, { key: valueMapping.text + "-" + index, valueMapping: valueMapping, updateValueMapping: _this.updateGauge, removeValueMapping: function () { return _this.onRemoveMapping(valueMapping.id); } })); })));
    };
    return ValueMappingsEditor;
}(PureComponent));
export { ValueMappingsEditor };
//# sourceMappingURL=ValueMappingsEditor.js.map