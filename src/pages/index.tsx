import { GetStaticProps, InferGetStaticPropsType } from "next";
import AboutSection from "../components/AboutSection";
import ContactSection from "../components/ContactSection";
import Hero from "../components/Hero";
import ProjectsSection from "../components/ProjectsSection";
import SkillsSection from "../components/SkillsSection";
import WorkBanner from "../components/WorkBanner";
import { client } from "./_app";
import { gql } from "@apollo/client";

export default function Home({
  aboutSection,
  heroSection,
  skillsSection,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div className="flex flex-col gap-52 max-md:gap-40 text-center max-md:mx-4 max-lg:mx-16 mx-40 max-xl:mx-24 text-neutral-900 mb-16">
      <Hero {...heroSection} />
      <ProjectsSection />
      <WorkBanner />
      <AboutSection {...aboutSection} />
      <SkillsSection {...skillsSection} />
      <ContactSection />
    </div>
  );
}

export const getStaticProps: GetStaticProps<{
  aboutSection: AboutReturn;
  heroSection: HeroReturn;
  skillsSection: SkillsReturn;
}> = async () => {
  const { data: aboutSection } = await client.query<AboutReturn>({
    query: gql`
      query MyQuery {
        aboutSection(where: { id: "clium9e3672ff0bw4y7pmxn5f" }) {
          about
          experience {
            event {
              body
              stage
              title
            }
          }
          education {
            event {
              title
              timeStamp
              body
            }
          }
          work {
            event {
              timeStamp
              title
              body
            }
          }
        }
      }
    `,
  });

  const { data: heroSection } = await client.query<HeroReturn>({
    query: gql`
      query MyQuery {
        heroSection(where: { id: "cliefndpy068h0bukxydpg4ia" }) {
          heading
          subHeading
        }
      }
    `,
  });
  const { data: skillsSection } = await client.query<SkillsReturn>({
    query: gql`
      query MyQuery {
        skills {
          name
          tags {
            name
          }
        }
      }
    `,
  });

  return {
    props: { aboutSection, heroSection, skillsSection },
    revalidate: 60 * 60 * 24,
  };
};

export interface AboutReturn {
  aboutSection: {
    about: string;
    experience: {
      event: {
        body: string;
        timeStamp: string;
        title: string;
      };
    }[];
    education: {
      event: {
        title: string;
        timeStamp: string;
        body: string;
      };
    }[];
    work: {
      event: {
        timeStamp: string;
        title: string;
        body: string;
      };
    }[];
  };
}

export interface HeroReturn {
  heroSection: {
    heading: string;
    subHeading: string;
  };
}

export interface SkillsReturn {
  skills: {
    name: string;
    tags: {
      name: string;
    }[];
  }[];
}
