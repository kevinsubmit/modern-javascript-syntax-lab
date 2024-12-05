// Use `.map()` to iterate over the following array:

const nums = [13, 87, 2, 89, 12, 4, 90, 63];

// Create a new array where each value is multiplied by 2 and log the new array.

// Your code here
const num2 = nums.map((e) => {
  return e * 2;
});
console.log(num2);

// Given the following array, use destructuring to pull out the first and second values and place them into variables. Log both variables.

const pizzaToppings = ["Pineapple", "Olives", "Anchovies"];

// Your code here
const [first, second] = pizzaToppings;
console.log(first);
console.log(second);

// Given the following object, use destructuring to create variables `make` and `model` that will hold the respective values.

const car = {
  make: "Audi",
  model: "q5",
};

// Your code here
const { make, model } = car;
console.log(make, model);

// Duplicate the following array using the spread operator and assign it to `controversialPizzaToppings`. Then, log the variable.

const pizzaTopings = ["Pineapple", "Olives", "Anchovies"];

// Your code here
const controversialPizzaToppings = [...pizzaTopings];
console.log(pizzaTopings, controversialPizzaToppings);

// Duplicate the following object and spread its values into a new variable `myCar`.

const newCar = {
  make: "Audi",
  model: "q5",
};

// Change the `model` property of `myCar` to 'q7'. Log both objects.

// Your code here
const myCar = { ...newCar };
myCar.model = "q7";
console.log(newCar, myCar);

// Create an object named userProfile.
// Define a variable named propertyName and assign a string to it (like a username, age, or email).
// Use propertyName as a dynamic key in userProfile, assigning a relevant value.

// Your code here
const propertyName = 'username'; // Variable as a dynamic key

const userProfile = {
  [propertyName]: 'austin',
};

console.log(userProfile); // { bananas: 5 }


// Exercise 8: Default parameters
function describe(noun = 'cat', adjective = 'white') {
    console.log(`The ${noun} is ${adjective}.`);
  }
  

//   Exercise 9: Ternary operator

  // Calling the function without arguments (default values will be used)
  describe(); // Output: "The cat is white."
  
  // Calling the function with custom arguments
  describe('dog', 'brown'); // Output: "The dog is brown."
  
  let pizza = 'tasty';

pizza === 'tasty' ? console.log('yum') : console.log('yuck');

const result = 'hello' && '';
console.log(result); // Output: ''
const result2 = 'foo' && 'bar';
console.log(result2); // Output: 'bar'

const adventurer = {
    name: 'Alice',
  };
  
  let dog = adventurer.dog;
  
  console.log(dog); // undefined
  
  const adventurer1 = {
    name: 'Alice',
    pet: {
      dog: {
        name: 'Buddy',
      },
    },
  };
  let dogName = adventurer.pet?.dog?.name;
console.log(dogName);  // "Buddy"
