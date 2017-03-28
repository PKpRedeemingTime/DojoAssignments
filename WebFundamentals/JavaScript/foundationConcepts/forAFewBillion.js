function forAFewBillion() {
    var money = .01
    for(var i = 1; i < 31; i++) {
        money = money * 2;
    }
    console.log(money);
}
//the answer is $10,737,418.24//

function tenThousandBreak() {
    var money = .01;
    for(var i = 1; money <= 10000; i++) {
        money = money * 2;
    }
    console.log(i);
}
//the answer is 21//

function oneBillionBreak() {
    var money = .01;
    for(var i = 1; money <= 1000000000; i++) {
        money = money * 2;
    }
    console.log(i);
}
//the answer is 38//

function infinityBreak() {
    var money = .01;
    for(var i = 1; money <= Infinity; i++) {
        money = money * 2;
    }
    console.log(i);
}
//it printed nothing//