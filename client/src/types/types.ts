export interface User {
  name: string;
  firstname: string;
  address: string;
  zipcode: string;
  city: string;
  phone: string;
  email: string;
  usertype: string;
  levelexperiency: string;
  timerequired: string;
  diet: string;
  subscription: string;
  favoriteExercises: string;
  favoriteExercices: string;
  photoUrl: string;
}

export interface Exercice {
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
}

export interface Donnees {
  data: {
    results: Exercice[]; // ou unknown si tu veux éviter any
  };
  isLoading: boolean;
}

export interface ExercicesContextState {
  data: Exercice[] | null;
  setData: (data: Exercice[] | null) => void;
  isLoading: boolean;
  error: Error | null;
}
