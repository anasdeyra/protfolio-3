import { motion, Variants } from "framer-motion";
import Link from "next/link";
import ProjectCard from "./ProjectCard";
import { gql, useQuery } from "@apollo/client";
import { ProjectType } from "../pages/projects";

export default function ProjectsSection() {
  const { data } = useQuery<{
    featuredProjects: FeaturedProject[];
  }>(gql`
    query MyQuery {
      featuredProjects {
        title
        project {
          demoLink
          description
          id
          image {
            url
          }
          slug
          tags
          name
          githubLink
        }
      }
    }
  `);

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

  if (!data) return null;

  const LeftProject = data.featuredProjects.find(
    ({ title }) => title === "left"
  );
  const middleProject = data.featuredProjects.find(
    ({ title }) => title === "middle"
  );
  const rightProject = data.featuredProjects.find(
    ({ title }) => title === "right"
  );

  return (
    <div className="md:mt-16">
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
        className="flex max-xl:flex-col justify-center  max-xl:items-center gap-16 mt-16 md:mt-24"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {LeftProject?.project && (
          <motion.div className="xl:mt-12" variants={item}>
            <ProjectCard {...LeftProject.project} />
          </motion.div>
        )}
        {middleProject?.project && (
          <motion.div variants={item}>
            <ProjectCard {...middleProject.project} />
          </motion.div>
        )}{" "}
        {rightProject?.project && (
          <motion.div className="xl:mt-12" variants={item}>
            <ProjectCard {...rightProject.project} />
          </motion.div>
        )}
      </motion.div>

      <div className="mt-24">
        <Link passHref href={"/projects"}>
          <motion.a
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            whileTap={{ scale: 0.95 }}
            whileHover={{ backgroundColor: "#262626" }}
            className="text-white shadow-xl block mx-auto h-max w-max bg-neutral-900 font-semibold rounded-full py-2 px-6"
          >
            See all
          </motion.a>
        </Link>
      </div>
    </div>
  );
}

interface FeaturedProject {
  title: string;
  project: ProjectType;
}
