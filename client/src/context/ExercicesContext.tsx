import { createContext } from "react";
import type { Exercice } from "../components/ExercicesProvider";

interface ExerciceContextState {
  data: Exercice[];
  setData: (data: Exercice[]) => void;
  isLoading: boolean;
  error: Error | null;
}

const ExercicesContext = createContext<ExerciceContextState>({
  data: [],
  setData: () => {},
  isLoading: false,
  error: null,
});

export default ExercicesContext;
