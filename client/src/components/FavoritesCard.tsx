import { type ReactElement, useEffect, useState } from "react";
// 1. Importer le hook useAuth
import { useAuth } from "../context/AuthContext";
import "./Avis.css";
import type { Exercice } from "../types/types"; // Assurez-vous d'importer le bon type si possible
import ExerciceCard from "./ExerciceCard";

const API_BASE_URL = "http://localhost:4000";

interface Favorite extends Exercice {
  // Ajoutez ici des champs spécifiques si nécessaire
}

function FavoritesCard(): ReactElement {
  // 2. Récupérer le userId depuis le contexte
  const { userId } = useAuth();

  const [favorites, setFavorites] = useState<Favorite[]>([]);
  const [status, setStatus] = useState("");

  useEffect(() => {
    if (!userId) {
      console.log("Pas de userId détecté !");
      return;
    }

    console.log("UserId utilisé pour le fetch :", userId); // CHECK 1

    const fetchData = async () => {
      try {
        const url = `${API_BASE_URL}/api/users/${userId}/favorites`;
        console.log("URL appelée :", url); // CHECK 2

        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`Erreur réseau : ${response.status}`);
        }

        const favoritesData = await response.json();
        console.log("Données brutes reçues de l'API :", favoritesData); // CHECK 3

        // Vérification de sécurité avant le setFavorites
        if (Array.isArray(favoritesData)) {
          setFavorites(favoritesData);
        } else {
          console.warn(
            "Attention: L'API n'a pas renvoyé un tableau !",
            favoritesData,
          );
          // Si l'API renvoie { data: [...] }, utilisez setFavorites(favoritesData.data)
        }
      } catch (error) {
        console.error("Erreur lors du chargement:", error);
        setStatus("error");
      }
    };

    fetchData();
  }, [userId]);

  if (!userId) return <p>Veuillez vous connecter pour voir vos favoris.</p>;
  if (status === "error") return <p>Erreur lors du chargement des favoris.</p>;

  return (
    <div className="favorites-container">
      {favorites.map((exercise) => (
        <ExerciceCard
          // Attention: assurez-vous que 'exercise' contient bien un 'id' ou 'exerciseId' unique
          key={exercise.exerciseId}
          exoData={exercise}
        />
      ))}
    </div>
  );
}

export default FavoritesCard;
