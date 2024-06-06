import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import HamburgerMenu from "../components/HamburgerMenu";

const DefaultLayout: React.FC<{
  stage: "frontstage" | "backstage";
  isLogin: boolean;
  showHamburgerModal: boolean;
  setShowHamburgerModal: (showHamburgerModal: boolean) => void;
}> = ({
  stage,
  isLogin,
  showHamburgerModal,
  setShowHamburgerModal,
}) => {
  
  return (
    <div className="relative w-full h-full min-h-screen bg-home-background bg-center bg-cover">
      {showHamburgerModal && (
        <HamburgerMenu
          showHamburgerModal={showHamburgerModal}
          setShowHamburgerModal={setShowHamburgerModal}
        />
      )}
      <Header
        stage={stage}
        isLogin={isLogin}
        showHamburgerModal={showHamburgerModal}
        setShowHamburgerModal={setShowHamburgerModal}
      />
      
      <div className="">
        <Outlet /> {/* 取代 children */}
      </div>
      <Footer />
    </div>
  );
};

export default DefaultLayout;
