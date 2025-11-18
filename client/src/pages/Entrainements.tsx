import { useContext } from "react";
import entrainement from "../assets/images/entrainement.jpg";
import ActivitePrez from "../components/ActivitePrez";
// import ExerciceCard from "../components/ExerciceCard";
import HeroSecondary from "../components/HeroSecondary";
import Search from "../components/Search";
import ExercicesContext from "../context/ExercicesContext";

import "../pages/Entrainements.css";

// const EntrainementsTypes : React.FC = () => {
//   return null;
// };

function Entrainements() {
  // charge les informations de l'api dans la variable context
  const context = useContext(ExercicesContext);

  // permet de vérifier que les données de l'API sont chargées dans context avant de continuer l'affichage
  if (!context) {
    console.log("Exercices.json not charged yet. Please wait or retry");
    return <p>Chargement en cours...</p>;
  }
  return (
    <div>
      <HeroSecondary
        title="Entraînements"
        subtitle="Découvrez l'espace Entraînements, conçu pour vous aider a progresser à cotre rythme et selon vos objectifs. Vous y trouverez des exercices variés, illustrés et détaillés, adaptés a tous les nivaux. Grâce à des explications claires et des démonstrations précises, vous pouvez vous entraîner en toute autonomie. Cet espace vous guide pas à pas vers de meilleurs résultats."
        image={entrainement}
      />
      <h2>Liste des Entraînements</h2>

      <Search />
      <ActivitePrez activitePrez="musculation" />
      <ActivitePrez activitePrez="cardio" />
      <ActivitePrez activitePrez="gainage" />
      <ActivitePrez activitePrez="étirement" />

      {/* <div className="exercice-list">
        {context.data?.map((exercice) => (
          <ExerciceCard key={exercice.id} exoData={exercice} />
        ))}
      </div> */}
    </div>
  );
}

export default Entrainements;
