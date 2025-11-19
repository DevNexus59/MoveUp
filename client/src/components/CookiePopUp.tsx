import { useEffect, useState } from "react";
import cookieImg from "../assets/images/boite-a-cookies.png";
import "./CookiePopUp.css";

const CookiePopUp = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const Chosen = localStorage.getItem("cookieChoice");
    if (!Chosen) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = (choice: string) => {
    console.log(`Choix des cookies : ${choice}`);
    localStorage.setItem("cookieChoice", choice);
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="cookie-popup">
      <div className="popup-content">
        <h3>
          <img src={cookieImg} alt="Cookies" className="cookie-icon" />
        </h3>
        <p>Les seuls cookies qui vous feront garder la ligne.</p>
        <div className="buttons-container">
          <button type="button" onClick={() => handleAccept("Tout accepter")}>
            Tout accepter
          </button>
          <button
            type="button"
            onClick={() => handleAccept("Accepter les essentiels")}
          >
            Accepter les essentiels
          </button>
          <button
            type="button"
            className="nothanks-link"
            onClick={() => handleAccept("Continuer sans accepter")}
          >
            Continuer sans accepter
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookiePopUp;
