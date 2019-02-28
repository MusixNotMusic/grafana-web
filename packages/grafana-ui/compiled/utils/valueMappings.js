import { MappingType } from '../types';
var addValueToTextMappingText = function (allValueMappings, valueToTextMapping, value) {
    if (valueToTextMapping.value === undefined) {
        return allValueMappings;
    }
    if (value === null && valueToTextMapping.value && valueToTextMapping.value.toLowerCase() === 'null') {
        return allValueMappings.concat(valueToTextMapping);
    }
    var valueAsNumber = parseFloat(value);
    var valueToTextMappingAsNumber = parseFloat(valueToTextMapping.value);
    if (isNaN(valueAsNumber) || isNaN(valueToTextMappingAsNumber)) {
        return allValueMappings;
    }
    if (valueAsNumber !== valueToTextMappingAsNumber) {
        return allValueMappings;
    }
    return allValueMappings.concat(valueToTextMapping);
};
var addRangeToTextMappingText = function (allValueMappings, rangeToTextMapping, value) {
    if (rangeToTextMapping.from === undefined || rangeToTextMapping.to === undefined || value === undefined) {
        return allValueMappings;
    }
    if (value === null &&
        rangeToTextMapping.from &&
        rangeToTextMapping.to &&
        rangeToTextMapping.from.toLowerCase() === 'null' &&
        rangeToTextMapping.to.toLowerCase() === 'null') {
        return allValueMappings.concat(rangeToTextMapping);
    }
    var valueAsNumber = parseFloat(value);
    var fromAsNumber = parseFloat(rangeToTextMapping.from);
    var toAsNumber = parseFloat(rangeToTextMapping.to);
    if (isNaN(valueAsNumber) || isNaN(fromAsNumber) || isNaN(toAsNumber)) {
        return allValueMappings;
    }
    if (valueAsNumber >= fromAsNumber && valueAsNumber <= toAsNumber) {
        return allValueMappings.concat(rangeToTextMapping);
    }
    return allValueMappings;
};
var getAllFormattedValueMappings = function (valueMappings, value) {
    var allFormattedValueMappings = valueMappings.reduce(function (allValueMappings, valueMapping) {
        if (valueMapping.type === MappingType.ValueToText) {
            allValueMappings = addValueToTextMappingText(allValueMappings, valueMapping, value);
        }
        else if (valueMapping.type === MappingType.RangeToText) {
            allValueMappings = addRangeToTextMappingText(allValueMappings, valueMapping, value);
        }
        return allValueMappings;
    }, []);
    allFormattedValueMappings.sort(function (t1, t2) {
        return t1.id - t2.id;
    });
    return allFormattedValueMappings;
};
export var getMappedValue = function (valueMappings, value) {
    return getAllFormattedValueMappings(valueMappings, value)[0];
};
//# sourceMappingURL=valueMappings.js.map