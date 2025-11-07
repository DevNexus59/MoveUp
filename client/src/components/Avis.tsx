import avatar1 from "../assets/images/avatar1.jpg";
import avatar2 from "../assets/images/avatar2.jpg";
import avatar3 from "../assets/images/avatar3.jpg";

import "./Avis.css";

function Avis() {
  const avisList = [
    {
      id: 1,
      title: "Excellent !",
      note: "⭐⭐⭐⭐⭐",
      comment:
        "J'ai commencé les séances en ligne pendant le confinement, et j'ai perdu 8 kilos tout en retrouvant de l'énergie. Les coachs sont hyper motivants !",
      avatar: avatar1,
      author: "Antoine",
      age: 26,
    },
    {
      id: 2,
      title: "Je recommande vivement !",
      note: "⭐⭐⭐⭐⭐",
      comment:
        "Grâce au suivi personnalisé et aux conseils des coachs, j'ai enfin tenu mes résolutions sportives. Le programme d'exercices est super bien structuré.",
      avatar: avatar3,
      author: "Sarah",
      age: 32,
    },
    {
      id: 3,
      title: "Super application !",
      note: "⭐⭐⭐⭐⭐",
      comment:
        "Je débute complètement en fitness, mais la plateforme est super facile à utiliser. Je peux suivre les séances à mon rythme, depuis chez moi ou entre deux rendez-vous. C'est motivant sans être contraignant !",
      avatar: avatar2,
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
            <h3 className="mu-avis-authorTitle">{avis.title}</h3>
            <p className="mu-avis-note">{avis.note}</p>
            <p className="mu-avis-comment">" {avis.comment} "</p>
            <div className="mu-avis-authotcard">
              <img
                src={avis.avatar}
                alt="Avatar Client "
                className="mu-avis-avatar"
              />
              <h4 className="mu-avis-author">
                {avis.author}, {avis.age} ans
              </h4>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Avis;
