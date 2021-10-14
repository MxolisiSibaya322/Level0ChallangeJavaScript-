function convertToTime(num) {
  const hours = Math.floor(num / 60);
  const minutes = num - 60 * hours;
  if (hours == 1 && minutes == 1) {
    console.log(hours + " hour, " + minutes + " minute");
  } else if (minutes == 1) {
    console.log(hours + " hours, " + minutes + " minute");
  } else if (hours == 1) {
    console.log(hours + " hour, " + minutes + " minutes");
  } else {
    console.log(hours + " hours, " + minutes + " minutes");
  }
}
convertToTime(183);
