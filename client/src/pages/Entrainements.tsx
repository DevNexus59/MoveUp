import { useContext } from "react";
import ExerciceCard from "../components/ExerciceCard";
import ExercicesContext from "../context/ExercicesContext";

function Entrainements() {
  const context = useContext(ExercicesContext);

  if (!context) {
    console.log("Exercices.json not charged yet. Please wait or retry");
    return <p>Chargement en cours...</p>;
  }

  return (
    <>
      <h1>Entraînements</h1>

      <ExerciceCard />
    </>
  );
}

export default Entrainements;
