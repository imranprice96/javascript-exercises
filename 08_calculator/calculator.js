const add = function() {
  /*let result = 0;
  for(let arg in arguments){
    result+=parseInt(arguments[arg]);
  };
  return result;*/
  return arguments[0] + arguments[1];
};

const subtract = function() {
  return arguments[0] - arguments[1];
};

const sum = function() {
	return arguments[0].reduce((a, b) => a + b, 0);
};

const multiply = function() {
  return arguments[0].reduce((a, b) => a * b, 1);
};

const power = function() {
	return arguments[0] ** arguments[1];
};

const factorial = function() {
	return arguments[0] === 0 ? 1 : arguments[0] * factorial(arguments[0]-1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
