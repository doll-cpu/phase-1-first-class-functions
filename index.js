// Function that takes a callback function and calls it
function receivesAFunction(callback) {
  callback();
}

// Function that returns a named function
function returnsANamedFunction() {
  return function namedFunction() {
    return "I am a named function";
  };
}

// Function that returns an anonymous function
function returnsAnAnonymousFunction() {
  return function() {
    return "I am an anonymous function";
  };
}

// Export the functions if you are using a module system
module.exports = { receivesAFunction, returnsANamedFunction, returnsAnAnonymousFunction };
