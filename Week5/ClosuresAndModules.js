function makeAdder(x){
  function add(y){
    return y + x;
  }
  return add;
}

var plusOne = makeAdder(1);
var plusTen = makeAdder(10);

plusOne(3); // returns 4
plusOne(41); //returns 42

plusTen(13); //returns 23

// When we call makeAdder(1), we get a reference back to
// it's inner add() that remembers x as 1
// When we call makeAdder(10), we get a reference back to
// it's inner add() that remembers x as 10


function User(){
  var username, password;


  // this is the closure that keeps the variables alive
  // when the function finishes running
  function doLogin(user, pw) {
    username = user;
    password = pw;

    // etc
  }

  var publicAPI = {
    login: doLogin
  };

  return publicAPI;
}

var fred = User();
fred.login("fred", "password");
// note - we don't call new User()
// Executing User() creates an instance of the User module
// with it's own scope
// doLogin function has a closure over username and password
// which means it retains access to them after the function finishes
// running
