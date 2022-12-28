// type alias for function signature
type Logger = (msg: string) => void;

function addNumber(num1: number, num2: number, logger: Logger): number {
  logger(`addNumber(${num1}, ${num2}) is called!`);
  return num1 + num2;
}

const logger: Logger = (msg) => console.log(msg);

console.log(addNumber(10, 20, logger));