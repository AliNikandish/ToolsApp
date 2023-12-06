import { useState } from "react";
import BankResultCard from "../../Components/BankResultCard";

function Interest() {
  const [details, setDetails] = useState<detailsType>(undefined!);
  const [showDetails, setShowDetails] = useState(false);
  const [form, setForm] = useState({
    deposite: "normal",
    amount: undefined!,
    days: undefined!,
    percent: undefined!,
  });

  const changeHandler = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    const name = e.target.name;
    const value = name === "deposite" ? e.target.value : Number(e.target.value);

    setForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const calculate = () => {
    if (!form.amount || !form.percent || !form.days) {
      alert("تمام فیلد ها رو پر کنید");
    } else if (form.deposite === "normal") {
      let dailyInterest = (form.amount * (form.percent / 100)) / 365;
      let monthlyInterest_30 = dailyInterest * 30;
      let monthlyInterest_31 = dailyInterest * 31;
      let yearlyInterest = form.amount * (form.percent / 100);
      let selectedDaysInterest = dailyInterest * form.days;

      setDetails({
        dailyInterest,
        monthlyInterest_30,
        monthlyInterest_31,
        yearlyInterest,
        selectedDaysInterest,
      });

      setShowDetails(true);
    }
  };

  return (
    <>
      <div className="flex flex-row items-center justify-center font-VazirMedium">
        <div>
          <div className="shadow-lg p-2 border rounded w-[375px] sm:w-[400px] mt-2">
            <div className="flex flex-col">
              <label className="text-sm mb-1 text-slate-600" htmlFor="">
                انتخاب نوع محاسبه:
              </label>
              <select
                className="p-1 rounded-md bg-slate-600 text-slate-200"
                value={form.deposite}
                onChange={(event) => changeHandler(event)}
                name="deposite"
              >
                <option id="" value="normal">
                  محسابه سود سپرده
                </option>
              </select>
            </div>
            {form.deposite === "normal" && (
              <>
                <div className="flex flex-col">
                  <label className="text-sm mb-1 text-slate-600" htmlFor="">
                    مبلغ سپرده (تومان):
                  </label>
                  <input
                    className="p-1 rounded-md bg-slate-600  text-slate-200"
                    value={form.amount}
                    name="amount"
                    onChange={(event) => changeHandler(event)}
                    placeholder="50,000,000"
                  />
                </div>

                <div className="flex flex-col">
                  <label className="text-sm mb-1 text-slate-600" htmlFor="">
                    درصد سود سالانه (%):
                  </label>
                  <input
                    className="p-1 rounded-md bg-slate-600  text-slate-200"
                    value={form.percent}
                    name="percent"
                    onChange={(event) => changeHandler(event)}
                    placeholder="18"
                  />
                </div>

                <div className="flex flex-col">
                  <label className="text-sm mb-1 text-slate-600" htmlFor="">
                    تعداد روز:
                  </label>
                  <input
                    className="p-1 rounded-md bg-slate-600  text-slate-200"
                    value={form.days}
                    name="days"
                    onChange={(event) => {
                      changeHandler(event);
                      setShowDetails(false);
                    }}
                    placeholder="48"
                  />
                </div>

                <div className="mt-2 text-center">
                  <button
                    className="p-1 bg-blue-500 text-slate-100 rounded"
                    onClick={calculate}
                  >
                    محسابه
                  </button>
                </div>
              </>
            )}
          </div>

          {details && showDetails && (
            <>
              <BankResultCard>
                <div>
                  <p>
                    {" "}
                    سود روزانه:{" "}
                    {Math.floor(details.dailyInterest).toLocaleString()} تومان
                  </p>
                </div>

                {form.days != 30 && (
                  <>
                    <div>
                      <p>
                        سود ماهانه (درصورت 30 روز بودن ماه):
                        {Math.floor(
                          details.monthlyInterest_30
                        ).toLocaleString()}{" "}
                        تومان
                      </p>
                    </div>
                  </>
                )}

                {form.days != 31 && (
                  <>
                    <div>
                      <p>
                        سود ماهانه (درصورت 31 روز بودن ماه):
                        {Math.floor(
                          details.monthlyInterest_31
                        ).toLocaleString()}{" "}
                        تومان
                      </p>
                    </div>
                  </>
                )}

                <div>
                  <p>
                    {" "}
                    سود روز انتخابی شما ({form.days} روز):{" "}
                    {Math.floor(details.selectedDaysInterest).toLocaleString()}{" "}
                    تومان
                  </p>
                </div>
                {form.days != 365 && (
                  <>
                    <div>
                      <p>
                        سود سالانه(365روز):{" "}
                        {Math.floor(details.yearlyInterest).toLocaleString()}{" "}
                        تومان
                      </p>
                    </div>
                  </>
                )}
              </BankResultCard>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Interest;
