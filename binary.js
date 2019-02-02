
function tenToBinary()
{
    //the tenToSmall function is expecting a number (num) in base 10
    //it will convert the number (num) to the value of base
    num = document.toBinary.num.value; //number to convert
    base = 2; //destination base
    smallNum = ""; //store remainders here

    while (num > 0) //continue looping while num isn't zero
    {
        smallNum = num%base + smallNum; //3%5 = 2 .... % returns remainder
        //setup num for the next iteration of the loop
        num = Math.floor(num/base);
    }

    return smallNum;
}

function toBase10()
{
    num = document.toTen.num.value; //13
    base = document.toTen.base.value; //base of number to convert to base 10
    tenNum = 0; //stores number to be output at the end
    numLength = num.toString().length; //converts num to STRING, then counts in the string

    while (numLength > 0)
    {
        var denominator = Math.pow(10,(numLength-1)); //gets denominator of fraction
        //for 1101, denominators will be 1000, 100, 10, 1
        var currentDigit = Math.floor(num/denominator); //captures a 1 or 0 to multiply by 2^numLength
        //above means 1101/1000 = 1... 101/100 = 1.... 01/10 = 0... 1/1 = 1...
        tenNum = tenNum + currentDigit*Math.pow(base,numLength-1);
        //currentDigit*2^3 .... currentDigit*2^2 .... currentDigit*2^1 etc.
        num = num%denominator; //reduces num for next iteration...
        // 1101 -> 101 -> 01 -> 1 -> 0
        numLength--; //decreases the numLength value by 1... eventually it will hit zero
    }
    return tenNum;
}

function tenToSmall(num, base) //convert a base-10 number to a smaller base
{
    //the tenToSmall function is expecting a number (num) in base 10
    //it will convert the number (num) to the value of base
    num = document.toBase.num.value; //number to convert
    base = document.toBase.out.value; //destination base
    smallNum = ""; //store remainders here

    while (num > 0) //continue looping while num isn't zero
    {
        smallNum = num%base + smallNum; //3%5 = 2 .... % returns remainder
        //setup num for the next iteration of the loop
        num = Math.floor(num/base);
    }

    return smallNum;
}

function smallToTen(num, base) //convert a small-base number to base-10
{
    num = document.toBase.num.value; //13
    base = document.toBase.base.value; //base of number to convert to base 10
    tenNum = 0; //stores number to be output at the end
    numLength = num.toString().length; //converts num to STRING, then counts in the string

    while (numLength > 0)
    {
        var denominator = Math.pow(10,(numLength-1)); //gets denominator of fraction
        //for 1101, denominators will be 1000, 100, 10, 1
        var currentDigit = Math.floor(num/denominator); //captures a 1 or 0 to multiply by 2^numLength
        //above means 1101/1000 = 1... 101/100 = 1.... 01/10 = 0... 1/1 = 1...
        tenNum = tenNum + currentDigit*Math.pow(base,numLength-1);
        //currentDigit*2^3 .... currentDigit*2^2 .... currentDigit*2^1 etc.
        num = num%denominator; //reduces num for next iteration...
        // 1101 -> 101 -> 01 -> 1 -> 0
        numLength--; //decreases the numLength value by 1... eventually it will hit zero
    }
    return tenNum;
}
/*
function addNums(input1, input2)
{
    var sum = input1 + input2;
    return sum;
}

function subtractNums(input1, input2)
{
    var difference = input1 - input2;
    return difference;
}

function combo(input1, input2)
{
    var tempNum1 = addNums(input1, input2)
    var tempNum2 = subtractNums(tempNum1, input2)

    alert("TempNum 1 is..." + tempNum1);
    alert("TempNum 2 is..." + tempNum2);
}
 */

function xToY(input1, input2, input3)
{
    var num2 = smallToTen(input1, input2);
    var num3 = tenToSmall(num2, input3);
    return num3;
}
//Anushree helped me with the xToY function
