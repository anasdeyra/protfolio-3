import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import Carousel from "../../components/Carousel";
import PROJECTS, { ProjectType } from "../../projects";
import { motion } from "framer-motion";
import { BsGithub } from "react-icons/bs";
import { HiExternalLink } from "react-icons/hi";

export default function Project({ project }: { project: ProjectType }) {
  return (
    <>
      <Head>
        <title>Anas Deyra: Projects - {project.name}</title>
        <meta name="description" content={project.description} />
        <meta property="og:image" content={project.images[0]} />
        <meta name={project.description} />
        <meta name="twitter:description" content={project.description} />
        <meta
          name="twitter:title"
          content={`Anas Deyra: Projects - ${project.name}`}
        />
        <meta name="twitter:image" content={project.images[0]} />
      </Head>
      <div className="container mb-32 lg:mb-52 max-w-full mt-32 max-md:px-4 max-lg:px-16 px-40 max-xl:px-24">
        <h1 className=" text-3xl md:text-5xl font-bold text-center">
          {project.name}
        </h1>
        <h2 className="mt-4  text-lg md:text-2xl font-bold text-center text-neutral-600">
          {project.slug}
        </h2>
        <div className="mt-6 mb-12 flex flex-row gap-4 justify-center">
          {" "}
          <motion.a
            href={project.demoUrl ?? "/#"}
            rel="noreferrer"
            target={"_blank"}
            whileTap={{ scale: 0.95 }}
            whileHover={{ backgroundColor: "#262626" }}
            className="inline-flex items-center text-white bg-neutral-900 font-bold rounded-full py-2 px-6 "
          >
            Try demo <HiExternalLink className="ml-2" />
          </motion.a>{" "}
          <motion.a
            href={project.repoUrl ?? "/#"}
            rel="noreferrer"
            target={"_blank"}
            whileTap={{ scale: 0.95 }}
            whileHover={{ backgroundColor: "#262626" }}
            className="inline-flex items-center text-white bg-neutral-900 font-bold rounded-full py-2 px-6 "
          >
            Source <BsGithub className="ml-2" />
          </motion.a>
        </div>
        <Carousel images={project.images} />
        <h3 className="mt-8 mb-12 text-md md:text-xl font-medium text-start ">
          {project.description}
        </h3>
      </div>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = () => {
  const names = PROJECTS.map(({ name }) => ({ params: { name } }));
  return { paths: names, fallback: "blocking" };
};

export const getStaticProps: GetStaticProps<
  { project: ProjectType },
  { name: string },
  any
> = ({ params }) => {
  const project = PROJECTS.find((p) => p.name === params?.name);

  if (project) return { props: { project } };
  return { notFound: true };
};
