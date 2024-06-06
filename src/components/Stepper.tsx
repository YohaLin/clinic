import clsx from "clsx";
import Step from "../constants/stepEnum";
import React, { Suspense } from "react";
import { useTranslation } from "react-i18next"; // entry point

const Stepper: React.FC<{ step: number }> = ({ step }) => {
  const { t } = useTranslation();

  const stepperList = [
    {
      step: Step.items,
      text: t("main.items"),
      value: "items",
    },
    {
      step: Step.doctors,
      text: t("main.doctors"),
      value: "doctors",
    },
    {
      step: Step.dates,
      text: t("main.dates"),
      value: "dates",
    },
    {
      step: Step.datas,
      text: t("main.datas"),
      value: "datas",
    },
    {
      step: Step.complete,
      text: t("main.complete"),
      value: "complete",
    },
  ];

  return (
    <Suspense fallback="...loading">
      <div className="relative flex justify-between w-full md:w-[600px]">
        {/* 底下的線 */}
        <div className="absolute top-6 md:top-[30px] w-full h-0.5 bg-neutral-400" />

        {/* 每個步驟 */}
        {stepperList.map((item) => (
          <div
            className="flex flex-col items-center gap-0.5 z-10"
            key={item.step}
          >
            <div
              className={clsx(
                "flex justify-center items-center w-12 h-12 md:w-[60px] md:h-[60px] rounded-full text-d6 md:text-d7",
                {
                  "bg-neutral-300 text-neutral-700": step !== item.step,
                  "bg-green-500 text-neutral-100": step === item.step,
                }
              )}
            >
              {item.step}
            </div>
            <p className="text-d3 md:text-d4 font-semibold">{item.text}</p>
          </div>
        ))}
      </div>
    </Suspense>
  );
};

export default Stepper;
