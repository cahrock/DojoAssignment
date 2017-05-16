

function alphaWord(str){

    for(var i =0; i < str.length; i++){
        if(str[i] >= str[i+1]){
            return false;
        }
    } return true
}
console.log(alphaWord('actua'));
