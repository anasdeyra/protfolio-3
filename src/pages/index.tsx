import { AnimatePresence, motion } from "framer-motion";
import Hero from "../components/Hero";
import ProjectCard from "../components/ProjectCard";

export default function Home() {
  return (
    <div className="flex flex-col text-center max-5xl max-md:mx-4 max-lg:mx-16 mx-40 max-xl:mx-24 text-neutral-900 mb-48">
      <Hero />
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
          Featured Projects
        </motion.h2>
        <div className="flex flex-col gap-16 mt-16">
          <ProjectCard />
          <div className="self-end">
            <ProjectCard />
          </div>
          <ProjectCard />
        </div>
      </div>
    </div>
  );
}
