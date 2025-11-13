import { useContext } from "react";
import ExerciceCard from "../components/ExerciceCard";
import ExercicesContext from "../context/ExercicesContext";
import Search from "../components/Search";
import entrainement from "../assets/images/entrainement.jpg";
import HeroSecondary from "../components/HeroSecondary";

const exercices = [
  "Pompes",
  "Squats",
  "Abdos",
  "Fentes",
  "Tractions",
  "Planche",
  "Burpees",
];

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
      <h1>Liste des Entraînements</h1>
      <Search data={exercices} />
      <ExerciceCard />
    </div>
  );
}

export default Entrainements;
