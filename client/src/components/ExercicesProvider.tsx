import type React from "react";
import { useEffect, useState } from "react";
import ExercicesContext from "../context/ExercicesContext";
import type {
  Exercice,
  ExercicesContextState,
  PlanningEvent,
} from "../types/types";

type ExercicesProviderProps = {
  children: React.ReactNode;
};

export const ExercicesProvider = ({ children }: ExercicesProviderProps) => {
  const [data, setData] = useState<Exercice[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);
  const [events, setEvents] = useState<PlanningEvent[]>([]);

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
        setData(jsonData.results);
      } catch (e) {
        setError(e as Error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  //add seance et le event contient tout sauf id
  const addEvent: ExercicesContextState["addEvent"] = (event) => {
    setEvents((prev) => [
      ...prev, //permet de copier toutes les seances existantes
      { ...event, id: crypto.randomUUID() }, //car le bebe id est la, il est unique
    ]);
  };

  //maj seance, on selectionne une seance pas tout le tableau
  const updateEvent: ExercicesContextState["updateEvent"] = (id, updates) => {
    setEvents((prev) =>
      prev.map((evt) => (evt.id === id ? { ...evt, ...updates } : evt)),
    );
  };

  //delete seance
  const deleteEvent: ExercicesContextState["deleteEvent"] = (id) => {
    setEvents((prev) => prev.filter((evt) => evt.id !== id)); // le filter renvoie un nouveau tableau et on garde toutes les seances sauf celle qui a cet id.
  };

  const value: ExercicesContextState = {
    data,
    isLoading,
    error,
    setData,

    //planning
    events,
    addEvent,
    updateEvent,
    deleteEvent,
  };

  return (
    <ExercicesContext.Provider value={value}>
      {children}
    </ExercicesContext.Provider>
  );
};
