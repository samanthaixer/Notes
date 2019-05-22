# How can you test whether you've learned a new language?

- build something you've built before without having to refer to docs
- use a testing framework and TDD

# What is encapsulation?

Katerina's interpretive dance for encapsulation was amazing
- Protective barrier over some code

- Pacman allows yoda to interact with him only in a particular way

- Hiding implementation details

- The more classes know about each other, the more chance there is for things to go wrong

- One manager will have the knowledge of other objects

- Code smell - feature envy - constantly calling methods on another class - maybe it should have the method on it's own class

## In Ruby
- Use public and private objects
- Private methods are hidden from other objects

## Constructor and Prototype pattern
- JavaScript: Console - Chrome Dev Tools - this is an interactive shell like irb in ruby

load a new objection:

`function Adult() {}`

`adult = new Adult()`

Every object that you create inherits from the Prototype object. When you create any object, it has a prototype property.

Pattern matching - try things you've tried in other languages

JS - if you call a function without parentheses it will just return the function

JS - have to use explicit returns

this.age = age;
Adult.age is then possible
The variable is exposed

Get visibility using console.log

Naming conventions don't actually enforce behaviour - using `_` before a name of a method doesn't actually enforce it to be private. We will learn on Thursday how to properly hide private methods.

Property/value pairs (attributes in JavaScript)
