import AppointmentLayout from "../../layouts/AppointmentLayout";
import Items from "./Items";
import Doctors from "./Doctors";
import Dates from "./Dates";
import Datas from "./Datas";
import Complete from "./Complete";
import { useDispatch, useSelector } from "react-redux";
import {
  nextStepAction,
  lastStepAction,
  getStepAction,
} from "../../store/features/step/stepSlice";
import { StepType } from "../../types/step";
import ProgressButton from "../../components/ProgressButton";
import clsx from "clsx";
import Step from "../../constants/stepEnum";

const Appointment = () => {
  // useSelector 用來取得 state 中的值
  const step = useSelector((state: StepType) => state.step.value);
  const dispatch = useDispatch();

  // 處理「下一步」的邏輯
  const handleNext = () => {
    switch (step) {
      case 1:
        // 放 fetch
        // console.log("to 2");
        dispatch(nextStepAction());
        break;
      case 2:
        // 放 fetch
        // console.log("to 3");
        dispatch(nextStepAction());
        break;
      case 3:
        // 放 fetch
        // console.log("to 4");
        dispatch(nextStepAction());
        break;
      case 4:
        // 放 fetch
        // console.log("to 5");
        dispatch(nextStepAction());
        break;
      case 5:
        // 放 fetch
        // console.log("complete");
        // 先跳回第一步，之後再改
        dispatch(getStepAction(Step.items));
        break;
      default:
        break;
    }
  };

  // 處理「上一步」的邏輯
  const handleLast = () => {
    dispatch(lastStepAction());
  };

  return (
      <AppointmentLayout title="我要掛號" type="appointment" step={step}>
        <div className="flex flex-col w-full h-fit">
          {step === Step.items && <Items />}
          {step === Step.doctors && <Doctors />}
          {step === Step.dates && <Dates />}
          {step === Step.datas && <Datas />}
          {step === Step.complete && <Complete />}
        </div>

        <div
          className={clsx("flex w-full gap-3", {
            "justify-end": step === Step.items,
            "justify-center": step === Step.complete,
            "justify-between": step !== Step.items && step !== Step.complete,
          })}
        >
          {step !== Step.items && step !== Step.complete && (
            <ProgressButton
              style="bg-neutral-100 border border-neutral-400"
              text="返回"
              onClick={handleLast}
            />
          )}
          <ProgressButton
            style={clsx("bg-green-500 text-white shadow-neutral-2", {
              "sm:w-fit": step === Step.complete,
            })}
            text={
              step === Step.datas
                ? "確定掛號"
                : step === Step.complete
                  ? "完成掛號"
                  : "下一步"
            }
            onClick={handleNext}
          />
        </div>
      </AppointmentLayout>
  );
};

export default Appointment;
