import avatar1 from "../assets/images/avatar1.jpg";
import avatar2 from "../assets/images/avatar2.jpg";
import avatar3 from "../assets/images/avatar3.jpg";
import star from "../assets/images/star.svg";
import { useState } from "react";

import "./Avis.css";

const fiveStars = ["One", "Two", "Three", "Four", "Five"];
function Stars({ count }: { count: number }) {
  return (
    <div className="mu-avis-note" aria-label={`${count} sur 5`}>
      {fiveStars.map((key, index) => (
        <img
          key={`star-${key}`}
          src={star}
          alt=""
          className={`mu-avis-star ${index < count ? "is-active" : ""}`}
          aria-hidden="true"
          width={18}
          height={18}
        />
      ))}
    </div>
  );
}

function FormulaireAvis() {
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(0)
  const { setUser: setContextUser, userId, logout } = useAuth();
  const handleSubmit = async (e) => {
    e.preventDefault()
    const dataToSend = {
    userId: userId,
    rating: rating,
    comment: comment
    };
    try {
      const reponse = await fetch(`http://localhost:4000/api/reviews/`, {
        method: "POST",
        headers : {'Content-Type': 'application/json'},
        body: JSON.stringify(dataToSend),
      });

      if (reponse.ok) {
        setComment("")
        setRating(0);
      } else {
        console.error("Échec de l'enregistrement de l'avis");
      }
    } catch (erreur) {
      console.error("Erreur réseau lors de l'enregistrement de l'avis:", erreur);
    }
  };


  }
  return (
    <>
    <form>
    <textarea
           name ="comment"
           value={comment}
           onChange={(e) => setComment(e.target.value)}
           placeholder="Laissez votre avis ici..."
    />
    <div>
    {[1, 2, 3, 4, 5].map((starNumber) => (
    <span 
      key={starNumber}
      onClick={() => setRating(starNumber)} // <-- C'est ici que tout se joue
      className= {(starNumber <= rating) ? 'star-gold' : 'star-grey'}
      >★
    </span>
    ))}
    </div>
    <input type="radio"
           name ="comment"
           value={rating}
           onChange={ (e)setRating}
           placeholder="Noter votre expérience"
    ></input>
    </form>
    </>

  )
}
export default FormulaireAvis;
