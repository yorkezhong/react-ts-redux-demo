var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var person = /** @class */ (function () {
    function person(name, age, sex) {
        this.name = name;
        this.age = age;
        this.sex = sex;
    }
    person.prototype.say = function (name, age, sex) {
        console.log(name, age, sex);
    };
    person.prototype["do"] = function () {
        return "play game";
    };
    return person;
}());
var man = /** @class */ (function (_super) {
    __extends(man, _super);
    function man(name, age, sex) {
        var _this = _super.call(this, name, age, sex) || this;
        _this.myname = "xiaolan";
        return _this;
    }
    man.prototype.sayhello = function (name, age, sex) {
        console.log(this.myname, name, age, sex);
    };
    return man;
}(person));
var a = new man("wuuwb", "15", "787");
a.sayhello("wuuwb", "15", "787");
