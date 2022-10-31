import { AnimatePresence, motion } from "framer-motion";

export default function Hero() {
  return (
    <AnimatePresence>
      <div className="mb-52 max-md:mb-40">
        <motion.h1
          transition={{ duration: 0.8, delay: 0.8 }}
          initial={{ translateY: -60, opacity: 0 }}
          animate={{ translateY: 0, opacity: 1 }}
          className="text-8xl font-black mt-32 max-md:text-6xl max-md:mt-24"
        >
          Hi I’m Anas Deyra
        </motion.h1>
        <motion.h2
          transition={{ duration: 0.8, delay: 0.8 }}
          initial={{ translateY: 50, opacity: 0 }}
          animate={{ translateY: 0, opacity: 1 }}
          className="text-2xl font-bold mt-10 max-md:text-xl"
        >
          A Web developer specializing in building (and occasionally designing)
          exceptional digital experiences mostly using Next js. Currently, I am
          a part time freelancer
        </motion.h2>
        <motion.div
          transition={{ duration: 0.8, delay: 1.3 }}
          initial={{ translateY: 50, opacity: 0 }}
          animate={{ translateY: 0, opacity: 1 }}
          className="flex flex-row mt-16 justify-center gap-10"
        >
          <motion.button
            whileTap={{ scale: 0.95 }}
            whileHover={{ backgroundColor: "#262626" }}
            className="text-white bg-neutral-900 font-bold rounded-full py-2 px-6 "
          >
            Projects
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.95 }}
            whileHover={{ backgroundColor: "rgba(0,0,0,0.03)" }}
            className="rounded-full font-bold py-2 px-6 "
          >
            Resume
          </motion.button>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
