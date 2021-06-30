var drop = new Array();

function pickup(id, pickupX, pickupY){
    this.id = id;
    this.pickupX = pickupX;
    this.pickupY = pickupY;
    switch(id){
        case 1: //moneta da 1
            this.type = "coin1";
            this.score = 10;
            break;
        case 2: //moneta da 5
            this.type = "coin5";
            this.score = 50;
            break;
        case 3: // vita
            this.type = "life";
            this.score = 100;
            break;
        case 4: // stella
            this.type = "star";
            this.score = 150;
            break;
        case 5: //ruota
            this.type = "wheel";
            this.score = 75;
            break;
        case 6: //caffè
            this.type = "coffee";
            this.score = 75;
            break;
        case 7: //shotgun
            this.type = "shotgun";
            this.score = 75;
            break;
        case 8: //caricatore
            this.type = "ammo";
            this.score = 75;
            break;    
    };
    this.spawn = function(){
        this.div = document.createElement("div");
        document.getElementById("stage").appendChild(this.div);
        this.div.className = "pickup";
        var spawnY = bound_control(pickupY);
        var spawnX = bound_control(pickupX);
        this.div.style.top = spawnY+"px";
        this.div.style.left = spawnX+"px";
        this.div.style.backgroundImage = "url(../pictures/pickups/"+this.type +".png";
        drop.push(this);
        this.despawnTime = setTimeout(this.despawn_pickup, 10000,this);
    }
    
    this.despawn_pickup = function(pick){
    document.getElementById("stage").removeChild(pick.div);
    drop.splice(drop.indexOf(pick),1)
    }

    this.on_pickup = function(){
        set_score(this.score);
        if(this.id == 3) {
            playerLife++;
        }
        if(this.id > 4) {
            playerEquip = this.id;
            update_ui(this.type);
        } 
    }
}

    
function collect_pickup(){
    for(var i=0; i<drop.length; i++){
        if(Math.abs(playerX-drop[i].pickupX)<=32 && Math.abs(playerY-drop[i].pickupY)<=32){
            drop[i].on_pickup();
            document.getElementById("stage").removeChild(drop[i].div);
            clearTimeout(drop[i].despawnTime);
            drop.splice(i,1);
        }
    }
}
