import { useState } from "react";
import BMIForm from "./BMIForm";
import Result from "./Result";

function BMICalculator() {
  const [BMI, setBMI] = useState(0);

  function calculateBMI(height, weight, unit) {
    if (!height || !weight) {
      return;
    }

    if (unit === "metric") {
      const bmi = weight / ((height * height) / 10000);
      setBMI(bmi);
    } else {
      const bmi = (weight / (height * height)) * 703;
      setBMI(bmi);
    }
  }

  let color = "bg-blue-500";
  let feedback = "";
  if (!BMI) {
    color = "bg-blue-500";
    // feedback = "under";
  } else if (BMI <= 18.5) {
    color = "bg-sky-400";
    feedback = "under weight.";
  } else if (BMI <= 24.9) {
    color = "bg-green-500";
    feedback = "a healthy weight.";
  } else if (BMI <= 29.9) {
    color = "bg-amber-500";
    feedback = "over weight.";
  } else if (BMI <= 34.9) {
    color = "bg-red-500";
    feedback = "obese.";
  } else {
    color = "bg-red-700";
    feedback = "extremely obese.";
  }

  return (
    <div className="bg-white mx-auto p-6 flex-1 lg:col-span-1 rounded-2xl z-20 md:mt-32">
      <h3 className="text-2xl font-medium mb-6">Enter your details below</h3>
      <BMIForm calculateBMI={calculateBMI} />
      <Result result={BMI} color={color} feedback={feedback} />
    </div>
  );
}

export default BMICalculator;
