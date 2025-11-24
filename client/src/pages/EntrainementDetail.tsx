import { useContext } from "react";
import { useNavigate, useParams } from "react-router";
import { Link } from "react-router";
import { useAuth } from "../context/AuthContext";
import ExercicesContext from "../context/ExercicesContext";
import type { Exercice } from "../types/types";

import etoilePleine from "../assets/etoile-pleine.png";
import etoileVide from "../assets/etoile-vide.png";
import chronometre from "../assets/images/entrainementdetail_time.png";

import "./EntrainementDetail.css";

function EntrainementDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const context = useContext(ExercicesContext);

  const { user, userId, setUser } = useAuth();

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

  const isFavorite =
    user?.favoriteExercices?.includes(String(exercice.exerciseId)) || false;

  const handleToggleFavorite = async () => {
    try {
      const response = await fetch(
        `http://localhost:4000/api/${userId}/favorites`,
        {
          method: "PATCH",
          headers: {
            "content-Type": "application/json",
          },
          body: JSON.stringify({
            exerciseId: exercice.exerciseId,
          }),
        },
      );

      if (!response.ok) {
        console.error("Échec de la mise à jour du favori");
        return;
      }

      const updateUser = await response.json();
      setUser(updateUser);
    } catch (error) {
      console.error("Erreur réseau :", error);
    }
  };

  return (
    <div className="entrainement-detail-container">
      <button
        type="button"
        className="entrainement-detail-back-btn"
        onClick={() => navigate(-1)}
      >
        ← Retour
      </button>
      <section className="entrainement-detail-section-title">
        <h1 className="entrainement-detail-title">{exercice.nom}</h1>
        <button
          type="button"
          className="entrainement-detail-favoris-btn"
          onClick={handleToggleFavorite}
        >
          <img
            src={isFavorite ? etoilePleine : etoileVide}
            alt="étoile favoris"
            className="entrainement-detail-favoris-icon"
          />
        </button>
      </section>
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
          <Link to="/pages/Planning">
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
