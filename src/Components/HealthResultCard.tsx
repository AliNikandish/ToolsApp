const HealthResultCard = ({ children }: childrenProp) => {
  return (
    <div className="mt-5 shadow rounded bg-blue-900 text-slate-100 p-2 w-[375px] sm:w-[400px] ">
      {children}
    </div>
  );
};

export default HealthResultCard;
