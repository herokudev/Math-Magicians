import operate from './operate';

describe('"operate" function', () => {
  describe('for addition cases:', () => {
    it('adds two positive given integers: 123 + 456 = 579', () => {
      expect(operate('123', '456', '+')).toBe('579');
    });
    it('adds one positive and one negative integers: 456 - 123 = 333', () => {
      expect(operate('-123', '456', '+')).toBe('333');
    });
    it('adds one positive and one negative floating numbers: 456.789 - 123.023 = 333.766', () => {
      expect(operate('-123.023', '456.789', '+')).toBe('333.766');
    });
  });
  describe('for subtraction cases:', () => {
    it('subtracts two positive given integers: 456 - 123 = 333', () => {
      expect(operate('456', '123', '-')).toBe('333');
    });
    it('subtracts one positive and one negative integers: 456 - 123 = 579', () => {
      expect(operate('456', '-123', '-')).toBe('579');
    });
    it('subtracts one positive and one negative floating numbers: 123.023 - 456.789 = -333.766', () => {
      expect(operate('123.023', '456.789', '-')).toBe('-333.766');
    });
  });
  describe('for multiplication cases:', () => {
    it('multiplies two positive given integers: 200 x 150 = 30,000', () => {
      expect(operate('200', '150', 'x')).toBe('30000');
    });
    it('multiplies one positive and one negative integers: 200 x (-150) = -30,000', () => {
      expect(operate('200', '-150', 'x')).toBe('-30000');
    });
    it('multiplies one positive and one negative floating numbers: (200.123) x (-150.456) = -30109.706088', () => {
      expect(operate('200.123', '-150.456', 'x')).toBe('-30109.706088');
    });
  });

  describe('for remainder cases:', () => {
    it('returns the correct remainder of two positive given integers: 210 % 50 = 10', () => {
      expect(operate('210', '50', '%')).toBe('10');
    });
    it('returns the correct remainder of one positive and one negative given floating numbers: 210.5 % (-50.5) = 8.5', () => {
      expect(operate('210.5', '-50.5', '%')).toBe('8.5');
    });
  });
});
