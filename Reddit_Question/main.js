// William Keilsohn
// July 25 2025

// Based on a Reddit post about finding a key word.

var your_drink;
var reverse = function(s) {
    return s.split("").reverse( ).join("");
}

var bartender = {
    str1: "ers",
    str2: reverse("rap"),
    str3: "amet",
    request: function(preference) {
        return preference + ".Secret word: " + this.str2 + this.str3 + this.str1;
    }
};

// your_drink = "Brandy" // Without explicitly defining the value of the variable, you will get an undefined error.

console.log(bartender.request(your_drink)) // Console.log added for Node.js

// parameters. 