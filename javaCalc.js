function calculate(expression)
{
    //'expression' is a STRING of everything in your calculator window
    //We need to EXTRACT the first number from the 'expression'
    //expression = 1+2
    var firstNum = Number(expression.substr(0,1));
    var operator = expression.substr(1,1); //capture the plus
    var secondNum = Number(expression.substr(2,1));

    if (operator === '+') //that means i add first num and second num
    {
        return addNums(firstNum, secondNum);
    }

    else if (operator === '-')
    {
        return substractNums(firstNum, secondNum);
    }

    else if (operator === '*')
    {
        return multiplyNums(firstNum, secondNum);
    }

    else if (operator === '/')
    {
        return divideNums(firstNum, secondNum);
    }
}

function addNums(p1, p2)
{
    //p1 and p2 are sent to addNums... to do this:
    return p1+p2;
}

function substractNums(p1, p2)
{
    return p1-p2;
}

function multiplyNums(p1, p2)
{
    return p1*p2;
}

function divideNums(p1, p2)
{
    return p1/p2;
}

function backSpace(expression)
{
    var x = expression.length;

    expression = expression.substr(0, x-1);

    return expression;
}