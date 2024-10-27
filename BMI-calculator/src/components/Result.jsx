function Result({ result, color, feedback, unit, lowerLimit, upperLimit }) {
  return (
    <div
      className={`${color} mt-8 rounded-2xl md:rounded-l-3xl md:rounded-r-[120px] text-white p-6`}
    >
      {!result ? (
        <>
          <h2 className="text-2xl mb-2">Welcome!</h2>
          <p className="text-base">
            Enter your height and weight and you&apos;ll see your BMI result
            here
          </p>
        </>
      ) : (
        <>
          <p className="mb-2 text-lg">Your BMI is...</p>
          <h3 className="text-4xl font-bold mb-4">
            {Number.parseFloat(result).toFixed(1)}
          </h3>
          <p className="text-lg">
            Your BMI suggests you&apos;re <span>{feedback}</span>
          </p>
          <p className="mt-2 text-lg">
            Your ideal body weight is between{" "}
            <span className="text-xl font-medium">
              {`${lowerLimit} ${unit === "metric" ? "kgs" : "lbs"}`}
            </span>{" "}
            -{" "}
            <span className="text-xl font-medium">
              {`${upperLimit} ${unit === "metric" ? "kgs" : "lbs"}`}
            </span>
          </p>
        </>
      )}
    </div>
  );
}

export default Result;
