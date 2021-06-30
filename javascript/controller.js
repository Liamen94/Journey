document.addEventListener('keydown', keyDownHandler, false);
document.addEventListener('keyup', keyUpHandler, false);

var rightPressed = false;
var leftPressed = false;
var upPressed = false;
var downPressed = false;
var rightShot = false;
var leftShot = false;
var upShot = false;
var downShot = false;
var spacePressed = false;

var xDir = 0;
var yDir = 0;
var shotX = 0;
var shotY = 0;


function keyDownHandler(e) {
    if (e.code) {
        switch(e.code) {
            case "Unidentified":
                break;
            case "ArrowRight":
                rightShot = true;
                shotX = 1;
                return;
            case "KeyD":
                rightPressed = true;
                xDir = 1;
                return;
            case "ArrowLeft":
                leftShot = true;
                shotX = -1;
                return;
            case "KeyA":
                leftPressed = true;
                xDir = -1;
                return;
            case "ArrowUp":
                upShot = true;
                shotY = -1;
                return;
            case "KeyW":
                upPressed = true;
                yDir = -1;
                return;
            case "ArrowDown":
                downShot = true;
                shotY = 1;
                return;
            case "KeyS":
                downPressed = true;
                yDir = 1;
                return;
            case "Space":
                spacePressed = true;
                return;
            default:
                return;
        }
    }
}

function keyUpHandler(e) {
    if (e.code) {
        switch(e.code) {
            case "Unidentified":
                break;
            case "ArrowRight":
                rightShot = false;
                shotX = (leftShot) ? -1 : 0;
                return;
            case "KeyD":
                rightPressed = false;
                xDir = (leftPressed) ? -1 : 0;
            return;
            case "ArrowLeft":
                leftShot = false;
                shotX = (rightShot) ? 1 : 0;
                return;
            case "KeyA":
                leftPressed = false;
                xDir = (rightPressed) ? 1 : 0;
            return;
            case "ArrowUp":
                upShot = false;
                shotY = (downShot) ? 1 : 0;
                return;
            case "KeyW":
                upPressed = false;
                yDir= (downPressed) ? 1 : 0;
                return;
            case "ArrowDown":
                downShot = false;
                shotY = (upShot) ? -1 : 0;
                return;
            case "KeyS":
                downPressed = false;
                yDir= (upPressed) ? -1 : 0;
                return;
            case "Space":
                spacePressed = false;
            return;
            default:
            return;
        }
    }
}

