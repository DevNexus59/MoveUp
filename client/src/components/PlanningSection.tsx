import type React from "react";
import "./PlanningSection.css";

const PlanningSection: React.FC = () => {
  return (
    <section className="planning-section">
      <div className="planning-section-content">
        <h2 className="planning-section-title">
          Pourquoi planifier vos séances?
        </h2>
        <p className="planning-section-intro">
          Un planning clair vous permet de rester motivé-e, d'éviter le
          surmenage et de suivre vos progrès semaine après semaine.
        </p>

        <div className="planning-section-grid">
          <article className="planning-section-card">
            <h3 className="planning-section-card-title">
              Gagner en régularité.
            </h3>
            <p className="planning-section-card-text">
              Bloquez vos créneaux à l'avance et transformez vos séances en
              véritable rendez-vous avec vous-même.
            </p>
          </article>

          <article className="planning-section-card">
            <h3 className="planning-section-card-title">
              Voir votre semaine vite.
            </h3>
            <p className="planning-section-card-text">
              Alternez les groupes musculaires, répartissez l'intensité et
              gardez un équilibre entre sport, repos et vie perso.
            </p>
          </article>

          <article className="planning-section-card">
            <h3 className="planning-section-card-title">
              Adapter votre entraînement.
            </h3>
            <p className="planning-section-card-text">
              Déplacez une séance, changez l'exercice ou la durée en quelques
              clics pour coller à votre emploi du temps réel.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default PlanningSection;
