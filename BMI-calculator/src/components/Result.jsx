function Result({ result, color, feedback }) {
  return (
    <div
      className={`${color} mt-8 rounded-2xl md:rounded-l-3xl md:rounded-r-[120px] text-white p-6`}
    >
      {!result ? (
        <>
          <h2 className="text-2xl mb-2">Welcome!</h2>
          <p className="text-sm">
            Enter your height and weight and you&apos;ll see your BMI result
            here
          </p>
        </>
      ) : (
        <>
          <p className="mb-2">Your BMI is...</p>
          <h3 className="text-4xl font-bold mb-4">
            {Number.parseFloat(result).toFixed(1)}
          </h3>
          <p>Your BMI suggests you&apos;re {feedback}</p>
        </>
      )}
    </div>
  );
}

export default Result;
