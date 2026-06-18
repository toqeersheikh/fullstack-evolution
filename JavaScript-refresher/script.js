import { add, PI, myName as admin } from "./util.js";

import joy from "./main.js";

// ! Modules : Import and Export

// ? Types:

// !  1 : Named Exports and Imports

// * Use named exports when you want to export multiple things (variables, functions, or classes) from a single file.

// * The Rule: The import name must match the export name exactly, and it must be wrapped in curly braces {}.

// * Pro-Tip (Renaming): If you ever have a naming conflict, you can rename a named import on the fly using the as keyword:

// import { add as addNumbers } from './mathUtils.js';

console.log(add(3, 1));

console.log(admin);

console.log(PI);

// ! 2 : Default Exports and Imports

// * Use a default export when a file has a single main purpose (like a single utility function, a class, or in React, a standalone Component).

// * The Rule: You can only have one default export per file. When importing it, you do not use curly braces, and you can name it whatever you want.

console.log(joy);

// ? Arrow Functions:

// * () => {}

// ! Traditional Function:

// function double(x) {
//   return x * 2;
// }

// ! Standard Arrow Function:

const double = (a) => {
  return a * 2;
};

console.log(double(2));

// ! Implicit Return ( The Ultra Clean Way)

const square = (a) => a * a;

console.log(square(9));

// ? Cool

// ! Objects

// ? 1. Objects: The Real Entities

// * An object is a collection of related data (properties) and functions (methods) stored as key-value pairs.

const person = {
  username: "Jon Doe",
  job: "Useless",
  greet() {
    console.log(`Hello there I am ${this.username} and I am ${this.job}`);
  },
};

person.greet();

// ! Arrays

// * Arrays in JavaScript are ordered lists of values. Unlike arrays in strongly-typed languages like C++, JavaScript arrays are dynamic, resizable, and can hold a mix of different data types simultaneously (strings, numbers, objects, or even other arrays).

// Array Syntax:

const numbers = [2, 3, 4, 5];

console.log(numbers);

// * Common Array Methods in React
// * Rather than modifying arrays directly, React requires you to use non-mutating (pure) methods that return a brand new array. These are the top three methods you must master

// ! 1. map() (Transforming Data)

// * Transforms every single item in an array and returns a new array of the exact same length.

// * 💡 This is the absolute #1 most used array method in React for converting raw data arrays into UI components.

const num_square = numbers.map((x) => x * x);

console.log(num_square);

// ! 2. .filter() (Removing Data)

// * Runs a condition check on every item. If the item passes (returns true), it gets placed in the new array. If it fails, it gets dropped.

const inventory = [
  {
    name: "Laptop",
    price: 1000,
  },
  {
    name: "Mouse",
    price: 25,
  },
  {
    name: "Monitor",
    price: 300,
  },
];

const highValueItems = inventory.filter((item) => item.price > 100);

console.log(highValueItems);

console.log("=======================");

// ! 3. .reduce() (Aggregating Data)

// * Reduces an entire array down to a single value (like a combined sum, an object, or a single string). It accepts a callback function with an accumulator (acc) and the current item (curr).

//* array.reduce((accumulator, currentValue, currentIndex, array) => {}, initialValue);

console.log(`Original Array: ${numbers}`);

// numbers.reduce((acc, curr, i, arr) => {
//   console.log(`Accumulator : ${acc}`);
//   console.log(`Accumulator : ${acc}`);
//   console.log(`Current Item : ${curr}`);
//   console.log(`Index : ${i}`);
//   console.log(` Array: ${arr}`);
// }, 0);

// ! "It iterates one time and forgets accumulator that's why we return it explicitly."

// The code block you write inside .reduce() is just a regular function. Like any normal JavaScript function, once it reaches its closing curly brace }, its local memory execution context is completely wiped out. If you don't use the return keyword, the function finishes, evaluates to undefined, and forgets everything it just calculated.

const sum = numbers.reduce((acc, curr, i) => {
  return acc + curr;
}, 0);

