import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import trsImage from "./assets/TRS01154.JPG";
import secondimages from './assets/TRS01155.JPG'

export function CarouselPlugin() {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: false })
  );
  const userdummydata = [
    { image: trsImage, name: "TRS01154" },
    { image: secondimages, name: "TRS01154" },
    { image: trsImage, name: "TRS01154" },
    { image: secondimages, name: "TRS01154" },
    { image: trsImage, name: "TRS01154" },
    { image: secondimages, name: "TRS01154" },
  ];

  return (
    <div className="mx-auto w-[90%] h-[55vh] mb-9">
      <Carousel
        className="w-full h-full ] "
        plugins={[plugin.current]}
        onMouseEnter={() => plugin.current.stop()}
        onMouseLeave={() => plugin.current.play()}
      >
        <CarouselContent>
          {userdummydata.map((_, index) => {
            if (index % 3 !== 0) return null;

            return (
              <CarouselItem key={index}>
                <div className="grid grid-cols-3 gap-4">
                  {userdummydata.slice(index, index + 3).map((i, idx) => (
                    <Card
                      key={idx}
                      className=" border-0 bg-transparent h-[55vh] w-full "
                    >
                      <div className="relative h-full w-full group overflow-hidden">
                        {/* Image */}
                        <img
                          src={i.image}
                          alt={i.name}
                          className="
        h-full w-full object-cover
        transition-transform duration-700 ease-out
        group-hover:scale-110
      "
                        />

                        {/* Dark vignette (proper focus) */}
                        <div
                          className="
      pointer-events-none
      absolute inset-0
      bg-gradient-to-t
      from-black/60 via-black/30 to-transparent
    "
                        />

                        {/* Image name */}
                        <div className="absolute bottom-4 left-4">
                          <p className="text-white text-base font-semibold tracking-wide">
                            {i.name}
                          </p>
                        </div>
                      </div>
                    </Card>
                  ))}
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
