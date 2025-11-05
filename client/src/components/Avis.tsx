import "./Avis.css";

function Avis() {
  const avisList = [
    {
      id: 1,
      comment:
        "J'ai commencé les séances en ligne pendant le confinement, et j'ai perdu 8 kilos tout en retrouvant de l'énergie. Les coachs sont hyper motivants !",
      author: "Antoine",
      age: 26,
    },
    {
      id: 2,
      comment:
        "Grâce au suivi personnalisé et aux conseils des coachs, j'ai enfin tenu mes résolutions sportives. Le programme d'exercices est super bien structuré.",
      author: "Sarah",
      age: 32,
    },
    {
      id: 3,
      comment:
        "Je débute complètement en fitness, mais la plateforme est super facile à utiliser. Je peux suivre les séances à mon rythme, depuis chez moi ou entre deux rendez-vous. C'est motivant sans être contraignant !",
      author: "Mireille",
      age: 53,
    },
  ];

  return (
    <section className="mu-avis-section">
      <h2 className="mu-avis-title">Ils ont relevé le défi !</h2>
      <div className="mu-avis-grid">
        {avisList.map((avis) => (
          <div key={avis.id} className="mu-avis-card">
            <p className="mu-avis-comment">"{avis.comment}"</p>
            <h3 className="mu-avis-author">
              {avis.author}, {avis.age} ans
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Avis;