// By writing return accumulator + currentValue;, you are actively throwing that calculated value over the wall of the disappearing execution block so the main .reduce() loop engine can catch it. The engine takes that returned value, caches it safely, and feeds it right back in as the fresh incoming accumulator argument for the next item's iteration step.

// ! "accumulator is returned to the reduce function, not the global scope, until the loop ends";

console.log(`Sum is : ${sum}`);

// ! The data flow works like a closed loop:

// The Array hands an item to .reduce().

// .reduce() invokes your callback function, handing it the current acc and curr.

// Your callback function calculates the total and returns it back to .reduce().

// .reduce() catches it, stores it, updates the array index pointer, and loops back to Step 2.
// * Under the hood, .reduce() is just a regular wrapper function containing a standard for loop, and the code you write inside your callback function is literally the body code that executes inside that loop on every turn.

// ! .find()

// * Loops through an array and returns the very first element that matches a condition. If nothing matches, it returns undefined.

const posts = [
  { id: 1, title: "React JS" },
  { id: 2, title: "Next JS" },
];

const p1 = posts.find((item) => item.id === 2);

console.log(p1);

// ! .findIndex()

// * Works exactly like .find(), but instead of returning the item itself, it returns the numerical index position of that item. If it's not found, it returns -1.

// * React Use Case: Finding the exact location of an item inside a global state array or database array to update or replace it.

// ! some()

// * Checks if at least one element in the array passes your condition. It stops iterating the moment it finds a single match.

// * React Use Case: Checking if any item in a shopping cart is "out of stock" to display a warning banner.

const cart = [
  { name: "Book", instock: true },
  { name: "Phone", instock: false },
];

const hasUnavailableItems = cart.some((item) => !item.instock);
console.log(hasUnavailableItems); // true

// ! every()

// * The strict sibling of .some(). It returns true only if every single item in the array passes the condition.

// * React Use Case: Form validation. Checking if every required field in a registration form array is valid before enabling a "Submit" button.

// ! React states must never be mutated directly. In the past, sorting or reversing arrays would change the original array, forcing developers to manually write [...arr].sort().

// ! ES2023 introduced incredibly powerful non-mutating alternatives that copy the array automatically under the hood:

// ! toReversed()

// ! toSorted() : Returns a brand-new copy of the array sorted according to a comparison function.

// ? Destructuring:

// ! Object Destructuring

// ! Array Destructuring

// ? Object Destructuring

// * With objects, destructuring matches variable names with the keys inside the object. The order of the variables does not matter.

const developer = {
  name: "Toqeer",
  age: 24,
  location: "Pakistan",
  stack: "Full Stack",
};

const { location, age } = developer;

console.log(location);
console.log(age);

// ! Advanced Destructuring

// ! Renaming Variables

const { name: dev, stack: techStack } = developer;

console.log(dev);
console.log(techStack);

// ! Fallback Default Values

// * If a property might not exist in the object, you can assign a default value using =. If the property is missing, the default is used; if it does exist, the default is ignored.

const { language = "JavaScript", theme = "Dark" } = developer;

console.log(language);
console.log(theme);

// ! 2. Array Destructuring

// * With arrays, destructuring works by positional index alignment rather than naming keys. You use square brackets [] instead of curly braces, and you can name the variables whatever you want.

// * The Basic Syntax

// The first variable you declare automatically grabs the item at index 0, the second grabs index 1, and so on.

const frameworkStack = ["React JS", "Next JS", "TypeScript"];

const [frontend, metaFramework] = frameworkStack;

console.log(frontend);
console.log(metaFramework);

// ! Advanced Array Destructuring

// Skipping Elements

// * If you only care about the first and third items in an array, you can simply leave a blank gap separated by a comma to bypass the middle element

const [, , strictlyTyped] = frameworkStack;

console.log(strictlyTyped);

// ! The Spread Operator (written as three dots: ...)

// ! Spreading Arrays

// * Think of the array spread operator as physically opening up a box and dumping its contents into a new container.

const primaryTech = ["React", "Node"];

const updatedTech = [...primaryTech, "TypeScript"];
console.log(updatedTech);

// ! Combining (Merging) Arrays

// You can easily slice, dice, and stitch multiple arrays together at any position.

