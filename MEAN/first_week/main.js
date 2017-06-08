var x = [3,5,"Dojo", "rocks", "Michael", "Sensei"]
console.log(x);
x.push('100');
console.log(x);
var arr = ["hello", "world", "JavaScript is Fun"]
for( var i = 0; i<arr.length; i++){
    x.push(arr[i]);
}
console.log(x);
var count = 0;
for(var i=0; i<501; i++){
    count += i;
}
console.log(count);


var arr1 = [1, 5, 90, 25, -3, 0];
var min = arr1[0];
for( var i = 0; i < arr1.length; i++){
    if(arr1[i]< min){
        min = arr1[i]
    }
}
console.log(min);

var arr2 = [1, 5, 90, 25, -3, 0];
var sum = 0;
var avg = 0;
for( var i = 0; i < arr2.length; i++){
    sum += arr2[i];
    avg = sum / arr2.length
}
console.log(avg);

var newNinja = {
 name: 'Jessica',
 profession: 'coder',
 favorite_language: 'JavaScript', //like that's even a question!
 dojo: 'Dallas'
}

for(var key in newNinja){
    if(newNinja.hasOwnProperty(key)){
        console.log(key + ' = ' + newNinja[key]);
    }
}
