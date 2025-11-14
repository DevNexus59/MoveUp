// import { type CredentialResponse, GoogleLogin } from "@react-oauth/google";
import type React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router";
import Hero from "../components/Hero";
import "../App.css";
import "./Connexion.css";
import { useAuth } from "../context/AuthContext";

function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  // const handleSuccess = async (credentialResponse: CredentialResponse) => {
  //   const credential = credentialResponse.credential;
  //   try {
  //     const res = await fetch("http://localhost:4000/api/auth/google-login", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({ credential }),
  //     });

  //     if (!res.ok) {
  //       throw new Error("Échec de l'authentification backend");
  //     }
  //     const { token } = await res.json();
  //     localStorage.setItem("TokenAuthGoogle", token);
  //     window.location.href = "/dashboard";
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };
  // const handleError = () => {
  //   console.log("Échec de la connexion Google");
  // };
  const { login } = useAuth();
  const navigate = useNavigate();
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
        login(data.token, data.userId, data.userFirstName);
        navigate("/");
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
        {/* <GoogleLogin
          onSuccess={handleSuccess}
          onError={handleError}
          useOneTap
        /> */}

        {message && <p>{message}</p>}
      </div>
    </>
  );
}

export default Login;
