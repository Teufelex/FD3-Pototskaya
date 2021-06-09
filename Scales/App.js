var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Scales = /** @class */ (function () {
    function Scales() {
        this.scale = 0;
        this.nameList = [];
    }
    Scales.prototype.add = function (el) {
        this.nameList.push(el.getName());
        this.scale += el.getScale();
    };
    Scales.prototype.getSumScale = function () {
        return this.scale;
    };
    Scales.prototype.getNameList = function () {
        return this.nameList;
    };
    return Scales;
}());
var Product = /** @class */ (function () {
    function Product() {
        this.scale = 0;
        this.name = "";
    }
    Product.prototype.getScale = function () {
        return this.scale;
    };
    Product.prototype.getName = function () {
        return this.name;
    };
    return Product;
}());
var Tomato = /** @class */ (function (_super) {
    __extends(Tomato, _super);
    function Tomato(_name, _scale) {
        var _this = _super.call(this) || this;
        _this.name = _name;
        _this.scale = _scale;
        return _this;
    }
    return Tomato;
}(Product));
var Apple = /** @class */ (function (_super) {
    __extends(Apple, _super);
    function Apple(_name, _scale) {
        var _this = _super.call(this) || this;
        _this.name = _name;
        _this.scale = _scale;
        return _this;
    }
    return Apple;
}(Product));
var apple_1 = new Apple("Green Apple", 250);
var apple_2 = new Apple("Red Apple", 300);
var apple_3 = new Apple("Mutsu", 270);
var apple_4 = new Apple("Pink Lady", 350);
var tomato_1 = new Tomato("Cherry", 150);
var tomato_2 = new Tomato("Red tomato", 270);
var tomato_3 = new Tomato("Yellow tomato", 310);
var scale = new Scales();
scale.add(apple_1);
scale.add(apple_2);
scale.add(apple_3);
scale.add(apple_4);
scale.add(tomato_1);
scale.add(tomato_2);
scale.add(tomato_3);
console.log(scale.getNameList());
console.log(scale.getSumScale() + "g");
//# sourceMappingURL=App.js.map