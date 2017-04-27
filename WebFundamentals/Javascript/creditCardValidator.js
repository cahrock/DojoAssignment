function isCCvalid(arr) {
    var sum = 0, len = arr.length - 2, last = arr[arr.length-1];
    if (((arr.length >= 13)&&(arr.length <= 19)) != true)
        return false;
    for(var i = len; i >= 0; i--){
        if(i%2===1)
            arr[i] = arr[i]*2;
        if(arr[i]>9)
            arr[i] = arr[i]-9;
        sum = sum + arr[i];
    }
    console.log('Sum:',sum);
    console.log('arr:',arr);
    sum+=last;
    console.log('last:',sum)
    if(sum % 10 === 0)
        return true;
    return false;
}

var test=[2,1,1,1,1,1,1,1,1,1,1,1,1];

isCCvalid(test);
