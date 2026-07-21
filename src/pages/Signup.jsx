import React, { useState } from "react";
import { Link } from "react-router-dom";

function Signup() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-red-600">DigiKala</h1>
          <p className="mt-2 text-sm text-gray-500">ثبت‌نام در دیجی‌کالا</p>
        </div>

        <form className="mt-8 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              نام و نام خانوادگی
            </label>
            <input
              type="text"
              placeholder="مثلاً محمدامین اسحقی"
              className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none focus:border-red-500 focus:ring-2 focus:ring-red-200"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              شماره موبایل
            </label>
            <input
              type="text"
              placeholder="مثلاً ۰۹۳۹۴۳۱۵۴۹"
              className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none focus:border-red-500 focus:ring-2 focus:ring-red-200"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              رمز عبور
            </label>
            <div className="relative mt-1">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="********"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none focus:border-red-500 focus:ring-2 focus:ring-red-200"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-red-600 py-3 text-sm font-bold text-white transition hover:bg-red-700 hover:shadow-lg"
          >
            ثبت‌نام
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-500">
          قبلاً ثبت‌نام کردید؟
          <Link
            to="/login"
            className="mr-1 font-bold text-red-600 hover:text-red-700 hover:underline"
          >
            ورود به دیجی‌کالا
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
