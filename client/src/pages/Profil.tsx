import type React from "react";
import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import type { User } from "../types/types";
import "../App.css";
import "./Profil.css";

function Profil() {
  const { setUser: setContextUser, userId, logout } = useAuth();

  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null)

  // Correction : Remplacer {} par Partial<User>
  const [formData, setFormData] = useState<Partial<User>>({});
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
    const file = e.target.files[0];
    setSelectedFile(file)
  };

  }
  const handleSubmit = async () => {
    const bodyData = new FormData()
    if (selectedFile) {
    bodyData.append("photo", selectedFile); 
    
    }
    for (const key in formData) {
    if (Object.prototype.hasOwnProperty.call(formData, key)) {
    const typedKey = key as keyof typeof formData;  
    bodyData.append(typedKey, formData[typedKey] as string); 
    }
  }
    try {
      const reponse = await fetch(`http://localhost:4000/api/users/${userId}`, {
        method: "PATCH",
        body: bodyData,
      });

      if (reponse.ok) {
        setUser((prevUser) => {
          if (!prevUser) return null;
          const updatedUser = { ...prevUser, ...formData };
          setContextUser(updatedUser);
          return updatedUser;
        });
        setIsEditing(false);
      } else {
        console.error("Échec de la mise à jour côté serveur");
      }
    } catch (erreur) {
      console.error("Erreur réseau lors de la mise à jour:", erreur);
    }
  };

  const handleDelete = async () => {
    const confirmation = window.confirm(
      "Êtes-vous sûr de vouloir supprimer votre profil ? Cette action est irréversible.",
    );

    if (confirmation) {
      try {
        const reponse = await fetch(
          `http://localhost:4000/api/users/${userId}`,
          { method: "DELETE" },
        );

        if (reponse.ok) {
          logout();
        } else {
          console.error("Échec de la suppression");
        }
      } catch (erreur) {
        console.error("Erreur réseau lors de la suppression:", erreur);
      }
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const nomDuChamp = e.target.name;
    const nouvelleValeur = e.target.value;

    setFormData((prevData) => ({
      ...prevData,
      [nomDuChamp]: nouvelleValeur,
    }));
  };

  const handleLogout = () => {
    logout();
  };

  useEffect(() => {
    console.log("Tentative de fetch pour l'ID utilisateur:", userId);

    const fetchUtilisateur = async () => {
      try {
        const reponse = await fetch(
          `http://localhost:4000/api/users/${userId}`,
        );

        if (!reponse.ok) {
          console.error("Erreur HTTP:", reponse.status, reponse.statusText);
          throw new Error("La requête a échoué");
        }

        const data: User = await reponse.json();

        setUser(data);
        setContextUser(data);
        setFormData(data);
      } catch (erreur) {
        console.error("Erreur lors de la récupération du profil:", erreur);
      } finally {
        setIsLoading(false);
      }
    };

    if (userId) {
      fetchUtilisateur();
    } else {
      console.log("Aucun userId, impossible de fetcher le profil.");
      setIsLoading(false);
    }
  }, [userId, setContextUser]);

  if (isLoading) {
    return <div>Chargement de votre profil...</div>;
  }

  if (!user) {
    return (
      <div>
        Impossible de charger le profil. Vérifiez que vous êtes connecté et que
        l'API est en cours d'exécution.
      </div>
    );
  }

  const displayData = isEditing ? formData : user;

  return (
    <>
      <h1>Mon profil utilisateur</h1>

      {/* Correction : Ajout d'une valeur par défaut */}
      <h2>Bonjour {displayData.firstname || ""}</h2>

      <div className="Profil-main">
        <div>
          <h3>Mes données personnelles</h3>
          <p>
             Photo de profil :
            {isEditing ? (
              <input
              type="file"
              name="photo"
              accept="image/*"
              onChange={handleFileChange}
              />
              ) : (
              displayData.photoUrl ? (
                <img src={displayData.photoUrl} alt="Profil" style={{width: "100px", height: "100px", borderRadius: "50%"}} />
                ) : (
                <span> (Aucune photo)</span>
                )
                )}
          </p>
          <p>
            Nom :
            {isEditing ? (
              <input
                type="text"
                value={formData.name || ""}
                name="name"
                onChange={handleChange}
              />
            ) : (
              ` ${displayData.name || ""}`
            )}
          </p>

          <p>
            Prénom :
            {isEditing ? (
              <input
                type="text"
                value={formData.firstname || ""}
                name="firstname"
                onChange={handleChange}
              />
            ) : (
              // Correction : Ajout d'une valeur par défaut
              ` ${displayData.firstname || ""}`
            )}
          </p>

          <p>Adresse :</p>
          {isEditing ? (
            <>
              <input
                type="text"
                value={formData.address || ""}
                name="address"
                placeholder="Adresse"
                onChange={handleChange}
              />
              <input
                type="text"
                value={formData.zipcode || ""}
                name="zipcode"
                placeholder="Code Postal"
                onChange={handleChange}
              />
              <input
                type="text"
                value={formData.city || ""}
                name="city"
                placeholder="Ville"
                onChange={handleChange}
              />
            </>
          ) : (
            <p>
              {/* Correction : Ajout de valeurs par défaut */}
              {displayData.address || ""}, {displayData.zipcode || ""}{" "}
              {displayData.city || ""}
            </p>
          )}

          <p>
            Téléphone :
            {isEditing ? (
              <input
                type="tel"
                value={formData.phone || ""}
                name="phone"
                onChange={handleChange}
              />
            ) : (
              // Correction : Ajout d'une valeur par défaut
              ` ${displayData.phone || ""}`
            )}
          </p>

          <p>
            Adresse Email :
            {isEditing ? (
              <input
                type="email"
                value={formData.email || ""}
                name="email"
                onChange={handleChange}
              />
            ) : (
              // Correction : Ajout d'une valeur par défaut
              ` ${displayData.email || ""}`
            )}
          </p>

          <p>
            Type utilisateur :
            {isEditing ? (
              <select
                id="usertype"
                name="usertype"
                value={formData.usertype || ""}
                onChange={handleChange}
              >
                <option value="">-- Veuillez choisir --</option>
                <option value="Professionnel">Professionnel</option>
                <option value="Personnel">Personnel</option>
              </select>
            ) : (
              // Correction : Ajout d'une valeur par défaut
              ` ${displayData.usertype || ""}`
            )}
          </p>
        </div>

        <div>
          <h3>Mon profil sportif</h3>

          <p>
            Niveau d'expérience :
            {isEditing ? (
              <select
                id="levelexperiency"
                name="levelexperiency"
                value={formData.levelexperiency || ""}
                onChange={handleChange}
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
            ) : (
              // Correction : Ajout d'une valeur par défaut
              ` ${displayData.levelexperiency || ""}`
            )}
          </p>

          <p>
            Temps à consacrer... :
            {isEditing ? (
              <input
                id="timerequired"
                type="time"
                name="timerequired"
                value={formData.timerequired || ""}
                onChange={handleChange}
              />
            ) : (
              // Correction : Ajout d'une valeur par défaut
              ` ${displayData.timerequired || ""}`
            )}
          </p>

          <p>
            Mon Régime Alimentaire :
            {isEditing ? (
              <select
                id="diet"
                name="diet"
                value={formData.diet || ""}
                onChange={handleChange}
              >
                <option value="">-- Veuillez choisir --</option>
                <option value="Végétarien">Végétarien</option>
                <option value="Sans restriction">Sans restriction</option>
                <option value="Végan">Végan</option>
                <option value="Pescétarisme">Pescétarisme</option>
                <option value="Flexitarisme">Flexitarisme</option>
                <option value="Clean Eating">Clean Eating</option>
              </select>
            ) : (
              // Correction : Ajout d'une valeur par défaut
              ` ${displayData.diet || ""}`
            )}
          </p>

          <h3>Mon profil d'abonnement</h3>

          <p>
            Type abonnement :
            {isEditing ? (
              <select
                id="subscription"
                name="subscription"
                value={formData.subscription || ""}
                onChange={handleChange}
              >
                <option value="">-- Veuillez choisir --</option>
                <option value="Basic">Basic - 19€ par mois</option>
                <option value="Pro">Pro - 29€ par mois</option>
                <option value="Premium">Premium - 49€ par mois</option>
              </select>
            ) : (
              // Correction : Ajout d'une valeur par défaut
              ` ${displayData.subscription || ""}`
            )}
          </p>
        </div>

        <div>
          <button
            type="button"
            onClick={
              isEditing
                ? handleSubmit
                : () => {
                    setIsEditing(true);
                  }
            }
          >
            {isEditing ? "Valider" : "Modifier"}
          </button>

          {isEditing && (
            <button
              type="button"
              onClick={() => {
                setIsEditing(false);
                // Correction : 'user' ne peut pas être null ici
                setFormData(user);
              }}
            >
              Annuler
            </button>
          )}

          <button type="button" onClick={handleLogout}>
            Déconnexion
          </button>

          <button
            type="button"
            className="button-delete"
            onClick={() => {
              handleDelete();
            }}
          >
            Supprimer mon profil
          </button>
        </div>
      </div>
    </>
  );
}

export default Profil;
