import { RxColorWheel } from "react-icons/rx";
import { LiaLaughBeam } from "react-icons/lia";
import ToolsCard from '../../Components/ToolsCard';

function Hoobies() {
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:gap-12 p-6 md:p-10 mt-12 font-VazirMedium">
      <ToolsCard title='گردونه شانس' desc='شانس خود را با این ابزار محاسبه کنید' to='luckywheels'color='emerald' icon={ <RxColorWheel size={35} />} />
      <ToolsCard title='میم های برتر' desc='100 میم برتر این هفته ی سایت imgflip'  to='meme'color='cyan' icon={ <LiaLaughBeam size={35} />} />
    </div>
  );
}

export default Hoobies