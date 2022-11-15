import { motion, Variants } from "framer-motion";
import Link from "next/link";
import PROJECTS from "../projects";
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
    <div className="md:mt-48">
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
        className="flex max-xl:flex-col  max-xl:items-center gap-16 mt-16 md:mt-24"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <motion.div className="xl:mt-12" variants={item}>
          <ProjectCard {...PROJECTS[3]} />
        </motion.div>
        <motion.div variants={item}>
          <ProjectCard {...PROJECTS[1]} />
        </motion.div>
        <motion.div className="xl:mt-12" variants={item}>
          <ProjectCard {...PROJECTS[2]} />
        </motion.div>
      </motion.div>

      <div className="mt-24">
        <Link passHref href={"/projects"}>
          <motion.a
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            whileTap={{ scale: 0.95 }}
            whileHover={{ backgroundColor: "#262626" }}
            className="text-white  shadow-xl  bg-neutral-900 font-bold rounded-full py-2 px-6"
          >
            See all
          </motion.a>
        </Link>
      </div>
    </div>
  );
}
