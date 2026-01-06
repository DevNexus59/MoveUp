# 🚀 MoveUp - Votre compagnon de remise en forme

MoveUp est une plateforme web full-stack dynamique dédiée au fitness et au bien-être. Elle permet aux utilisateurs de planifier des séances d'entraînement, de suivre des programmes personnalisés et d'interagir avec des coachs professionnels.

---

## ⚠️ Organisation du Projet (Architecture Monorepo)

Ce dépôt contient principalement la logique **Frontend** du projet. Pour des raisons de maintenance et de déploiement, la partie **Backend (API)** est hébergée sur un dépôt séparé.

🔗 **Accéder au dépôt de l'API :** [https://github.com/DevNexus59/API-MoveUp](https://github.com/DevNexus59/API-MoveUp)

---

## 🌟 Fonctionnalités Principales

### Pour les Utilisateurs :
* **Tableau de Bord Personnalisé :** Suivi de l'activité et des progrès.
* **Catalogue d'Entraînements :** Large choix d'exercices avec détails techniques et vidéos.
* **Planning Interactif :** Organisation des séances via un calendrier intégré (FullCalendar).
* **Favoris & Coachs :** Possibilité de mettre en favoris des entraînements et de consulter les profils des coachs.
* **Gestion de Profil :** Inscription, connexion sécurisée et personnalisation des données.

### Aspect Technique :
* **Mode Sombre/Clair :** Interface adaptable selon les préférences utilisateur.
* **Responsive Design :** Navigation fluide sur mobile, tablette et desktop.
* **Validation des Types :** Utilisation rigoureuse de TypeScript pour un code robuste.

---

## 🛠️ Stack Technique

### Frontend
* **Framework :** React 19.
* **Outil de build :** Vite.
* **Routage :** React Router 7.
* **Gestion du temps :** FullCalendar (Daygrid, Interaction, Timegrid).
* **Authentification :** Intégration Google OAuth.

### Backend (Dépôt API-MoveUp)
* **Serveur :** Node.js & Express.
* **Base de données :** MySQL.
* **Tests :** Jest & Supertest.

### Qualité & Outils
* **Linter & Formatter :** Biomejs.
* **Gestion de projet :** Architecture monorepo gérée avec les Workspaces npm.

---

## 📦 Installation et Lancement

### Prérequis
* Node.js (version LTS recommandée)
* Un compte GitHub
* La partie [API-MoveUp](https://github.com/DevNexus59/API-MoveUp) configurée et lancée.

### Procédure

1.  **Cloner le dépôt :**
    ```bash
    git clone [https://github.com/votre-username/moveup.git](https://github.com/votre-username/moveup.git)
    cd moveup
    ```

2.  **Installer les dépendances :**
    ```bash
    npm install
    ```

3.  **Configurer les variables d'environnement :**
    * Dans `client/`, copiez `.env.sample` vers `.env` et renseignez l'URL de votre API.
    * Faites de même dans le dossier `server/` (si utilisé localement).

4.  **Démarrer en mode développement :**
    ```bash
    npm run dev
    ```
    Le client sera accessible sur `http://localhost:3000` (ou le port indiqué par Vite).

---

## 📋 Commandes Utiles

* `npm run check` : Vérifie la qualité du code et les types.
* `npm run build` : Génère les fichiers de production pour le client et le serveur.
* `npm run db:migrate` : (Backend) Synchronise le schéma de la base de données.

---

## 👥 Contributeurs

Ce projet a été réalisé par l'équipe **Team Rocket** (Js-Crew809) dans le cadre de la formation à la **Wild Code School**.

---
*Projet sous licence MIT.*
