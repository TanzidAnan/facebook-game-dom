// 4. Checking if it's an Array
// Instructions:

// Create different variables, each containing either an array or a non-array value.

// Now use isArray to check if each variable is an array.

// Print a message to the console indicating whether each variable is an array or not.

const number = [45, 545, 87, 96, 78, 32,74];
const arrayData=(Array.isArray(number));
if(arrayData ==true){
    console.log('indicating whether each variable is an array')
}
else{
    console.log('not a number')
}