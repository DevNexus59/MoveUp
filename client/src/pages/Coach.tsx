import HeroSecondary from "../components/HeroSecondary";
import "./Coach.css";
import heroCoach from "../assets/images/HeroCoach.jpg";
import CoachFavoris from "../components/CoachFavoris";

function Coach() {
  return (
    <div>
      <HeroSecondary
        title="Mon Coach"
        subtitle="Découvrez l'espace Entraînements, conçu pour vous aider a progresser à votre rythme et selon vos objectifs. Vous y trouverez des exercices variés, illustrés et détaillés, adaptés a tous les nivaux. Grâce à des explications claires et des démonstrations précises, vous pouvez vous entraîner en toute autonomie. Cet espace vous guide pas à pas vers de meilleurs résultats."
        image={heroCoach}
      />
      <h2>Mon Coach</h2>
      <CoachFavoris />
    </div>
  );
}
export default Coach;
