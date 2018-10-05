const { describe, test } = global;

describe('src/index', () => {
  test('exported', () => {
    const exported = require('../../../src/index');
    expect(Object.keys(exported)).toMatchSnapshot();
  });

  test('exported', () => {
    const exported = require('../../../src');
    expect(Object.keys(exported)).toMatchSnapshot();
  });
});
