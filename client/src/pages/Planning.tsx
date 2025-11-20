import planning from "../assets/images/planning.png";
import HeroSecondary from "../components/HeroSecondary";
import PlanningCalendar from "../components/PlanningCalendar";

function Planning() {
  return (
    <>
      <HeroSecondary
        title="Planning"
        subtitle="Plannifiez vos séances pour plus de fun"
        image={planning}
      />
      <PlanningCalendar />
    </>
  );
}

export default Planning;
