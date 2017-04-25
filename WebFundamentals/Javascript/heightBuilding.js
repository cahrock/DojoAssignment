var newArr = [];

function heightBuilding (arr){
  var h = 0;
  for(var i = 0; i < arr.length; i++){
    if(arr[i] >= h){
      newArr.push(arr[i])
    }else {
      continue;
    }
  }
  console.log(newArr)
}


heightBuilding([-4,2,-5,3,6])
