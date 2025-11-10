import Avis from "../components/Avis";
import CardTarifs from "../components/CardTarifs";
import CookiePopUp from "../components/CookiePopUp";
import ExerciceVideo from "../components/ExerciceVideo";
import Hero from "../components/Hero";

function Accueil() {
  return (
    <>
      <CookiePopUp />
      <Hero />
      <ExerciceVideo />
      <CardTarifs />
      <Avis />
    </>
  );
}

export default Accueil;
