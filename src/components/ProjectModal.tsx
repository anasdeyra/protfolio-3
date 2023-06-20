import * as Dialog from "@radix-ui/react-dialog";
import { ProjectType } from "../pages/projects";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import Image from "next/image";

export default function ProjectModal({
  name,
  image,
  children,
  description,
  demoLink,
  githubLink,
}: {
  children: React.ReactNode;
} & ProjectType) {
  return (
    <Dialog.Root>
      <Dialog.Trigger>{children}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="DialogOverlay" />
        <Dialog.Content className="DialogContent">
          <Carousel
            showThumbs={false}
            showIndicators={false}
            showStatus={false}
            renderArrowNext={(clickHandler, hasNext) =>
              hasNext ? (
                <button
                  onClick={clickHandler}
                  className=" bg-white p-1 cursor-pointer absolute top-1/2 z-10 right-0 mx-2 text-neutral-900 hover:bg-white hover:text-neutral-900 rounded-full"
                >
                  <FiChevronRight size={20} />
                </button>
              ) : null
            }
            renderArrowPrev={(clickHandler, hasPrev) =>
              hasPrev ? (
                <button
                  onClick={clickHandler}
                  className=" bg-white p-1 cursor-pointer absolute top-1/2 z-10 mx-2 text-neutral-900 hover:bg-white hover:text-neutral-900 rounded-full"
                >
                  <FiChevronLeft size={20} />
                </button>
              ) : null
            }
          >
            {image.map(({ url }, i) => (
              <Image
                layout="fill"
                key={i}
                src={url}
                alt={name + " " + (i + 1)}
                className="aspect-[16/10] w-full object-cover mx-auto object-top"
              />
            ))}
          </Carousel>
          <div className="p-4 mt-8">
            {" "}
            <div className="flex gap-4 justify-center items-center mb-8">
              <Link passHref href={demoLink ?? "/#"}>
                <motion.a
                  rel="noreferrer"
                  target={"_blank"}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center py-[10px] pl-5 pr-[18px] text-xs md:text-sm font-semibold text-center text-white bg-neutral-900 hover:bg-neutral-800 transition-colors rounded-full  shadow-md"
                >
                  Try Demo
                  <FiExternalLink className="ml-2" />
                </motion.a>
              </Link>
              {githubLink ? (
                <Link passHref href={githubLink}>
                  <motion.a
                    rel="noreferrer"
                    target={"_blank"}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center py-[10px] pl-5 pr-[18px] text-xs md:text-sm font-bold text-center bg-white text-neutral-900 hover:bg-neutral-50 shadow-sm border  border-neutral-200 transition-colors rounded-full  "
                  >
                    Source
                    <FiGithub className="ml-2" />
                  </motion.a>
                </Link>
              ) : (
                <button className="inline-flex items-center py-[10px] pl-5 pr-[18px] text-xs md:text-sm font-medium text-center bg-neutral-100 text-neutral-300  cursor-not-allowed transition-colors rounded-full  ">
                  Code unavailable
                </button>
              )}
            </div>
            <h2 className="font-bold text-2xl">{name}</h2>
            <p className="mt-2 font-medium">{description}</p>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
