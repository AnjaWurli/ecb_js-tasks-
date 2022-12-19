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
