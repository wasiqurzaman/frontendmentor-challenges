import BMICalculator from "./BMICalculator";

function Header() {
  return (
    <header className="mb-24 max-w-full relative">
      {/* <div className="w-full h-[44rem] bg-blue-100 rounded-b-[3rem] lg:w-[80rem] lg:rounded-none lg:rounded-br-[3rem] absolute top-0 left-0"></div> */}
      <div className="max-w-[1200px] px-12 mx-auto grid grid-cols-1 min-[860px]:grid-cols-2 md:gap-x-4 lg:gap-x-16">
        <div className="mb-12 text-center md:text-left lg:col-span-1 z-10">
          <img
            src="/bmi.png"
            alt="BMI icon"
            className="w-16 mt-4 mx-auto min-[860px]:mx-0 lg:mt-8"
          />
          <h1 className="text-slate-800 text-5xl font-semibold mt-12 lg:mt-24">
            Body Mass Index Calculator
          </h1>
          <p className="text-slate-600  leading-7 md:text-lg mt-10">
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
