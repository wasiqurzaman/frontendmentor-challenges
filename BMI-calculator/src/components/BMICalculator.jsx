import Result from "./Result";

function BMICalculator() {
  return (
    <div className="bg-white mx-auto p-6 max-w-sm rounded-2xl absolute bottom-24 translate-y-full left-0 ">
      <h3 className="text-2xl font-medium mb-6">Enter your details below</h3>
      <form>
        <div className="flex flex-row gap-20 mb-6">
          <div className="flex items-center">
            <input type="radio" name="unit" id="metric" className="w-7 h-7" />
            <label htmlFor="metric" className="text-lg font-medium ml-4">
              Metric
            </label>
          </div>
          <div className="flex items-center">
            <input type="radio" name="unit" id="imperial" className="w-7 h-7" />
            <label htmlFor="imperial" className="text-lg font-medium ml-4">
              Imperial
            </label>
          </div>
        </div>
        <div>
          <div className="flex flex-col gap-1 mb-4">
            <label htmlFor="height" className="text-slate-400 text-md">
              Height
            </label>
            <div className="flex items-center gap-4 h-20 w-full border-2 border-zinc-500 rounded-xl overflow-hidden">
              <input
                type="number"
                name="height"
                id="height"
                className="h-full w-64 py-2 px-6 border-none text-4xl font-bold outline-none"
              />
              <span className="text-blue-500 text-3xl font-medium">cm</span>
            </div>
          </div>
          <div className="flex flex-col gap-1 mb-4">
            <label htmlFor="weight" className="text-slate-400 text-md">
              Weight
            </label>
            <div className="flex items-center gap-4 h-20 w-full border-2 border-zinc-500 rounded-xl overflow-hidden">
              <input
                type="number"
                name="weight"
                id="weight"
                className="h-full w-64 py-2 px-6 border-none text-4xl font-bold outline-none"
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
