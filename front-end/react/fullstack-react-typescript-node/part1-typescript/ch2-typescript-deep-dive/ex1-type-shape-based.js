// 타입스크립트는 타입 이름이 아닌 타입의 형태에 따라 처리
// tsc ch2-typescript-deep-dive/ex1-type-shape-based.ts 사용
var Person = /** @class */ (function () {
    function Person() {
    }
    return Person;
}());
var yj = {
    name: 'YJ'
};
function sayHi(p) {
    console.log("Hi~ ".concat(p.name));
}
// possible
var yjClone = yj;
sayHi(yjClone);
sayHi(yj);
