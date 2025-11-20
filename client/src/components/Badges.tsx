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
      .then((data: Badge[]) => setAllBadges(data));

    fetch(`http://localhost:4000/api/users/${userId}/badges`)
      .then((res) => res.json())
      .then((data: Badge[]) => setUnlockedBadges(data.map((b) => b.id)));
  }, [userId]);

  return (
    <div>
      <h2>Badges</h2>

      <div className="badges-container">
        {allBadges.map((b) => {
          const isUnlocked = unlockedBadges.includes(b.id);

          return (
            <div
              key={b.id}
              className={`badge-item ${isUnlocked ? "badge-unlocked" : "badge-locked"}`}
            >
              <img src={b.icon} alt={b.name} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Badges;
