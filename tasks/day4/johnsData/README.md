# johnsData function

Create an Object that contains information about John Doe.

## Todos

- [ ] add the following properties to `johnsData`:
  - [ ] `firstName` and assign the string `John` as the value.
  - [ ] `surName` and assign the string `Doe` as the value.
  - [ ] `age` and assign the number `28` as the value.
  - [ ] `city` and assign the string `Hamburg` as the value.
  - [ ] `children` and assign an array with the values `Mia` and `Fynn`.
  - [ ] `hobbies` and assign an array with the values `Football` and `Playing guitar`.
- [ ] create a function fullName that returns John's fullName
  - [ ] Access the johnsData object and use the properties firstName and surName to create his full name.
  - Result: John Doe
- [ ]create a function changeJohnsData to change any property of the object
  - [ ] The function should have two parameters
    - propName = the name of the object property we like to change
    - propValue = the new value we like to set
  - [ ] Check if there exists any property that matches to the passed in argument for the propName parameter.
    - [ ] If not return a console.log("Sorry the passed in argument doesn't exists as a property in the johnsData object")
  - [ ] Get property by the passed-in argument `propName` and assign the new value from passed in argument `propValue`.

<details>
 <summary>Tip</summary>
 - [Property accessors aka Computed Member Access Operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Property_Accessors)
</details>
