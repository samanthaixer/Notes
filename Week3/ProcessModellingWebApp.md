# Process modelling - Explain the basics of the web

Client - brower, app problematic
Server - piece of software that runs on a computer that holds info

1. Data center - A building, or a room in a building
2. Cloud - is not in the sky - A computer in a room in a building

** Insert picture of the map of data centers, cables etc! :-) **

You can have multiple servers running on one machine (including our machines)
- `ruby app.rb` - one server - ** enter correct command **
- `shotgun app.rb` - one server - ** enter correct command **
- `rackup -p 4567` - one server
- rerun `rerun 'rackup -p 4567` - one server

You could run all of the above and have 4 servers running on your machine, accessed by different ports

#### Web developers

As a developer, my work is on the server, including MVC. The browser will serve up the page. Today is about learning how it all hangs together.

You might write code that is sent to the browser and executed in the browser
- You would know this because it is written in JavaScript
- Ruby runs as the server
- JavaScript can also run as the server

- ** Browsers ** use HTML, CSS and JavaScript. They know how to show images, audios, videos, documents etc
- JavaScript is the only client-side programming language. You can write in other languages but then translate it into JavaScript to send to a browser
- JQuery is a JavaScript library (like a Gem but for JavaScript)
- JavaScript uses Ajax to send requests in the background


### The Internet and the Web

- Internet - is the group of cables that connect the computers
- Web - HTTP plus HTML
- Network - carries messages

- HTML - HyperText Markup language
- HTTP - HyperText transfer protocol

### Developer tools in Chrome and Firefox

** USEFUL: ** cmd + ALT + I - Opens DevTools in Chrome - I tried this and it didn't work

** From Alice: ** The other way to open developer tools (in chrome, but should be similar in other browsers):
- right-click on page > inspect
- View > Developer > Developer Tools

** Network tab ** - see the headers, response message and "waterfall"


### Process diagram for first example

1. (Client)   `type + enter URL`
2. (Client)   `send HTTP GET request to (Server)`
3. (Server)   `looks for resource`
4. (Server)   `write a response`
5. (Server)   `send a response: 200 OK + HTML Body`
6. (Client)   `read the response`
    1. parse - reading and understanding the HTML (if correct HTML)
    2. render - creating what we will display
    3. paint - putting it on the screen
  (capybara doesn't use the paint step - it doesn't need to show it on the screen)
7. (Client)   `see the webpage`

** INSERT IMAGES FOR SECOND AND THIRD EXAMPLE **

Sent a request to favicon.ico to get the icon for the tab (favourite icon)

### When going to get an image after the first response

- "Hang on, I need a JPEG" - at the parse stage? (need to confirm this) The page continues with render and paint as much as possible
- When a page doesn't have images or style, it might be a slow connection and therefore the resources as are not found in time

** QUESTION ** Why are the requests sequential? Can they ever be fired at the same time? Needs further investigation

Referrer - tracks where you clicked from (it might be how ** Google ** tracks clicks). It is not there when you go directly to the website

### Difference between GET and POST

- POST is usually used when you want to change something on the server - this is convention but not enforced
- GET is logged. POST is not.
- GET sends parameters in the header (GET never has a body), POST sends it in the body
- GET requests pass the parameters in the URL

### 3 points of entry
- Button
- Link
- Typing URL
