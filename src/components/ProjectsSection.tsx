import { motion, Variants } from "framer-motion";
import ProjectCard from "./ProjectCard";

export default function ProjectsSection() {
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
        delayChildren: 0.3,
      },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };
  return (
    <div>
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="font-bold text-5xl max-md:text-3xl"
      >
        Featured Projects
      </motion.h2>
      <motion.div
        className="flex flex-col gap-16 mt-16"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <motion.div className="self-start" variants={item}>
          <ProjectCard />
        </motion.div>
        <motion.div className="self-end" variants={item}>
          <ProjectCard />
        </motion.div>
        <motion.div className="self-start" variants={item}>
          <ProjectCard />
        </motion.div>
      </motion.div>
      <motion.button
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        whileTap={{ scale: 0.95 }}
        whileHover={{ backgroundColor: "#262626" }}
        className="text-white mt-24 shadow-xl  bg-neutral-900 font-bold rounded-full py-2 px-6 "
      >
        See ll
      </motion.button>
    </div>
  );
}
