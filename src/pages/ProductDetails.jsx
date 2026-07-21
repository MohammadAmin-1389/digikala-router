import React from "react";
import { useParams } from "react-router-dom";
import { products } from "./Products";

function ProductDetails() {
  let { id } = useParams();

  let product = products.find((item) => item.id === Number(id));

  if (!product) {
    return (
      <div className="flex justify-center items-center h-screen text-xl font-bold text-red-500">
        محصول مورد نظر یافت نشد!
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8 font-[Vazirmatn,tahoma]">
      <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 p-8 flex justify-center items-center bg-white">
            <div className="relative group">
              <img
                src={product.thumbnail}
                alt={product.title}
                className="w-full max-w-100 h-auto object-contain transition-transform duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 shadow-inner pointer-events-none"></div>
            </div>
          </div>

          <div className="md:w-1/2 p-8 md:p-12 flex flex-col">
            <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
              <span>{product.brand}</span>
              <span>•</span>
              <span>{product.category}</span>
            </div>

            <h1 className="text-2xl md:text-3xl font-extrabold text-gray-800 mb-6 leading-tight">
              {product.title}
            </h1>

            <div className="flex items-center gap-2 mb-6">
              <div className="flex text-yellow-400 text-lg">
                {"★".repeat(Math.floor(product.rating))}
                {"☆".repeat(5 - Math.floor(product.rating))}
              </div>
              <span className="text-sm text-gray-500">
                ({product.rating} از ۵)
              </span>
            </div>

            <hr className="border-gray-100 mb-6" />

            <div className="mb-8">
              <div className="text-gray-500 text-sm mb-1">قیمت:</div>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-black text-red-600">
                  {product.price.toLocaleString("fa-IR")}
                </span>
                <span className="text-lg font-medium text-red-600">تومان</span>
              </div>
              {product.stock > 0 ? (
                <p className="text-green-600 text-sm mt-2 flex items-center gap-1">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  موجود در انبار ({product.stock} عدد)
                </p>
              ) : (
                <p className="text-red-500 text-sm mt-2 font-bold">ناموجود</p>
              )}
            </div>

            <div className="mb-8">
              <h3 className="text-gray-800 font-bold mb-2">توضیحات محصول:</h3>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                {product.description}
              </p>
            </div>

            <div className="mt-auto flex flex-col sm:flex-row gap-4">
              <button className="flex-1 bg-red-600 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-2xl transition-colors duration-300 shadow-lg shadow-orange-200 text-lg">
                افزودن به سبد خرید
              </button>
              <button className="flex-1 bg-white border-2 border-gray-200 hover:border-orange-500 hover:text-orange-500 text-gray-700 font-bold py-4 px-8 rounded-2xl transition-all duration-300 text-lg">
                مقایسه محصول
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
