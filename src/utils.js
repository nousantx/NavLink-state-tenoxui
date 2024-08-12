export function createClasses(input) {
  const output = {};

  Object.keys(input).forEach(className => {
    Object.entries(input[className]).forEach(([property, value]) => {
      if (!output[property]) {
        output[property] = {};
      }
      output[property][className] = value;
    });
  });

  return output;
}

export function mergeClasses(...objects) {
  return objects.reduce((result, obj) => {
    Object.keys(obj).forEach(key => {
      if (typeof obj[key] === "object" && obj[key] !== null && !Array.isArray(obj[key])) {
        result[key] = mergeClasses(result[key] || {}, obj[key]);
      } else {
        result[key] = obj[key];
      }
    });
    return result;
  }, {});
}
