alert("Welcome! Let's play rock paper scissors.");

function rps(max) {
  return Math.floor(Math.random() * max);
}

let again = true;

let stats = {
  wins: 0,
  losses: 0,
  draws: 0,
};

while (again) {
  let userChoice = prompt("Enter R, P, or S.");

  let cpuChoice = rps(3);

  let result = "";

  if (cpuChoice === 0) {
    result = "R";
  } else if (cpuChoice === 1) {
    result = "P";
  } else if (cpuChoice === 2) {
    result = "S";
  }

  console.log(cpuChoice);
  console.log(userChoice);

  if (userChoice.toUpperCase() === result) {
    alert("It's a draw!");
    stats.draws++;
  } else if (userChoice.toUpperCase() === "R") {
    if (result === "P") {
      alert("You Lose!");
      stats.losses++;
    } else if (result === "S") {
      alert("You Win!");
      stats.wins++;
    }
  } else if (userChoice.toUpperCase() === "P") {
    if (result === "S") {
      alert("You Lose!");
      stats.losses++;
    } else if (result === "R") {
      alert("You Win!");
      stats.wins++;
    }
  } else if (userChoice.toUpperCase() === "S") {
    if (result === "R") {
      alert("You Lose!");
      stats.losses++;
    } else if (result === "P") {
      alert("You Win!");
      stats.wins++;
    }
  }
  alert(
    "Wins: " +
      stats.wins +
      " Losses: " +
      stats.losses +
      " Draws: " +
      stats.draws
  );

  again = confirm("Would you like to play again?");
}

alert("Thank you for playing!");
