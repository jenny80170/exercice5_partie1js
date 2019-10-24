function Multiple(){
  var number1 = document.getElementById('firstNumber').value;
  var number2 = document.getElementById('secondNumber').value;
  number1 = Math.trunc(number1);
  window.alert(number1 * number2);
}
