import { useContext } from "react";
import { useNavigate, useParams } from "react-router";
import { Link } from "react-router";
import ExercicesContext from "../context/ExercicesContext";
import type { Exercice } from "../types/types";

import chronometre from "../assets/images/entrainementdetail_time.png";

import "./EntrainementDetail.css";
import Timer from "../components/Timer";

function EntrainementDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
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

  const parseDuree = (duree: string) => {
    const match = duree.match(/(\d+)/);
    if (match) {
      const valeur = Number.parseInt(match[1]);
      if (duree.toLocaleLowerCase().includes("min")) {
        return { minutes: valeur, secondes: 0 };
      }
      return { minutes: 0, secondes: valeur };
    }
    return { minutes: 1, secondes: 0 };
  };
  // attempt to read a stored userId, fallback to 0 if not present
  const userId = Number(localStorage.getItem("userId")) || 0;

  const { minutes, secondes } = parseDuree(exercice.duree);

  return (
    <div className="entrainement-detail-container">
      <button
        type="button"
        className="entrainement-detail-back-btn"
        onClick={() => navigate(-1)}
      >
        ← Retour
      </button>
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
            <h2 className="entrainement-detail-label">Matériel :</h2>
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
          <Timer
            heures={0}
            minutes={minutes}
            secondes={secondes}
            userId={userId}
            exerciceId={exercice.exerciseId || exercice.id?.toString() || "1"}
          />
        </div>
        <div className="entrainement-detail-instructions">
          <h2 className="ed-title-instructions">Instructions :</h2>
          <p className="entrainement-detail-description">
            {exercice.instructions[0]}
            <br />
            {exercice.instructions[1]}
            <br />
            {exercice.instructions[2]}
            <br />
            {exercice.instructions[3]}
            <br />
            {exercice.instructions[4]}
            <br />
            {exercice.instructions[5]}
            <br />
          </p>
        </div>
        <div className="entrainement-detail-btn">
          <Link to="./components/EventModal">
            <button type="button" className="entrainement-detail-btn-action">
              Ajouter à mon planning
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
export default EntrainementDetail;
