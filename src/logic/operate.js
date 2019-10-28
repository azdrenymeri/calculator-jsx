import Big from 'big-js';

const operate = (numberOne, numberTwo, operator) => {
    const a = numberOne? new Big(numberOne) : 0;
    const b = numberTwo? new Big(numberTwo) : 0;
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
            if(a.toString() === '0' || b.toString() === '0'){
                res = '0';
            }else {
                res = a.div(b);
            }
            break;
        default:
            res = a == 0 ? b:a;
            break;
    }
    
    return res.toString();
}

export default operate;