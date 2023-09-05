console.log("Warzone");

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

function startGame() {
  //
  console.log("Game is started !");
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
