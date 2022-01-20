const fs = require('fs');
const { promisify } = require('util');

const readFile = promisify(fs.readFile);
// eslint-disable-next-line import/no-unresolved
const { render } = require('svg-term');

(async () => {
  const data = String(await readFile('./asciicast.json'));
  const svg = render(data);
  // => <svg>...</svg>
})();
