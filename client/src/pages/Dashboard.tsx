import Badges from "../components/Badges";
import { useAuth } from "../context/AuthContext";

function Dashboard() {
  const { userFirstName } = useAuth();

  return (
    <>
      <h1>Dashboard</h1>
      <h2>Bonjour {userFirstName}</h2>
      <Badges />
    </>
  );
}

export default Dashboard;
