import "./ExerciceCard.css";
// import { useState } from "react";
import etoilePleine from "../assets/etoile-pleine.png";
import etoileVide from "../assets/etoile-vide.png";
import { useAuth } from "../context/AuthContext";
import type { Exercice } from "../types/types";

interface exercices {
  exoData: Exercice;
}

function ExerciceCard({ exoData }: exercices) {
  console.log("CARTE REÇOIT:", exoData);
  const { isAuthenticated, user, userId, setUser } = useAuth();
  const IsFavorite =
    user?.favoriteExercises?.includes(String(exoData.id)) || false;
  const handleToggleFavorite = async () => {
    try {
      const response = await fetch(
        `http://localhost:4000/api/users/${userId}/favorites`,
        {
          method: "PATCH",
          headers: {
            "content-Type": "application/json",
          },
          body: JSON.stringify({
            exerciseId: exoData.id,
          }),
        },
      );
      if (!response.ok) {
        console.error("Echec de la mise à jour");
        return;
      }
      const updateUser = await response.json();

      setUser(updateUser);
    } catch (error) {
      console.error("Erreur réseau:", error);
    }
  };
  // Il faudra modifier le test en dessous lorsque le props sera validé
  const { gifUrl, nom } = exoData;
  console.log("img", gifUrl);
  console.log("nom", nom);
  return (
    <article className="ExerciceCardArticle">
      <div className="ExerciceCardImageContainer">
        <img
          className={`ExerciceCardEtoileVide ${isAuthenticated ? "exerciceCardIsConnecting" : ""}`}
          src={IsFavorite ? etoilePleine : etoileVide}
          alt="étoile"
        />
        <img className="ExerciceCardImage" src={gifUrl} alt={nom} />
      </div>
      <h5 className="ExerciceCardH5">{nom}</h5>
      <button
        className={`ExerciceCardButton ${isAuthenticated ? "exerciceCardIsConnecting" : ""}`}
        type="button"
      >
        Commencer
      </button>
    </article>
  );
}

export default ExerciceCard;
