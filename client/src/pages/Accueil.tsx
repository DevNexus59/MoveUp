import Avis from "../components/Avis";
import CallToAction from "../components/CallToAction";
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
      <Avis limit={3} />
      <CallToAction />
    </>
  );
}

export default Accueil;
