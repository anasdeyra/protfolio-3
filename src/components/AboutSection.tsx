import { motion } from "framer-motion";
import InfoSegments from "./InfoSegments";

export default function AboutSection() {
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
      <motion.div className="mt-16 md:mt-24 gap-6 flex flex-col lg:flex-row items-center lg:items-start">
        <motion.img
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="aspect-square max-w-xs md:max-w-[400px] md:w-[400px]"
          src="/photo2.png"
        />

        <InfoSegments />
      </motion.div>
    </div>
  );
}
