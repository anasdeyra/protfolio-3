import { useState } from "react";
import { motion } from "framer-motion";

export default function Carousel({ images }: { images: string[] }) {
  const [active, setActive] = useState(0);
  return (
    <div id="default-carousel" className="relative" data-carousel="static">
      <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
        <div className="  duration-700 ease-in-out absolute inset-0 transition-all transform translate-x-0 z-20">
          <motion.img
            src={images[active]}
            className="max-w-[786px] object-scale-down absolute block  -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="project"
          />
        </div>
      </div>

      <button
        onClick={() => {
          setActive((state) => {
            if (state === 0) return images.length - 1;
            return state - 1;
          });
        }}
        type="button"
        className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group "
        data-carousel-prev=""
      >
        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-black ">
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-white sm:w-6 sm:h-6 "
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            ></path>
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button
        onClick={() => {
          setActive((state) => {
            if (state === images.length - 1) return 0;
            return state + 1;
          });
        }}
        type="button"
        className="  absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group"
        data-carousel-next=""
      >
        <span className="  inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-black ">
          <svg
            aria-hidden="true"
            className="w-5 h-5  text-white sm:w-6 sm:h-6 "
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            ></path>
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
}
