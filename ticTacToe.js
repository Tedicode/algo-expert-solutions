function evaluateXandO(str) {
  // Given a string representing a tic tac toe board, calculate the number of moves needed for X or O to win a tic tac toe game.

  // ex: "O OXXOOXX"

  // O   O
  // X X O
  // O X X

  // A WIN FOR either is to occupy the following spaces:
  // - - -
  // - - -
  // - - -

  // 0,1,2
  // 3,4,5
  // 6,7,8

  // 0,3,6
  // 1,4,7
  // 2,5,8

  // 0,4,8
  // 2,4,6

  // make a 2D array of all winning combinations (^)
  let combosArr = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  function countWins(str, char) {
    let possibleWins = 0;

    for (let combo of combosArr) {
      let count = 0;
      // check all 3 positions of the combo (indexes 0, 1, and 2) in the input string
      // award 2 points if there is CHAR in that space
      // award 1 point if the space is empty
      for (let pos of combo) {
        if (str[pos] === char) count += 2;
        else if (str[pos] === " ") count++;
        else continue;
      }
      // if the total count === 5, then increment total wins for that char
      if (count === 5) possibleWins++;
    }

    return possibleWins;
  }

  // make a helper function that evaluates (for one char, X or O) :
  // it...
  // initializes a variable to track how many potential wins
  // iterates through all potential winning 3-position combos (in the 2D array)
  // for each combo: check if positions x,y, AND z positions === CHAR *or* still empty
  // meaning, str[x], str[y], and str[z]
  // let count = 0
  // how to know if  2 positions are taken and 1 is empty? assign a weight of 2 to "taken" and 1 to "available",
  // if position has char , count += 2
  // if empty, count += 1
  // after evaluating all 3 positions, if char occupies 2, and remaining one is empty,
  // then count will = 5 (should we include >= 5? technically no b/c thats already won, we're testing for "1 more move to win")
  // else, if the needed spaces in this combo are not available
  // then the count will be < 5
  // so if count === 5, THEN push [x,y,z] to results array, (or increment char's Wins)

  // this helper function should take in the string, and a char
  // and should return the count of combos that could provide a win (with one move)
  // function findWins(str, char) {
  // return numWins
  // }

  // invoke this function with char 'X'
  // invoke this function with char 'O'
  // pushing each result into the array that we return as the final solution
  // or simply return it altogether in one line like this:
  console.log([countWins(str, "X"), countWins(str, "O")]);
  return [countWins(str, "X"), countWins(str, "O")];
}

evaluateXandO("O OXXOOXX");
