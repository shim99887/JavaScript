// 1. async
async function fetchUser(){
        return 'esop';
}

const user = fetchUser();
user.then(console.log);
console.log(user);

// 2. await

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple() {
    await delay(2000);
    return '🍎';
}

async function getBanana() { // 이게 더 쉽게 이해
    await delay(1000);
    return '🍌';
}

function getBanana() { // 위에꺼랑 동일한데 Promise를 쓰는 함수
    return delay(1000)
    .then(() => '🍌');
}

function pickFruits() { // 콜백 지옥
    return getApple().then(apple => {
        return getBanana().then(banana => `${apple} + ${banana}`);
    })
}

async function pickFruits() { // 위에꺼랑 동일한데 async랑 await 이용하기
//    const applePromise = getApple();
//    const bananaPromise = getBanana();
   const apple = await getApple();
   const banana = await getBanana();
   return `${apple} + ${banana}`;
}

pickFruits().then(console.log);

// 3. useful Promise APIs
function pickAllFruits() {
    return Promise.all([getApple(), getBanana()])
    .then(fruits => fruits.join(' + ')
    );
}

pickAllFruits().then(console.log);

function pickOnlyOne() {
    return Promise.race([getApple(), getBanana()]);
}

pickOnlyOne().then(console.log);