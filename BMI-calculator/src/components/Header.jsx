import BMICalculator from "./BMICalculator";

function Header() {
  return (
    <header className="mb-24 max-w-full relative">
      {/* <div className="w-full h-[44rem] bg-blue-100 rounded-b-[3rem] lg:w-[80rem] lg:rounded-none lg:rounded-br-[3rem] absolute top-0 left-0"></div> */}
      <div className="md:px-12 lg:max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 lg:gap-x-16">
        <div className="p-8 text-center lg:text-left lg:col-span-1 z-10">
          <img
            src="/bmi.png"
            alt="BMI icon"
            className="w-16 mt-4 mx-auto md:mx-0"
          />
          <h1 className="text-slate-700 text-5xl font-semibold mt-12">
            Body Mass Index Calculator
          </h1>
          <p className="text-slate-500 leading-6 mt-10">
            Better understand your weight in relation to your height using our
            body mass index (BMI) calculator. While BMI is not the sole
            determinant of a healthy weight, it offers a valuable starting point
            to evaluate your overall health and well being.
          </p>
        </div>
        <BMICalculator />
      </div>
    </header>
  );
}

export default Header;
