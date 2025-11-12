import "./ExerciceCard.css";

interface ExercicesI {
  gifUrl: string;
  nom: string;
}

interface Exercice {
  exercice: ExercicesI;
}

function ExerciceCard({ exercice }: Exercice) {
  const { gifUrl, nom } = exercice;
  console.log(exercice);
  return (
    <article>
      <img src={gifUrl} alt={nom} />
      <h4>{nom}</h4>
      <button type="button">Commencer</button>
    </article>
  );
}

export default ExerciceCard;
