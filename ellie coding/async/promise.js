'use strict';

// 1. Producer
// when new Promise is created, the executor runs automatically.
// promise object 생성
const promise = new Promise((resolve, reject) => {
    console.log('doing something...');
    setTimeout(() => {
        // resolve('esop');
        reject(new Error('no network'));
    }, 2000);
});


// 2. Consumers: then, catch, finally
promise
    .then(value => { // resolve 라는 콜백함수를 통해서 전달한 값이 value에 전달되어져서 들어옴
     console.log(value); // 성공했을 때
    })
    .catch(console.log) // 에러(실패) 떴을 때
    .finally(()=> { // 무조건 출력 try, catch랑 똑같
        console.log('finally');
    });


    // 3. Promise chaning
    const fetchNumber = new Promise((resolve, reject) => {
        setTimeout(() => resolve(1), 1000);
    });

    fetchNumber
    .then(num => num * 2)
    .then(num => num * 3)
    .then(num => {
        return new Promise((resolve, reject) => {
           setTimeout(() => resolve(num - 1), 1000);
        });
    })
    .then(num => console.log(num));

    console.clear();

    // 4. Error Handling
    const getHen = () =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve('🐓'), 1000);
    });
    const getEgg = hen =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${hen} => 🥚`), 1000);
    });
    const cook = egg =>
    new Promise((resolve, reject) => {
        setTimeout(() => reject(new Error(`error! ${egg} => 🍳`)), 1000);
    });   

    getHen()
    .then(getEgg)
    .then(cook)
     .catch(er => {
        return '🥗';
    })
    .then(console.log)
    .catch(console.log); //에러 처리

// getHen()
//     .then(hen => getEgg(hen))
//     .then(egg => cook(egg))
//     .then(meal => console.log(meal))
//     .catch(er => console.log(er)); //에러 처리


    