import { useContext, useEffect, useState } from "react";
import ExerciceCard from "./ExerciceCard";
import ExercicesContext from "../context/ExercicesContext";
import "./Search.css";
import type { Exercice } from "../types/types";

function Search() {
  const [query, setQuery] = useState("");
  const [filterData, setFilterData] = useState<Exercice[]>([]);
  const [selectedExercice, setSelectedExercice] = useState<Exercice | null>(null);

  const Donnees = useContext(ExercicesContext);

  useEffect(() => {
    if (!Donnees) return;

    if (Donnees.isLoading) {
      setFilterData([]);
      return;
    }

    const filtered = Donnees.data?.filter((item) => {
      if (query.trim() === "") return false;
      return item.nom.toLowerCase().includes(query.toLowerCase().trim());
    });

    setFilterData(filtered || []);
  }, [Donnees, query]);
  
{console.log(selectedExercice)}

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Rechercher un exercice"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          setSelectedExercice(null);
        }}
        className="search-input"
      />

      {filterData.length > 0 ? (
        <ul className="search-results">
          {filterData.map((item) => (
            <li
              key={item.id}
              className="search-item"
              onClick={() => {
                setSelectedExercice(item);
                setFilterData([]);
                setQuery(item.nom);
              }}
            >
              {item.nom}
            </li>
          ))}
        </ul>
      ) : (

        query &&
        !selectedExercice && (
          <p className="search-no-results">Aucun résultat trouvé.</p>
        )
      )}
          
      {selectedExercice && (
        <div className="exercice-card-container">
          <ExerciceCard exoData={selectedExercice} />
        </div>
      )}
    </div>
  );
}

export default Search;



// const Donnees:Donnees | null = useContext(ExercicesContext);
  
  // Filtrage des données en ignorant la casse et les espaces

  // useEffect (()=>{ setFilterData (data.isLoading ? null:  data.data.results.filter((item) =>
  // item.toLowerCase().trim().includes(query.toLowerCase().trim()),
  //  ))
  //   },[]);
  // code Abdou
  // useEffect(() => {
  //   if(Donnees.isLoading ){
  //   } else {
  //     setFilterData(Donnees.data.results.filter((item) => {
  //       console.log(item.nom.toLowerCase().trim().includes(query.toLowerCase().trim()))
  //        return (item.nom.toLowerCase().trim().includes(query.toLowerCase().trim()))
  //     }
  //     ))
  //   }
  // },[]);
  //fin code Abdou

  // code Pierre
  // useEffect(() => {

  //   if (!Donnees.isLoading && Donnees.data && Donnees.data.results) {
  //     const lowerCaseQuery = query.toLowerCase().trim();
  //     const filteredData = Donnees.data.results.filter((item) => {
  //       return item.nom?.toLowerCase().trim().includes(lowerCaseQuery) ?? false;
  //     });
  //     setFilterData(filteredData);
  //   } else if (!Donnees.isLoading) {
  //     setFilterData([]);
  //   }
  // }, [query, Donnees.isLoading, Donnees.data]);
  //fin code Pierre

//   useEffect(() => {
//     if (!Donnees) {
//       return;
//     }
//     if (Donnees.isLoading) {
//       setFilterData([]);
//     } else {
//       console.log("test", Donnees.data);

//       const filterData = Donnees.data?.filter((item) => {
//         // console.log(item.nom.toLowerCase().trim().includes(query.toLowerCase().trim()));

//         if (query === "") return;
//         return item.nom
//           .toLowerCase()
//           .trim()
//           .includes(query.toLowerCase().trim());
//       });
//       console.log(filterData, "filter");
//       setFilterData(filterData || []);
//       // setFilterData(Donnees.data?.filter((item) => {
//       //     console.log(item.nom.toLowerCase().trim().includes(query.toLowerCase().trim()));
//       //     return item.nom.toLowerCase().trim().includes(query.toLowerCase().trim());
//       //   })
//       // );
//     }
//   }, [Donnees, query]);

//   return (
//     <div className="search-container">
//       <input
//         type="text"
//         placeholder="Rechercher un exercice"
//         value={query}
//         onChange={(e) => setQuery(e.target.value)}
//         className="search-input"
//       />
//       {filterData.length > 0 ? (
//         <ul className="search-results">
//           {filterData.map((item) => (
//             <li key={item.id} className="search-item">
//               {item.nom}
//             </li>
//           ))}
//         </ul>
//       ) : (
//         query &&
//         filterData.length === 0 && (
//           <p className="search-no-results">Aucun résultat trouvé.</p>
//         )
//       )}
//     </div>
//   );
// }

// export default Search;
//   if (!Donnees.isLoading && Donnees.data && Donnees.data.results) {
//     const lowerCaseQuery = query.toLowerCase().trim();
//     const filteredData = Donnees.data.results.filter((item) => {
//       return item.nom?.toLowerCase().trim().includes(lowerCaseQuery) ?? false;
//     });
//     setFilterData(filteredData);
//   } else if (!Donnees.isLoading) {
//     setFilterData([]);
//   }
// }, [query, Donnees.isLoading, Donnees.data]);
//fin code Pierre
