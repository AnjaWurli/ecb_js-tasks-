# Day 4

## JS Magic under the hood

```js
console.log("String".toLowerCase());
// That's what happens under the hood console.log(new String("String").toLowerCase())
```

## Limits of Variables and Arrays

### Variables

Variables cannot be grouped logically. Each variable is for itself. The following pattern quickly becomes unmanageable with multiple users.

```js
const firstName = "John"; // new String("John") -> String API
const surName = "Doe";
const age = 28;
```

### Arrays

Array's are a much better approach but it's not so easy to access a specific value cause you need to know which index the element has.

```js
const user1 = ["John", "Doe", 28];
conosle.log(user1[1]); // You need to know about the index to get a value
```

## Introduction to Object literals (Object initializer)

[Object literals (aka Object initializer)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer) are a better approach to define data. Each entry of an object contains a key and a value.

```js
const v = {
  firstName: "John",
  surName: "Doe",
  age: 28,
};
```

### Get data from object literal

You can access a value by using the [`Property accessors` (aka Member Access Operator)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Property_Accessors)

```js
console.log(userObj.surName);
```

### Set data of object literal

Use the same syntax as for reading an entry and extend it with the assignment operator to write a new value or overwrite an existing one.

```js
// Override an entry
userObj.surName = "Mc Cool";

// Add new entry
userObj.city = "Hamburg";
```

## Using Methods

You can assign a function as a value to an object literal entry. Technically this is also called as a `method`.

```js
const userObj = {
  firstName: "John",
  surName: "Doe",
  age: 28,
  // This is a method
  welcomeUser: function () {
    const fullName = userObj.firstName + " " + userObj.surName;
    console.log("Welcome " + fullName);
  },
};
```

### This references the object itself

To avoid renaming errors it's a better approach to use the this keyword instead of the variable name to reference to the current object.

```js
const userObj = {
  firstName: "John",
  surName: "Doe",
  age: 28,
  // This is a method
  welcomeUser: function () {
    const fullName = this.firstName + " " + this.surName;
    console.log("Welcome " + fullName);
  },
};
```

### Structure your code with object literals

#### Before

```js
let result = 0;

function add(a) {
  return (result += a);
}

function sub(a) {
  return (result -= a);
}

function multiply(a) {
  return (result *= a);
}

function divide(a) {
  return (result /= a);
}

function log() {
  console.log(result);
}

function reset() {
  return (this.result = 0);
}
```

#### After

```js
const Calculator = {
  result: 0,
  add: function (a) {
    return (this.result += a);
  },
  sub: function (a) {
    return (this.result -= a);
  },
  multiply: function (a) {
    return (this.result *= a);
  },
  divide: function (a) {
    return (this.result /= a);
  },
  log: function () {
    console.log(this.result);
  },
  reset: function () {
    return (this.result = 0);
  },
};
```

## Deep Nesting

Objects could be deep nested.

```js
const userObj = {
  firstName: "John",
  surName: "Doe",
  age: 28,
  family: {
    partner: {
      firstName: "Lisa",
      surName: "Doe",
      age: 29,
      areMarried: true,
    },
  },
};

console.log(userObj.family.partner.firstName);
```

## Loop over Objects

You can not access object entries like array's by index. There also does not exist a length property

```js
console.log(userObj[0]); // undefined
console.log(userObj.length); // undefined
```

This means a normal for loop will not work but you can use a [for in loop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in) instead

```js
for (let entry in userObj) {
  console.log(userObj[entry].firstName);
}
```

## Combine arrays with Object literals to manage large data structures

```js
const users = [
  {
    firstName: "John",
    surName: "Doe",
    age: 28,
  },
  {
    firstName: "Maria",
    surName: "Paul",
    age: 35,
  },
];
```

## Convert objects to arrays

The build methods for Object literals in JavaScript are very limited. A common use case is to convert object literals into arrays.

- [Object.keys()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)
- [Object.values()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values)
- [Object.entries()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries)

## Truthy / Falsy values

- [Read more about Truthy in JS](https://developer.mozilla.org/en-US/docs/Glossary/Truthy)
- [Read more about Falsy in JS](https://developer.mozilla.org/en-US/docs/Glossary/Falsy)

```js
// "" === false
const userName = "";

// if (userName.length > 0)
if (userName) {
  console.log("Yep");
} else {
  console.log("Nope");
}

// 0 === false
let sum = "0";

if (sum > 0) {
  console.log("Sum", "Yep");
} else {
  console.log("Sum", "Nope");
}

// 0 === false
// "0" === true
// 1 === true
// -1 === true

// "" === false
// "a" === true

// false === false
// true === true

// undefined === false
// null === false
```
