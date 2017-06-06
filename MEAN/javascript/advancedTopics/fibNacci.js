function fib() {
    var pre = 0;
    var cur = 1;
    function nacci() {
        console.log(cur);
        var temp = pre;
        pre = cur;
        cur = cur + temp;
    }
    return nacci;
}
var fibCounter = fib();
fibCounter();
fibCounter();
fibCounter();
fibCounter();
fibCounter();
fibCounter();