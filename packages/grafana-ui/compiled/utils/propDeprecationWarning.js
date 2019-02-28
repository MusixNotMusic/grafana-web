var propDeprecationWarning = function (componentName, propName, newPropName) {
    var message = "[Deprecation warning] " + componentName + ": " + propName + " is deprecated. Use " + newPropName + " instead";
    console.warn(message);
};
export default propDeprecationWarning;
//# sourceMappingURL=propDeprecationWarning.js.map