// Display a prompt asking the user to list froyo flavors, separated by commas.
const message = prompt("Please list froyo flavors(vanilla, strawberry, chocolate, coffee) separated by comma:");

// Create a function to count the flavors
const countFlavors = (flavorArr) => {
   //Create an object to store the count of each flavor 
  let flavorNumber = {};
 //Create a loop through array of flavors
  for (let i = 0; i < flavorArr.length; i++) {
    // Trim whitespace from each flavor
    let flavor = flavorArr[i].trim();

    // Check if flavor is in the object and update the count
    if (flavor in flavorNumber) {
      flavorNumber[flavor]++;
    } else {
      flavorNumber[flavor] = 1;
    }
  }
// Display the count of each flavor
  console.log(flavorNumber);
  return flavorNumber;
}

// Function to handle user input and display flavors count
const messageForFlavors = () => {
  if (message) {
    // Convert the user input into array
    let flavorArr = message.split(",");
    // Count the flavors
    countFlavors(flavorArr);
  } else {
    // If user didn't enter anything
    console.log(`Please enter the flavors`);
  }
}
//Call the function 
messageForFlavors();
