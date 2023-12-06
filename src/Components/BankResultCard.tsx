const BankResultCard = ({ children }: childrenProp) => {
  return (
    <div className="mt-5 shadow rounded bg-slate-600 text-slate-100 p-2 w-[375px] sm:w-[400px] text-sm sm:text-base">
      {children}
    </div>
  );
};

export default BankResultCard;
