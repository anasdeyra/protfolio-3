import { motion } from "framer-motion";

export default function WorkBanner() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="bg-[#111] shadow-xl relative w-full p-8 text-left rounded-3xl flex flex-col lg:flex-row gap-4 justify-between items-center"
    >
      <div>
        <h2 className="text-3xl font-bold text-white">
          Need work or a project done ?
        </h2>
        <p className="text-lg text-neutral-300 font-bold mt-2">
          If you’re interested in working together, don’t hesitate!
        </p>
      </div>

      <motion.a
        href={"/#contact"}
        whileTap={{ scale: 0.95 }}
        whileHover={{ scale: 1.1 }}
        className="text-neutral-900 bg-white font-bold rounded-lg py-2 px-6 cursor-pointer"
      >
        Contact
      </motion.a>

      <motion.img
        height={121}
        width={192}
        initial={{ y: -15 }}
        animate={{ y: 15 }}
        transition={{
          repeat: Infinity,
          repeatType: "reverse",
          duration: 1.5,
          delay: 1,
        }}
        className="lg:absolute max-lg:mt-8 lg:left-[60%] lg:-top-1/3"
        src="/handshake2.png"
      />
    </motion.div>
  );
}
