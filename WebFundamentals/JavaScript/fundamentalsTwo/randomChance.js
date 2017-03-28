function randomChance(winnings) {
    for(var i = 50); i < winnings && i > 0; i--) {
        if(Math.random === .01) {
            i = i + Math.trunc(Math.random * 50) + 51;
        }
    }
    return i;
}