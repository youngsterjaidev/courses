// for storing the game data
let game = {
  playerOne: {
    health: 100,
    wins: 0,
  },
  playerTwo: {
    health: 100,
    wins: 0,
  },
  rounds: 0,
  turn: "playerOne",
};

function BulletIntensity() {
  return Math.round(Math.random() * 100);
}

function startRound() {
  //
  console.log("Round is started !");
  if (game.turn === "playerOne") {
    console.log("Player One Shoots");
    // player shoot the bullet and decrease the opponent health
    game.playerTwo.health = game.playerTwo.health - BulletIntensity();

    // changing the turn
    game.turn = "playerTwo";
    console.log("Current Health p2: ", game.playerTwo.health);
  } else {
    console.log("Player Two Shoots");

    // player shoot the bullet and decrease the opponent health
    game.playerOne.health = game.playerOne.health - BulletIntensity();

    // changing the turn
    game.turn = "playerOne";

    console.log("Current Health p1: ", game.playerOne.health);
  }
}

function StartGame() {
  game.rounds = game.rounds + 1;
  if (game.rounds > 3) {
    console.log("The Game is over");

    if (game.playerOne.wins > game.playerTwo.wins) {
      console.log("P1 won the Match");
      document.querySelector("#result").innerText = "P1 won the Match";
    } else {
      console.log("P2 won the Match");
      document.querySelector("#result").innerText = "P2 won the Match";
    }

    // wins reset and rounds
    game.playerOne.wins = 0;
    game.playerTwo.wins = 0;
    game.rounds = 0;
  } else {
    while (game.playerOne.health > 0 && game.playerTwo.health > 0) {
      //
      startRound();
    }

    game.turn = "playerOne";

    // after the round finish by checking health
    // which player wins that round
    if (game.playerOne.health > game.playerTwo.health) {
      console.log("Player One is the winner of this round !");
      game.playerOne.wins = game.playerOne.wins + 1;
    } else {
      console.log("Player Two is the winner of this round !");
      game.playerTwo.wins = game.playerTwo.wins + 1;
    }

    // reset the health of both player
    game.playerOne.health = 100;
    game.playerTwo.health = 100;

    console.log(game);
  }
}

document.querySelector("#btn").addEventListener("click", StartGame);
