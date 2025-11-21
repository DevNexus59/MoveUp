import Badges from "../components/Badges";
import FavoritesCard from "../components/FavoritesCard";
import Search from "../components/Search";
import { useAuth } from "../context/AuthContext";
import "../pages/Dashboard.css";
import ActivitePrez from "../components/ActivitePrez";

function Dashboard() {
  const { userFirstName } = useAuth();

  return (
    <>
      <div className="title-dashboard">
        <h1>Bonjour {userFirstName}</h1>
        <h2>Bienvenue sur votre dashboard</h2>
      </div>
      <div>
        <h3>Vos exercices favoris :</h3>
        <FavoritesCard />
      </div>
      <Badges />
      <Search />
      <ActivitePrez activitePrez="musculation" />
      <ActivitePrez activitePrez="cardio" />
      <ActivitePrez activitePrez="gainage" />
      <ActivitePrez activitePrez="étirement" />
    </>
  );
}

export default Dashboard;
