var Speaker = /** @class */ (function () {
    function Speaker(name, age) {
        if (age === void 0) { age = null; }
        this.name = name;
        this.age = age;
    }
    Speaker.prototype.says = function (msg) {
        console.log("".concat(this.name, " says '").concat(msg, "'"));
    };
    Object.defineProperty(Speaker.prototype, "Age", {
        get: function () {
            if (this.age === null) {
                throw Error('The speaker has no age info');
            }
            return this.age;
        },
        set: function (val) {
            if (val <= 0) {
                throw Error("age must be positive but ".concat(val));
            }
            this.age = val;
        },
        enumerable: false,
        configurable: true
    });
    return Speaker;
}());
var yj = new Speaker('Yoonjeong', 30);
yj.says('Hi~');
console.log(yj.Age);
