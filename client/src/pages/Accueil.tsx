import Avis from "../components/Avis";
import CardTarifs from "../components/CardTarifs";
import ExerciceVideo from "../components/ExerciceVideo";
import Hero from "../components/Hero";

function Accueil() {
  return (
    <>
      <Hero />
      <ExerciceVideo />
      <CardTarifs />
      <Avis />
    </>
  );
}

export default Accueil;
