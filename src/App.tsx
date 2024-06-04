import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import "./styles/index.css";
import { useState } from "react";
import DefaultLayout from "./layouts/DefaultLayout";
import Appointment from "./pages/Appointment/Appointment";

function App() {
  const [showHamburgerModal, setShowHamburgerModal] = useState(false);

  return (
    <DefaultLayout
        stage="frontstage"
        isLogin={true}
        showHamburgerModal={showHamburgerModal}
        setShowHamburgerModal={setShowHamburgerModal}
      >
      <Routes>
        <Route
          path="/"
          element={
            <Home />
          }
        />
        <Route
          path="/appointment"
          element={
            <Appointment />
          }
        />
      </Routes>
    </DefaultLayout>
  );
}

export default App;
