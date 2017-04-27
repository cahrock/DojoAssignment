function skylineHeights(arr){

  var newArr = [];
  var M = 0;

  for( var i = 0; i < arr.length; i++){
    if (arr[i] > arr[i+1] || (arr[i] == arr[i+1])){
      newArr[M] = arr[i];
      M++;
    }
    if (arr[i] < arr[ i+1 ]){
      newArr[M] = arr[i+1];
      M++
    }
  }
  console.log(newArr);
}

var buildings = [-1,1,1,7,3];
skylineHeights(buildings)
