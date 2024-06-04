import React, { ReactNode } from "react";
import Stepper from "../components/Stepper";

const AppointmentLayout: React.FC<{
  children: ReactNode;
  title: string
  type: string
  step: number
}> = ({ children, title, type, step }) => {

  return (
    <div className="w-full h-fit pt-16 pb-20 md:pb-12">
      <div className="flex flex-col items-center gap-10 w-screen md:w-fit mx-auto px-3 py-12 md:px-0">
        <p className="text-d6 md:text-d7 font-extrabold">{title}</p>

        {type === "appointment" && <Stepper step={step}/>}

        {children}
        </div>
    </div>
  );
};

export default AppointmentLayout;
