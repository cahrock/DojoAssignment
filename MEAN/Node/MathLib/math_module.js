module.exports = function (){
  return {
    add: function(num1, num2) {
         console.log("the sum "+num1 + " and "+num2+ " is: ", num1 + num2);
    },
    multiply: function(num1, num2) {
         console.log("The result " +num1 + " x " + num2+ " is: ", num1 * num2);
    },
    square: function(num) {
         console.log("The square of " +num+ " is: ", Math.pow(num,2));
    },
    random: function(num1, num2) {
        console.log("Random number between "+ num2 + " and "+ num1 + " = ", Math.floor((Math.random() * num1) + num2));
    }
  }
};
