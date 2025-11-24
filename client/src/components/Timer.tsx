import { useEffect, useState, useCallback } from "react";
import "./Timer.css";

interface TimerProps {
  heures?: number;
  minutes?: number;
  secondes?: number;
  nameOfUser: number;
  exerciceId: string;
}

const Timer = ({
  heures = 0,
  minutes = 0,
  secondes = 0,
  nameOfUser: userId,
  exerciceId,
}: TimerProps) => {
  const [pause, setPause] = useState(true);
  const [termine, setTermine] = useState(false);
  const [[h, m, s], setTemps] = useState([heures, minutes, secondes]);
  const [demarre, setDemarre] = useState(false);

  const [badgesMessage, setBadgesMessage] = useState<string | null>(null);

  const handleExerciceComplete = useCallback(async () => {
    try {
      const response = await fetch(
        "http://localhost:4000/api/achievements/track",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userId: Number(userId),
            exerciceId: exerciceId,
          }),
        },
      );

      if (response.ok) {
        const data = await response.json();
        console.log("Exercice complété avec succès :", data);

        if (data.newlyUnlockedBadges && data.newlyUnlockedBadges.length > 0) {
          const badgeNames = data.newlyUnlockedBadges
            .map((b: { name: string }) => b.name)
            .join(",");
          setBadgesMessage(
            `Félicitations ! Vous avez débloqué le badge : ${badgeNames}`,
          );
        }
      } else {
        console.error("Erreur lors de l'enregistrement de l'exercice.");
      }
    } catch (error) {
      console.error("Erreur réseau :", error);
    }
  }, [userId, exerciceId]);
  const remiseAZero = () => {
    setTemps([heures, minutes, secondes]);
    setPause(true);
    setTermine(false);
    setDemarre(false);
    setBadgesMessage(null);
  };

  const handleDemarrer = () => {
    setDemarre(true);
    setPause(false);
  };

  const handlePauseReprise = () => {
    setPause(!pause);
  };

  useEffect(() => {
    let timerId: NodeJS.Timeout;
    if (!pause && !termine) {
      timerId = setInterval(() => {
        setTemps(([ch, cm, cs]) => {
          if (ch === 0 && cm === 0 && cs === 0) {
            setTermine(true);
            return [0, 0, 0];
          }
          if (cm === 0 && cs === 0) return [ch - 1, 59, 59];
          if (cs === 0) return [ch, cm - 1, 59];
          return [ch, cm, cs - 1];
        });
      }, 1000);
    }
    return () => clearInterval(timerId);
  }, [pause, termine]);

  useEffect(() => {
    if (termine) {
      handleExerciceComplete();
    }
  }, [termine, handleExerciceComplete]);

  return (
    <div className="timer-container">
      <div className="timer-display">
        {`${h.toString().padStart(2, "0")}:${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`}
      </div>
      {termine && (
        <div className="timer-complete-message">
          Exercice terminé !
          {badgesMessage && (
            <div className="badges-message">{badgesMessage}</div>
          )}
        </div>
      )}
      <div className="timer-buttons">
        {!demarre ? (
          <button
            type="button"
            onClick={handleDemarrer}
            className="timer-btn-demarrer"
          >
            Démarrer
          </button>
        ) : (
          <button
            type="button"
            onClick={handlePauseReprise}
            disabled={termine}
            className="timer-btn-pause"
          >
            {pause ? "Reprendre" : "Pause"}
          </button>
        )}
        <button type="button" onClick={remiseAZero} className="timer-btn-reset">
          Redémarrer
        </button>
      </div>
    </div>
  );
};

export default Timer;
