import { Outlet } from "react-router";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Toggle from "./components/Toggle";
import "./App.css";

function App() {
  return (
    <>
      <nav>
        <NavBar />
      </nav>
      <main>
        <Outlet />
        <Toggle />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
