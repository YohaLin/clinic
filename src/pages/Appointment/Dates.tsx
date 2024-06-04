import {
  morningClinicList,
  afternoonClinicList,
  nightClinicList,
} from "../../constants/dummyData";
import AppointmentCardLayout from "../../layouts/AppointmentCardLayout";
import { DateType } from "../../types/appointment";
import clock from "../../../public/clock.svg";
import { useState } from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../../styles/react-datepicker.css";
import { customLocale } from "../../constants/customLocale";
import arrowRight from "../../assets/arrow-right.svg";
import clsx from "clsx";

registerLocale("zhTW-custom", customLocale);

const Dates = () => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div className="flex flex-col md:flex-row gap-12">
      {/* 可預約日期 */}
      <div className="flex flex-col gap-6 w-fit">
        <p className="text-d6 font-semibold">可預約日期</p>

        {/* calendar */}
        <DatePicker
          selected={startDate}
          onChange={(date) => date && setStartDate(date)}
          inline
          locale="zhTW-custom"
          className="date-picker"
        />

        {/* 備註 */}
        <div className="flex flex-col gap-6 text-d4 font-semibold">
          <div className="flex gap-4">
            <img src={clock} alt="clock" />
            <p>30min</p>
          </div>
          <div className="flex gap-4">
            <img src={clock} alt="clock" />
            <p>當日不可選</p>
          </div>
        </div>
      </div>

      {/* 可預約時段 */}
      <div className="flex flex-col gap-6">
        <p className="text-d6 font-semibold">可預約時段</p>

        {/* 一週 */}
        {/* TODO: 做成 list */}
        <div className="flex justify-between items-center w-full">
          <img src={arrowRight} alt="user" className="w-6 h-6 rotate-180" />
          <div className="flex flex-col gap-[14px] items-center">
            <span className={clsx("text-d3", "text-neutral-400")}>日</span>
            <span className={clsx("w-11 h-11 leading-[44px] text-center text-d6 font-semibold", "text-neutral-400")}>13</span>
          </div>
          <div className="flex flex-col gap-[14px] items-center">
            <span className="text-d3">一</span>
            <span className={clsx("w-11 h-11 leading-[44px] text-center text-d6 font-semibold", "border-b-4 border-green-500")}>14</span>
          </div>
          <div className="flex flex-col gap-[14px] items-center">
            <span className="text-d3">二</span>
            <span className="w-11 h-11 leading-[44px] text-center text-d6 font-semibold">15</span>
          </div>
          <div className="flex flex-col gap-[14px] items-center">
            <span className="text-d3">三</span>
            <span className={clsx("w-11 h-11 leading-[44px] text-center text-d6 font-semibold", "bg-green-500 rounded-full text-white")}>16</span>
          </div>
          <div className="flex flex-col gap-[14px] items-center">
            <span className="text-d3">四</span>
            <span className="w-11 h-11 leading-[44px] text-center text-d6 font-semibold">17</span>
          </div>
          <div className="flex flex-col gap-[14px] items-center">
            <span className="text-d3">五</span>
            <span className="w-11 h-11 leading-[44px] text-center text-d6 font-semibold">18</span>
          </div>
          <div className="flex flex-col gap-[14px] items-center">
            <span className={clsx("text-d3", "text-neutral-400")}>六</span>
            <span className={clsx("w-11 h-11 leading-[44px] text-center text-d6 font-semibold", "text-neutral-400")}>19</span>
          </div>
          <img src={arrowRight} alt="user" className="w-6 h-6" />
        </div>

        {/* 時段選項 */}
        <div className="w-full lg:w-[582px] flex h-fit gap-3 lg:gap-6">
          {/* 早診 */}
          <ClinicCard title="早上" clinicList={morningClinicList} />

          {/* 午診 */}
          <ClinicCard title="下午" clinicList={afternoonClinicList} />

          {/* 晚診 */}
          <ClinicCard title="晚上" clinicList={nightClinicList} />
        </div>
      </div>
    </div>
  );
};

const ClinicCard: React.FC<{ title: string; clinicList: DateType[] }> = ({
  title,
  clinicList,
}) => {
  return (
    <div className="flex flex-col gap-[22px] lg:gap-[20px] w-full h-fit">
      <p className="text-d3 lg:text-d4 text-center font-normal">{title}</p>
      <div className="flex flex-col gap-3 lg:gap-x-6 lg:gap-y-[10px]">
        {clinicList.map((item: DateType, index) => (
          <AppointmentCardLayout
            style="w-full lg:w-full h-13 lg:h-13 px-3 py-3"
            disabled={false}
            key={index}
          >
            <p>{item.time}</p>
          </AppointmentCardLayout>
        ))}
      </div>
    </div>
  );
};

export default Dates;
