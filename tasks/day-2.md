# Tasks Day 2


## Gross Price Function

Implement a `calcGrossPrice` function.

- [ ] The first parameter is the net price as integer number
- [ ] The second parameter is the tax rate as float number
- [ ] The function should return the gross price

```js
// TODO: implement calcGrossPrice function

const result1 = calcGrossPrice(20, .19);
// result1 should be 23.8

const result2 = calcGrossPrice(40, .16);
// result2 should be 46.4
```


## Add Positive Function

Implement a `addPositive` function.

- [ ] The function has two parameters which will always be numbers
- [ ] The function should add the two numbers and return the result
- [ ] If any of the arguments is a negative number, it should be handled as a positive number (see example code)

```js
// TODO: Implement the addPositive function

const result1 = addPositive(2, 3);
// result1 should be 5

const result2 = add(3, -5);
// result2 should be 8

const result2 = add(-1, -8);
// result2 should be 9
```

## Foo Bar Function

Implement a `fooBar` function.

- [ ] The only argument is a string
- [ ] When the value of the argument is "foo", the function should return the string "bar"
- [ ] When the value of the argument is "bar", the function should return the string "foo"
- [ ] When the value of the argument is any other string, the function should return the string "foobar"

```js
// TODO: Implement fooBar function

const result1 = fooBar("foo");
// result1 should be "bar"

const result2 = fooBar("bar");
// result2 should be "foo"

const result3 = fooBar("xxx");
// result3 should be "foobar"

const result4 = fooBar("aa");
// result4 should be "foobar"
```
