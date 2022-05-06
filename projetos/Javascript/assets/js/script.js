var currentNumberWrapper = document.getElementById("currentNumber");
var currentNumber = 0;

const click_menos = document.getElementById("sub");
const click_mais = document.getElementById("add");

click_mais.addEventListener("click", increment);
click_menos.addEventListener("click", decrement);

function decrement() {
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
    if (currentNumber >=10) {
        document.getElementById("add").disabled = true;
    }
    else {
        document.getElementById("add").disabled = false;
    }
}

function increment() {
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
    if (currentNumber >=10) {
        document.getElementById("add").disabled = true;
    }
    else {
        document.getElementById("add").disabled = false;
    }
}


