// ==== Closures ==== 

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();

// Explanation: 
//nestedFunction is able to reach "up the chain" to the scope of myFunction to access the value of internal. Nested functions have access to the scopes of their containing functions.

/* Task 2: Counter */

/* Create a function called `summation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */
function summation (num) {
  let counter = num;

    for (let i = num; i > 1; i--) {
      counter += i - 1;
    }

    return counter;
  }

  console.log(summation(4));