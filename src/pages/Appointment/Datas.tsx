import { FormEvent, useState } from "react";
import AppointmentCardLayout from "../../layouts/AppointmentCardLayout";

const Datas = () => {
  const [treatmentType, setTreatmentType] = useState("general") 
  // 要製作 ref，並將這個函式傳到 Appointment 的 case 4，可以用redux，不要用傳的
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    console.log(e);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTreatmentType(e.target.value);
  };

  console.log(treatmentType);
  return (
    <AppointmentCardLayout
      style="w-full h-fit px-3 py-8 lg:w-[600px] lg:px-8"
      disabled={false}
      type="display"
    >
      <form
        className="flex flex-col gap-4"
        id="appointment"
        onSubmit={handleSubmit}
      >
        {/* 輸入格 */}
        <div className="flex flex-col gap-6">
          {/* 診療類型 */}
          <fieldset className="flex flex-col gap-3">
            <legend className="text-d4 font-semibold mb-3">診療類型</legend>
            <div className="flex gap-8">
              <div className="flex gap-3">
                <input
                  type="radio"
                  name="appointment"
                  value="general" 
                  onChange={handleChange}
                  defaultChecked
                />
                <label className="text-d2 md:text-d3 font-normal">
                  一般掛號
                </label>
              </div>

              <div className="flex gap-3">
                <input
                  type="radio"
                  name="appointment" 
                  onChange={handleChange}
                  value="first-time"
                />
                <label className="text-d2 md:text-d3 font-normal">
                  首次就診
                </label>
              </div>
            </div>
          </fieldset>

          <p className="text-red-400 text-d2 font-normal">
            ※初診掛號基本資料欄位，請務必全數填入，才可以進行掛號！
          </p>
          {/* 身分證字號或居留證號 */}
          <div className="flex flex-col gap-3">
            <label className="text-d4 font-semibold">
              身分證字號或居留證號
            </label>
            <input
              type="text"
              className="w-full h-14 px-[18px] py-4 border border-neutral-300 rounded-md shadow-neutral-2 text-d2 font-normal text-neutral-700"
              placeholder="身分證字號或居留證號"
              required
            />
          </div>

          {/* 出生日期 */}
          <div className="flex flex-col gap-3">
            <label className="text-d4 font-semibold">出生日期</label>
            <input
              type="date"
              className="w-full h-14 px-[18px] py-4 border border-neutral-300 rounded-md shadow-neutral-2 text-d2 font-normal text-neutral-700"
              placeholder="1911 / 01 /01"
              required
            />
          </div>

          {/* 姓名 */}
          {treatmentType === "first-time" && <div className="flex flex-col gap-3">
            <label className="text-d4 font-semibold">姓名</label>
            <input
              type="text"
              className="w-full h-14 px-[18px] py-4 border border-neutral-300 rounded-md shadow-neutral-2 text-d2 font-normal text-neutral-700"
              placeholder="陳星皓"
              required
            />
          </div>}

          {/* 聯絡電話 */}
          {treatmentType === "first-time" && <div className="flex flex-col gap-3">
            <label className="text-d4 font-semibold">聯絡電話</label>
            <input
              type="text"
              className="w-full h-14 px-[18px] py-4 border border-neutral-300 rounded-md shadow-neutral-2 text-d2 font-normal text-neutral-700"
              placeholder="09xx-xxxxxx"
              required
            />
          </div>}
        </div>

        {/* 同意條款 */}
        {treatmentType === "first-time" && <div className="flex flex-col gap-4">
          <label className="flex gap-3">
            <input
              type="checkbox"
              name="appointment"
              value="first-time"
              required
            />
            <p className="text-d2 md:text-d3 font-normal">我同意隱私權條款</p>
          </label>

          <p className="text-d2 font-normal md:text-d3">
            您的資料將會受到個人資料保護法之完整保護，且不會挪用於非掛號必要之其他目的。
          </p>
        </div>}
      </form>
    </AppointmentCardLayout>
  );
};

export default Datas;
