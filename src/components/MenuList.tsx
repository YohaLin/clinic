import clsx from "clsx";
import React from "react";

const MenuList: React.FC<{ isHamburger: boolean }> = ({ isHamburger }) => {
  return (
    <ul
      className={clsx("md:flex flex-1 gap-6 w-full pr-6", {
        "hidden justify-end": !isHamburger,
        "flex flex-col": isHamburger,
      })}
    >
      <li className="text-d3">我要掛號</li>
      <li className="text-d3">掛號紀錄</li>
      <li className="text-d3">看診進度</li>
    </ul>
  );
};

export default MenuList;
