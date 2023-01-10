import { type } from 'os';

namespace Ch3ArrayType {
  let a = [1, 2, 3];
  let b = ['a', 'b'];
  console.log('a', a);
  console.log('b', b);

  // compile error
  //let c: string[] = a;
  let c: string[] = b;
  console.log('c', c);

  let d = [1, 'a'];
  d.push(123);
  d.push('abc');
  console.log('d', d);

  // compile error
  //let e: Array<number> = d;
  type Element = string | number;
  let e: Array<Element> = d;
  console.log('e', e);

  let f = ['abc'];
  f.push('test');
  // compile error
  //f.push(123);

  let empty = [];
  empty.push(123);
  empty.push('abc');
  empty.push([]);
  console.log('empty', empty);

  const mapResult = empty.map((val => {
    //return val*2;
    if (typeof val === 'number') {
      return val * val;
    } else if (typeof val === 'string') {
      return val.toUpperCase();
    } else {
      // array 타입 자동 추론
      return [...val, 1,2,3,4];
    }
  }));
  console.log('result', mapResult);
}