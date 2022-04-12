// 10. values and variables 값과 변수 
// let js = "amazing";
// console.log(40 + 8 + 23 - 10);

// console.log("Jonas");
// console.log(23);

// let firstName = "Bob"
// // declaring a variable
// let firstNamePerson // camelCase

// console.log(firstName);
// console.log(firstName);
// console.log(firstName);

// let PI = 3.1425;
// // real constant - uppercase

// let job1 = 'programmer';
// let job2 = 'teacher';

// let myFirstJob = 'Programmer';
// let myCurrentJob = 'Teacher';
// // more descriptive

// console.log(myFirstJob);


// 12. Data type 데이터유형
// // VALUE에는 OBJECTIVES and PRIMITIVES이 있다.
// // 객체값과 원시값 

// // 7 primitive data type
// // number, string, Boolean, undefined,null,symbol and bigInt

// let javascriptIsFun = true;
// console.log(javascriptIsFun);

// // console.log(typeof true);
// console.log(typeof javascriptIsFun); // Boolean
// // console.log(typeof 23);
// // console.log(typeof 'Jonas');

// javascriptIsFun = 'YES!';
// // javascriptIsFun을 값을 let생략해서 재 할당 가능 
// console.log(typeof javascriptIsFun); // string  - dynamic typing (동적 타이핑)

// let year;
// // 값이 없는 빈 변수를 선언할때 자동으로 undefined값을 갖는다.
// console.log(year); // undefined
// console.log(typeof year); // undefined

// year = 1991;
// console.log(typeof year); // number - dynamic typing

// console.log(typeof null); // object - JS error

/* 
// 13. let, const, var
let age = 30;
age = 31; // mutated the variable 변수를 변경 
// reassigning a value 값 재할당 
// let = blockscope

const birthYear = 1991;
// birthYear = 1990;
// const는 재할당 할 수 없다 immutable variable 불변 변수 
// 출생연도는 바뀌지 않기 때문에 const의 적당한 예시

// const job;
// const를 사용할 때 기본적으로 초기값이 필요함 

var job = 'programmer';
job = 'teacher'
// var = function scope

lastName = 'Schmedtmann';
console.log(lastName);
// 앞전의 3가지 변수 선언 하지 않아도 변수 선언 가능함 그러나 범위문제로 좋지 않다
 */


/* // 14. Basic Operators 기본 연산자

// Math operators
const now = 2037;
const ageJones = now - 1991;
const ageSarah = now - 2018;
console.log(ageJones, ageSarah); 

console.log(ageJones * 2, ageJones / 10, 2 ** 3)
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2
// 2의 3승은 8 

const firstName = 'Jonas';
const lastName = 'Schmedtmann';
console.log(firstName + ' ' + lastName);

// Assignment operators 할당 연산자 = equal sign 등호
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25 reassigning x 
x *= 4; // x = x * 4 = 100
x++; // x + x = 1
x--; // x - x = -1  
console.log(x)

// Comparison operators 비교연산자 결과값은 Boolean값으로 나옴 
console.log(ageJones > ageSarah); // >(greater) , = , >= , <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18; 
// isFullAge은 Boolean값이다

console.log(now - 1991 > now - 2018); */

// 15. Operator Precedence 연산자 우선 순위 
/* 
const now = 2037;
const ageJones = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

console.log(25 - 10 - 5); // left to right operation 

let x , y;
x = y = 25 - 10 - 5; // x = y = 10, x = 10 right to left operation
console.log(x,y);

const averageAge = (ageJones + ageSarah) / 2 
// 우선 연산자대로 계산하면 나누기 먼저 계산되서 55.5 나옴 
// 이때 최고 우선 연산자 ()사용해서 +가 우선 사용될 수 있게 적용 32.5 나옴 
console.log(ageJones, ageSarah, averageAge);
 */


// Coding Challenge #1 
/* 
Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall.
GOOD LUCK 
 */

// BMI = mass / height ** 2 
// mass / (height * height) prac 

// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// const massMark = 95;
// const heightMark = 1.88;
// const massJohn = 85;
// const heightJohn = 1.76;

