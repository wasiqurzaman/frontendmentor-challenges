import { PiBowlFoodLight } from "react-icons/pi";
import { GiWeightLiftingUp } from "react-icons/gi";
import { BsMoonStars } from "react-icons/bs";
import { IconContext } from "react-icons/lib";

function Cards() {
  return (
    <section className="py-12 mt-16 mb-16">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-12 md:px-12 grid grid-cols-1 md:grid-cols-3 md:gap-20">
        <div className="mb-14">
          <div className="w-14 h-14 rounded-full bg-purple-100 flex justify-center items-center mb-6">
            <IconContext.Provider value={{ color: "purple", size: 30 }}>
              <PiBowlFoodLight />
            </IconContext.Provider>
          </div>
          <h3 className="text-2xl font-medium mb-4">Healthy eating</h3>
          <p className="text-slate-500">
            Healthy eating promotes weight control, disease prevention, better
            digestion, immunity, mental clarity, and mood.
          </p>
        </div>

        <div className="mb-14">
          <div className="w-14 h-14 rounded-full bg-orange-100 flex justify-center items-center mb-6">
            <IconContext.Provider value={{ color: "purple", size: 30 }}>
              <GiWeightLiftingUp />
            </IconContext.Provider>
          </div>
          <h3 className="text-2xl font-medium mb-4">Regular Exercise</h3>
          <p className="text-slate-500">
            Exercise improves fitness, aids weight control, elevates mood, and
            reduces disease risk, fostering wellness and longevity.
          </p>
        </div>

        <div>
          <div className="w-14 h-14 rounded-full bg-emerald-100 flex justify-center items-center mb-6">
            <IconContext.Provider value={{ color: "blue", size: 24 }}>
              <BsMoonStars />
            </IconContext.Provider>
          </div>
          <h3 className="text-2xl font-medium mb-4">Adequate Sleep</h3>
          <p className="text-slate-500">
            Healthy eating promotes weight control, disease prevention, better
            digestion, immunity, mental clarity, and mood.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Cards;
