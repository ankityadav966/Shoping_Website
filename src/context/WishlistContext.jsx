import React, { createContext, useContext, useState } from "react";

const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);
  const [openWishlist, setOpenWishlist] = useState(false);

  // ❤️ ADD / REMOVE (toggle)
  const toggleWishlistItem = (item) => {
    setWishlist((prev) => {
      const exists = prev.find((p) => p.name === item.name);
      if (exists) {
        return prev.filter((p) => p.name !== item.name);
      }
      return [...prev, item];
    });
  };

  // 🗑️ REMOVE BY INDEX (for drawer)
  const removeFromWishlist = (index) => {
    setWishlist((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        toggleWishlistItem,
        removeFromWishlist, // ✅ IMPORTANT
        openWishlist,
        setOpenWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => useContext(WishlistContext);
