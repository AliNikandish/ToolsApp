import { useEffect, useState } from "react";
import { FaLocationCrosshairs } from "react-icons/fa6";
import { MdLocationCity } from "react-icons/md";
import { FaMapLocationDot } from "react-icons/fa6";
import { FaEarthAmericas } from "react-icons/fa6";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoTimeSharp } from "react-icons/io5";
import { TbWorldLatitude } from "react-icons/tb";
import { TbWorldLongitude } from "react-icons/tb";

function Ip() {
  const [ip, setIp] = useState<ipType>(undefined!);
  const [err, setErr] = useState("");

  useEffect(() => {
    async function myfunc() {
      try {
        const response = await fetch("https://freeipapi.com/api/json/");
        const data = await response.json();
        setIp(data);
      } catch (err) {
        setErr(
          "مشکلی پیش آمده است لطفا از اتصال اینترنت خود اطمینان حاصل کنید."
        );
      }
    }

    myfunc();
  }, []);

  return (
    <>
      {err ? (
        <div className="flex flex-col items-center justify-center min-h-screen">
          <div className="w-[300px] h-[150px] bg-red-400 flex flex-col items-center justify-center font-VazirMedium rounded shadow-lg text-slate-50 text-center">
            {err}
          </div>
        </div>
      ) : ip ? (
        <div className="flex flex-col items-center justify-center">
          <div className="w-[300px] bg-white shadow-lg rounded-lg overflow-hidden my-4 ">
            <div className="flex items-center px-6 py-3 bg-blue-600">
              <div className="text-slate-50">
                <FaLocationCrosshairs />
              </div>
              <h1 className="mx-3 text-white font-semibold text-lg font-VazirBold">
                آدرس آیپی:{ip.ipAddress}
              </h1>
            </div>
            <div className="py-4 px-6 font-VazirMedium">
              <div className="flex items-center text-gray-700">
                <div className=" text-blue-600">
                  <FaEarthAmericas />
                </div>
                <h1 className="px-2 text-sm">قاره :{ip.continent}</h1>
              </div>
              <div className="flex items-center mt-4 text-gray-700">
                <div className=" text-blue-600">
                  <FaMapMarkerAlt />
                </div>
                <h1 className="px-2 text-sm">کشور :{ip.countryName}</h1>
              </div>
              <div className="flex items-center mt-4 text-gray-700">
                <div className="text-blue-600">
                  <FaMapLocationDot />
                </div>
                <h1 className="px-2 text-sm">استان :{ip.regionName}</h1>
              </div>
              <div className="flex items-center mt-4 text-gray-700">
                <div className="text-blue-600">
                  <MdLocationCity />
                </div>
                <h1 className="px-2 text-sm">شهر :{ip.cityName}</h1>
              </div>
              <div className="flex items-center mt-4 text-gray-700">
                <div className="text-blue-600">
                  <IoTimeSharp />
                </div>
                <h1 className="px-2 text-sm">
                  ساعت منطقه زمانی :{ip.timeZone}
                </h1>
              </div>
              <div className="flex items-center mt-4 text-gray-700">
                <div className="text-blue-600">
                  <TbWorldLatitude />
                </div>
                <h1 className="px-2 text-sm">عرض جغرافیایی:{ip.latitude}</h1>
              </div>
              <div className="flex items-center mt-4 text-gray-700">
                <div className="text-blue-600">
                  <TbWorldLongitude />
                </div>
                <h1 className="px-2 text-sm">طول جغرافیایی:{ip.longitude}</h1>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center min-h-screen">
          <div className="w-[300px] h-[150px] bg-blue-400 flex flex-col items-center justify-center font-VazirMedium rounded shadow-lg text-slate-50">
            در حال بارگزاری ...
          </div>
        </div>
      )}
    </>
  );
}

export default Ip;
