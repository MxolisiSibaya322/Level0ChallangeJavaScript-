function maximumNumber(...args) {
  let biggest = args[0];
  for (let i = 0; i < arguments.length; i++) {
    if (biggest < args[i]) {
      biggest = args[i];
    }
  }

  return biggest;
}
maximumNumber(5, 7, 8);
