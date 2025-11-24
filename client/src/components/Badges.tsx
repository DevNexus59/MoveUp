import { useEffect, useState } from "react";
import "./Badges.css";
import { useAuth } from "../context/AuthContext";

type Badge = {
  id: string;
  name: string;
  icon: string;
};

function Badges() {
  const [allBadges, setAllBadges] = useState<Badge[]>([]);
  const [unlockedBadges, setUnlockedBadges] = useState<string[]>([]);
  const { userId } = useAuth();

  useEffect(() => {
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
    <div className="badges-main">
      <h2 className="badges-title">Badges</h2>
      <div className="badges-container">
        {allBadges.map((b) => {
          const isUnlocked = unlockedBadges.includes(b.id);

          return (
            <div
              key={b.id}
              className={`badge-item ${isUnlocked ? "badge-unlocked" : "badge-locked"}`}
            >
              <img src={b.icon} alt={b.name} />
              <span className="badge-name">{b.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Badges;
