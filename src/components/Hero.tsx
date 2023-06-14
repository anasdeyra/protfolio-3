import { AnimatePresence, motion } from "framer-motion";
import { HeroReturn } from "../pages";

export default function Hero({
  heroSection: { heading, subHeading },
}: HeroReturn) {
  return (
    <AnimatePresence>
      <div>
        <motion.h1
          transition={{ duration: 0.8, delay: 0.8 }}
          initial={{ translateY: -60, opacity: 0 }}
          animate={{ translateY: 0, opacity: 1 }}
          className="text-8xl font-black mt-44 max-md:text-6xl max-md:mt-24"
        >
          {heading}
        </motion.h1>
        <motion.h2
          transition={{ duration: 0.8, delay: 0.8 }}
          initial={{ translateY: 50, opacity: 0 }}
          animate={{ translateY: 0, opacity: 1 }}
          className="text-2xl font-bold mt-10 max-md:text-xl"
        >
          {subHeading}
        </motion.h2>
        <motion.div
          transition={{ duration: 0.8, delay: 1.3 }}
          initial={{ translateY: 50, opacity: 0 }}
          animate={{ translateY: 0, opacity: 1 }}
          className="flex flex-row mt-16 justify-center gap-10"
        >
          <motion.a
            href="/projects"
            whileTap={{ scale: 0.95 }}
            whileHover={{ backgroundColor: "#262626" }}
            className="text-white bg-neutral-900 font-bold rounded-full py-2 px-6 "
          >
            Projects
          </motion.a>
          <motion.a
            href="/resume.pdf"
            whileTap={{ scale: 0.95 }}
            whileHover={{ backgroundColor: "rgba(0,0,0,0.03)" }}
            className="rounded-full font-bold py-2 px-6 "
          >
            Resume
          </motion.a>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
