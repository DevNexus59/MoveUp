import sportifs from "../assets/images/sportifs.jpg";
import Avis from "../components/Avis";
import Formulaire from "../components/Formulaire";
import HeroSecondary from "../components/HeroSecondary";

function About() {
  return (
    <>
      <HeroSecondary
        title="About Us"
        subtitle="Notre Histoire.
En 2020 Move UP est né d'une conviction simple : chacun mérite de se sentir fort, confiant et vivant.
Pas de jugement, pas de pression. Juste vous, vos objectifs, et une équipe passionnée pour vous accompagner.
Aujourd'hui, Move UP c'est plus de 5000 membres.
Notre philosophie ? Le mouvement est universel, mais votre parcours est unique.
Chez Move UP, on célèbre les progrès, on partage les victoires, et on transforme chaque défi en tremplin.
Prêt à écrire votre propre histoire ?"
        image={sportifs}
      />
      <Formulaire />
      <Avis />
    </>
  );
}

export default About;
