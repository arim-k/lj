// find, findIndex에 전달하는 함수의 this도 수정 가능, 함수가 객채의 메서드인 것처럼 호출
class Person {
  construct(name) {
    this.name = name;
    this.id = Person.nextId++;
  }
}

Person.nextId = 0;
const jamie = new Person("Jamie"),
  juilet = new Person("Juilet"),
  peter = new Person("Peter"),
  jay = new Person("Jay");
const arr = [jamie, juilet, peter, jay];

// option 1 : ID 직접 비교
arr.find(p => p.id === juilet.id);

// option 2 : 'this' 매개변수 이용
arr.find(function(p) {
  return p.id === this.id;
}, juilet);

// some, every 나중에
