// function myOriginalFunction() {
//     console.log('hello');
// }

// function invokedFunction(callback) {
//     var x = setTimeout(function() {
//         callback();
//     }, 4000)
// }

// invokedFunction(myOriginalFunction);
// invokedFunction(function() {console.log('world')});
// //

// var ninja = 'Libby';
// setTimeout( function (){ console.log(ninja); }, 2000 );
// console.log(ninja);

// console.log("NOW: ");
// console.log("Declaring and assigning variable 'ninja'.");
// var ninja = 'Libby';

// setTimeout( function myCallbackFunction(){
//   console.log("LATER: ")
//   console.log(ninja, "LATER"); }, 2000
// );

// console.log("Printing ninja value.");
// console.log(ninja, "NOW");
// //

// function doSomething(possibleCallback) {
//   if (typeof(possibleCallback) === 'function'){
//     console.log('possibleCallback is a callback!');
//     possibleCallback(); //we can invoke the callback!
//   }
//   else {
//     console.log('possibleCallback: ', possibleCallback, ' is not a callback function.');
//   }
// }
// doSomething(function myCallback(){ console.log('yes, I am a callback!') });
// doSomething('string');
// //

// function makePasta(pasta, makeSauce) {
//   console.log("Boiling water");
//   console.log("Putting " + pasta + " pasta in the water");
//   // create a variable for sauce!
//   var sauce = makeSauce();          // invoke makeSauce, our callback
//   console.log("Mixing sauce");
//   console.log("Pasta is done!");
//   return pasta + " Pasta with " + sauce + " sauce! Voila!";
// }
// function makePesto() {
//   console.log("Making Pesto");
//   return "pesto";
// }
// function makeAlfredo() {
//   console.log("Making Alfredo");
//   return "alfredo";
// }


// // we pass the whole makePesto recipe to makePasta!
// console.log(makePasta("Penne", makePesto));


// // notice lack of parentheses after makeAlfredo.
// // Remember: we want to pass the function, not execute it and pass a return value.
// console.log(makePasta("Farfalle", makeAlfredo));
// // 

// function leadBootcamp(language, leader){
//     var outcome = leader(language);
//     console.log(outcome);
// }
// function Mike(language){
//   var languages={
//     'javascript':'successful leader',
//     'PHP':'successful leader',
//     'Python':'successful leader',
//     'Ruby':'successful leader',
//   }
//   if(languages[language]){
//     return languages[language];
//   }
//   else {
//     return "maybe not yet";
//   }
// }
// function Charlie(language){
//   var languages={
//     'javascript':'successful leader',
//     'PHP':'successful leader',
//     'Python':'successful leader',
//     'Ruby':'successful leader',
//   }
//   if(languages[language]){
//     return languages[language];
//   }
//   else {
//     return "maybe not yet";
//   }
// }
// function Jimmy(language){
//   var languages={
//     'javascript':'successful leader',
//     'PHP':'successful leader',
//     'Python':'successful leader',
//     'Ruby':'successful leader',
//     'iOS':'successful leader',
//     'java_android':'successful leader',
//   }
//   if(languages[language]){
//     return languages[language];
//   }
//   else {
//     return "maybe not yet";
//   }
// }
// leadBootcamp('java_android', Mike);
// leadBootcamp('java_android', Charlie);
// leadBootcamp('java_android', Jimmy);
// // 

function getStuffFromDatabase(callback){
  var data;
  var myTimer = setTimeout(function(){
    if (typeof(callback) == 'function'){
      //it just got back from the DB!
      data = [{name:'Todd'},{name:'Michael'},{name:'Portia'}];
      callback(data);
    }
  }, 10000);
  // it takes 10 seconds to get anything back <- you should fix your cloud server.!!!
  return data;
}    
//simulated request (failing);
function requestDataFromDatabase(){
  var data = getStuffFromDatabase(); // this should return my data right??
  console.log(data);
}
function catchFly(){
  console.log('I just caught a fly!');
}
requestDataFromDatabase();
// keep running my program!
console.log('Hello');
catchFly();
//