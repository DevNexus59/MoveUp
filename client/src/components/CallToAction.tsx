import { Link } from "react-router";
import "./CallToAction.css";

function CallToAction() {
  return (
    <section className="cta-section">
      <h2 className="cta-title">Prêt à passer à l'action ? 🏋️‍♀️</h2>
      <p className="cta-comment">
        Rejoignez-nous dès aujourd'hui et profitez d'un essai gratuit pour
        découvrir nos entraînements !
      </p>
      <div>
        <Link to="/pages/Inscription">
          <button type="button" className="cta-button">
            M'inscrire
          </button>
        </Link>
        <Link to="/pages/Inscription">
          <button type="button" className="cta-button">
            Essai gratuit
          </button>
        </Link>
      </div>
    </section>
  );
}

export default CallToAction;
