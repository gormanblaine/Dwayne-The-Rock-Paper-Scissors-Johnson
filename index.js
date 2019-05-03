let wins = 0;
let losses = 0;
let ties = 0;

function computerMove() {
   let randInt = Math.floor(Math.random()*3)
    if (randInt === 0){
        return "rock1"
    }
    if (randInt === 1){
        return "rock2"
    }
    if (randInt === 2){
        return "rock3"
    }
}
function updateScore(result) {
    if (result === "won") {
        wins = wins + 1;
        document.getElementById("wins").innerHTML = wins;
    }
    if (result === "tied") {
        ties = ties + 1;
        document.getElementById("ties").innerHTML = ties;
    }
    if (result === "lost") {
        losses = losses + 1;
        document.getElementById("losses").innerHTML = losses;
    }
}
function onClickRock1() {
    let cm = computerMove();
    console.log(cm)
    if (cm === "rock1") {
        updateScore("tied")
        alert('Computron picked Dwayne the "Clock" Johnson which means you tied')
    }
    if (cm === "rock2") {
        updateScore("lost")
        alert('Computron picked Dwayne the "Lock" Johnson which means you lost')
    }
    if (cm === "rock3") {
        updateScore("won")
        alert('Computron picked Dwayne the "Crocs" Johnson which means you won')
    }
}

function onClickRock2() {
    let cm = computerMove();
    if (cm === "rock1") {
        updateScore("won")
        alert('Computron picked Dwayne the "Clock" Johnson which means you won')
    }
    if (cm === "rock2") {
        updateScore("tied")
        alert('Computron picked Dwayne the "Lock" Johnson which means you tied')
    }
    if (cm === "rock3") {
        updateScore("lost")
        alert('Computron picked Dwayne the "Crocs" Johnson which means you lost')
    }
}

function onClickRock3() {
    let cm = computerMove();
    if (cm === "rock1") {
        updateScore("lost")
        alert('Computron picked Dwayne the "Clock" Johnson which means you lost')
    }
    if (cm === "rock2") {
        updateScore("won")
        alert('Computron picked Dwayne the "Lock" Johnson which means you won')
    }
    if (cm === "rock3") {
        updateScore("tied")
        alert('Computron picked Dwayne the "Crocs" Johnson which means you tied')
    }
}

document.getElementById("rock1").onclick = onClickRock1;
document.getElementById("rock2").onclick = onClickRock2;
document.getElementById("rock3").onclick = onClickRock3;
