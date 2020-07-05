export {};

function tidyUpString(str) {
  return str
    .trim()
    .toLowerCase()
    .replace("/", "");
}

// You are allowed to edit this function
function capitalise(str) {
  return (str.substr(0, 1).toUpperCase()).concat(str.substring(1, str.length));
}

const mentors = ["/Daniel ", "irina ", " Gordon", "ashleigh "];

let mentorsTidy = mentors.map(mentor => capitalise(tidyUpString(mentor))); // You are allowed to edit this line

console.log(mentorsTidy); // Expected output: ["Daniel", "Irina", "Gordon", "Ashleigh"]
