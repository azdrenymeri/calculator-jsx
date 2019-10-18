import operate from './operate';

const calculate = (calculatorObj, buttonName) => {
    const{total, next, operation} = calculatorObj;
    switch(buttonName){
        case '+':
        case '-':
        case 'x':
        case '÷':
            calculatorObj.total = operate(total,next, operation);
            calculatorObj.next = null;
            calculatorObj.operation = buttonName;
            break;
        case '.':
            if(next){
                calculatorObj.next += next.includes('.')? '':'.';
            } else {
                calculatorObj.next = '0.';
            }
            break;
        case 'AC':
            calculatorObj.total = "0";
            calculatorObj.next = null;
            calculatorObj.operation = null;
            break;
        case '+/-':
            if(next){
                calculatorObj.next = operate('-1', next, 'x');
            }
            break;
        case '%':
            if(next){
                calculatorObj.next = operate(next, '100', '÷');
            }
            break;
        case '=':
            calculatorObj.total = operate(total,next, operation);
            calculatorObj.next = null;
            calculatorObj.operation = null;
            break;
        default:
            if(next !== '0' && next){
                calculatorObj.next += buttonName;
            } else {
                calculatorObj.next = buttonName;
            }
    }
    console.log(calculatorObj)
    return calculatorObj;
}

export default calculate;