import HeroSecondary from "../components/HeroSecondary";
import entrainement from "../assets/images/entrainement.jpg";

function Entrainements() {
  return (
    <>
      <HeroSecondary
        title="Entraînements"
        subtitle="Découvrez l'espace Entraînements, conçu pour vous aider a progresser à cotre rythme et selon vos objectifs. Vous y trouverez des exercices variés, illustrés et détaillés, adaptés a tous les nivaux. Grâce à des explications claires et des démonstrations précises, vous pouvez vous entraîner en toute autonomie. Cet espace vous guide pas à pas vers de meilleurs résultats."
        image={entrainement}
      />
    </>
  );
}

export default Entrainements;
