import BMILimitations from "./BMILimitations";
import BMIOverview from "./BMIOverview";
import Cards from "./Cards";

function Main() {
  return (
    <main className="pt-12 pb-24">
      <BMIOverview />
      <Cards />
      <BMILimitations />
    </main>
  );
}

export default Main;
