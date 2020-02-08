module.exports =
  MathUtils = function() {};
  
  MathUtils.prototype.sum = function(number1, number2) {
    return number1 + number2
  }
  
  MathUtils.prototype.substract = function(number1, number2) {
    return number1 - number2
  }
  
  MathUtils.prototype.multiply = function(number1, number2) {
    return number1 * number2
  }
  
  MathUtils.prototype.divide = function(number1, number2) {
    if (number1 / number2 === Infinity) {
      throw new Error('Forbidden operation')
    }
    return number1 / number2
  }
  
  MathUtils.prototype.average = function(number1, number2) {
    return (number1 + number2) / 2
  }
