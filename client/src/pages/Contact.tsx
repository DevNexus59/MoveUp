import people from "../assets/images/feedback.jpeg";
import Formulaire from "../components/Formulaire";
import FormulaireAvis from "../components/FormulaireAvis";
import HeroSecondary from "../components/HeroSecondary";

function Contact() {
  return (
    <>
      <HeroSecondary
        title="Interragissez avec nous"
        subtitle="La satifaction client est très importante pour nous. Pour cela, nous vous laissons la possibilité de partager vos avis et bien sûr de nous envoyer vos messages via un formulaire de contact, afin de nous signaler tout problème ou au contraire votre joie de faire du sport avec nous !"
        image={people}
      />
      <Formulaire />
      <FormulaireAvis />
    </>
  );
}

export default Contact;
