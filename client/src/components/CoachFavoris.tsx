import { useState } from "react";
// import { useAuth } from "../context/AuthContext";
// import CoachCard from "./CoachCard";
import "./CoachFavoris.css";

const API_BASE_URL = "http://localhost:4000";

const favoritesCoach = undefined;

function CoachFavoris() {
  // const [favoritesCoach, setFavoritesCoach] = useState<Favorite[]>([]);

  // async function fetchUser() {
  //   const { userId } = useAuth();
  //   const responseUser = await fetch(`${API_BASE_URL}/api/users/${userId}`);
  //   const user = await responseUser.json();
  //   setFavoritesCoach(user.favoriteCoach); // Le tableau des coachs favoris de l'user est dans "favoriteCoach" en tant de string ['1','5']
  // }
  // fetchUser();

  const [listCoach, setListCoach] = useState();

  async function fetchCoach() {
    const responseCoach = await fetch(`${API_BASE_URL}/api/coach`);
    const coachs = await responseCoach.json();
    setListCoach(coachs); // les objects de coach.json sont dans "listeCoach" sous forme d'objet {id:1, lastname: 'Dupont', firstname: 'Marine'}
  }
  fetchCoach();
  console.log("la liste des coachs: ", listCoach);

  return (
    <div>
      <h3>Coach Favoris</h3>
      {favoritesCoach === undefined ? (
        <p>Vous n'avez pas encore de Coach dans vos favoris</p>
      ) : (
        ""

        // listCoach.filter((coach) => coach.id === favoriteCoach).find()
        // favoritesCoach.map((coach) => <CoachCard key={coach} />)
      )}
    </div>
  );
}

export default CoachFavoris;
