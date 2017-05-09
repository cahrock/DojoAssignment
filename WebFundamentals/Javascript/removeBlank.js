var strings ="PL ayTha tF u nkym usi c";


function easySplit(strings){
  var str = ""
  for( var i =0; i<strings.length; i++){
    if(strings[i] != " "){
      str += strings[i]
    }
  }
  console.log(str)
  return str;
}

easySplit(strings)
