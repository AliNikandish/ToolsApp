import { Link } from "react-router-dom";

function CategoryCard({ color, Icon, category, count, to }: CategoryCard) {
  return (
    <div className="flex flex-col items-center gap-3 px-4 py-6 bg-white rounded-xl shadow-main font-VazirMedium w-[180px] h-[200px]">
      <span className={`text-${color}`}>{Icon}</span>
      <p className="text-2xl font-extrabold text-gray-900">{category}</p>
      <p className="text-base leading-7 text-gray-500">{count} ابزار</p>
      <Link className={`text-lg font-bold text-${color}`} to={to}>
        ورود
      </Link>
    </div>
  );
}

export default CategoryCard;
