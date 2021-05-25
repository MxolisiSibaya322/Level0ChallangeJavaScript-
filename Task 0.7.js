function celsiusToFahrenheit(temp){
    var fahrenheit = (temp * 9/5) + 32 ;    // converting to Fahrenheit
    console.log( temp + ' Degrees celsius is equal to ' + fahrenheit + ' Fahrenheit' );
} function fahrenheitToCelcius(temp){
    var celcius = (temp-32)* (5/9); 
    console.log( temp + ' Fahrenheit = '+ celcius + ' celcius');
}
celsiusToFahrenheit(32);
fahrenheitToCelcius(89.6);