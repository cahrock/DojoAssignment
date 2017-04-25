

function days(d) {


  for ( var x = d; x >= 0; x--){

    if (x > 30){
            console.log(x +" days until my birthday. Such along time.... :(");
        }
        if ( 5<= x && x <= 30){
            console.log(x + " days until my birthday, so exited.... :))");
        }
        if (2 <= x && x < 5) {
            console.log("Yeeyyy " + x + " days until MY BIRTHDAY..!!!!!!!");
        }
        if (x === 1) {
          console.log("Yeesss " + x + " day until MY BIRTHDAY..!!!!!!!");
        }
        if (x === 0) {
          console.log("HAPPY BIRTHDAY ");
        }
  };


}


days(15);
