import { motion } from "framer-motion";
import Link from "next/link";
import { FiExternalLink } from "react-icons/fi";
import { ProjectType } from "../pages/projects";
import ProjectModal from "./ProjectModal";

export default function ProjectCard(props: ProjectType) {
  return (
    <>
      <div className="max-w-sm rounded-xl    ">
        <ProjectModal {...props}>
          <motion.img
            initial={{
              scale: 1,
            }}
            whileHover={{
              scale: 1.2,
            }}
            className="rounded-lg shadow-xl"
            src={props.image[0].url}
            alt={props.name}
          />
        </ProjectModal>

        <Link passHref href={props.demoLink ?? "/#"}>
          <motion.a
            rel="noreferrer"
            target={"_blank"}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center mt-4 py-[10px] pl-5 pr-[18px] text-sm font-bold text-center bg-white text-neutral-900 hover:bg-neutral-50 shadow-sm border  border-neutral-200 transition-colors rounded-full  "
          >
            Try Demo
            <FiExternalLink className="ml-2" />
          </motion.a>
        </Link>
      </div>
    </>
  );
}
