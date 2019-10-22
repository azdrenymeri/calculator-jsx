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
            calculatorObj.total = null;
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
            if(!operation){
                console.log(` operation ${calculatorObj}`);
                if (!next) {
                    calculatorObj.total = calculatorObj.next;
                }
            }

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