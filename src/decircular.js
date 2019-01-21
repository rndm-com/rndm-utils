const decircular = (input, spacer = 2, options = {}) => {
  const cache = [];
  const replacer = (key, value) => {
    if (typeof value === 'object' && value !== null) {
      if (cache.indexOf(value) !== -1) return;
      cache.push(value);
    } else if (typeof  value === 'function' && options.stringifyFunctions) {
      return value.toString();
    }
    return value;
  };
  return JSON.stringify(input, replacer, spacer);
};

module.exports = decircular;
