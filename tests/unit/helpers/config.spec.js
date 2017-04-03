import { expect } from 'chai';
import config, { mergeConfig } from '../../../app/helpers/config';

describe('Helpers: Configuration', () => {
  it('should reads a property into the config object', () => {
    const currentConfig = mergeConfig({ foo: 1 });
    expect(currentConfig.foo).to.eql(1);
  });

  it('should returns a value for a string key', () => {
    mergeConfig({ bar: 2 });
    expect(config('bar')).to.eql(2);
  });

  it('should throws an error when called with a non-existant key', () => {
    expect(() => config('non-existant')).to.throw();
  });
});
