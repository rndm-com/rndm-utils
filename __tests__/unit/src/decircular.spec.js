const decircular = require('../../../src/decircular');
const { describe, test } = global;

describe('src/decircular', () => {
  test('simple', () => {
    const input = { test: 'string' };
    const sut = decircular(input);
    expect(sut).toMatchSnapshot()
  });

  test('simple - spacer = 2', () => {
    const input = { test: 'string' };
    const sut = decircular(input, 2);
    expect(sut).toMatchSnapshot()
  });

  test('referenced', () => {

    const ref1 = { test: 'string1' };
    const ref2 = { test: 'string2' };

    ref1.ref2 = ref2;
    ref2.re1 = ref1;

    const sut = decircular(ref1);
    expect(sut).toMatchSnapshot()
  });

});
