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
