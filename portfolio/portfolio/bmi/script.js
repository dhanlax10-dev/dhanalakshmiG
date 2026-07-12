function calculateBMI(){

    let height = document.getElementById("height").value;
    let weight = document.getElementById("weight").value;

    if(height==="" || weight===""){
        alert("Please enter height and weight");
        return;
    }

    let meter = height / 100;

    let bmi = weight / (meter * meter);

    bmi = bmi.toFixed(2);

    let status="";

    if(bmi < 18.5){
        status = "Underweight";
    }
    else if(bmi < 25){
        status = "Normal Weight";
    }
    else if(bmi < 30){
        status = "Overweight";
    }
    else{
        status = "Obese";
    }

    document.getElementById("result").innerHTML = "Your BMI : " + bmi;
    document.getElementById("status").innerHTML = "Status : " + status;
}