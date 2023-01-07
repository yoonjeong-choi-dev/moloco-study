let a = 1 + 2;
let b = a + 3;
let c = {
  apple: a,
  banana: b,
};

console.log(`a: ${a}, b: ${b}`);
console.log(`c: ${JSON.stringify(c)}`);

let d = c.apple + 1;
console.log(`d: ${d}`);

// compile error
//c.banana += '1';