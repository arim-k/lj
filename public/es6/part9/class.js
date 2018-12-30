// for in 객체 프로퍼티 나열
const SYM = Symbol();
const o = { a: 1, b: 2, c: 3, [SYM]: 4 };

for (let prop in o) {
  if (!o.hasOwnProperty(prop)) continue;
  console.log(`${prop}: ${o[prop]}`);
}

// Object.keys 객체에서 나열 가능한 문자열 프로퍼티를 배열로 반환
const SYM = Symbol();
const o = { a: 1, b: 2, c: 3, [SYM]: 4 };
Object.keys(o).forEach(prop => console.log(`${prop}:${o[prop]}`));

const o = { apple: 1, xochitl: 2, balloon: 3, guitar: 4, xylophone: 5 };
Object.keys(o)
  .filter(prop => prop.match(/^x/))
  .forEach(prop => console.log(`${prop}:${o[prop]}`));

// 클래스 - 이해 필요
class Car {
  constructor(make, model) {
    this.make = make;
    this.model = model;
    this._userGears = ["P", "N", "R", "D"];
    this._userGear = this._userGears[0];
  }
  get userGear() {
    return this._userGear;
  }
  set userGear(value) {
    if (this._userGears.indexOf(gear) < 0)
      throw new Error(`Invalid gear: ${gear}`);
    this._userGear = value;
  }
  shift(gear) {
    this.userGear = gear;
  }
}
// 인스턴스 생성
const car1 = new Car("Tesla", "Model S");
const car2 = new Car("Mazda", "3i");
// 객체가 클래스의 인스턴스인지 확인
car1 instanceof Car;
car2 instanceof Array;

car1.shift("D");
car2.shift("R");

car1.userGear;
car2.userGear;

// 클래스는 함수
// ES 5
function Car(make, model) {
  this.make = make;
  this.model = model;
  this._userGears = ["P", "N", "R", "D"];
  this._userGear = this.userGears[0];
}
// ES 6
class Es6Car {}
function Es5Car {}

