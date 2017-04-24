function canIHaveTheTime(h,m,p){


  if(p =="AM" && m <= 30){
    console.log("It's just past "+ h + " in the morning.");
  }
  else if(p =="AM" && m >30){
    console.log("It's almost "+ (h+1) + " in the morning.")
  }
  else if(p =="PM" && m <= 30){
    console.log("It's just past "+ h + " in the evening.")
  }
  else {
    console.log("It's almost "+ (h+1) + " in the evening.");
  }
};


console.log('Can I have the time? ') + canIHaveTheTime(9,40,"AM");
console.log('Can I have the time? ') + canIHaveTheTime(9,10,"AM");
console.log('Can I have the time? ') + canIHaveTheTime(10,40,"PM");
console.log('Can I have the time? ') + canIHaveTheTime(3,10,"PM");
  
