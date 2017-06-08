function myOriFunction(){
    console.log('Hello');
}

function invokedFuction(callback){
    var x = setInterval(function(){
        callback();
    }, 4000)
}

invokedFuction(myOriFunction);
invokedFuction(function(){console.log('World');})
