'use strict';

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
