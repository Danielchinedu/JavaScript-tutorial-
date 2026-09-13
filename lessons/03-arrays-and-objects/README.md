# 03 — Arrays and Objects

Arrays store ordered collections. Objects represent related data using named properties.

## Arrays

```js
const fruits = ["apple", "banana", "orange"];

console.log(fruits[0]);
fruits.push("mango");
console.log(fruits.length);
```

Useful methods to learn next include `map`, `filter`, `find`, `some`, and `reduce`.

## Objects

```js
const student = {
  name: "Daniel",
  level: 300,
  department: "Computer Science",
};

console.log(student.name);
```

Properties can also be accessed with bracket notation:

```js
console.log(student["department"]);
```

## Practice

1. Create an array containing five technologies you want to learn.
2. Add one more technology with `push`.
3. Create an object representing a student with a name, level, and course.
4. Print one property from the object.
5. Use `map` to create a new array containing the lengths of the technology names.

## Next lesson

Continue with **DOM and Browser APIs** to connect JavaScript to a web page.
