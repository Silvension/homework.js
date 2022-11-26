window.onload = main();


function main(){
    //changeNumber()
    //sorting()

}

// task.1

function changeNumber(n){
    if(n < 10){
        return n;
    }
    let number = n;
    let lastDigit = number % 10;
    if(lastDigit === 0){
        return n;
    }
    number = (number - lastDigit) / 10
    let voidString = '';
    return voidString + lastDigit + number
    
}

// task.2

function sorting (n1, n2, n3){
    let number1 = n1;
    let number2 = n2;
    let number3 = n3;

    if(number1 > number2){
        number1 = number1 + number2;
        number2 = number1 - number2;
        number1 = number1 - number2;
    }

    if(number2 > number3){
        number2 = number3 + number2;
        number3 = number2 - number3;
        number2 = number2 - number3;
    }

    if(number1 > number2){
        number1 = number1 + number2;
        number2 = number1 - number2;
        number1 = number1 - number2;
    }
    
    return '' + number1 + ' ' + number2 + ' ' + number3 
}

// task.3

function logicalOperators(){
    
    if(n1 % 2 === 0 && !Math.floor(n1 / 10)){
        return "i"
    }
    if(n1 % 3 === 0 && n1 % 10 != 0){
        return "j"
    }
}

// task. 4

function triangleRectangle(picture,height,width){
    if(height <= 0 || width <= 0){
        return "Please enter only positives"
    }
    if(picture === "triangle"){
        return "Square of the triangle is " + (height * width) / 2
    }if(picture === "rectangle"){
        return "Square of the rectangle is " + (height * width)
    }
}