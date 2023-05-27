function Messages(con) {
// Filter out valid contact names
const validContacts = con.filter(contact => /^[A-Za-z]+$/.test(contact));

// Count the number of valid contacts
const validContactsCount = validContacts.length;

// Create the result message based on the number of valid contacts
let result = '';
  if (validContactsCount === 0) {
    result = "No one sent you a message!";
  } else if (validContactsCount === 1) {
    result = `${validContacts[0]} sent you a message!`;
  } else if (validContactsCount === 2) {
    result = `${validContacts[0]} and ${validContacts[1]} sent you a message!`;
  } else {
    const otherContactsCount = validContactsCount - 2;
    result = `${validContacts[0]}, ${validContacts[1]} and ${otherContactsCount} others sent you a message!`;
  }

  return result;
}

console.log(Messages(["Stanley", "Keanu", "Roger", "Clarke"])); // Output: Stanley, Keanu and 2 others sent you a message!
console.log(Messages(["Stanley", "Geralt", "Triss"])); // Output: Stanley, Geralt and Triss sent you a message!
console.log(Messages(["*random penguin*"])); // Output: No one sent you a message!
