import { useState } from "react";
import { evaluate } from "mathjs";

function Calculator() {
  const [screenResult, setScreenResult] = useState("");
  const [isUseDot, setIsUseDot] = useState(false);

  const clickHandler = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent> | any
  ) => {
    let input = event.target.value;

    if (input === ".") {
      if (isUseDot) {
        return;
      } else {
        setIsUseDot(true);
      }
    }

    if (input === "+" || input === "-" || input === "*" || input === "/") {
      setIsUseDot(false);
    }

    setScreenResult(screenResult + input);
  };

  const acHandler = () => {
    setScreenResult("");
    setIsUseDot(false);
  };

  const deleteHandler = () => {
    if (screenResult.endsWith(".")) {
      setIsUseDot(false);
    }
    setScreenResult(screenResult.slice(0, -1));
  };

  const equalHandler = () => {
    setScreenResult(evaluate(screenResult));
    setIsUseDot(false);
  };

  return (
    <>
      <div className="min-w-screen min-h-screen bg-gray-100 flex items-center justify-center px-5 py-5">
        <div
          className="w-full mx-auto rounded-xl bg-gray-100 shadow-xl text-gray-800 relative overflow-hidden border-1"
          style={{ maxWidth: "300px" }}
        >
          <div className="w-full h-36 bg-gray-100 flex items-end text-right">
            <div className="w-full py-5 px-6 text-6xl text-blue-700 font-thin">
              {screenResult}
            </div>
          </div>
          <div className="w-full">
            <div className="flex w-full gap-1  p-1">
              <div className="w-1/4 ">
                <button
                  className="w-full h-16 outline-none focus:outline-none   text-blue-700 bg-slate-300 text-2xl font-light rounded-md"
                  value="/"
                  onClick={(event) => clickHandler(event)}
                >
                  ÷
                </button>
              </div>
              <div className="w-1/4 ">
                <button
                  className="w-full h-16 outline-none focus:outline-none  text-blue-700 bg-slate-300 text-2xl font-light rounded-md"
                  value="%"
                  onClick={(event) => clickHandler(event)}
                >
                  %
                </button>
              </div>
              <div className="w-1/4 ">
                <button
                  className="w-full h-16 outline-none focus:outline-none  text-blue-700 bg-slate-300 text-2xl font-light rounded-md"
                  value="DEL"
                  onClick={() => deleteHandler()}
                >
                  DEL
                </button>
              </div>
              <div className="w-1/4 ">
                <button
                  className="w-full h-16 outline-none focus:outline-none   text-2xl font-light text-blue-700 bg-slate-300 rounded-md"
                  value="AC"
                  onClick={() => acHandler()}
                >
                  AC
                </button>
              </div>
            </div>
            <div className="flex w-full gap-1  p-1">
              <div className="w-1/4">
                <button
                  className="w-full h-16 outline-none focus:outline-none  text-blue-700 bg-slate-300 text-2xl font-light rounded-md"
                  value="*"
                  onClick={(event) => clickHandler(event)}
                >
                  ×
                </button>
              </div>
              <div className="w-1/4 ">
                <button
                  className="w-full h-16 outline-none focus:outline-none    bg-slate-300 text-xl font-light rounded-md"
                  value="9"
                  onClick={(event) => clickHandler(event)}
                >
                  9
                </button>
              </div>
              <div className="w-1/4 ">
                <button
                  className="w-full h-16 outline-none focus:outline-none    bg-slate-300 text-xl font-light rounded-md"
                  value="8"
                  onClick={(event) => clickHandler(event)}
                >
                  8
                </button>
              </div>
              <div className="w-1/4 ">
                <button
                  className="w-full h-16 outline-none focus:outline-none   bg-slate-300  text-xl font-light rounded-md"
                  value="7"
                  onClick={(event) => clickHandler(event)}
                >
                  7
                </button>
              </div>
            </div>
            <div className="flex w-full gap-1  p-1">
              <div className="w-1/4">
                <button
                  className="w-full h-16 outline-none focus:outline-none bg-slate-300  text-blue-700 text-2xl font-light rounded-md"
                  value="-"
                  onClick={(event) => clickHandler(event)}
                >
                  -
                </button>
              </div>
              <div className="w-1/4">
                <button
                  className="w-full h-16 outline-none focus:outline-none bg-slate-300  text-xl font-light rounded-md"
                  value="6"
                  onClick={(event) => clickHandler(event)}
                >
                  6
                </button>
              </div>
              <div className="w-1/4">
                <button
                  className="w-full h-16 outline-none focus:outline-none bg-slate-300  text-xl font-light rounded-md"
                  value="5"
                  onClick={(event) => clickHandler(event)}
                >
                  5
                </button>
              </div>
              <div className="w-1/4">
                <button
                  className="w-full h-16 outline-none focus:outline-non  bg-slate-300  text-xl font-light rounded-md"
                  value="4"
                  onClick={(event) => clickHandler(event)}
                >
                  4
                </button>
              </div>
            </div>
            <div className="flex w-full gap-1  p-1">
              <div className="w-1/4">
                <button
                  className="w-full h-16 outline-none focus:outline-none bg-slate-300  text-blue-700 text-2xl font-light rounded-md"
                  value="+"
                  onClick={(event) => clickHandler(event)}
                >
                  +
                </button>
              </div>
              <div className="w-1/4">
                <button
                  className="w-full h-16 outline-none focus:outline-none bg-slate-300  text-xl font-light rounded-md"
                  value="3"
                  onClick={(event) => clickHandler(event)}
                >
                  3
                </button>
              </div>
              <div className="w-1/4">
                <button
                  className="w-full h-16 outline-none focus:outline-none bg-slate-300  text-xl font-light rounded-md"
                  value="2"
                  onClick={(event) => clickHandler(event)}
                >
                  2
                </button>
              </div>
              <div className="w-1/4">
                <button
                  className="w-full h-16 outline-none focus:outline-non  bg-slate-300  text-xl font-light rounded-md"
                  value="1"
                  onClick={(event) => clickHandler(event)}
                >
                  1
                </button>
              </div>
            </div>
            <div className="flex w-full gap-1  p-1">
              <div className="w-1/4">
                <button
                  className="w-full h-16 outline-none focus:outline-none bg-slate-300  text-blue-700 text-2xl font-light rounded-md"
                  value="="
                  onClick={() => equalHandler()}
                >
                  =
                </button>
              </div>
              <div className="w-1/4">
                <button
                  className="w-full h-16 outline-none focus:outline-none bg-slate-300  text-xl font-light rounded-md"
                  value="00"
                  onClick={(event) => clickHandler(event)}
                >
                  00
                </button>
              </div>
              <div className="w-1/4">
                <button
                  className="w-full h-16 outline-none focus:outline-none bg-slate-300  text-xl font-light rounded-md"
                  value="."
                  onClick={(event) => clickHandler(event)}
                >
                  .
                </button>
              </div>
              <div className="w-1/4">
                <button
                  className="w-full h-16 outline-none focus:outline-non  bg-slate-300  text-xl font-light rounded-md"
                  value="0"
                  onClick={(event) => clickHandler(event)}
                >
                  0
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Calculator;
