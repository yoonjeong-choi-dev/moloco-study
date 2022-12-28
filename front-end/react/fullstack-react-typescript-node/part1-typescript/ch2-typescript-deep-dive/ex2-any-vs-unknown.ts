let anyVal: any = 1;
anyVal = 'string value';
anyVal = new Array();
anyVal.push(123);

// not compile error -> runtime err
//anyVal.someStrangeMethod();

let unknownVal: unknown = 1;
unknownVal = 'string value';
unknownVal = new Array();

// must check the type to access its property
if(unknownVal instanceof Array) {
  unknownVal.push(1,2,34);
}

console.log(anyVal);