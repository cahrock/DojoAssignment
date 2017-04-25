function randomChance(q){
    var winSlot = Math.floor(Math.random()*100)
    for ( var x = q; x > 0 ; x--){

        var chanceToWin = Math.floor(Math.random()*100)
        if (chanceToWin == winSlot){

            console.log("You win the Slot");
        }
        else {
            console.log("You did not win the slot");
        }
    }
}

randomChance(100)
