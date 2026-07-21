import React from "react";
import { Link } from "react-router-dom";

export const products = [
  {
    id: 1,
    title: "گوشی اپل iPhone 15 Pro",
    price: 68000000,
    category: "موبایل",
    brand: "اپل",
    stock: 12,
    rating: 4.8,
    thumbnail:
      "https://dkstatics-public.digikala.com/digikala-products/bca17e85f93e6e95be0582fe60ed47c3c29f9234_1711705982.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/format,webp/quality,q_90",
    description: "قدرتمندترین گوشی اپل با بدنه تیتانیومی.",
  },
  {
    id: 2,
    title: "گوشی سامسونگ Galaxy S24",
    price: 45000000,
    category: "موبایل",
    brand: "سامسونگ",
    stock: 18,
    rating: 4.7,
    thumbnail:
      "https://dkstatics-public.digikala.com/digikala-products/f67de5b2fe4f452c1585004657788f8a209be3fb_1708331248.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/format,webp/quality,q_90",
    description: "پرچمدار سامسونگ با هوش مصنوعی پیشرفته.",
  },
  {
    id: 3,
    title: "گوشی شیائومی Redmi Note 13",
    price: 12000000,
    category: "موبایل",
    brand: "شیائومی",
    stock: 25,
    rating: 4.5,
    thumbnail:
      "https://dkstatics-public.digikala.com/digikala-products/139137be649919f1e1a78d1a28ee371c499a270e_1746519906.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/format,webp/quality,q_90",
    description: "گوشی میان‌رده با نمایشگر خیره‌کننده.",
  },
  {
    id: 4,
    title: "لپ‌تاپ ایسوس Vivobook",
    price: 32000000,
    category: "لپ‌تاپ",
    brand: "ایسوس",
    stock: 5,
    rating: 4.6,
    thumbnail:
      "https://dkstatics-public.digikala.com/digikala-products/0ba759e574703b02469954c9b75867debc85e3d0_1754236994.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/format,webp/quality,q_90",
    description: "سبک، قدرتمند و مناسب کارهای مهندسی.",
  },
  {
    id: 5,
    title: "لپ‌تاپ مک‌بوک ایر M3",
    price: 65000000,
    category: "لپ‌تاپ",
    brand: "اپل",
    stock: 3,
    rating: 4.9,
    thumbnail:
      "https://dkstatics-public.digikala.com/digikala-products/52911bcdb01c4122759b430697732b2bf538c784_1777794359.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/format,webp/quality,q_90",
    description: "باریک، سریع و با شارژدهی فوق‌العاده.",
  },
  {
    id: 6,
    title: "هدفون سونی WH-1000XM5",
    price: 18500000,
    category: "صوتی و تصویری",
    brand: "سونی",
    stock: 10,
    rating: 4.9,
    thumbnail:
      "https://dkstatics-public.digikala.com/digikala-products/5753ef00be0387c94cff7047b0b47b0e26e2ec84_1754252568.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/format,webp/quality,q_90",
    description: "بهترین هدفون با قابلیت حذف نویز.",
  },
  {
    id: 7,
    title: "هندزفری سامسونگ Buds 2 Pro",
    price: 5500000,
    category: "صوتی و تصویری",
    brand: "سامسونگ",
    stock: 30,
    rating: 4.7,
    thumbnail:
      "https://dkstatics-public.digikala.com/digikala-products/9c01f63a4024427336b47db7ba494272174a0903_1757934533.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/format,webp/quality,q_90",
    description: "کیفیت صدای شفاف و بیس عالی.",
  },
  {
    id: 8,
    title: "ساعت هوشمند گلکسی واچ 6",
    price: 9500000,
    category: "ساعت هوشمند",
    brand: "سامسونگ",
    stock: 15,
    rating: 4.6,
    thumbnail:
      "https://dkstatics-public.digikala.com/digikala-products/a677414a3b7e96576c9ca7b4aa593a206f9e9fbc_1747411161.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/format,webp/quality,q_90",
    description: "پایش سلامتی و طراحی کلاسیک.",
  },
  {
    id: 9,
    title: "ساعت هوشمند اپل واچ سری 9",
    price: 28000000,
    category: "ساعت هوشمند",
    brand: "اپل",
    stock: 8,
    rating: 4.8,
    thumbnail:
      "https://dkstatics-public.digikala.com/digikala-products/0a6f011e51ce49761d04f878c363496e29686c77_1739288605.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/format,webp/quality,q_90",
    description: "پیشرفته‌ترین ساعت هوشمند اپل.",
  },
  {
    id: 10,
    title: "کفش ورزشی نایکی Air Max",
    price: 4200000,
    category: "پوشاک",
    brand: "نایکی",
    stock: 20,
    rating: 4.4,
    thumbnail:
      "https://dkstatics-public.digikala.com/digikala-products/ee874a32f43876c3aae69ef5f442830cef3c2d81_1783277143.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/format,webp/quality,q_90",
    description: "طراحی ارگونومیک برای پیاده‌روی طولانی.",
  },
  {
    id: 11,
    title: "هودی مردانه کتان مدل Z1",
    price: 1200000,
    category: "پوشاک",
    brand: "متفرقه",
    stock: 50,
    rating: 4.2,
    thumbnail:
      "https://dkstatics-public.digikala.com/digikala-products/64239dbfd1316ae17f78d3194180e7343d868776_1614765686.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/format,webp/quality,q_90",
    description: "مناسب برای فصل پاییز و زمستان.",
  },
  {
    id: 12,
    title: "صندلی اداری نیلپر",
    price: 7800000,
    category: "لوازم اداری",
    brand: "نیلپر",
    stock: 6,
    rating: 4.3,
    thumbnail:
      "https://dkstatics-public.digikala.com/digikala-products/ffd9680d1408ba4009cf2e033037f8bb6dda139d_1656580506.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/format,webp/quality,q_90",
    description: "استاندارد و راحت برای کار طولانی.",
  },
  {
    id: 13,
    title: "ماوس لاجیتک MX Master 3S",
    price: 6500000,
    category: "لوازم جانبی",
    brand: "لاجیتک",
    stock: 12,
    rating: 4.9,
    thumbnail:
      "https://dkstatics-public.digikala.com/digikala-products/8bdf40c747057250fa490d835fccf88da55962e6_1781521285.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80",
    description: "بهترین ماوس برای طراحان و برنامه نویسان.",
  },
  {
    id: 14,
    title: "کیبورد مکانیکال Keychron",
    price: 4800000,
    category: "لوازم جانبی",
    brand: "Keychron",
    stock: 9,
    rating: 4.7,
    thumbnail:
      "https://dkstatics-public.digikala.com/digikala-products/094931446599a791945a570a154181191ce12d5e_1754243038.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/format,webp/quality,q_90",
    description: "تجربه تایپ لذت‌بخش و با کیفیت.",
  },
  {
    id: 15,
    title: "ماشین لباسشویی پاکشوما",
    price: 22000000,
    category: "لوازم خانگی",
    brand: "پاکشوما",
    stock: 4,
    rating: 4.5,
    thumbnail:
      "https://dkstatics-public.digikala.com/digikala-products/2669a37950ddb8eb4b7d4727712f6dc2eb7cb3c5_1780425626.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/format,webp/quality,q_90",
    description: "کم‌مصرف با برنامه‌های متنوع شستشو.",
  },
  {
    id: 16,
    title: "جاروبرقی بوش مدل GL-80",
    price: 15000000,
    category: "لوازم خانگی",
    brand: "بوش",
    stock: 7,
    rating: 4.6,
    thumbnail:
      "https://dkstatics-public.digikala.com/digikala-products/5d83801c65ff87a181626e331548ada813001a78_1754236660.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/format,webp/quality,q_90",
    description: "قدرت مکش بسیار بالا و کم‌صدا.",
  },
  {
    id: 17,
    title: "قهوه‌ساز دلونگی",
    price: 9200000,
    category: "لوازم خانگی",
    brand: "دلونگی",
    stock: 11,
    rating: 4.4,
    thumbnail:
      "https://dkstatics-public.digikala.com/digikala-products/93d8fab99e1072a7a888face72568b225d06b5c7_1754835939.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/format,webp/quality,q_90",
    description: "قهوه با کیفیت باریستا در خانه.",
  },
  {
    id: 18,
    title: "کوله پشتی لپ‌تاپ بنتون",
    price: 1200000,
    category: "کیف و کوله",
    brand: "بنتون",
    stock: 40,
    rating: 4.2,
    thumbnail:
      "https://dkstatics-public.digikala.com/digikala-products/114733815.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/format,webp/quality,q_90",
    description: "ضد آب با محفظه محافظ لپ‌تاپ.",
  },
  {
    id: 19,
    title: "پاوربانک انکر 20000",
    price: 2500000,
    category: "لوازم جانبی",
    brand: "انکر",
    stock: 22,
    rating: 4.7,
    thumbnail:
      "https://dkstatics-public.digikala.com/digikala-products/57ab726daa68ec9e5ce3b0d89f4c3e54f17c39c7_1754239763.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/format,webp/quality,q_90",
    description: "شارژ سریع با ظرفیت بالا.",
  },
  {
    id: 20,
    title: "مانیتور 24 اینچ سامسونگ",
    price: 8500000,
    category: "لوازم جانبی",
    brand: "سامسونگ",
    stock: 5,
    rating: 4.3,
    thumbnail:
      "https://dkstatics-public.digikala.com/digikala-products/bf4dee23141840fde7e4afc3c6a23331593686b8_1764363357.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/format,webp/quality,q_90",
    description: "تصویر شفاف با حاشیه کم.",
  },
];
function Products() {
  return (
    <div className="p-10 bg-gray-50 min-h-screen">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <Link
            to={`${product.id}`}
            key={`${product.id}`}
            className="group bg-white rounded-2xl p-4 border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
          >
            <div className="relative overflow-hidden rounded-xl mb-4">
              <img
                src={product.thumbnail}
                alt={product.title}
                className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            <h2 className="text-sm font-bold text-gray-800 mb-2 line-clamp-2">
              {product.title}
            </h2>

            <div className="flex items-center text-yellow-500 text-xs mb-3">
              <span>★ {product.rating}</span>
            </div>

            <div className="mt-auto pt-4 border-t border-gray-100 flex justify-between items-center">
              <span className="text-red-500 font-bold text-lg">
                {product.price.toLocaleString("fa-IR")}{" "}
                <span className="text-xs">تومان</span>
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Products;
