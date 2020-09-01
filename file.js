var grid = [
  ["", "", "", "", "", "", "", "", "x", ""],
  ["", "", "", "", "", "", "", "", "", ""],
  ["", "", "", "x", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", "", ""],
  ["x", "", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "x", "", "", "", ""],
  ["", "", "", "", "", "", "", "", "", ""],
  ["", "x", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", "", ""],
];

var rover = {
  direction: "N",
  x: 0,
  y: 0,
  travelLog: [],
};

let startPosition = `[X${rover.x}, Y${rover.y}]`;
rover.travelLog.push(startPosition);

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
      if (rover.y !== 0) {
        if (grid[rover.y - 1][rover.x] !== "") {
          console.log("cannot move forward, obstacle!");
        } else {
          rover.y--;
          console.log("rover has moved forward");
          rover.travelLog.push(`[X${rover.x}`, `Y${rover.y}]`);
        }
      } else {
        console.log("you cant drive off the grid");
      }
      break;

    case "W":
      if (rover.x !== 0) {
        if (grid[rover.y][rover.x - 1] !== "") {
          console.log("obstacle");
        } else {
          rover.x--;
          console.log("rover has moved forward");
          rover.travelLog.push(`[X${rover.x}`, `Y${rover.y}]`);
        }
      } else {
        console.log("you cant drive off the grid");
      }
      break;

    case "S":
      if (rover.y !== 9) {
        if (grid[rover.y + 1][rover.x] !== "") {
          console.log("obstacle");
        } else {
          rover.y++;
          console.log("rover has moved forward");
          rover.travelLog.push(`[X${rover.x}`, `Y${rover.y}]`);
        }
      } else {
        console.log("you cant drive off the grid");
      }
      break;

    case "E":
      if (rover.x !== 9) {
        if (grid[rover.y][rover.x + 1] !== "") {
          console.log("obstacle");
        } else {
          rover.x++;
          console.log("rover has moved forward");
          rover.travelLog.push(`[X${rover.x}`, `Y${rover.y}]`);
        }
      } else {
        console.log("you cant drive off the grid");
      }
      break;
  }

  console.log(
    `rover's current position is X${rover.x} Y${rover.y} and is facing ${rover.direction}`
  );

  console.log(`rover has been to ${rover.travelLog}`);
}

function moveBackward(rover) {
  switch (rover.direction) {
    case "N":
      if (rover.y !== 9) {
        if (grid[rover.y + 1][rover.x] !== "") {
          console.log("obstacle");
        } else {
          rover.y++;
          console.log("rover has moved backwards");
          rover.travelLog.push(`[X${rover.x}`, `Y${rover.y}]`);
        }
      } else {
        console.log("you cant drive off the grid");
      }
      break;

    case "W":
      if (rover.x !== 9) {
        if (grid[rover.y][rover.x + 1] !== "") {
          console.log("obstacle");
        } else {
          rover.x++;
          console.log("rover has moved backwards");
          rover.travelLog.push(`[X${rover.x}`, `Y${rover.y}]`);
        }
      } else {
        console.log("you cant drive off the grid");
      }
      break;

    case "S":
      if (rover.y !== 0) {
        if (grid[rover.y - 1][rover.x] !== "") {
          console.log("obstacle");
        } else {
          rover.y--;
          console.log("rover has moved backwards");
          rover.travelLog.push(`[X${rover.x}`, `Y${rover.y}]`);
        }
      } else {
        console.log("you cant drive off the grid");
      }
      break;

    case "E":
      if (rover.x !== 0) {
        if (grid[rover.y][rover.x - 1] !== "") {
          console.log("obstacle");
        } else {
          rover.x--;
          console.log("rover has moved backwards");
          rover.travelLog.push(`[X${rover.x}`, `Y${rover.y}]`);
        }
      } else {
        console.log("you cant drive off the grid");
      }
      break;
  }

  console.log(
    `rover's current position is X${rover.x} Y${rover.y} and is facing ${rover.direction}`
  );

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
      case "b":
        moveBackward(rover);
        break;
      default:
        alert(
          "Thats not a valid input please use only f(forward),b(backward),l(left),r(right) "
        );
    }
  }
}

move("");
