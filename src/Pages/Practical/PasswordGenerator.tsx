import { useState } from "react";
import { FaRegCopy } from "react-icons/fa";

function PasswordGenerator() {
  const [length, setLength] = useState<number>(12);
  const [upperCase, setUpperCase] = useState<boolean>(true);
  const [lowerCase, setLowerCase] = useState<boolean>(true);
  const [number, setNumber] = useState<boolean>(true);
  const [symbol, setSymbol] = useState<boolean>(true);
  const [upperCaseAtFirst, setUpperCaseAtFirst] = useState<boolean>(true);
  const [char, setChar] = useState<string>("");
  const [generatedPassword, setGeneratedPassword] = useState("");

  // const symbolArray="!@#$%^&*".split('')
  // const numberArray="0123456789".split('')

  //Generate Password Function
  const generatePasswordHandler = () => {
    let charset = "";
    if (upperCase) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (lowerCase) charset += "abcdefghijklmnopqrstuvwxyz";
    if (number) charset += "0123456789";
    if (symbol) charset += "!@#$%^&*";

    let password = "";

    if (upperCaseAtFirst) {
      const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      password += upperCaseLetters.charAt(
        Math.floor(Math.random() * upperCaseLetters.length)
      );

      if (char) {
        for (let i = 0; i < length - 2; i++) {
          password += charset.charAt(
            Math.floor(Math.random() * charset.length)
          );
        }

        let randomIndex = Math.floor(Math.random() * length);
        console.log(randomIndex);
        password =
          password.substring(0, randomIndex + 1) +
          char +
          password.substring(randomIndex + 1);
      } else {
        for (let i = 0; i < length - 1; i++) {
          password += charset.charAt(
            Math.floor(Math.random() * charset.length)
          );
        }
      }
    } else {
      if (char) {
        for (let i = 0; i < length - 1; i++) {
          password += charset.charAt(
            Math.floor(Math.random() * charset.length)
          );
        }

        let randomIndex = Math.floor(Math.random() * length);
        console.log(randomIndex);
        password =
          password.substring(0, randomIndex) +
          char +
          password.substring(randomIndex);
      } else {
        for (let i = 0; i < length; i++) {
          password += charset.charAt(
            Math.floor(Math.random() * charset.length)
          );
        }
      }
    }

    setGeneratedPassword(password);
  };

  // Copy Password in ClipBoard
  const copyPassword = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    event.preventDefault();
    if (generatedPassword.length > 0) {
      navigator.clipboard.writeText(generatedPassword);
      alert("پسوورد کپی شد");
    }
  };

  return (
    <>
      <div className=" container mx-auto flex flex-col items-center justify-center bg-blue-500  shadow-lg rounded-md w-[300px] mt-5 font-VazirMedium px-3 py-2 gap-y-1">
        <h3 className="text-center mb-2 font-VazirBold text-slate-100">
          تولید کننده رمزعبور
        </h3>
        <div className="flex gap-x-2 mb-3">
          <div className="cursor-pointer text-slate-100" onClick={copyPassword}>
            <FaRegCopy />
          </div>
          <input
            className="rounded bg-blue-200 text-slate-700 outline-none"
            type="text"
            value={generatedPassword}
            readOnly
            dir="ltr"
          />
        </div>
        <div className="w-full flex justify-between ">
          <span className="text-slate-200">طول</span>
          <input
            type="number"
            className="rounded bg-blue-200 text-slate-700 outline-none"
            value={length}
            min={12}
            max={24}
            onChange={(event) => setLength(Number(event.target.value))}
          />
        </div>
        <div className="w-full flex justify-between ">
          <span className="text-slate-200 ">حاوی A-Z</span>
          <input
            className="accent-slate-100"
            type="checkbox"
            checked={upperCase}
            onChange={(event) => setUpperCase(event.target.checked)}
          />
        </div>
        <div className="w-full flex justify-between ">
          <span className="text-slate-200">حاوی a-z</span>
          <input
            className="accent-slate-100"
            type="checkbox"
            checked={lowerCase}
            onChange={(event) => setLowerCase(event.target.checked)}
          />
        </div>
        <div className="w-full flex justify-between ">
          <span className="text-slate-200">حاوی 0-9</span>
          <input
            className="accent-slate-100"
            type="checkbox"
            checked={number}
            onChange={(event) => setNumber(event.target.checked)}
          />
        </div>
        <div className="w-full flex justify-between ">
          <span className="text-slate-200">حاوی !@#$%^&*</span>
          <input
            className="accent-slate-100"
            type="checkbox"
            checked={symbol}
            onChange={(event) => setSymbol(event.target.checked)}
          />
        </div>
        <div className="w-full flex justify-between ">
          <span className="text-slate-200">با حرف بزرگ انگلیسی شروع شود </span>
          <input
            className="accent-slate-100"
            type="checkbox"
            checked={upperCaseAtFirst}
            onChange={(event) => setUpperCaseAtFirst(event.target.checked)}
          />
        </div>
        <div className="w-full flex justify-between ">
          <span className="text-slate-200">حاوی چه کاراکتری باشد؟</span>
          <input
            className="rounded bg-blue-200 text-slate-700 outline-none"
            type="text"
            style={{ width: "30%" }}
            value={char}
            minLength={0}
            maxLength={1}
            onChange={(event) => setChar(event.target.value)}
          />
        </div>
        <div className="w-full text-center mt-3 ">
          <button
            className="bg-slate-100 text-blue-700 p-1 rounded shadow"
            type="button"
            onClick={generatePasswordHandler}
          >
            تولید رمز عبور
          </button>
        </div>
      </div>
    </>
  );
}

export default PasswordGenerator;
