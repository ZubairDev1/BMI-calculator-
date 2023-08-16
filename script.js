function calculateBMI() {
    var weight = document.getElementById("weight").value;
    var height = document.getElementById("height").value;
   
    if (weight === "" || height === "") {
    document.getElementById("result").innerHTML = "Please enter both weight and height.";
    return;
    }
   
    var bmi = weight / ((height / 100) * (height / 100));
    bmi = bmi.toFixed(2);
   
    var resultText = "Your BMI is " + bmi + ". ";
   
    if (bmi < 18.5) {
    resultText += "You are underweight.";
    } else if (bmi >= 18.5 && bmi < 25) {
    resultText += "You have a normal weight.";
    } else if (bmi >= 25 && bmi < 30) {
    resultText += "You are overweight.";
    } else {
    resultText += "You are obese.";
    }
   
    document.getElementById("result").innerHTML = resultText;
   }