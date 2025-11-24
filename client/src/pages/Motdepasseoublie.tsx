import { useState } from "react";



function MotDePasseOublie() {
    const [email, setEmail] = useState<string>("");
    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        try {
            await fetch('http://localhost:4000/api/auth/forgot-password', {
method: "POST",

headers: {

"Content-Type": "application/json"

},

body: JSON.stringify ({

email: email,

})})
        } catch (error) {
            console.error("Erreur lors de l'envoi du lien de réinitialisation :", error);
        }
    }
  return (
    <div>
      <h1>Mot de passe oublié</h1>
      <p>Page pour réinitialiser le mot de passe.</p>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Entrez votre email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Envoyer le lien de réinitialisation</button>
      </form>
    </div>
  );
}

export default MotDePasseOublie;