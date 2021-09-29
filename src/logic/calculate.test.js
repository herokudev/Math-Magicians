import calculate from './calculate';

describe('calculate" function', () => {
  const defaultCalc = {
    total: null,
    next: null,
    operation: null,
  };
  const withOperands = (operation) => ({
    total: '100',
    next: '10',
    operation,
  });
  const operationResult = (total) => ({
    total,
    next: null,
    operation: null,
  });
  const afterOperation = (operation) => ({
    total: '100',
    next: null,
    operation,
  });
  const firstArg = (operation) => ({
    total: null,
    next: '10',
    operation,
  });
  describe('for buttonName being `AC`', () => {
    it('returns default object for default obj argument', () => {
      expect(calculate(defaultCalc, 'AC')).toEqual(defaultCalc);
    });
    it('returns default object for argument with values', () => {
      expect(calculate(withOperands('+'), 'AC')).toEqual(defaultCalc);
    });
  });
  describe('for buttonName being a digit', () => {
    it('writes on next when starting from default state', () => {
      expect(calculate(defaultCalc, '3')).toEqual({ next: '3', total: null });
    });
    it('writes to current number in next after an operation button', () => {
      const startingState = firstArg(null);
      expect(calculate(startingState, '0')).toEqual({ next: '100', total: null });
    });
    it('appends to current number in next when writing a number', () => {
      const startingState = afterOperation('+');
      const nextState = { ...startingState, next: '1' };
      expect(nextState).toEqual(calculate(startingState, '1'));
    });
  });
  describe('for buttonName being `.`', () => {
    it('inserts a decimal period on next when writing a number', () => {
      const startingState = firstArg(null);
      const nextState = { ...startingState, next: `${startingState.next}.` };
      expect(nextState).toEqual(calculate(startingState, '.'));
    });
    it('next = 0. when starting from default state', () => {
      const startingState = defaultCalc;
      expect(calculate(startingState, '.')).toEqual({ total: '0.' });
    });
    it('decimal point gets ignored when there\'s already a decimal point',
      () => {
        const startingState = {
          total: null,
          next: '18.5',
          operation: null,
        };
        const nextState = startingState;
        expect(calculate(startingState, '.')).toEqual(nextState);
      });
  });
  describe('for buttonName being `+/-`', () => {
    it('does nothing for default state', () => {
      expect(calculate(defaultCalc, '+/-')).toEqual({});
    });
    it("total => - total when there's a total and no next", () => {
      const startingState = afterOperation(null);
      const nextState = { ...startingState, total: `-${startingState.total}` };
      expect(calculate(startingState, '+/-')).toEqual(nextState);
    });
    it("next => - next when there's a next", () => {
      const startingState = withOperands(null);
      const nextState = { ...startingState, next: `-${startingState.next}` };
      expect(calculate(startingState, '+/-')).toEqual(nextState);
    });
  });
  describe('for buttonName being =', () => {
    // both operands present: dispatches operate correctly
    describe('dispatches operate correctly when both operands are present', () => {
      it('dispatches addition', () => {
        const startingState = withOperands('+');
        const nextState = operationResult('110');
        expect(calculate(startingState, '=')).toEqual(nextState);
      });
      it('dispatches multiplication', () => {
        const startingState = withOperands('x');
        const nextState = operationResult('1000');
        expect(calculate(startingState, '=')).toEqual(nextState);
      });
      it('dispatches subtraction', () => {
        const startingState = withOperands('-');
        const nextState = operationResult('90');
        expect(calculate(startingState, '=')).toEqual(nextState);
      });
      it('dispatches division', () => {
        const startingState = withOperands('÷');
        const nextState = operationResult('10');
        expect(calculate(startingState, '=')).toEqual(nextState);
      });
      it('dispatches modulo', () => {
        const startingState = withOperands('%');
        const nextState = operationResult('0');
        expect(calculate(startingState, '=')).toEqual(nextState);
      });
    });
    describe('when either operand is missing', () => {
      it('ignores equals when next is missing', () => {
        expect(calculate(afterOperation('+'), '=')).toEqual({});
      });
    });
  });
});
