import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutSection() {
  return (
    <div>
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
      <motion.div className="mt-12 gap-6 flex flex-col md:flex-row items-center">
        <motion.img
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="aspect-square max-w-xs md:max-w-[400px] md:w-[400px]"
          src="/photo2.png"
        />

        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeIn", delay: 0.3 }}
          className="md:text-2xl text-lg font-semibold text-left"
        >
          Anas Ben Deyra, 20 years old computer science student born and based
          in Tunisia, Have been developing web apps with react for 2 years. And
          I also love cycling and making bad music.
        </motion.h3>
      </motion.div>
    </div>
  );
}
