import { useState } from "react";
import HealthResultCard from "../../Components/HealthResultCard";

function BMI() {
  const [weight, SetWeight] = useState<number>(0);
  const [height, SetHeight] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [status, setStatus] = useState<string>("");
  const [showDetails, setShowDetails] = useState<boolean>(false);
  const [BMINumber, setBMINumber] = useState(0);
  const [healthyWeightRange, setHealthyWeightRange] = useState<number[]>(
    undefined!
  );
  const [weightToHealthy, setWeightToHealthy] = useState<number>(0);

  const calculateHandler = () => {
    if (!weight || !height) {
      alert("تمام فیلد ها رو پر کنید");
    } else {
      setLoading(true);
      setShowDetails(true);

      let calculatedBMI = weight / (height / 100) ** 2;

      //rounded bmi
      calculatedBMI = Math.round(calculatedBMI * 100) / 100;

      setBMINumber(calculatedBMI);

      const healthyMinWeight = 18.6 * (height / 100) ** 2;
      const healthyMaxWeight = 24.5 * (height / 100) ** 2;
      const healthyRange = [
        Math.round(healthyMinWeight * 10) / 10,
        Math.round(healthyMaxWeight * 10) / 10,
      ];
      setHealthyWeightRange(healthyRange);
      console.log(healthyRange);

      if (calculatedBMI <= 16.5) {
        setStatus("کمبود وزن شدید");
        let weightToHealthy = healthyMinWeight - weight;
        //rounded
        weightToHealthy = Math.round(weightToHealthy * 10) / 10;
        setWeightToHealthy(weightToHealthy);
      } else if (calculatedBMI > 16.5 && calculatedBMI <= 18.5) {
        setStatus("کمبود وزن");
        let weightToHealthy = healthyMinWeight - weight;
        //rounded
        weightToHealthy = Math.round(weightToHealthy * 10) / 10;
        setWeightToHealthy(weightToHealthy);
      } else if (calculatedBMI > 18.5 && calculatedBMI <= 25) {
        setStatus("وزن سلامت");
      } else if (calculatedBMI > 25 && calculatedBMI <= 30) {
        setStatus("اضافه وزن");
        let weightToHealthy = weight - healthyMaxWeight;

        //rounded
        weightToHealthy = Math.round(weightToHealthy * 10) / 10;

        setWeightToHealthy(weightToHealthy);
      } else if (calculatedBMI > 30 && calculatedBMI <= 35) {
        setStatus("چاقی درجه یک");
        let weightToHealthy = weight - healthyMaxWeight;

        //rounded
        weightToHealthy = Math.round(weightToHealthy * 10) / 10;

        setWeightToHealthy(weightToHealthy);
      } else if (calculatedBMI > 35 && calculatedBMI <= 40) {
        setStatus("چاقی درجه دو");
        let weightToHealthy = weight - healthyMaxWeight;

        //rounded
        weightToHealthy = Math.round(weightToHealthy * 10) / 10;

        setWeightToHealthy(weightToHealthy);
      } else if (calculatedBMI > 40) {
        setStatus("چاقی درجه سه");
        let weightToHealthy = weight - healthyMaxWeight;

        //rounded
        weightToHealthy = Math.round(weightToHealthy * 10) / 10;

        setWeightToHealthy(weightToHealthy);
      }
      setLoading(false);
    }
  };

  return (
    <>
      {loading ? (
        <>
          <div className="flex alig-items-center justify-content-center">
            <h3>loading...</h3>
          </div>
        </>
      ) : (
        <div className="container mx-auto flex justify-center items-center mt-5 font-VazirMedium">
          <div className="w-[375px] md:w-[400px] h-[200px] bg-blue-500 flex flex-col items-center justify-center p-3 shadow-md rounded">
            <div className="flex justify-between w-[300px]">
              <label className="w-1/12 text-slate-100" htmlFor="regular">
                وزن
              </label>
              <input
                className="rounded bg-slate-100 text-slate-700 outline-none px-1"
                value={weight}
                onChange={(event: any) => {
                  SetWeight(event.target.value);
                  setShowDetails(false);
                }}
              />
              <span className="w-1/4 text-slate-100">کیلوگرم</span>
            </div>

            <div className="mt-3 flex justify-between w-[300px]">
              <label className="w-1/12 text-slate-100" htmlFor="regular">
                قد
              </label>
              <input
                className="rounded bg-slate-100 text-slate-700n outline-none px-1"
                value={height}
                onChange={(event: any) => {
                  SetHeight(event.target.value);
                  setShowDetails(false);
                }}
              />
              <span className="w-1/4 text-slate-100">سانتی متر</span>
            </div>
            <div className="mt-5 w-[250px] text-center">
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
      )}

      {showDetails ? (
        <div className="flex items-center justify-center">
          <HealthResultCard>
            <div className="text-center">
              <div className="flex items-center justify-between">
                <span>قد :{height} </span>
                <span>وزن :{weight} </span>
              </div>
              <span>{BMINumber}</span>
              <p>وضعیت سلامت:{status}</p>
              <p>
                محدوده ی سلامت : از {healthyWeightRange[0]}تا{" "}
                {healthyWeightRange[1]}
              </p>
              {BMINumber <= 18.5 && <p>میزان کمبود وزن : {weightToHealthy}</p>}
              {BMINumber > 24.5 && <p>میزان اضافه وزن : {weightToHealthy}</p>}
            </div>
          </HealthResultCard>
        </div>
      ) : null}
    </>
  );
}

export default BMI;
