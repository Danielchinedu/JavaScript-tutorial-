let result = document.getElementById('result');

function addNumber(num) {
    result.value += num;
}

function clearResult() {
    result.value = '';
}

function backspace() {
    result.value = result.value.slice(0, -1);
}

function calculate(operation) {
    switch (operation) {
        case '+':
            result.value = eval(result.value) + '';
            break;
        case '-':
            result.value = eval(result.value) - '';
            break;
        case '*':
            result.value = eval(result.value) * '';
            break;
        case '/':
            result.value = eval(result.value) / '';
            break;
        case '=':
            result.value = eval(result.value) + '';
            break;
        default:
            break;
    }
}
