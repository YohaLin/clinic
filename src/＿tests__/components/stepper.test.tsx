import Step from "../../constants/stepEnum";

// 模擬的 stepperList 數據
const mockStepperList = [
  {
    step: Step.items,
    text: "選項目",
    value: "items"
  },
  {
    step: Step.doctors,
    text: "選醫師",
    value: "doctors"
  },
  {
    step: Step.dates,
    text: "選日期",
    value: "dates"
  },
  {
    step: Step.datas,
    text: "填資料",
    value: "datas"
  },
  {
    step: Step.complete,
    text: "完成",
    value: "complete"
  },
];

import { render, screen } from "@testing-library/react";
import Stepper from "../../components/Stepper";
import "@testing-library/jest-dom";

// 覆寫原本引用的常量
// 確保了當 Stepper 組件在測試中引用這組數據，使用的是模擬數據，而不是實際的生產數據。
jest.mock("../../constants/dummyData", () => ({
  stepperList: mockStepperList,
}));

describe("Stepper Component", () => {
  test("Render active and non-active steps with correct text and style", () => {
    const activeStep = 2;
    render(<Stepper step={activeStep} />);

    // 檢查所有步驟是否都被渲染
    mockStepperList.forEach((item) => {
      const stepElement = screen.getByText(item.text);
      expect(stepElement).toBeInTheDocument();

      const parentDiv = stepElement.previousSibling
      expect(parentDiv).toHaveClass(
        activeStep === item.step
          ? "bg-green-500 text-neutral-100"
          : "bg-neutral-300 text-neutral-700"
      );
    });
  });
});