// const BMIMark = massMark / heightMark ** 2;
// const BMIJohn = massJohn / (heightJohn * heightJohn);
// const markHigherBMI = BMIMark > BMIJohn; 

// console.log(BMIMark, BMIJohn, markHigherBMI)

// 17.Strings and Template Literals 문자열과 템플릿 리터럴 
// Template Literals can write a string in a more normal way

/* const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + 'years old ' + job + '!';
console.log(jonas);

// this is a lot easier 
// this is a way easier way of writing this string
const jonaNew = `I'm ${firstName}, a ${year - birthYear} year old
${job}`;
console.log(jonaNew);

console.log(`Just a regular string`)

// multiline strings  = \n\
console.log(`string with \n\
multiple \n\
lines`);

console.log(`Sting
multiple
lines`); */

// if/else Statements
/* const age = 15;
// const isOldEnough = age >= 18;

  if (age >= 18) {
    console.log('Sarah can start driving license 🚗');
  } else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
  } */

// 제어구조 control structure
/* if() {

} else {

} */

/* const birthYear = 2012;

let century;
if(birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century); // let century를 if문 안에 넣고 실행하면 오류 Uncaught ReferenceError: century is not defined

 */

/*
Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

1. Print a nice output to the console, saying who has the higher BMI. The message can be either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"

HINT: Use an if/else statement 😉

GOOD LUCK 😀
*/

/* const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

// mark > John

if(BMIMark > BMIJohn) {
  console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`)
} else {
  console.log(`John's BMI(${BMIJohn}) is higher than Mark's(${BMIMark})`)
} */

// 20. Type Conversion 

/* const inputYear = '1991';
console.log(Number(inputYear), inputYear); // 1991 '1991'
console.log(inputYear + 18);
console.log(Number(inputYear) + 18);

console.log(Number('Jonas'));  // NaN invalid number
console.log(typeof NaN); //number

console.log(String(23), 23); //23(string) 23(number)

// type Coercion
console.log('I am ' + 23 + ' years old'); // I am 23 years old
console.log('23' - '10' - 3);  // 10 
console.log('23' + '10' + 3); // 23103
console.log('23' * '2'); // 46
console.log('23' / '2'); // 11.5

let n = '1' + 1; // '11'
n = n - 1; // 10 
console.log(n);

console.log(2+3+4+'5'); // "95"
console.log('10'-'4'-'3'-2 + '5'); // 15 */

/* 
// 21. Truthy and Falsy Values

// 5 falsy values: 0 , "", undefined, null, NaN

console.log(Boolean(0));               // false
console.log(Boolean(undefined));       // false 
console.log(Boolean('Jonas'));         // true
console.log(Boolean({}));              // true 빈객체
console.log(Boolean(''));              // false 

// Boolean is always implicit, not explicit  
// Boolean은 항상 명시적이지 않고 암시적이다. 또한 자바스크립트는 모든 값을 Boolean로 강제변환 시킨다.

const money = 0;
if(money) {
  console.log("Don't spend it all ;)");
} else {
  console.log("You should get a job! :(")
}

let height;
if(height) {
  console.log('YAY! Height is defined');
} else {
  console.log('Height is UNDEFINED');
}

let weight = 0;   // 0 is falsy value
if(weight) {
  console.log('YAY! Weight is defined');
} else {
  console.log('Weight is UNDEFINED');
}
 */

// Equality Operators 등호연산자 

/* 
const age = '18';
if(age === 18) console.log('You just became an adult:D(strict)');

if(age == 18) console.log('You just became an adult:D(loose)');

// '18' === 18 fasle  (not type coercion)
// '18' == 18  true (type coercion )

const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) { // 22 === 23 -> FALSE
  console.log('Cool! 23 is an amzaing number!')
} else if (favourite === 7) {
  console.log('7 is also a cool number')
} else if (favourite === 9) {
  console.log('9 is also a cool number')
} else {
  console.log('Number is not 23 or 7 or 9')
}sole.log('Number is not 23 or 7')
 */