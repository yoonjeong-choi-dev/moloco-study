// 타입스크립트는 타입 이름이 아닌 타입의 형태에 따라 처리
// tsc ch2-typescript-deep-dive/ex1-type-shape-based.ts 사용
class Person {
  name: string;
}

function example1() {
  const yj: {name: string;} = {
    name: ' Yoonjeong',
  };

  function sayHi(p: Person) {
    console.log(`Hi~ ${p.name}`);
  }

  // possible
  const yjClone: Person = yj;
  sayHi(yjClone);
  sayHi(yj);
}

example1();

