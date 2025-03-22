const reverseString = function(string) {
    let strArray = string.split("");
    let reverseArray = strArray.reverse();
    let reverseString = reverseArray.join("");
    return reverseString

};

// Do not edit below this line
module.exports = reverseString;
