"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className
}) => {
  const containerRef = React.useRef(null);
  const scrollerRef = React.useRef(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty("--animation-direction", "forwards");
      } else {
        containerRef.current.style.setProperty("--animation-direction", "reverse");
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  return (
    (<div
      ref={containerRef}
      className={cn(
        "scroller relative z-20  max-w-7xl overflow-hidden  [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}>
      <ul
        ref={scrollerRef}
        className={cn(
          " flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
          start && "animate-scroll ",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}>
        {items.map((item, idx) => (
          <li
            className="w-[350px] max-w-full flex flex-col justify-between relative rounded-xl border border-b-0 flex-shrink-0 shadow-lg border-neutral-200 px-8 py-6 md:w-[450px]"
            style={{
              background:
                "linear-gradient(180deg, var(--neutral-100), var(--neutral-200)",
            }}
            key={item.name}>
              <span
                className=" relative z-20 text-sm text-gray-800">
                {item.quote}
              </span>
              <div className="relative z-20 mt-4 flex flex-row items-center">
                <span className="flex flex-col">
                  <span className=" text-md text-transparent bg-clip-text bg-gradient-to-r to-orange-300 via-red-400 from-red-600">
                    {item.name}
                  </span>
                  <span className=" text-sm text-transparent bg-clip-text bg-gradient-to-r from-green-800 via-green-600 to-lime-500">
                    {item.designation}
                  </span>
                </span>
              </div>
          </li>
        ))}
      </ul>
    </div>)
  );
};
