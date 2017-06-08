var _ = {
   map: function(arr, callback) {
        for(var i =0; i< arr.length; i++){
            arr[i] = callback(arr[i]);
        }
        return arr
   },
   reduce: function(arr, callback, memo) {
       for(var i=0; i<arr.length; i++){
           memo = callback(memo, arr[i]);
       }
       return memo;
   },
   find: function(arr, callback) {
       for(var i=0; i < arr.length; i++){
           if(callback(arr[i])){
               return arr[i];
           }
       }
   },
   filter: function(arr, callback) {
        var temp = [];
        for(var i=0; i < arr.length; i++){
            if(callback(arr[i])){
                temp.push(arr[i]);
            }
        } return temp;
   },
   reject: function(arr, callback) {
       var temp = [];
       for(var i=0; i < arr.length; i++){
           var x = callback(arr[i]);
           if(!x){
               temp.push(arr[i]);
           }
       }
       return temp
   }
 }
// you just created a library with 5 methods!

console.log(_.map([1,2,3], function(num){ return num * 3 }));

console.log(_.reduce([2,4,6,3,5,7], function(memo, num){ return memo + num }, 0));

console.log(_.find([2,4,6,3,5,7], function(num){ return num === 3 }));

console.log(_.filter([2,4,6,3,5,7], function(num){ return num % 3 = 0}));

console.log(_.reject([2,4,6,3,5,7], function(num){ return num % 3 = 0}));
