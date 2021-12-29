'use strict';

class UserStorage {
    loginUser(id, password) {  // 함수
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (
                    (id === 'esop' && password ==='dream') ||
                    (id === 'esop2' && password ==='dream2') 
                ) {
                    resolve(id); //onSuccess 콜백을 불러줌
                } else {
                    reject(new Error('not found'));
                }
            }, 2000); 
        });
    }

    //사용자 역할
    getRoles(user) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (user === 'esop') {
                    resolve({ name: 'esop', role: 'admin' }); //onSuccess 호출
                } else {
                    reject(new Error('no access'));
                }
            }, 1000);
        });
    }          
}

const userStorage = new UserStorage(); //class니까 new키워드 사용
const id = prompt('enter your id');
const password = prompt('enter your password');
userStorage
.loginUser(id, password)
.then(userStorage.getRoles)
.then(user => alert(`Hello ${user.name}, you have a ${user.role} role`))
.catch(console.log);