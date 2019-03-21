# Debugging 2 workshop

## How are we doing?

#### (question asked: How are you all feeling? )

People are finding it hard to work all week and then do more all weekend.

Recommendation: read the weekend challenge on the Friday so that your brain is processing it in the background and you can start Saturday having already thought some of it through.

Doing the weekend challenges are useful to check our individual learning as we are pairing during the week.
Sometimes we will need to prioritise rest over checking our learning.

## On to debugging!

### Debugging mantra (reminder):

1. Tighten the loop
2. Get visibility

### What is different about the web when debugging?

There are lots of components which makes it harder to find the issue

E.g. with Sinatra:

  1. Views
    - e.g. .erb files which contain HTML, Ruby
  2. Controllers
    - e.g. app.rb (routing)
  3. Gems
  4. models (/lib) (/model)
    - e.g. .rb files


    *four above - these are code. two below - these are not code*

  5. Config files - usually find these bugs really early on
  6. Assets/static/public
    - e.g. images, CSS

### Using your app - the process

- When you open your app, the controller is opened first
- Within your path method in the controller, you use `erb :index`


`erb :index` means call the method erb on the :index file and
return it (last line in the method)

- The evaluation of calling `erb :index` returns HTML and this is sent back as the response


##### Routing:
`GET` and `POST` are Sinatra commands that accept part of the URL and match these to what was requested to determine what to do next. This is an example of routing.

An example: (www.makers.tech/apply)

`makers.tech` - DOMAIN

`/apply` - ROUTE


### Getting visibility

- Use p to get visibility
  - You can use p anywhere that you can use Ruby
  - You will see the output of this in the server logs (these are displayed when you run the app in the console)
- Look at the error on the webpage
  - in Sinatra you can click on sections to get more detail
- Look at rspec tests
  - There is no screen so this seems difficult
  - Find out which **spec file** is throwing the error and on what line (as in our `Ruby` debugging)
  - use `save_and_open_page` in your `_spec` file - specific to Capybara. Any framework that does webdriver tests will have something similar - `you may want to install a gem for this`
  - This will open it in the browser and you can see the HTML that the server sends back as well as any errors thrown
- Look at the server logs in the console - it will show you what requests were made

## Reflection

During the debugging exercise I found that although the tests were passing, the code wasn't necessarily answering the user stories. When debugging or testing, refer back to the user stories! 


# HTTP Status codes

- 2xx - Mostly OK
- 3xx - Redirection
- 4xx - Bad request
- 5xx - Problem with the server (the software running code)

# SIDE NOTE
#### Side note! Naming conventions for classes

Never call your class with a plural (call it note rather than notes).

  - Should be singular
  - Should be a noun
  - Should come from your domain (the world that you are trying to model)
