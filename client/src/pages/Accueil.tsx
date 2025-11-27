import Avis from "../components/Avis";
import Badges from "../components/Badges";
import CallToAction from "../components/CallToAction";
import CardTarifs from "../components/CardTarifs";
import CookiePopUp from "../components/CookiePopUp";
import ExerciceVideo from "../components/ExerciceVideo";
import Hero from "../components/Hero";
import Training from "../components/Training";


function Accueil() {
  return (
    <>
    <Training/>
      <CookiePopUp />
      <Hero />
      <ExerciceVideo />
      <CardTarifs />
      <Avis limit={3} />
      <CallToAction />
      <Badges />
    </>
  );
}

export default Accueil;
