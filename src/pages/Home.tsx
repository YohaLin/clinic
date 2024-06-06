import { Link, useParams } from "react-router-dom";
import logo from "../assets/logo.svg";

const Home = () => {
  const { lang } = useParams();

  return (
      <div className="relative h-screen w-screen">
        {/* 開始掛號字樣 */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center gap-12 w-screen">
          <div className="flex flex-col justify-center items-center gap-6">
            <img className="w-20 h-20" src={logo} alt="logo" />
            <div className="flex flex-col justify-center items-center gap-2 lg:gap-4">
              <p className="text-blue-400 text-d8 lg:text-d9 lg:font-extrabold">
                牙科預約系統
              </p>
              <p className="text-blue-400 text-d4 lg:text-d6">
                Dental Appointment System
              </p>
            </div>
          </div>

          <Link
            className="flex justify-center items-center px-[18px] py-2.5 rounded-md bg-blue-100 text-blue-500 text-d3"
            to={`/${lang}/appointment`}
          >
            開始掛號
          </Link>
        </div>

        {/* 右下的 logo */}
        <img
          className="absolute bottom-3 right-3 w-[120px] h-[120px] opacity-20 md:w-[240px] md:h-[240px] md:bottom-[69px] md:right-[58px]"
          src={logo}
          alt="logo"
        />
      </div>
  );
};

export default Home;
