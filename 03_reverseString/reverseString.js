
const reverseString = function(str) {
    let split = str.split("");
    let reverseSplit = split.reverse();
    let join = reverseSplit.join("");

    return join;
}


/*const reverseString = function(reverse) {
if (reverse === "hello") {
     return "olleh";
} else if (reverse === "hello there") {
    return "ereht olleh";
} else if (reverse === "123! abc!") {
    return "!cba !321"
} else if (reverse === "") {
    return "";
}

};*/


// Do not edit below this line
module.exports = reverseString;
