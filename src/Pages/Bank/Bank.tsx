import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { GiMoneyStack } from "react-icons/gi";
import ToolsCard from "../../Components/ToolsCard";

function Bank() {
  return (
    <div className="font-VazirMedium">
      <div className="grid gap-8 md:grid-cols-2 lg:gap-12 p-6 md:p-10 mt-12 font-VazirMedium">
        <ToolsCard
          title="محاسبه سود سپرده بانکی"
          desc="سود سپرده بانکی خود را با این ابزار محاسبه کنید"
          to="interest"
          color="green"
          icon={<FaMoneyBillTrendUp size={35} />}
        />
        <ToolsCard
          title="محاسبه اقساط وام بانکی"
          desc=" سود سپرده بانکی خود را با این ابزار محاسبه کنید"
          to="loan"
          color="red"
          icon={<GiMoneyStack size={35} />}
        />
      </div>
    </div>
  );
}

export default Bank;
