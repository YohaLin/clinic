import clsx from "clsx";

// 步驟按鈕、查詢掛號、取消預約、登入註冊的按鈕都是這款
const ProgressButton: React.FC<{
  style: string;
  text: string;
  onClick: () => void;
}> = ({ style, text, onClick }) => {
  return (
    <button 
      className={clsx("w-full md:w-fit h-fit px-[22px] py-3 text-d3 font-semibold rounded-md", style)}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default ProgressButton;
