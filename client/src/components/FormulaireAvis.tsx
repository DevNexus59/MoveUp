import { useState } from "react";
import star from "../assets/images/star.svg";
import { useAuth } from "../context/AuthContext";
import "./FormulaireAvis.css";

const fiveStars = ["One", "Two", "Three", "Four", "Five"];

function FormulaireAvis() {
  const [comment, setComment] = useState("");
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState(0);
  const { userId } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!userId || rating === 0) {
      console.error(
        "L'utilisateur n'est pas connecté ou aucune note n'a été sélectionnée.",
      );
      return;
    }

    const dataToSend = {
      userId: String(userId),
      rating: rating,
      comment: comment,
      title: title,
    };

    try {
      const reponse = await fetch("http://localhost:4000/api/reviews/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dataToSend),
      });

      if (reponse.ok) {
        console.log("Avis envoyé avec succès!");
        setComment("");
        setTitle("");
        setRating(0);
      } else {
        console.error(
          "Échec de l'enregistrement de l'avis. Statut:",
          reponse.status,
        );
      }
    } catch (erreur) {
      console.error(
        "Erreur réseau lors de l'enregistrement de l'avis:",
        erreur,
      );
    }
  };

  return (
    <>
      <div className="Form-Avis">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="Titre"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Choisissez le sujet"
            required
          />
          <textarea
            name="comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Laissez votre avis ici..."
            required
          />
          <div className="mu-avis-stars-selection">
            {fiveStars.map((key, index) => {
              const starNumber = index + 1;
              return (
                <img
                  key={`input-star-${key}`}
                  src={star}
                  alt={`Donner une note de ${starNumber} étoiles`}
                  className={`mu-avis-star-input ${starNumber <= rating ? "is-active" : ""}`}
                  onClick={() => setRating(starNumber)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      event.preventDefault();
                      setRating(starNumber);
                    }
                  }}
                  width={18}
                  height={18}
                />
              );
            })}
          </div>
          <button type="submit" disabled={rating === 0}>
            Envoyer mon avis
          </button>
        </form>
      </div>
    </>
  );
}

export default FormulaireAvis;
