import { AnimatePresence, useScroll, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { FiArrowUp } from "react-icons/fi";

export default function ScrollUp() {
  const [showScrollUp, setShowScrollUp] = useState(false);
  const { scrollY } = useScroll();
  useEffect(() => {
    if (document)
      scrollY.onChange((y) => {
        if (y > 60) return setShowScrollUp(true);
        return setShowScrollUp(false);
      });
  }, [scrollY]);
  return (
    <AnimatePresence>
      {showScrollUp && (
        <motion.button
          whileTap={{ scale: 0.95 }}
          whileHover={{
            color: "rgb(17,17,17)",
            backgroundColor: "rgb(255,255,255)",
          }}
          onClick={() => {
            document.documentElement.scroll({ top: 0, behavior: "smooth" });
          }}
          initial={{ bottom: -50 }}
          animate={{ bottom: 0 }}
          exit={{ bottom: -80 }}
          className="m-4 fixed right-0 p-4 lg:m-8 bg-[#111]  text-white rounded-full shadow-2xl shadow-black"
        >
          <FiArrowUp size={24} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
