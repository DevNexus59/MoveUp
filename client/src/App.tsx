import { Outlet } from "react-router";
import NavBar from "./components/NavBar";
import "./App.css";

import "./components/Avis";

function App() {
  return (
    <>
      <nav>
        <NavBar />
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;
