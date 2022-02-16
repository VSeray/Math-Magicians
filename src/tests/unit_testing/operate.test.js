import operate from '../../logic/operate';

describe('testing operations', () => {
  const numberOne = '5';
  const numberTwo = '3';

  test('testing addition', () => {
    const result = operate(numberOne, numberTwo, '+');
    expect(result).toBe('8');
  });

  test('testing subtraction', () => {
    const result = operate(numberOne, numberTwo, '-');
    expect(result).toBe('2');
  });

  test('testing division', () => {
    const result = operate(numberOne, numberTwo, '÷');
    expect(result).toBe('1.66666666666666666667');
  });

  test('testing multiplication', () => {
    const result = operate(numberOne, numberTwo, 'x');
    expect(result).toBe('15');
  });

  test('testing Mod', () => {
    const result = operate(numberOne, numberTwo, '%');
    expect(result).toBe('2');
  });
});
