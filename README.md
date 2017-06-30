# Introduction to Programming with JavaScript

## Table of Contents

* [Notes](#notes)

* [Old Enough](#old-enough)
  * [Operators](#operators)
  * [if, else if, and else](#if-else-if-and-else)
  * [Variables](#variables)
  * [Functions](#functions)
  * [Old Enough, Completed](#old-enough-completed)

* [Coins](#coins)
  * [while](#while)
  * [Infinite Loops](#infinite-loops)
  * [Assignment Operators](#assignment-operators)
  * [Coins, Completed](#coins-completed)

* [Count By](#count-by)
  * [String Concatenation](#string-concatenation)
  * [for](#for)
  * [Increment Operator](#increment-operator)
  * [Count By, Completed](#count-by-completed)

* [All the Code](#all-the-code)

* [Additional Resources](#additional-resources)

## Notes

* We'll be using a free, online tool called [repl.it](https://repl.it/languages/javascript) to run our code. On the left is a place to write code and on the right is the __*console*__ which will show us the output of our programs.
* Something we'll be using pretty regularly is `console.log()` - it looks pretty fancy, but all it does is print what's put in the parenthesis to the console.
* JavaScript is case sensitive and cares about punctuation. `heyThere`, `HeyThere`, `hey_there`, and `Hey_There` are all different to JavaScript.
* Comments are great to add notes to code. You can tell other programmers how to use your programs or even remind yourself what you were thinking when your wrote the code initially. To add a comment, you'll start a line with `//` and everything after that on the same line with be a comment.

``` javascript
// This is a comment in JavaScript
// I really want the console to print "Hello World!"
console.log("Hello World!");
```

* We'll be using three __*data types*__ in this course: numbers, strings, and booleans. You'll also see a fourth type called `undefined` but you can ignore that as we're not going to be talking about it today.

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

* We'll also be using a number of keywords that are reserved by JavaScript and serve special purposes. The ones we'll be using are: `function`, `var`, `while`, `if`, `else`, `for`, and `return`. JavaScript expects you to use these a certain way - if you don't JavaScript __*throws an error*__ which means it complains about how you wrote your code.

Cool, let's start coding!

## Old Enough

__User Story:__ Your boss comes into your office and tells you that the video game your company is developing is a little too "advanced" for kids under the age of 13. Your boss is putting you in charge of creating a program that checks the age of the user to determine if they are old enough to be playing the game.

### Operators

Where do you start? Well, math is an important part of programming so JavaScript gives you most of the standard tools for dealing with numbers in the form of __*operators*__ - symbols that take one or more inputs and returns an output.

``` JavaScript
// These return numbers
4 + 2 // 6 - Addition
4 - 2 // 2 - Subtraction
4 * 2 // 8 - Multiplication
4 / 2 // 2 - Division

// These return booleans
4 > 2  // true  - Greater Than
4 < 4  // false - Less Than
4 >= 8 // false - Greater Than or Equal
4 <= 4 // true  - Less Than or Equal
4 == 4 // true  - Equal
4 != 2 // true  - Not Equal
```

__Warning:__ `==` is equals, not `=`. You need both equal signs!

So with this knowledge, you have a pretty good base! Let's run our first real program:

``` javascript
console.log(12 >= 13);
console.log(13 >= 13);
console.log(14 >= 13);
```

That works - email that over to your boss and head out to lunch! When you get back however, your boss will probably have emailed you with some "constructive criticism." Your boss was hoping to have the program give users a little more feedback, maybe with some text that displays in the console to let gamers know if they can play or not. It was suggested that the program have three outputs: if the gamer is under 13 we should tell them to go away, else if the gamer is 13 we should congratulate them for finally being old enough to play, else we should invite the player into the game!

#### TODO

* Try using an operator with two numbers
* Try comparing two strings
* Check if 'A' equals 'a'

### if, else if, and else

Luckily JavaScript has just the thing! Remember those `if` and `else` keywords? They were created to do __*conditionals*__ - blocks of code that run when something is true or not. Let's start with a simple example:

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

#### TODO

* Write an `If...Else` statement where the first block of code runs
* Write an `If...Else If...Else` statement where the second block of code runs

### Variables

Just like in algebra (think `x + 2 = 4`), JavaScript has a way where you can use symbols to represent values using __*variables*__, the special `var` keyword, and the special __*assignment*__ operator `=`:

``` javascript
var x = 2;
var y = 4;
console.log(x * y);
// 8

// To re-assign a variable, you don't need to use the var keyword
y = 3
console.log(x * y);
// 6
```

So we'll just replace the numbers with variables and that way we can keep referencing the variable throughout our code. Variable names can contain letters, numbers, underscores, and dollar signs and shouldn't be wrapped in quotes (or JavaScript will think it's a string).

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

#### TODO

* Create a variable and assign a number to it
* Create a second variable and assign a different number to it
* Create a third variable and assign the sum of the first two numbers to it
* `console.log` the third variable

### Functions

Lastly, we just need to wrap the code in a __*function*__ so it can be reused. A function is just a block of reusable code that takes __*parameters*__ as inputs (just a fancy name for variables really) and __*returns*__ a value. You can give a function a name so it's easy to __*call*__ - or invoke - later in your code by writing the function name followed by parenthesis containing the parameters (if there are any). That's a lot of information, so lets take a look at a super simple function:

``` JavaScript
function add(x, y) {
  return x + y;
}

add(2, 4); // 6
```

In the above example the function is named "add" and has two parameters: "x" and "y". The function returns the sum of "x" and "y". To call it, we just write "add" with parenthesis around the values we want to input into the function. Here's an even simpler example:

``` JavaScript
// 'Declaring' the function
function six() {
  return 6;
}

// 'Calling' the function
six();
```

#### TODO

* Create a function that has one parameter called name
* Make the function `console.log` the parameter
* Call your new function with your name as a string

### Old Enough, Completed

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

## Coins

__User Story:__ With all of that money you made in the gaming industry, you decided you would go off and start your own company. What better industry to go to than finance? Part of the software requires a function that takes a dollar amount and a currency value before returning how many of that currency is within the dollar amount. For instance, if you give the function an amount of $1 and a value of $0.25 the function should return 4 - there are four quarters in a dollar. We don't want to go over though! If you give the function $1.24 and $0.25, it should still return 4 (there are four quarters in $1.24 and not five).

Whelp, we pretty much know how to start! We need a function and we need to to accept two parameters: "amount" and "value". We're going to call the function "coins" because we're using it to determine how many of a certain coin we need.

``` JavaScript
function coins(amount, value) {
  return // We need something here, right?
}
```

Well, we could try math:

``` JavaScript
function coins(amount, value) {
  return amount / value;
}

coins(1.24, .25); // 4.96
```

### while

No, we don't want fractions. We can't have .96 of a quarter! Now is a good time to talk about __*loops*__: loops are blocks of code that get run over and over until they're told to stop. This is that `while` keyword that I was mentioning before. Let's take a quick detour to explain `while` loops before finishing our coins function.

``` JavaScript
var count = 0;
while (count < 3) {
  count = count + 1;
  console.log(count);
}
```

Let's talk out that's going on in the above example:

* We create a variable called "count" and set it to 0
* We start the loop
* We say that while "count" is less than 3, run the following chunk of code
* In the block, we increase "count" by 1
* Then we print "count" (which is now 1)
* When we reach the end of the block, we loop back to the top of the loop
* We check if 1 is less than 3 - yep!
* We increase "count" by 1
* Then we print "count" (which is now 2)
* When we reach the end of the block, we loop back to the top of the loop
* We check if 2 is less than 3 - yep!
* We increase "count" by 1
* Then we print "count" (which is now 3)
* When we reach the end of the block, we loop back to the top of the loop
* We check if 3 is less than 3 - nope!
* The loop ends

#### TODO

* Change the `while` loop so that it counts by two until it gets to 10

Loops are what make programming so great! Computers can just keep looping over and over without a care in the world. What would be really tedious for people is the norm for computers. Let's see how this might work with out coin program:

``` JavaScript
function coins(amount, value) {
  while (value <= amount) {
    value = value + value;
  }
  return value;
}
```

Hm, that's not really right. We need to count the number of coins, keep track of how much those coins equal, and not change "amount" or "value". Whelp, it sounds like we need more variables!

``` JavaScript
function coins(amount, value) {
  var count = 0; // This will keep track of how many coins
  var tally = 0; // This keeps track of the value of the counted coins

  while (value <= amount) {
    value = value + value;
  }

  return value;
}
```

### Infinite Loops

Now we need to increase "count" and "tally" every time we go through the loop! Also, let's start returning count because that's what we're trying to figure out with this function.

``` JavaScript
// DO NOT RUN THIS
function coins(amount, value) {
  var count = 0;
  var tally = 0;

  while (value <= amount) {
    count = count + 1;
    tally = tally + value;
  }

  return count;
}
```

If you were to run the above code, you'd get stuck. This is an example of an __*infinite loop*__ - a loop that never stops because the conditional never evaluates to `false`. That's because "value" and "amount" never change so "value" will always be less than "amount". We need to make one last change to make this function work:

``` JavaScript
function coins(amount, value) {
  var count = 0;
  var tally = 0;

  while (tally + value <= amount) {
    count = count + 1;
    tally = tally + value;
  }

  return count;
}

coins(.50, .25);
```

Let's go over what's happening in the function when we call it with an "amount" of $0.50 and a "value" of $0.25:

* We call the coins function with .50 and .25 as parameters
* amount = .50; value = .25
* We create "count" and "tally" setting them to 0
* amount = .50; value = .25; count = 0; tally = 0
* We start the loop
* We check if `0 + .25 <= .50` - yep!
* We increment count by 1 and tally by .25
* amount = .50; value = .25; count = 1; tally = .25
* We go to the top of the loop
* We check if .`25 + .25 <= .50` - yep!
* We increment count by 1 and tally by .25
* amount = .50; value = .25; count = 2; tally = .50
* We go to the top of the loop
* We check if `.50 + .25 <= .50` - nope!
* We end the loop
* We return count (which is now 2)

### Assignment Operators

Just to tidy things up, we're going to make a small adjustment. JavaScript gives some tools we can make use of right now: `+=`, `-=`, `*=`, and `/=`. These might seem confusing at first, but they're pretty simple:

``` javascript
var x = 0;
x += 5;
console.log(x) // 5

x = x + y
x += y

x = x - y
x -= y

x = x * y
x *= y

x = x / y
x /= y
```

### Coins, Completed

So using these new tools, we can change the code to:

``` JavaScript
function coins(amount, value) {
  var count = 0;
  var tally = 0;

  while (tally + value <= amount) {
    count += 1;
    tally += value;
  }

  return count;
}

coins(.50, .25); // 2
```

All done!

## Count By

__User Story:__ Your kid is learning multiplication (and maybe even coding!) so you thought it would be nice to give the little rugrat a program that lets them input an increment amount and a number of multiples to go up to. It's going to keep looping through multiples until it has looped that number of times - each time printing the result.

### String Concatenation

First thing first, we need to talk about __*string concatenation*__. Don't worry, it's just a fancy phrase for joining strings. In JavaScript, we can just use the `+` operator for this:

``` javascript
var test = "Hello" + " " + "world!";
console.log(test);
// "Hello world!"

test = 42 + " is the answer";
console.log(test);
// "42 is the answer"

test = 4 + "2";
console.log(test);
// "42"

test = 4 + 2;
console.log(test);
// 6
```

Woo! We're all set:

``` javascript
function countBy(incr, num) {
  var count = 0;

  while (count < num) {
    console.log(incr + " x " + count + " = " + count * incr);
    count += 1;
  }
}
```

### for

This is a really common thing to do in programming though: count one by one until you hit a number, doing something each __*iteration*__. It's so common that there's a special kind of loop for this! These are basically the same:

``` javascript

var index1 = 0;
while (index1 < 5) {
  console.log(index1);
  index1 += 1;
}

for (var index2 = 0; index2 < 5; index2 += 1) {
  console.log(index1);
}
```

A `for` loop takes three sections separated by semicolons followed by a block of code. The three sections in the above example are:

* `var index2 = 0`: this is code to be run before the loop starts
* `index2 < 5`: this is the conditional to be checked before each round
* `index1 += 1`: this is code to be run after each round

Let's break down another example:

``` javascript
for (var i = 2; i <= 6; i += 2) {
  console.log(i);
}
```

* We start the loop
* We initialize a variable named "i" and set it to 2
* We check if `2 <= 6` - yep!
* We print "i" (which is 2)
* We increment "i" by 2 (so "i" is now 4)
* We check if `4 <= 6` - yep!
* We print "i" (which is 4)
* We increment "i" by 2 (so "i" is now 6)
* We check if `6 <= 6` - yep!
* We print "i" (which is 6)
* We increment "i" by 2 (so "i" is now 8)
* We check if `8 <= 6` - nope!
* The loop ends

#### TODO

* Write a `for` loop that creates a variable named 'j' which will hold the number 2
* Have the `for` loop continue until 'j' equals 10 and increment 'j' by 2 each iteration
* Each loop, have the `for` loop `console.log(j * j)`

Cool beans! Lets rewrite the `while` loop into a `for` loop for our little kiddo:

``` javascript
function countBy(incr, num) {
  for (var count = 0; count < num; count += 1) {
    console.log(incr + " x " + count + " = " + count * incr);
  }
}
```

### Increment Operator

I know I just taught you `+=` but since incrementing a number by 1 is so common, there's a shorter way for that too!

``` javascript
x = x + 1
x += 1
x++
```

### Count By, Completed

So our code can be shortened to:

``` javascript
function countBy(incr, num) {
  for (var count = 0; count < num; count++) {
    console.log(incr + " x " + count + " = " + count * incr);
  }
}
```

## All the Code

Now we have three pretty handy functions:

``` javascript
// Function oldEnough
// Determines if a user is old enough to play game
// Prints responses based on age
// Takes two arguments:
// age [number]: the age of the user
// required [number]: the age required to play game
function oldEnough(age, required){
  if (age < required) {
    console.log('Hey, get out of here!');
  } else if (age == required) {
    // Below is an example of escaping a special character
    console.log('You\'re old enough for this game now!');
  } else {
    console.log('Come on in!')
  }
}



// Function coins
// Counts how many of a certain coin is in a dollar amount
// Takes two arguments:
// amount [number]: the amount we're calculating for
// value [number]: the value of the coin as a decimal
function coins(amount, value) {
  // count keeps track of how many coins we've counted
  // tally keeps track of the value of the counted coins
  var count = 0;
  var tally = 0;

  // Check to see if adding a coin would put us over the amount...
  while (tally + value <= amount) {
    // ...if not, add a coin to count and tally
    count += 1;
    tally += value;
  }

  return count;
}



// Function countBy
// Prints a multiplication chart for a given number
// incr [number]: for increment, the number we're making the chart for
// num [number]: for number, the number of rows we print
function countBy(incr, num) {
  for (var count = 0; count < num; count++) {
    // Example print format: "2 x 4 = 8"
    console.log(incr + " x " + count + " = " + count * incr);
  }
}
```

## Additional Resources

* [Free Code Camp](https://www.freecodecamp.com/) is a free, online program for learning HTML, CSS, and JavaScript (the three technologies you need to know to make custom websites). There's a group in town that meets every other week in Portland: [FCC Meetup Portland](https://www.meetup.com/Free-Code-Camp-Portland/)
* [Codecademy](https://www.codecademy.com/learn) has free programming courses in several programming languages - including a bunch of courses in JavaScript.
* [Khan Academy](https://www.khanacademy.org/computing/computer-programming) has a ton of free resources to help you learn to be a programmer.
* [Code Wars](https://www.codewars.com) is a great way to increase your JavaScript skills once you've completed a more in depth JavaScript course. You learn to program by solving programming puzzles and they have puzzles for all levels of programmers!
