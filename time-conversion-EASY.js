function timeConversion(s) {
  // Write your code here

  // slice off the last 2 characters that indicate AM or PM
  let amOrPm = s.slice(s.length - 2);
  // compare this slice to determine next block

  // slice off the first 2 characters to access the HH
  let hours = s.slice(0, 2);
  // slice off the rest (s.slice(2, s.length-2)) to append later
  let rest = s.slice(2, s.length - 2);

  // if AM
  // only change is if hours === '12'
  // in which case, set hours = '00' now
  // else, do nothing
  // if PM
  // if hours === '12'
  /// then do nothing to change 'hours'
  // ELSE always add 12
  // this entails convert hours to Number, adding 12, then convert back to string
  // converting back to string taken care of w/ type coercion upon concat

  // concat hours + rest, as our return

  if (amOrPm === "AM") {
    if (hours === "12") {
      hours = "00";
    }
  } else {
    if (hours === "12") {
    } else {
      hours = Number(hours) + 12;
    }
  }

  let result = hours + rest;
  return result;
}
