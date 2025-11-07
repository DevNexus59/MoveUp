import type React from "react";
import { useState } from "react";
import { Link } from "react-router";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import "../App.css";
import "./Connexion.css";

function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("");
    try {
      const response = await fetch("http://localhost:4000/connexion", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        const token = data.token;
        localStorage.setItem("authToken", token);

        setMessage("Connexion Reussie ! Token stocké.");
        setEmail("");
        setPassword("");
      } else {
        const errorText = await response.text();
        setMessage(`Erreur: ${errorText}`);
      }
    } catch (error) {
      console.error("Erreur de connexion:", error);
      setMessage("Impossible de se connecter au serveur.");
    }
  };

  return (
    <>
      <div>
        <Hero />
      </div>
      <h2>Connexion:</h2>
      <div className="connexion-board">
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password">Mot de passe:</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <Link to="/pages/Inscription">Je ne suis pas inscrit</Link>
          </div>
          <button type="submit">Se connecter</button>
        </form>

        {message && <p>{message}</p>}
        <Footer />
      </div>
    </>
  );
}

export default Login;
