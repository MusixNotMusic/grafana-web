import * as tslib_1 from "tslib";
import React, { PureComponent } from 'react';
import $ from 'jquery';
import { getMappedValue } from '../../utils/valueMappings';
import { getColorFromHexRgbOrName } from '../../utils/namedColorsPalette';
import { GrafanaThemeType } from '../../types/theme';
import { BasicGaugeColor } from '../../types/panel';
import { getValueFormat } from '../../utils/valueFormats/valueFormats';
var FONT_SCALE = 1;
var Gauge = /** @class */ (function (_super) {
    tslib_1.__extends(Gauge, _super);
    function Gauge() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Gauge.prototype.componentDidMount = function () {
        this.draw();
    };
    Gauge.prototype.componentDidUpdate = function () {
        this.draw();
    };
    Gauge.prototype.formatValue = function (value) {
        var _a = this.props, decimals = _a.decimals, valueMappings = _a.valueMappings, prefix = _a.prefix, suffix = _a.suffix, unit = _a.unit;
        if (isNaN(value)) {
            return value;
        }
        if (valueMappings.length > 0) {
            var valueMappedValue = getMappedValue(valueMappings, value);
            if (valueMappedValue) {
                return "" + (prefix && prefix + ' ') + valueMappedValue.text + (suffix && ' ' + suffix);
            }
        }
        var formatFunc = getValueFormat(unit);
        var formattedValue = formatFunc(value, decimals);
        var handleNoValueValue = formattedValue || 'no value';
        return "" + (prefix && prefix + ' ') + handleNoValueValue + (suffix && ' ' + suffix);
    };
    Gauge.prototype.getFontColor = function (value) {
        var _a = this.props, thresholds = _a.thresholds, theme = _a.theme;
        if (thresholds.length === 1) {
            return getColorFromHexRgbOrName(thresholds[0].color, theme.type);
        }
        var atThreshold = thresholds.filter(function (threshold) { return value === threshold.value; })[0];
        if (atThreshold) {
            return getColorFromHexRgbOrName(atThreshold.color, theme.type);
        }
        var belowThreshold = thresholds.filter(function (threshold) { return value > threshold.value; });
        if (belowThreshold.length > 0) {
            var nearestThreshold = belowThreshold.sort(function (t1, t2) { return t2.value - t1.value; })[0];
            return getColorFromHexRgbOrName(nearestThreshold.color, theme.type);
        }
        return BasicGaugeColor.Red;
    };
    Gauge.prototype.getFormattedThresholds = function () {
        var _a = this.props, maxValue = _a.maxValue, minValue = _a.minValue, thresholds = _a.thresholds, theme = _a.theme;
        var lastThreshold = thresholds[thresholds.length - 1];
        return thresholds.map(function (threshold) {
            if (threshold.index === 0) {
                return { value: minValue, color: getColorFromHexRgbOrName(threshold.color, theme.type) };
            }
            var previousThreshold = thresholds[threshold.index - 1];
            return { value: threshold.value, color: getColorFromHexRgbOrName(previousThreshold.color, theme.type) };
        }).concat([
            { value: maxValue, color: getColorFromHexRgbOrName(lastThreshold.color, theme.type) },
        ]);
    };
    Gauge.prototype.getFontScale = function (length) {
        if (length > 12) {
            return FONT_SCALE - (length * 5) / 110;
        }
        return FONT_SCALE - (length * 5) / 100;
    };
    Gauge.prototype.draw = function () {
        var _a = this.props, maxValue = _a.maxValue, minValue = _a.minValue, showThresholdLabels = _a.showThresholdLabels, showThresholdMarkers = _a.showThresholdMarkers, width = _a.width, height = _a.height, theme = _a.theme, value = _a.value;
        var formattedValue = this.formatValue(value);
        var dimension = Math.min(width, height * 1.3);
        var backgroundColor = theme.type === GrafanaThemeType.Light ? 'rgb(230,230,230)' : theme.colors.dark3;
        var gaugeWidthReduceRatio = showThresholdLabels ? 1.5 : 1;
        var gaugeWidth = Math.min(dimension / 6, 60) / gaugeWidthReduceRatio;
        var thresholdMarkersWidth = gaugeWidth / 5;
        var fontSize = Math.min(dimension / 5, 100) * (formattedValue !== null ? this.getFontScale(formattedValue.length) : 1);
        var thresholdLabelFontSize = fontSize / 2.5;
        var options = {
            series: {
                gauges: {
                    gauge: {
                        min: minValue,
                        max: maxValue,
                        background: { color: backgroundColor },
                        border: { color: null },
                        shadow: { show: false },
                        width: gaugeWidth,
                    },
                    frame: { show: false },
                    label: { show: false },
                    layout: { margin: 0, thresholdWidth: 0 },
                    cell: { border: { width: 0 } },
                    threshold: {
                        values: this.getFormattedThresholds(),
                        label: {
                            show: showThresholdLabels,
                            margin: thresholdMarkersWidth + 1,
                            font: { size: thresholdLabelFontSize },
                        },
                        show: showThresholdMarkers,
                        width: thresholdMarkersWidth,
                    },
                    value: {
                        color: this.getFontColor(value),
                        formatter: function () {
                            return formattedValue;
                        },
                        font: { size: fontSize, family: '"Helvetica Neue", Helvetica, Arial, sans-serif' },
                    },
                    show: true,
                },
            },
        };
        var plotSeries = { data: [[0, value]] };
        try {
            $.plot(this.canvasElement, [plotSeries], options);
        }
        catch (err) {
            console.log('Gauge rendering error', err, options, value);
        }
    };
    Gauge.prototype.render = function () {
        var _this = this;
        var _a = this.props, height = _a.height, width = _a.width;
        return (React.createElement("div", { className: "singlestat-panel" },
            React.createElement("div", { style: {
                    height: height * 0.9 + "px",
                    width: Math.min(width, height * 1.3) + "px",
                    top: '10px',
                    margin: 'auto',
                }, ref: function (element) { return (_this.canvasElement = element); } })));
    };
    Gauge.defaultProps = {
        maxValue: 100,
        valueMappings: [],
        minValue: 0,
        prefix: '',
        showThresholdMarkers: true,
        showThresholdLabels: false,
        suffix: '',
        thresholds: [],
        unit: 'none',
        stat: 'avg',
        theme: GrafanaThemeType.Dark,
    };
    return Gauge;
}(PureComponent));
export { Gauge };
export default Gauge;
//# sourceMappingURL=Gauge.js.map