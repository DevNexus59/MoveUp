import {
  type ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { useNavigate } from "react-router";
import type { User } from "../types/types";

interface AuthContextType {
  isAuthenticated: boolean;
  user: User | null;
  setUser: (user: User | null) => void;
  userId: string | null;
  userFirstName: string | null;
  login: (token: string, userId: string, userFirstName: string | null) => void;
  logout: () => void;
}
const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    return !!localStorage.getItem("authToken");
  });
  const [userId, setUserId] = useState<string | null>(() => {
    return localStorage.getItem("userId");
  });
  const [userFirstName, setuserFirstName] = useState<string | null>(() => {
    return localStorage.getItem("userFirstName");
  });
  useEffect(() => {
    if (userId) {
      console.log("AuthProvider: Tentative de fetch pour l'ID:", userId);

      const fetchUtilisateur = async () => {
        try {
          const reponse = await fetch(
            `http://localhost:4000/api/users/${userId}`,
          );

          if (!reponse.ok) {
            console.error("Erreur HTTP:", reponse.status, reponse.statusText);
            throw new Error("La requête pour l'utilisateur a échoué");
          }

          const data: User = await reponse.json();

          setUser(data);
        } catch (erreur) {
          console.error(
            "Erreur lors de la récupération de l'utilisateur:",
            erreur,
          );
        }
      };

      fetchUtilisateur();
    } else {
      setUser(null);
    }
  }, [userId]);

  const login = (
    token: string,
    userId: string,
    userFirstName: string | null,
  ) => {
    localStorage.setItem("authToken", token);
    localStorage.setItem("userId", userId);
    localStorage.setItem("userFirstName", userFirstName || "");
    setIsAuthenticated(true);
    setUserId(userId);
    setuserFirstName(userFirstName);
  };

  const logout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("userId");
    localStorage.removeItem("userFirstName");
    setIsAuthenticated(false);
    setUserId(null);
    setuserFirstName(null);
    navigate("/");
  };

  const value = {
    isAuthenticated,
    user,
    setUser,
    userId,
    userFirstName,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error(
      "useAuth doit être utilisé à l'intérieur d'un AuthProvider",
    );
  }
  return context;
}
