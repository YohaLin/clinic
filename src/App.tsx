import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import "./styles/index.css";
import Appointment from "./pages/Appointment/Appointment";
import DefaultLayout from "./layouts/DefaultLayout";
import { useState } from "react";

function App() {
  const [showHamburgerModal, setShowHamburgerModal] = useState(false);

  return (
    <Routes>
      <Route
        path="/:lang/"
        element={
          <DefaultLayout
            stage="frontstage"
            isLogin={true}
            showHamburgerModal={showHamburgerModal}
            setShowHamburgerModal={setShowHamburgerModal}
          />
        }
      >
        <Route index element={<Home />} />
        <Route path="appointment" element={<Appointment />} />
      </Route>
    </Routes>
  );
}

export default App;
