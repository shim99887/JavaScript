```
❌ Bad Code 💩

function getResult(score) {
    let result;
    if (score > 5) {
        result = '👍';
    } else {
        result = '👎';
    }
    return result;
}
```
```
🌈 Good Code 🌟

function getResult(score) {
    return score > 5 ? '👍' : '👎';
}
```   
---
```
❌ Bad Code 💩

function printMessage(text) {
    let message = text;
    if (text == null || text == undefined) {
        message = 'Nothing to display 😜';
    }
    console.log(message);
}
```
```
🌈 Good Code 🌟// text가 있다면 text를 그대로 쓰고, 없으면 nothing to display를 씀
 
function printMessage(text) {
    const message = text ?? 'Nothing to display 😜'; 
    console.log(message);
}

printMessage('Hello');
printMessage(null);
printMessage(undefined);
```
---
```
const person = {
    name: 'Julia',
    age: 20,
    phone: '0107777777',
};

❌ Bad Code 💩

function displayPerson(person) {
    displayAvatar(person.name);
    displayName(person.name);
    displayProfile(person.name, person.age);
}
```
```
🌈 Good Code 🌟

function displayPerson(person) {
    const {name, age, phone} = person;
    displayAvatar(name);
    displayName(name);
    displayProfile(name, age);
}
```
```
❌ Bad Code 💩
 
function displayJobTitle(person) {
    if (person.job && person.job.title) {
        console.log(person.job.title);
    }
}
```
```
🌈 Good Code 🌟
 
function displayJobTitle(person) {
    const title = person.job?.title ?? 'No Job Yet 🔥';
    console.log(title);
}
```
---
```
❌ Bad Code 💩
 
console.log('Hello ' + person.name + ', Your current score is: ' + person.score);
```
```
🌈 Good Code 🌟
 
function greetings(person) {
    const {name, score} = person;
    console.log(`Hello ${name}, Your current score is: ${score}`);
}
```
---
```
const items = [1, 2, 3, 4, 5, 6]; 짝수만 찾아서 그 숫자들을 4로 곱해서 합을 구하시오

❌ Bad Code 💩
function getAllEvens(items) {
    return items.filter(num => num % 2 === 0);
}

function multiplyByFour(items) {
    return items.map((num) => num * 4);
}

function sumArray(items) {
    items.reduce((a, b) => a + b, 0);
}
```
```
 🌈 Good Code 🌟

const evens = items.filter((num) => num % 2 === 0);
const multiple = envens.map((num) => num * 4); // 요소
const sum = multiple.reduce((a, b) => a + b, 0); // 누적값, 현재값 , 초깃값
console.log(sum);

 🌈 Good Code 🌟

const result = items
.filter((num) => num % 2 === 0)
.map((num) => num * 4)
.reduce((a, b) => a + b, 0);
console.log(result);
```
---
 ```   
❌ Bad Code 💩 (Promise => Async/await)
 
function displayUser() {
    fetchUser()
        .then((user) => {
            fetchProfile(user)
                .then((profile) => {
                    updateUI(user, profile);
        });
    });
}
```
```
🌈 Good Code 🌟

async function displayUser() {
    const user = await fetchUser();
    const profile = await fetchProfile(user);
    updateUI(user, profile);
}
```
---
```
const array = ['a', 'b', 'c', 'd','a'];
console.log(array);

🌈 Good Code 🌟
console.log([...new Set(array)]);
```
