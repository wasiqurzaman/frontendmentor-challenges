import { IconContext } from "react-icons/lib";
import { BsGenderAmbiguous } from "react-icons/bs";
import { PiCakeLight } from "react-icons/pi";
import { GiBiceps } from "react-icons/gi";
import { PiBabyLight } from "react-icons/pi";
import { IoBodyOutline } from "react-icons/io5";

function BMILimitations() {
  return (
    <section className="mt-10">
      <div className="px-6 sm:px-12 max-w-[1200px] mx-auto  grid grid-cols-1 gap-6  sm:grid-cols-2 md:gap-6 lg:grid-cols-12 lg:gap-x-8 lg:gap-y-8">
        <div className="sm:col-start-1 sm:col-end-3 md:mb-8 lg:col-span-6 lg:pr-10">
          <h2 className="text-4xl font-semibold mb-8">Limitations of BMI</h2>
          <p className="text-slate-500 tracking-normal leading-6">
            Although BMI is often a practical indicator of healthy weight, it is
            not suited for every person. Specific groups should carefully
            consider their BMI outcomes, and in certain cases, the measurement
            may not be beneficial to use.
          </p>
        </div>

        <div className="lg:col-start-8 lg:col-end-12 p-8 bg-slate-50 rounded-xl shadow-md">
          <div className="flex items-center gap-4 mb-6">
            <div>
              <IconContext.Provider value={{ color: "brown", size: 28 }}>
                <BsGenderAmbiguous />
              </IconContext.Provider>
            </div>
            <h3 className="text-slate-800 font-semibold text-xl">Gender</h3>
          </div>
          <p className="text-slate-600 text-sm tracking-wide leading-6">
            The development and body fat composition of girls and boys vary with
            age. Consequently, a child&apos;s age and gender are considered when
            evaluating their BMI.
          </p>
        </div>

        <div className="lg:col-start-5 lg:col-end-9 p-8 bg-slate-50 rounded-xl shadow-md">
          <div className="flex items-center gap-4 mb-6">
            <div>
              <IconContext.Provider value={{ color: "green", size: 28 }}>
                <PiCakeLight />
              </IconContext.Provider>
            </div>
            <h3 className="text-slate-800 font-semibold text-xl">Age</h3>
          </div>
          <p className="text-slate-600 text-sm tracking-wide leading-6">
            In aging individuals, increased body fat and muscle loss may cause
            BMI to underestimate body fat content.
          </p>
        </div>

        <div className="lg:col-span-4 p-8 bg-slate-50 rounded-xl shadow-md">
          <div className="flex items-center gap-4 mb-6">
            <div>
              <IconContext.Provider value={{ color: "brown", size: 28 }}>
                <GiBiceps />
              </IconContext.Provider>
            </div>
            <h3 className="text-slate-800 font-semibold text-xl">Muscle</h3>
          </div>
          <p className="text-slate-600 text-sm tracking-wide leading-6">
            BMI may misclassify muscular individual as overweight or obese, as
            it doesn&apos;t differenciate muscle from fat.
          </p>
        </div>

        <div className="lg:col-start-3 lg:col-end-7 p-8 bg-slate-50 rounded-xl shadow-md">
          <div className="flex items-center gap-4 mb-6">
            <div>
              <IconContext.Provider value={{ color: "orange", size: 28 }}>
                <PiBabyLight />
              </IconContext.Provider>
            </div>
            <h3 className="text-slate-800 font-semibold text-xl">Pregnancy</h3>
          </div>
          <p className="text-slate-600 text-sm tracking-wide leading-6">
            Expectant mothers experience weight gain due to their frowing baby.
            Maintaining a healthy pre-pregnancy BMI is advisable to minimise
            health risk for both mother and child.
          </p>
        </div>

        <div className="sm:translate-x-1/2 lg:translate-x-0 lg:col-span-4 p-8 bg-slate-50 rounded-xl shadow-md">
          <div className="flex items-center gap-4 mb-6">
            <div>
              <IconContext.Provider value={{ color: "brown", size: 28 }}>
                <IoBodyOutline />
              </IconContext.Provider>
            </div>
            <h3 className="text-slate-800 font-semibold text-xl">Race</h3>
          </div>
          <p className="text-slate-600 text-sm tracking-wide leading-6">
            Certain health concerns may affect individuals of some Black and
            Asian origins at lower BMIs than others. To learn more, it is
            advised to discuss this with your GP or practice nurse.
          </p>
        </div>
      </div>
    </section>
  );
}

export default BMILimitations;
