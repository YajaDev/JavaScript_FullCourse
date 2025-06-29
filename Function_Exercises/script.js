
function greet(name) {
    !name ? console.log('Hi there!')
     : console.log(`Hello! ${name}`);
    
    
    }

function convertToFarenheit(celsius) {
    const farentheit = (celsius * 9 / 5) + 32;
    console.log(farentheit);
    
}

convertToFarenheit(25);

function convertToCelsius(farentheit) {
    const celsius = (farentheit -32) * 5 / 9;
    console.log(celsius);
    
}
convertToCelsius(86);

function convertTemperature(degrees, unit) {
    if (unit === 'C') {
      const result = convertToFahrenheit(degrees);
      return `${result}F`;
    } else if (unit === 'F') {
      const result = convertToCelsius(degrees);
      return `${result}C`;
    }
}