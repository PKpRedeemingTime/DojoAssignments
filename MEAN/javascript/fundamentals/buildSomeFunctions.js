function runningLogger() {
    console.log("I am running!");
}
runningLogger();
function multiplyByTen(num) {
    return num*10;
}
console.log(multiplyByTen(5));
function stringReturnOne() {
    return "First string";
}
function stringReturnTwo() {
    return "Second string";
}
function caller(func) {
    if(typeof(func) == "function") {
        func();
    }
}
caller(stringReturnOne());
function myDoubleConsoleLog(func1,func2) {
    if(typeof(func1) == "function" && typeof(func2) == "function") {
        console.log(func1());
        console.log(func2());
    }
}
function caller2 (param) {
    console.log("starting");
    var y = setTimeout(function() {
        if (typeof(param) == "function") {
            param(stringReturnOne(), stringReturnTwo());
        }
    }, 2000);
    console.log('ending');
    return "interesting";
}
caller2(myDoubleConsoleLog);