var grid = [
  ["R", "", "", "", "", "", "", "", "x", ""],
  ["", "", "", "", "", "", "", "", "", ""],
  ["", "", "", "x", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", "", ""],
  ["x", "", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "x", "", "", "", ""],
  ["", "", "", "", "", "", "", "", "", ""],
  ["", "x", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", "", "R"],
];

var rover1 = {
  name: "rover1",
  direction: "N",
  x: 0,
  y: 0,
  travelLog: [],
};

var rover2 = {
  name: "rover2",
  direction: "N",
  x: 9,
  y: 9,
  travelLog: [],
};

//rover controls//

move(rover1, "");
move(rover2, "");

//////////////////

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

  console.log(`${rover.name} has turned to face ${rover.direction}`);
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
  console.log(`${rover.name} has turned to face ${rover.direction}`);
}

function moveForward(rover) {
  switch (rover.direction) {
    case "N":
      if (rover.y !== 0) {
        if (grid[rover.y - 1][rover.x] == "x") {
          console.log("cannot move forward, obstacle!");
        } else if (grid[rover.y - 1][rover.x] === "R") {
          console.log("cannot move forward, another rover is blocking");
        } else {
          grid[rover.y][rover.x] = "";
          rover.y--;
          console.log("rover has moved forward");
          grid[rover.y][rover.x] = "R";
          rover.travelLog.push(`[X${rover.x}`, `Y${rover.y}]`);
        }
      } else {
        var roverinfo = `${rover.name}Info`;
        console.log("you cant drive off the grid");
      }
      break;

    case "W":
      if (rover.x !== 0) {
        if (grid[rover.y][rover.x - 1] == "x") {
          console.log("obstacle");
        } else if (grid[rover.y][rover.x - 1] === "R") {
          console.log("cannot move forward, another rover is blocking");
        } else {
          grid[rover.y][rover.x] = "";
          rover.x--;
          console.log("rover has moved forward");
          grid[rover.y][rover.x] = "R";
          rover.travelLog.push(`[X${rover.x}`, `Y${rover.y}]`);
        }
      } else {
        console.log("you cant drive off the grid");
      }
      break;

    case "S":
      if (rover.y !== 9) {
        if (grid[rover.y + 1][rover.x] == "x") {
          console.log("obstacle");
        } else if (grid[rover.y + 1][rover.x] === "R") {
          console.log("cannot move forward, another rover is blocking");
        } else {
          grid[rover.y][rover.x] = "";
          rover.y++;
          console.log("rover has moved forward");
          grid[rover.y][rover.x] = "R";
          rover.travelLog.push(`[X${rover.x}`, `Y${rover.y}]`);
        }
      } else {
        console.log("you cant drive off the grid");
      }
      break;

    case "E":
      if (rover.x !== 9) {
        if (grid[rover.y][rover.x + 1] == "x") {
          console.log("obstacle");
        } else if (grid[rover.y][rover.x + 1] === "R") {
          console.log("cannot move forward, another rover is blocking");
        } else {
          grid[rover.y][rover.x] = "";
          rover.x++;
          console.log("rover has moved forward");
          grid[rover.y][rover.x] = "R";
          rover.travelLog.push(`[X${rover.x}`, `Y${rover.y}]`);
        }
      } else {
        console.log("you cant drive off the grid");
      }
      break;
  }

  console.log(
    `${rover.name}'s current position is X${rover.x} Y${rover.y} and is facing ${rover.direction}`
  );

  console.log(`${rover.name} has been to ${rover.travelLog}`);
}

function moveBackward(rover) {
  switch (rover.direction) {
    case "N":
      if (rover.y !== 9) {
        if (grid[rover.y + 1][rover.x] == "x") {
          console.log("obstacle");
        } else if (grid[rover.y + 1][rover.x] === "R") {
          console.log("cannot move backwards, another rover is blocking");
        } else {
          grid[rover.y][rover.x] = "";
          rover.y++;
          console.log("rover has moved backwards");
          grid[rover.y][rover.x] = "R";
          rover.travelLog.push(`[X${rover.x}`, `Y${rover.y}]`);
        }
      } else {
        console.log("you cant drive off the grid");
      }
      break;

    case "W":
      if (rover.x !== 9) {
        if (grid[rover.y][rover.x + 1] == "x") {
          console.log("obstacle");
        } else if (grid[rover.y][rover.x + 1] === "R") {
          console.log("cannot move backwards, another rover is blocking");
        } else {
          grid[rover.y][rover.x] = "";
          rover.x++;
          grid[rover.y][rover.x] = "R";
          rover.travelLog.push(`[X${rover.x}`, `Y${rover.y}]`);
        }
      } else {
        console.log("you cant drive off the grid");
      }
      break;

    case "S":
      if (rover.y !== 0) {
        if (grid[rover.y - 1][rover.x] == "x") {
          console.log("obstacle");
        } else if (grid[rover.y - 1][rover.x] === "R") {
          console.log("cannot move backwards, another rover is blocking");
        } else {
          grid[rover.y][rover.x] = "";
          rover.y--;
          console.log("rover has moved backwards");
          grid[rover.y][rover.x] = "R";
          rover.travelLog.push(`[X${rover.x}`, `Y${rover.y}]`);
        }
      } else {
        console.log("you cant drive off the grid");
      }
      break;

    case "E":
      if (rover.x !== 0) {
        if (grid[rover.y][rover.x - 1] == "x") {
          console.log("obstacle");
        } else if (grid[rover.y][rover.x - 1] === "R") {
          console.log("cannot move backwards, another rover is blocking");
        } else {
          grid[rover.y][rover.x] = "";
          rover.y--;
          console.log("rover has moved backwards");
          grid[rover.y][rover.x] = "R";
          rover.travelLog.push(`[X${rover.x}`, `Y${rover.y}]`);
        }
      } else {
        console.log("you cant drive off the grid");
      }
      break;
  }

  console.log(
    `${rover.name}'s current position is X${rover.x} Y${rover.y} and is facing ${rover.direction}`
  );

  console.log(`${rover.name} has been to ${rover.travelLog}`);
}

function move(rover, string) {
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
        console.log(
          "Thats not a valid input please use only f(forward),b(backward),l(left),r(right) "
        );
    }
  }
}