var pickupClock;
var playerClock;
var bulletClock;
var damageClock;
var enemyClock;
var collisionClock;
var fps = 1000/60;

window.onload = function(){
    start();
}


function start(){
    player_update();
    pickupClock = setInterval(collect_pickup, fps);
    enemyClock = setInterval(spawn_monster, 3000);
    collisionClock = setInterval(monster_collision, fps);
    if(rightPressed || leftPressed || upPressed || downPressed){
        player.style.backgroundImage = "url(../pictures/characters/player_move.png)";
        playerClock = setInterval(player_update, fps);
    }
    else{
        player.style.backgroundImage = "url(../pictures/characters/player_idle.png)";
        clearInterval(playerClock);
    }
    bulletClock = setInterval(player_shoot, fps);
    damageClock = setInterval(damage_player, fps);
}

function spawn_pickup(id, posX, posY){
    var pick = new pickup(id, posX, posY);
    pick.spawn();
}

function bound_control(x){
    x = ((x < 448) ? x : 448);
    x = ((x > 32) ? x : 32);
    return x;
}


function spawn_monster(){
    var spawn = roll(1,2);
    if(spawn = 1){
        var howMany = roll(1,4);
        for(var i=0; i<howMany; i++){
            var horizontal = roll(1,2);
            var near = roll(1,2);
            var slot = roll(1,3);
            var idRoll = roll(1,10);
            var id = 1;
            if(idRoll > 6 && idRoll <= 9){
                id = 2;
            }
            if(idRoll == 10){
                id = 3;
            }
            var posX;
            var posY;
            if(horizontal == 1){
                if(near == 1){
                    posX = 32;
                }
                else{
                    posX = 448;
                }
                posY = 192 + 32*slot;
            }
            else{
                if(near == 1){
                    posY = 32;
                }
                else{
                    posY = 448;
                }
                posX = 192 + 32*slot;
            }
            var enemy = new monster(id, posX, posY);
            enemy.spawn();
        }
    }
}



function game_over(){
    clearInterval(pickupClock);
    clearInterval(bulletClock);
    clearInterval(damageClock);
    clearInterval(enemyClock);
    clearInterval(collisionClock);
    for(var i=enemies.length-1; i >=0; i--){
        document.getElementById("stage").removeChild(enemies[i].div);
        enemies.pop();
    }
    if (drop.length > 0){
        for(var i=drop.length-1; i >= 0; i--){
            document.getElementById("stage").removeChild(drop[i].div);
            drop.pop();
        }
    }
    var message = document.getElementById("dialog");
    var prompt = document.getElementById("prompt");
    message.textContent = "GAME OVER! " + playerScore + " punti!";
    message.style.display = "block";
    prompt.style.display = "flex"; 
}


function distance(aPos, bPos){
    return aPos-bPos;
}

function roll(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}