import React from "react";
import logo from "../assets/logo.svg";
import hamburger from "../assets/hamburger.svg";
import bell from "../assets/bell.svg";
import clsx from "clsx";
import AuthButton from "../components/AuthButton";
import MenuList from "../components/MenuList";
import { Link } from "react-router-dom";

const Header: React.FC<{
  stage: "frontstage" | "backstage";
  isLogin: boolean;
  showHamburgerModal: boolean;
  setShowHamburgerModal: (showHamburgerModal: boolean) => void;
}> = ({ stage, isLogin, showHamburgerModal, setShowHamburgerModal }) => {
  return (
    <div
      className={clsx("fixed z-50 top-0 left-0 w-full h-fit backdrop-blur-sm", {
        "bg-neutral-400": stage === "backstage"
      })}
    >
      <div className="flex items-center justify-between w-full h-[54px] md:h-16 lg:max-w-[1200px] mx-auto px-2.5 lg:px-3">
        {/* logo */}
        <Link className="flex items-center gap-2 px-2 lg:gap-[10px] lg:px-2.5" to="/">
          <img
            src={logo}
            alt="logo"
            className="w-[34px] h-[34px] lg:w-10 lg:h-10"
          />
          <p className="text-blue-500 text-d6 lg:text-d5">牙科預約系統</p>
        </Link>

        {/* frontstage: list */}
        {/* backstage: text + bell */}
        {stage === "frontstage" && <MenuList isHamburger={false} />}

        {stage === "backstage" && (
          <div className="hidden lg:flex flex-1 justify-between w-full pr-6">
            <p className="text-d6">後台管理系統</p>
            <img src={bell} alt="bell" />
          </div>
        )}

        {/* auth btn */}
        <AuthButton isLogin={isLogin} name="劉小萍" />

        {/* hamburger */}
        <img
          src={hamburger}
          alt="hamburger"
          className="w-5 h-5 md:hidden hover:cursor-pointer"
          onClick={() => {
            setShowHamburgerModal(showHamburgerModal ? false : true);
          }}
        />
      </div>
    </div>
  );
};

export default Header;
