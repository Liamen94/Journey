
var player = document.getElementById("player");
var player_life = 3;
var coffee_speed = 3;
var normal_speed = 1.5;
var player_speed = normal_speed;
var playerWidth = 32;
var playerHeight = 32;
var playerX = 256;
var playerY = 256;
var playerScore = 0;
var playerEquip = 0;
var canShoot = true;
var fireRate = 1000/6;
var fireEffect = 0;
var playerInvincible = false;
var isDead = false;

function player_update(){
    scoreBackup = playerScore;
    set_life_text(player_life);
    if (player_life == 0){
        clearInterval(playerClock);
        isDead = true;
        game_over();
    }
    if (!isDead){
        player_use_items();
        player_sprite_update()
        player_move();
        requestAnimationFrame(player_update);
    }
    else{
        player.style.backgroundImage = "url(../pictures/characters/player_death.png)";
    }
}

function player_move(){
    if(xDir!=0 && yDir!=0){
        playerX += (player_speed/Math.sqrt(2))*xDir;
        playerY += (player_speed/Math.sqrt(2))*yDir;
    }
    else if(xDir!=0){
        playerX += player_speed * xDir;
    }
    else if(yDir!=0){
        playerY += player_speed * yDir;
    }
    player.style.left = playerX + "px";
    player.style.top = playerY + "px";
    playerX = bound_control(playerX);
    playerY = bound_control(playerY);
}

function player_use_items(){
    if(spacePressed && playerEquip!=0){
        switch(playerEquip){
            case 5:
            case 7:
                fireEffect = playerEquip;
                setTimeout(function() {fireEffect=0}, 8000);
                break;
            case 6:
                player_speed = coffee_speed;
                setTimeout(function() {player_speed = normal_speed}, 10000);
            break;
            case 8:
                fireRate = fireRate/2;
                setTimeout(function() {fireRate *= 2}, 10000);
            break;
            default:
            break;    
        }
        playerEquip = 0;
        update_ui("blank");
    }
}

function player_shoot(){
    if((shotX!=0 || shotY !=0) && canShoot){
        if(fireEffect == 0){
            var shot = new bullet(playerX+16, playerY+16, shotX, shotY);
            shot.instantiate();
        }
        if(fireEffect == 5){
            var shot1 = new bullet(playerX+16, playerY+16, -1, 1);
            var shot2 = new bullet(playerX+16, playerY+16, -1, 0);
            var shot3 = new bullet(playerX+16, playerY+16, -1, -1);
            var shot4 = new bullet(playerX+16, playerY+16, 1, 1);
            var shot5 = new bullet(playerX+16, playerY+16, 1, -1);
            var shot6 = new bullet(playerX+16, playerY+16, 1, 0);
            var shot7 = new bullet(playerX+16, playerY+16, 0, 1);
            var shot8 = new bullet(playerX+16, playerY+16, 0, -1);
            shot1.instantiate();
            shot2.instantiate();
            shot3.instantiate();
            shot4.instantiate();
            shot5.instantiate();
            shot6.instantiate();
            shot7.instantiate();
            shot8.instantiate();
        }
        if(fireEffect == 7){
            var shot1 = new bullet(playerX+16, playerY+16, shotX, shotY);
            var shot2;
            var shot3;
            if(shotX != 0 && shotY != 0 ){
                shot2 = new bullet(playerX+16, playerY+16, shotX*Math.cos(Math.PI/12), shotY*Math.sin(Math.PI/12));
                shot3 = new bullet(playerX+16, playerY+16, shotX*Math.cos(5*(Math.PI/12)), shotY*Math.sin(5*(Math.PI/12)));
            }
            else if(shotY == 0){
                shot2 = new bullet(playerX+16, playerY+16, shotX*Math.cos(Math.PI/6), Math.sin(Math.PI/6));
                shot3 = new bullet(playerX+16, playerY+16, shotX*Math.cos(-(Math.PI/6)), Math.sin(-(Math.PI/6)));
            }   
            else if(shotX == 0){
                shot2 = new bullet(playerX+16, playerY+16, Math.cos(Math.PI/3), shotY*Math.sin(Math.PI/3));
                shot3 = new bullet(playerX+16, playerY+16, -Math.cos((Math.PI/3)), shotY*Math.sin(Math.PI/3));
            }   
            shot1.instantiate();
            shot2.instantiate();
            shot3.instantiate();
        }
        canShoot = false;
        setTimeout(function() {canShoot = true}, fireRate)
    }
}

function player_sprite_update(){
    if(rightPressed || leftPressed || upPressed || downPressed){
            player.style.backgroundImage = "url(../pictures/characters/player_move.png)"
            player.classList.add("move");
    }
    else{
        player.style.backgroundImage = "url(../pictures/characters/player_idle.png)";
        player.classList.remove("move");
    }
}

