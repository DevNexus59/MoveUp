import { Link } from "react-router";
import "./CallToAction.css";
import PersonLifting from "../assets/images/CallToAction-person-lifting-weights.svg";

function CallToAction() {
  return (
    <section className="cta-section">
      <h2 className="cta-title">
        Prêt-e à passer à l'action ?{" "}
        <img
          src={PersonLifting}
          alt="Person lifting weights"
          className="cta-icon"
        />{" "}
      </h2>
      <p className="cta-comment">
        Rejoignez-nous dès aujourd'hui et profitez d'un essai gratuit pour
        découvrir nos entraînements !
      </p>
      <div>
        <Link to="/pages/Tarifs">
          <button type="button" className="cta-button">
            Decouvrez l'essai offert
          </button>
        </Link>
      </div>
    </section>
  );
}

export default CallToAction;

/* <img src={weight-lifting} alt="person lifting weights"></img> */
