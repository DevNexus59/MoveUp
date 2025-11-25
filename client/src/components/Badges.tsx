import { useEffect, useState } from "react";
import "./Badges.css";
import { useAuth } from "../context/AuthContext";

type Badge = {
  id: string;
  name: string;
  icon: string;
  description?: string;
};

function Badges() {
  const [allBadges, setAllBadges] = useState<Badge[]>([]);
  const [unlockedBadges, setUnlockedBadges] = useState<string[]>([]);
  const { userId } = useAuth();

  useEffect(() => {
    // 1. Charger tous les badges
    fetch("http://localhost:4000/api/badges")
      .then((res) => res.json())
      .then((data: Badge[]) => setAllBadges(data))
      .catch((err) => console.error("Erreur lors dur chargement:", err));

    if (userId) {
      fetch(`http://localhost:4000/api/users/${userId}/badges`)
        .then((res) => {
          if (!res.ok) throw new Error("Erreur fetch user badges");
          return res.json();
        })
        .then((data: Badge[]) => {
          if (Array.isArray(data)) {
            setUnlockedBadges(data.map((b) => b.id));
          }
        })
        .catch((err) => console.error(err));
    }
  }, [userId]);

  return (
    <div>
      <h3>Badges</h3>

      <div className="badges-container">
        {allBadges.map((b) => {
          // Comparaison stricte
          const isUnlocked = unlockedBadges.includes(b.id);

          return (
            <div
              key={b.id}
              className={`badge-item ${isUnlocked ? "badge-unlocked" : "badge-locked"}`}
              title={b.description || b.name}
            >
              <img src={b.icon} alt={b.name} />
              {/* <p>{b.name}</p> */}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Badges;
