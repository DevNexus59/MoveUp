// import hook react
import { useEffect, useState } from "react";
import { useEffect as useEffectType } from "react";

// Composant Toggle pour changer le thème clair/sombre en gros il y a deux valeurs "light" et "dark"
function Toggle() {
  type Theme = "light" | "dark";
  const STORAGE_KEY = "theme";

  // lire le stockage local si un thème est déjà défini si oui light ou dark sinon let's go pour null
  const getStoredTheme = (): Theme | null => {
    const value = localStorage.getItem(STORAGE_KEY);
    return value === "light" || value === "dark" ? value : null;
  };

  // on demande si le user a un theme enregistre sinon on check son systeme
  const getInitialTheme = (): Theme => {
    const stored = getStoredTheme();
    if (stored) return stored;
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  };

  // theme = valeur actuelle , setTheme = fonction pour la mettre a jour
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  // applique & sauvegarde le thème
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme); // lie avec le css via l'attribut data-theme
    localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  // écoute changement du système (si pas de préférence enregistrée)
  useEffectType(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e: MediaQueryListEvent) => {
      if (!getStoredTheme()) setTheme(e.matches ? "dark" : "light");
    };
    mq.addEventListener("change", handleChange);
    return () => mq.removeEventListener("change", handleChange);
  }, []);

  // et voici le bouton qui change le thème au clic
  return (
    <button
      type="button"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      {theme === "light" ? "🌙 Mode sombre" : "☀️ Mode clair"}
    </button>
  );
}

export default Toggle;
