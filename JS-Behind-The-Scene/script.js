'use strict';
/* 
// Scoping in practice
function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    let output = `${firstName}, You are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      // New block scope
      var millenial = true;
      // Creating NEW variable with same name as outer scope's variable
      const firstName = 'Steven';

      // Reassigning outer scope's variable
      output = 'NEW OUTPUT!';

      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    // OUTSIDE OF THE BLOCK
    // console.log(str); // Uncaught ReferenceError: str is not defined - available only inside the block
    console.log(millenial); // Var is a function scope not a blockscope
    // add(2, 3); // When you use a 'use strict' mode, Uncaught ReferenceError: add is not defined
    console.log(output);
  }
  printAge();

  return age;
}

const firstName = 'Jonas';
calcAge(1991);
// console.log(age); // Uncaught ReferenceError : age is not defined
// printAge(); // Uncaught ReferenceError : printge is not defined


/////////////////////////////////////////////////////////////////////
// Hosting and TDZ in Practice

// Variables
console.log(me); // hoisted to the value of undefined
// console.log(job); // Uncaught ReferenceError: Cannot access 'job' before initialization
// console.log(year); // Uncaught ReferenceError: Cannot access 'year' before initialization

var me = 'Jonas';
let job = 'teacher';
const year = 1991;

// Functions
console.log(addDecl(2, 3)); // 5
// console.log(addExpr(2, 3)); // const : Uncaught ReferenceError: Cannot access 'addExpr' before initialization  var : addExpr is not a function
console.log(addArrow(2, 3));
// console.log(addArrow(2, 3));

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

const addArrow = (a, b) => a + b;

// Example
console.log(undefined);
if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted!');
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);
console.log();


///////////////////////////////////////
// The this Keyword in Practice
// console.log(this);

const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  // console.log(this); // undefined
};
calcAge(1991);

const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  // console.log(this); // Window??{window: Window, self: Window, document...
  // simply the this keyword the parent's scope
};
calcAgeArrow(1980);

////////// this keyword inside of a method
const jonas = {
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};
jonas.calcAge();

const matilda = {
  year: 2017,
};

matilda.calcAge = jonas.calcAge;
matilda.calcAge();

const f = jonas.calcAge;
f();


// var firstName = 'Matilda';

const jonas = {
  firstName: 'Jonas',
  year: 1991,
  calcAge: function () {
    // console.log (this);
    console.log(2037 - this.year);

    // Solution 1
    // const self = this; // self or that
    // // function inside of a method
    // const isMillenial = function () {
    //   console.log(self);
    //   console.log(self.year >= 1981 && self.year <= 1996);

    // Solution 2
    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };

    isMillenial();
  },

  greet: function () {
    console.log(this);
    console.log(`Hey ${this.firstName}`);
  },
};
jonas.greet(); // Hey undefined // arrow function doesn't get its own this keyword
jonas.greet(this);
jonas.calcAge();
// ?????? ????????? ????????? ????????? ????????? this??? ???????????? ????????? ????????? ????????? ????????? ??????????????? ????????????.

/////////////////////////////////
// Primitives & Objects(Primitive & Reference Types)

// Primitives
let age = 30;
let oldAge = age;
age = 31;
console.log(age); // 31
console.log(oldAge); // 30

// Objects
const me = {
  name: 'Jonas',
  age: 30,
};
const friend = me;
friend.age = 27;
console.log('Friend:', friend); // age 27
console.log('Me', me); // age 27 ??!
*/

// Primitive types
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);

// Reference types
const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};
const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log('Before marriage:', jessica);
console.log('After marriage:', marriedJessica);
// marriedJessica = {}; It is a constant and can't change that value in the stack

// Copying Objects
const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};
// Create  a new object
const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';

jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');

console.log('Before marriage:', jessica2);
console.log('After marriage: ', jessicaCopy);
