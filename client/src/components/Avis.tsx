import type { ReactElement } from "react";
import { useEffect, useState } from "react";
import star from "../assets/images/star.svg";

import "./Avis.css";

const fiveStars = ["One", "Two", "Three", "Four", "Five"];

interface Review {
  id: number;
  userId: number;
  title: string;
  rating: number;
  comment: string;
}

interface Author {
  id: number;
  nom: string;
  age: number;
  photoUrl: string;
}

function Stars({ count }: { count: number }): ReactElement {
  return (
    <div className="mu-avis-note" aria-label={`${count} sur 5`}>
           {" "}
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
         {" "}
    </div>
  );
}

function Avis({ limit }: { limit?: number }): ReactElement {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [users, setUsers] = useState<Author[]>([]);

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        const reviewsResponse = await fetch(
          "http://localhost:4000/api/reviews",
        );
        const reviewsData: Review[] = await reviewsResponse.json();

        const usersResponse = await fetch("http://localhost:4000/api/users");
        const usersData: Author[] = await usersResponse.json();

        if (reviewsResponse.ok) {
          setReviews(reviewsData);
        }
        if (usersResponse.ok) {
          setUsers(usersData);
        }
      } catch (error) {
        console.error("Erreur lors du chargement des données:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAllData();
  }, []);

  if (isLoading) {
    return <div className="mu-loading">Chargement des avis...</div>;
  }

  if (reviews.length === 0) {
    return (
      <div className="mu-no-reviews">Aucun avis n'a encore été posté.</div>
    );
  }

  return (
    <section className="mu-avis-section">
            <h2 className="mu-avis-title">Ils ont relevé le défi !</h2>     {" "}
      <div className="mu-avis-grid">
               {" "}
        {reviews.slice(0, limit).map((review) => {
          const author = users.find(
            (u) => Number(review.userId) === Number(u.id),
          );

          if (!author) return null;

          return (
            <div key={review.id} className="mu-avis-card">
                                       {" "}
              {review.title && (
                <h3 className="mu-avis-authorTitle">{review.title}</h3>
              )}
                                         {" "}
              <Stars count={Number.parseInt(review.rating.toString(), 10)} />   
                        <p className="mu-avis-comment">" {review.comment} "</p> 
                                       {" "}
              <div className="mu-avis-authotcard">
                               {" "}
                <img
                  src={`http://localhost:4000${author.photoUrl || ""}`}
                  alt={author.nom || "Client inconnu"}
                  className="mu-avis-avatar"
                />
                               {" "}
                <h4 className="mu-avis-author">
                                    {author.nom}                 {" "}
                  {author.age ? `, ${author.age} ans` : ""}               {" "}
                </h4>
                             {" "}
              </div>
                         {" "}
            </div>
          );
        })}
             {" "}
      </div>
         {" "}
    </section>
  );
}

export default Avis;
