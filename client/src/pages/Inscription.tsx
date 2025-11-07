import type React from "react";
import { useState } from "react";
import "./Inscription.css";
import "../App.css";

const regexCodePostal = /^\d{5}$/;
const regexPhoneNumber = /^\d{10}$/;

const isValidCreditCard = (number: string): boolean => {
  const cleanNumber = number.replace(/\D/g, "");
  if (cleanNumber.length < 13 || cleanNumber.length > 19) return false;
  let sum = 0;
  let shouldDouble = false;
  for (let i = cleanNumber.length - 1; i >= 0; i--) {
    let digit = Number.parseInt(cleanNumber.charAt(i));
    if (shouldDouble) {
      digit *= 2; // Assignation séparée
      if (digit > 9) {
        digit -= 9;
      }
    }
    sum += digit;
    shouldDouble = !shouldDouble;
  }
  return sum % 10 === 0;
};

function Register() {
  const [name, setName] = useState<string>("");
  const [firstname, setFirstName] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [zipcode, setZipCode] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [checkpassword, setCheckPassword] = useState<string>("");
  const [usertype, setUserType] = useState<string>("");
  const [levelexperiency, setLevelExperiency] = useState<string>("");
  const [timerequired, setTimeRequired] = useState<string>("");
  const [diet, setDiet] = useState<string>("");
  const [subscription, setSubscription] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [step, setStep] = useState<number>(1);
  const [paymentMethod, setPaymentMethod] = useState<string>("");
  const [cardNumber, setCardNumber] = useState<string>("");
  const [cardExpiry, setCardExpiry] = useState<string>("");
  const [cardCvv, setCardCvv] = useState<string>("");

  // Nouveaux états pour la visibilité des mots de passe
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showCheckPassword, setShowCheckPassword] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("");

    if (password !== checkpassword) {
      setMessage("Erreur : Les mots de passe ne correspondent pas.");
      return;
    }
    if (regexCodePostal.test(zipcode) === false) {
      setMessage("Erreur : Le code postal doit être composé de 5 chiffres");
      return;
    }
    if (regexPhoneNumber.test(phone) === false) {
      setMessage("Erreur : Le téléphone doit être composé de 10 chiffres");
      return;
    }
    setStep(2);
  };

  const handleFinalSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isValidCreditCard(cardNumber) === false) {
      setMessage("Erreur : Le numéro de carte bancaire est invalide");
      return;
    }
    setMessage("");
    try {
      const response = await fetch("http://localhost:4000/subscription", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          firstname,
          address,
          zipcode,
          city,
          phone,
          email,
          password,
          usertype,
          levelexperiency,
          timerequired,
          diet,
          subscription,
          paymentMethod,
        }),
      });

      if (response.ok) {
        setMessage("Inscription réussie !");
        // Reset form fields here if needed
      } else {
        const errorText = await response.text();
        setMessage(`Erreur lors de l'inscription : ${errorText}`);
      }
    } catch (error) {
      console.error("Erreur de connexion:", error);
      setMessage("Impossible de se connecter au serveur.");
    }
  };

  return (
    <>
      <div className="register-container">
        <h2>Inscription</h2>
        {step === 1 && (
          <form onSubmit={handleSubmit}>
            <section>
              <h3>Informations personnelles</h3>
            </section>
            <div>
              <label htmlFor="name">
                Nom<span className="required-star">*</span> :
              </label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="firstname">
                Prénom<span className="required-star">*</span> :
              </label>
              <input
                id="firstname"
                type="text"
                value={firstname}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="address">
                Adresse<span className="required-star">*</span> :
              </label>
              <input
                id="address"
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="zipcode">Code postal :</label>
              <input
                id="zipcode"
                type="text"
                value={zipcode}
                onChange={(e) => setZipCode(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="city">
                Ville<span className="required-star">*</span> :
              </label>
              <input
                id="city"
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="phone">
                Téléphone<span className="required-star">*</span> :
              </label>
              <input
                id="phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="email">
                Email<span className="required-star">*</span>:
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            {/* --- MODIFICATION MOT DE PASSE --- */}
            <div>
              <label htmlFor="password">
                Mot de passe<span className="required-star">*</span>:
              </label>
              <div className="password-wrapper">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  className="toggle-password-btn"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? "🙈" : "👁️"}
                </button>
              </div>
            </div>

            <div>
              <label htmlFor="checkpassword">
                Confirmation du mot de passe
                <span className="required-star">*</span>:
              </label>
              <div className="password-wrapper">
                <input
                  id="checkpassword"
                  type={showCheckPassword ? "text" : "password"}
                  value={checkpassword}
                  onChange={(e) => setCheckPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  className="toggle-password-btn"
                  onClick={() => setShowCheckPassword(!showCheckPassword)}
                >
                  {showCheckPassword ? "🙈" : "👁️"}
                </button>
              </div>
            </div>
            {/* --- FIN DES MODIFICATIONS --- */}

            <div>
              <label htmlFor="usertype">
                Type d'utilisateur <span className="required-star">*</span>:
              </label>
              <select
                id="usertype"
                value={usertype}
                onChange={(e) => setUserType(e.target.value)}
                required
              >
                <option value="">-- Veuillez choisir --</option>
                <option value="Professionnel">Professionnel</option>
                <option value="Personnel">Personnel</option>
              </select>
            </div>
            <section>
              <h3>Mon profil sportif</h3>
            </section>
            <div>
              <label htmlFor="levelexperiency">Mon niveau d'expérience:</label>
              <select
                id="levelexperiency"
                value={levelexperiency}
                onChange={(e) => setLevelExperiency(e.target.value)}
              >
                <option value="">-- Veuillez choisir --</option>
                <option value="Debutant">
                  Débutant - Je n'ai pas l'habitude de pratiquer
                </option>
                <option value="Intermédiaire">
                  Intermédiaire - Je pratique régulièrement
                </option>
                <option value="Expert">
                  Expert - Je pratique intensivement ou je suis coach
                </option>
              </select>
            </div>
            <div>
              <label htmlFor="timerequired">Mon temps libre:</label>
              <input
                id="timerequired"
                type="time"
                value={timerequired}
                onChange={(e) => setTimeRequired(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="diet">Mon régime alimentaire:</label>
              <select
                id="diet"
                value={diet}
                onChange={(e) => setDiet(e.target.value)}
              >
                <option value="">-- Veuillez choisir --</option>
                <option value="Végétarien">Végétarien</option>
                <option value="Sans restriction">Sans restriction</option>
                <option value="Végan">Végan</option>
                <option value="Pescétarisme">Pescétarisme</option>
                <option value="Flexitarisme">Flexitarisme</option>
                <option value="Clean Eating">Clean Eating</option>
              </select>
            </div>
            <div>
              <label htmlFor="subscription">Mon abonnement:</label>
              <select
                id="subscription"
                value={subscription}
                onChange={(e) => setSubscription(e.target.value)}
                required
              >
                <option value="">-- Veuillez choisir --</option>
                <option value="Basic">Basic - 19€ par mois</option>
                <option value="Pro">Pro - 29€ par mois</option>
                <option value="Premium">Premium - 49€ par mois</option>
              </select>
            </div>
            <button type="submit">S'inscrire</button>
          </form>
        )}

        {step === 2 && (
          <div>
            <h3>Récapitulatif</h3>
            <p>Vérifiez vos informations avant de continuer.</p>
            <h3>Informations personnelles</h3>
            <ul>
              <li>
                <strong>Nom complet :</strong> {firstname} {name}
              </li>
              <li>
                <strong>Adresse complête :</strong> <br />
                {address}
                <br />
                {zipcode} {city}
              </li>
              <li>
                <strong>Téléphone :</strong> {phone}
              </li>
              <li>
                <strong>Email :</strong> {email}
              </li>
              <li>
                <strong>Type utilisateur :</strong> {usertype}
              </li>
            </ul>
            <h3>Mon profil sportif</h3>
            <ul>
              <li>
                <strong>Mon niveau d'expérience :</strong> {levelexperiency}
              </li>
              <li>
                <strong>Mon temps libre :</strong> {timerequired}
              </li>
              <li>
                <strong>Mon régime alimentaire :</strong> {diet}
              </li>
            </ul>
            <h3>Mon abonnement sélectionné :</h3>
            <ul>
              <li>
                <strong>Niveau d'abonnement :</strong> {subscription}
              </li>
            </ul>
            <button type="button" onClick={() => setStep(1)}>
              Retour
            </button>
            <button type="button" onClick={() => setStep(3)}>
              Valider et payer
            </button>
          </div>
        )}

        {step === 3 && (
          <div>
            <h3>Paiement</h3>
            <section>
              <div>
                <h2>Carte Bancaire</h2>
                <button
                  type="button"
                  onClick={() => {
                    setPaymentMethod("CB");
                    setStep(4);
                  }}
                >
                  Choisir
                </button>
              </div>
              <div>
                <h2>Apple Pay</h2>
                <button
                  type="button"
                  onClick={() => {
                    setPaymentMethod("APAY");
                    setStep(4);
                  }}
                >
                  Choisir
                </button>
              </div>
              <div>
                <h2>Google Pay</h2>
                <button
                  type="button"
                  onClick={() => {
                    setPaymentMethod("GPAY");
                    setStep(4);
                  }}
                >
                  Choisir
                </button>
              </div>
            </section>
          </div>
        )}

        {step === 4 && (
          <form onSubmit={handleFinalSubmit}>
            <div>
              <h3>Détails du paiement</h3>
            </div>
            <div>
              <label htmlFor="cardNumber">
                Numéro de carte<span className="required-star">*</span>:
              </label>
              <input
                id="cardNumber"
                type="text"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="cardExpiry">
                Date d'expiration<span className="required-star">*</span>:
              </label>
              <input
                id="cardExpiry"
                type="text"
                value={cardExpiry}
                onChange={(e) => setCardExpiry(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="cardCvv">
                Cryptogramme<span className="required-star">*</span>:
              </label>
              <input
                id="cardCvv"
                type="text"
                value={cardCvv}
                onChange={(e) => setCardCvv(e.target.value)}
                required
              />
            </div>
            <button type="submit">Valider et Payer</button>
          </form>
        )}

        {message && <p>{message}</p>}
      </div>
    </>
  );
}

export default Register;
