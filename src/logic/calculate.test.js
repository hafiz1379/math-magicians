import calculate from './calculate';

describe('calculate', () => {
  it('should return an object with total, next, and operation properties when passed an AC buttonName', () => {
    const result = calculate({ total: '5', next: '3', operation: '+' }, 'AC');
    expect(result).toEqual({ total: null, next: null, operation: null });
  });
});
