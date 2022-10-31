import "../styles/globals.css";
import type { AppProps } from "next/app";
import { AnimatePresence, motion, useScroll } from "framer-motion";
import Navbar from "../components/Navbar";
import SocialIcons from "../components/SocialIcons";
import { useEffect, useState } from "react";
import { FiArrowUp } from "react-icons/fi";

function MyApp({ Component, pageProps }: AppProps) {
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
    <>
      <Navbar />
      <Component {...pageProps} />
      <SocialIcons />
      <AnimatePresence>
        <motion.div
          transition={{ duration: 0.3 }}
          initial={{ opacity: 0, scale: 1 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg"
          style={{
            position: "fixed",
            height: "100vh",
            width: "100vw",
            zIndex: -1,
            top: 0,
            left: 0,
            backgroundSize: "450px 450px",
          }}
        />
      </AnimatePresence>
      <AnimatePresence>
        {showScrollUp && (
          <motion.button
            whileTap={{ scale: 0.95 }}
            whileHover={{ color: "#111", backgroundColor: "white" }}
            onClick={() => {
              document.documentElement.scroll({ top: 0, behavior: "smooth" });
            }}
            initial={{ bottom: -50 }}
            animate={{ bottom: 0 }}
            exit={{ bottom: -80 }}
            className="m-4 fixed right-0 p-4 bg-[#111]  text-white rounded-full shadow-2xl shadow-black"
          >
            <FiArrowUp size={24} />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}

export default MyApp;
