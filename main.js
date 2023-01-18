
function calculateAverage() {
  var num1 = document.getElementById("num1").value;
  var num2 = document.getElementById("num2").value;
  var num3 = document.getElementById("num3").value;

  var average = (parseFloat(num1) + parseFloat(num2) + parseFloat(num3)) / 3;
  document.getElementById("result").innerHTML = "The average is: " + average;
}
