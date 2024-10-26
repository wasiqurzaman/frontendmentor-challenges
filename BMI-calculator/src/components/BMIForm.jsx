import { useEffect, useState } from "react";

function BMIForm({ calculateBMI }) {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [unit, setUnit] = useState("imperial");

  useEffect(() => {
    calculateBMI(height, weight, unit);
  }, [calculateBMI, height, weight, unit]);

  function handleUnitChange(e) {
    setUnit(e.target.value);
    resetForm();
  }

  function resetForm() {
    setHeight("");
    setWeight("");
  }

  return (
    <form className="w-full flex flex-col">
      <div className="flex w-full flex-row gap-8 mb-6">
        <div className="flex items-center">
          <input
            type="radio"
            name="unit"
            id="metric"
            className="w-6 h-6 cursor-pointer"
            value="metric"
            checked={unit === "metric"}
            onChange={handleUnitChange}
          />
          <label htmlFor="metric" className="text-lg font-medium ml-2">
            Metric
          </label>
        </div>
        <div className="w-full flex items-center">
          <input
            type="radio"
            name="unit"
            id="imperial"
            className="w-6 h-6 cursor-pointer"
            value="imperial"
            checked={unit === "imperial"}
            onChange={handleUnitChange}
          />
          <label htmlFor="imperial" className="text-lg font-medium ml-2">
            Imperial
          </label>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 w-full">
        <div className="flex flex-col gap-1 mb-4">
          <label htmlFor="height" className="text-slate-400 text-md">
            Height
          </label>
          <div className="flex gap-2 items-center px-4 h-16 w-full border-2 border-zinc-500 rounded-xl overflow-hidden">
            <div className="h-full">
              <input
                type="number"
                name="height"
                id="height"
                value={height}
                onChange={e => setHeight(e.target.value)}
                className="block w-full h-full border p-2 rounded border-none text-3xl font-bold outline-none appearance-none"
              />
            </div>
            <span className="text-blue-500 text-3xl font-medium">
              {unit === "metric" ? "cm" : "inch"}
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="weight" className="text-slate-400 text-md">
            Weight
          </label>
          <div className="flex gap-2 items-center px-4 h-16 w-full border-2 border-zinc-500 rounded-xl overflow-hidden">
            <div className="h-full">
              <input
                type="number"
                name="weight"
                id="weight"
                value={weight}
                onChange={e => setWeight(e.target.value)}
                className="block w-full h-full border p-2 rounded border-none text-3xl font-bold outline-none appearance-none"
              />
            </div>
            <span className="text-blue-500 text-3xl font-medium">
              {unit === "metric" ? "kg" : "lb"}
            </span>
          </div>
        </div>
      </div>
    </form>
  );
}

export default BMIForm;
