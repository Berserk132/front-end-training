// Question 1
// Write a program that allows the user to enter a number then print it.
let num1 = 5; // Replace with user input
if (typeof num1 === "number") {
    console.log(num1);
}

// Question 2
// Write a program that takes a number from the user then print yes if that number can divide by 3 and 4 at the same time, otherwise print no.
let num2 = 12; // Replace with user input
if (num2 % 3 === 0 && num2 % 4 === 0) {
    console.log("yes");
} else {
    console.log("no");
}

// Question 3
// Write a program that allows the user to insert 2 integers then print the max.
let num3a = prompt("Enter first number");
let num3b = prompt("Enter second number");
if (num3a > num3b) {
    console.log(num3a);
} else {
    console.log(num3b);
}

// Question 4
// Write a program that allows the user to insert an integer then print negative if it is negative, otherwise print positive.
let num4 = prompt("Enter a number");
if (num4 < 0) {
    console.log("Negative");
} else {
    console.log("Positive");
}

// Question 5
// Write a program that takes 3 integers from the user then prints the max element and the min element.
let num5a = 5, num5b = 6, num5c = 1; // Replace with user input
let max = num5a, min = num5a;
if (num5b > max) max = num5b;
if (num5c > max) max = num5c;
if (num5b < min) min = num5b;
if (num5c < min) min = num5c;
console.log(max + " is the max and " + min + " is the min");

// Question 6
// Write a program that allows the user to insert an integer number then check if a number is even or odd.
let num6 = 6; // Replace with user input
if (num6 % 2 === 0) {
    console.log("Even");
} else {
    console.log("Odd");
}

// Question 7
// Write a program that takes a character from the user then print vowel if it is a vowel char, otherwise print consonant.
let char7 = 'a'; // Replace with user input
if (char7 === 'a' || char7 === 'e' || char7 === 'i' || char7 === 'o' || char7 === 'u' ||
    char7 === 'A' || char7 === 'E' || char7 === 'I' || char7 === 'O' || char7 === 'U') {
    console.log("Vowel");
} else {
    console.log("Consonant");
}

// Question 8
// Write a program that allows the user to enter a number then print all numbers from 1 to that number.
let num8 = 5; // Replace with user input
let i8 = 1;
while (i8 <= num8) {
    console.log(i8);
    i8++;
}

// Question 9
// Write a program that allows the user to insert an integer then print a multiplication table up to 12.
let num9 = 5; // Replace with user input
let i9 = 1;
while (i9 <= 12) {
    console.log(num9 * i9);
    i9++;
}

// Question 10
// Write a program that allows the user to enter a number then print all even numbers starting from 1 to the user entered number.
let num10 = 10; // Replace with user input
let i10 = 1;
while (i10 <= num10) {
    if (i10 % 2 === 0) {
        console.log(i10);
    }
    i10++;
}

// Question 11
// Write a program that allows the user to enter two numbers and print the second number raised to the power of the first number.
let base = 2, exponent = 3; // Replace with user input
let result11 = 1, i11 = 0;
while (i11 < exponent) {
    result11 *= base;
    i11++;
}
console.log(result11);

// Question 12
// Write a program to enter marks of five subjects and calculate total, average, and percentage.
let mark1 = 60, mark2 = 70, mark3 = 68, mark4 = 76, mark5 = 92; // Replace with user input
let total12 = mark1 + mark2 + mark3 + mark4 + mark5;
let average12 = total12 / 5;
let percentage12 = (total12 / 500) * 100;
console.log("Total: " + total12 + ", Average: " + average12 + ", Percentage: " + percentage12 + "%");

// Question 13
// Write a program to input the month number and print the number of days in that month.
let month = 10; // Replace with user input
if (month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12) {
    console.log("31 days");
} else if (month === 4 || month === 6 || month === 9 || month === 11) {
    console.log("30 days");
} else if (month === 2) {
    console.log("28 or 29 days");
} else {
    console.log("Invalid month");
}
