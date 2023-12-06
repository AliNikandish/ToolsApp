import { HiCalculator } from "react-icons/hi";
import ToolsCard from "../../Components/ToolsCard";

function Math() {
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:gap-12 p-6 md:p-10 mt-12 font-VazirMedium">
      <ToolsCard
        title="ماشین حساب"
        desc="وزن ایده آل خود را با این ابزار محاسبه کنید"
        to="calculator"
        color="rose"
        icon={<HiCalculator size={35} />}
      />
    </div>
  );
}

export default Math;
