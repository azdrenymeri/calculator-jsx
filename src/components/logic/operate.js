import Big from 'big-js';

const operate = (numberOne, numberTwo, operator) => {

    switch(operator) {
        case '+':
            return new Big(numberOne + numberTwo);
        case '-':
            return new Big(numberOne - numberTwo);
        case 'x':
            return new Big(numberOne * numberTwo);
        case '÷':
            return new Big(numberOne / numberTwo);
        case '%':
            return new Big(numberOne % numberTwo);
        default:
            return "Error";
    }
}

export default operate;