import { useState } from "react";

type timeType = { ms: number; s: number; m: number; h: number };
type lapType = { h: number; id?: number; m: number; ms: number; s: number };
function StopWatch() {
  const [time, setTime] = useState<timeType>({ ms: 0, s: 0, m: 0, h: 0 });
  const [interv, setInterv] = useState<any>("");
  const [status, setStatus] = useState<string>("ready");
  const [laps, setLaps] = useState<timeType[]>([]);

  const intervalFunction = () => {
    setInterv(
      setInterval(() => {
        setTime((prevstate: timeType) => {
          const newstate = { ...prevstate };
          newstate.ms += 20;

          if (newstate.ms === 1000) {
            newstate.s += 1;
            newstate.ms = 0;
          }

          if (newstate.s === 60) {
            newstate.m += 1;
            newstate.s = 0;
          }

          if (newstate.m === 60) {
            newstate.h += 1;
            newstate.m = 0;
          }

          return newstate;
        });
      }, 20)
    );
  };

  const start = () => {
    setStatus("started");
    intervalFunction();
  };

  const resume = () => {
    setStatus("started");
    intervalFunction();
  };

  const stop = () => {
    setStatus("stopped");
    clearInterval(interv);
  };

  const reset = () => {
    setTime({ ms: 0, s: 0, m: 0, h: 0 });
    clearInterval(interv);
    setStatus("ready");
    setLaps([]);
  };

  const lapFunction = () => {
    setLaps((prevState: lapType[]) => {
      let newObj = { ...time, id: laps.length + 1 };
      let newState = [...prevState, newObj];

      return newState;
    });
  };

  return (
    <>
      <div className="mt-5 w-[375px] h-[150px] flex justify-center gap-x-3 container mx-auto">
        <div className="flex flex-col items-center">
          <div className="w-[85px] h-[85px] bg-gray-800 text-red-500 flex justify-center items-center text-3xl relative overflow-hidden shadow-2xl rounded">
            {time.ms >= 10 ? time.ms : `0${time.ms}`}
            <span className="absolute w-2 h-2 bg-black rounded-full right-[-5px]"></span>
            <span className="absolute w-2 h-2 bg-black rounded-full left-[-5px]"></span>
          </div>
          <span>MiliSeconds</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-[85px] h-[85px] bg-gray-800 text-red-500 flex justify-center items-center text-3xl relative overflow-hidden shadow-2xl rounded">
            {time.s >= 10 ? time.s : `0${time.s}`}
            <span className="absolute w-2 h-2 bg-black rounded-full right-[-5px]"></span>
            <span className="absolute w-2 h-2 bg-black rounded-full left-[-5px]"></span>
          </div>
          <span>Seconds</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-[85px] h-[85px] bg-gray-800 text-red-500 flex justify-center items-center text-3xl relative overflow-hidden shadow-2xl rounded">
            {time.m >= 10 ? time.m : `0${time.m}`}
            <span className="absolute w-2 h-2 bg-black rounded-full right-[-5px]"></span>
            <span className="absolute w-2 h-2 bg-black rounded-full left-[-5px]"></span>
          </div>
          <span>Minute</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-[85px] h-[85px] bg-gray-800 text-red-500 flex justify-center items-center text-3xl relative overflow-hidden shadow-2xl rounded">
            {time.h >= 10 ? time.h : `0${time.h}`}
            <span className="absolute w-2 h-2 bg-black rounded-full right-[-5px]"></span>
            <span className="absolute w-2 h-2 bg-black rounded-full left-[-5px]"></span>
          </div>
          <span>Hours</span>
        </div>
      </div>

      <div className="buttons-container w-[375px] h-[50px] container mx-auto flex justify-center items-center font-VazirMedium">
        {status === "ready" && (
          <button
            className="bg-blue-500 text-slate-50 px-2 py-1 rounded"
            onClick={() => start()}
          >
            شروع
          </button>
        )}

        {status === "started" && (
          <div className=" flex gap-x-3">
            <button
              className="bg-gray-700 text-slate-50 px-2 py-1 rounded"
              onClick={() => reset()}
            >
              ریست
            </button>
            <button
              className="bg-red-700 text-slate-50 px-2 py-1 rounded"
              onClick={() => stop()}
            >
              توقف
            </button>
            <button
              className="bg-purple-700 text-slate-50 px-2 py-1 rounded"
              onClick={() => lapFunction()}
            >
              لپ
            </button>
          </div>
        )}

        {status === "stopped" && (
          <div className=" flex gap-x-3">
            <button
              className="bg-gray-700 text-slate-50 px-2 py-1 rounded"
              onClick={() => reset()}
            >
              ریست
            </button>
            <button
              className="bg-green-700 text-slate-50 px-2 py-1 rounded"
              onClick={() => resume()}
            >
              ادامه
            </button>
          </div>
        )}
      </div>

      {laps.length > 0 && (
        <div className="w-[300px] mx-auto mt-3 font-VazirMedium">
          <div className="flex flex-col">
            <div className="overflow-x-auto shadow-lg sm:rounded-lg">
              <div className="inline-block min-w-full align-middle">
                <div className="overflow-hidden ">
                  <table className="min-w-full divide-y divide-gray-200 table-fixed">
                    <thead className=" bg-blue-500">
                      <tr>
                        <th
                          scope="col"
                          className="py-3 px-6 text-xs font-medium tracking-wider text-right text-slate-100 uppercas"
                        >
                          دور
                        </th>
                        <th
                          scope="col"
                          className="py-3 px-6 text-xs font-medium tracking-wider text-right text-slate-100 uppercase"
                        >
                          زمان
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                      {laps.map((lap: lapType) => {
                        return (
                          <tr className="hover:bg-gray-100 dark:hover:bg-gray-700">
                            <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                              {lap.id}
                            </td>
                            <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">{`${
                              lap.ms >= 100 ? lap.ms : `0${lap.ms}`
                            } : ${lap.s >= 10 ? lap.s : `0${lap.s}`}  : ${
                              lap.m >= 10 ? lap.m : `0${lap.m}`
                            } :  ${lap.h >= 10 ? lap.h : `0${lap.h}`}  `}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default StopWatch;
