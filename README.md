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
console.log("Hello World!")
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
