export {};

/**
 * Loop over the array and for each alive writer print out the following:
 * "Hi, my name is {firstName} {lastName}. I am {age} years old, and work as a {occupation}."
 */

const writers = [
  {
    firstName: "Virginia",
    lastName: "Woolf",
    occupation: "writer",
    age: 59,
    alive: false
  },
  {
    firstName: "Zadie",
    lastName: "Smith",
    occupation: "writer",
    age: 41,
    alive: true
  },
  {
    firstName: "Jane",
    lastName: "Austen",
    occupation: "writer",
    age: 41,
    alive: false
  },
  {
    firstName: "Bell",
    lastName: "Hooks",
    occupation: "writer",
    age: 64,
    alive: true
  }
];

var i;
for (i=0; i<writers.length; i++) {
  if (writers[i].alive === true) {
    console.log("Hi, my name is " + writers[i].firstName + " " + 
    writers[i].lastName + ". I am " + writers[i].age + 
    " years old, and work as a " + writers[i].occupation + ".");
  }
}
