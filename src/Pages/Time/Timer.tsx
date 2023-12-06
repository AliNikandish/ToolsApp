import { useState } from "react";
import "./Timer.css";
import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";

type timeType = { s: number; m: number; h: number };

function Timer() {
  const [time, setTime] = useState<timeType>({ s: 0, m: 0, h: 0 });
  const [interv, setInterv] = useState<any>("");
  const [status, setStatus] = useState<string>("ready"); //ready ended started  stopped
  const [secondInput, setSecondInput] = useState<number>(0);
  const [minuteInput, setMinuteInput] = useState<number>(0);
  const [hoursInput, setHourInput] = useState<number>(0);

  const intervalFunction = () => {
    setInterv(
      setInterval(() => {
        setTime((prevState) => {
          let newstate = { ...prevState };

          if (newstate.s > 0) {
            newstate.s -= 1;
          }

          if (newstate.s === 0) {
            if (newstate.m > 0) {
              newstate.m -= 1;
              newstate.s = 59;
            }
          }
          if (newstate.s === 0 && newstate.m === 0 && newstate.h >= 1) {
            newstate.h -= 1;
            newstate.m = 59;
          }

          if (newstate.s === 0 && newstate.m === 0 && newstate.h === 0) {
            setStatus("ended");
          }

          return newstate;
        });
      }, 1000)
    );
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
    setStatus("ready");
    setTime({ s: 0, m: 0, h: 0 });
    clearInterval(interv);
  };

  const startTimer = (event: any) => {
    event.preventDefault();
    if (secondInput > 60 || secondInput < 0) {
      alert("ثانیه باید بین 0 تا 60 باشد");
    } else if (minuteInput > 60 || minuteInput < 0) {
      alert("دقیقه باید بین 0 تا 60 باشد");
    } else if (hoursInput > 60 || hoursInput < 0) {
      alert("ساعت باید بین 0 تا 60 باشد");
    } else {
      setTime({
        s: Number(secondInput),
        m: Number(minuteInput),
        h: Number(hoursInput),
      });
      setStatus("started");
      //clear previous interval for start again Timer
      clearInterval(interv);
      intervalFunction();
    }
  };

  function incSec(event: any) {
    switch (event.target.id) {
      case "second":
        setSecondInput((prev: number | any) => {
          if (prev <= 59) {
            return prev + 1;
          }
        });
        break;
      case "minute":
        setMinuteInput((prev: number | any) => {
          if (prev <= 59) {
            return prev + 1;
          }
        });
        break;
      case "hour":
        setHourInput((prev: number | any) => {
          if (prev <= 59) {
            return prev + 1;
          }
        });
        break;

      default:
        break;
    }
  }

  function decSec(event: any) {
    switch (event.target.id) {
      case "second":
        setSecondInput((prev: number) => {
          if (prev > 0) {
            return prev - 1;
          } else {
            return prev;
          }
        });
        break;
      case "minute":
        setMinuteInput((prev: number) => {
          if (prev > 0) {
            return prev - 1;
          } else {
            return prev;
          }
        });
        break;
      case "hour":
        setHourInput((prev: number) => {
          if (prev > 0) {
            return prev - 1;
          } else {
            return prev;
          }
        });
        break;

      default:
        break;
    }
  }

  return (
    <>
      <div className=" mt-5 container flex flex-col justify-center items-center font-VazirMedium">
        <div className="container flex flex-col justify-center items-center  font-VazirMedium min-h-[400px] w-[375px]">
          {status === "ready" && (
            <>
              <div>
                <p>زمان مورد نظر خود را از اینجا تنظیم کنید.</p>
              </div>

              <div className="flex justify-center items-center gap-x-2 my-2 bg-blue-400 h-28 rounded shadow-md p-2 ">
                <div className="flex flex-col gap-x-1">
                  <div
                    className="cursor-pointer w-5 mr-3 text-slate-50"
                    id="second"
                    onClick={(event) => incSec(event)}
                  >
                    <FaAngleUp id="second" />
                  </div>
                  <div className="flex gap-x-1">
                    <input
                      name="second"
                      className="w-10 h bg-slate-700 text-slate-50 rounded text-center"
                      type="number"
                      min={0}
                      max={60}
                      value={secondInput}
                      onChange={(event) =>
                        setSecondInput(Number(event.target.value))
                      }
                    ></input>
                    <span>ثانیه</span>
                  </div>
                  <div
                    className="cursor-pointer w-5 mr-3 text-slate-50"
                    id="second"
                    onClick={decSec}
                  >
                    <FaAngleDown id="second" />
                  </div>
                </div>

                <div className="flex flex-col gap-x-1">
                  <div
                    className="cursor-pointer w-5 mr-3 text-slate-50"
                    id="minute"
                    onClick={(event) => incSec(event)}
                  >
                    <FaAngleUp id="minute" />
                  </div>
                  <div className="flex gap-x-1">
                    <input
                      name="minute"
                      className="w-10 h bg-slate-700 text-slate-50 rounded text-center"
                      type="number"
                      min={0}
                      max={60}
                      value={minuteInput}
                      onChange={(event) =>
                        setMinuteInput(Number(event.target.value))
                      }
                    ></input>
                    <span>دقیقه</span>
                  </div>
                  <div
                    className="cursor-pointer w-5 mr-3 text-slate-50"
                    id="minute"
                    onClick={decSec}
                  >
                    <FaAngleDown id="minute" />
                  </div>
                </div>

                <div className="flex flex-col gap-x-1">
                  <div
                    className="cursor-pointer w-5 mr-3 text-slate-50"
                    id="hour"
                    onClick={(event) => incSec(event)}
                  >
                    <FaAngleUp id="hour" />
                  </div>
                  <div className="flex gap-x-1">
                    <input
                      name="hour"
                      className="w-10 h bg-slate-700 text-slate-50 rounded text-center"
                      type="number"
                      min={0}
                      max={60}
                      value={hoursInput}
                      onChange={(event) =>
                        setHourInput(Number(event.target.value))
                      }
                    ></input>
                    <span>ساعت</span>
                  </div>
                  <div
                    className="cursor-pointer w-5 mr-3 text-slate-50"
                    id="hour"
                    onClick={decSec}
                  >
                    <FaAngleDown id="hour" />
                  </div>
                </div>

                <button
                  type="button"
                  className="bg-orange-500 text-slate-200 p-1 rounded"
                  onClick={startTimer}
                >
                  شروع
                </button>
              </div>
            </>
          )}
          {status === "ended" ? (
            <div>
              <div className=" mt-2 flex flex-col justify-center items-center w-[375px] h-[50px] bg-blue-800 text-slate-50 rounded shadow-md p-2">
                <p>زمان به پایان رسید</p>
                <p>دوباره امتحان کنید</p>
              </div>

              <div className="flex justify-center items-center gap-x-2 my-2 bg-blue-400 h-28 rounded shadow-md p-2 ">
                <div className="flex flex-col gap-x-1">
                  <div
                    className="cursor-pointer w-5 mr-3 text-slate-50"
                    id="second"
                    onClick={(event) => incSec(event)}
                  >
                    <FaAngleUp id="second" />
                  </div>
                  <div className="flex gap-x-1">
                    <input
                      name="second"
                      className="w-10 h bg-slate-700 text-slate-50 rounded text-center"
                      type="number"
                      min={0}
                      max={60}
                      value={secondInput}
                      onChange={(event) =>
                        setSecondInput(Number(event.target.value))
                      }
                    ></input>
                    <span>ثانیه</span>
                  </div>
                  <div
                    className="cursor-pointer w-5 mr-3 text-slate-50"
                    id="second"
                    onClick={decSec}
                  >
                    <FaAngleDown id="second" />
                  </div>
                </div>

                <div className="flex flex-col gap-x-1">
                  <div
                    className="cursor-pointer w-5 mr-3 text-slate-50"
                    id="minute"
                    onClick={(event) => incSec(event)}
                  >
                    <FaAngleUp id="minute" />
                  </div>
                  <div className="flex gap-x-1">
                    <input
                      name="minute"
                      className="w-10 h bg-slate-700 text-slate-50 rounded text-center"
                      type="number"
                      min={0}
                      max={60}
                      value={minuteInput}
                      onChange={(event) =>
                        setMinuteInput(Number(event.target.value))
                      }
                    ></input>
                    <span>دقیقه</span>
                  </div>
                  <div
                    className="cursor-pointer w-5 mr-3 text-slate-50"
                    id="minute"
                    onClick={decSec}
                  >
                    <FaAngleDown id="minute" />
                  </div>
                </div>

                <div className="flex flex-col gap-x-1">
                  <div
                    className="cursor-pointer w-5 mr-3 text-slate-50"
                    id="hour"
                    onClick={(event) => incSec(event)}
                  >
                    <FaAngleUp id="hour" />
                  </div>
                  <div className="flex gap-x-1">
                    <input
                      name="hour"
                      className="w-10 h bg-slate-700 text-slate-50 rounded text-center"
                      type="number"
                      min={0}
                      max={60}
                      value={hoursInput}
                      onChange={(event) =>
                        setHourInput(Number(event.target.value))
                      }
                    ></input>
                    <span>ساعت</span>
                  </div>
                  <div
                    className="cursor-pointer w-5 mr-3 text-slate-50"
                    id="hour"
                    onClick={decSec}
                  >
                    <FaAngleDown id="hour" />
                  </div>
                </div>

                <button
                  type="button"
                  className="bg-orange-500 text-slate-200 p-1 rounded"
                  onClick={startTimer}
                >
                  شروع
                </button>
              </div>
            </div>
          ) : (
            <>
              <div className="mt-5 w-[375px] h-[200px] flex justify-center gap-x-3 container mx-auto">
                <div className="flex flex-col items-center">
                  <div className="w-[100px] h-[100px] bg-gray-800 text-red-500 flex justify-center items-center text-3xl relative overflow-hidden shadow-2xl rounded">
                    {time.s >= 10 ? time.s : `0${time.s}`}
                    <span className="absolute w-2 h-2 bg-black rounded-full right-[-5px]"></span>
                    <span className="absolute w-2 h-2 bg-black rounded-full left-[-5px]"></span>
                  </div>
                  <span>Seconds</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-[100px] h-[100px] bg-gray-800 text-red-500 flex justify-center items-center text-3xl relative overflow-hidden shadow-2xl rounded">
                    {time.m >= 10 ? time.m : `0${time.m}`}
                    <span className="absolute w-2 h-2 bg-black rounded-full right-[-5px]"></span>
                    <span className="absolute w-2 h-2 bg-black rounded-full left-[-5px]"></span>
                  </div>
                  <span>Minute</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-[100px] h-[100px] bg-gray-800 text-red-500 flex justify-center items-center text-3xl relative overflow-hidden shadow-2xl rounded">
                    {time.h >= 10 ? time.h : `0${time.h}`}
                    <span className="absolute w-2 h-2 bg-black rounded-full right-[-5px]"></span>
                    <span className="absolute w-2 h-2 bg-black rounded-full left-[-5px]"></span>
                  </div>
                  <span>Hours</span>
                </div>
              </div>

              <div className="buttons-container">
                {/* {status === 'ready' && <button className="btn btn-success m-2" onClick={()=>start()}>start</button>} */}

                {status === "started" && (
                  <div className="flex gap-x-2">
                    <button
                      className="bg-red-500 text-slate-200 p-1 rounded"
                      onClick={() => stop()}
                    >
                      توقف
                    </button>

                    <button
                      className="bg-blue-500 text-slate-200 p-1 rounded"
                      onClick={() => reset()}
                    >
                      از اول
                    </button>
                  </div>
                )}

                {status === "stopped" && (
                  <div className="flex gap-x-2">
                    <button
                      className="bg-green-500 text-slate-200 p-1 rounded"
                      onClick={() => resume()}
                    >
                      ادامه
                    </button>
                    <button
                      className="bg-blue-500 text-slate-200 p-1 rounded"
                      onClick={() => reset()}
                    >
                      از اول
                    </button>
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Timer;
