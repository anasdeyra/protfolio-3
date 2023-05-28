import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import Carousel from "../../components/Carousel";
import { ProjectType } from "./index";
import { motion } from "framer-motion";
import { BsGithub } from "react-icons/bs";
import { HiExternalLink } from "react-icons/hi";
import { client } from "../_app";
import { gql } from "@apollo/client";

export default function Project({ project }: { project: ProjectType }) {
  return (
    <>
      <Head>
        <title>Anas Deyra: Projects - {project.name}</title>
        <meta name="description" content={project.description} />
        <meta property="og:image" content={project.image[0].url} />
        <meta name={project.description} />
        <meta name="twitter:description" content={project.description} />
        <meta
          name="twitter:title"
          content={`Anas Deyra: Projects - ${project.name}`}
        />
        <meta name="twitter:image" content={project.image[0].url} />
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
            href={project.demoLink ?? "/#"}
            rel="noreferrer"
            target={"_blank"}
            whileTap={{ scale: 0.95 }}
            whileHover={{ backgroundColor: "#262626" }}
            className="inline-flex items-center text-white bg-neutral-900 font-bold rounded-full py-2 px-6 "
          >
            Try demo <HiExternalLink className="ml-2" />
          </motion.a>{" "}
          <motion.a
            href={project.githubLink ?? "/#"}
            rel="noreferrer"
            target={"_blank"}
            whileTap={{ scale: 0.95 }}
            whileHover={{ backgroundColor: "#262626" }}
            className="inline-flex items-center text-white bg-neutral-900 font-bold rounded-full py-2 px-6 "
          >
            Source <BsGithub className="ml-2" />
          </motion.a>
        </div>
        <Carousel images={project.image} />
        <h3 className="mt-8 mb-12 text-md md:text-xl font-medium text-start ">
          {project.description}
        </h3>
      </div>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await client.query<{ projects: { slug: string }[] }>({
    query: gql`
      query Projects {
        projects {
          slug
        }
      }
    `,
  });
  const slugs = data.projects.map(({ slug }) => ({ params: { slug } }));
  return { paths: slugs, fallback: "blocking" };
};

export const getStaticProps: GetStaticProps<
  { project: ProjectType },
  { slug: string },
  any
> = async ({ params }) => {
  if (!params || !params.slug) return { notFound: true };
  const {
    data: { project },
  } = await client.query<{ project: ProjectType }>({
    query: gql`
      query MyQuery($slug: String!) {
        project(where: { slug: $slug }) {
          demoLink
          description
          githubLink
          id
          name
          image {
            url
          }
          tags
          slug
        }
      }
    `,
    variables: { slug: params.slug },
  });

  return { props: { project } };
};
