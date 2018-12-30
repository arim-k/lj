// 프로토타입
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

const car1 = new Car();
const car2 = new Car();
car1.shift === Car.prototype.shift;

// 정적 메서드

// 상속
class Vehicle {
  constructor() {
    this.passengers = [];
    console.log("Vehicle created");
  }
  addPassenger(p) {
    this.passengers.push(p);
  }
}

class Car extends Vehicle {
  // extends 키워드는 Car를 Vehicle에 서브클래스로 만든다
  constructor() {
    super(); // 슈퍼클래스의 생성자를 호출, 서브클래스에서는 이 함수를 반드시 호출
    console.log("Car created");
  }
  deployAirbags() {
    console.log("BWOOSH");
  }
}

// 객체 프로퍼티 나열
class Super {
  constructor() {
    this.name = "Super";
    this.isSuper = true;
  }
}

Super.prototype.sneaky = "not recommended!";

class Sub extends Super {
  constructor() {
    super();
    this.name = "Sub";
    this.isSub = true;
  }
}
const obj = new Sub();

for (let p in obj) {
  console.log(`${p}: ${obj[p]}` + (obj.hasOwnProperty(p) ? "" : "(inherited)"));
}
