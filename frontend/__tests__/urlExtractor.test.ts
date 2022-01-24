const urlExtractor = require('../src/utils/urlExtractor');

test('Test if urlExtractor returns the correct content endpoint', () => {
  const expectedEndpoint = 'content/pages/?type=resume.footer&fields=_,footer_text';
  const endpoint = urlExtractor('content', 'footer', ['footer_text']);
  expect(expectedEndpoint).toEqual(endpoint)
});

test('Test if urlExtractor returns the correct mlresults endpoint', () => {
  const expectedEndpoint = 'mlresults';
  const endpoint = urlExtractor('mlresults');
  expect(expectedEndpoint).toEqual(endpoint)
});

export {}