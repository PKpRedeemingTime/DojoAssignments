function sums(x,y) {
    var sum = 0;
    for (var i = x; i <= y; i++) {
        sum+=i;
    }
    console.log(sum);
}
function arrMin(arr) {
    var min = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if (min > arr[i]) {
            min = arr[i];
        }
    }
    return min;
}
function arrAvg(arr) {
    sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum+=arr[i];
    }
    return sum/arr.length;
}
var sums = function(x,y) {
    var sum = 0;
    for (var i = x; i <= y; i++) {
        sum+=i;
    }
    console.log(sum);
}
var arrMin = function(arr) {
    var min = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if (min > arr[i]) {
            min = arr[i];
        }
    }
    return min;
}
var arrAvg = function(arr) {
    sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum+=arr[i];
    }
    return sum/arr.length;
}
var math = {
    sums: function(x,y) {
        var sum = 0;
        for (var i = x; i <= y; i++) {
            sum+=i;
        }
        console.log(sum);
    },
    arrMin: function(arr) {
        var min = arr[0];
        for (var i = 0; i < arr.length; i++) {
            if (min > arr[i]) {
                min = arr[i];
            }
        }
        return min;
    },
    arrAvg: function(arr) {
        sum = 0;
        for (var i = 0; i < arr.length; i++) {
            sum+=arr[i];
        }
        return sum/arr.length;
    }
}
var person = {
    name: "Patrick",
    distance_traveled: 0,
    say_name: function() {
        console.log(person.name);
    },
    say_something: function(something) {
        console.log(`${person.name} says, "${something}"`);
    },
    walk: function() {
        console.log(`${person.name} is walking`);
        person.distance_traveled+=3;
        return person;
    },
    run: function() {
        console.log(`${person.name} is running`);
        person.distance_traveled+=10;
        return person;
    },
    crawl: function() {
        console.log(`${person.name} is crawling`);
        person.distance_traveled+=1;
        return person;
    }
}