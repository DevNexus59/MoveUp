import type React from "react";
import { useEffect, useState } from "react";
import ExercicesContext from "../context/ExercicesContext";

export type Exercice = {
  id: number;
  exerciseId: string;
  nom: string;
  gifUrl: string;
  muscleCible: string;
  partieDuCorps: string;
  equipement: string;
  musclesSecondaires: string;
  instructions: string;
  duree: string;
  difficulte: string;
  activite: string;
};

interface ExercicesContextState {
  data: Exercice[];
  setData: (data: Exercice[]) => void;
  isLoading: boolean;
  error: Error | null;
}

type ExercicesProviderProps = {
  children: React.ReactNode;
};

export const ExercicesProvider = ({ children }: ExercicesProviderProps) => {
  const [data, setData] = useState<Exercice[]>([]);
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
        setData(jsonData);
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
