import calculate from '../../logic/calculate';

describe('testing calculate function', () => {
  const obj = {
    total: null,
    next: null,
    operation: null,
  };
  test('adding a number when the next is null', () => {
    const result = calculate(obj, '5');
    expect(result.next).toBe('5');
  });

  test('adding a number when the next is true', () => {
    let result = calculate(obj, '5');
    result = calculate(result, '6');
    expect(result.next).toBe('56');
  });

  test('adding an operation', () => {
    const result = calculate(obj, '+');
    expect(result.operation).toBe('+');
  });

  test('making an operation', () => {
    let result = calculate(obj, '5');
    result = calculate(result, '+');
    result = calculate(result, '7');
    result = calculate(result, '=');
    expect(result.total).toBe('12');
  });

  test('testing AC resetting', () => {
    let result = calculate(obj, '4');
    result = calculate(result, 'AC');
    expect(result).toStrictEqual(obj);
  });
});
