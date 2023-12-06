import { MdNotListedLocation } from "react-icons/md";
import { MdPassword } from "react-icons/md";
import ToolsCard from "../../Components/ToolsCard";

function Practical() {
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:gap-12 p-6 md:p-10 mt-12 font-VazirMedium">
      <ToolsCard
        title="پیدا کردن IP"
        desc=" با این ابزار IP خود را پیدا کنید"
        to="ip"
        color="sky"
        icon={<MdNotListedLocation size={35} />}
      />
      <ToolsCard
        title="ساخت پسوورد"
        desc="با این ابزار یک پسوورد قوی و مطمئن بسازید"
        to="passwordgenerator"
        color="rose"
        icon={<MdPassword size={35} />}
      />
    </div>
  );
}

export default Practical;
