import planning from "../assets/images/planning.png";
import HeroSecondary from "../components/HeroSecondary";
import PlanningCalendar from "../components/PlanningCalendar";
import PlanningSection from "../components/PlanningSection";

function Planning() {
  return (
    <>
      <HeroSecondary
        title="Planning"
        subtitle="Plannifiez vos séances pour plus de fun"
        image={planning}
      />
      <PlanningSection />
      <PlanningCalendar size="lg" height="auto" />
    </>
  );
}

export default Planning;
