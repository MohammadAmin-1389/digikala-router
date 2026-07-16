import React from "react";
import { Link } from "react-router-dom";

function Mylists() {
  return (
    <div className="flex h-full w-full items-center justify-start px-8">
      <div className="w-full rounded-xl border border-gray-300 bg-white/80 p-10 shadow-sm">
        <div className="flex justify-center text-6xl text-gray-400">🔔</div>

        <div className="mt-6 text-center">
          <h2 className="text-2xl font-semibold text-gray-800">
            لیست علاقه‌مندی‌ها
          </h2>

          <div className="mx-auto mt-3 w-20 border-b border-gray-300" />

          <p className="mt-6 text-base text-gray-500">
            اطلاع‌رسانی تخفیف و رو به اتمام بودن کالاها
          </p>
          <br />
          <p>لیست علاقه مندی های شما خالی است</p>
          <button className="mt-8 rounded-lg border border-gray-300 px-6 py-2.5 text-sm text-gray-600 transition hover:bg-gray-100">
            مدیریت علاقه‌مندی‌ها
          </button>
        </div>
      </div>
    </div>
  );
}

export default Mylists;
