import { useState } from "react";
import "./FAQ.css";

function FAQ() {
  const [activeId, setActiveId] = useState<number | null>(null);

  const questions = [
    {
      id: 1,
      question: "Comment fonctionne l'abonnement ?",
      comment:
        "Nous proposons trois formules : Basic, Pro et Premium, chacune avec un accompagnement personalisé. La formule premium vous donne un accès à l'intégralité des vidéos d’entraînement et à un coach personnel.",
    },
    {
      id: 2,
      question: "Puis-je essayer avant de m'abonner ?",
      comment:
        "Nous proposons un essai gratuit de 7 jours pour découvrir nos cours et tester la plateforme sans engagement.",
    },
    {
      id: 3,
      question: "Faut-il du matériel pour suivre les séances ?",
      comment:
        "La plupart des exercices ne nécessite qu'un tapis. Certaines vidéos utilisent du petit matériel (haltères, élastiques).",
    },
    {
      id: 4,
      question: "Puis-je résilier mon abonnement à tout moment ?",
      comment:
        "Absolument. Vous pouvez annuler votre abonnement à tout moment depuis votre espace personnel. Aucun frais caché, aucune contrainte.",
    },
    {
      id: 5,
      question: "Combien de temps dure une séance MoveUp ?",
      comment:
        "Les séances sont ajustables selon votre temps disponible. Des séances sont disponibles à partir de 3 minutes. Vous pouvez vous entraîner jusqu'à la durée souhaitée grâce à des filtres dans la liste des exercices",
    },
    {
      id: 6,
      question: "En quoi MoveUp est personnalisé ?",
      comment:
        "Chaque programme s'adapte à votre niveau et à vos disponibilités, grâce au questionnaire qui vous est proposé en début d'inscription. Résultat : un entraînement sur-mesure, qui respecte votre objectif et votre rythme de vie !",
    },
  ];

  const toggleQuestion = (id: number) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <section className="faq-section">
      <h3 className="faq-title">Des questions sur l'abonnement ?</h3>
      <p className="faq-presentation">
        Voici les réponses aux questions les plus fréquentes avant de vous
        lancer.
      </p>
      <div className="faq-list">
        {questions.map((item) => (
          <div
            key={item.id}
            className={`faq-item ${activeId === item.id ? "active" : ""}`}
          >
            <button
              type="button"
              className="faq-question"
              onClick={() => toggleQuestion(item.id)}
            >
              {item.question}
              <span className="faq-icon">
                {activeId === item.id ? "-" : "+"}
              </span>
            </button>
            {activeId === item.id && (
              <div className="faq-answer">
                <p>{item.comment}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default FAQ;
