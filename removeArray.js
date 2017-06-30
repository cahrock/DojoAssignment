function emptyArray(arr){
  var newArr = [];

  for( var i = 0; i < arr.length; i++){
    if(Array.isArray(arr[i])){
      for(var j = 0; j< arr[i].length; j++){
        newArr[newArr.length] = arr[i][j];
      }

    }
    else{
      newArr[newArr.length] = arr[i];
    }
  }return newArr;
}
var n = [1,[2,3],4,[]]
