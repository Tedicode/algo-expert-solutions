function EquivalentKeypresses(strArr) {
  // code goes here

  let str1 = strArr[0].split(",");
  let str2 = strArr[1].split(",");

  let first = "";
  let second = "";

  for (let i = 0; i < str1.length; i++) {
    if (str1[i] === "-B") first = first.slice(0, first.length - 1);
    else first += str1[i];
  }

  for (let i = 0; i < str2.length; i++) {
    if (str2[i] === "-B") second = second.slice(0, second.length - 1);
    else second += str2[i];
  }

  return first === second;
}

// keep this function call here
console.log(EquivalentKeypresses(readline()));
