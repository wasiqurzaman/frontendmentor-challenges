function Result({ result }) {
  let color = "bg-blue-500";
  let feedback = "";
  if (!result) {
    color = "bg-blue-500";
    // feedback = "under";
  } else if (result <= 18.5) {
    color = "bg-sky-400";
    feedback = "under weight.";
  } else if (result <= 24.9) {
    color = "bg-green-500";
    feedback = "a healthy weight.";
  } else if (result <= 29.9) {
    color = "bg-amber-500";
    feedback = "over weight.";
  } else if (result <= 34.9) {
    color = "bg-red-500";
    feedback = "obese.";
  } else {
    color = "bg-red-700";
    feedback = "extremely obese.";
  }
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
