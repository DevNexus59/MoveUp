import { useContext } from "react";
import { useParams } from "react-router";
import ExercicesContext from "../context/ExercicesContext";
import type { Exercice } from "../types/types";

import chronometre from "../assets/images/entrainementdetail_time.png";

import "./EntrainementDetail.css";

function EntrainementDetail() {
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
    <div className="entrainement-detail-container">
      <h1 className="entrainement-detail-title">{exercice.nom}</h1>
      <section className="entrainement-detail-card">
        <div className="entrainement-detail-informations">
          <div className="entrainement-detail-difficulte">
            <h2 className="entrainement-detail-label">Difficulté :</h2>
            <p className="entrainement-detail-value">{exercice.difficulte}</p>
          </div>
          <div className="entrainement-detail-muscle">
            <h2 className="entrainement-detail-label">Muscle ciblé :</h2>
            <p className="entrainement-detail-value">{exercice.muscleCible}</p>
          </div>
          <div className="entrainement-detail-equipement">
            <h2 className="entrainement-detail-label">Equipement(s)</h2>
            <p className="entrainement-detail-value">{exercice.equipement}</p>
          </div>
        </div>
        <div className="entrainement-detail-action">
          <img
            src={exercice.gifUrl}
            alt={exercice.nom}
            className="entrainement-detail-gif"
          />
          <div className="entrainement-detail-duration">
            <img
              src={chronometre}
              alt="durée de l'exercice"
              className="entrainement-detail-chrono"
            />
            <p className="entrainement-detail-duration">{exercice.duree}</p>
          </div>
        </div>
        <div className="entrainement-detail-instructions">
          <h2 className="ed-title-instructions">Instructions :</h2>
          <p className="entrainement-detail-description">
            {exercice.instructions}
          </p>
        </div>
      </section>
    </div>
  );
}
export default EntrainementDetail;
