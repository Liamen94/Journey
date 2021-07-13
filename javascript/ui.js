var scoreBackup;

function set_life_text(player_life){
    var counter = document.getElementById("count");
    counter.textContent = player_life;
}

function set_score(newScore){
    playerScore += newScore;
    if(playerScore >= 999999){
        playerScore = 999999;
    }
    var scoreText = document.getElementById("score");
    if(Number.isNaN(playerScore)) {
        playerScore = scoreBackup;
    }
    var scoreString = "000000" + playerScore;
    scoreString = scoreString.substr(-6);
    scoreText.style.color = "#eadee9"
    if(scoreString == "999999"){
        scoreText.style.color = "#fad72c"
    }
    scoreText.textContent = scoreString;
}

function update_ui(type) {
    var activeItem = document.getElementById("item");
    activeItem.src = "../pictures/ui/"+type+".png";
}