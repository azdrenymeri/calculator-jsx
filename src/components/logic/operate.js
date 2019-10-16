import Big from 'big-js';

const operate = (numberOne, numberTwo, operator) => {
    const a = (numberOne)? new Big(numberOne) : 0;
    const b = (numberTwo)? new Big(numberTwo) : 0;

    let res;
    switch(operator) {
        case '+':
            res = a.plus(b);
            break;
        case '-':
            res =  a.minus(b);
            break;
        case 'x':
            res = a.times(b);
            break;
        case '÷':
            res = a.div(b);
            break;
        default:
            res = 'Error';
    }
    return res.toString();
}

export default operate;