import React, { useEffect, useState } from "react";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon, BellIcon } from "@heroicons/react/24/outline";
import { FaShoppingBag, FaUser, FaBars, FaHeart } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import WishlistDrawer from "./WishlistDrawer";
// ✅ WISHLIST CONTEXT
import { useWishlist, WishlistProvider } from "@/context/WishlistContext";
// import WishlistDrawer from "@/components/WishlistDrawer";

const navigation = [
  { name: "NEW IN COLLECTIONS", href: "/", current: false },
  { name: "DRESSES", href: "/about", current: false },
  { name: "SHOP BY CATEGORY", href: "#", current: false },
  { name: "SHOP BY COLOR", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // ✅ WISHLIST STATE
  const { wishlist, setOpenWishlist } = useWishlist();

  // ESC key close search
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setIsSearchOpen(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <>
      {/* NAVBAR */}
      <Disclosure
        as="nav"
        className="bg-black border-b border-white/10 sticky top-0 z-50 p-7"
      >
        {({ open }) => (
          <>
            <div className="mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex h-16 items-center justify-between">

                {/* Mobile menu */}
                <div className="flex sm:hidden">
                  <DisclosureButton className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white/10 hover:text-white">
                    {open ? (
                      <XMarkIcon className="h-6 w-6" />
                    ) : (
                      <Bars3Icon className="h-6 w-6" />
                    )}
                  </DisclosureButton>
                </div>

                {/* Logo */}
                <div className="flex items-center gap-3">
                  <FaBars className="text-white text-xl" />
                  <img
                    className="h-8 w-auto"
                    src="https://sotbella.com/cdn/shop/files/SOTBELLA_1.png?v=1709100428&width=360"
                    alt="Logo"
                  />
                </div>

                {/* Desktop nav */}
                <div className="hidden sm:flex space-x-4">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-gray-300 hover:text-white text-sm font-medium px-3 py-2"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>

                {/* Icons */}
                <div className="flex items-center gap-5 text-white">
                  <CiSearch
                    className="h-6 w-6 cursor-pointer"
                    onClick={() => setIsSearchOpen(true)}
                  />

                  <FaUser className="h-5 w-5 cursor-pointer" />
                  <BellIcon className="h-6 w-6 cursor-pointer" />

                  {/* ❤️ WISHLIST ICON */}
                  <div
  className="relative cursor-pointer"
  onClick={() => setOpenWishlist(true)}
>
  <FaHeart className="h-5 w-5 text-white" />
  {wishlist.length > 0 && (
    <span className="absolute -top-2 -right-2 bg-red-500 text-xs px-1 rounded-full">
      {wishlist.length}
    </span>
  )}
</div>


                  <FaShoppingBag className="h-5 w-5 cursor-pointer" />

                  {/* Profile Menu */}
                  <Menu as="div" className="relative">
                    <MenuButton />
                    <MenuItems className="absolute right-0 mt-2 w-48 bg-gray-800 rounded-md py-1 shadow-lg">
                      <MenuItem>
                        {({ focus }) => (
                          <a
                            href="#"
                            className={classNames(
                              focus && "bg-white/10",
                              "block px-4 py-2 text-sm text-gray-300"
                            )}
                          >
                            Your Profile
                          </a>
                        )}
                      </MenuItem>
                      <MenuItem>
                        {({ focus }) => (
                          <a
                            href="#"
                            className={classNames(
                              focus && "bg-white/10",
                              "block px-4 py-2 text-sm text-gray-300"
                            )}
                          >
                            Settings
                          </a>
                        )}
                      </MenuItem>
                      <MenuItem>
                        {({ focus }) => (
                          <a
                            href="#"
                            className={classNames(
                              focus && "bg-white/10",
                              "block px-4 py-2 text-sm text-gray-300"
                            )}
                          >
                            Sign out
                          </a>
                        )}
                      </MenuItem>
                    </MenuItems>
                  </Menu>
                </div>
              </div>
            </div>

            {/* Mobile nav */}
            <DisclosurePanel className="sm:hidden px-4 pb-3">
              {navigation.map((item) => (
                <DisclosureButton
                  key={item.name}
                  as="a"
                  href={item.href}
                  className="block text-gray-300 hover:text-white py-2"
                >
                  {item.name}
                </DisclosureButton>
              ))}
            </DisclosurePanel>
          </>
        )}
      </Disclosure>

      {/* SEARCH OVERLAY */}
      <div
        className={`
          fixed inset-0 z-[999] bg-black/70 backdrop-blur-sm
          transition-opacity duration-500
          ${isSearchOpen ? "opacity-100" : "opacity-0 pointer-events-none"}
        `}
        onClick={() => setIsSearchOpen(false)}
      >
        <div
          className={`
            fixed right-0 top-0 h-full w-full md:w-[60%] lg:w-[45%]
            bg-white p-8
            transform transition-transform duration-700
            ease-[cubic-bezier(0.16,1,0.3,1)]
            ${isSearchOpen ? "translate-x-0" : "translate-x-full"}
          `}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-xl font-semibold tracking-wide">SEARCH</h2>
            <button
              onClick={() => setIsSearchOpen(false)}
              className="text-2xl"
            >
              ✕
            </button>
          </div>

          <div className="border-b pb-4">
            <input
              autoFocus
              type="text"
              placeholder="Search products..."
              className="w-full text-2xl outline-none placeholder-gray-400"
            />
          </div>

          <div className="mt-10">
            <p className="text-sm text-gray-500 uppercase tracking-widest mb-4">
              Popular Searches
            </p>
            <div className="flex flex-wrap gap-3">
              {["Dresses", "Evening Gowns", "Black Dress", "Party Wear"].map(
                (item) => (
                  <span
                    key={item}
                    className="border px-4 py-2 text-sm cursor-pointer hover:bg-black hover:text-white transition"
                  >
                    {item}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </div>

      {/* ❤️ WISHLIST OFF-CANVAS */}
      <WishlistDrawer />

    </>
  );
};

export default Navbar;
