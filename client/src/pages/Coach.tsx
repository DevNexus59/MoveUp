import HeroSecondary from "../components/HeroSecondary";
import "./Coach.css";
import heroCoach from "../assets/images/HeroCoach.jpg";
import CoachFavoris from "../components/CoachFavoris";

function Coach() {
  return (
    <div>
      <HeroSecondary
        title="Mon Coach"
        subtitle="Avec MoveUp, trouvez facilement un coach de fitness ou de musculation près de chez vous. Recherchez par localité, explorez les profils disponibles et contactez directement le coach qui correspond le mieux à vos objectifs. Simple, rapide et efficace pour vous accompagner dans votre progression."
        image={heroCoach}
      />
      <h2>Mon Coach</h2>
      <CoachFavoris />
    </div>
  );
}
export default Coach;
