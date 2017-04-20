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

That works - email that over to your boss and head out to lunch! When you get back however, your boss will probably have emailed you back with some "constructive criticism." Your boss was hoping to have it give a little more feedback, maybe with some text that displays in the console that lets gamers know if they can play or not. It was suggested that the program have three outputs: if the gamer is under 13 we should tell them to go away, else if the gamer is 13 we should congratulate them for finally being old enough to play, else we should invite the game into the game!

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

Just like in algebra (think `x + 2 = 4`), JavaScript has a way where you can use symbols to represent values using *variables*, the special `var` keyword, and the special *assignment* operator `=`:

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

### Coins

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

coins(1.24/.25); // 4.96
```

No, we don't want fractions. We can't have .96 of a quarter! Now is a good time to talk about *loops*: loops are blocks of code that get run over and over until they're told to stop. This is that `while` keyword that I was mentioning before. Let's take a quick detour to explain `while` loops before finishing our coins function.

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

If you were to run the above code, you'd get stuck. This is an example of an infinite loop - a loop that never stops because the *conditional* never evaluates to `false`. That's because "value" and "amount" never change so "value" will always be less than "amount". We need to make one last change to make this function work:

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

Just to tidy things up, we're going to make a small adjustment. JavaScript gives some tools we can make use of right now: `+=`, `-=`, `*=`, and `/=`. These might seem confusing, but they're pretty simple.

``` javascript
x = x + y
x += y

x = x - y
x -= y

x = x * y
x *= y

x = x / y
x /= y
```

So using this tool, we can change the code to:

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

coins(.50, .25);
```

All done!

### Count By

__User Story:__ Your kid is learning multiplication (and maybe even coding!) so you thought it would be nice to give the little rugrat a program that lets them input an increment amount and a number of multiples to go up to. It's going to keep looping through multiples until it's looped that set amount of times - each time printing the result.

First thing first, we need to talk about *string concatenation*. Don't worry, it's just a fancy phrase for joining strings. In JavaScript, we can just use the `+` operator for this:

``` javascript
test = "Hello" + " " + "world!";
console.log(test);

test = 42 + " is the answer";
console.log(test);

test = 4 + "2";
console.log(test);

test = 4 + 2;
console.log(test);
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

This is a really common thing to do in programming though: count one by one until you hit a number, doing something each *iteration*. It's so common that there's a special kind of loop for this! These are basically the same:

``` javascript

var index1 = 0;
while (index1 < 5) {
  console.log(index1);
  index1 += 1;
}

for (var index2 = 0; index2 < 5; index1 += 1) {
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
* We print i (which is 2)
* We increment i by 2 (so i is now 4)
* We check if `4 <= 6` - yep!
* We print i (which is 4)
* We increment i by 2 (so i is now 6)
* We check if `6 <= 6` - yep!
* We print i (which is 6)
* We increment i by 2 (so i is now 8)
* We check if `8 <= 6` - nope!
* The loop ends

Cool beans! Lets rewrite the `while` loop into a `for` loop for our little kiddo:

``` javascript
function countBy(incr, num) {
  for (var count = 0; count < num; count += 1) {
    console.log(incr + " x " + count + " = " + count * incr);
  }
}
```

I know I just taught you `+=` but since incrementing a number by 1 is so common, there's a shorter way for that too!

``` javascript
x = x + 1
x += 1
x++
```

So our code can be shortened to:

``` javascript
function countBy(incr, num) {
  for (var count = 0; count < num; count++) {
    console.log(incr + " x " + count + " = " + count * incr);
  }
}
```
