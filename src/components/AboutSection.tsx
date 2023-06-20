import { motion } from "framer-motion";
import InfoSegments from "./InfoSegments";
import { AboutReturn } from "../pages";

export default function AboutSection(props: AboutReturn) {
  return (
    <div id="about">
      <motion.h2
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        variants={{
          visible: { opacity: 1 },
          hidden: { opacity: 0 },
        }}
        className="font-bold text-5xl max-md:text-3xl"
      >
        About
      </motion.h2>
      <motion.div className="mt-16 md:mt-24 gap-6 flex flex-col lg:flex-row items-center lg:items-start mx-auto w-fit">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.3 }}
        >
          <motion.img
            animate={{ y: [0, -40, 0] }} // Target states for infinite bounce animation
            transition={{ yoyo: Infinity, duration: 4.4, delay: 1.3 }} // Transition options for infinite bounce animation
            className="aspect-square max-w-xs md:max-w-[400px] md:w-[400px]"
            src="/anasdeyra.webp"
            alt="Anas Deyra"
          />
        </motion.div>

        <InfoSegments {...props} />
      </motion.div>
    </div>
  );
}
