## Tutorial

- Alternative tutorial
`https://javascript.info`

- Workshop
`https://github.com/workshopper/javascripting`

## Constructors and prototypes

- `https://content.pivotal.io/blog/javascript-constructors-prototypes-and-the-new-keyword` - this one blew my mind a bit

- prototype-based-language
https://stackoverflow.com/questions/186244/what-does-it-mean-that-javascript-is-a-prototype-based-language

### An example to look at

https://github.com/maryrosecook/count

### Specific notes

- It is bad practice to return anything from a constructor function - a constructor function should return an instance
- Define a `const` outside of functions as otherwise it is not in scope of the functions (it has the same scope as `let`)
- Declarations are hoisted (but initialisations are not)
- `Let` is block scoped. `Var` is function scoped. `Vars` are hoisted but `lets` are not. `Lets` cannot be redeclared.
- `Const` is not truly immutable. It is an immutable pointer to something, so a `const` primitive type is immutable but a `const` object or array is not immutable. 

## Syntax for objects in JavaScript

var myObject = {} // you can make empty objects
var myOtherObject = {
                      some: 'stuff',
                      goes: 'in',
                      here: 123,
                      arrays: ['woah', 'check', 'it'],
                      nestedObject: {another: 'object'},
                      functionsToo: function(foo) { return foo }
                    }
// or objects with stuff in them - check out the fact you can put functions in, too

myOtherObject['some'] // 'stuff'
myOtherObject['here'] // 123

// so far, so Ruby. But you can also access stuff through "dot notation" - more like a normal object in Ruby

myOtherObject.arrays // ['woah', 'check', 'it']
myOtherObject.nestedObject.another // 'object'

// and, you can also get to functions. To call them, however, you have to use ()

myOtherObject.functionsToo // function(foo) { return foo }
myOtherObject.functionsToo('hi!') // 'hi!'
