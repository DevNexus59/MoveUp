import { Link } from "react-router";

import Cadeau from "../assets/images/cadeau_freetrial.png";

import "./FreeTrial.css";

function FreeTrial() {
  return (
    <section className="free-trial-section">
      <img src={Cadeau} alt="7 jours gratuit" className="free-trial-gift" />
      <div className="free-trial-card">
        <h3 className="free-trial-title">Essai gratuit 7 jours</h3>
        <p className="free-trial-comment">
          Testez gratuitement nos vidéos "basic" et découvrez nos coachs avant
          de choisir votre formule.
        </p>
        <Link to="/pages/Inscription">
          <button type="button" className="free-trial-button">
            Essai offert
          </button>
        </Link>
      </div>
    </section>
  );
}

export default FreeTrial;
