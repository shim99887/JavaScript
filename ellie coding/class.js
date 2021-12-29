'use strict';

// class: template
// Object: instance of a class

// 1.
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
  
    speak() {
        console.log(`${this.name}: hello!`);
    }
}

const esop = new Person('esop', 25);
console.log(esop.name);
console.log(esop.age);
esop.speak();

// 2. Getter and setters
// 사용자가 -1 이라고 해도 Setter에서 0으로 만들어 준다.
// getter와 setter를 이용하기 때문에 age = _age 가 같고 호출할 수 있다.

class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    get age() { // 값을 리턴
        return this._age;
    }

    set age(value) { // 값을 설정 
        this._age = value < 0 ? 0 : value;
    }
}

const user1 = new User('Steve','Jobs', -2)
console.log(user1.age);

// 3. Fields (public, private)

class Experiment {
    publicField = 2;
    #privateField = 0;
}

const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField);

// 4. 상속
class Shape {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw() {
        console.log(`drawing ${this.color} color of`);
    }

    getArea() {
        return this.width * this.height;
    }
}

class Rectangle extends Shape {

}

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
console.log(rectangle.getArea());


class Triangle extends Shape {

    draw() {
        super.draw();
        console.log('▲');
    }

    getArea() {   // 오버라이딩
        return (this.width * this.height) / 2;
    }

}

const triangle = new Triangle(20, 20, 'red');
triangle.draw();
console.log(triangle.getArea());






