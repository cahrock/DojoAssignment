var str = "        There's no    free    lunch - gotta pay your way!."
var acr = ""
function acronym(s){

    for(var r = 0; r<s.length; r++){
        if(s[r]===" "){
            if(s[r+1]!=" "){
                acr += s[r+1];
                break
            }
        }
    }
    for(var i = r+1; i < str.length; i++){
        if(s[i] === " "){
            if(s[i+1]!=" "){
                acr += s[i+1].toUpperCase();
            }

        }
    }
    return acr
}

console.log(acronym(str));
