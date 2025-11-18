import { useContext } from "react";
import ExercicesContext from "../context/ExercicesContext";
import ExerciceCard from "./ExerciceCard";

import "../components/ActivitePrez.css";

interface activitePrezI {
  activitePrez: string;
}

function ActivitePrez({ activitePrez }: activitePrezI) {
  const context = useContext(ExercicesContext);
  //Permet de vérifier que context n'est pas nul (condition exigée par TS)
  if (!context) {
    throw new Error("ExerciceContext est null ou undefined");
  }
  const activite = context.data?.filter(
    (exercice) => exercice.activite === activitePrez,
  );

  return (
    <article className="ActivitePrez-article">
      <h3 className="ActivitePrez-h3">
        {activitePrez.charAt(0).toUpperCase() + activitePrez.slice(1)}
      </h3>
      <div className="ActivitePrez-exercice-list">
        {activite?.slice(0, 4).map((exercice) => (
          <ExerciceCard key={exercice.id} exoData={exercice} />
        ))}
      </div>
    </article>
  );
}

export default ActivitePrez;
