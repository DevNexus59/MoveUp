// import { useState } from "react";
// import TrainingEx1 from "../components/trainings/TrainingEx1.tsx";
// import TrainingEx2 from "../components/trainings/TrainingEx2.tsx";
// import TrainingEx3 from "../components/trainings/TrainingEx3.tsx";

// function Training() {
//   // Liste des trainings importés
//   const trainings = [
//     {
//       id: 1,
//       title: "Training #1",
//       img: "/images/TrainingEx1.jpg",
//       component: TrainingEx1,
//     },
//     {
//       id: 2,
//       title: "Training #2",
//       img: "/images/TrainingEx2.jpg",
//       component: TrainingEx2,
//     },
//     {
//       id: 3,
//       title: "Training #3",
//       img: "/images/TrainingEx3.jpg",
//       component: TrainingEx3,
//     },
//   ];

//   // Id du training stocké dont on affiche la playlist
//   const [openTrainingId, setOpenTrainingId] = useState<number | null>(null);

//   const toggleTraining = (id: number) => {
//     setOpenTrainingId((prev) => (prev === id ? null : id));
//   };

//   return (
//     <section className="AllTrainingsContainer">
//       <h1>Nos Trainings</h1>

//       {trainings.map((training) => {
//         const TrainingComponent = training.component;

//         return (
//           <article key={training.id} className="TrainingPreview">
//             {/* Aperçu du training */}
//             <img
//               className="TrainingPreviewImage"
//               src={training.img}
//               alt={training.title}
//             />
//             <h2>{training.title}</h2>

//             <button
//               type="button"
//               onClick={() => toggleTraining(training.id)}
//               className="TrainingStartButton"
//             >
//               {openTrainingId === training.id ? "Fermer" : "Commencer"}
//             </button>

//             {/* Affichage de la playlist si ouverte */}
//             {openTrainingId === training.id && (
//               <div className="TrainingContent">
//                 <TrainingComponent />
//               </div>
//             )}
//           </article>
//         );
//       })}
//     </section>
//   );
// }

// export default Training;
