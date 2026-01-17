import React from "react";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Bars3Icon, XMarkIcon, BellIcon } from "@heroicons/react/24/outline";
import { CarouselPlugin } from "../card"; 
import "../../src/App.css";
import { FaShoppingBag } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { FaBars } from "react-icons/fa"; 
import { Button } from "../components/ui/button"; 
import firstimg from "../assets/TRS01154.JPG";
import secimage from "../assets/TRS01155.JPG";
import threeimage from "../assets/TRS01151.JPG";
import Navbar from "./Navbar";
 







// Carousel 1 images
import TRS00960 from "../assets/TRS00960.JPG";
import TRS00961 from "../assets/TRS00961.JPG";
import TRS01024 from "../assets/TRS01024.JPG";
import TRS01025 from "../assets/TRS01025.JPG";
import TRS01026 from "../assets/TRS01026.JPG";
import TRS01027 from "../assets/TRS01027.JPG";

// Carousel 2 images
import TRS01028 from "../assets/TRS00825.JPG";
import TRS01060 from "../assets/TRS00930.JPG";
import TRS01061 from "../assets/TRS00911.JPG";
import TRS01064 from "../assets/TRS00907.JPG";
import TRS01079 from "../assets/TRS00904.JPG";
import TRS01083 from "../assets/TRS00902.JPG";


// 🔥 FIRST CAROUSEL
const carouselOneImages = [
  {
    image: TRS00960,
    name: "Black Lace Evening Gown",
    price: "Rs. 5,999",
  },
  {
    image: TRS00961,
    name: "Elegant Halter Neck Dress",
    price: "Rs. 5,799",
  },
  {
    image: TRS01024,
    name: "Ruched Party Wear Gown",
    price: "Rs. 6,199",
  },
  {
    image: TRS01025,
    name: "Classic Black Evening Dress",
    price: "Rs. 5,499",
  },
  {
    image: TRS01026,
    name: "Designer Draped Gown",
    price: "Rs. 5,899",
  },
  {
    image: TRS01027,
    name: "Luxury Social Wear Gown",
    price: "Rs. 6,299",
  },
];

// 🔥 SECOND CAROUSEL
const carouselTwoImages = [
  {
    image: TRS01028,
    name: "Modern Halter Neck Gown",
    price: "Rs. 5,999",
  },
  {
    image: TRS01060,
    name: "Evening Glam Party Dress",
    price: "Rs. 6,199",
  },
  {
    image: TRS01061,
    name: "Classic Black Draped Dress",
    price: "Rs. 5,699",
  },
  {
    image: TRS01064,
    name: "Premium Designer Gown",
    price: "Rs. 6,499",
  },
  {
    image: TRS01079,
    name: "Luxury Social Moment Dress",
    price: "Rs. 6,299",
  },
  {
    image: TRS01083,
    name: "Signature Evening Wear Gown",
    price: "Rs. 6,599",
  },
];

