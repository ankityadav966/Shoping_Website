import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { Progress } from "@/components/ui/progress";


const About = () => {
 

    const products = [
  {
    title: "BLACK AND GOLD EVENING GOWN",
    price: "Rs. 5,999.00",
    image: "https://sotbella.com/cdn/shop/files/DSC01447_df4a712c-66f3-4f25-880b-7c944541b856.jpg?v=1763104447&width=1080",
    hoverImage: "https://sotbella.com/cdn/shop/files/SAC30-10-25_8815_f6ab4831-3e5e-4ad4-b3fe-28baff49c751.jpg?v=1763098827&width=1080",
  },
  {
    title: "WHITE RUFFLE NECK FLOWY SHIRT",
    price: "Rs. 1,739.00",
    image: "https://sotbella.com/cdn/shop/files/SAC30-10-25_8815_f6ab4831-3e5e-4ad4-b3fe-28baff49c751.jpg?v=1763098827&width=1080",
    hoverImage: "https://sotbella.com/cdn/shop/files/DSC01447_df4a712c-66f3-4f25-880b-7c944541b856.jpg?v=1763104447&width=1080",
  },
  {
    title: "RED HALTER NECK RUCHED GOWN",
    price: "Rs. 5,799.00",
    image: "https://sotbella.com/cdn/shop/files/DSC01447_df4a712c-66f3-4f25-880b-7c944541b856.jpg?v=1763104447&width=1080",
    hoverImage: "https://sotbella.com/cdn/shop/files/SAC30-10-25_8815_f6ab4831-3e5e-4ad4-b3fe-28baff49c751.jpg?v=1763098827&width=1080",
  },
  {
    title: "BLACK DRAPED GOWN WITH...",
    price: "Rs. 5,599.00",
    image: "https://sotbella.com/cdn/shop/files/SAC30-10-25_8815_f6ab4831-3e5e-4ad4-b3fe-28baff49c751.jpg?v=1763098827&width=1080",
    hoverImage: "https://sotbella.com/cdn/shop/files/DSC01447_df4a712c-66f3-4f25-880b-7c944541b856.jpg?v=1763104447&width=1080",
  },
  {
    title: "BLACK DRAPED GOWN WITH...",
    price: "Rs. 5,599.00",
    image: "https://sotbella.com/cdn/shop/files/DSC01434_c72867ef-ee31-4012-8cfb-b28f13abc3c7.jpg?v=1763104447&width=1080",
    hoverImage: "https://sotbella.com/cdn/shop/files/DSC01447_df4a712c-66f3-4f25-880b-7c944541b856.jpg?v=1763104447&width=1080",
  },
  {
    title: "BLACK DRAPED GOWN WITH...",
    price: "Rs. 5,599.00",
    image: "https://sotbella.com/cdn/shop/files/cap-443.jpg?v=1756462739&width=1080",
    hoverImage: "https://sotbella.com/cdn/shop/files/DSC01447_df4a712c-66f3-4f25-880b-7c944541b856.jpg?v=1763104447&width=1080",
  },
  {
    title: "BLACK DRAPED GOWN WITH...",
    price: "Rs. 5,599.00",
    image: "https://sotbella.com/cdn/shop/files/cap-611-2.jpg?v=1756462733&width=1080",
    hoverImage: "https://sotbella.com/cdn/shop/files/cap-552.jpg?v=1756462734&width=1080",
  },
  {
    title: "BLACK DRAPED GOWN WITH...",
    price: "Rs. 5,599.00",
    image: "https://sotbella.com/cdn/shop/files/embellished-halter-neck-dress-535386.jpg?v=1756463039&width=1080",
    hoverImage: "https://sotbella.com/cdn/shop/files/embellished-halter-neck-dress-790875.jpg?v=1756463040&width=1080",
  },
];

const [index, setIndex] = useState(0);
const [activeTab, setActiveTab] = useState("details");

  // 🔁 Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 4) % products.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div>
      <div className="sticky top-0 w-[99%] z-1">
        <Navbar />
      </div>

      <section className="w-full bg-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-[100px_1fr_1fr] gap-8 items-start">
            {/* LEFT THUMBNAILS */}
            {/* LEFT THUMBNAILS */}
            <div className="hidden lg:flex flex-col gap-4 lg:sticky lg:top-32   self-start">
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="border border-black cursor-pointer">
                  <img
                    src="https://sotbella.com/cdn/shop/files/DSC01447_df4a712c-66f3-4f25-880b-7c944541b856.jpg?v=1763104447&width=1080"
                    alt="thumb"
                    className="w-full h-auto object-cover"
                  />
                </div>
              ))}
            </div>


            <div className="w-full lg:sticky lg:top-32  self-start">
              <img
                src="https://sotbella.com/cdn/shop/files/DSC01447_df4a712c-66f3-4f25-880b-7c944541b856.jpg?v=1763104447&width=1080"
                alt="product"
                className="w-full h-[75vh] object-cover"
              />
            </div>


            <div className="space-y-6">
               <div className="bg-[#f4ede6] px-4 py-2 text-center text-sm tracking-widest">
                🎁 WELCOME TO SOTBELLA 💖
              </div>

               <h1 className="text-2xl md:text-3xl font-serif tracking-wide">
                BLACK LACE HALTER NECK RUCHED EVENING GOWN
              </h1>

               <div className="flex items-center gap-2 text-sm">
                <span>☆☆☆☆☆</span>
                <span>(0)</span>
              </div>

              <hr />

               <p className="text-2xl font-semibold">Rs. 6,599.00</p>

              <hr />

               <div className="flex items-center gap-2 text-sm">
                👥 <span>30 CURRENT VIEWING</span>
              </div>

              <hr />

               <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  📸 <span>SOCIAL FAVORITE</span>
                  <span className="text-gray-500">WOMEN STYLED THIS</span>
                </div>
                <button className="underline">VIEW</button>
              </div>

              <hr />
              <section className="w-full bg-white">
                <div className="max-w-5xl mx-auto px-4 py-12 space-y-10">
                  {/* SIZE */}
                  <div className="space-y-3">
                    <p className="text-sm font-semibold">SIZE: XS</p>
                    <div className="flex gap-2 flex-wrap">
                      {["XS", "S", "M", "L", "XL", "XXL"].map((s) => (
                        <button
                          key={s}
                          className="border px-4 py-2 text-sm hover:border-black"
                        >
                          {s}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* COLOR */}
                  <div className="space-y-2">
                    <p className="text-sm font-semibold">COLOR: BLACK</p>
                    <div className="w-5 h-5 rounded-full bg-black border" />
                  </div>

                  {/* MATERIAL */}
                  <div className="space-y-2">
                    <p className="text-sm font-semibold">
                      MATERIAL: NYLON LYCRA
                    </p>
                    <span className="inline-block border px-3 py-1 text-sm">
                      NYLON LYCRA
                    </span>
                  </div>

                  {/* FIT & FEEL */}
                  <div className="border p-6 space-y-4">
                    <div className="flex justify-between items-center text-sm font-semibold">
                      <span>FIT & FEEL</span>
                      <span className="underline cursor-pointer">
                        SIZE GUIDE
                      </span>
                    </div>

                    <Progress value={33}/>

                    <p className="font-semibold">
                      Designed to feel confident the moment you put it on.
                    </p>

                    <p className="text-sm leading-relaxed text-gray-700">
                      This piece is created with a confidence-first approach —
                      so you feel secure, comfortable, and expressive in your
                      social moments, not conscious of your outfit.
                    </p>

                    <ul className="list-disc pl-5 text-sm space-y-1">
                      <li>True to size</li>
                      <li>Designed to flatter real bodies</li>
                      <li>Supportive where confidence matters</li>
                      <li>Comfortable for movement, sitting, and long wear</li>
                    </ul>
                  </div>

                  {/* CTA */}
                  <button className="w-full border border-black py-3 tracking-widest">
                    ADD TO CART
                  </button>

                  <button className="w-full bg-black text-white py-3 tracking-widest">
                    Buy now
                    <p className="text-xs mt-1">
                      Extra 10% off on prepaid orders
                    </p>
                  </button>

                  <p className="text-xs text-center text-gray-600">
                    ✓ Easy Return & Exchange ✓ COD Available ✓ Delivered in 3–5
                    Days
                  </p>

                  <p className="text-xs text-center">
                    Designed for Social Moments · Made to Feel Confident ·
                    Thoughtfully Priced
                  </p>

                  {/* TRUST POINTS */}
                  <div className="grid grid-cols-1 md:grid-cols-1 gap-8 pt-10">
                    {[
                      {
                        title: "CONFIDENCE-FIRST FIT",
                        desc: "Flattering, supportive, and easy to move in. Designed in-house so you enjoy your moment — not adjust your outfit.",
                      },
                      {
                        title: "MADE FOR REAL SOCIAL MOMENTS",
                        desc: "Perfect for parties, weddings, dinners, and celebrations. Designed and refined by our team for real moments, not runways.",
                      },
                      {
                        title: "LUXURIOUSLY AFFORDABLE — BY DESIGN",
                        desc: "From design to final piece, everything is done in-house. That’s how we deliver a premium look and feel — without unnecessary luxury markup.",
                      },
                    ].map((item, i) => (
                      <div key={i} className="space-y-2">
                        <h4 className="text-sm font-semibold">{item.title}</h4>
                        <p className="text-sm text-gray-700 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* DETAILS / DELIVERY */}
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>

 <div className="w-full border-t mt-16 px-12">

      {/* TAB HEADERS */}
      <div className="flex justify-between items-center border-b py-6 text-sm tracking-widest">
        <button
          onClick={() => setActiveTab("details")}
          className={`pb-2 ${
            activeTab === "details"
              ? "border-b-2 border-black font-semibold"
              : "text-gray-400"
          }`}
        >
          DETAILS
        </button>

        <button
          onClick={() => setActiveTab("reviews")}
          className={`pb-2 ${
            activeTab === "reviews"
              ? "border-b-2 border-black font-semibold"
              : "text-gray-400"
          }`}
        >
          REVIEWS
        </button>

        <button
          onClick={() => setActiveTab("styling")}
          className={`pb-2 ${
            activeTab === "styling"
              ? "border-b-2 border-black font-semibold"
              : "text-gray-400"
          }`}
        >
          STYLING
        </button>
      </div>

      {/* TAB CONTENT */}
      <div className="py-12 space-y-10">

        {/* DETAILS TAB */}
        {activeTab === "details" && (
          <div className="space-y-10">

            {/* DETAILS */}
            <div>
              <h4 className="text-sm font-semibold mb-4">DETAILS</h4>
              <ul className="list-disc pl-5 text-sm space-y-2 leading-relaxed">
                <li>
                  Sleeveless Black Evening Gown Featuring A High Halter Neckline,
                  Sheer Lace Bodice, And A Fitted Ruched Skirt That Extends to Full
                  Length.
                </li>
                <li>Manufacturer: Sotbella</li>
                <li>Product SKU: ST-1422</li>
                <li>Products Type: Dress</li>
                <li>
                  Model Size and Fit: Model height is 5.7 and wearing size (XS)
                </li>
              </ul>
            </div>

            <hr />

            {/* COMPOSITION */}
            <div>
              <h4 className="text-sm font-semibold mb-2">COMPOSITION</h4>
              <p className="text-sm">Nylon Lycra</p>
            </div>

            <hr />

            {/* DELIVERY */}
            <div>
              <h4 className="text-sm font-semibold mb-4">DELIVERY</h4>

              <div className="grid grid-cols-2 gap-y-4 text-sm">
                <span>Standard Delivery</span>
                <span className="text-right">3–5 business days</span>

                <span>Express Delivery</span>
                <span className="text-right">2–3 business days</span>

                <span>Free Returns</span>
                <span className="text-right">Within 7 days</span>
              </div>
            </div>
          </div>
        )}

        {/* REVIEWS TAB */}
        {activeTab === "reviews" && (
          <div className="text-sm text-gray-500">
            No reviews yet.
          </div>
        )}

        {/* STYLING TAB */}
        {activeTab === "styling" && (
          <div className="text-sm text-gray-500">
            Styling content coming soon.
          </div>
        )}

      </div>
    </div>

      {/* RECENTLY VIEWED */}
        <div className="pt-12 relative overflow-hidden">
      <h4 className="text-sm font-semibold mb-6">RECENTLY VIEWED</h4>

      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${index * 25}%)` }}
      >
        {products.map((item, i) => (
          <div key={i} className="min-w-[25%] px-2">
            <div className="group cursor-pointer">
              
              {/* IMAGE */}
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full object-cover transition-opacity duration-300 group-hover:opacity-0"
                />
                <img
                  src={item.hoverImage}
                  alt="hover"
                  className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />
              </div>

              {/* TEXT */}
              <div className="mt-3 text-sm">
                <p className="font-serif uppercase leading-tight">
                  {item.title}
                </p>
                <p className="font-semibold mt-1">{item.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ARROWS */}
      <button
        onClick={() =>
          setIndex((prev) => (prev - 1 + products.length) % products.length)
        }
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-black text-white p-2"
      >
        ‹
      </button>

      <button
        onClick={() =>
          setIndex((prev) => (prev + 1) % products.length)
        }
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-black text-white p-2"
      >
        ›
      </button>
    </div>






    <footer className="bg-[#f4ede6] text-black mt-12">
  <div className="max-w-11/12 mx-auto px-6 py-16">
    
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
      
      <div className="space-y-6">
        <h4 className="uppercase tracking-widest text-sm font-semibold">
          ABOUT
        </h4>
        <p className="text-[15px] leading-relaxed text-gray-800">
          At Sotbella, we believe that fashion is more than just clothing; it's
          an expression of individuality, creativity, and confidence. We are
          not just a fashion brand; we are a celebration of your unique style.
        </p>
      </div>
 
      <div className="space-y-6">
        <h4 className="uppercase tracking-widest text-sm font-semibold">
          QUICK LINKS
        </h4>
        <ul className="space-y-3 text-[15px]">
          <li className="hover:underline cursor-pointer">Track Order</li>
          <li className="hover:underline cursor-pointer">
            Easy Return & Exchanges
          </li>
          <li className="hover:underline cursor-pointer">Contact us</li>
          <li className="hover:underline cursor-pointer">Privacy Policy</li>
          <li className="hover:underline cursor-pointer">
            Return & Exchange Policy
          </li>
          <li className="hover:underline cursor-pointer">Shipping Policy</li>
          <li className="hover:underline cursor-pointer">Terms of Service</li>
        </ul>
      </div>
 
      <div className="space-y-6">
        <h4 className="uppercase tracking-widest text-sm font-semibold">
          COMPANY
        </h4>
        <ul className="space-y-3 text-[15px]">
          <li className="hover:underline cursor-pointer">About us</li>
          <li className="hover:underline cursor-pointer">
            Want to Collaborate with Us ?
          </li>
        </ul>
      </div>
 
      <div className="space-y-6">
        <h4 className="uppercase tracking-widest text-sm font-semibold">
          EXCLUSIVE BENEFITS
        </h4>
        <p className="text-[15px] leading-relaxed text-gray-800">
          Apply for our free membership to receive exclusive deals, news, and
          events.
        </p>
 
        <div className="flex items-center border border-black">
          <input
            type="email"
            placeholder="Enter Your Email"
            className="w-full px-4 py-3 bg-transparent outline-none text-sm"
          />
          <button className="px-4 text-xl">→</button>
        </div>
      </div>

    </div>
 
    <div className="mt-16 flex flex-col md:flex-row items-center justify-between gap-8">
       
      <div className="flex items-center gap-6 text-xl">
        <span className="cursor-pointer">f</span>
        <span className="cursor-pointer">◎</span>
        <span className="cursor-pointer">𝕏</span>
        <span className="cursor-pointer">▶</span>
      </div>
 
      <div className="flex gap-4">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
          alt="Google Play"
          className="h-10"
        />
        <img
          src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
          alt="App Store"
          className="h-10"
        />
      </div>
 
      <p className="text-sm text-gray-700">
        © 2025 Sotbella All rights reserved.
      </p>
    </div>

  </div>
</footer>



    </div>
  );
};

export default About;
