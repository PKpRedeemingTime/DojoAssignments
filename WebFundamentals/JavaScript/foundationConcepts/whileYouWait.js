function whileYouWait(){
    for(var i = 365; i >= 0; i--) {
        if(i > 30) {
            console.log(i, "days until my birthday. That's so long!");
        }
        else if(i < 31 && i > 4) {
            console.log("Only", i, "days until my birthday...");
        }
        else if(i < 5 && i > 1) {
            console.log("It's", i, "days until my birthday! It's", i, " days until my birthday! It's only ", i, " days until my birthday, y'all!!");
        }
        else if(i === 1) {
            console.log("It's", i, "day until my birthday! It's", i, " day until my birthday! It's only ", i, " day until my birthday, y'all!!")
        }
        else {
            console.log("It's my birthday!!! It's my birthday! Happy birthday to me!!!");
        }
    }
}