var rover = {
  direction: "N",
  x: 0,
  y: 0,
  travelLog: ["X0", "Y0"],
};

console.log(
  `starting position is: X${rover.x}Y${rover.y} and is facing ${rover.direction} `
);

function turnLeft(rover) {
  switch (rover.direction) {
    case "N":
      rover.direction = "W";
      break;
    case "W":
      rover.direction = "S";
      break;
    case "S":
      rover.direction = "E";
      break;
    case "E":
      rover.direction = "N";
      break;
  }

  console.log("rover has turned to face " + rover.direction);
}

function turnRight(rover) {
  switch (rover.direction) {
    case "N":
      rover.direction = "E";
      break;
    case "W":
      rover.direction = "N";
      break;
    case "S":
      rover.direction = "W";
      break;
    case "E":
      rover.direction = "S";
      break;
  }
  console.log("rover has turned to face " + rover.direction);
}

function moveForward(rover) {
  switch (rover.direction) {
    case "N":
      rover.y--;
      break;
    case "W":
      rover.x--;
      break;
    case "S":
      rover.y++;
      break;
    case "E":
      rover.x++;
      break;
  }
  console.log("rover has moved forward");
  console.log(`rover's current position is X${rover.x} Y${rover.y}`);
  rover.travelLog.push(`X${rover.x}`, `Y${rover.y}`);

  console.log(`rover has been to ${rover.travelLog}`);
}

function move(string) {
  for (let i = 0; i < string.length; i++) {
    switch (string[i]) {
      case "l":
        turnLeft(rover);
        break;
      case "r":
        turnRight(rover);
        break;
      case "f":
        moveForward(rover);
        break;
    }
  }
}

move("rffrfflfrff");
