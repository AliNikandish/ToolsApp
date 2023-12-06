import { Link } from "react-router-dom";

const ToolsCard = ({ color, title, desc, to, icon }: ToolsCard) => {
  return (
    <Link
      to={to}
      className="flex flex-col p-6 space-y-6 gap-x-2 transition-all duration-500 bg-white border border-indigo-100 rounded-lg shadow hover:shadow-xl lg:p-8 lg:flex-row lg:space-y-0 lg:space-x-6"
    >
      <div
        className={`flex items-center justify-center w-16 h-16 bg-${color}-100 border border-${color}-200 rounded-full shadow-inner lg:h-20 lg:w-20`}
      >
        <div className={`text-${color}-500 flex items-center justify-center`}>
          {icon}
        </div>
      </div>
      <div className="flex-1">
        <h5 className="mb-3 text-xl font-bold lg:text-2xl">{title}</h5>
        <p className="mb-6 text-lg text-gray-600">{desc}</p>
        <span
          className={`flex items-baseline text-lg font-bold text-${color}-500`}
        >
          رفتن به ابزار
        </span>
      </div>

      {/* This is just for render style Tailwind Don't Remove  */}
      {/* <div
        className="

          bg-green-500  text-green-500 bg-green-100 border-green-200
          bg-red-500  text-red-500 bg-red-100 border-red-200
          bg-blue-500  text-blue-500 bg-blue-100 border-blue-200
          bg-orange-500  text-orange-500 bg-orange-100 border-orange-200
          bg-cyan-500  text-cyan-500 bg-cyan-100 border-cyan-200
          bg-emerald-500  text-emerald-500 bg-emerald-100 border-emerald-200
          bg-rose-500  text-rose-500 bg-rose-100 border-rose-200
          bg-sky-500  text-sky-500 bg-sky-100 border-sky-200
          bg-pink-500  text-pink-500 bg-pink-100 border-pink-200
          bg-purple-500  text-purple-500 bg-purple-100 border-purple-200

          
          "
      ></div> */}
    </Link>
  );
};

export default ToolsCard;
