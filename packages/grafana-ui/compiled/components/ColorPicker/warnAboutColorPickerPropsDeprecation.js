import propDeprecationWarning from '../../utils/propDeprecationWarning';
export var warnAboutColorPickerPropsDeprecation = function (componentName, props) {
    var onColorChange = props.onColorChange;
    if (onColorChange) {
        propDeprecationWarning(componentName, 'onColorChange', 'onChange');
    }
};
//# sourceMappingURL=warnAboutColorPickerPropsDeprecation.js.map