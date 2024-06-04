import { doctorList } from "../../constants/dummyData";
import AppointmentCardLayout from "../../layouts/AppointmentCardLayout";
import { DoctorType } from "../../types/appointment";

const Doctors = () => {
  return (
    <div className="w-full lg:w-[996px] flex flex-wrap flex-col justify-between lg:flex-row h-full gap-[21px] lg:gap-y-6">
      {doctorList.map((item: DoctorType, index) => (
        <AppointmentCardLayout
          style="w-full lg:w-[308px] h-[152px] lg:h-[152px] px-5 pt-2 pb-4"
          disabled={false}
          key={index}
        >
          <div className="flex flex-col gap-2">
            <div className="flex items-center w-full">
              <img src={item.image} alt={item.name} />
              <p className="flex-1 h-fit text-d5 text-center">
                {item.name} 醫師
              </p>
            </div>
            <p className="text-d2 text-left font-normal">{item.description}</p>
          </div>
        </AppointmentCardLayout>
      ))}
    </div>
  );
};

export default Doctors;
