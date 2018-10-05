const fs = require('fs');
const mkDir = require('../../../src/mkDir');
const readDir = require('../../../src/readDir');
const { describe, test } = global;

describe('src/mkDir', () => {
  test('current', () => {
    const base = __dirname;
    const path = 'a/b/c';

    const before = readDir(base).find(i => i.includes('a/b/c'));
    expect(before).toBe(undefined);

    mkDir(path, base);

    const after = readDir(base).filter(i => i.includes('a/b/c')).map(i => i.replace(base, ''));
    expect(after).toMatchSnapshot();

    const folder = [base, path].join('/');

    const comps = path.split('/');

    fs.rmdirSync([base, ...comps].join('/'));
    fs.rmdirSync([base, ...comps.slice(0, comps.length - 1)].join('/'));
    fs.rmdirSync([base, ...comps.slice(0, comps.length - 2)].join('/'));

  });

  test('no path', () => {
    const base = __dirname;
    const path = undefined;

    mkDir(path, base);

    const sut = readDir(base).find(i => i.includes('a/b/c'));
    expect(sut).toBe(undefined);

  });

  test('existing', () => {
    const base = __dirname;

    fs.mkdirSync([__dirname, 'a'].join('/'));

    const path = 'a/b/c';

    const before = readDir(base).find(i => i.includes('a/b/c'));
    expect(before).toBe(undefined);

    mkDir(path, base);

    const after = readDir(base).filter(i => i.includes('a/b/c')).map(i => i.replace(base, ''));
    expect(after).toMatchSnapshot();

    const comps = path.split('/');

    fs.rmdirSync([base, ...comps].join('/'));
    fs.rmdirSync([base, ...comps.slice(0, comps.length - 1)].join('/'));
    fs.rmdirSync([base, ...comps.slice(0, comps.length - 2)].join('/'));

  });
});
