import { displayVariable } from './utils';

namespace Ch3TypeLiteral {
  function booleanType() {
    console.log('Boolean Type');

    let a = true;
    const b = true;
    const c = a;  // true literal type
    let d: boolean = a;
    let e: true = a;
    displayVariable('a', a);
    displayVariable('b', b);
    displayVariable('c', c);
    displayVariable('d', d);
    displayVariable('e', e);

    // compile error
    //let f: false = a;
    a = false;
    let f: false = a;
    displayVariable('f', f);

    // compile error
    //f = true;
  }

  function numberType() {
    console.log('Number Type');

    let a = 71.66;
    const b = 71.66;

    // compile error
    //let c: 71.66 = a;
    let c: 71.66 = b;

    // compile error
    //const d: 21 = 23;
    const d: 21 = 21;

    displayVariable('a', a);
    displayVariable('b', b);
    displayVariable('c', c);
    displayVariable('d', d);
  }

  function stringType() {
    console.log('String Type');

    let a = 'Test';
    const b = 'Test';

    // compile error
    //let c:'Test' = a;
    let c: 'Test' = b;

    // compile error
    //let d:'literal' = 'Literal';
    let d:'literal' = 'literal';

    // compile error
    //d = 'change';
    d = 'literal';

    displayVariable('a', a);
    displayVariable('b', b);
    displayVariable('c', c);
    displayVariable('d', d);
  }

  booleanType();
  numberType();
  stringType();
}