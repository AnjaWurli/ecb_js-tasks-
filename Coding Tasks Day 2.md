# Coding Tasks Day 2

## 01) Logical Operators

### 01.1) Compare two conditions

#### Given:

```js
console.log(25 / 5); // Result: 5
console.log(50 / 10); // Result: 5
```

#### Coding Task:

Create one console.log that returns true when both division results are equal to 5

### 01.2) The opposite value

#### Given:

```js
let isActive = true;
```

#### Coding Task:

Use the logical not Operator to override the isActive variable value with the opposite of it's current value.

## 02) Functions

### 02.1) Create a welcome function

```js
function welcome() {}

console.log(welcome());
```

#### Coding Task:

- [ ] Create a function that returns a welcome message to a user. Use two parameters. The result should be dynamic. Hi Max, Welcome Frank, Servus Jan.
  - [ ] Ensure that both parameters exists and they are strings. If not just return "Hello Guest.".

## 02) Functions

### 02.2) Firstname lastname

#### Given:

```js
let fullName = "";

function setFirstName() {}

function setLastName() {}

function getFullName() {}

console.log(getFullName());
```

#### Coding Task:

- [ ] Create two functions setFirstName, setLastName to set the first and last name to the fullName variable.
  - [ ] Add a parameter on both, and check if the parameter exists and is a string.
  - [ ] Check if the fullName is empty. If it's empty, create a console.log with a warning.
- [ ] Create one function getFullName that returns the fullName variable.
  - [ ] Check if the fullName is empty.
  - [ ] Ensure that setFirstName and setLastName was executed before.
