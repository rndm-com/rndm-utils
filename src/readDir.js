const fs = require('fs');
const path = require('path');

const readDir = dir => (
  dir &&
  fs.statSync(dir).isDirectory()
    ? Array.prototype.concat(...fs.readdirSync(dir).map(f => readDir(path.join(dir, f))))
    : dir
);

module.exports = readDir;
