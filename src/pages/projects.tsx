import { motion } from "framer-motion";
import PROJECTS, { ProjectType } from "../projects";
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.5,
    },
  },
};

const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

export default function projects() {
  return (
    <motion.div
      whileInView="show"
      viewport={{ once: true }}
      variants={container}
      initial="hidden"
      layout
      className="container mb-32 lg:mb-52 max-w-full mt-32 max-md:px-4 max-lg:px-16 px-40 max-xl:px-24"
    >
      <motion.h1
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mb-16 text-center text-5xl font-bold"
      >
        Projects gallery
      </motion.h1>
      <div className="grid-cols-3 space-y-4  lg:space-y-0 lg:grid lg:gap-3 lg:grid-rows-3">
        {PROJECTS.map((props) => (
          <ProjectCard key={props.name} {...props} />
        ))}
      </div>
    </motion.div>
  );
}

function ProjectCard({ isBig, images, name, slug }: ProjectType) {
  return (
    <motion.div
      variants={item}
      className={`w-full cursor-pointer relative rounded-xl lg:shadow-xl shadow-md overflow-hidden ${
        isBig && "col-span-2 row-span-2"
      }`}
    >
      <motion.div className="absolute p-4 z-10 w-full h-full opacity-100 lg:opacity-0 lg:hover:opacity-100 bg-gradient-to-t from-[rgba(17,17,17,0.4)] to-transparent flex flex-col justify-end">
        <h2 className="font-bold text-3xl text-white">{name}</h2>
        <h3 className="font-bold text-md text-neutral-50 ">{slug}</h3>
      </motion.div>
      <img
        src={images[0]}
        alt={name}
        className="object-cover object-center max-lg:aspect-[16/10] w-full h-full"
      />
    </motion.div>
  );
}
