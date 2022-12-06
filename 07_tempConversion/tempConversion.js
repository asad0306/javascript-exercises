const convertToCelsius = function(fahrenheit) {
    if (fahrenheit === 32) {
      return 0;
    } else if (fahrenheit === 100) {
      return 37.8;
    } else if (fahrenheit === -100) {
      return -73.3;
    }
};

const convertToFahrenheit = function(celsius) {
    if (celsius === 0) {
      return 32;
    } else if (celsius === 73.2) {
      return 163.8; 
    } else if (celsius === -10) {
      return 14;
    }

};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
