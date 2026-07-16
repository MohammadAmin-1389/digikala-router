import React from "react";
import { Link } from "react-router-dom";

function Erore() {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-white px-6">
      <div className="text-center max-w-md">
        <h1 className="text-8xl font-bold text-gray-200 select-none">۴۰۴</h1>

        <h2 className="mt-4 text-2xl font-bold text-gray-800">صفحه پیدا نشد</h2>

        <p className="mt-3 text-sm text-gray-500">
          صفحه‌ای که به دنبال آن هستید وجود ندارد یا آدرس آن تغییر کرده است.
        </p>

        <Link
          to="/"
          className="mt-6 inline-block rounded-lg border border-gray-300 bg-white px-6 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-gray-50"
        >
          بازگشت به خانه
        </Link>

        <div className="mt-6 flex items-center justify-center gap-4 text-sm text-gray-400">
          <Link to="/" className="hover:text-gray-600 transition">
            خانه
          </Link>
          <span>•</span>
          <Link to="/Coments" className="hover:text-gray-600 transition">
            کامنت‌ها
          </Link>
          <span>•</span>
          <Link to="/Adres" className="hover:text-gray-600 transition">
            آدرس
          </Link>
          <span>•</span>
          <Link to="/Account" className="hover:text-gray-600 transition">
            حساب
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Erore;
