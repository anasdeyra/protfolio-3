import { motion } from "framer-motion";
import Link from "next/link";
import { BsGithub, BsLink45Deg as BsLink } from "react-icons/bs";

export default function ProjectCard() {
  return (
    <motion.div className="flex flex-col items-center bg-white rounded-lg shadow-md md:flex-row md:max-w-xl">
      <img
        className="object-cover object-top w-full h-52 rounded-t-lg md:h-auto md:w-60 md:rounded-none md:rounded-l-lg"
        src="/projects/1.png"
        alt=""
      />
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
          Noteworthy technology acquisitions 2021
        </h5>
        <p className="mb-3 font-normal text-gray-700 ">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p>
        <div className="flex flex-row gap-6  mt-4">
          <Link passHref href={"/"}>
            <motion.a
              initial={false}
              whileTap={{ scale: 0.95 }}
              whileHover={{ backgroundColor: "#262626" }}
              className="text-white bg-neutral-900 font-bold rounded-full py-2 px-4 w-full flex justify-center"
            >
              <BsGithub />
            </motion.a>
          </Link>
          <Link passHref href={"/"}>
            <motion.a
              initial={false}
              whileTap={{ scale: 0.95 }}
              whileHover={{ backgroundColor: "#262626" }}
              className="text-white bg-neutral-900 font-bold rounded-full py-2 px-4 w-full flex justify-center"
            >
              <BsLink />
            </motion.a>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
