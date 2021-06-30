bulletArray = new Array();

function bullet(x, y, dirX, dirY){
    this.bulletX = x;
    this.bulletY = y;
    this.bulletDirectionX = dirX;
    this.bulletDirectionY = dirY;
    this.bulletSpeed =4;
    this.instantiate = function() {
        this.div = document.createElement("div");
        document.getElementById("stage").appendChild(this.div);
        this.div.className = "bullet";
        this.div.style.top = this.bulletY+"px";
        this.div.style.left = this.bulletX+"px";
        bulletArray.push(this);
        this.lifeSpan = setInterval(this.bullet_collision, fps/2, this);
    }
    this.bullet_collision = function(shot) {
        if(shot.bulletX < 32 || shot.bulletX >= 468 || shot.bulletY < 32 || shot.bulletY >= 468){
            remove_bullet(shot);
        }
        if(shot.bulletDirectionX!=0 && shot.bulletDirectionY!=0){
            shot.bulletX += (shot.bulletSpeed * shot.bulletDirectionX)/Math.sqrt(2);
            shot.bulletY += (shot.bulletSpeed * shot.bulletDirectionY)/Math.sqrt(2);
        }
        else if(shot.bulletDirectionX!=0){
            shot.bulletX += shot.bulletSpeed * shot.bulletDirectionX;
        }
        else if(this.bulletDirectionY!=0){
            shot.bulletY += shot.bulletSpeed * shot.bulletDirectionY;
        }
        shot.div.style.top = shot.bulletY+"px";
        shot.div.style.left = shot.bulletX+"px";
        for(var i=0; i<enemies.length; i++){
            if(Math.abs(shot.bulletX-enemies[i].monsterX)<=20 && Math.abs(shot.bulletY-enemies[i].monsterY)<=20){
                enemies[i].get_hit(i);
                remove_bullet(shot);
            }
        }
    }
}

function remove_bullet(shot){
    clearInterval(shot.lifeSpan);
    document.getElementById("stage").removeChild(shot.div);
    bulletArray.splice(shot.position,1);
}

