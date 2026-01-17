import { useState } from "react";
import { useWishlist } from "../context/WishlistContext";
import { FaTrash } from "react-icons/fa";

const WishlistDrawer = () => {
  const { wishlist, openWishlist, setOpenWishlist } = useWishlist();
  const [quantities, setQuantities] = useState({});
  const increaseQty = (index) => {
    setQuantities((prev) => ({
      ...prev,
      [index]: (prev[index] || 1) + 1,
    }));
  };

  const decreaseQty = (index) => {
    setQuantities((prev) => ({
      ...prev,
      [index]: Math.max(1, (prev[index] || 1) - 1),
    }));
  };

  const getTotalPrice = () => {
    return wishlist.reduce((total, item, index) => {
      const qty = quantities[index] || 1;
      const price = Number(item.price.replace(/[^\d]/g, ""));
      return total + price * qty;
    }, 0);
  };

  return (
    <>
      {/* BACKDROP */}
      <div
        className={`fixed inset-0 z-[9998] bg-black/40 backdrop-blur-md
        transition-opacity duration-500
        ${openWishlist ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        onClick={() => setOpenWishlist(false)}
      />

      {/* DRAWER */}
      <div
        className={`fixed right-0 top-0 z-[9999] h-full w-[440px] bg-white
        transform transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
        ${openWishlist ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* HEADER */}
        <div className="px-8 py-6 border-b flex justify-between items-center">
          <h2 className="text-xl font-serif tracking-wide">
            My Wishlist
            <span className="ml-2 text-gray-400 text-sm">
              ({wishlist.length})
            </span>
          </h2>

          <button
            onClick={() => setOpenWishlist(false)}
            className="text-2xl leading-none hover:rotate-90 transition"
          >
            ×
          </button>
        </div>

        {/* BODY */}
        <div className="px-8 py-6 space-y-8 overflow-y-auto h-[calc(100%-200px)]">
          {wishlist.length === 0 ? (
            <p className="text-center text-gray-500 text-sm mt-20">
              Your wishlist is currently empty
            </p>
          ) : (
            wishlist.map((item, i) => (
              <div
                key={i}
                className="flex gap-6 pb-6 border-b last:border-none"
              >
                {/* IMAGE */}
                <div className="w-28 h-36 bg-[#f7f7f7] flex items-center justify-center">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="max-h-full object-contain"
                  />
                </div>

                {/* INFO */}
                <div className="flex-1 space-y-3">
                  <p className="font-serif text-sm uppercase leading-snug">
                    {item.name}
                  </p>

                  <p className="text-sm font-semibold">{item.price}</p>

                  <div className="flex items-center gap-4 pt-2">
                    <div className="flex items-center gap-4 pt-2">
                      <div className="flex items-center border border-black">
                        <button
                          onClick={() => decreaseQty(i)}
                          className="px-3 py-1 text-lg hover:bg-black hover:text-white transition"
                        >
                          −
                        </button>

                        <span className="px-4 text-sm">
                          {quantities[i] || 1}
                        </span>

                        <button
                          onClick={() => increaseQty(i)}
                          className="px-3 py-1 text-lg hover:bg-black hover:text-white transition"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <button className="text-gray-400 hover:text-black transition">
                      <FaTrash />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* FOOTER */}
        {wishlist.length > 0 && (
          <div className="px-8  border-t space-y-4">
            <div className="px-8 py-6 border-t space-y-4">
              <div className="flex justify-between items-center text-sm font-semibold">
                <span>Total</span>
                <span>Rs. {getTotalPrice().toLocaleString()}</span>
              </div>

              <button className="w-full bg-black text-white py-3 tracking-widest text-sm">
                PROCEED TO CART
              </button>

              <button
                onClick={() => setOpenWishlist(false)}
                className="block mx-auto text-sm underline text-gray-600"
              >
                Continue Shopping
              </button>
            </div>

            <button
              onClick={() => setOpenWishlist(false)}
              className="block mx-auto text-sm underline text-gray-600"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default WishlistDrawer;
