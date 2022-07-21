function birthdayCakeCandles(candles) {
  // Write your code here

  // sort the array
  // find the max value at the last index, capture that value
  // then, starting at that last index, traverse the array backwards
  // while the value at the current index === the captured max value.
  // each time, incrementing the count of candles

  // after breaking out of the loop, return this count

  let sortedArr = candles.sort((a, b) => a - b);

  let i = sortedArr.length - 1;
  let maxVal = sortedArr[i];
  let candleCount = 0;

  while (sortedArr[i] === maxVal) {
    candleCount++;
    i--;
  }

  return candleCount;
}
