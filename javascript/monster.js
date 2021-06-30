enemies = new Array();

function monster(hp, monsterX, monsterY) {
    this.hp = hp;
    this.id = hp;
    this.monsterX = monsterX;
    this.monsterY = monsterY;
    switch(this.hp){
        case 1 :
            this.type = "goblin";
            this.score = 3;
            this.speed = 2;
            break;
        case 2 :
            this.type = "mummy";
            this.score = 7;
            this.speed = 1;
            break;
        case 3 :
            this.type = "dragon";
            this.score = 15;
            this.speed = 3;
    }
    this.spawn = function(){
        this.div = document.createElement("div");
        document.getElementById("stage").appendChild(this.div);
        this.div.className = "monster";
        this.div.style.top = this.monsterY+"px";
        this.div.style.left = this.monsterX+"px";
        this.div.style.backgroundImage = "url(../pictures/characters/"+this.type +".png";
        enemies.push(this);
        this.clock = setInterval(monster_chase, fps, this);
    }

    this.get_hit = function(pos) {
        this.hp -= 1;
        if(this.hp == 0){
            death(this, pos);
        }
    } 

    this.monster_move = function(){
        this.div.style.left = this.monsterX+"px";
        this.div.style.top = this.monsterY+"px";
    }
    
    this.drop = function(enemy){
        var odds = roll(1,20);
        var loot_spawn = 0;
        if(odds <= enemy.id){
            var loot = roll(1,30);
            if(loot <= 10 ) {
                loot_spawn = 1;
            }
            else if(loot>10 && loot<=15){
                loot_spawn = 2;
            }
            else if(loot>15 && loot<=17){
                loot_spawn = 3;
            }
            else if(loot>17 && loot<=18){
                loot_spawn = 4;
            }
            else if(loot>18 && loot<=21){
                loot_spawn = 5;
            }
            else if(loot>21 && loot<=24){
                loot_spawn = 6;
            }
            else if(loot>24 && loot<=27){
                loot_spawn = 7;
            }
            else if(loot>28 && loot<=30){
                loot_spawn = 8;
            }
            spawn_pickup(loot_spawn, enemy.monsterX, enemy.monsterY);
        }
    }

}

function damage_player(){
    for(var i=0; i<enemies.length; i++){
        if(Math.abs(playerX-enemies[i].monsterX)<=32 && Math.abs(playerY-enemies[i].monsterY)<=32 && !playerInvincible){
            var invFrame = setTimeout(function() {playerInvincible = false; player.parentNode.classList.remove("blink"); }, 1000);
            if(!playerInvincible){
                playerInvincible = true;
                playerLife -=1;
                player.parentNode.classList.add("blink");
            }
            playerX += (playerX < enemies[i].monsterX) ? -16 : 16;
            playerY += (playerY < enemies[i].monsterY) ? -16 : 16;
        }
    }
}

function death(enemy, pos){
    clearInterval(enemy.clock);
    enemy.drop(enemy);
    document.getElementById("stage").removeChild(enemy.div);
    set_score(enemy.score);
    enemies.splice(pos,1);
}

function monster_chase(enemy){
        var theta = Math.atan((Math.abs(playerY-enemy.monsterY))/(Math.abs(playerX-enemy.monsterX)));   
        enemy.monsterX += (enemy.speed * Math.sign(playerX - enemy.monsterX))*Math.cos(theta);
        enemy.monsterY += (enemy.speed * Math.sign(playerY - enemy.monsterY))*Math.sin(theta);
        enemy.monsterX = bound_control(enemy.monsterX);
        enemy.monsterY = bound_control(enemy.monsterY);
        enemy.monster_move();
}

function monster_collision(){
    for(var i=0; i<enemies.length; i++){
        for(var j=0; j<enemies.length; j++){
            if(j != i){
                var xDistance = Math.abs(distance(enemies[j].monsterX,enemies[i].monsterX))
                var yDistance = Math.abs(distance(enemies[j].monsterY,enemies[i].monsterY))
                if(xDistance<=32 && yDistance<=32){
                    enemies[j].monsterX += (enemies[j].monsterX < enemies[i].monsterX) ? -1 :1;
                    enemies[j].monsterY += (enemies[j].monsterY < enemies[i].monsterY) ? -1 : 1;
                    enemies[i].monsterX += (enemies[i].monsterX < enemies[j].monsterX) ? -1 : 1;
                    enemies[i].monsterY += (enemies[i].monsterY < enemies[j].monsterY) ? -1 : 1;         
              }
          }
        }
    }
}

