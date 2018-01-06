var MyClass = /** @class */ (function () {
    function MyClass() {
    }
    MyClass.prototype.hi = function () {
        console.log('hi');
    };
    MyClass.prototype.bye = function () {
        console.log('bye');
    };
    return MyClass;
}());
var me = new MyClass();
me.hi();
