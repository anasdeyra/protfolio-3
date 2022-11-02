import { motion } from "framer-motion";
import Link from "next/link";
import { BsGithub } from "react-icons/bs";
import { HiExternalLink } from "react-icons/hi";

export default function ProjectCard() {
  return (
    <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md  ">
      <a href="#">
        <img className="rounded-t-lg" src="/projects/1.png" alt="" />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
            Noteworthy technology acquisitions 2021
          </h5>
        </a>
        <p className="mb-6 font-medium text-gray-700 ">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p>
        <div className="flex justify-between">
          <Link passHref href={"/"}>
            <motion.a className="inline-flex items-center py-2 px-3 text-sm font-bold text-center text-neutral-700 bg-neutral-200 hover:bg-neutral-100 rounded-full  ">
              Try Demo
              <HiExternalLink className="ml-2" />
            </motion.a>
          </Link>
          <Link passHref href={"/"}>
            <motion.a className="inline-flex items-center py-2 px-3 text-sm font-bold text-center text-neutral-700 bg-neutral-200 hover:bg-neutral-100 rounded-full  ">
              Source
              <BsGithub className="ml-2" />
            </motion.a>
          </Link>
        </div>
      </div>
    </div>
  );
}
