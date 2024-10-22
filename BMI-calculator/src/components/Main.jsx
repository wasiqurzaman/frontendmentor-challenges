import { IconContext } from "react-icons/lib";
import { PiBowlFoodLight } from "react-icons/pi";
import { GiWeightLiftingUp } from "react-icons/gi";
import { BsMoonStars } from "react-icons/bs";

function Main() {
  return (
    <main className="pt-24">
      <section>
        <div className="max-w-[1200px] grid grid-cols-1 mx-auto lg:grid-cols-2 md:px-12">
          <div className="w-full relative">
            {/* <div className="h-32 max-w-full bg-blue-400 absolute left-0 bottom-0 z-10 border border-black"></div> */}
            <img
              src="../../designs/image-removebg-preview.png"
              alt="Man eating a burger"
              className="max-w-full mx-auto z-20"
            />
          </div>
          <div className="px-8">
            <h2 className="text-4xl font-semibold mb-12">
              What your BMI result means
            </h2>
            <p className="text-slate-500 tracking-wide leading-6">
              A BMI range of 18.5 to 24.9 is considered a &lsquo;healthy
              weight.&rsquo; Maintaining a healthy weight may lower your chances
              of experiencing health issues lateron, such as obesity and type 2
              diabetes. Aim for a nutitious diet with reduced fat and sugar
              content, incorporating ample fruits and vegetables. Additionally,
              strive for regular physical activity, ideally about 30 minutes
              daily for five days a week.
            </p>
          </div>
        </div>
      </section>
      <section className="py-12 mt-24 mb-24">
        <div className="max-w-[1200px] mx-auto lg:px-24 grid grid-cols-1 lg:grid-cols-3 lg:gap-20">
          <div>
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

          <div>
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
      <section className="mt-10">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-9 gap-x-10 lg:px-24">
          <div className="lg:col-span-6 pr-10">
            <h2 className="text-4xl font-semibold mb-8">Limitations of BMI</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi
              consequuntur, vitae voluptatibus quae sint, nam libero expedita
              tenetur corrupti sit quis veniam, velit sequi pariatur magnam
              ducimus. Tenetur, officia labore?
            </p>
          </div>
          <div className="lg:col-span-3">
            <h3>Gender</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
              est, doloremque, commodi error, quae consectetur minima voluptates
              reprehenderit in rerum vero facere. Nisi nulla laborum aliquid
              officiis modi. Fuga, modi!
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Main;
