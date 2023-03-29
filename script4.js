// Create a program that asks the user to enter their name and age. If the user’s age is greater than or equal to 18, display a message to the console that says “Welcome [name], you are an adult”. If the user’s age is less than 18, display a message that says “Sorry [name], you are not yet an adult”.


let name = prompt("Enter your name : ");

let age_ = prompt("Enter your age : ");

if (age_ >= 18) {
    document.write("Welcome  " + name + ", you are an adult :) ");
} else {
    document.write("Sorry " + name + ", you are not yet an adult");
}

