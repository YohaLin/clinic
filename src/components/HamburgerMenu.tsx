import React from "react";
import Header from "../layouts/Header";
import MenuList from "./MenuList";
import AuthButton from "./AuthButton";

const HamburgerMenu: React.FC<{
  showHamburgerModal: boolean;
  setShowHamburgerModal: (showHamburgerModal: boolean) => void;
}> = ({ showHamburgerModal, setShowHamburgerModal }) => {
  return (
    <div
      className="block md:hidden absolute z-20 w-full h-full bg-neutral-800/50"
      // TODO: 解決點擊白色地方不會關閉 modal 的問題
      // onClick={() => {
      //   setShowHamburgerModal(false);
      // }}
    >
      <div
        className="flex w-full h-fit bg-neutral-100"
      >
        {/* header */}
        <Header
          isLogin={false}
          stage="frontstage"
          showHamburgerModal={showHamburgerModal}
          setShowHamburgerModal={setShowHamburgerModal}
        />

        {/* list */}
        {/* AuthButton */}
        <div className="flex flex-col gap-6 p-6 mt-[54px]">
          <MenuList isHamburger={true} />
          <AuthButton isLogin={true} name="Yoha" isHamburger={true} />
        </div>
      </div>
    </div>
  );
};

export default HamburgerMenu;
