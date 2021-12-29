// 1. Literals and properties
function print(person) {
    console.log(person.name);
    console.log(person.age);
}
const esop = {name: 'esop', age: 25};

print(esop);

esop.hasJob = true;
console.log(esop.hasJob);

// 2. Computed properties
console.log(esop.name); //코딩해서 출력할땐 이거
console.log(esop['name']);  //key는 항상 string 타입으로 지정해서 받아와야한다. 어떤 키가 필요한지 모를때 이 방법을 씀

const person1 = new Person('sop', 25);
console.log(person1);

function Person(name, age) {
    this.name = name;
    this.age = age;
    }

    console.log('name' in esop); //in : 해당하는 key가 object 안에 있는지
    console.log('age' in esop);
    console.log('dd' in esop);
    console.log(esop.age);

// 3. for..in vs for..of
    console.clear();
    for (key in esop) {
        console.log(key);
    }

    const array = [ 1, 2, 4, 5]; //배열
    for (value of array) {
        console.log(value); 
    }

// 4. cloning
const user = {name:'esop', age:'25'};
const user2 = user;
user2.name = 'coder';
console.log(user);