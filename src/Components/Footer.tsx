import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="mt-5 relative bg-blue-600 pt-8 pb-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap text-left lg:text-left">
          <div className="w-full lg:w-6/12 px-4">
            <h4 className="text-3xl fonat-semibold text-slate-50 text-center font-VazirBold">
              مارا در شبکه های اجتماعی دنبال کنید
            </h4>
            <div className="mt-6 lg:mb-0 mb-6 flex justify-center">
              <a
                href="/"
                className="flex items-center justify-center bg-white text-blue-400 shadow-lg font-normal h-10 w-10  rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <FaTwitter />
              </a>
              <a
                href="/"
                className="flex items-center justify-center bg-white text-blue-600 shadow-lg font-normal h-10 w-10  rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <FaLinkedin />
              </a>
              <a
                href="/"
                className="flex items-center justify-center bg-white text-pink-400 shadow-lg font-normal h-10 w-10  rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <FaInstagram />
              </a>
              <a
                href="https://github.com/AliNikandish"
                className="flex items-center justify-center bg-white text-gray-800 shadow-lg font-normal h-10 w-10  rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <FaGithub />
              </a>
            </div>
          </div>
          <div className="w-full lg:w-6/12 px-4">
            <div className="flex flex-wrap items-top mb-6">
              <div className="w-full lg:w-1/2 px-4 text-start">
                <h5 className="text-2xl text-slate-50 font-VazirBold">
                  ابزارهای پراستفاده
                </h5>
                <div className="flex flex-col mt-1 mb-4 lg:mb-0 text-slate-200 font-VazirMedium">
                  <Link to="/math/calculator">ماشین حساب</Link>
                  <Link to="/bank/loan">محاسبه قسط بانکی</Link>
                  <Link to="/practical/passwordgenerator">
                    ساخت پسوورد اتوماتیک
                  </Link>
                  <Link to="/health/bmi">محاسبه BMI</Link>
                  <Link to="/time/timer">تایمر</Link>
                  <Link to="/practical/ip">بدست آوردن IP</Link>
                </div>
              </div>
              <div className="w-full lg:w-1/2 px-4 text-start">
                <h5 className="text-2xl text-slate-50 font-VazirBold">
                  موضوعات
                </h5>
                <div className="flex flex-col mt-1 text-slate-200 font-VazirMedium">
                  <Link to="/practical">کاربردی</Link>
                  <Link to="/time">زمان</Link>
                  <Link to="/hoobies">سرگرمی</Link>
                  <Link to="/bank">بانک</Link>
                  <Link to="/health">سلامت</Link>
                  <Link to="/math">ریاضی</Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr className="my-6 border-blueGray-300" />

        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-sm text-slate-50 font-semibold py-1 font-VazirBold">
              کپی رایت © <span id="get-current-year">2023</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
