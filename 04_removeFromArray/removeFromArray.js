/* 
1 - Create a variable to track whatś out of the array
2 - A loop to check if anything in the array = to anythin in the variable
3 - remove the equal values from the array
4 - return only the new array


*/

const removeFromArray = function(array, ...args) {
   let newArray = [];
   for (let i = 0; i < array.length; i++) {
       if (!args.includes(array[i])) {
           newArray.push(array[i]);
       }
   }
   return newArray;
};


// Do not edit below this line
module.exports = removeFromArray;
