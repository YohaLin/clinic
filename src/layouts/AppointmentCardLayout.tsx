import clsx from "clsx";
import React, { ReactNode } from "react";

const AppointmentCardLayout: React.FC<{
  style: string;
  children: ReactNode;
  disabled: boolean;
  type?: "choose" | "display";
}> = ({ style, disabled, children, type = "choose" }) => {
  return (
    <>
      {type === "choose" ? (
        // 卡片為 button
        <button
          disabled={disabled}
          className={clsx(
            style,
            "ring-1 ring-inset ring-neutral-400 rounded-lg bg-white shadow-neutral-2",
            "hover:border-none hover:bg-green-100",
            "focus:ring-inset focus:ring-[3px] focus:ring-green-500 focus:bg-green-100",
            "active:ring-[3px] active:ring-green-500 active:bg-green-100",
            "disabled:bg-neutral-200 disabled:opacity-40"
          )}
        >
          {children}
        </button>
      ) : (
        // 卡片為 div
        <div
          className={clsx(
            style,
            "ring-1 ring-inset ring-neutral-400 rounded-lg bg-white shadow-neutral-2"
          )}
        >
          {children}
        </div>
      )}
    </>
  );
};

export default AppointmentCardLayout;
