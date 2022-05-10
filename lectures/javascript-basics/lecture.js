// types

const string = 'hello world';
const number = 42;
const boolean = true;


// arrays

const fruits = ['pineapple', 'kiwi'];
fruits.push('banana');
fruits[0]; // 'pineapple'
fruits[0] = "apple"; // ['apple', 'kiwi']
fruits.splice(0, 1); // ['kiwi']

// iterate over arrays

const beatles = ["paul", "john", "ringo", "george"];
beatles.forEach((beatle) => {
  console.log(beatle.toUpperCase());
});

const newBeatles = beatles.map((beatle) => {
  return beatle.toUpperCase();
});
console.log(newBeatles); // ['PAUL', 'JOHN', 'RINGO', 'GEORGE']

// Objects

const student = {
  firstName: "Boris",
  lastName: "Paillard"
};

student['firstName']; // 'Boris'
student.firstName = 'Lulu';
student.age = 18;
delete student.firstName;

// iterate over objects
const keys = Object.keys(student);
keys.forEach((key) => {
  const value = student[key];
  console.log(value);
});

// OR

Object.keys(student).forEach((key) => {
  const value = student[key];
  console.log(value);
});


// functions

const capitalize = (string) => {
  return `${string[0].toUpperCase()}${string.substring(1)}`
};
console.log(capitalize('hello wordl')); // 'Hello world';
