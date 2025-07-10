//Greeting function
function greet(name) {
    return "Hello, "+name;
}
console.log(greet("Alice"))


// even or odd check
function isEven(num){
    if(num%2==0) {
        return true;
    }
    return false;
}
console.log(isEven(3));


//adding arrays
const sumArrays = (numbers) => {
    let sum = 0;
    numbers.forEach(element => {
        sum += element    
    });
    console.log(sum);
    
}
sumArrays([1,2,3,4,5])


//grabbing a property from object
const getProperty = (obj,key1) => {
    let name1 = obj[key1]
    console.log(name1)
}
getProperty({name2:"Bob",age:30},"name2")


//C to F converter
const celsiusToFahrenheit = (heat) => {
    let res = (heat * 9) / 5 + 32;
    console.log(res);
}
celsiusToFahrenheit(0);


//finding large number
const findLarger = (num1,num2) => {
    if(num1>num2) {
        console.log(num1);   
    } else {
        console.log(num2);        
    }
}
findLarger(10,15)


// reverse a string 
const reverseString = (str) => {
    let res = str.split("").reverse().join("")
    console.log(res);   
}
reverseString("hello")


//count a vowels
const countVowels = (str) => {
    let cnt = str.match(/[aeiou]/gi)
    console.log(cnt.length);
}
countVowels("Programming")


//calculator
const calculator = (num1,num2,operator) => {
    switch(operator) {
        case '/':
            if(num2 == 0) {
                console.log("Cannot divided by zero"); 
                break;
            }
            console.log(num1/num2);
            break;
        case '+':
            console.log(num1+num2);
            break;
        case '-':
            console.log(num1-num2);
            break;
        case '*':
            console.log(num1*num2);
            break;
        default :
            console.log("Invalid Operator");
                  
    }
}
calculator(8,0,"/")


//first and last element array element
const getFirstAndLast = (array) => {
    let arr = [array[0],array[array.length-1]];
    console.log(arr);
}
getFirstAndLast([10,20,30,40,50])