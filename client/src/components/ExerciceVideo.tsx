import { Link } from "react-router";
// import videoFile from "../assets/293085_medium.mp4";
import videoFile from "../assets/chicken-werk-chicken-dance.mp4";
import "./ExerciceVideo.css";

function ExerciceVideo() {
  return (
    <section className="ExerciceVideo-section">
      <h2 className="ExerciceVideo-h2">Découvrez nos exercices !</h2>
      <article className="ExerciceVideo-article">
        <div className="ExerciceVideo-encart">
          <h3 className="ExerciceVideo-h3">Montée de genoux</h3>
          <p className="ExerciceVideo-p">
            Position de départ : debout, dos droit, bras le long du corps.
          </p>
          <p className="ExerciceVideo-p">
            Mouvement : alternez la montée rapide de chaque genou jusqu’à la
            hauteur des hanches (ou plus haut), en synchronisant les bras comme
            si vous couriez sur place.
          </p>
          <p className="ExerciceVideo-p">
            Cible : travail du cardio, des abdominaux et des jambes.
          </p>
          <Link className="ExerciceVideo-link" to="/Pages/Entrainements">
            <button className="ExerciceVideo-button" type="button">
              Nos entraînements
            </button>
          </Link>
        </div>
        <video
          className="ExerciceVideo-video"
          autoPlay
          muted
          loop
          src={videoFile}
          width={640}
          height={360}
          playsInline
          preload="metadata"
        >
          <track kind="captions" src="#" label="Aucun sous-titre" />
        </video>
      </article>
    </section>
  );
}

export default ExerciceVideo;
