import "./ExerciceCard.css";
import { useState } from "react";
import etoilePleine from "../assets/etoile-pleine.png";
import etoileVide from "../assets/etoile-vide.png";

//INTERFACE pour TYPER LES PROPS
// interface ExercicesI {
//   gifUrl: string;
//   nom: string;
// }

//INTERFACE pour TYPER LES PROPS
// interface Exercice {
//   exercice: ExercicesI;
// }

const test = {
  nom: "Haussement d'épaules avec bande",
  gifUrl: "https://static.exercisedb.dev/media/trmte8s.gif",
};

function ExerciceCard() {
  // permet l'affichage ou non  du button, et du favoris TEMPORAIRE en attendant de voir comment on fait avec le groupe
  const [exerciceCardIsConnecting, setExerciceCardIsConnecting] =
    useState(true);
  setExerciceCardIsConnecting(true);
  const [exerciceCardIsFavorite, setExerciceCardIsFavorite] = useState(false);
  setExerciceCardIsFavorite(true);
  // Il faudra modifier le test en dessous lorsque le props sera validé
  const { gifUrl, nom } = test;
  return (
    <article className="ExerciceCardArticle">
      <div className="ExerciceCardImageContainer">
        <img
          className={`ExerciceCardEtoileVide ${exerciceCardIsConnecting ? "exerciceCardIsConnecting" : ""}`}
          src={exerciceCardIsFavorite ? etoilePleine : etoileVide}
          alt="étoile"
        />
        <img className="ExerciceCardImage" src={gifUrl} alt={nom} />
      </div>
      <h5 className="ExerciceCardH5">{nom}</h5>
      <button
        className={`ExerciceCardButton ${exerciceCardIsConnecting ? "exerciceCardIsConnecting" : ""}`}
        type="button"
      >
        Commencer
      </button>
    </article>
  );
}

export default ExerciceCard;
