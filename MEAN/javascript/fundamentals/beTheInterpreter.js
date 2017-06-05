var first_variable; //variable declared
function firstFunc() {
  first_variable = "Not anymore!!!";
  console.log(first_variable);
} //function created
console.log(first_variable); //console.log is called before variable set, undefined logged
first_variable = "Yipee I was first!"; //sets variable
console.log(first_variable); //logs newly set variable; fuction was never called

var food; //outer variable declared
function eat() {
    var food;
    food = "half-chicken";
    console.log(food);
    food = "gone";
    console.log(food);
} //function created; inner variable declared, but it is separate from the outer variable
food = "Chicken"; //variable set
eat(); //function called, logs "half=chicken" and "gone"
console.log(food); //logs outer variable "chicken"

var new_word; //variable declared
function lastFunc() {
  new_word = "old";
} //function created and outer variable changes when function called
new_word = "NEW!"; //outer variable set
console.log(new_word); //outer variable logged, function was never called