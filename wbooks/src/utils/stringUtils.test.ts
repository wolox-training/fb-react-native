import { getInitials, keepNumbers } from './stringUtils';

describe('get initials', () => {
  it('a simple string', () => {
    const str = 'String';
    expect(getInitials(str)).toBe('S');
  });
  it('a undefined argument', () => {
    const str = undefined;
    expect(getInitials(str)).toBe(undefined);
  });
  it('a string with two words', () => {
    const str = 'some string';
    expect(getInitials(str)).toBe('s s');
  });
  it('a string whit numbers', () => {
    const str = '0k1n4w4';
    expect(getInitials(str)).toBe('0');
  });
  it('a string with a space in front', () => {
    const str = ' String';
    expect(getInitials(str)).toBe(' S');
  });
  it('a string with a caracter in front', () => {
    const str = '_String';
    expect(getInitials(str)).toBe('_');
  });
});

describe('keep numbers', () => {
  it('a simple number', () => {
    const str = 1234;
    expect(keepNumbers(str)).toBe('1234');
  });
  it('a undefined argument', () => {
    const str = undefined;
    expect(keepNumbers(str)).toBe('');
  });
  it('a string whit numbers', () => {
    const str = '0k1n4w4';
    expect(keepNumbers(str)).toBe('0144');
  });
  it('a string whit numbers and spaces', () => {
    const str = '0k1n4w4 4ir90rt';
    expect(keepNumbers(str)).toBe('0144490');
  });
});
