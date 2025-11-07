import Avis from "../components/Avis";
import CardTarifs from "../components/CardTarifs";
import ExerciceVideo from "../components/ExerciceVideo";
import Footer from "../components/Footer";
import Toggle from "../components/Toggle";

function Accueil() {
  return (
    <>
      <ExerciceVideo />
      <CardTarifs />
      <Avis />
      <Toggle />
      <Footer />
    </>
  );
}

export default Accueil;
