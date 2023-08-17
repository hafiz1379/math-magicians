import calculate from './calculate';

describe('calculate', () => {
  it('should return an object with total, next, and operation properties when passed an AC buttonName', () => {
    const result = calculate({ total: '5', next: '3', operation: '+' }, 'AC');
    expect(result).toEqual({ total: null, next: null, operation: null });
  });

  it('should update next with the buttonName when it is a number', () => {
    const result = calculate({ total: '5', next: '3', operation: '+' }, '8');
    expect(result).toEqual({ total: '5', next: '38', operation: '+' });
  });

  it('should handle leading zero when buttonName is "0"', () => {
    const result = calculate({ total: '5', next: '0', operation: '+' }, '0');
    expect(result).toEqual({});
  });

  it('should add a decimal point to next when buttonName is "."', () => {
    const result = calculate({ total: '5', next: '3', operation: '+' }, '.');
    expect(result).toEqual({ total: '5', next: '3.', operation: '+' });
  });

  // Add more tests for decimal point scenarios

  it('should perform the operation when "=" is pressed', () => {
    const result = calculate({ total: '5', next: '3', operation: '+' }, '=');
    expect(result).toEqual({ total: '8', next: null, operation: null });
  });

  it('should change the sign of next when "+/-" is pressed', () => {
    const result = calculate({ total: null, next: '3', operation: null }, '+/-');
    expect(result).toEqual({ total: null, next: '-3', operation: null });
  });

  // Add more tests for various "+/-" scenarios

  it('should set the operation when no operation is present', () => {
    const result = calculate({ total: '5', next: null, operation: null }, '+');
    expect(result).toEqual({ total: '5', next: null, operation: '+' });
  });

  // Add more tests for operation scenarios

  it('should update the operation when an operation already exists', () => {
    const result = calculate({ total: '5', next: '3', operation: '+' }, '-');
    expect(result).toEqual({ total: '8', next: null, operation: '-' });
  });

  // Add more tests for various operation scenarios
});
