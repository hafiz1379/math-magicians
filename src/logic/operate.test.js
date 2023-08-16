import operate from './operate';

describe('operate', () => {
  it('should return the sum of two numbers when passed "+" as the operation', () => {
    const result = operate('5', '3', '+');
    expect(result).toEqual('8');
  });
});
