import "./ExerciceCard.css";
import etoilePleine from "../assets/etoile-pleine.png";
import etoileVide from "../assets/etoile-vide.png";
import { useAuth } from "../context/AuthContext";
import type { Exercice } from "../types/types";

interface exercices {
  exoData: Exercice;
}

function ExerciceCard({ exoData }: exercices) {
  const { isAuthenticated, user, userId, setUser } = useAuth();
  const IsFavorite =
    user?.favoriteExercices?.includes(String(exoData.exerciseId)) || false;
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
            exerciseId: exoData.exerciseId,
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

  const { gifUrl, nom } = exoData;
  return (
    <article className="ExerciceCardArticle">
      <div className="ExerciceCardImageContainer">
        <button
          className="ExerciceCardButtonFavoris"
          type="button"
          onClick={() => {
            handleToggleFavorite();
            console.info("Click!");
          }}
        >
          <img
            className={`ExerciceCardEtoileVide ${isAuthenticated ? "exerciceCardIsConnecting" : ""}`}
            src={IsFavorite ? etoilePleine : etoileVide}
            alt="étoile"
          />
        </button>
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
