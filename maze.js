
var mazeArr =[];
var playerPos = [0,0];

/* recursion method */
function printMazeRecur( finalArr, totalLength) {
    if(totalLength === 20) {
        return 0;
    }
    if(totalLength < 20) {
        var newArr = finalArr[totalLength];
        totalLength = totalLength + 1;
        console.log(newArr.toString().replace(/,/g, ' ') +'\n');
        printMazeRecur( finalArr, totalLength);
    }
}

function addObstacles() {
    var obstacles = 200;
    for(var s = 0 ; s<obstacles ; s++) {
        var row = Math.floor(Math.random() * 20);
        var col = Math.floor(Math.random() * 30);
        if( !(row === 0 && col === 0) &&
            !(row === 0 && col === 1) &&
            !(row === 1 && col === 1) &&
            !(row === 19 && col === 29) &&
            !(row === 18 && col === 29) &&
            !(row === 19 && col === 28) &&
            !(row === 19 && col === 29)
        ) {
            this.mazeArr[row][col] = 'X';
        }
    }
    this.printMazeRecur(this.mazeArr, 0);
    this.userInput();
}

function initializeMaze() {
    this.mazeArr[0][0] = 'P';
    this.mazeArr[19][29] = 'E';
    this.addObstacles();
}

function createMaze() {
    for(var j = 0; j <20; j++) {
        var arr = [];
        for(var i = 0 ; i<30; i++) {
            arr.push('*');
        }
        mazeArr.push(arr);
    }
    this.initializeMaze();
}

function invalidDirection() {
    console.log("\n \n \n \n \n \n");
    console.log("invalid direction");
    alert("invalid direction");
    console.log("\n \n \n  \n \n \n");
    this.printMazeRecur(this.mazeArr, 0);
    this.userInput();
}
function reachedExit() {
    console.log("\n \n \n \n \n \n");
    console.log("You have reached the exit!");
    alert("You have reached the exit!");
    this.startGame();
}
function playerMotion() {
    console.log("\n \n  \n \n \n \n");
    this.printMazeRecur(this.mazeArr, 0);
    this.userInput();
}


function userInput() {
    var input = prompt("Enter up, down, left, or right or u, d, l, r to move player");
    if(input === 'u'||input === 'd'||input === 'l'||input === 'r'||input === 'up'||
        input === 'down'|| input === 'left' || input === 'right'){
        this.movePlayer(input);
    } else {
        this.invalidDirection();
    }
}
function movePlayer(input) {
    if(input === 'u' || input === 'up') {
        var newPos = this.playerPos[0] - 1 ;
        console.log(" new position [0] ",newPos);
        if(newPos>=0) {
            if(this.mazeArr[newPos][this.playerPos[1]] !== 'X') {
                this.mazeArr[this.playerPos[0]][this.playerPos[1]] = '*';
                this.playerPos[0] = newPos;
                this.mazeArr[this.playerPos[0]][this.playerPos[1]] = 'P';
                if(this.playerPos[0] === 19 && this.playerPos[1] === 29 ){
                    this.reachedExit();
                }
                this.playerMotion();
            } else {
                this.invalidDirection();
            }

        } else {
            this.invalidDirection();
        }
    }
    else if(input === 'd' || input === 'down') {
        var newPos = this.playerPos[0] + 1 ;
        console.log(" new position [0] ",newPos);
        if(newPos<20) {
            if(this.mazeArr[newPos][this.playerPos[1]] !== 'X') {
                this.mazeArr[this.playerPos[0]][this.playerPos[1]] = '*';
                this.playerPos[0] = newPos;
                this.mazeArr[this.playerPos[0]][this.playerPos[1]] = 'P';
                if(this.playerPos[0] === 19 && this.playerPos[1] === 29 ){
                    this.reachedExit();
                }
                this.playerMotion();
            } else {
                this.invalidDirection();
            }

        } else {
            this.invalidDirection();
        }
    }
    else  if(input === 'r' || input === 'right') {
        var newPos = this.playerPos[1] + 1 ;
        console.log(" new position [1] ",newPos);
        if(newPos<30) {
            if(this.mazeArr[this.playerPos[0]][newPos] !== 'X') {
                this.mazeArr[this.playerPos[0]][this.playerPos[1]] = '*';
                this.playerPos[1] = newPos;
                this.mazeArr[this.playerPos[0]][this.playerPos[1]] = 'P';
                if(this.playerPos[0] === 19 && this.playerPos[1] === 29 ){
                    this.reachedExit();
                }
                this.playerMotion();
            } else {
                this.invalidDirection();
            }
        } else {
            this.invalidDirection();
        }
    }
    else if(input === 'l' || input === 'left') {
        var newPos = this.playerPos[1] - 1 ;
        if(newPos >= 0) {
            if(this.mazeArr[this.playerPos[0]][newPos] !== 'X') {
                this.mazeArr[this.playerPos[0]][this.playerPos[1]] = '*';
                this.playerPos[1] = newPos;
                this.mazeArr[this.playerPos[0]][this.playerPos[1]] = 'P';
                if(this.playerPos[0] === 19 && this.playerPos[1] === 29 ){
                    this.reachedExit();
                }
                this.playerMotion();
            } else {
                this.invalidDirection();
            }
        } else {
            this.invalidDirection();
        }
    }
}

function startGame() {
    this.createMaze();
}
/* start game */
startGame();
