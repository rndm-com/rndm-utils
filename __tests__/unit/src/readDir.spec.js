const readDir = require('../../../src/readDir');
const { describe, test } = global;

describe('src/readDir', () => {
  test('current', () => {
    const input = __dirname;
    const sut = readDir(__dirname).filter(i => !i.includes('__snapshots__')).map(i => i.replace(process.cwd(), ''));
    expect(sut).toMatchSnapshot()
  });
});
