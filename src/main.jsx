// src/main.jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { HelmetProvider } from "react-helmet-async";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
      <App />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
        draggable
        theme="colored"
        toastClassName={() =>
          "relative flex p-4 rounded-xl justify-between overflow-hidden cursor-pointer bg-gradient-to-r from-orange-400 to-pink-500 text-white shadow-lg"
        }
        bodyClassName={() => "text-sm font-medium flex items-center"}
        progressClassName={() => "bg-white"}
      />
    </HelmetProvider>
  </StrictMode>
);
