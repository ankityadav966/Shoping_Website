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
import Navbar from "./Navbar";

// const navigation = [
//   { name: "NEW IN COLLECTIONS", href: "#", current: false },
//   { name: "DRESSES", href: "/about", current: false },
//   { name: "SHOP BY CATEGORY", href: "#", current: false },
//   { name: "SHOP BY COLOR", href: "#", current: false },
// ];

 
// const posts = [
//   {
//     id: 1,
//     title: "Boost your conversion rate",
//     href: "#",
//     description:
//       "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
//     date: "Mar 16, 2020",
//     datetime: "2020-03-16",
//     category: { title: "Marketing", href: "#" },
//     author: {
//       name: "Michael Foster",
//       role: "Co-Founder / CTO",
//       href: "#",
//       imageUrl:
//         "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
//     },
//   },
//   {
//     id: 2,
//     title: "How to use search engine optimization to drive sales",
//     href: "#",
//     description:
//       "Optio cum necessitatibus dolor voluptatum provident commodi et. Qui aperiam fugiat nemo cumque.",
//     date: "Mar 10, 2020",
//     datetime: "2020-03-10",
//     category: { title: "Sales", href: "#" },
//     author: {
//       name: "Lindsay Walton",
//       role: "Front-end Developer",
//       href: "#",
//       imageUrl:
//         "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
//     },
//   },
//   {
//     id: 3,
//     title: "Improve your customer experience",
//     href: "#",
//     description:
//       "Cupiditate maiores ullam eveniet adipisci in doloribus nulla minus. Voluptas iusto libero adipisci rem et corporis. Nostrud sint anim sunt aliqua. Nulla eu labore irure incididunt velit cillum quis magna dolore.",
//     date: "Feb 12, 2020",
//     datetime: "2020-02-12",
//     category: { title: "Business", href: "#" },
//     author: {
//       name: "Tom Cook",
//       role: "Director of Product",
//       href: "#",
//       imageUrl:
//         "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
//     },
//   },
// ];

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
              src="https://sotbella.com/cdn/shop/files/asymmetric-cut-out-evening-gown-sotbella-1.webp?v=1756463233"
              alt="Image 2"
              class=" object-cover transition-transform duration-500 hover:scale-120"
            />
          </div>
          <div class="overflow-hidden rounded-xl shadow-lg cursor-pointer ">
            <img
              src="https://sotbella.com/cdn/shop/files/DSC01074_8c0f656f-1917-4a65-8d78-0d45b1df7d2a.jpg?v=1764414021&width=1080"
              alt="Image 2"
              class=" object-cover transition-transform duration-500 hover:scale-120"
            />
          </div>
        </div>
      </div>

      <CarouselPlugin />
      {/* <div className="bg-gray-900 py-2 ">
        <div className="mx-auto max-w-11/12  pb-24">
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16  border-gray-700 pt-10 sm:mt-6 sm:pt-6 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {posts.map((post) => (
              <article
                key={post.id}
                className="flex max-w-xl flex-col items-start justify-between"
              >
                <div className="flex items-center gap-x-4 text-xs">
                  <time dateTime={post.datetime} className="text-gray-400">
                    {post.date}
                  </time>
                  <a
                    href={post.category.href}
                    className="relative z-10 rounded-full bg-gray-800/60 px-3 py-1.5 font-medium text-gray-300 hover:bg-gray-800"
                  >
                    {post.category.title}
                  </a>
                </div>
                <div className="group relative grow">
                  <h3 className="mt-3 text-lg/6 font-semibold text-white group-hover:text-gray-300">
                    <a href={post.href}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </a>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm/6 text-gray-400">
                    {post.description}
                  </p>
                </div>
                <div className="relative mt-8 flex items-center gap-x-4 justify-self-end">
                  <img
                    alt=""
                    src={post.author.imageUrl}
                    className="size-10 rounded-full bg-gray-800"
                  />
                  <div className="text-sm/6">
                    <p className="font-semibold text-white">
                      <a href={post.author.href}>
                        <span className="absolute inset-0" />
                        {post.author.name}
                      </a>
                    </p>
                    <p className="text-gray-400">{post.author.role}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div> */}

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
         <CarouselPlugin />

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
