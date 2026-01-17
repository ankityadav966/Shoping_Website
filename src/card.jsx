import * as React from "react";
import { useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// ✅ IMPORT WISHLIST CONTEXT
import { useWishlist } from "@/context/WishlistContext";

export function CarouselPlugin({ data }) {
  const [likedIndex, setLikedIndex] = useState(null);

  // ✅ GLOBAL WISHLIST
  const { wishlist, toggleWishlistItem, setOpenWishlist } = useWishlist();

  const autoplay = React.useRef(
    Autoplay({
      delay: 3500,
      stopOnInteraction: true,
    })
  );

  return (
    <div className="mx-auto w-[90%] my-12">
      <Carousel
        opts={{
          loop: true,
          duration: 25,
        }}
        plugins={[autoplay.current]}
        onMouseEnter={() => autoplay.current.stop()}
        onMouseLeave={() => autoplay.current.play()}
      >
        <CarouselContent>
          {data.map((item, index) => {
            const isLiked = wishlist.some(
              (w) => w.name === item.name
            );

            return (
              <CarouselItem
                key={index}
                className="basis-full sm:basis-1/2 lg:basis-1/3"
              >
                {/* IMAGE */}
                <div
                  className="relative aspect-[3/4] bg-[#f6f6f6] overflow-hidden cursor-pointer"
                  onClick={() => {
                    setLikedIndex(index);           // animation
                    toggleWishlistItem(item);      // global wishlist
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-contain"
                  />

                  {/* BIG HEART ANIMATION */}
                  {likedIndex === index && (
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <span className="heart-burst">❤️</span>
                    </div>
                  )}
                </div>

                {/* INFO + SMALL LIKE */}
                <div className="mt-3 flex items-start justify-between text-sm">
                  <div>
                    <p className="font-serif leading-tight">{item.name}</p>
                    <p className="font-semibold mt-1">{item.price}</p>
                  </div>

                  {/* SMALL HEART */}
                  <button
                    onClick={() => toggleWishlistItem(item)}
                    className="text-xl transition-transform active:scale-125"
                  >
                    {isLiked ? "❤️" : "♡"}
                  </button>
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>

        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
