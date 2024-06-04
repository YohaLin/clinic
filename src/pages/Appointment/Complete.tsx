import Lottie from "react-lottie";
import AppointmentCardLayout from "../../layouts/AppointmentCardLayout";
import success from "../../lotties/success.json";
import { useMemo } from "react";

const Complete = () => {
  const defaultOptions = {
    loop: false,
    animationData: success,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  // TODO: 之後要加入 API 給的資料
  const completeList = useMemo(() => {
    return [
      {
        title: "病患姓名",
        content: "劉小萍",
      },
      {
        title: "醫師姓名",
        content: `${"陳星浩"} 醫師`,
      },
      {
        title: "預約日期",
        content: "2023/12/14 (四) 下午診 16:30",
      },
      {
        title: "治療項目",
        content: "植牙治療",
      },
      {
        title: "預約序號",
        content: "057",
      },
    ];
  }, []);

  return (
    <div className="flex flex-col gap-4 md:gap-6">
      {/* 預約成功、失敗訊息 */}
      <div className="flex gap-4 w-fit mx-auto">
        {/* <img src={success} alt="success" /> */}
        <Lottie options={defaultOptions} height={36} width={36} />
        <p className="text-d7 text-green-500 font-semibold">預約成功</p>
      </div>

      <AppointmentCardLayout
        style="w-full h-fit px-3 py-8 md:px-8 focus:ring-0 focus:bg-white active:ring-0 active:bg-white hover:bg-white cursor-default"
        disabled={false}
      >
        <div className="flex flex-col gap-6 border-black">
          {completeList.map((item, index) => {
            return (
              <div
                className="flex flex-col gap-2 md:flex-row md:gap-3 text-left"
                key={index}
              >
                <span className="text-d5 font-semibold">{`${item.title}：`}</span>
                <span className="text-d5 font-normal">{item.content}</span>
              </div>
            );
          })}
        </div>
      </AppointmentCardLayout>
    </div>
  );
};

export default Complete;
