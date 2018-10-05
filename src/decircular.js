const decircular = (input, spacer = 2) => {
  const cache = [];
  const replacer = (key, value) => {
    if (typeof value === 'object' && value !== null) {
      if (cache.indexOf(value) !== -1) return;
      cache.push(value);
    }
    return value;
  };
  return JSON.stringify(input, replacer, spacer);
};

module.exports = decircular;
