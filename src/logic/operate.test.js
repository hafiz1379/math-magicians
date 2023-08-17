import operate from './operate';

describe('operate', () => {
  it('should return the sum of two numbers when passed "+" as the operation', () => {
    const result = operate('5', '3', '+');
    expect(result).toEqual('8');
  });

  it('should return the difference of two numbers when passed "-" as the operation', () => {
    const result = operate('5', '3', '-');
    expect(result).toEqual('2');
  });

  it('should return the product of two numbers when passed "x" as the operation', () => {
    const result = operate('5', '3', 'x');
    expect(result).toEqual('15');
  });

  it('should return the division of two numbers when passed "÷" as the operation', () => {
    const result = operate('6', '3', '÷');
    expect(result).toEqual('2');
  });

  it('should return an error message when dividing by zero', () => {
    const result = operate('5', '0', '÷');
    expect(result).toEqual("Can't divide by 0.");
  });

  it('should return the remainder when passed "%" as the operation', () => {
    const result = operate('7', '3', '%');
    expect(result).toEqual('1');
  });

  it('should return an error message when finding modulo with division by zero', () => {
    const result = operate('5', '0', '%');
    expect(result).toEqual("Can't find modulo as can't divide by 0.");
  });

  it('should throw an error for an unknown operation', () => {
    expect(() => {
      operate('5', '3', '^');
    }).toThrow("Unknown operation '^'");
  });
});
