import { motion } from "framer-motion";

export default function ContactSection() {
  return (
    <motion.div
      id="contact"
      className="flex flex-row w-full rounded-3xl p-6 bg-[#111]"
    >
      <motion.h3>Contact</motion.h3>
      <motion.h4></motion.h4>
    </motion.div>
  );
}
