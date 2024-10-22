import Result from "./Result";

function BMICalculator() {
  return (
    <div className="bg-white mx-auto p-6 flex-1 lg:col-span-1 rounded-2xl z-20 md:mt-32">
      <h3 className="text-2xl font-medium mb-6">Enter your details below</h3>
      <form className="w-full flex flex-col">
        <div className="flex w-full flex-row gap-8 mb-6">
          <div className="flex items-center">
            <input
              type="radio"
              name="unit"
              id="metric"
              className="w-6 h-6 cursor-pointer"
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
            <div className="flex gap-4  items-center h-16 w-full border-2 border-zinc-500 rounded-xl overflow-hidden">
              <input
                type="number"
                name="height"
                id="height"
                className="w-full sm:w-3/4 md:w-2/3 lg:w-1/3 border p-2 sm:p-3 md:p-4 lg:p-6 rounded border-none text-3xl font-bold outline-none"
              />
              <span className="text-blue-500 text-3xl font-medium">cm</span>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="weight" className="text-slate-400 text-md">
              Weight
            </label>
            <div className="flex gap-4 items-center h-16 w-full border-2 border-zinc-500 rounded-xl overflow-hidden">
              <input
                type="number"
                name="weight"
                id="weight"
                className="w-full sm:w-3/4 md:w-2/3 lg:w-1/3 border p-2 sm:p-3 md:p-4 lg:p-6 rounded border-none text-3xl font-bold outline-none"
              />
              <span className="text-blue-500 text-3xl font-medium">kg</span>
            </div>
          </div>
        </div>
      </form>
      <Result />
    </div>
  );
}

export default BMICalculator;
