import React from "react";
import { Link, NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <div className="flex min-h-screen   pr-20">
      <div className="w-125 rounded-lg border border-gray-300 p-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-[20px] font-bold">محمدامین اسحقی</h2>
            <h3 className="text-gray-400">09399431549</h3>
          </div>
          <div>✒️</div>
        </div>

        <div className="my-4 border-b border-gray-300" />

        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-[18px]">طلا و نقره دیجیتال</h3>
            <p className="text-[15px] text-blue-500">خرید و فروش</p>
          </div>
          <div>-ریال</div>
        </div>

        <div className="my-4 border-b border-gray-300" />

        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-[18px]">کیف پول</h3>
            <p className="text-[15px] text-blue-500">افزایش موجودی</p>
          </div>
          <div>۰ تومان</div>
        </div>

        <div className="my-4 border-b border-gray-300" />

        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-[18px]">دیجی کوین</h3>
            <p className="text-[15px] text-blue-500">مشاهده ماموریت ها</p>
          </div>
          <div>۰ تومان</div>
        </div>
        <div className="my-4 border-b border-gray-300" />
        <br />

        <div>
          <NavLink
            to="/Coments"
            className={({ isActive }) =>
              `font-bold text-[20px] flex items-center gap-3 transition-all ${
                isActive ? "text-red-600" : "text-gray-700 hover:text-red-500"
              }`
            }
          >
            {({ isActive }) => (
              <>
                {isActive && (
                  <span className="inline-block h-6 w-1 bg-red-600 rounded-full" />
                )}
                کامنت‌ها
              </>
            )}
          </NavLink>
          <div className="my-4 border-b border-gray-200" />
          <br />

          <NavLink
            to="/Adres"
            className={({ isActive }) =>
              `font-bold text-[20px] flex items-center gap-3 transition-all ${
                isActive ? "text-red-600" : "text-gray-700 hover:text-red-500"
              }`
            }
          >
            {({ isActive }) => (
              <>
                {isActive && (
                  <span className="inline-block h-6 w-1 bg-red-600 rounded-full" />
                )}
                آدرس
              </>
            )}
          </NavLink>
          <div className="my-4 border-b border-gray-200" />
          <br />

          <NavLink
            to="/Acount"
            className={({ isActive }) =>
              `font-bold text-[20px] flex items-center gap-3 transition-all ${
                isActive ? "text-red-600" : "text-gray-700 hover:text-red-500"
              }`
            }
          >
            {({ isActive }) => (
              <>
                {isActive && (
                  <span className="inline-block h-6 w-1 bg-red-600 rounded-full" />
                )}
                حساب
              </>
            )}
          </NavLink>
          <div className="my-4 border-b border-gray-200" />
          <br />

          <NavLink
            to="/"
            className={({ isActive }) =>
              `font-bold text-[20px] flex items-center gap-3 transition-all ${
                isActive ? "text-red-600" : "text-gray-700 hover:text-red-500"
              }`
            }
          >
            {({ isActive }) => (
              <>
                {isActive && (
                  <span className="inline-block h-6 w-1 bg-red-600 rounded-full" />
                )}
                لیست من
              </>
            )}
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
