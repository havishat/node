

module.exports = function (num1, num2){
    return {
      add: function(num1, num2) { 
           // add code here 
           console.log("the sum is:", num1 + num2);

      },
      multiply: function(num1, num2) {
           // add code here 
           console.log("the mulitply is:", num1 * num2);

      },
      square: function(num) {
           // add code here 
           console.log("the square is:", num * num);
      },
      random: function(num1, num2) {
         console.log("the random is:", Math.random(num1,num2));
      }
    }
  };