import { useState } from "react";
import BankResultCard from "../../Components/BankResultCard";

function Loan() {
  const [loan, setLoan] = useState<string>("normal");
  const [amount, setAmount] = useState<number>(undefined!);

  const [percent, setPercent] = useState<number>(undefined!);
  const [installmentsCount, setInstallmentCount] = useState<number>(undefined!);
  const [normalDetails, setNormalDetails] = useState<normalDetails>(undefined!);

  const [wagePercent, setWagePercent] = useState<number>(undefined!);
  const [year, setYear] = useState<number>(undefined!);
  const [gharzDetails, setGharzDetails] = useState<ghrsazDetails>(undefined!);

  const amountHandler = (value: number) => {
    setAmount(value);
  };

  const calculate = () => {
    if (loan === "normal") {
      if (!amount || !percent || !installmentsCount) {
        alert("تمام فیلد ها رو پر کنید");
      } else {
        let eachInstallment =
          (amount *
            (percent / 1200) *
            (1 + percent / 1200) ** installmentsCount) /
          ((1 + percent / 1200) ** installmentsCount - 1);
        let interest = 36 * eachInstallment - amount;
        let totallAmount = amount + interest;
        setNormalDetails({ eachInstallment, interest, totallAmount });
      }
    }

    if (loan === "gharz-al-hasane") {
      if (!amount || !wagePercent || !year) {
        alert("تمام فیلد ها رو پر کنید");
      } else {
        let normallInstallmentCount = year * 12 - year;
        let eachInstallment = amount / normallInstallmentCount;
        let wageList = [];
        let loanBalance = amount;
        for (let i = 1; i <= year; i++) {
          const wage = (loanBalance * wagePercent * 12) / (100 * 12);
          loanBalance = loanBalance - eachInstallment * 11;
          wageList.push(wage);
        }

        let totallAmount = amount;

        wageList.forEach((wage) => {
          totallAmount += wage;
        });

        let wageAmount = totallAmount - amount;

        setGharzDetails({
          totallAmount,
          wageAmount,
          eachInstallment,
          wageList,
        });
      }
    }
  };

  const changeType = (type: string) => {
    setLoan(type);
    if (type === "gharz-al-hasane") {
      setNormalDetails(undefined!);
    } else if (type === "normal") {
      setGharzDetails(undefined!);
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
                className="p-1 rounded-md bg-slate-600  text-slate-200"
                value={loan}
                onChange={(event) => changeType(event.target.value)}
              >
                <option id="" value="normal">
                  محسابه مبلغ قسط وام
                </option>
                <option id="" value="gharz-al-hasane">
                  قرض الحسنه (ازدواج و ...)
                </option>
              </select>
            </div>
            {loan === "normal" && (
              <>
                <div className="flex flex-col">
                  <label className="text-sm mb-1 text-slate-600" htmlFor="">
                    مبلغ وام (تومان):
                  </label>
                  <input
                    className="p-1 rounded-md bg-slate-600  text-slate-200"
                    value={amount}
                    onChange={(event) =>
                      amountHandler(Number(event.target.value))
                    }
                    placeholder="50,000,000"
                  />
                </div>

                <div className="flex flex-col">
                  <label className="text-sm mb-1 text-slate-600" htmlFor="">
                    درصد سود سالانه (%):
                  </label>
                  <input
                    className="p-1 rounded-md bg-slate-600  text-slate-200"
                    value={percent}
                    onChange={(event) => setPercent(Number(event.target.value))}
                    placeholder="18"
                  />
                </div>

                <div className="flex flex-col">
                  <label className="text-sm mb-1 text-slate-600" htmlFor="">
                    تعداد اقساط وام:
                  </label>
                  <input
                    className="p-1 rounded-md bg-slate-600  text-slate-200"
                    value={installmentsCount}
                    onChange={(event) =>
                      setInstallmentCount(Number(event.target.value))
                    }
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

            {loan === "gharz-al-hasane" && (
              <>
                <div className="flex flex-col">
                  <label className="text-sm mb-1 text-slate-600" htmlFor="">
                    مبلغ وام (تومان):
                  </label>
                  <input
                    className="p-1 rounded-md bg-slate-600  text-slate-200"
                    value={amount}
                    onChange={(event) =>
                      amountHandler(Number(event.target.value))
                    }
                    placeholder="50,000,000"
                  />
                </div>

                <div className="flex flex-col">
                  <label className="text-sm mb-1 text-slate-600" htmlFor="">
                    {" "}
                    درصد کارمزد وام (%):
                  </label>
                  <input
                    className="p-1 rounded-md bg-slate-600  text-slate-200"
                    value={wagePercent}
                    onChange={(event) =>
                      setWagePercent(Number(event.target.value))
                    }
                    placeholder="4"
                  />
                </div>

                <div className="flex flex-col">
                  <label className="text-sm mb-1 text-slate-600" htmlFor="">
                    {" "}
                    مدت بازپرداخت (سال):
                  </label>
                  <input
                    className="p-1 rounded-md bg-slate-600  text-slate-200"
                    value={year}
                    onChange={(event) => setYear(Number(event.target.value))}
                    placeholder="5"
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

          {gharzDetails && (
            <>
              <BankResultCard>
                <div>
                  <p>
                    کل مبلغ وام :
                    {Math.floor(gharzDetails.totallAmount).toLocaleString()}{" "}
                    تومان
                  </p>
                </div>
                <div>
                  <p>
                    کارمزد کلی وام :
                    {Math.floor(gharzDetails.wageAmount).toLocaleString()} تومان
                  </p>
                </div>
                <div>
                  <p>
                    مبلغ هر قسط :
                    {Math.floor(gharzDetails.eachInstallment).toLocaleString()}{" "}
                    تومان
                  </p>
                </div>
                <div>
                  {gharzDetails.wageList.map((wage: any, index: any) => {
                    return (
                      <p>
                        کارمزد قسط({index * 12 + 1}):
                        {Math.floor(wage).toLocaleString()} تومان
                      </p>
                    );
                  })}
                </div>
              </BankResultCard>
            </>
          )}

          {normalDetails && (
            <>
              <BankResultCard>
                <div>
                  <p>
                    مبلغ هر قسط: :
                    {Math.floor(normalDetails.eachInstallment).toLocaleString()}{" "}
                    تومان
                  </p>
                </div>
                <div>
                  <p>
                    سود کل وام:
                    {Math.floor(normalDetails.interest).toLocaleString()} تومان
                  </p>
                </div>
                <div>
                  <p>
                    جمع کل اقساط:{" "}
                    {Math.floor(normalDetails.totallAmount).toLocaleString()}{" "}
                    تومان
                  </p>
                </div>
              </BankResultCard>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Loan;
