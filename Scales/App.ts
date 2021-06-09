class Scales {

  scale:number;

  nameList:Array<string>; 

  constructor() {
    this.scale = 0;
    this.nameList = [];
  }

  add(el:Product):void {
    this.nameList.push(el.getName());
    this.scale += el.getScale();
  }

  getSumScale():number {
    return this.scale;
  }

  getNameList():Array<string> {
    return this.nameList;
  }
}

class Product {

  scale:number;

  name:string;

  constructor() {
    this.scale = 0;
    this.name = "";
  }

  getScale():number {
    return this.scale;
  }

  getName():string {
    return this.name;
  }
}

class Tomato extends Product {

  constructor(_name:string, _scale:number){
    super();
    this.name = _name;
    this.scale = _scale;
  }

}

class Apple extends Product {

  constructor(_name:string, _scale:number){
    super();
    this.name = _name;
    this.scale = _scale;
  }

}

let apple_1:Apple = new Apple("Green Apple", 250);
let apple_2:Apple = new Apple("Red Apple", 300);
let apple_3:Apple = new Apple("Mutsu", 270);
let apple_4:Apple = new Apple("Pink Lady", 350);

let tomato_1:Tomato = new Tomato("Cherry", 150);
let tomato_2:Tomato = new Tomato("Red tomato", 270);
let tomato_3:Tomato = new Tomato("Yellow tomato", 310);

let scale:Scales = new Scales();

scale.add(apple_1);
scale.add(apple_2);
scale.add(apple_3);
scale.add(apple_4);
scale.add(tomato_1);
scale.add(tomato_2);
scale.add(tomato_3);

console.log(scale.getNameList());
console.log(scale.getSumScale() + "g");
