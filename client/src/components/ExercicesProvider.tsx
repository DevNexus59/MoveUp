import type React from "react";
import { useEffect, useState } from "react";
import ExercicesContext from "../context/ExercicesContext";
import type { Exercice, ExercicesContextState } from "../types/types";

type ExercicesProviderProps = {
  children: React.ReactNode;
};

export const ExercicesProvider = ({ children }: ExercicesProviderProps) => {
  const [data, setData] = useState<Exercice[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("📡 Tentative de fetch vers le back...");
        const response = await fetch("http://localhost:4000/api/exercices");
        console.log("✅ Réponse brute :", response);
        if (!response.ok) {
          throw new Error(`Erreur HTTP: ${response.status}`);
        }
        const jsonData = await response.json();
        console.log("📦 Données reçues :", jsonData);
        setData(jsonData.results[0]);
      } catch (e) {
        setError(e as Error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  const value: ExercicesContextState = {
    data,
    isLoading,
    error,
    setData,
  };

  return (
    <ExercicesContext.Provider value={value}>
      {children}
    </ExercicesContext.Provider>
  );
};
