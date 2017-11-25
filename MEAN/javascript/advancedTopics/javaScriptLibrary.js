var _ = {
  map: function(array, callback){
    for (var i = 0; i < array.length; i++) {
      array[i] = callback(array[i]);
    }
  },
  reduce: function(array, callback, memo){
      var el = 0;
      if (!memo){
        memo = array[0];
        el = 1;
      }
      for (var i = el; i < array.length; i++) {
        memo = callback(array[i], memo);
      }
      return memo;

  },
  find: function(array, callback){
    for (var i = 0; i < array.length; i++) {
      if (callback(array[i])){
        return array[i];
      }
    }
  },
  filter: function(array, callback){
    var tempArray =[];
    for (var i = 0; i < array.length; i++) {
      if (callback(array[i])){
        tempArray.push(array[i]);
      }
    }
    return tempArray;
  },
  reject: function(array, callback){
    var tempArray =[];
    for (var i = 0; i < array.length; i++) {
      if (!callback(array[i])){
        tempArray.push(array[i]);
      }
    }
    return tempArray;
  },
}

var array = [3,4,5]
_.map(array, function callback(num){return num * 5;});
console.log(array);
console.log(_.reduce(array, function callback(num, memo){return num + memo;}));
console.log(_.find(array, function callback(num){return num % 2 == 0;}));
console.log(_.filter(array, function callback(num){return num >= 20;}))
console.log(_.reject(array, function callback(num){return num < 20;}))