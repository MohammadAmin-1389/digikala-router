import React from "react";
import { Link } from "react-router-dom";

function Acount() {
  return (
    <div className="flex h-full w-full items-center justify-start px-8">
      <div className="w-full rounded-xl border border-gray-300 bg-white p-8 shadow-sm">
        <div className="flex items-center justify-between border-b border-gray-300 pb-4">
          <div className="flex items-center gap-3">
            <span className="text-2xl">👤</span>
            <h2 className="text-xl font-bold text-gray-800">اطلاعات شخصی</h2>
          </div>
          <button className="text-gray-400 hover:text-gray-600 transition">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
              />
            </svg>
          </button>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-x-8 gap-y-5">
          <div>
            <label className="block text-[20px] font-bold text-gray-500">
              نام و نام خانوادگی
            </label>
            <p className="mt-1 text-[20px] font-bold text-gray-800">
              محمدامین اسحقی
            </p>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <label className="block text-[20px] font-bold text-gray-500">
                شماره موبایل
              </label>
              <p className="mt-1 text-[20px] font-bold text-gray-800">
                ۰۹۳۹۴۳۱۵۴۹
              </p>
              <span className="inline-block mt-0.5 text-[12px] font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded-full">
                تایید شده
              </span>
            </div>
            <button className="text-gray-400 hover:text-gray-600 transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                />
              </svg>
            </button>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <label className="block text-[20px] font-bold text-gray-500">
                رمز عبور
              </label>
            </div>
            <button className="text-gray-400 hover:text-gray-600 transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                />
              </svg>
            </button>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <label className="block text-[20px] font-bold text-gray-500">
                تاریخ تولد
              </label>
              <p className="mt-1 text-[20px] font-bold text-gray-800">
                ۱۳۸۹/۲/۸
              </p>
            </div>
            <button className="text-gray-400 hover:text-gray-600 transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                />
              </svg>
            </button>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <label className="block text-[20px] font-bold text-gray-500">
                کد اقتصادی
              </label>
            </div>
            <button className="text-gray-400 hover:text-gray-600 transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </button>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <label className="block text-[20px] font-bold text-gray-500">
                کد ملی
              </label>
              <p className="mt-1 text-[20px] font-bold text-gray-800">
                0508952144
              </p>
            </div>
            <button className="text-gray-400 hover:text-gray-600 transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                />
              </svg>
            </button>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <label className="block text-[20px] font-bold text-gray-500">
                ایمیل
              </label>
            </div>
            <button className="text-gray-400 hover:text-gray-600 transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </button>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <label className="block text-[20px] font-bold text-gray-500">
                روش بازگرداندن پول من
              </label>
            </div>
            <button className="text-gray-400 hover:text-gray-600 transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </button>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <label className="block text-[20px] font-bold text-gray-500">
                شغل
              </label>
            </div>
            <button className="text-gray-400 hover:text-gray-600 transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </button>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <label className="block text-[20px] font-bold text-gray-500">
                نوع ملعولیت{" "}
              </label>
              <p className="mt-1 text-[20px] font-bold ">تعریف نشده</p>
            </div>
            <button className="text-gray-400 hover:text-gray-600 transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Acount;
