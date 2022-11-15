import { motion } from "framer-motion";
import Link from "next/link";
import { BsGithub } from "react-icons/bs";
import { HiExternalLink } from "react-icons/hi";
import { ProjectType } from "../projects";

export default function ProjectCard({
  name,
  slug,
  images,
  demoUrl,
  repoUrl,
  description,
}: ProjectType) {
  return (
    <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md  ">
      <a href={`/projects/${name}`}>
        <motion.img
          initial={{
            scale: 1,
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0,
          }}
          whileHover={{
            scale: 1.1,
            borderBottomLeftRadius: 8,
            borderBottomRightRadius: 8,
          }}
          className="rounded-t-lg"
          src={images[0]}
          alt={slug}
        />
      </a>
      <div className="p-5">
        <a href={`/projects/${name}`}>
          <h5 className="mb-2 hover:underline text-2xl font-bold tracking-tight text-gray-900 ">
            {name}
          </h5>
        </a>
        <p className="mb-6 font-medium text-gray-700 ">{description}</p>
        <div className="flex justify-between">
          <Link passHref href={demoUrl ?? "#"}>
            <motion.a
              rel="noreferrer"
              target={"_blank"}
              className="inline-flex items-center py-2 px-3 text-sm font-bold text-center text-neutral-700 bg-neutral-200 hover:bg-neutral-100 rounded-full  "
            >
              Try Demo
              <HiExternalLink className="ml-2" />
            </motion.a>
          </Link>
          <Link passHref href={repoUrl}>
            <motion.a
              rel="noreferrer"
              target={"_blank"}
              className="inline-flex items-center py-2 px-3 text-sm font-bold text-center text-neutral-700 bg-neutral-200 hover:bg-neutral-100 rounded-full  "
            >
              Source
              <BsGithub className="ml-2" />
            </motion.a>
          </Link>
        </div>
      </div>
    </div>
  );
}
