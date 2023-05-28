import { motion } from "framer-motion";
import { useQuery, gql } from "@apollo/client";
import { useEffect, useState } from "react";

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
  const { data } = useQuery<{ projects: ProjectType[] }>(gql`
    query Projects {
      projects(orderBy: rank_ASC) {
        demoLink
        description
        githubLink
        id
        name
        slug
        tags
        image {
          url
        }
      }
    }
  `);

  const [projects, setProjects] = useState<ProjectType[]>([]);

  useEffect(() => {
    if (!data) return;
    setProjects(data.projects);
  }, [data]);

  if (projects.length === 0) return null;
  return (
    <motion.div
      whileInView="show"
      viewport={{ once: true }}
      initial="hidden"
      layout
      variants={container}
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

      <motion.div className="grid-cols-3 space-y-4  lg:space-y-0 lg:grid lg:gap-3 lg:grid-rows-3">
        {projects.map((props, i) => (
          <div
            className={`grid ${
              (i + 1) % 2 === 0 ? "row-span-2 col-span-2" : ""
            }`}
          >
            <ProjectCard key={i} {...props} />
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
}

function ProjectCard({ image, name, slug }: ProjectType) {
  return (
    <motion.div
      variants={item}
      className={`w-full cursor-pointer relative rounded-xl lg:shadow-xl shadow-md overflow-hidden`}
    >
      <motion.a
        href={`/projects/${slug}`}
        className="transition-all absolute p-4 z-10 w-full h-full opacity-100 lg:opacity-0 lg:hover:opacity-100 bg-gradient-to-t from-[rgba(17,17,17,0.4)] to-transparent flex flex-col justify-end"
      >
        <h2 className="font-bold text-xl md:text-3xl text-white">{name}</h2>
        <h3 className="font-bold text-sm md:text-md text-white ">{slug}</h3>
      </motion.a>
      <img
        src={image[0].url}
        alt={name}
        className="object-cover object-center max-lg:aspect-[16/10] w-full h-full"
      />
    </motion.div>
  );
}

export interface ProjectType {
  demoLink: string;
  description: string;
  githubLink: string;
  id: string;
  name: string;
  slug: string;
  tags: string[];
  image: {
    url: string;
  }[];
}
