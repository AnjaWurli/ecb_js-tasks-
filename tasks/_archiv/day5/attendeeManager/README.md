# attendeeManager function

## Given

- an array named attendees
- a function skelton called addAttendee
- a function skelton called removeAttendee
- a function to reset the array

Todos

- addAttendee function
  - [ ] Implement functionality to add a new attendee name to attendees array.
  - [ ] It should not be possible to add the same name twice.
    - [ ] If a name was passed in twice a console.log("Attendee name already exists.") should be generated.
- removeAttendee function
  - [ ] Implement functionality to remove an attendee by pass in his name as an argument.
    - e.G. attendees = ["Max", "Maria"] removeAttendee("Maria") will remove Maria.
  - [ ] There should exist a check if the passed in argument matches to a member of the attendees array.
    - [ ] If it's not a valid member generate a console.log("The passed in name doesn't exist in the attendees array").

<details>
 <summary>Tip</summary>
 - [Array Splice](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)
 - [Array Slice](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)
 - [Array includes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)
 - [Array push](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push)
 - [Array findIndex](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex)
</details>
