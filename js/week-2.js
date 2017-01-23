//TASK 1 
var a = 3;
var b = 5;
var c;

alert("var a = 3;nvar b = 5;\nvar c;\n----------\n\n" +
    "a + b = " + (a + b) + "\n" +
    "a - b = " + (a - b) + "\n" +
    "a * b = " + (a * b) + "\n" +
    "a / b = " + (a / b) + "\n" +
    "a % b = " + (a % b) + "\n" +
    "(a += b): " + (a += b) + "\n" +
    "(a -= b): " + (a -= b) + "\n" +
    "(a *= b): " + (a *= b) + "\n" +
    "(a /= b): " + (a /= b) + "\n" +
    "(a %= b): " + (a %= b) + "\n" +
    "(a == b): " + (a == b) + "\n" +
    "(a != b): " + (a != b) + "\n" +
    "(a > b): " + (a > b) + "\n" +
    "(a < b): " + (a < b) + "\n" +
    "(!a && !c): " + (!a && !c) + "\n" +
    "(!a || !c): " + (!a || !c) ); 

//TASK 2 
var first_name = "Trang";
var last_name = "Ho-Nguyen";
var email = "hong0066@algonquinlive.com";
var output = "My name is" + " " + first_name + " " + last_name + "." + " " + "You can contact me at" + " " + email + ".";
alert(output);

//TASK 3 

var total;

var numbers = [
    Math.floor(Math.random() * (200 - 100) + 100), 
    Math.floor(Math.random() * (200 - 100) + 100), 
    Math.floor(Math.random() * (200 - 100) + 100), 
    Math.floor(Math.random() * (200 - 100) + 100), 
    Math.floor(Math.random() * (200 - 100) + 100)
];

var sum = numbers[0] + numbers[4];
if (sum % 2 == 0) {
    total = "This is an even number.";
} else {
    total = "This is an odd number.";
}

var output = numbers[0] + " + " + numbers[4] + " = " + sum + "\n" +
    total;
alert(output);
