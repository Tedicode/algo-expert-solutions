function countApplesAndOranges(s, t, a, b, apples, oranges) {
  // Write your code here

  // transform both arrays apples and oranges into: applesLanded and orangesLanded
  // into  each value + the respective tree's position
  // ex: apples thrown = [2,3,-4]
  // apple tree position = 4
  // applesLanded = [4+2, 4+3, 4+ (-4)] = [6,7,0]
  // once we have 2 transformed arrays, find from each array:
  // how many values overlap in the range of the house.
  // iterate thru array
  // if (val >= s && val <= t) count++

  let applesLand = apples.map((val) => val + a);
  let orangesLand = oranges.map((val) => val + b);
  let appleCount = 0;
  let orangeCount = 0;

  for (let ap of applesLand) {
    if (ap >= s && ap <= t) appleCount++;
  }

  for (let org of orangesLand) {
    if (org >= s && org <= t) orangeCount++;
  }

  console.log(appleCount);
  console.log(orangeCount);
}
