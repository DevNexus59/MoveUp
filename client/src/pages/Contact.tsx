import people from "../assets/images/feedback.jpeg";
import Formulaire from "../components/Formulaire";
import FormulaireAvis from "../components/FormulaireAvis";
import HeroSecondary from "../components/HeroSecondary";

function Contact() {
  return (
    <>
      <HeroSecondary
        title="Interragissez avec nous"
        subtitle="La sastifaction client est tres importante pour nous. C'est pour cela que nous avons mis a disposition les avis en plus du formulaire de contact pour nous signaler tout probleme ou au contraire votre joie de faire du sport avec nous!"
        image={people}
      />
      <Formulaire />
      <FormulaireAvis />
    </>
  );
}

export default Contact;
