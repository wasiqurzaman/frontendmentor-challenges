import BMICalculator from "./BMICalculator";

function Header() {
  return (
    <header className="flex flex-col max-w-[1200px] mx-auto relative">
      <div className="w-full px-8 bg-blue-100 pb-40 text-center rounded-b-[3rem]">
        <img src="/bmi.png" alt="BMI icon" className="w-16 mt-8 mx-auto" />
        <h1 className="text-slate-700 text-5xl font-semibold mt-8">
          Body Mass Index Calculator
        </h1>
        <p className="text-slate-600 text-sm leading-6 mt-8">
          Better understand your weight in relation to your height using our
          body mass index (BMI) calculator. While BMI is not the sole
          determinant of a healthy weight, it offers a valuable starting point
          to evaluate your overall health and well being.
        </p>
      </div>
      <BMICalculator />
    </header>
  );
}

export default Header;
