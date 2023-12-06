import { useState } from "react";
import { IoFastFoodOutline } from "react-icons/io5";
import HealthResultCard from "../../Components/HealthResultCard";

function BMR() {
  const [weight, SetWeight] = useState<number>(0);
  const [height, SetHeight] = useState<number>(0);
  const [age, setAge] = useState<number>(0);
  const [gender, setGender] = useState<string>("man");
  const [showDetails, setShowDetails] = useState<boolean>(false);
  const [activity, setActivity] = useState<number>(1);
  const [calloriesNeed, setCalloriesNeed] = useState<number | undefined>(0);

  const calculateHandler = () => {
    if (!weight || !height || !age) {
      alert("تمام فیلد ها رو پر کنید");
    } else {
      let bmr;
      let callories;
      if (gender === "woman") {
        bmr = 655 + 9.6 * weight + 1.8 * height + 4.7 * age;

        if (activity === 1) {
          callories = bmr * 1.2;
        }

        if (activity === 2) {
          callories = bmr * 1.375;
        }

        if (activity === 3) {
          callories = bmr * 1.55;
        }

        if (activity === 4) {
          callories = bmr * 1.725;
        }

        if (activity === 5) {
          callories = bmr * 1.9;
        }
      }

      if (gender === "man") {
        bmr = 66 + 13.7 * weight + 5 * height + 6.8 * age;

        if (activity === 1) {
          callories = bmr * 1.2;
        }

        if (activity === 2) {
          callories = bmr * 1.375;
        }

        if (activity === 3) {
          callories = bmr * 1.55;
        }

        if (activity === 4) {
          callories = bmr * 1.725;
        }

        if (activity === 5) {
          callories = bmr * 1.9;
        }
      }

      setCalloriesNeed(callories);
      setShowDetails(true);
    }
  };

  return (
    <>
      <div className=" flex justify-center items-center mt-5 font-VazirMedium">
        <div className="w-[375px] sm:w-[400px] h-[240px] bg-blue-500 flex flex-col items-center px-3 py-3 shadow-md rounded">
          <div className="flex justify-between w-[300px]">
            <label className="w-1/12 text-slate-100 ml-1" htmlFor="regular">
              وزن:
            </label>
            <input
              className="rounded bg-slate-100 text-slate-700 outline-none px-1"
              value={weight}
              onChange={(event: any) => {
                SetWeight(Number(event.target.value));
                setShowDetails(false);
              }}
            />
            <span className="w-1/4 text-slate-100 pr-1">کیلوگرم</span>
          </div>

          <div className="mt-3 flex justify-between w-[300px]">
            <label className="w-1/12 text-slate-100 ml-1" htmlFor="regular">
              قد:
            </label>
            <input
              className="rounded bg-slate-100 text-slate-700 outline-none px-1"
              value={height}
              onChange={(event: any) => {
                SetHeight(Number(event.target.value));
                setShowDetails(false);
              }}
            />
            <span className="w-1/4 text-slate-100 pr-1">سانتی متر</span>
          </div>
          <div className="mt-3 flex justify-between w-[300px]">
            <label className="w-1/12 text-slate-100 ml-1" htmlFor="regular">
              سن:
            </label>
            <input
              className="rounded bg-slate-100 text-slate-700 outline-none px-1 "
              value={age}
              onChange={(event: any) => {
                setAge(Number(event.target.value));
                setShowDetails(false);
              }}
            />
            <div className="w-1/4 text-slate-100"></div>
          </div>

          <div className="mt-3  mr-[60px] w-[300px]">
            <select
              className="rounded text-slate-700"
              value={activity}
              onChange={(event) => setActivity(Number(event.target.value))}
            >
              <option id="" value={1}>
                بی تحرک
              </option>
              <option id="" value={2}>
                فعالیت سبک
              </option>
              <option id="" value={3}>
                فعالیت متوسط
              </option>
              <option id="" value={4}>
                فعالیت زیاد
              </option>
              <option id="" value={5}>
                بسیار فعال
              </option>
            </select>
          </div>

          <div className="mt-3 w-[300px] mr-[60px]">
            <select
              className="rounded text-slate-700"
              value={gender}
              onChange={(event) => setGender(event.target.value)}
            >
              <option id="" value="man">
                مرد
              </option>
              <option id="" value="woman">
                زن
              </option>
            </select>
          </div>

          <div className="mt-3 w-[250px] text-center">
            <button
              className="py-px px-3 bg-slate-100 text-blue-700 rounded shadow"
              type="button"
              onClick={calculateHandler}
            >
              محاسبه کردن
            </button>
          </div>
        </div>
      </div>

      {showDetails && calloriesNeed && (
        <div className="flex items-center justify-center font-VazirMedium">
          <HealthResultCard>
            <div className="flex gap-x-3 items-center">
              <IoFastFoodOutline size={25} />
              <p>کالری مورد نیاز روزانه: {Math.floor(calloriesNeed)}</p>
            </div>
          </HealthResultCard>
        </div>
      )}
    </>
  );
}

export default BMR;
