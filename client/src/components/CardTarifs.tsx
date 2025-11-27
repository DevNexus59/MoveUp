import { useNavigate } from "react-router";
import "./CardTarifs.css";

interface CardTarifsProps {
  id: string;
  label: string;
}

interface Plan {
  id: string;
  name: string;
  priceMonthly: number;
  popular?: boolean;
  note?: string;
  features: CardTarifsProps[];
  ctaLabel?: string;
}

function CardTarifs() {
  const currency = "€";
  const navigate = useNavigate();

  const plans: Plan[] = [
    {
      id: "basic",
      name: "Basic",
      priceMonthly: 19,
      note: "Des exercices ciblés pour progresser à votre rythme",
      features: [
        { id: "feature1", label: "Accès aux vidéos de base" },
        { id: "feature2", label: "Support par email" },
        { id: "feature3", label: "Gestion de planning" },
        { id: "feature4", label: "Exercices personnalisés" },
      ],
    },
    {
      id: "basic-pro",
      name: "Pro",
      priceMonthly: 29,
      popular: true,
      note: "Tout le contenu débloqué avec coach inclus",
      features: [
        { id: "feature1", label: "Accès à toutes les vidéos" },
        { id: "feature2", label: "Support prioritaire par email" },
        { id: "feature3", label: "Gestion de planning" },
        { id: "feature4", label: "Coach présent" },
      ],
    },
    {
      id: "premium",
      name: "Premium",
      priceMonthly: 49,
      note: "Tout le contenu débloqué avec coach dédié",
      features: [
        { id: "feature1", label: "Accès à toutes les vidéos" },
        { id: "feature2", label: "Support 24/7" },
        { id: "feature3", label: "Gestion de planning avancée" },
        { id: "feature4", label: "Coach dédié" },
      ],
    },
  ];

  return (
    <section className="pricing">
      <h2 className="pricing_title">Nos tarifs</h2>

      <div className="pricing_grid">
        {plans.map((plan) => (
          <article
            key={plan.id}
            className={`card ${plan.popular ? "card-highlight" : ""}`}
          >
            <header className="card_header">
              <div className="card_titles">
                <h3 className="card_name">{plan.name}</h3>
                {plan.popular && (
                  <span className="card_popular">Populaire</span>
                )}
              </div>

              <div className="card_price">
                <span className="card_price_value">
                  {plan.priceMonthly}
                  {currency}
                </span>
                <span className="card_price_period">/mois</span>
              </div>

              {plan.note && <p className="card_note">{plan.note}</p>}
              <hr className="card_divider" />
            </header>
            <ul className="card_features">
              {plan.features.map((feature) => (
                <li key={feature.id} className="card_feature">
                  {feature.label}
                </li>
              ))}
            </ul>
            <footer className="card_footer">
              <button
                type="button"
                className="card_cta"
                onClick={() => navigate("/pages/Inscription")}
              >
                Commencer
              </button>
            </footer>
          </article>
        ))}
      </div>
    </section>
  );
}

export default CardTarifs;
