import { useState } from "react";
import BMIForm from "./BMIForm";
import Result from "./Result";

function BMICalculator() {
  const [BMI, setBMI] = useState(0);
  const [unit, setUnit] = useState("metric");
  const [lowerLimit, setLowerLimit] = useState(0);
  const [upperLimit, setUpperLimit] = useState(0);

  function calculateBMI(height, weight, unit) {
    if (!Number(height) || !Number(weight)) {
      setBMI(0);
      return;
    }

    //   // Ideal body weight is when BMI is in the range of 18.5 to 25
    //   // Wt (kg) = 2.2 × BMI + 3.5 × BMI × (Ht − 1.5 m)  (metric system)
    //   // Wt (lb) = 5 × BMI + (BMI ÷ 5) × (Ht − 60 in)    (imperial/US system)
    //   // Reference ==> https://pmc.ncbi.nlm.nih.gov/articles/PMC4841935/
    if (unit === "metric") {
      const bmi = weight / ((height * height) / 10000);
      setBMI(bmi);
      const lowerLimit = 2.2 * 18.5 + 3.5 * 18.5 * (height / 100 - 1.5);
      setLowerLimit(Number.parseFloat(lowerLimit).toFixed(1));
      const upperLimit = 2.2 * 24.9 + 3.5 * 24.9 * (height / 100 - 1.5);
      setUpperLimit(Number.parseFloat(upperLimit).toFixed(1));
    } else {
      const bmi = (weight / (height * height)) * 703;
      const lowerLimit = 5 * 18.5 + (18.5 / 5) * (height - 60);
      setLowerLimit(Number.parseFloat(lowerLimit).toFixed(1));
      const upperLimit = 5 * 25 + (25 / 5) * (height - 60);
      setUpperLimit(Number.parseFloat(upperLimit).toFixed(1));
      setBMI(bmi);
    }
  }

  let color = "bg-blue-500";
  let feedback = "";
  if (!BMI) {
    color = "bg-blue-500";
    // feedback = "under";
  } else if (BMI <= 18.5) {
    color = "bg-violet-500";
    feedback = "under weight.";
  } else if (BMI <= 24.9) {
    color = "bg-green-600";
    feedback = "a healthy weight.";
  } else if (BMI <= 29.9) {
    color = "bg-amber-600";
    feedback = "over weight.";
  } else if (BMI <= 34.9) {
    color = "bg-rose-500";
    feedback = "obese.";
  } else {
    color = "bg-red-700";
    feedback = "extremely obese.";
  }

  return (
    <div className="bg-white mx-auto p-6 flex-1 lg:col-span-1 rounded-2xl z-20 min-[860px]:mt-32 shadow-md">
      <h3 className="text-2xl font-medium mb-6">Enter your details below</h3>
      <BMIForm calculateBMI={calculateBMI} unit={unit} setUnit={setUnit} />
      <Result
        result={BMI}
        color={color}
        feedback={feedback}
        unit={unit}
        lowerLimit={lowerLimit}
        upperLimit={upperLimit}
      />
    </div>
  );
}

export default BMICalculator;
