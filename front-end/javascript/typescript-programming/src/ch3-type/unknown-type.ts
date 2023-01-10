import { displayVariable } from './utils';

namespace Ch3UnknownType {
  let a: unknown = 123;
  let b = a === 123;
  displayVariable('a', a);
  displayVariable('b', b);

  // compile error
  //let c = a + 10;

  // solution
  if (typeof a === 'number') {
    let d = a + 10;
    displayVariable('d', d);
  }
}
