export function deconstruct(number) {
  if (typeof number !== 'number' || Number.isNaN(number)) return null;

  // number = sign * coefficient * (2**exponent)
  // sign : 1 bit
  // coefficient : 53 bits
  // exponent : 11 bits
  let sign = 1;
  let coefficient = number;
  let exponent = 0;

  // remove sign from coefficient
  if (coefficient < 0) {
    sign = -1;
    coefficient = -coefficient;
  }

  // calculate exponent part
  if (Number.isFinite(number) && number !== 0) {
    // initial exponent = -1128
    // : Number.MIN_VALUE(2**-1074)의 지수 값(-1074)에서 유효 숫자(53) 및 보너스 비트(1) 개수를 뺀 값
    // => -1074 - 53 - 1 = -1128
    exponent = -1128;

    // add + 1 to exponent while reduction has nonzero bits
    // => reduction(==number) 의 이진법 표현 시의 비트들 개수만큼 지수(exponent)에 더하는 작업
    let reduction = coefficient;
    while (reduction !== 0) {
      exponent += 1;
      reduction /= 2;
    }

    // calculate coefficient part by reducing exponent to zero
    reduction = exponent;
    while (reduction > 0) {
      coefficient /= 2;
      reduction -= 1;
    }
    while (reduction < 0) {
      coefficient *= 2;
      reduction += 1;
    }
  }

  return {
    sign,
    coefficient,
    exponent,
    number
  };
}

export function printDeconstructionOfNumber(title, number) {
  const deconstruction = deconstruct(number);
  if (!deconstruction) return;
  const {sign, coefficient, exponent, number: origin} = deconstruction;

  console.log(`Example : ${title}`)
  console.log(`result : ${JSON.stringify(deconstruction)}`);
  console.log(`number : ${origin}`)
  console.log(`actual number : ${sign * coefficient * (2 ** exponent)} = ${sign} * ${coefficient} * (2**${exponent})`);
  console.log('');
}