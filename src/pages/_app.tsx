import "../styles/globals.css";
import type { AppProps } from "next/app";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "../components/Navbar";
import SocialIcons from "../components/SocialIcons";
import ScrollUp from "../components/ScrollUp";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <SocialIcons />
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
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
      <ScrollUp />
    </>
  );
}

export default MyApp;
