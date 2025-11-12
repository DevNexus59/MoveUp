import { useState } from "react";
import "./CookiePopUp.css";

const CookiePopUp = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleAccept = (choice: string) => {
    console.log(`Choix des cookies : ${choice}`);
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="cookie-popup">
      <div className="popup-content">
        <h3>🍪🍪🍪</h3>
        <p> Les seuls cookies qui vous feront garder la ligne.</p>
        <div className="buttons-container">
          <button
            type="button"
            onClick={() => handleAccept("Continuer sans accepter")}
          >
            Continuer sans accepter
          </button>
          <button
            type="button"
            onClick={() =>
              handleAccept("Accepter seulement les cookies nécessaires")
            }
          >
            Accepter seulement les cookies nécessaires
          </button>
          <button type="button" onClick={() => handleAccept("Tout accepter")}>
            Tout accepter
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookiePopUp;
