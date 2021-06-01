function celsiusToFahrenheit(temp){
    var fahrenheit = (temp * 9/5) + 32 ;    // converting to Fahrenheit
    
    return   fahrenheit  ;
} function fahrenheitToCelcius(temp){
    var celcius = (temp-32)* (5/9); 
    
    return  celcius ;
}
celsiusToFahrenheit(32);
fahrenheitToCelcius(89.6);
