import React from "react";

function Navbar() {
  return (
    <nav className="w-full bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center gap-4">
          <h1 className="text-2xl font-bold text-red-600">DigiKala</h1>

          <div className="relative flex-1">
            <input
              type="text"
              placeholder="جستجو در دیجی کالا..."
              className="w-full h-12 rounded-xl bg-gray-100 pr-12 pl-4 outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          <button className="bg-orange-100 text-orange-600 px-5 py-3 rounded-xl font-semibold hover:bg-orange-200 transition">
            انتخاب آدرس
          </button>
        </div>

        <div className="flex items-center gap-8 mt-5 text-gray-700 text-sm">
          <span className="font-bold cursor-pointer">دسته بندی کالاها</span>

          <span className="cursor-pointer hover:text-red-600">
            شگفت انگیز ها
          </span>

          <span className="cursor-pointer hover:text-red-600">سوپر مارکت</span>

          <span className="cursor-pointer hover:text-red-600">
            طلا و نقره دیجیتال
          </span>

          <span className="cursor-pointer hover:text-red-600">
            پرفروش ترین ها
          </span>

          <span className="cursor-pointer hover:text-red-600">دیجی استایل</span>

          <span className="cursor-pointer hover:text-red-600">
            در دیجی کالا بفروشید
          </span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
