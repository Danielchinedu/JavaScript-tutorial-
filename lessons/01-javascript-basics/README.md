# 01 — JavaScript Basics

This lesson introduces the core building blocks of JavaScript.

## Learning objectives

By the end of this lesson, you should be able to:

- Declare variables with `const` and `let`.
- Identify common JavaScript data types.
- Use arithmetic and comparison operators.
- Convert simple values to strings or numbers.
- Write small expressions and predict their output.

## 1. Variables

Prefer `const` when a binding will not be reassigned. Use `let` when it needs to change.

```js
const name = "Daniel";
let score = 10;

score += 5;
console.log(name, score);
```

## 2. Common data types

```js
const username = "Ada";       // string
const age = 20;               // number
const isStudent = true;       // boolean
const nothing = null;         // null
let notAssigned;              // undefined
const skills = ["HTML", "JS"]; // array
const user = { name: "Ada" }; // object
```

## 3. Operators

```js
const total = 10 + 5;
const isAdult = age >= 18;
const same = 5 === "5"; // false: strict equality checks type too
```

## Practice

1. Create a `const` for your name and a `let` for your current score.
2. Increase the score by 10.
3. Create a boolean that says whether the score is at least 50.
4. Log all three values.

## Next lesson

Continue with **Functions** to learn how to package reusable logic.
