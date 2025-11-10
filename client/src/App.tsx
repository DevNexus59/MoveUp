import { Outlet } from "react-router";
import { ExercicesProvider } from "./components/ExercicesProvider";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Toggle from "./components/Toggle";
import "./App.css";

function App() {
  return (
    <ExercicesProvider>
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
    </ExercicesProvider>
  );
}

export default App;
