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
          var roverinfo = `${rover.name}Info`;
          document.getElementById(roverinfo).innerHTML =
            "cannot move forward, obstacle";
        } else if (grid[rover.y - 1][rover.x] === "R") {
          console.log("cannot move forward, another rover is blocking");
          var roverinfo = `${rover.name}Info`;
          document.getElementById(roverinfo).innerHTML =
            "cannot move forward, another rover is blocking";
        } else {
          grid[rover.y][rover.x] = "";
          rover.y--;
          var roverinfo = `${rover.name}Info`;
          console.log("rover has moved forward");
          grid[rover.y][rover.x] = "R";
          document.getElementById(roverinfo).innerHTML =
            "rover has moved forward";
          rover.travelLog.push(`[X${rover.x}`, `Y${rover.y}]`);
        }
      } else {
        var roverinfo = `${rover.name}Info`;
        console.log("you cant drive off the grid");
        document.getElementById(roverinfo).innerHTML =
          "you cant drive off the grid";
      }
      break;

    case "W":
      if (rover.x !== 0) {
        if (grid[rover.y][rover.x - 1] == "x") {
          console.log("obstacle");
          var roverinfo = `${rover.name}Info`;
          document.getElementById(roverinfo).innerHTML =
            "cannot move forward, obstacle";
        } else if (grid[rover.y][rover.x - 1] === "R") {
          console.log("cannot move forward, another rover is blocking");
          var roverinfo = `${rover.name}Info`;
          document.getElementById(roverinfo).innerHTML =
            "cannot move forward, another rover is blocking";
        } else {
          grid[rover.y][rover.x] = "";
          rover.x--;
          var roverinfo = `${rover.name}Info`;
          console.log("rover has moved forward");
          grid[rover.y][rover.x] = "R";
          document.getElementById(roverinfo).innerHTML =
            "rover has moved forward";
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
          var roverinfo = `${rover.name}Info`;
          document.getElementById(roverinfo).innerHTML =
            "cannot move forward, obstacle";
        } else if (grid[rover.y + 1][rover.x] === "R") {
          console.log("cannot move forward, another rover is blocking");
          var roverinfo = `${rover.name}Info`;
          document.getElementById(roverinfo).innerHTML =
            "cannot move forward, another rover is blocking";
        } else {
          grid[rover.y][rover.x] = "";
          rover.y++;
          var roverinfo = `${rover.name}Info`;
          console.log("rover has moved forward");
          grid[rover.y][rover.x] = "R";
          document.getElementById(roverinfo).innerHTML =
            "rover has moved forward";
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
          var roverinfo = `${rover.name}Info`;
          document.getElementById(roverinfo).innerHTML =
            "cannot move forward, obstacle";
        } else if (grid[rover.y][rover.x + 1] === "R") {
          console.log("cannot move forward, another rover is blocking");
          var roverinfo = `${rover.name}Info`;
          document.getElementById(roverinfo).innerHTML =
            "cannot move forward, another rover is blocking";
        } else {
          grid[rover.y][rover.x] = "";
          rover.x++;
          var roverinfo = `${rover.name}Info`;
          console.log("rover has moved forward");
          grid[rover.y][rover.x] = "R";
          document.getElementById(roverinfo).innerHTML =
            "rover has moved forward";
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
          var roverinfo = `${rover.name}Info`;
          document.getElementById(roverinfo).innerHTML =
            "cannot move backwards, obstacle";
        } else if (grid[rover.y + 1][rover.x] === "R") {
          console.log("cannot move backwards, another rover is blocking");
          var roverinfo = `${rover.name}Info`;
          document.getElementById(roverinfo).innerHTML =
            "cannot move backwards, another rover is blocking";
        } else {
          grid[rover.y][rover.x] = "";
          rover.y++;
          var roverinfo = `${rover.name}Info`;
          console.log("rover has moved backwards");
          grid[rover.y][rover.x] = "R";
          document.getElementById(roverinfo).innerHTML =
            "rover has moved backwards";
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
          var roverinfo = `${rover.name}Info`;
          document.getElementById(roverinfo).innerHTML =
            "cannot move backwards, obstacle";
        } else if (grid[rover.y][rover.x + 1] === "R") {
          console.log("cannot move backwards, another rover is blocking");
          var roverinfo = `${rover.name}Info`;
          document.getElementById(roverinfo).innerHTML =
            "cannot move backwards, another rover is blocking";
        } else {
          grid[rover.y][rover.x] = "";
          rover.x++;
          var roverinfo = `${rover.name}Info`;
          console.log("rover has moved backwards");
          grid[rover.y][rover.x] = "R";
          document.getElementById(roverinfo).innerHTML =
            "rover has moved backwards";
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
          var roverinfo = `${rover.name}Info`;
          document.getElementById(roverinfo).innerHTML =
            "cannot move backwards, obstacle";
        } else if (grid[rover.y - 1][rover.x] === "R") {
          console.log("cannot move backwards, another rover is blocking");
          var roverinfo = `${rover.name}Info`;
          document.getElementById(roverinfo).innerHTML =
            "cannot move backwards, another rover is blocking";
        } else {
          grid[rover.y][rover.x] = "";
          rover.y--;
          var roverinfo = `${rover.name}Info`;
          console.log("rover has moved backwards");
          grid[rover.y][rover.x] = "R";
          document.getElementById(roverinfo).innerHTML =
            "rover has moved backwards";
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
          var roverinfo = `${rover.name}Info`;
          document.getElementById(roverinfo).innerHTML =
            "cannot move backwards, obstacle";
        } else if (grid[rover.y][rover.x - 1] === "R") {
          console.log("cannot move backwards, another rover is blocking");
          var roverinfo = `${rover.name}Info`;
          document.getElementById(roverinfo).innerHTML =
            "cannot move backwards, another rover is blocking";
        } else {
          grid[rover.y][rover.x] = "";
          rover.y--;
          var roverinfo = `${rover.name}Info`;
          console.log("rover has moved backwards");
          grid[rover.y][rover.x] = "R";
          document.getElementById(roverinfo).innerHTML =
            "rover has moved backwards";
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

document.getElementById(
  "rover1Position"
).innerHTML = `X${rover1.x}Y${rover1.y}`;
document.getElementById("rover1Direction").innerHTML = `${rover1.direction}`;
document.getElementById("rover2Direction").innerHTML = `${rover2.direction}`;
document.getElementById(
  "rover2Position"
).innerHTML = `X${rover2.x}Y${rover2.y}`;

function drawGrid(array) {
  var result = "<table>";
  for (i = 0; i < array.length; i++) {
    result += "<tr>";
    for (j = 0; j < array[i].length; j++) {
      result += "<td>" + array[i][j] + "</td>";
    }
    result += "</tr>";
  }
  result += "</table>";
  return result;
}

let newGrid = drawGrid(grid);
let htmlGrid = document.getElementById("grid");
htmlGrid.insertAdjacentHTML("afterBegin", newGrid);
