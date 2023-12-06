import { Link } from "react-router-dom";

function NoutFound() {
  return (
    <div className="min-h-screen flex flex-grow items-center justify-center bg-gray-50 font-VazirMedium">
      <div className="rounded-lg bg-white p-8 text-center shadow-xl w-[400px]">
        <h1 className="mb-4 text-4xl font-bold">404</h1>
        <p className="text-gray-600">متاسفانه چنین صفحه ای وجود ندارد.</p>
        <Link
          to="/"
          className="mt-4 inline-block rounded bg-blue-500 px-4 py-2 font-semibold text-white hover:bg-blue-600"
        >
          {" "}
          برگشت به صفحه اصلی{" "}
        </Link>
      </div>
    </div>
  );
}

export default NoutFound;
