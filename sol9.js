const cities = ["Nagpur", "Bhopal", "Delhi", "Udaipur"];
const userInput = prompt("Enter a city:");
const index = cities.indexOf(userInput);

if (index !== -1) {
    console.log(`Index of ${userInput} in the array: ${index}`);
} else {
    console.log("Not Found");
}
