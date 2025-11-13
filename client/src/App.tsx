import { Outlet } from "react-router";
import { ExercicesProvider } from "./components/ExercicesProvider";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import NavBarLogged from "./components/NavBarLogged";
import Toggle from "./components/Toggle";
import "./App.css";
import { useAuth } from "./context/AuthContext";

function App() {
  const { isAuthenticated } = useAuth();
  return (
    <ExercicesProvider>
      <nav>{isAuthenticated ? <NavBarLogged /> : <NavBar />}</nav>
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
