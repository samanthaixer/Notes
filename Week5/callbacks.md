$.get(URL, function(argument))

in this example, function is a callback
When the URL call has finished, execute the callback

Get method (of JQuery) is asynchronous, don't want to wait for the full get method to finish before the rest of the page is loaded.

The function (second argument) will execute when the URL call has finished.

argument name can be anything, but it refers to the response from the URL call (probably an API)

Ajax - asynchronous javascript and XML

Javascript - running the code
Ajax - making the async calls
JQuery - wrapping a lot of code to do this

$ - namespace where all of your JQuery functions come from
- Object that holds all the JQuery functions

Think of JavaScript as a tree structure of functions that can be applied on an object at the top of the tree

Prefer you to use the javascript but use the libraries where they are useful

When you make a call to the JQuery library, it stores the library in memory for use. Check the sources tab in DevTools

```
var getReturnValue = $.get("https://async-workshops-api.herokuapp.com/people", function(peopleResponse) {
  return peopleResponse;
});
```

You can't return something from an asynchronous call. You have to do something within the function body to store the response, you can't just assign the request to a variable and expect it to have the response.

In the above example, getReturnValue holds the request until the response comes back, and then will contain the response as well. However it doesn't hold what is said in the return value.

Explore what the get method does and the arguments it takes

Promise - look this up
