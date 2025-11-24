import { Link } from "react-router";
import { useAuth } from "../context/AuthContext";

import haltère from "../assets/images/404-image.png";

import "../pages/NotFound.css";

function NotFound() {
  // On Récupère l'état d'authentification
  const { isAuthenticated } = useAuth();

  // On détermine la page d'accueil en fonction de l'authentification
  const homeUrl = isAuthenticated ? "/pages/Dashboard" : "/";

  return (
    <div className="not-found">
      <img
        src={haltère}
        alt="Restez motivé, et allez chercher vos haltères!"
        className="not-found-haltere"
      />
      <h1 className="not-found-title">404</h1>
      <h2 className="not-found-title2">Page introuvable</h2>
      <p className="not-found-comment">
        Oups ! Cette page a sauté la séance... Mais ne perdez pas votre
        motivation !
      </p>
      <p className="not-found-comment">
        Nous redoublons d'efforts afin que votre site soit remis en service.
      </p>
      <Link className="not-found-link" to={homeUrl}>
        Retour à l'accueil
      </Link>
    </div>
  );
}

export default NotFound;
