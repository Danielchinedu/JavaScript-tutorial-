# 02 — Functions

Functions let you define reusable behavior and keep programs easier to understand.

## Learning objectives

- Declare and call functions.
- Use parameters and return values.
- Understand local variables.
- Write simple arrow functions.

## 1. Function declaration

```js
function greet(name) {
  return `Hello, ${name}!`;
}

console.log(greet("Daniel"));
```

## 2. Parameters and return values

```js
function add(a, b) {
  return a + b;
}

const result = add(8, 4);
console.log(result); // 12
```

A parameter receives input. `return` sends a value back to the caller.

## 3. Arrow functions

```js
const square = (number) => number * number;

console.log(square(5)); // 25
```

## Practice

1. Write a function named `isEven` that accepts a number.
2. Return `true` when the number is even and `false` otherwise.
3. Test it with at least three different numbers.
4. Write an arrow function that converts minutes to seconds.

## Next lesson

Continue with **Arrays and Objects** to learn how to work with collections and structured data.