const tools = ["Git", "Vite"];
const languages = ["JavaScript", "C++"];

const completeStack = [...languages, "Tailwind", ...tools];

console.log(completeStack);

// ! Spreading Objects

// * Just like arrays, object spreading unpacks key-value pairs into a new object.

const userProfile = {
  username: "Toqeer",
  role: "Developer",
  theme: "dark",
};

console.log(userProfile);

// ❌ BAD IN REACT: userProfile.theme = "light"; (Direct mutation)

// * ⚠️ Order Matters! The properties spread out sequentially. If you place theme: "light" before ...userProfile, the spread operator will step over it and overwrite it right back to "dark". Always put your updates after the spread.

//  GOOD IN REACT: Copy everything, then overwrite 'theme'

const updatedProfile = {
  ...userProfile,
  theme: "light",
};

console.log(updatedProfile);

// ! It is vital to understand that the spread operator creates a shallow copy, not a deep copy.

// * When you spread an array or object, JavaScript copies primitive values (strings, numbers, booleans) by their actual value. However, if your array or object contains nested arrays or objects, JavaScript only copies the memory references to those nested items.

// ! Spread vs. Rest

// * The exact same three dots (...) are also used for something called the Rest Operator. The difference is completely down to where you use them.

// * Spread unpacks elements into individual items. It is always used on the right side of an assignment operator = or inside function calls.

// * Rest packs separate loose items together into a structured array wrapper. It is always used on the left side of an assignment operator = (inside destructuring) or inside function parameters.

const [firstItem, ...restItems] = ["HTML", "CSS", "JS", "C++"];

console.log(firstItem);
console.log(restItems);

// ! Ternary Operator:

// * Syntax: condition ? expressionIfTrue : expressionIfFalse;

const userAge = 20;

// One line assignment
const accessAllowed = userAge >= 18 ? "Granted" : "Denied";

console.log(accessAllowed); // "Granted"

// ! Manipulating DOM Not with REACT JS

// We do not do manually manipulating DOM elements in REACT like the way we do in JS
// REACT will do that for US

// ! References VS Primitives

// ! Primitive Values (Stored by Value)

// * Primitives are simple, atomic pieces of data. JavaScript has 7 primitive types: string, number, boolean, null, undefined, symbol, and bigint.

// * Memory Behavior: The actual value is stored directly in the Stack memory.

//  * Copy Behavior: When you copy a primitive variable, JavaScript creates a completely separate, independent duplicate of that value in a new memory slot. Changing the new variable will not affect the original.

let currentScore = 100;
let backupScore = currentScore; // A brand new copy of '100' is made

backupScore = 150; // Overwriting the copy

// ! Reference Values (Stored by Reference Pointer)

// ! Reference values are complex data structures: Objects, Arrays, and Functions.

// * Memory Behavior: The actual data (properties or array elements) can grow dynamically, so it is stored in the Heap memory. The variable wrapper itself sits on the Stack, but it doesn't hold the data—it only holds a memory address pointer that points directly to the location in the Heap.

// * Copy Behavior: When you copy a reference variable, JavaScript does not copy the data. It only copies the pointer address. Both variables now point to the exact same object in the Heap memory.

// ! The Shared Memory Mutation Trap:

const user = { name: "Toqeer", role: "Developer" };
const admin = user; // ❌ You did not create a new object. You copied the pointer!

admin.role = "SuperAdmin"; // Modifying the object via the 'admin' pointer

console.log(user.role); // "SuperAdmin" (❌ The original 'user' object was mutated!)

// ! Comparison Equality Mechanics (== vs ===)

// * This memory design completely changes how comparison checking works:

// * Primitives are compared by their value. If the characters or numbers match, they are equal.

// * References are compared by their memory address pointer. Two objects are only equal if they point to the exact same slot in memory, even if their inner values look identical.

// Primitives
console.log("React" === "React"); // true

// References
const objectA = { score: 10 };
const objectB = { score: 10 };

console.log(objectA === objectB); // false ❌ (They live at totally different addresses in the Heap!)

const objectC = objectA;
console.log(objectA === objectC); // true  (They point to the exact same address slot)
