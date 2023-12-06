import { FaStopwatch20 } from "react-icons/fa";
import { RxLapTimer } from "react-icons/rx";
import ToolsCard from "../../Components/ToolsCard";

function Time() {
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:gap-12 p-6 md:p-10 mt-12 font-VazirMedium">
      <ToolsCard
        title="تایمر"
        desc="اگر نیاز به تنظیم کردن زمان خود دارید از این ابزار استفاده کنید"
        to="timer"
        color="pink"
        icon={<RxLapTimer size={35} />}
      />
      <ToolsCard
        title="کرونومتر"
        desc="با این ابزار زمان سپری شده را محاسبه کنید"
        to="stopwatch"
        color="cyan"
        icon={<FaStopwatch20 size={35} />}
      />
    </div>
  );
}

export default Time;
