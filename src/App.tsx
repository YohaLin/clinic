import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import "./styles/index.css";
import Appointment from "./pages/Appointment/Appointment";
import DefaultLayout from "./layouts/DefaultLayout";
import { useEffect, useState } from "react";

function App() {
  const [showHamburgerModal, setShowHamburgerModal] = useState(false);
  const navigate = useNavigate();

  // "/" 直接取代成 "/zh-TW/"
  useEffect(() => {
    if (window.location.pathname === "/") {
      navigate("/zh-TW/", { replace: true });
    }
  }, [navigate]);

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
