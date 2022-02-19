const numInput = document.querySelector(".getNum");
const guess = document.querySelector(".guessNum");
const btn = document.querySelector(".btn");
const hidden = document.querySelector(".hidden");
const hidden1 = document.querySelector(".hidden1");
let num = numInput.value;
let num1 = guess.value;
let chose = null;

    btn.addEventListener("click", (event) => {
        if(numInput.value < 0 || guess.value < 0) {
            alert("음수는 입력할 수 없습니다.");
        } else { 
            inputValue(event);
            showH1();
            check();
        }   
    });

    function inputValue(event) {
        event.preventDefault();
            num = parseInt(numInput.value);
            num1 = parseInt(guess.value);
    }
        
    function showH1() {
        hidden.classList.remove("hidden");
        chose = (Math.floor(Math.random() * (num + 1)));
        hidden.innerText = `You chose: ${num1}, the machine chose: ${chose} `;
    }

    function check() {
        hidden1.classList.remove("hidden1");
        if(chose === num1) {
            hidden1.innerText = "You won!";
        } else {
            hidden1.innerText = "You lose!";
        }
    }
