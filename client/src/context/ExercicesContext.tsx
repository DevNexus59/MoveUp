import { createContext } from "react";

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

const ExercicesContext = createContext<Exercice | null>(null);

export default ExercicesContext;
