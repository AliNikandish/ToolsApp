import {
  FaCalculator,
  FaMoneyCheckDollar,
  FaBookOpen,
  FaRegClock,
  FaUserDoctor,
  FaMedal,
} from "react-icons/fa6";

import CategoryCard from "../Components/CategoryCard";
import Heading from "../Components/Heading";

function Index() {
  return (
    <div className="container mx-auto flex justify-center font-VazirMedium">
      <section>
        <Heading title="لیست موضوعات" />
        <div className="mt-5 max-w-5xl mx-auto grid grid-cols-2  md:grid-cols-3  justify-center items-center gap-6  ">
          <CategoryCard
            color="red-500"
            Icon={<FaMedal size={30} />}
            category="کاربردی"
            count={2}
            to="practical"
          />
          <CategoryCard
            color="blue-500"
            Icon={<FaCalculator size={30} />}
            category="ریاضی"
            count={1}
            to="math"
          />
          <CategoryCard
            color="emerald-500"
            Icon={<FaBookOpen size={30} />}
            category="سرگرمی"
            count={2}
            to="hoobies"
          />
          <CategoryCard
            color="orange-500"
            Icon={<FaMoneyCheckDollar size={30} />}
            category="بانک"
            count={2}
            to="bank"
          />
          <CategoryCard
            color="pink-500"
            Icon={<FaRegClock size={30} />}
            category="زمان"
            count={2}
            to="time"
          />
          <CategoryCard
            color="purple-500"
            Icon={<FaUserDoctor size={30} />}
            category="سلامت"
            count={2}
            to="health"
          />
        </div>
      </section>
    </div>
  );
}

export default Index;
