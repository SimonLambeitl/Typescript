var input = "";
if (typeof input !== "string") {
    console.log(input + ' is not a string');
}
else {
    var rem_diacritic = input.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    var rem_alphanum = rem_diacritic.replace(/[^0-9a-z]/gi, ''); //removes all non-alphanumeric characters from input
    var lower = rem_alphanum.toLowerCase(); // converts the string to lower case
    //console.log(lower)
    var array = lower.split(''); //converts the string to array
    var reversed = array.reverse(); // reverts order of given array
    var arr_string = reversed.join(''); //converts array to string
    if (rem_alphanum === "") {
        console.log('Empty string is a palindrome');
    }
    else {
        if (arr_string === lower) {
            console.log(lower + ' is a palindrome');
        }
        else {
            console.log(lower + ' is not a palindrome');
        }
    }
} //compares input with reversed input;  // check if the input is type of string
