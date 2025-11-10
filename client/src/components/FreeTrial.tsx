import { Link } from "react-router";
import "./FreeTrial.css";

function FreeTrial() {
  return (
    <section className="free-trial-section">
      <h3 className="free-trial-title"> 🎁 Essait gratuit 7 jours</h3>
      <div className="free-trial-card">
        <p className="free-trial-comment">
          Testez gratuitement nos vidéos "basic" et découvrez nos coachs avant
          de choisir votre formule.
        </p>
        <Link to="/pages/Inscription">
          <button type="button" className="free-trial-button">
            Essayez gratuitement
          </button>
        </Link>
      </div>
    </section>
  );
}

export default FreeTrial;
