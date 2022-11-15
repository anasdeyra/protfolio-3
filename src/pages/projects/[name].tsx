import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import Carousel from "../../components/Carousel";
import PROJECTS, { ProjectType } from "../../projects";

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
        <h2 className="mt-4 mb-12 text-lg md:text-2xl font-bold text-center text-neutral-600">
          {project.slug}
        </h2>
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
