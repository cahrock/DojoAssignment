var str = 'os1a3y5w789a2t4?6!h?0'

function getDigits(str){
    var newInt = "";
    var newStr = "";
    for(var i = 0; i < str.length; i++){
        if(parseInt(str[i]) || parseInt(str[i]) === 0){ // checking for numbers  if it's a true number and zeroes
            newStr += str[i]; // building new string of just numbers newStr = newStr + str[i]
        }
    }
    return Number(newStr) // convert new string to numbers
}

var new_number = getDigits(str)
console.log(new_number);
