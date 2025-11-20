import { useState } from "react";
import type { FormEvent } from "react";
import "./Formulaire.css";

interface FormData {
  nom: string;
  prenom: string;
  email: string;
  sujet: string;
  message: string;
  consent: boolean;
  website: string; // pour pieger les bot
}

const initData: FormData = {
  nom: "",
  prenom: "",
  email: "",
  sujet: "",
  message: "",
  consent: false,
  website: "",
};

export default function Formulaire() {
  const [values, setValues] = useState<FormData>(initData); //champ du formulaire
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >(
    // status ou il manque des elements
    "idle",
  );
  const [serverMsg, setServerMsg] = useState(""); //text visible pour utilisateur
  const [isModalOpen, setIsModalOpen] = useState(false);

  // MAJ des champs
  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, type } = e.target;
    const value =
      type === "checkbox"
        ? (e.target as HTMLInputElement).checked
        : e.target.value;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  //modale
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Submission du formulaire

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // on ignore le bot s'il remplit le champ website
    if (values.website) return;

    const form = e.currentTarget;

    // validation native du navigateur
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    try {
      setStatus("sending");
      setServerMsg("");
      // API si besoin pour version connectee.
      await new Promise((r) => setTimeout(r, 800));

      setStatus("success");
      setServerMsg("Merci ! Votre message a bien été envoyé.");
      setValues(initData);
      form.reset(); //remise du state
      setIsModalOpen(true);
    } catch {
      setStatus("error");
      setServerMsg("Une erreur est survenue. Réessayez plus tard.");
      setIsModalOpen(true);
    }
  };

  return (
    <section className="form-section" aria-labelledby="contact-title">
      <h2 id="contact-title">Contactez-nous !</h2>

      <form
        className="form-contact"
        onSubmit={onSubmit}
        noValidate
        aria-describedby="contact-instructions"
      >
        <p id="contact-instructions" className="sr-only">
          Tous les champs marqués d'un astérisque sont obligatoires.
        </p>

        {/* Honeypot */}
        <input
          type="text"
          name="website"
          value={values.website}
          onChange={onChange}
          className="hp-field"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
        />

        <fieldset>
          <legend>Vos coordonnées</legend>

          <div className="form-row">
            <div className="form-field">
              <label htmlFor="nom">
                Nom <span aria-hidden="true">*</span>
              </label>
              <input
                id="nom"
                name="nom"
                type="text"
                required
                placeholder="Votre nom"
                value={values.nom}
                onChange={onChange}
                autoComplete="family-name"
              />
            </div>

            <div className="form-field">
              <label htmlFor="prenom">
                Prénom <span aria-hidden="true">*</span>
              </label>
              <input
                id="prenom"
                name="prenom"
                type="text"
                required
                placeholder="Votre prénom"
                value={values.prenom}
                onChange={onChange}
                autoComplete="given-name"
              />
            </div>
          </div>

          <div className="form-field">
            <label htmlFor="email">
              Email <span aria-hidden="true">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="votre@email.com"
              value={values.email}
              onChange={onChange}
              inputMode="email"
              autoComplete="email"
            />
          </div>
        </fieldset>

        <fieldset>
          <legend>Votre message</legend>

          <div className="form-field">
            <label htmlFor="sujet">
              Sujet <span aria-hidden="true">*</span>
            </label>
            <input
              id="sujet"
              name="sujet"
              type="text"
              required
              placeholder="Sujet du message"
              value={values.sujet}
              onChange={onChange}
            />
          </div>

          <div className="form-field">
            <label htmlFor="message">
              Message <span aria-hidden="true">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows={6}
              required
              minLength={10}
              placeholder="Votre message…"
              value={values.message}
              onChange={onChange}
            />
          </div>

          <div className="form-consent">
            <input
              id="consent"
              name="consent"
              type="checkbox"
              required
              checked={values.consent}
              onChange={onChange}
            />
            <label htmlFor="consent">
              J'accepte que mes données soient utilisées pour me re-contacter.
            </label>
          </div>
        </fieldset>

        <div className="form-actions">
          <button type="submit" disabled={status === "sending"}>
            {status === "sending" ? "Envoi…" : "Envoyer"}
          </button>
          <button
            type="reset"
            className="secondary"
            onClick={() => {
              setValues(initData);
              setStatus("idle");
              setServerMsg("");
            }}
          >
            Réinitialiser
          </button>
        </div>
      </form>

      {isModalOpen && (
        <dialog
          className="form-modal-backdrop"
          aria-modal="true"
          aria-labelledby="form-modal-title"
        >
          <div className="form-modal">
            <h3 id="form-modal-title">
              {status === "success"
                ? "Message envoyé!"
                : "Une erreur est survenue, veuillez réessayer."}
            </h3>
            <p>{serverMsg}</p>
            <button type="button" onClick={closeModal}>
              Fermer
            </button>
          </div>
        </dialog>
      )}
    </section>
  );
}
