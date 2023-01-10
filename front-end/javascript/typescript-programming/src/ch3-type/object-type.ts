namespace Ch3ObjectType {
  function printName(person: { firstName: string; lastName: string }) {
    console.log(person.firstName, person.lastName);
  }

  class Person {
    constructor(public firstName: string, public lastName: string) {
    }
  }

  let p1: { readonly firstName: string; lastName: string } = {
    firstName: 'p1-first',
    lastName: 'p1-last',
  };

  let p2 = new Person('p2-first', 'p2-last');
  printName(p1);
  printName(p2);

  // compile error
  //p1.firstName = 'Change!';
  //p1 = {};
  //p1.anotherName = 'Another';

  let p3: {
    firstName: string;
    lastName: string;
    middleName?: string;
    [key: number]: number;
    //[key: string]: number; <- *Name 키들과 겹쳐서 에러
  } = {
    firstName: 'p3-first',
    lastName: 'p3-last',
    middleName: 'p3-middle',
    1:1,
    2:2,
  };

  p3[5] = 123;
  printName(p3);
}
