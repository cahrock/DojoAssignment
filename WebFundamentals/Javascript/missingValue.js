function missingValue(arr){
  var temp  =[], missing=0;
  for(var i = 0; i< arr.length; i++){
    temp[arr[i]] = arr[i];
  }
  for(var j=0; j<temp.length; j++){
    if(temp[j]=== undefined){
      missing = j
    }
  }return missing
}

console.log(missingValue([3,0,1,5,6,8,2,7]))
// return 4
