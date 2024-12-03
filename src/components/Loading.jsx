import { PiSpinnerGapDuotone } from "react-icons/pi";

const Loading = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="w-12 h-12 animate-spin dark:text-light text-dark text-6xl flex justify-center items-center align-middle">
        <PiSpinnerGapDuotone />
      </div>
    </div>
  );
};

export default Loading;
