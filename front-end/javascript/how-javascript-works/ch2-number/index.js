import { printDeconstructionOfNumber } from './utils.js';

const t = 2**53-1;
console.log(t, Number.isFinite(t))

printDeconstructionOfNumber('Number.MAX_SAFE_INTEGER', Number.MAX_SAFE_INTEGER);
printDeconstructionOfNumber('Number.MIN_SAFE_INTEGER', Number.MIN_SAFE_INTEGER);

printDeconstructionOfNumber('Number.MAX_VALUE', Number.MAX_VALUE);
printDeconstructionOfNumber('Number.MIN_VALUE', Number.MIN_VALUE);

printDeconstructionOfNumber('1', 1);
printDeconstructionOfNumber('1234', 1234);
printDeconstructionOfNumber('1024', 1024);

printDeconstructionOfNumber('0.1', 0.1);
printDeconstructionOfNumber('0.3', 0.3);