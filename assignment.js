// ==============================
//         Assignment
// ==============================

// => Solve these questions.

// Problem 1: Write a function to calculate the area of a triangle.
function areaCalculate(base, height){
    area = (base * height)/2;
    return area;
}
console.log(areaCalculate(150,200));


// Problem 2: Write a function to convert degrees to radians.
function convertDegrees(degrees){
    return degrees * (Math.PI / 180);
}
console.log(convertDegrees(20));


// Problem 3: Create a function calculateFactorial that takes a number and returns its factorial.
function calculateFactorial(number){
    let sum = 1;
    if (number === 0 || number === 1){
        return 1;
    } else{
    for (let i = number; i>=1; i--){
        sum *= i;
    }
    return sum;
    }
}
console.log(calculateFactorial(7));


// Problem 4: Create a function isPrime that takes a number as a parameter and returns true if it's a prime number, and false otherwise.
function isPrime(num){
    if (num <= 1){
        return false;
    } else {
        for (let i = 2; i < num; i++){
            if (num % i == 0){
                sum = false;
                break;
            } else{
                sum = true;
            }
        }
        return sum;
    }
}
console.log(isPrime(15));


// Problem 5: Create a function mergeArrays that takes two arrays as parameters and returns a new array that merges both arrays.
let arr1 = ["mango", "banana"];
let arr2 = ["apple","coconat"];
function mergeArrays(parameter1 , parameter2){
    return arr1.concat(arr2);
}
console.log(mergeArrays(arr1,arr2));


// Problem 6: Create a function isLeapYear that takes a year as a parameter and returns "This is a leap year" if it's a leap year, and "Not Leap year" otherwise.
function isLeapYear(year){
    if ((year % 400 === 0 )|| (year % 4 === 0 && year % 100 !== 0)){
        return "This is a leap year.";
    } else{
        return "Not Leap year";
    }
}
console.log(isLeapYear(2016));


// Problem 7: Create a function removeDuplicates that takes an array and returns a new array with duplicates removed.
let list = [1,2,3,3,4,4,3,5,5,4 , "man", "woman", "man"]
function removeDuplicates(list){
    let newList = [];
    for(let i = 0; i < list.length; i++){
        if(newList.indexOf(list[i]) === -1){
            newList.push(list[i]);
        }
    }
    return newList;
}
console.log(removeDuplicates(list));


// Problem 8: Create a function convertToCelsius that takes a temperature in Fahrenheit and returns the equivalent temperature in Celsius.
function convertToCelsius(Fahrenheit){
    let celsius = (Fahrenheit - 32)*5 /9;
    return celsius + " C";
}
console.log(convertToCelsius(82));


// Problem 9: Write a function to find the maximum of five numbers.
function maximum(a,b,c,d,e){
    if (a>b && a>c && a>d && a>e){
        return a;
    } else if(b>a && b>c && b>d && b>e){
        return b;
    } else if(c>a && c>b && c>d && c>e){
        return c;
    } else if (d>a && d>b && d>c && d>e){
        return d;
    } else{
        return e;
    }
}
console.log(maximum(23,54,76,45,59));


// Problem 10: Create a function called evenOdd() that takes a string as a parameter. Now you have to give the output based on the total number of characters in your String. The output will be 'even' or 'odd'. [ Input: ‘JavaScript’ Output: even, Input: ‘Hello’ Output: odd]
function evenOdd(string){
    let output = string.length;
    if(output % 2 == 0){
        return "even";
    } else {
        return "odd";
    }
}
console.log(evenOdd("Hello"));



// ============================================================================================================================================ \\


// => Answer any 4 questions.

// 1. Explain the difference between 'if...else' and 'switch' statements for conditional logic.

/*
'if...else' and 'switch' statements are both used for conditional logic. but they have different use cases and structures:

/= if...else =\
if-else is a conditional statement that executes the group of statements, based on whether the statement is true or false.

        - This statement is executed based on the condition inside the if-else statement.
        - One statement will be executed. It can be if or else.
        - In if-else, the values are based on conditions.
        - In case, the situation gets false in the if statement, it will automatically execute the else statement.


/= switch =\
The switch statement checks the value of a variable and compares it with numerous possibilities. Once we find the match, the statement of that specific case is executed.

        - Switch statements execute as per the user decision.
        - Here, each case will be executed one after the other.
        - In the switch case, the values are based on user preference.
        - In any situation, if the switch statement does not find any match, the default condition is executed if created.

 */



// 3. Explain the difference between var, let, and const when declaring variables in JavaScript.

/*
In JavaScript, there are three ways to declare variables: var, let, and const. Each of them has specific characteristics and use cases.
A variable can be declared in javascript using the venerable Var variable method. We utilize the let and const variables in the current javascript, which was included in the ES2015(ES6) update; it is now used more commonly in modern javascript than the var variable.

/= var =\
    The var keyword is the oldest way of declaring variables in JavaScript and is supported by all browsers.The var keyword declares a function-scoped or global variable, optionally initializing it to a value. Function-scoped means that the variable is only available within the function it was declared in. Global variables are available throughout your entire code. 

/= let =\
    "let" was introduced in ECMAScript 6 (also known as ES6) as an alternative to "var". Variables declared with "let" have the block-level scope, meaning they are only accessible within the block in which they were declared. They also have the concept of the temporal dead zone, which means they are not accessible before they are declared.
    
/= const =\
    "const" was also introduced in ECMAScript 6 and is used to declare variables that cannot be reassigned. This makes "const" variables useful for declaring constants, such as pi or the gravitational constant, which have a fixed value. Like "let", "const" variables have the block-level scope, and, they are not accessible before they are declared.


*/



// 4. Explain the concept of "scope" in JavaScript and the difference between global and local scope.

/*
In JavaScript, scope refers to the current context of your code. This context determines where you can access certain variables and functions. In other words, where you decide to define a variable or function in JavaScript impacts where you have access to it later on. So, if you define a variable inside a function, you will only be able to access it inside that function.
There are two types of scope in JavaScript.
    1. Global scope  2. Local scope 

/= Global scope =\
    Global scope means that a variable or function is available anywhere in your code. This is the default scope for variables and functions in JavaScript.
        - Variables and functions declared in the global scope are accessible from anywhere in the code, throughout the entire program.
        - Variables declared in the global scope are often referred to as global variables.

/= Local scope =\
    Local scope means that a variable or function is only available in the current code block.
        - Variables and functions declared within a function have local scope. They are only accessible within that function.
        - Local scope provides encapsulation, allowing you to create isolated environments for different parts of your code.

*/



// 5. What is the difference between "null" and "undefined" in JavaScript?

/*
Null in JavaScript means an empty value and is also a primitive type in JavaScript. The variable which has been assigned as null contains no value. Undefined, on the other hand, means the variable has been declared, but its value has not been assigned.

/= Null =\
    Null is basically an assignment value given to a variable. The variable which has been assigned as null contains no value.
        - null is also a primitive value in JavaScript.
        - It represents the intentional absence of any object value or a value that indicates "no value."
        - It is often used to indicate that a variable should be empty or doesn't have a meaningful value.

/= Undefined =\
    undefined means "not defined". So we declare a variable but do not assign a value to it, the variable becomes undefined.
        - undefined is a primitive value in JavaScript.
        - It is the default value of variables that have been declared but have not been assigned a value. For example, if you declare a variable without initializing it, it will have the value undefined.
        - Function parameters that are not provided when the function is called are also undefined.

*/