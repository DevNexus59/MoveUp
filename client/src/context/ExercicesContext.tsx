import { createContext } from "react";
import type {ExercicesContextState} from "../types/types";

const ExercicesContext = createContext<ExercicesContextState | null>(null);

export default ExercicesContext;
