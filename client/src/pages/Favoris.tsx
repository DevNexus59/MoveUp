import type { ReactElement } from "react";
import FavoritesCard from "../components/FavoritesCard";
import { useAuth } from "../context/AuthContext";
import "../components/ExerciceCard.css";
import "../pages/Entrainements.css";
import "../pages/Favoris.css";

function Favoris(): ReactElement {
  const { userFirstName } = useAuth();

  return (
    <>
      <div className="favorite-title">
        <h2>Vos exercices favoris</h2>
        <h3>
          {userFirstName}, retrouvez ci-dessous la liste de vos exercices
          favoris :{" "}
        </h3>
      </div>
      <div className="favorites-container">
        <FavoritesCard />
      </div>
    </>
  );
}

export default Favoris;
