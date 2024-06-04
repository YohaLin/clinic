import React from "react";
import user from "../assets/user.svg";
import clsx from "clsx";

const AuthButton: React.FC<{ isLogin: boolean; name: string; isHamburger?:boolean }> = ({
  isLogin,
  name,
  isHamburger
}) => {
  return (
    <button
      className={clsx(
        "md:flex justify-center items-center px-[18px] py-2.5 border border-neutral-400 rounded-md bg-neutral-200",{
          "hidden": !isHamburger,
          "flex": isHamburger
        }
      )}
    >
      {isLogin ? (
        <>
          <img src={user} alt="user" className="w-3 h-3" />
          <p className="text-[14px]">{name}</p>
        </>
      ) : (
        <p className="text-d2">登入</p>
      )}
    </button>
  );
};

export default AuthButton;
