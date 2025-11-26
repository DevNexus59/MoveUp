import type { ReactElement } from "react";
import favorites from "../assets/images/favorites.jpeg";
import FavoritesCard from "../components/FavoritesCard";
import HeroSecondary from "../components/HeroSecondary";
import { useAuth } from "../context/AuthContext";
import "../components/ExerciceCard.css";
import "../pages/Entrainements.css";
import "../pages/Favoris.css";

function Favoris(): ReactElement {
  const { userFirstName } = useAuth();

  return (
    <>
      <HeroSecondary
        title="Les meilleurs exercices"
        subtitle="Ici vous pouvez retrouver vos exercices favoris, que vous aimez faire et refaire. Qui vous semble etre interessant. N'hesitez pas a refaire autant de fois que vous voulez, amusez-vous bien!"
        image={favorites}
      />
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
