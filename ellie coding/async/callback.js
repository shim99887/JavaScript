'use strict';

class UserStorage {
    loginUser(id, password, onSuccess, onError) {  // 함수
        setTimeout(()=> {
            if(
                (id === 'esop' && password ==='dream') ||
                (id === 'esop2' && password ==='dream2') 
            ) {
                onSuccess(id); //onSuccess 콜백을 불러줌
            } else {
                onError(new Error('not found'));
            }
        }, 1000); //1초 뒤에 위에 코드블록 실행됨
    }

    //사용자 역할
    getRoles(user, onSuccess, onError) {
        setTimeout(() => {
            if (user === 'esop') {
                onSuccess({ name: 'esop', role: 'admin' }); //onSuccess 호출
            } else {
                onError(new Error('no access'));
            }
        }, 1000);
    } 
}


const userStorage = new UserStorage(); //class니까 new키워드 사용
const id = prompt('enter your id');
const password = prompt('enter your password');
userStorage.loginUser(
    id, 
    password, 
    user => {
        userStorage.getRoles(
            user,
            userWithRole => {
                alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role} role`)
            },
            error => {
                console.log(error);
            }
        );
    }, 
    error => {
        console.log(error);
    }
);