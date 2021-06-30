function spawn_debug_goblin(){
    var posX = roll(32,448);
    var posY = roll(32,448);
    var enemy = new monster(1, posX, posY);
    enemy.spawn();
}
function spawn_debug_mummy(){
    var posX = roll(32,448);
    var posY = roll(32,448);
    var enemy = new monster(2, posX, posY);
    enemy.spawn();
}
function spawn_debug_dragon(){
    var posX = roll(32,448);
    var posY = roll(32,448);
    var enemy = new monster(3, posX, posY);
    enemy.spawn();
}
function spawn_debug_monster(){
    var posX = roll(32,448);
    var posY = roll(32,448);
    var id = roll(1,3);
    var enemy = new monster(id, posX, posY);
    enemy.spawn();
}
function spawn_debug_pickup(){
    var posX = roll(32,448);
    var posY = roll(32,448);
    var id = roll(1,8);
    var pick = new pickup(id, posX, posY);
    pick.spawn();
}