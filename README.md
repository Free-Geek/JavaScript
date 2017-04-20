# Introduction to Programming with JavaScript

## Table of Contents

* [Notes](#notes)

## Curriculum

### Notes

* We'll be using an free, online tool to run our code for us called [repl.it](https://repl.it/languages/javascript). On the left is a place to write your code and on the right is the *console* which will show us the output of our programs.
* Something we'll be using pretty regularly is `console.log()` - it looks pretty fancy, but all it does is print that's put in the parenthesis to the console.
* JavaScript is case sensitive and cares about punctuation. `heyThere`, `HeyThere`, `hey_there`, and `Hey_There` are all different to JavaScript.

### Quick Code Facts

Comments are great to add notes to code. You can tell other programmers how to use your programs or even remind yourself what you were thinking when your wrote the code initially. To add a comment, you'll start a line with `//` and everything after that on the same line with be a comment.

``` javascript
// This is a comment in JavaScript
// I really want the console to print "Hello World!"
console.log("Hello World!");
```

We'll be using three *data types* in this class: numbers, strings, and booleans. You'll also see a fourth type called `undefined` but you can ignore that as we're not going to be talking about it today.

``` javascript
// Numbers are pretty obvious
42
// We don't use commas for big numbers
10000000
// Make decimals by adding a period
3.11
// Strings are characters that we put in quotes
// Either single quotes or double quotes
"Hello World!"
'Hello World!'
// When a number is in quotes, it's treated as a string
'3.11'
"42 is my favorite number."
// Booleans are data types that represent true or false values
// They don't use quotes or capital letters
true
false
// Ignore:
undefined
```

We'll also be using a number of keywords that are reserved by JavaScript and serve special purposes. The ones we'll be using are: `function`, `var`, `while`, `if`, `else`, `for`, and `return`. JavaScript expects you to use these a certain way - if you don't JavaScript *throws an error* which means it complains about your code.

Cool, let's start coding!

### Old Enough

__User Story:__ Your boss comes into your office and tells you that the video game your company is developing is a little too "advanced" for kids under the age of 13. Your boss is putting you in charge of creating a program that checks the age of the user to determine if they are old enough to be playing the game.

Where do you start? Well, math is an important part of programming so JavaScript gives you most of the standard tools for dealing with numbers in the form of *operators* - symbols that take one or more inputs and returns an output.

``` JavaScript
// These return numbers
4 + 2 // 6 - Addition
4 - 2 // 2 - Subtraction
4 * 2 // 8 - Multiplication
4 / 2 // 2 - Division

// These return booleans
4 > 2  // True  - Greater Than
4 < 4  // False - Less Than
4 >= 8 // False - Greater Than or Equal
4 <= 4 // True  - Less Than or Equal
4 == 4 // True  - Equal
4 != 2 // True  - Not Equal
```

__Warning:__ `==` is equals, not `=`. You need both equal signs!

So with this knowledge, you have a pretty good base! Let's run our first real program:

``` javascript
console.log(12 >= 13);
console.log(13 >= 13);
console.log(14 >= 13);
```

That works - email that over to your boss and head out to lunch! When you get back however, your boss will probably have emailed you back with some "constructive criticism." You boss was hoping to have it give a little more feedback, maybe with some text that displays in the console that lets gamers know if they play this or not. It was suggested that the program have three outputs: if the gamer is under 13 we should tell them to go away, else if the gamer is 13 we should congratulate them for finally being old enough to play, else we should invite the game into the game!

Luckily JavaScript has just the thing! Remember those `if` and `else` keywords? They were created to do *conditionals* - blocks of code that run when something is true or not. Let's start with a simple example:

``` JavaScript
if (12 < 13) {
  // This will run because 12 is less than 13
  console.log("Hey, get out of here!");
} else {
  // This won't run because the first block ran
  console.log("Come on in!");
}
```

We can even stack these!

``` JavaScript
if (12 < 13) {
  // This will run because 12 is less than 13
  console.log("Hey, get out of here!");
} else if (12 == 13){
  // This won't run because the first block ran
  console.log("You're old enough for this game now!");
} else {
  // This also won't run because the first block ran
  console.log("Come on in!");
}
```

This works pretty good now! Your boss is very impressed. Bosses are never satisfied though, so you have some new feedback:

* Those numbers are going to get used a lot in the game. It would be super cool if you could update the number in one place and it updated the whole code base.
* Speaking of the whole code base, it would be nice if your company could use this code in several games without having to rewrite it over and over again.

Just like in algebra (think `x + 2 = 4`), JavaScript has a way where you can use symbols to represent values using *variables* and the special `var` keyword:

``` javascript
var x = 2;
var y = 4;
console.log(4 * 2);
// 8
```

So we'll just replace the numbers with variables and that way we can keep referencing the variable throughout our code. Variable names can use letters, numbers, and underscores and shouldn't be wrapped in quotes (or JavaScript will think it's a string).

``` JavaScript
var age = 12;
var required = 13;

if (age < required) {
  console.log("Hey, get out of here!");
} else if (age == required){
  console.log("You're old enough for this game now!");
} else {
  console.log("Come on in!");
}
```

Lastly, we just need to wrap the code in a *function* so it can be reused. A function is just a block of reusable code that takes *parameters* as inputs (just a fancy name for variables really) and *returns* a value. You can give a function a name so it's easy to *call* - or invoke - later in your code by writing the function name followed by parenthesis containing the parameters (if there are any). That's a lot of information, so lets take a look at a super simple function:

``` JavaScript
function add(x, y) {
  return x + y;
}

add(2, 4); // 6
```

In the above example the function is named "add" and has two parameters: "x" and "y". The function returns the sum of "x" and "y". To call it, we just write "add" with parenthesis around the values we want to input into the function. Here's an even simpler example:

``` JavaScript
function six() {
  return 6;
}

six(); // 6 - This function is pretty useless
```

So we're going to make our two variables into parameters and then copy/paste the rest of the code into a function called "oldEnough":

``` JavaScript
function oldEnough(age, required) {
  if (age < required) {
    console.log("Hey, get out of here!");
  } else if (age == required){
    console.log("You're old enough for this game now!");
  } else {
    console.log("Come on in!");
  }
}

oldEnough(12, 13);
oldEnough(13, 13);
oldEnough(25, 18);
```

And with that you can call it a day! Heck, I hear your boss is even thinking of promoting you!
