const fs = require('fs');
const buildFilesForFolder = require('../../../src/buildFilesForFolder');
const readDir = require('../../../src/readDir');
const { describe, test } = global;

describe('src/buildFilesForFolder', () => {
  test('file', () => {
    const base = __dirname;
    const input = {
      files: [
        {
          filename: 'test.text',
          string: 'test',
        }
      ]
    };

    buildFilesForFolder(input, base);

    const file = [__dirname, 'test.text'].join('/');

    const sut = fs.readFileSync(file).toString();
    expect(sut).toMatchSnapshot();

    fs.unlinkSync(file);

  });

  test('files and folders', () => {
    const base = __dirname;
    const input = {
      folders: {
        test: {
          files: [
            {
              filename: 'test.text',
              string: 'test',
            }
          ]
        }
      }
    };

    buildFilesForFolder(input, base);

    const folder = [__dirname, 'test'].join('/');
    const file = [folder, 'test.text'].join('/');

    const sut = fs.readFileSync(file).toString();
    expect(sut).toMatchSnapshot();

    fs.unlinkSync(file);
    fs.rmdirSync(folder);

  });

  test('existing', () => {
    const base = __dirname;

    const file = [base, 'test.text'].join('/');

    fs.writeFileSync(file, 'other');

    const input = {
      files: [
        {
          filename: 'test.text',
          string: 'test',
        }
      ]
    };

    buildFilesForFolder(input, base);

    const sut = fs.readFileSync(file).toString();
    expect(sut).toMatchSnapshot();

    fs.unlinkSync(file);

  });
});
