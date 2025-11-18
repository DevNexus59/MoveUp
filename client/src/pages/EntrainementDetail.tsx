import { useContext } from "react";
import { useParams } from "react-router";
import ExercicesContext from "../context/ExercicesContext";
import type { Exercice } from "../types/types";

import "./ExerciceCardDetail.css";

function ExerciceCardDetail() {
  const { id } = useParams();
  const context = useContext(ExercicesContext);

  if (!context) {
    return <p>Erreur : contexte non disponible</p>;
  }

  const { data } = context;

  if (!data) {
    return <p>Aucune donnée disponible</p>;
  }

  const exercice = data.find((exo: Exercice) => exo.id === Number(id));

  if (!exercice) {
    return <p>Exercice non trouvé</p>;
  }

  return (
    <section>
      <h1>{exercice.nom}</h1>
      <h2>Muscle ciblé : {exercice.muscleCible}</h2>
      <h3>Difficulté : {exercice.difficulte}</h3>
      <h4>Durée de l'exercice : {exercice.duree}</h4>
      <img src={exercice.gifUrl} alt={exercice.nom} />
      <p>Description : {exercice.instructions}</p>
      <p>Equipement(s) : {exercice.equipement}</p>
    </section>
  );
}
export default ExerciceCardDetail;
