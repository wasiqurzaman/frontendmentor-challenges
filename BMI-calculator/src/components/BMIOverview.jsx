function BMIOverview() {
  return (
    <section>
      <div className="max-w-[1200px] px-12 grid grid-cols-1 mx-auto lg:grid-cols-2 lg:gap-x-16">
        <div className="w-full relative">
          {/* <div className="h-32 max-w-full bg-blue-400 absolute left-0 bottom-0 z-10 border border-black"></div> */}
          <img
            src="../../designs/image-removebg-preview.png"
            alt="Man eating a burger"
            className="max-w-xl mx-auto z-20"
          />
        </div>
        <div className="p-0 mt-14">
          <h2 className="text-4xl font-semibold mb-8 text-slate-800">
            What your BMI result means
          </h2>
          <p className="text-slate-600 tracking-wide leading-6">
            A BMI range of 18.5 to 24.9 is considered a &lsquo;healthy
            weight.&rsquo; Maintaining a healthy weight may lower your chances
            of experiencing health issues later on, such as obesity and type 2
            diabetes. Aim for a nutitious diet with reduced fat and sugar
            content, incorporating ample fruits and vegetables. Additionally,
            strive for regular physical activity, ideally about 30 minutes daily
            for five days a week.
          </p>
        </div>
      </div>
    </section>
  );
}

export default BMIOverview;
