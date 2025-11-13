import type React from "react";
import { useState } from "react";
import "./Search.css";

interface SearchProps {
  data: string[];
}

const Search: React.FC<SearchProps> = ({ data }) => {
  const [query, setQuery] = useState("");

  // Filtrage des données en ignorant la casse et les espaces
  const filteredData = data.filter((item) =>
    item.toLowerCase().trim().includes(query.toLowerCase().trim()),
  );

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Rechercher un exercice"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="search-input"
      />
      {filteredData.length > 0 ? (
        <ul className="search-results">
          {filteredData.map((item, id) => (
            <li key={id} className="search-item">
              {item}
            </li>
          ))}
        </ul>
      ) : query ? (
        <p className="search-no-results">Aucun résultat trouvé.</p>
      ) : null}
    </div>
  );
};

export default Search;
