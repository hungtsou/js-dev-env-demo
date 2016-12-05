import {expect} from 'chai';
import jsdom from 'jsdom';
import fs from 'fs';

describe('Our first test', () => {
  it('should pass', () => {
    expect(true).to.equal(true);
  })
});


describe(' DOM test', () => {
  it('shuld say hello', (done) => {
    const index = fs.readFileSync('./src/index.html', 'utf-8');

    jsdom.env(index, function(err, window) {
      const h1 = window.document.getElementsByTagName('h1')[0];

      expect(h1.innerHTML).to.equal('Hola universo');

      done();

      window.close();

    });
  })
})
