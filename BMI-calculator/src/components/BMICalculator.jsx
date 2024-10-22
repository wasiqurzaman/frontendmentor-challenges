import { useState } from "react";
import BMIForm from "./BMIForm";
import Result from "./Result";

function BMICalculator() {
  const [result, setResult] = useState();

  console.log(result);

  return (
    <div className="bg-white mx-auto p-6 flex-1 lg:col-span-1 rounded-2xl z-20 md:mt-32">
      <h3 className="text-2xl font-medium mb-6">Enter your details below</h3>
      <BMIForm setResult={setResult} />
      <Result result={result} />
    </div>
  );
}

export default BMICalculator;
