/* TASK 1: Random Takeaway Order

Your task is to write a JavaScript function that creates a random takeaway order message.

Create a function called createOrder that takes two inputs:
- name (a string)
- deliveryStatus (a string: "on time" or "late")

Inside the function:
- Choose ONE random food item from an array of 10 possible options
- Capitalize the first letter of the name and the food
- If deliveryStatus is "on time", set delivery time to "30 minutes"
- If deliveryStatus is "late", set delivery time to "45 minutes"
- If it's anything else, set delivery time to "an unknown time"
- Return a message like: "Hi Luca! Your Pizza will arrive in 30 minutes!"

Your finished string must be RETURNED from the function. not console logged inside the function!

Example Outputs
createOrder("luca", "on time");      // "Hi Luca! Your Sushi will arrive in 30 minutes!"
createOrder("tina", "late");         // "Hi Tina! Your Burger will arrive in 45 minutes!"
createOrder("milo", "unknown");      // "Hi Milo! Your Pasta will arrive in an unknown time!"
*/

// possible random food options
const menuItems = [
  "burger",
  "pizza",
  "sushi",
  "ramen",
  "tacos",
  "fries",
  "burrito",
  "salad",
  "sandwich",
  "pasta",
];

// const randoNator = Math.floor(Math.random() * menuItems.length);
// console.log(randoNator);
// console.log(menuItems);

function createOrder(name, deliveryStatus) {
  name = name.charAt(0).toUpperCase() + name.slice(1);
  const randoNator = Math.floor(Math.random() * menuItems.length);
  if (deliveryStatus === "on time") {
    return `Hi ${name}! Your ${menuItems[randoNator]} will arrive in 30 minutes!`;
  } else if (deliveryStatus === "late") {
    return `Hi ${name}! Your ${menuItems[randoNator]} will arrive in 45 minutes!`;
  } else {
    return `Hi ${name}! Your ${menuItems[randoNator]} will arrive in an unknown time!`;
  }
}

console.log(createOrder("luca", "on time")); // "Hi Luca! Your Sushi will arrive in 30 minutes!"
console.log(createOrder("tina", "late")); // "Hi Tina! Your Burger will arrive in 45 minutes!"
console.log(createOrder("milo", "unknown")); // "Hi Milo! Your Pasta will arrive in an unknown time!"

// TODO Refactor: Can make the string that are the same into a variable.
// const message = `Hi ${name}! your ${menuItems[randoNator]} will arrive in}`;
// const message will be used for the if and else, and then I will use the ternary in the first statement and do something like
// message += 30 or message += 40, else will just be message += " an unknown" and outside the if else, I will just add another
// message += " minutes" OR return message += " minutes" this should in theory concatenate correctly and just append whatever
// passes the the if / else check and return.
console.log("Refactored function: ");
function createOrderRefactored(name, deliveryStatus) {
  name = name.charAt(0).toUpperCase() + name.slice(1);
  const randoNator = Math.floor(Math.random() * menuItems.length);
  if (deliveryStatus === "on time" || deliveryStatus === "late")
    return `Hi ${name}! Your ${menuItems[randoNator]} will arrive in ${
      deliveryStatus === "on time" ? 30 : 40
    } minutes!`;
  else {
    return `Hi ${name}! Your ${menuItems[randoNator]} will arrive in an unknown time!`;
  }
}

console.log(createOrderRefactored("luca", "on time"));
console.log(createOrderRefactored("tina", "late"));
console.log(createOrderRefactored("luca", "unknown"));

/* TASK 2: Password Strength Checker Assignment

Your task is to write a JavaScript function that checks how strong a user's password is.

Create a function called checkPasswordStrength that takes one input: password (a string). It should return one of the following:

"This password has been used before. Please choose a new one." – if the password is in the usedPasswords array

"Too weak" – if the password is less than 6 characters OR doesn't include at least ONE of these symbols: &, %, !, ?

"Strong" – if the password is more than 8 characters AND includes at least TWO of these symbols: &, %, !, ?    (two unique symbols)

"Medium" – for any other case


Your finished string must be RETURNED from the function. not console logged inside the function!

// Example Outputs
checkPasswordStrength("abc");             // "Too weak"
checkPasswordStrength("password123!");    // "This password has been used before. Please choose a new one."
checkPasswordStrength("longpassword?");    // "Medium"
checkPasswordStrength("%myNewPass!");      // "Strong"
*/
const usedPasswords = ["password123!", "helloWorld!", "qwerty&"]; // previously used passwords

// Helper function/arrow function, this will be nested inside the else if to check the count of symbols
// - 1 has to be added, because a string e.g "abc" would still retun 1 since it would count as a string.
// So the - 1 subtracts the "starting string", and subsequent splits on symbols would give the correct count.
// If not, it would look like "abc" had a symbol in it, when it in fact does not, since "abc" is still a string. ~nyan♫
const catGirl = (password, symbol) => password.split(symbol).length - 1;
function checkPasswordStrength(password) {
  if (usedPasswords.includes(password)) {
    return "This password has been used before. Please choose a new one.";
  } else if (password.length < 6) {
    // Nested scope inside the else if to determine if even if it's less than 6 characters long,
    // it will be medium since it contains a special character
    if (
      // password.includes("!") ||
      // password.includes("%") ||
      // password.includes("&") ||
      // password.includes("?")
      catGirl(password, "!") ||
      catGirl(password, "%") ||
      catGirl(password, "&") ||
      catGirl(password, "?")
    ) {
      return "Medium";
    }
    return "To weak";
  } else if (password.length > 8) {
    // Helper arrow function catGirl, it might go ~nyan~♫♫♫
    const catGirlMagic =
      catGirl(password, "!") +
      catGirl(password, "%") +
      catGirl(password, "&") +
      catGirl(password, "?");
    if (catGirlMagic >= 2) {
      return "Strong";
    }
    return "Medium";
  } else return "Medium";
}
console.log("\n");
console.log(checkPasswordStrength("abc")); // "Too weak"
console.log(checkPasswordStrength("helloWorld!")); // "This password has been used before. Please choose a new one."
console.log(checkPasswordStrength("ab&c")); // "Medium"
console.log(checkPasswordStrength("longpassword?")); // "Medium"
console.log(checkPasswordStrength("%myNewPass!")); // "Strong"
// Sanity check
console.log(catGirl("!myNewPass%", "%"));

// After hints were released
// Using a for loop would shorten this down a lot (But we haven't covered this yet).
// for(count = 0; count < symbols.length; ++count) etc etc etc
function weCountCats(password) {
  let count = 0;

  if (password.includes("!")) {
    ++count;
  }
  if (password.includes("%")) {
    ++count;
  }
  if (password.includes("&")) {
    ++count;
  }
  if (password.includes("?")) {
    ++count;
  }
  return count;
}

console.log(weCountCats("!?embolater%&"));
// My first solution still works as intended, implementing this version is possible, but having it sketched out is
// good enough for me ~nyan~
