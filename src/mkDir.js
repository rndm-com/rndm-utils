const fs = require('fs');

const mkDir = (path, base) => {
  if (!path) return;
  const comps = path.split('/').filter(Boolean);
  const first = comps.shift();
  const dir = [base, first].join('/');
  if (!fs.existsSync(dir)) fs.mkdirSync(dir);
  if (comps.length > 0) mkDir(comps.join('/'), dir);
};

module.exports = mkDir;
