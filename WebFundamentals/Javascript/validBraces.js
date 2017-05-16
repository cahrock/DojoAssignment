
function validBraces(str){
    var arr = [];
    var dict = {
        "(":")",
        "{":"}",
        "[":"]"
    }
    for(var i = 0; i < str.length; i++){
        if(str[i]=="(" || str[i]=="[" || str[i]=="{"){
            arr.push(str[i]);
        }
        else {
            if(str[i] == ")"){
                if(arr[arr.length-1] == "("){
                    arr.pop();
                }
                else {
                    return false;
                }
            }
            else if(str[i] == "]"){
                if(arr[arr.length-1] == "["){
                    arr.pop();
                }
                else {
                    return false;
                }
            }
            else if(str[i] == "}"){
                if(arr[arr.length-1] == "{"){
                    arr.pop();
                }
                else {
                    return false;
                }
            }
        }
    }
    if(arr.length == 0){
        return true;
    } else {
        return false;
    }
}
console.log(validBraces('()'));
