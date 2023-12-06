import { FaWeight } from "react-icons/fa";
import { IoFastFood } from "react-icons/io5";
import ToolsCard from '../../Components/ToolsCard';

function Health() {
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:gap-12 p-6 md:p-10 mt-12 font-VazirMedium">
      <ToolsCard title='محاسبه BMI' desc='وزن ایده آل خود را با این ابزار محاسبه کنید' to='bmi'color='blue' icon={ <FaWeight size={35} />} />
      <ToolsCard title='محاسبه BMR' desc='کالری روزانه مورد نیاز خود را با این ابزار محاسبه کنید' to='bmr'color='orange' icon={<IoFastFood size={35} />}/>
    </div>
  );
}

export default Health