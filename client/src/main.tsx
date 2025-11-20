// Import necessary modules from React and React Router
// import { GoogleOAuthProvider } from "@react-oauth/google";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router";

/* ************************************************************************* */

// Import the main app component
import App from "./App";
import { ExercicesProvider } from "./components/ExercicesProvider";
import { AuthProvider } from "./context/AuthContext";
import About from "./pages/About";
import Accueil from "./pages/Accueil";
import Connexion from "./pages/Connexion";
import Contact from "./pages/Contact";
import EntrainementDetail from "./pages/EntrainementDetail";
import Entrainements from "./pages/Entrainements";
import Inscription from "./pages/Inscription";
import Register from "./pages/Inscription";
import MentionsLegales from "./pages/MentionsLegales";
import NotFound from "./pages/NotFound";
import Planning from "./pages/Planning";
import Profil from "./pages/Profil";
import Tarifs from "./pages/Tarifs";

// Import additional components for new routes
// Try creating these components in the "pages" folder

// import About from "./pages/About";
// import Contact from "./pages/Contact";

/* ************************************************************************* */

// Create router configuration with routes
// You can add more routes as you build out your app!
const router = createBrowserRouter([
  {
    element: (
      <AuthProvider>
        <ExercicesProvider>
          <App />
        </ExercicesProvider>
      </AuthProvider>
    ),
    children: [
      {
        path: "/", // The root path
        element: <Accueil />, // Renders the App component for the home page
      },
      // Try adding a new route! For example, "/about" with an About component
      // Navbar
      {
        path: "/pages/About", // The root path
        element: <About />, // Renders the App component for the home page
      },
      {
        path: "/pages/Accueil", // The root path
        element: <Accueil />, // Renders the App component for the home page
      },
      {
        path: "/pages/Connexion", // The root path
        element: <Connexion />, // Renders the App component for the home page
      },
      {
        path: "/pages/Entrainements", // The root path
        element: <Entrainements />, // Renders the App component for the home page
      },
      {
        path: "/pages/EntrainementDetail/:id",
        element: <EntrainementDetail />,
      },
      {
        path: "/pages/Inscription", // The root path
        element: <Inscription />, // Renders the App component for the home page
      },
      {
        path: "/pages/MentionsLegales", // The root path
        element: <MentionsLegales />, // Renders the App component for the home page
      },
      {
        path: "/pages/Planning", // The root path
        element: <Planning />,
      },
      {
        path: "/pages/Tarifs", // The root path
        element: <Tarifs />, // Renders the App component for the home page
      },
      {
        path: "/pages/Inscription", // The root path
        element: <Register />,
      },
      {
        path: "/pages/Profil", // The root path
        element: <Profil />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
      {
        path: "/pages/Contact", // The root path
        element: <Contact />,
      },
    ],
  },
  // Try adding a new route! For example, "/about" with an About component
]);

/* ************************************************************************* */

// Find the root element in the HTML document
const rootElement = document.getElementById("root");
if (rootElement == null) {
  throw new Error(`Your HTML Document should contain a <div id="root"></div>`);
}

// Render the app inside the root element
createRoot(rootElement).render(
  <StrictMode>
    {/* <GoogleOAuthProvider clientId="576518412561-g6gv2t0m3jqc15k4st98eu6i3m06jc3f.apps.googleusercontent.com"> */}

    <RouterProvider router={router} />
    {/* </GoogleOAuthProvider> */}
  </StrictMode>,
);

/**
 * Helpful Notes:
 *
 * 1. Adding More Routes:
 *    To add more pages to your app, first create a new component (e.g., About.tsx).
 *    Then, import that component above like this:
 *
 *    import About from "./pages/About";
 *
 *    Add a new route to the router:
 *
 *      {
 *        path: "/about",
 *        element: <About />,  // Renders the About component
 *      }
 *
 * 2. Try Nested Routes:
 *    For more complex applications, you can nest routes. This lets you have sub-pages within a main page.
 *    Documentation: https://reactrouter.com/en/main/start/tutorial#nested-routes
 *
 * 3. Experiment with Dynamic Routes:
 *    You can create routes that take parameters (e.g., /users/:id).
 *    Documentation: https://reactrouter.com/en/main/start/tutorial#url-params-in-loaders
 */
