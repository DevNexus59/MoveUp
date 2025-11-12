import balance from "../assets/images/balance.jpg";
import HeroSecondary from "../components/HeroSecondary";

function Tarifs() {
  return (
    <>
      <HeroSecondary
        title="Nos tarifs"
        subtitle="Investissez en Vous
Votre santé n'a pas de prix, mais elle a un coût. Chez Move UP, nous proposons des formules flexibles adaptées à votre vie.
Pas de frais cachés. Pas d'engagement piège. Juste un investissement clair dans votre meilleure version.
Choisissez votre formule et commencez dès aujourd'hui."
        image={balance}
      />
    </>
  );
}

export default Tarifs;
