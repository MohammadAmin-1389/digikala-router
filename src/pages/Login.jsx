import React, { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-red-600">DigiKala</h1>
          <p className="mt-2 text-sm text-gray-500">ورود به حساب کاربری</p>
        </div>

        <form className="mt-8 space-y-5">
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
            <div className="flex items-center justify-between">
              <label className="block text-sm font-medium text-gray-700">
                رمز عبور
              </label>
              <Link
                to="/forgot-password"
                className="text-sm text-red-500 hover:text-red-700 hover:underline"
              >
                فراموش کردید؟
              </Link>
            </div>
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
            ورود به دیجی‌کالا
          </button>
        </form>

        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300" />
          </div>
          <div className="relative flex justify-center">
            <span className="bg-white px-4 text-sm text-gray-400">یا</span>
          </div>
        </div>

        <button className="flex w-full items-center justify-center gap-2 rounded-lg border border-gray-300 py-3 text-sm font-medium text-gray-700 transition hover:bg-gray-50">
          <span className="text-xl">🅶</span>
          ورود با گوگل
        </button>

        <p className="mt-6 text-center text-sm text-gray-500">
          حساب کاربری ندارید؟
          <Link
            to="/signup"
            className="mr-1 font-bold text-red-600 hover:text-red-700 hover:underline"
          >
            ثبت‌نام کنید
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