export default function Home() {
  return (
    <div className="navbarmain ">
        <Navbar/>
      
      <div className="w-full flex justify-center items-center bg-black text-white p-4 text-center h-[84vh]   ">
        <div>
          <h1 className="text-4xl mt-2">20% OFF SITEWIDE</h1>
          <p className="mt-2 text-2xl font-medium">End of Year Sale</p>
          <Button className="bg-transparent border  mt-5 px-12 py-6 uppercase ">
            Shop Now
          </Button>
        </div>
      </div>

      <div>
        <h3 className="text-center uppercase text-3xl font-bold mt-10 mb-12 ">
          Trendy Edge
        </h3>
      </div>

      <div class=" flex items-center justify-center   p-4">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
          <div class="overflow-hidden rounded-xl shadow-lg cursor-pointer ">
            <img
              src={firstimg}
              alt="Image 1"
              class="  object-cover transition-transform duration-500 hover:scale-120"
            />
          </div>
          <div class="overflow-hidden rounded-xl shadow-lg  cursor-pointer">
            <img
              src={secimage}
              alt="Image 2"
              class=" object-cover transition-transform duration-500 hover:scale-120"
            />
          </div>
          <div class="overflow-hidden rounded-xl shadow-lg cursor-pointer ">
            <img
              src={threeimage}
              alt="Image 2"
              class=" object-cover transition-transform duration-500 hover:scale-120"
            />
          </div>
        </div>
      </div>
 {/* First Carousel */}
      <CarouselPlugin data={carouselOneImages} />

      {/* Featured Section */}
      <h2 className="text-center text-4xl font-semibold my-10">
        Fashion Fusion
      </h2>
  
      <div className="mt-5">
        <p className="text-center text-2xl mb-3 font-bold">FEATURED IN</p>
        <div className="flex justify-center border-t-2 border-black  border-b-2   gap-5">
          <img
            className="h-25 w-35 object-center mt-12 mb-12 duration-100 hover:scale-110 "
            src="https://sotbella.com/cdn/shop/files/2560px-Grazia-Logo_svg.png?v=1699105395&width=535"
            alt=""
          />
          <img
            className="h-30 w-35 object-center mt-12 mb-12 duration-100 hover:scale-110"
            src="https://sotbella.com/cdn/shop/files/logo_de89e86a-95d8-404d-ab90-18c819eb089c.png?v=1705148369&width=535"
            alt=""
          />
          <img
            className="h-25 w-35 object-center mt-12 mb-12 duration-100 hover:scale-110"
            src="https://sotbella.com/cdn/shop/files/Elle_magazine_logo.jpg?v=1721206639&width=535"
            alt=""
          />
        </div>
        <p className="text-center text-4xl mb-3 font-semibold mt-3">
          Fashion Fusion
        </p>
      </div>
    {/* Second Carousel */}
      <CarouselPlugin data={carouselTwoImages} />


      <div className="text-center text-3xl mt-10 ">FAQs</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-12 p-5">
   
  <div className="flex flex-col justify-center space-y-4 min-h-full">
    <h4 className="text-3xl md:text-4xl font-serif font-semibold tracking-wide">
      for a better TOMORROW
    </h4>

    <p className="text-lg md:text-xl font-sans text-gray-700 leading-relaxed">
      Create Your Fashion for a Better Tomorrow — Where Sustainability
      Meets Style and Every Choice Shapes the Future.
    </p>
  </div>
 
  <div className="flex flex-col justify-start ">
    <Accordion
      type="single"
      collapsible
      className="w-full"
      defaultValue="item-1"
    >
      <AccordionItem value="item-1" className="border-b border-gray-200">
        <AccordionTrigger className="text-2xl md:text-3xl font-sans font-semibold hover:no-underline">
          How can I verify my order?
        </AccordionTrigger>
        <AccordionContent className="pt-2">
          <p className="font-serif text-[18px] leading-relaxed text-gray-800">
            Once your order is placed, you’ll receive an email and SMS with the order number. We’ll notify you when it’s shipped, and tracking info will be available in your Account on our website.
          </p>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-2" className="border-b border-gray-200">
        <AccordionTrigger className="text-2xl md:text-3xl font-sans font-semibold hover:no-underline">
          How can I track my order?
        </AccordionTrigger>
        <AccordionContent className="pt-2">
          <p className="font-serif text-[18px] leading-relaxed text-gray-800">
            You can track your order in your Sotbella Account. Log in, go to the “Account” tab, select your order, and view its current status and tracking number if shipped.
          </p>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-3" className="border-b border-gray-200">
        <AccordionTrigger className="text-2xl md:text-3xl font-sans font-semibold hover:no-underline">
          COD & Prepaid Available?
        </AccordionTrigger>
        <AccordionContent className="pt-2">
          <p className="font-serif text-[18px] leading-relaxed text-gray-800">
            Yes! Cash on Delivery is available on all products with free shipping. Prepaid orders also enjoy an additional discount.
          </p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  </div>

</div>






<footer className="bg-[#f4ede6] text-black">
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
}
