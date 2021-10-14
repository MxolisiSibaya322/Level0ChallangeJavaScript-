function celsiusToFahrenheit(temp) {
  const fahrenheit = (temp * 9) / 5 + 32;

  return fahrenheit;
}
function fahrenheitToCelcius(temp) {
  const celcius = (temp - 32) * (5 / 9);

  return celcius;
}
celsiusToFahrenheit(32);
fahrenheitToCelcius(89.6);
