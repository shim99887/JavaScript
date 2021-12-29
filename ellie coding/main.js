class Counter {
    constructor(runEveryFiveTimes) { // 클래스의 인스턴스 객체를 생성하고 초기화하는 특별한 메서드 , 콜백함수를 받음
        this.counter = 0;
        this.callback = runEveryFiveTimes;
    }

    increase() { // 메서드 function 안붙여도 됨 클래스 안에 있어서
        this.counter++;
        console.log(this.counter);
        if(this.counter % 5 === 0) {
           this.callback && this.callback(this.counter);
           }
        }
    }


function printSomething(num) {
    console.log(`wow! ${num}`);
}

function alertNum(num) {
    alert(`wow! ${num}`);
}

const coolCounter = new Counter(printSomething); //클래스 생성, 생성자에 callback 함수 전달

coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();